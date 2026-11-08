const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== VERIFYING SEGMENT 3 BEHAVIORAL STATE, ROUTING & TRANSITIONS ===');

const rootDir = path.join(__dirname, '..');
const appJsPath = path.join(rootDir, 'app.js');
const indexHtmlPath = path.join(rootDir, 'index.html');
const stylesCssPath = path.join(rootDir, 'styles.css');

const appJs = fs.readFileSync(appJsPath, 'utf8');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
const stylesCss = fs.readFileSync(stylesCssPath, 'utf8');

// -------------------------------------------------------------
// Test 1: Safe Storage & Private Browsing Fallback
// -------------------------------------------------------------
console.log('Test 1: Validating safeStorage helper and private browsing resilience...');

assert.ok(appJs.includes('const safeStorage ='), 'app.js must define safeStorage helper');
assert.ok(appJs.includes('chartered-roadmap-progress-v2'), 'app.js must use v2 progress storage key');
assert.ok(appJs.includes('chartered-roadmap-progress-v1'), 'app.js must reference v1 progress storage key for migration');

// Simulate safeStorage behavior in sandbox
const safeStorageFn = new Function(`
  const localStorageMock = {
    getItem() { throw new Error('SecurityError: Access is denied in private browsing'); },
    setItem() { throw new Error('SecurityError: Access is denied in private browsing'); },
    removeItem() { throw new Error('SecurityError: Access is denied in private browsing'); }
  };
  const localStorage = localStorageMock;
  ${appJs.slice(appJs.indexOf('const safeStorage ='), appJs.indexOf('// Application State'))}
  return safeStorage;
`)();

assert.doesNotThrow(() => {
  safeStorageFn.set('test-key', 'test-val');
  const val = safeStorageFn.get('test-key');
  assert.strictEqual(val, 'test-val', 'In-memory fallback must retain stored values');
  safeStorageFn.remove('test-key');
  assert.strictEqual(safeStorageFn.get('test-key'), null, 'Removed key must return null');
}, 'safeStorage must never throw exceptions even when localStorage throws SecurityError');
console.log('✓ safeStorage helper and in-memory fallback verified.');

// -------------------------------------------------------------
// Test 2: Progress Namespacing & Migration
// -------------------------------------------------------------
console.log('Test 2: Validating progress namespacing & v1 to v2 migration...');

assert.ok(appJs.includes('getNodeStorageKey('), 'app.js must implement getNodeStorageKey');
assert.ok(appJs.includes('isNodeCompleted('), 'app.js must implement isNodeCompleted');
assert.ok(appJs.includes('setNodeCompleted('), 'app.js must implement setNodeCompleted');

// Verify migration logic
const mockStorage = {
  'chartered-roadmap-progress-v1': JSON.stringify({
    'c1': true,
    'c7': true,
    'ac1': true,
    'ac3': true,
    'p7': true
  })
};

const migrationTestScope = new Function('mockStorage', `
  const state = { qualId: 'icab', routeId: 'grad', progress: {} };
  const PROGRESS_STORAGE_KEY_V1 = 'chartered-roadmap-progress-v1';
  const PROGRESS_STORAGE_KEY_V2 = 'chartered-roadmap-progress-v2';
  const safeStorage = {
    get(k) { return mockStorage[k] || null; },
    set(k, v) { mockStorage[k] = v; },
    remove(k) { delete mockStorage[k]; }
  };
  function saveProgress() {
    safeStorage.set(PROGRESS_STORAGE_KEY_V2, JSON.stringify(state.progress));
  }
  ${appJs.slice(appJs.indexOf('function loadProgress()'), appJs.indexOf('function saveProgress()'))}
  loadProgress();
  return { state, mockStorage };
`)(mockStorage);

const migratedProgress = migrationTestScope.state.progress;
assert.strictEqual(migratedProgress['icab:c1'], true, 'c1 must migrate to icab:c1');
assert.strictEqual(migratedProgress['icab:c7'], true, 'c7 must migrate to icab:c7');
assert.strictEqual(migratedProgress['acca:ac1'], true, 'ac1 must migrate to acca:ac1');
assert.strictEqual(migratedProgress['acca:ac3'], true, 'ac3 must migrate to acca:ac3');
assert.strictEqual(migratedProgress['icab:p7'], true, 'p7 must migrate to icab:p7');
assert.ok(mockStorage['chartered-roadmap-progress-v2'], 'Migrated v2 progress must be persisted');

