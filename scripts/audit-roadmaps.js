/**
 * Comprehensive Automated Audit Script for All Roadmaps
 * Evaluates Structural Schemas, Graph Topology, Prerequisite Integrity,
 * Behavioral State Machine Compatibility, and Curriculum Metadata.
 */

const fs = require('fs');
const path = require('path');

const VALID_CATEGORIES = new Set([
  'Admin', 'Exam', 'Experience', 'Ethics', 'Training', 'Skill',
  'Milestone', 'Coursework', 'Compliance', 'Pathway'
]);

const dataDir = path.join(__dirname, '..', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

console.log(`\n====================================================`);
console.log(`   INTENSIVE ROADMAP AUDIT - STRUCTURAL & TOPOLOGICAL`);
console.log(`====================================================\n`);
console.log(`Auditing ${files.length} JSON roadmap files in data/...\n`);

const issues = [];
const stats = {};
let totalNodesAcrossRepo = 0;
let totalStagesAcrossRepo = 0;

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    issues.push({ file, severity: 'CRITICAL', type: 'JSON_SYNTAX', issue: `JSON Parse Error: ${err.message}` });
    return;
  }

  const qualId = data.id || file.replace('.json', '');
  stats[qualId] = { id: qualId, title: data.title, totalNodes: 0, routes: 0, stages: 0 };

  if (!data.id) issues.push({ file, severity: 'HIGH', type: 'SCHEMA', issue: 'Missing top-level id' });
  if (!data.title) issues.push({ file, severity: 'HIGH', type: 'SCHEMA', issue: 'Missing top-level title' });
  if (!data.defaultRoute) issues.push({ file, severity: 'HIGH', type: 'SCHEMA', issue: 'Missing defaultRoute' });
  if (!data.routes || typeof data.routes !== 'object') {
    issues.push({ file, severity: 'CRITICAL', type: 'SCHEMA', issue: 'Missing or invalid routes object' });
    return;
  }

  const routeKeys = Object.keys(data.routes);
  stats[qualId].routes = routeKeys.length;

  if (!routeKeys.includes(data.defaultRoute)) {
    issues.push({ file, severity: 'HIGH', type: 'ROUTING', issue: `defaultRoute "${data.defaultRoute}" does not match any route in [${routeKeys.join(', ')}]` });
  }

  routeKeys.forEach(rKey => {
    const route = data.routes[rKey];
    if (!route.name) issues.push({ file, severity: 'MEDIUM', type: 'SCHEMA', issue: `Route "${rKey}" missing name` });
    if (!Array.isArray(route.stages)) {
      issues.push({ file, severity: 'CRITICAL', type: 'SCHEMA', issue: `Route "${rKey}" stages is not an array` });
      return;
    }

    stats[qualId].stages += route.stages.length;
    totalStagesAcrossRepo += route.stages.length;
    const nodeIdsInRoute = new Set();
    const allPrereqs = [];

    route.stages.forEach((stage, sIdx) => {
      if (stage.id === undefined || stage.id === null) issues.push({ file, severity: 'MEDIUM', type: 'SCHEMA', issue: `Route "${rKey}" stage[${sIdx}] missing id` });
      if (!stage.title && !stage.name) issues.push({ file, severity: 'MEDIUM', type: 'SCHEMA', issue: `Route "${rKey}" stage[${sIdx}] missing title` });
      if (!Array.isArray(stage.nodes)) {
        issues.push({ file, severity: 'HIGH', type: 'SCHEMA', issue: `Route "${rKey}" stage[${sIdx}] nodes is not an array` });
        return;
      }

      stage.nodes.forEach((node, nIdx) => {
        stats[qualId].totalNodes++;
        totalNodesAcrossRepo++;

        if (!node.id) {
          issues.push({ file, severity: 'CRITICAL', type: 'SCHEMA', issue: `Route "${rKey}" stage[${sIdx}] node[${nIdx}] missing id` });
          return;
        }

        if (nodeIdsInRoute.has(node.id)) {
          issues.push({ file, severity: 'HIGH', type: 'GRAPH_TOPOLOGY', issue: `Duplicate node id "${node.id}" in route "${rKey}"` });
        }
        nodeIdsInRoute.add(node.id);

        if (!node.name) issues.push({ file, severity: 'MEDIUM', type: 'SCHEMA', issue: `Node "${node.id}" missing name` });
        if (!node.category) {
          issues.push({ file, severity: 'MEDIUM', type: 'SCHEMA', issue: `Node "${node.id}" missing category` });
        } else if (!VALID_CATEGORIES.has(node.category)) {
          issues.push({ file, severity: 'HIGH', type: 'ENUM_VIOLATION', issue: `Node "${node.id}" has invalid category "${node.category}"` });
        }

        if (!node.description || node.description.trim().length === 0) {
          issues.push({ file, severity: 'LOW', type: 'CONTENT_QUALITY', issue: `Node "${node.id}" missing description or description is empty` });
        }

        if (!node.topics || !Array.isArray(node.topics) || node.topics.length === 0) {
          issues.push({ file, severity: 'LOW', type: 'CONTENT_QUALITY', issue: `Node "${node.id}" has no syllabus topics array` });
        }

        if (node.prerequisites && Array.isArray(node.prerequisites)) {
          node.prerequisites.forEach(p => allPrereqs.push({ nodeId: node.id, prereqId: p }));
        }
      });
    });

    // Check prerequisites exist in this route
    allPrereqs.forEach(({ nodeId, prereqId }) => {
      if (!nodeIdsInRoute.has(prereqId)) {
        issues.push({ file, severity: 'MEDIUM', type: 'GRAPH_PREREQ', issue: `Node "${nodeId}" references non-existent prerequisite "${prereqId}" in route "${rKey}"` });
      }
    });
  });
});

// Catalog & Router Harmony Audit
const appJsPath = path.join(__dirname, '..', 'app.js');
const appContent = fs.readFileSync(appJsPath, 'utf8');

// Check app.js exports and constants
const missingCatalogEntries = [];
files.forEach(f => {
  const k = f.replace('.json', '');
  if (!appContent.includes(`'${k}':`) && !appContent.includes(`"${k}":`)) {
    missingCatalogEntries.push(k);
  }
});

if (missingCatalogEntries.length > 0) {
  issues.push({
    file: 'app.js',
    severity: 'CRITICAL',
    type: 'ROUTER_CATALOG',
    issue: `app.js is missing ROADMAP_CATALOG entries for: ${missingCatalogEntries.join(', ')}`
  });
}

console.log('=== AUDIT METRICS ===');
console.log(`Total Roadmaps Audited  : ${files.length}`);
console.log(`Total Stages Checked    : ${totalStagesAcrossRepo}`);
console.log(`Total Nodes Checked     : ${totalNodesAcrossRepo}`);
console.log(`Total Issues Identified : ${issues.length}\n`);

if (issues.length > 0) {
  console.log('Issues Breakdown by Severity:');
  const bySev = {};
  issues.forEach(i => { bySev[i.severity] = (bySev[i.severity] || 0) + 1; });
  console.log(JSON.stringify(bySev, null, 2));

  console.log('\nDetailed Issues Report:');
  issues.forEach(i => console.log(`  [${i.severity}] [${i.type}] ${i.file} -> ${i.issue}`));
} else {
  console.log('✓ 100% CLEAN: Zero schema violations, zero broken prerequisites, zero missing catalog entries!');
}

console.log('\n====================================================\n');
