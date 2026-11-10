/**
 * Unified Test Suite for Chartered Roadmap
 * Validates all datasets, bundling, hash routing, search engine,
 * deep linking, and progress storage integrity.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('====================================================');
console.log('   CHARTERED ROADMAP - UNIFIED TEST VERIFICATION    ');
console.log('====================================================\n');

const dataDir = path.join(__dirname, '..', 'data');
const EXPECTED_ROADMAP_KEYS = [
  'acca',
  'caia',
  'cdpse',
  'cfa',
  'cfe',
  'cfp',
  'cgeit',
  'cgma',
  'chfc',
  'cia',
  'cipa',
  'cisa',
  'cissp',
  'cma',
  'cmt',
  'cpa',
  'crisc',
  'crma',
  'csaa',
  'ctp',
  'erp',
  'fpac',
  'frm',
  'icab',
  'icab-c1',
  'icab-c2',
  'icab-c3',
  'icab-c4',
  'icab-c5',
  'icab-c6',
  'icab-c7',
  'icab-it-labs',
  'icab-p1',
  'icab-p2',
  'icab-p3',
  'icab-p4',
  'icab-p5',
  'icab-p6',
  'icab-p7',
  'icab-v1',
  'icab-v2',
  'icab-v3',
  'icma',
  'icmab',
  'icsb',
  'prm'
].sort();

const VALID_CATEGORIES = new Set([
  'Admin',
  'Exam',
  'Experience',
  'Ethics',
  'Training',
  'Skill',
  'Milestone',
  'Coursework',
  'Compliance',
  'Pathway'
]);

// -------------------------------------------------------------
// Test 1: Validate all JSON files in data/
// -------------------------------------------------------------
console.log('Test 1: Validating JSON syntax and schemas in data/...');
const jsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json')).sort();
assert.strictEqual(jsonFiles.length, 46, `Expected exactly 46 JSON datasets, found ${jsonFiles.length}`);

jsonFiles.forEach(file => {
  const filePath = path.join(dataDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    assert.fail(`Invalid JSON in ${file}: ${err.message}`);
  }

  assert.ok(data.id, `${file} missing required top-level property: id`);
  assert.ok(data.title, `${file} missing required top-level property: title`);
  assert.ok(data.defaultRoute, `${file} missing required top-level property: defaultRoute`);
  assert.ok(data.routes, `${file} missing required top-level property: routes`);
  assert.ok(data.routes[data.defaultRoute], `${file} defaultRoute "${data.defaultRoute}" not found in routes`);
  assert.ok(Object.keys(data.routes).length > 0, `${file} must contain at least one route`);

  const isSubroadmap = Boolean(data.parentRoadmap);

  Object.entries(data.routes).forEach(([rKey, route]) => {
    assert.ok(route.stages, `${file} route ${rKey} missing stages`);
    assert.ok(Array.isArray(route.stages), `${file} route ${rKey} stages must be an array`);
    assert.ok(route.stages.length > 0, `${file} route ${rKey} stages array is empty`);

    route.stages.forEach((stage, sIdx) => {
      assert.ok(stage.id, `${file} stage ${sIdx} missing id`);
      assert.ok(stage.nodes, `${file} stage ${stage.id} missing nodes`);
      assert.ok(Array.isArray(stage.nodes), `${file} stage ${stage.id} nodes must be an array`);
      assert.ok(stage.nodes.length > 0, `${file} stage ${stage.id} has no nodes`);

      stage.nodes.forEach(node => {
        assert.ok(node.id, `${file} stage ${stage.id} node missing id`);
        assert.ok(node.name, `${file} node ${node.id} missing name`);
        assert.ok(node.category, `${file} node ${node.id} missing category`);
        if (!isSubroadmap) {
          assert.ok(VALID_CATEGORIES.has(node.category), `${file} node "${node.id}" has invalid category "${node.category}"`);
        }
      });
    });
  });
});
console.log(`✓ All 46 JSON files passed structural schema verification.`);

// -------------------------------------------------------------
// Test 2: Verify data/icab.json links to all 17 individual papers
// -------------------------------------------------------------
console.log('\nTest 2: Verifying data/icab.json cross-links to all 17 individual papers...');
const icab = JSON.parse(fs.readFileSync(path.join(dataDir, 'icab.json'), 'utf8'));
const requiredPapers = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'v1', 'v2', 'v3'];

['grad', 'hsc', 'pas'].forEach(routeKey => {
  const route = icab.routes[routeKey];
  assert.ok(route, `ICAB route ${routeKey} missing`);
  
  const nodesFound = {};
  route.stages.forEach(stage => {
    stage.nodes.forEach(node => {
      if (requiredPapers.includes(node.id)) {
        nodesFound[node.id] = node;
      }
    });
  });

  requiredPapers.forEach(paperId => {
    const node = nodesFound[paperId];
    assert.ok(node, `Paper ${paperId} missing in route ${routeKey}`);
    assert.ok(Array.isArray(node.linkedRoadmaps), `Paper ${paperId} in ${routeKey} missing linkedRoadmaps`);
    
    const paperLink = node.linkedRoadmaps.find(l => l.id === `icab-${paperId}`);
    assert.ok(paperLink, `Paper ${paperId} in ${routeKey} does not link to icab-${paperId}`);
    assert.strictEqual(paperLink.route, 'all', `Paper ${paperId} link route must be 'all'`);
  });

  // Check C7 and P7 have both paper tracker AND practical IT labs
  const c7Node = nodesFound['c7'];
  assert.strictEqual(c7Node.linkedRoadmaps.length, 2, `C7 in ${routeKey} must have 2 linked roadmaps (topic + labs)`);
  assert.ok(c7Node.linkedRoadmaps.some(l => l.id === 'icab-c7'), `C7 in ${routeKey} missing icab-c7`);
  assert.ok(c7Node.linkedRoadmaps.some(l => l.id === 'icab-it-labs'), `C7 in ${routeKey} missing icab-it-labs`);

  const p7Node = nodesFound['p7'];
  assert.strictEqual(p7Node.linkedRoadmaps.length, 2, `P7 in ${routeKey} must have 2 linked roadmaps (topic + labs)`);
  assert.ok(p7Node.linkedRoadmaps.some(l => l.id === 'icab-p7'), `P7 in ${routeKey} missing icab-p7`);
  assert.ok(p7Node.linkedRoadmaps.some(l => l.id === 'icab-it-labs'), `P7 in ${routeKey} missing icab-it-labs`);
});
console.log('✓ data/icab.json correctly cross-links all 17 individual study trackers and labs.');

// -------------------------------------------------------------
// Test 3: Verify roadmaps.js bundle
// -------------------------------------------------------------
console.log('\nTest 3: Validating bundled data/roadmaps.js...');
global.window = {
  addEventListener: () => {},
  removeEventListener: () => {}
};
require(path.join(dataDir, 'roadmaps.js'));

assert.ok(window.ROADMAP_DATA, 'window.ROADMAP_DATA must exist');
const bundledKeys = Object.keys(window.ROADMAP_DATA).sort();
assert.deepStrictEqual(bundledKeys, EXPECTED_ROADMAP_KEYS, 'Bundled datasets mismatch');
console.log(`✓ data/roadmaps.js successfully bundles all ${EXPECTED_ROADMAP_KEYS.length} datasets.`);

// -------------------------------------------------------------
// Test 4: Verify Hash Router & Parsing
// -------------------------------------------------------------
console.log('\nTest 4: Verifying URL Hash Routing and Deep Linking...');
// Mock browser environment for app.js
global.document = {
  documentElement: {
    setAttribute: () => {},
    getAttribute: () => 'light'
  },
  body: {
    classList: { add: () => {}, remove: () => {} }
  },
  getElementById: (id) => ({
    id,
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    addEventListener: () => {},
    setAttribute: () => {},
    removeAttribute: () => {},
    querySelectorAll: () => [],
    querySelector: () => null,
    style: {}
  }),
  querySelector: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {}
};
global.location = { hash: '#icab-grad' };
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

require(path.join(__dirname, '..', 'app.js'));
const router = window.CHARTERED_ROUTER;

assert.ok(router, 'window.CHARTERED_ROUTER must be exposed');

// Test router hash parsing
const testCases = [
  { hash: '#icab', expected: { view: 'roadmap', qualId: 'icab', routeId: 'grad', nodeId: null } },
  { hash: '#icab-grad', expected: { view: 'roadmap', qualId: 'icab', routeId: 'grad', nodeId: null } },
  { hash: '#icab-hsc', expected: { view: 'roadmap', qualId: 'icab', routeId: 'hsc', nodeId: null } },
  { hash: '#icab-grad/c1', expected: { view: 'roadmap', qualId: 'icab', routeId: 'grad', nodeId: 'c1' } },
  { hash: '#icab/c1', expected: { view: 'roadmap', qualId: 'icab', routeId: 'grad', nodeId: 'c1' } },
  { hash: '#acca', expected: { view: 'roadmap', qualId: 'acca', routeId: 'standard', nodeId: null } },
  { hash: '#acca/ac1', expected: { view: 'roadmap', qualId: 'acca', routeId: 'standard', nodeId: 'ac1' } },
  { hash: '#icab-it-labs', expected: { view: 'roadmap', qualId: 'icab-it-labs', routeId: 'all', nodeId: null } },
  { hash: '#icab-it-labs-cl_labs', expected: { view: 'roadmap', qualId: 'icab-it-labs', routeId: 'cl_labs', nodeId: null } },
  { hash: '#icab-it-labs/lab-cl-1', expected: { view: 'roadmap', qualId: 'icab-it-labs', routeId: 'all', nodeId: 'lab-cl-1' } },
  { hash: '#icab-c1', expected: { view: 'roadmap', qualId: 'icab-c1', routeId: 'all', nodeId: null } },
  { hash: '#icab-c1/c1-s1-n1', expected: { view: 'roadmap', qualId: 'icab-c1', routeId: 'all', nodeId: 'c1-s1-n1' } },
  { hash: '#icab-p7', expected: { view: 'roadmap', qualId: 'icab-p7', routeId: 'all', nodeId: null } },
  { hash: '#icab-p7/p7-s2-n1', expected: { view: 'roadmap', qualId: 'icab-p7', routeId: 'all', nodeId: 'p7-s2-n1' } },
  { hash: '#icab-v3', expected: { view: 'roadmap', qualId: 'icab-v3', routeId: 'all', nodeId: null } },
  { hash: '#cfa', expected: { view: 'roadmap', qualId: 'cfa', routeId: 'portfolio-mgmt', nodeId: null } },
  { hash: '#cpa', expected: { view: 'roadmap', qualId: 'cpa', routeId: 'core-isc', nodeId: null } },
  { hash: '#cisa', expected: { view: 'roadmap', qualId: 'cisa', routeId: 'standard', nodeId: null } },
  { hash: '#icmab', expected: { view: 'roadmap', qualId: 'icmab', routeId: 'standard', nodeId: null } },
  { hash: '#icsb', expected: { view: 'roadmap', qualId: 'icsb', routeId: 'standard', nodeId: null } },
  { hash: '', expected: { view: 'catalog', qualId: null, routeId: null, nodeId: null } },
  { hash: '#', expected: { view: 'catalog', qualId: null, routeId: null, nodeId: null } },
  { hash: '#home', expected: { view: 'catalog', qualId: null, routeId: null, nodeId: null } },
  { hash: '#catalog', expected: { view: 'catalog', qualId: null, routeId: null, nodeId: null } },
  { hash: '#explore', expected: { view: 'catalog', qualId: null, routeId: null, nodeId: null } }
];

testCases.forEach(({ hash, expected }) => {
  const parsed = router.parseHash(hash);
  assert.ok(parsed, `Failed to parse hash: ${hash}`);
  assert.strictEqual(parsed.view, expected.view, `Hash ${hash}: view mismatch`);
  assert.strictEqual(parsed.qualId, expected.qualId, `Hash ${hash}: qualId mismatch`);
  assert.strictEqual(parsed.routeId, expected.routeId, `Hash ${hash}: routeId mismatch`);
  assert.strictEqual(parsed.nodeId, expected.nodeId, `Hash ${hash}: nodeId mismatch`);
});
console.log(`✓ All ${testCases.length} hash routing test cases passed.`);

// -------------------------------------------------------------
// Test 5: Verify Multi-Dimensional Search Engine
// -------------------------------------------------------------
console.log('\nTest 5: Verifying Search & Command Palette engine...');
const searchTests = [
  { query: 'c1', expectedRoadmap: 'icab-c1' },
  { query: 'tax', expectedRoadmap: 'icab-c5' },
  { query: 'audit', expectedRoadmap: 'icab-p2' },
  { query: 'wacc', expectedRoadmap: 'icab-p4' },
  { query: 'cisa', expectedRoadmap: 'icab-p7' },
  { query: 'quickbooks', expectedRoadmap: 'icab-it-labs' },
  { query: 'acca', expectedRoadmap: 'acca' },
  { query: 'portfolio', expectedRoadmap: 'cfa' },
  { query: 'nasba', expectedRoadmap: 'cpa' },
  { query: 'shari', expectedRoadmap: 'csaa' },
  { query: 'icmab', expectedRoadmap: 'icmab' },
  { query: 'icsb', expectedRoadmap: 'icsb' }
];

searchTests.forEach(({ query, expectedRoadmap }) => {
  const results = router.executeSearch(query, 'all');
  assert.ok(results.length > 0, `Search for "${query}" returned 0 results`);
  const found = results.some(r => r.roadmapId === expectedRoadmap);
  assert.ok(found, `Search for "${query}" did not find expected roadmap ${expectedRoadmap}`);
});
console.log(`✓ All ${searchTests.length} search queries resolved expected roadmap targets.`);

// -------------------------------------------------------------
// Test 6: Verify SafeStorage Namespacing
// -------------------------------------------------------------
console.log('\nTest 6: Verifying SafeStorage composite key isolation...');
const key1 = router.getNodeStorageKey('c1', 'icab');
const key2 = router.getNodeStorageKey('c1-s1-n1', 'icab-c1');
const key3 = router.getNodeStorageKey('lab-cl-1', 'icab-it-labs');

assert.strictEqual(key1, 'icab:c1');
assert.strictEqual(key2, 'icab-c1:c1-s1-n1');
assert.strictEqual(key3, 'icab-it-labs:lab-cl-1');
console.log('✓ Namespacing successfully isolates progress across qualifications and sub-roadmaps.');

// -------------------------------------------------------------
// Test 7: Verify Mobile Optimization & Responsive Integrity
// -------------------------------------------------------------
console.log('\nTest 7: Verifying Mobile Optimization & Responsive Architecture...');
const htmlPath = path.join(__dirname, '..', 'index.html');
const cssPath = path.join(__dirname, '..', 'styles.css');
const appPath = path.join(__dirname, '..', 'app.js');

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const cssContent = fs.readFileSync(cssPath, 'utf8');
const appContent = fs.readFileSync(appPath, 'utf8');

// 1. Viewport Meta tag
assert.ok(
  htmlContent.includes('<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'),
  'index.html missing responsive viewport meta tag with viewport-fit=cover'
);

// 2. Drag handle for mobile bottom sheet
assert.ok(
  htmlContent.includes('class="drawer-drag-handle"'),
  'index.html missing drawer-drag-handle for mobile bottom sheet'
);

// 3. Zero-overflow body and html guards
assert.ok(
  cssContent.includes('max-width: 100vw') && cssContent.includes('overflow-x: hidden'),
  'styles.css missing max-width: 100vw / overflow-x: hidden guards'
);

// 4. Modal open scroll locking
assert.ok(
  cssContent.includes('body.modal-open') && appContent.includes('syncBodyScrollLock'),
  'Missing body.modal-open scroll locking between CSS and JS'
);

// 5. iOS 16px zoom guard on mobile inputs
assert.ok(
  cssContent.includes('font-size: 16px; /* Prevents iOS Safari auto-zoom */') ||
  cssContent.includes('font-size: 16px; /* Prevents iOS auto-zoom */'),
  'styles.css missing 16px font-size protection on mobile inputs'
);