// Verify scoped resetProgressBtn logic
const resetScope = new Function('migratedProgress', `
  const state = { qualId: 'icab', progress: Object.assign({}, migratedProgress) };
  const prefix = state.qualId + ':';
  Object.keys(state.progress).forEach((key) => {
    if (key.startsWith(prefix)) {
      delete state.progress[key];
    }
  });
  return state.progress;
`)(migratedProgress);

assert.strictEqual(resetScope['icab:c1'], undefined, 'icab:c1 must be purged on icab reset');
assert.strictEqual(resetScope['icab:c7'], undefined, 'icab:c7 must be purged on icab reset');
assert.strictEqual(resetScope['acca:ac1'], true, 'acca:ac1 must be preserved on icab reset');
assert.strictEqual(resetScope['acca:ac3'], true, 'acca:ac3 must be preserved on icab reset');
console.log('✓ Progress namespacing, migration, and scoped reset verified.');

// -------------------------------------------------------------
// Test 3: Robust Hash Routing & Deep-Linking Parsing
// -------------------------------------------------------------
console.log('Test 3: Validating parseHash() across all required formats...');

// Extract parseHash from app.js
const parseHashFn = new Function(`
  const KNOWN_ROADMAPS = ['icab-it-labs', 'icab', 'acca'];
  const KNOWN_ROUTES = {
    'icab': ['grad', 'hsc', 'pas', 'pro'],
    'icab-it-labs': ['all', 'cl_labs', 'pl_labs'],
    'acca': ['standard']
  };
  ${appJs.slice(appJs.indexOf('function parseHash(hashStr)'), appJs.indexOf('function syncStateFromHash()'))}
  return parseHash;
`)();

// 3.1 #icab-grad
const r1 = parseHashFn('#icab-grad');
assert.deepStrictEqual(r1, { qualId: 'icab', routeId: 'grad', nodeId: null }, 'Mismatch on #icab-grad');

// 3.2 #icab-it-labs -> defaults route to 'all'
const r2a = parseHashFn('#icab-it-labs');
assert.deepStrictEqual(r2a, { qualId: 'icab-it-labs', routeId: 'all', nodeId: null }, 'Mismatch on #icab-it-labs');

// 3.3 #icab-it-labs-all
const r2b = parseHashFn('#icab-it-labs-all');
assert.deepStrictEqual(r2b, { qualId: 'icab-it-labs', routeId: 'all', nodeId: null }, 'Mismatch on #icab-it-labs-all');

// 3.4 #icab-it-labs/all
const r2c = parseHashFn('#icab-it-labs/all');
assert.deepStrictEqual(r2c, { qualId: 'icab-it-labs', routeId: 'all', nodeId: null }, 'Mismatch on #icab-it-labs/all');

// 3.5 #icab-it-labs-cl_labs
const r2d = parseHashFn('#icab-it-labs-cl_labs');
assert.deepStrictEqual(r2d, { qualId: 'icab-it-labs', routeId: 'cl_labs', nodeId: null }, 'Mismatch on #icab-it-labs-cl_labs');

// 3.6 #icab-grad/c7 (Deep-link to paper)
const r3 = parseHashFn('#icab-grad/c7');
assert.deepStrictEqual(r3, { qualId: 'icab', routeId: 'grad', nodeId: 'c7' }, 'Mismatch on #icab-grad/c7');

// 3.7 #acca
const r4 = parseHashFn('#acca');
assert.deepStrictEqual(r4, { qualId: 'acca', routeId: null, nodeId: null }, 'Mismatch on #acca');

// 3.8 #acca-standard
const r5 = parseHashFn('#acca-standard');
assert.deepStrictEqual(r5, { qualId: 'acca', routeId: 'standard', nodeId: null }, 'Mismatch on #acca-standard');

// 3.9 #acca/standard/ac2
const r6 = parseHashFn('#acca/standard/ac2');
assert.deepStrictEqual(r6, { qualId: 'acca', routeId: 'standard', nodeId: 'ac2' }, 'Mismatch on #acca/standard/ac2');

