const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== VERIFYING SEGMENT 1 DATA ARCHITECTURE & SCHEMAS ===');

const dataDir = path.join(__dirname, '..', 'data');

// 1. Verify data/icab-it-labs.json
console.log('Test 1: Validating data/icab-it-labs.json...');
const itLabsRaw = fs.readFileSync(path.join(dataDir, 'icab-it-labs.json'), 'utf8');
const itLabs = JSON.parse(itLabsRaw);

assert.strictEqual(itLabs.id, 'icab-it-labs', 'Dataset id must be icab-it-labs');
assert.strictEqual(itLabs.title, 'ICAB IT Practical Labs', 'Dataset title mismatch');
assert.strictEqual(itLabs.region, 'Bangladesh', 'Region mismatch');
assert.strictEqual(itLabs.defaultRoute, 'all', 'defaultRoute must be all');
assert.ok(itLabs.parentRoadmap, 'parentRoadmap must exist');
assert.strictEqual(itLabs.parentRoadmap.id, 'icab', 'parentRoadmap.id must be icab');
assert.strictEqual(itLabs.parentRoadmap.returnHash, 'icab-grad', 'parentRoadmap.returnHash must be icab-grad');

assert.ok(itLabs.routes.all, 'Route all must exist');
assert.ok(itLabs.routes.cl_labs, 'Route cl_labs must exist');
assert.ok(itLabs.routes.pl_labs, 'Route pl_labs must exist');

const allStages = itLabs.routes.all.stages;
assert.strictEqual(allStages.length, 2, 'Route all must have 2 stages');
assert.strictEqual(allStages[0].id, 'cl-practical-labs', 'Stage 1 id must be cl-practical-labs');
assert.strictEqual(allStages[1].id, 'pl-practical-labs', 'Stage 2 id must be pl-practical-labs');

const clNodes = allStages[0].nodes;
const plNodes = allStages[1].nodes;

assert.deepStrictEqual(clNodes.map(n => n.id), ['lab-cl-1', 'lab-cl-2'], 'CL nodes mismatch');
assert.deepStrictEqual(plNodes.map(n => n.id), ['lab-pl-1', 'lab-pl-2', 'lab-pl-3'], 'PL nodes mismatch');

// Verify route filtering
assert.deepStrictEqual(itLabs.routes.cl_labs.stages.map(s => s.id), ['cl-practical-labs']);
assert.deepStrictEqual(itLabs.routes.cl_labs.stages[0].nodes.map(n => n.id), ['lab-cl-1', 'lab-cl-2']);
assert.deepStrictEqual(itLabs.routes.pl_labs.stages.map(s => s.id), ['pl-practical-labs']);
assert.deepStrictEqual(itLabs.routes.pl_labs.stages[0].nodes.map(n => n.id), ['lab-pl-1', 'lab-pl-2', 'lab-pl-3']);

// Check each node fields
const allNodes = [...clNodes, ...plNodes];
allNodes.forEach(node => {
  assert.strictEqual(node.category, 'Training', `${node.id} category must be Training`);
  assert.ok(node.duration && node.duration.length > 0, `${node.id} duration missing`);
  assert.ok(Array.isArray(node.tools) && node.tools.length > 0, `${node.id} tools missing`);
  assert.ok(Array.isArray(node.competencies) && node.competencies.length > 0, `${node.id} competencies missing`);
  assert.ok(Array.isArray(node.checklists) && node.checklists.length > 0, `${node.id} checklists missing`);
  assert.ok(node.description && node.description.length > 0, `${node.id} description missing`);
});
console.log('✓ data/icab-it-labs.json passed all structural and schema checks.');

// 2. Verify data/icab.json
console.log('Test 2: Validating data/icab.json...');
const icabRaw = fs.readFileSync(path.join(dataDir, 'icab.json'), 'utf8');
assert.ok(!icabRaw.includes('embeddedLabs'), 'data/icab.json must NOT contain embeddedLabs');