// 6. Safe area insets
assert.ok(
  cssContent.includes('env(safe-area-inset-bottom)'),
  'styles.css missing env(safe-area-inset-bottom) for notched mobile devices'
);

console.log('✓ Mobile viewport meta, zero-overflow guards, bottom sheet, and iOS zoom guards verified.');

// -------------------------------------------------------------
// Test 8: Verify Catalog Hub and Breadcrumbs Architecture
// -------------------------------------------------------------
console.log('\nTest 8: Verifying Catalog Hub & Breadcrumbs Architecture...');
// 1. Verify index.html contains catalog-view and roadmap-view
assert.ok(htmlContent.includes('id="catalog-view"'), 'index.html missing #catalog-view');
assert.ok(htmlContent.includes('id="roadmap-view"'), 'index.html missing #roadmap-view');
assert.ok(htmlContent.includes('id="catalog-search-input"'), 'index.html missing #catalog-search-input');
assert.ok(htmlContent.includes('id="catalog-grid"'), 'index.html missing #catalog-grid');
assert.ok(htmlContent.includes('id="breadcrumb-home-btn"'), 'index.html missing #breadcrumb-home-btn');

// 2. Verify modal retirement: old explore-modal must NOT be in index.html
assert.ok(!htmlContent.includes('id="explore-modal"'), 'index.html must not contain retired #explore-modal');