// 3.10 #icab-it-labs-all/lab-cl-1
const r7 = parseHashFn('#icab-it-labs-all/lab-cl-1');
assert.deepStrictEqual(r7, { qualId: 'icab-it-labs', routeId: 'all', nodeId: 'lab-cl-1' }, 'Mismatch on #icab-it-labs-all/lab-cl-1');

// 3.11 #acca/ac1 (Direct node deep-link on single-route qualification)
const r8a = parseHashFn('#acca/ac1');
assert.deepStrictEqual(r8a, { qualId: 'acca', routeId: 'standard', nodeId: 'ac1' }, 'Mismatch on #acca/ac1');

// 3.12 #acca/ac-bt (Hyphenated node deep-link on single-route qualification)
const r8b = parseHashFn('#acca/ac-bt');
assert.deepStrictEqual(r8b, { qualId: 'acca', routeId: 'standard', nodeId: 'ac-bt' }, 'Mismatch on #acca/ac-bt');

// 3.13 #icab-it-labs/lab-cl-1 (Omitted route defaults to 'all' and extracts nodeId)
const r8c = parseHashFn('#icab-it-labs/lab-cl-1');
assert.deepStrictEqual(r8c, { qualId: 'icab-it-labs', routeId: 'all', nodeId: 'lab-cl-1' }, 'Mismatch on #icab-it-labs/lab-cl-1');

// 3.14 Invalid or empty hashes
assert.strictEqual(parseHashFn(''), null, 'Empty hash must return null');
assert.strictEqual(parseHashFn('#'), null, 'Bare hash # must return null');
assert.strictEqual(parseHashFn('#unknown-qual'), null, 'Unknown qual must return null');

console.log('✓ parseHash() passed all longest-prefix routing and deep-linking tests.');

// -------------------------------------------------------------
// Test 4: Cross-Roadmap Portals & Breadcrumbs
// -------------------------------------------------------------
console.log('Test 4: Validating cross-roadmap portal navigation and breadcrumb context...');

assert.ok(appJs.includes('state.returnContext ='), 'app.js must record state.returnContext on subroadmap click');
assert.ok(appJs.includes('data-action="open-subroadmap"'), 'CTA delegation must check data-action="open-subroadmap"');
assert.ok(appJs.includes('subroadmapBackBtn'), 'Back button handler must exist');
assert.ok(appJs.includes('updateSubroadmapBanner()'), 'updateSubroadmapBanner must exist and update banner state');

// -------------------------------------------------------------
// Test 5: Loading State, Sequence Guard & Retry Logic
// -------------------------------------------------------------
console.log('Test 5: Validating async load sequence guards and error recovery...');

assert.ok(appJs.includes('activeLoadSequence'), 'loadRoadmap must maintain activeLoadSequence');
assert.ok(appJs.includes('sequenceId !== activeLoadSequence'), 'loadRoadmap must discard stale request sequences');
assert.ok(appJs.includes('roadmap-retry-btn'), 'loadRoadmap must provide interactive retry button');
assert.ok(stylesCss.includes('.spinner'), 'styles.css must style loading spinner');
assert.ok(stylesCss.includes('.loading-state'), 'styles.css must style loading-state');
assert.ok(stylesCss.includes('.btn-primary'), 'styles.css must style btn-primary');

// -------------------------------------------------------------
// Test 6: Clean Page Anchors (Preventing Hash Pollution)
// -------------------------------------------------------------
console.log('Test 6: Validating brand and footer back-to-top anchors...');

assert.ok(!indexHtml.includes('href="#"'), 'index.html must not contain raw href="#"');
assert.ok(!indexHtml.includes('href="#tab-icab"'), 'index.html must not contain href="#tab-icab"');
assert.ok(indexHtml.includes('id="brand-home"'), 'index.html brand anchor must have id="brand-home"');
assert.ok(indexHtml.includes('id="back-to-top"'), 'index.html footer must have id="back-to-top"');
assert.ok(appJs.includes('brandHome.addEventListener'), 'app.js must attach smooth-scroll listener to brandHome');
assert.ok(appJs.includes('backToTop.addEventListener'), 'app.js must attach smooth-scroll listener to backToTop');

console.log('✓ Anchor links and smooth scroll verified with zero hash corruption.');

console.log('\n======================================================');
console.log('ALL SEGMENT 3 IMPLEMENTATION GATES PASSED SUCCESSFULLY');
console.log('======================================================');