const icab = JSON.parse(icabRaw);
['grad', 'hsc', 'pas'].forEach(routeId => {
  const route = icab.routes[routeId];
  assert.ok(route, `Route ${routeId} must exist`);
  
  // Find c7
  let c7Node = null;
  let p7Node = null;
  route.stages.forEach(stage => {
    stage.nodes.forEach(node => {
      if (node.id === 'c7') c7Node = node;
      if (node.id === 'p7') p7Node = node;
    });
  });
  
  assert.ok(c7Node, `c7 must exist in route ${routeId}`);
  assert.strictEqual(c7Node.format, 'Computer-Based Assessment (Objective / Scenario)', `c7 format in ${routeId} mismatch`);
  assert.ok(c7Node.linkedRoadmaps && c7Node.linkedRoadmaps.length === 1, `c7 linkedRoadmaps in ${routeId} missing`);
  assert.strictEqual(c7Node.linkedRoadmaps[0].id, 'icab-it-labs', `c7 linkedRoadmaps id in ${routeId} mismatch`);
  assert.strictEqual(c7Node.linkedRoadmaps[0].route, 'cl_labs', `c7 linkedRoadmaps route in ${routeId} mismatch`);
  assert.strictEqual(c7Node.linkedRoadmaps[0].targetStageId, 'cl-practical-labs', `c7 linkedRoadmaps targetStageId in ${routeId} mismatch`);
  assert.ok(!c7Node.embeddedLabs, `c7 in ${routeId} must not have embeddedLabs`);

  assert.ok(p7Node, `p7 must exist in route ${routeId}`);
  assert.strictEqual(p7Node.format, 'Written & IS Audit Technical Paper', `p7 format in ${routeId} mismatch`);
  assert.ok(p7Node.linkedRoadmaps && p7Node.linkedRoadmaps.length === 1, `p7 linkedRoadmaps in ${routeId} missing`);
  assert.strictEqual(p7Node.linkedRoadmaps[0].id, 'icab-it-labs', `p7 linkedRoadmaps id in ${routeId} mismatch`);
  assert.strictEqual(p7Node.linkedRoadmaps[0].route, 'pl_labs', `p7 linkedRoadmaps route in ${routeId} mismatch`);
  assert.strictEqual(p7Node.linkedRoadmaps[0].targetStageId, 'pl-practical-labs', `p7 linkedRoadmaps targetStageId in ${routeId} mismatch`);
  assert.ok(!p7Node.embeddedLabs, `p7 in ${routeId} must not have embeddedLabs`);
});
console.log('✓ data/icab.json passed all structural and linkedRoadmaps checks.');

// 3. Verify data/roadmaps.js bundle
console.log('Test 3: Validating bundled data/roadmaps.js...');
global.window = {};
require(path.join(dataDir, 'roadmaps.js'));

assert.ok(window.ROADMAP_DATA, 'window.ROADMAP_DATA must exist');
const bundledKeys = Object.keys(window.ROADMAP_DATA).sort();
assert.deepStrictEqual(bundledKeys, ['acca', 'icab', 'icab-it-labs'], 'Bundled keys mismatch');
assert.strictEqual(window.ROADMAP_DATA['icab-it-labs'].id, 'icab-it-labs');
assert.strictEqual(window.ROADMAP_DATA['icab'].id, 'icab');
assert.strictEqual(window.ROADMAP_DATA['acca'].id, 'acca');
assert.ok(window.ROADMAP_LOADER, 'window.ROADMAP_LOADER must exist');
assert.strictEqual(typeof window.ROADMAP_LOADER.get, 'function', 'window.ROADMAP_LOADER.get must be a function');
console.log('✓ data/roadmaps.js passed all bundling and loader checks.');

console.log('=== ALL SEGMENT 1 VERIFICATION TESTS PASSED SUCCESSFULLY! ===');