// 3. Verify ROADMAP_CATALOG metadata integrity & 8-domain taxonomy
const catalogEntries = Object.values(router.ROADMAP_CATALOG);
assert.strictEqual(catalogEntries.length, 46, 'ROADMAP_CATALOG must contain exactly 46 roadmaps');
const domainCounts = {};
catalogEntries.forEach((entry) => {
  assert.ok(entry.id, `Catalog entry missing id: ${JSON.stringify(entry)}`);
  assert.ok(entry.title, `Catalog entry ${entry.id} missing title`);
  assert.ok(entry.code, `Catalog entry ${entry.id} missing code`);
  assert.ok(entry.category, `Catalog entry ${entry.id} missing category`);
  assert.ok(entry.level, `Catalog entry ${entry.id} missing level`);
  assert.ok(entry.domain, `Catalog entry ${entry.id} missing domain`);
  domainCounts[entry.domain] = (domainCounts[entry.domain] || 0) + 1;
});

assert.strictEqual(domainCounts['accounting'], 4, 'accounting domain must have 4 roadmaps');
assert.strictEqual(domainCounts['mgmt-accounting'], 2, 'mgmt-accounting domain must have 2 roadmaps');
assert.strictEqual(domainCounts['finance'], 7, 'finance domain must have 7 roadmaps');
assert.strictEqual(domainCounts['audit-is'], 6, 'audit-is domain must have 6 roadmaps');
assert.strictEqual(domainCounts['risk-fraud'], 5, 'risk-fraud domain must have 5 roadmaps');
assert.strictEqual(domainCounts['islamic'], 2, 'islamic domain must have 2 roadmaps');
assert.strictEqual(domainCounts['statutory-bd'], 2, 'statutory-bd domain must have 2 roadmaps');
assert.strictEqual(domainCounts['papers'], 17, 'papers domain must have 17 roadmaps');
assert.strictEqual(domainCounts['labs'], 1, 'labs domain must have 1 roadmap');

