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
  'icab-v3'
].sort();

// -------------------------------------------------------------
// Test 1: Validate all JSON files in data/
// -------------------------------------------------------------
console.log('Test 1: Validating JSON syntax and schemas in data/...');
const jsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json')).sort();
assert.strictEqual(jsonFiles.length, 20, `Expected exactly 20 JSON datasets, found ${jsonFiles.length}`);

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
  assert.ok(data.routes, `${file} missing required top-level property: routes`);
  assert.ok(Object.keys(data.routes).length > 0, `${file} must contain at least one route`);

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
      });
    });
  });
});
console.log(`✓ All 20 JSON files passed structural schema verification.`);

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
  { hash: '#icab', expected: { qualId: 'icab', routeId: 'grad', nodeId: null } },
  { hash: '#icab-grad', expected: { qualId: 'icab', routeId: 'grad', nodeId: null } },
  { hash: '#icab-hsc', expected: { qualId: 'icab', routeId: 'hsc', nodeId: null } },
  { hash: '#icab-grad/c1', expected: { qualId: 'icab', routeId: 'grad', nodeId: 'c1' } },
  { hash: '#icab/c1', expected: { qualId: 'icab', routeId: 'grad', nodeId: 'c1' } },
  { hash: '#acca', expected: { qualId: 'acca', routeId: 'standard', nodeId: null } },
  { hash: '#acca/ac1', expected: { qualId: 'acca', routeId: 'standard', nodeId: 'ac1' } },
  { hash: '#icab-it-labs', expected: { qualId: 'icab-it-labs', routeId: 'all', nodeId: null } },
  { hash: '#icab-it-labs-cl_labs', expected: { qualId: 'icab-it-labs', routeId: 'cl_labs', nodeId: null } },
  { hash: '#icab-it-labs/lab-cl-1', expected: { qualId: 'icab-it-labs', routeId: 'all', nodeId: 'lab-cl-1' } },
  { hash: '#icab-c1', expected: { qualId: 'icab-c1', routeId: 'all', nodeId: null } },
  { hash: '#icab-c1/c1-s1-n1', expected: { qualId: 'icab-c1', routeId: 'all', nodeId: 'c1-s1-n1' } },
  { hash: '#icab-p7', expected: { qualId: 'icab-p7', routeId: 'all', nodeId: null } },
  { hash: '#icab-p7/p7-s2-n1', expected: { qualId: 'icab-p7', routeId: 'all', nodeId: 'p7-s2-n1' } },
  { hash: '#icab-v3', expected: { qualId: 'icab-v3', routeId: 'all', nodeId: null } }
];

testCases.forEach(({ hash, expected }) => {
  const parsed = router.parseHash(hash);
  assert.ok(parsed, `Failed to parse hash: ${hash}`);
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
  { query: 'acca', expectedRoadmap: 'acca' }
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

console.log('\n====================================================');
console.log('   ALL VERIFICATION GATES PASSED CLEANLY (100%)     ');
console.log('====================================================\n');
