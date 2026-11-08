const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== VERIFYING SEGMENT 2 UI/UX, PRESENTATION & ACCESSIBILITY ===');

const rootDir = path.join(__dirname, '..');

// 1. Verify index.html
console.log('Test 1: Validating index.html structure & ARIA attributes...');
const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

assert.ok(indexHtml.includes('id="subroadmap-banner"'), 'index.html must contain #subroadmap-banner');
assert.ok(indexHtml.includes('id="subroadmap-back-btn"'), 'index.html must contain #subroadmap-back-btn');
assert.ok(indexHtml.includes('Companion Practical Skills'), 'index.html must contain Companion Practical Skills tag');

// Check position before #roadmap-tree
const bannerIdx = indexHtml.indexOf('id="subroadmap-banner"');
const treeIdx = indexHtml.indexOf('id="roadmap-tree"');
assert.ok(bannerIdx < treeIdx, '#subroadmap-banner must appear before #roadmap-tree');

// Check #drawer-backdrop and #details-drawer
assert.ok(indexHtml.includes('id="drawer-backdrop"'), 'index.html must contain #drawer-backdrop');
const backdropIdx = indexHtml.indexOf('id="drawer-backdrop"');
const drawerIdx = indexHtml.indexOf('id="details-drawer"');
assert.ok(backdropIdx < drawerIdx, '#drawer-backdrop must appear before #details-drawer');

// Check aria-modal="true" on #details-drawer
const drawerTagMatch = indexHtml.match(/<aside[^>]+id="details-drawer"[^>]*>/);
assert.ok(drawerTagMatch, '#details-drawer tag must exist');
assert.ok(drawerTagMatch[0].includes('aria-modal="true"'), '#details-drawer must have aria-modal="true"');
console.log('✓ index.html passed all structure, banner, backdrop, and ARIA checks.');

// 2. Verify styles.css
console.log('Test 2: Validating styles.css tokens, touch targets, and components...');
const stylesCss = fs.readFileSync(path.join(rootDir, 'styles.css'), 'utf8');

// Contrast tokens
assert.ok(stylesCss.includes('--text-muted: #52525b;'), 'Light mode must define --text-muted: #52525b;');
assert.ok(stylesCss.includes('--text-muted: #a1a1aa;'), 'Dark mode must define --text-muted: #a1a1aa;');

// Touch targets >= 44px
assert.ok(stylesCss.includes('min-width: 44px;'), 'styles.css must have min-width: 44px rules');
assert.ok(stylesCss.includes('min-height: 44px;'), 'styles.css must have min-height: 44px rules');

// Check .node-card.done does not have line-through
const doneBlockMatch = stylesCss.match(/\.node-card\.done\s*\{([^}]+)\}/);
assert.ok(doneBlockMatch, '.node-card.done rule must exist');
assert.ok(!doneBlockMatch[1].includes('line-through'), '.node-card.done must NOT contain line-through');

// Check .node-card.has-subroadmap
assert.ok(stylesCss.includes('.node-card.has-subroadmap'), '.node-card.has-subroadmap must be styled');

// Check .subroadmap-badge
assert.ok(stylesCss.includes('.subroadmap-badge'), '.subroadmap-badge must be styled');

// Check .companion-card suite
const companionClasses = [
  '.companion-card',
  '.companion-header',
  '.companion-badge',
  '.companion-title',
  '.companion-desc',
  '.companion-meta-row',
  '.companion-chip',
  '.companion-cta-btn'
];
companionClasses.forEach(cls => {
  assert.ok(stylesCss.includes(cls), `${cls} must be styled in styles.css`);
});

// Check .subroadmap-banner suite
assert.ok(stylesCss.includes('.subroadmap-banner'), '.subroadmap-banner must be styled');
assert.ok(stylesCss.includes('.subroadmap-back-btn'), '.subroadmap-back-btn must be styled');

// Check .drawer-backdrop suite
assert.ok(stylesCss.includes('.drawer-backdrop'), '.drawer-backdrop must be styled');
assert.ok(stylesCss.includes('.drawer-backdrop.active'), '.drawer-backdrop.active must be styled');
console.log('✓ styles.css passed all token, touch target, and component styling checks.');

// 3. Verify app.js
console.log('Test 3: Validating app.js rendering logic & decoupled state updates...');
const appJs = fs.readFileSync(path.join(rootDir, 'app.js'), 'utf8');

// Check el properties
assert.ok(appJs.includes('subroadmapBanner:'), 'app.js el must have subroadmapBanner');
assert.ok(appJs.includes('subroadmapBackBtn:'), 'app.js el must have subroadmapBackBtn');
assert.ok(appJs.includes('drawerBackdrop:'), 'app.js el must have drawerBackdrop');

// Check renderMap() subroadmap badge & class
assert.ok(appJs.includes('hasSubroadmap'), 'renderMap must compute hasSubroadmap');
assert.ok(appJs.includes('has-subroadmap'), 'renderMap must add has-subroadmap class');
assert.ok(appJs.includes('subroadmap-badge'), 'renderMap must render subroadmap-badge');
assert.ok(appJs.includes('Labs ↗'), 'renderMap badge must have Labs ↗ text');

// Check openNodeDrawer() companion-card
assert.ok(appJs.includes('companion-card'), 'openNodeDrawer must render companion-card');
assert.ok(appJs.includes('companion-cta-btn'), 'openNodeDrawer must render companion-cta-btn');
assert.ok(appJs.includes('data-action="open-subroadmap"'), 'CTA must have data-action="open-subroadmap"');
assert.ok(appJs.includes('data-roadmap-id='), 'CTA must have data-roadmap-id attribute');

// Check removal of embeddedLabs
assert.ok(!appJs.includes('Mandatory Practical IT Lab Workshops'), 'app.js must NOT render Mandatory Practical IT Lab Workshops');
assert.ok(!appJs.includes('node.embeddedLabs'), 'app.js must NOT reference node.embeddedLabs');

// Check decoupled openNodeDrawer and closeDrawer (no full renderMap() DOM thrashing)
const openNodeDrawerMatch = appJs.match(/function openNodeDrawer\([\s\S]*?\n  \}/);
assert.ok(openNodeDrawerMatch, 'openNodeDrawer function must exist');
assert.ok(!openNodeDrawerMatch[0].includes('renderMap();'), 'openNodeDrawer must NOT call renderMap()');

const closeDrawerMatch = appJs.match(/function closeDrawer\(\)[\s\S]*?\n  \}/);
assert.ok(closeDrawerMatch, 'closeDrawer function must exist');
assert.ok(!closeDrawerMatch[0].includes('renderMap();'), 'closeDrawer must NOT call renderMap()');

// Check drawerBackdrop toggle
assert.ok(openNodeDrawerMatch[0].includes('drawerBackdrop.classList.add(\'active\')'), 'openNodeDrawer must activate drawerBackdrop');
assert.ok(closeDrawerMatch[0].includes('drawerBackdrop.classList.remove(\'active\')'), 'closeDrawer must deactivate drawerBackdrop');

console.log('✓ app.js passed all subroadmap rendering, companion CTA, and decoupled DOM updates.');

console.log('\n======================================================');
console.log('ALL SEGMENT 2 IMPLEMENTATION GATES PASSED SUCCESSFULLY');
console.log('======================================================');