// 4. Verify Accessible Domain Filter Chips in HTML
assert.ok(htmlContent.includes('role="group" aria-label="Filter roadmaps by professional domain"'), 'index.html missing accessible domain filter group');
assert.ok(htmlContent.includes('data-catalog-filter="accounting"'), 'index.html missing accounting filter chip');
assert.ok(htmlContent.includes('data-catalog-filter="finance"'), 'index.html missing finance filter chip');
assert.ok(htmlContent.includes('data-catalog-filter="audit-is"'), 'index.html missing audit-is filter chip');
assert.ok(htmlContent.includes('data-catalog-filter="risk-fraud"'), 'index.html missing risk-fraud filter chip');
assert.ok(htmlContent.includes('data-catalog-filter="islamic"'), 'index.html missing islamic filter chip');
assert.ok(htmlContent.includes('data-catalog-filter="statutory-bd"'), 'index.html missing statutory-bd filter chip');

// 5. Verify router methods
assert.strictEqual(typeof router.showCatalogView, 'function', 'router.showCatalogView must be a function');
assert.strictEqual(typeof router.showRoadmapView, 'function', 'router.showRoadmapView must be a function');
assert.strictEqual(typeof router.handleRoute, 'function', 'router.handleRoute must be a function');
assert.strictEqual(typeof router.renderCatalog, 'function', 'router.renderCatalog must be a function');

console.log('✓ Catalog Hub directory, breadcrumbs navigation, and modal retirement verified.');

console.log('\n====================================================');
console.log('   ALL VERIFICATION GATES PASSED CLEANLY (100%)     ');
console.log('====================================================\n');
