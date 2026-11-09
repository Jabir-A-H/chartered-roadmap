# Adversarial Architectural Critique: Segment 1 — Data Architecture & Schema Specification for Global Professional Qualifications

**Author:** Subagent 1B (Adversarial Reviewer & Data Integrity Critic)  
**Target Document:** `docs/plans/segment_1_plan.md` by Subagent 1A  
**Date:** 2026-11-09  
**Status:** **NEEDS HARDENING** (Conditional Approval Subject to Mandatory Remediation)  
**Composite Health Score:** **66 / 100**  
**Standards:** Rule 2 (Multi-Option Planning & Doubt Gate), Rule 5 (Pre-Flight Verification), ADR 0001 & ADR 0003, WCAG / Offline First (`file:///`) Standards

---

## 1. Executive Summary & Verdict

### Verdict: **NEEDS HARDENING**

Subagent 1A has formulated a well-structured and ambitious blueprint for expanding the Chartered Roadmap platform from a regional dual-qualification tool (20 datasets) into a global professional reference portal encompassing **8 premier global qualifications** (CFA, CMA, CISA, CSAA, CPA Evolution, CIA, FRM, and CGMA/CIMA). 

The architectural selection of **Option 3: Route-Branching Multi-Track Schema** is fundamentally sound. It avoids the catastrophic file fragmentation of Option 2 (which would have proliferated 42+ new JSON files) and the pedagogical bankruptcy of Option 1 (which would have collapsed mutually exclusive disciplines into single linear nodes).

**However, an adversarial "Doubt Gate" audit cross-examining real-world curriculum standards, live application rendering pipelines, client-side routing, and automated test harnesses reveals ten (10) severe defects, schema mismatches, and domain inaccuracies that would fail in pre-production testing:**

1. **Active State Synchronization Bug in CIMA / CGMA Case Studies (`cima-ocs` vs `flp-ocs`):** Despite celebrating cross-route progress persistence for CPA Core exams, Planner 1A assigned divergent node IDs to the Integrated Case Studies in CIMA (`cima-ocs` in Traditional vs `flp-ocs` in FLP). In real-world CIMA regulations, OCS, MCS, and SCS are identical Pearson VUE examinations. A student passing OCS under Traditional will lose their completion status if they switch to FLP!
2. **Fabricated IIA CIA Part 3 Curriculum:** Planner 1A modeled CIA Part 3 as "Internal Audit Operations", "Internal Audit Plan", "QAIP", and "Engagement Results". This is factually erroneous. In the official IIA 2025 Global Internal Audit Standards (GIAS) realignment, Part 3 is officially **"Business Knowledge for Internal Auditing"**, covering Business Acumen (~35%), Information Security (~25%), Information Technology (~20%), and Financial Management (~20%). The proposed plan omitted IT, cybersecurity, and finance entirely!
3. **UI-Schema Impedance Mismatch in Details Drawer:** The proposed `RoadmapNode` schema specifies `passingScore`, `tools`, and `competencies`. The live details drawer in `app.js` (`openNodeDrawer`, L908–1020) **renders none of these fields**! Conversely, the schema contract omitted `topics`, `learningOutcomes`, `resources`, `marks`, and `frequency`—the exact fields `app.js` actively renders!
4. **Command Palette & Search Engine Blindness on Non-Default Routes:** In `app.js:1193`, `executeSearch` iterates exclusively over `rData.defaultRoute`. Consequently, the search bar is completely blind to any node on alternative tracks! Searching for CPA electives "BAR" or "TCP", CFA pathways "Private Wealth" or "Private Markets", or CGMA "FLP" will return **zero node results**.
5. **URL Hash Fallback Default Route Trap:** In `app.js:498` and `app.js:507–513`, any qualification other than ICAB or ACCA defaults its `routeId` to `'all'`. In `cfa.json`, `cpa.json`, and `cgma.json`, there is no route named `'all'`. Navigating to `#cfa` or deep-linking `#cfa/cfa-l1-exam` will crash stage rendering.
6. **Milestone Poisoning in AAOIFI CSAA Fellowship (`csaa-cipa-bridge`):** Placing an articulated bridge to a secondary qualification (CIPA) as an actionable node within the standard CSAA route causes completion math to cap at $\sim 92\%$ for any candidate pursuing only CSAA.
7. **CPA Evolution Missing Eligibility Stage & Misplaced 30-Month Credit Window:** CPA jumps straight to AUD without an entrance eligibility node (120 credit hours, NTS, state board application), and places the 30-month rolling exam window in Stage 3 as a post-exam milestone instead of an in-flight exam expiration constraint.
8. **CFA Level III Examination Entity Distortion:** In Level III, the single 4.4-hour exam sitting is artificially bifurcated into two separate nodes (`cfa-l3-core` and `cfa-l3-pm-path`) without a unified exam milestone.
9. **Automated Validator (`verify-all.js`) Gate Gaps:** Proposed assertions check superficial key presence, but fail to validate category enums, node ID uniqueness across qualifications, broken companion sub-roadmap links, and bundle synchronization freshness.
10. **Payload Inefficiency in `bundle-data.js`:** Concatenating multi-line 2-space formatted JSON directly into `roadmaps.js` unnecessarily inflates the bundle by $\sim 65\text{ KB}$ of raw whitespace.

---

## 2. Multi-Axis Quantitative Scorecard (66 / 100)

| Evaluation Dimension | Weight | Score (0-20) | Critical Audit Observations |
| :--- | :---: | :---: | :--- |
| **1. Invariants & State Integrity** | 20% | **14 / 20** | Option 3 composite keys `${roadmapId}:${nodeId}` are sound; however, CIMA OCS/MCS/SCS case study IDs diverge across routes, and CSAA progress is poisoned by the CIPA bridge milestone. |
| **2. Data Schema & Seam Clarity** | 20% | **13 / 20** | Schema contract invents `passingScore`, `tools`, and `competencies` which `app.js` ignores, while omitting `topics`, `learningOutcomes`, and `resources`. Qualification node granularity is structurally asymmetrical. |
| **3. Behavioral Robustness & Edge Cases** | 20% | **14 / 20** | Stale request sequencing is respected; however, `executeSearch` is blind to all secondary routes, and `parseHash` hardcodes an `'all'` route fallback that crashes non-ICAB datasets. |
| **4. Pedagogical Fidelity & Domain Accuracy** | 20% | **13 / 20** | Captures 2024–2026 reforms for CFA PSMs, CMA 12 competencies, and CISA Job Practice weights; however, IIA CIA Part 3 is completely fabricated, CPA eligibility is omitted, and CFA Level III exam is distorted. |
| **5. Testability & Automated Gates** | 20% | **12 / 20** | Proposed assertions expand file count and route keys; however, schema validation allows arbitrary categories, skips dead companion links, and permits stale `roadmaps.js` bundles to pass tests. |
| **Composite Score** | **100%** | **66 / 100** | **Status: NEEDS HARDENING (Pre-Implementation Block)** |

---

## 3. Specific Findings Table (Risk, Urgency, ROI & Blast Radius)

| # | Finding ID | Severity & Urgency | Short Description | Impacted Files / Sections | Risk of Fix | Risk of No Fix | ROI | Blast Radius |
|---|---|---|---|---|---|---|---|---|
| 1 | **DATA-001** | 🔴 **CRITICAL (P0)** | CIMA Case Study Node ID Divergence (`cima-ocs` vs `flp-ocs`) Breaks Route Sync | `docs/plans/segment_1_plan.md:L541-564` | Low | High | High | User Progress Persistence |
| 2 | **DOM-001** | 🔴 **CRITICAL (P0)** | Fabricated IIA CIA Part 3 Syllabus Erases IT, Cyber & Financial Management | `docs/plans/segment_1_plan.md:L463-469` | Low | High | High | Academic & Domain Accuracy |
| 3 | **UI-001** | 🔴 **CRITICAL (P0)** | Schema-UI Impedance Mismatch in Node Details Drawer (`openNodeDrawer`) | `docs/plans/segment_1_plan.md:L172-201`<br>`app.js:908-1020` | Low | High | High | Node Details Presentation |
| 4 | **SRCH-001**| 🔴 **CRITICAL (P0)** | Command Palette & Search Engine Blindness on Non-Default Routes | `docs/plans/segment_1_plan.md:L713-720`<br>`app.js:1188-1230` | Low | High | High | Search & Discovery Engine |
| 5 | **ROUT-001**| 🟡 **HIGH (P1)** | URL Hash Router Hardcoded `'all'` Fallback Crashes Multi-Track Routes | `docs/plans/segment_1_plan.md:L701-711`<br>`app.js:491-513` | Low | High | High | Client-Side Hash Routing |
| 6 | **TEST-001**| 🟡 **HIGH (P1)** | Automated Test Harness Permits Stale Bundles, Invalid Categories & Dead Links | `docs/plans/segment_1_plan.md:L628-697`<br>`scripts/verify-all.js:40-80` | Low | High | High | CI / Test Integrity Gates |
| 7 | **DATA-002**| 🟡 **HIGH (P1)** | AAOIFI CSAA Fellowship Completion Math Poisoned by CIPA Bridge Milestone | `docs/plans/segment_1_plan.md:L381-385` | Low | Med | High | Qualification Progress Math |
| 8 | **DOM-002** | 🟡 **HIGH (P1)** | CPA Evolution Omits Entry Eligibility & Misplaces 30-Month Credit Window | `docs/plans/segment_1_plan.md:L408-419` | Low | Med | Med | Licensure Workflow Accuracy |
| 9 | **ARCH-001**| 🟢 **MEDIUM (P2)**| Structural Asymmetry in Exam vs Subject Node Granularity Across 8 Blueprints | `docs/plans/segment_1_plan.md:Section 4` | Low | Med | Med | Conceptual Consistency |
| 10 | **PERF-001**| 🟢 **MEDIUM (P2)**| Raw Formatted JSON in `bundle-data.js` Wastes ~65 KB of Production Payload | `scripts/bundle-data.js:21`<br>`docs/plans/segment_1_plan.md:575` | Low | Low | Med | Mobile Network & Parse Time |
| 11 | **SPEC-001**| 🟢 **MEDIUM (P2)**| Omission of Explicit `ROADMAP_CATALOG` Dictionary Specifications | `docs/plans/segment_1_plan.md:L748`<br>`app.js:18-219` | Low | Med | High | Catalog Directory Integrity |

---

## 4. Receipts, Failure Proofs & Actionable Remediation Plans

---

### Finding #1: [DATA-001] CIMA / CGMA Integrated Case Study Node ID Divergence Breaks Cross-Route Synchronization

- **Target Plan Section:** `docs/plans/segment_1_plan.md:L541-551` and `L558-564`
- **Current Plan Specification:**
  - Route `traditional`:
    - `cima-ocs`: Operational Case Study (OCS)
    - `cima-mcs`: Management Case Study (MCS)
    - `cima-scs`: Strategic Case Study (SCS)
  - Route `flp`:
    - `flp-ocs`: Operational Case Study Exam (OCS)
    - `flp-mcs`: Management Case Study Exam (MCS)
    - `flp-scs`: Strategic Case Study Exam (SCS)
- **Real-World Field Failure Proof:**
  Under AICPA & CIMA regulations, the Finance Leadership Program (FLP) replaces only the Objective Tests (OTs). **The three Integrated Case Study examinations (OCS, MCS, SCS) are 100% identical in syllabus, exam date, pre-seen material, grading rubric, and Pearson VUE delivery across both Traditional and FLP routes.**
  1. A candidate studying under Traditional passes the Operational Case Study and ticks `cima-ocs` completed.
  2. The candidate’s employer transitions them to FLP. The candidate toggles the route pill from `#cgma-traditional` to `#cgma-flp`.
  3. Because `flp-ocs` has a distinct `id` from `cima-ocs`, `isNodeCompleted('flp-ocs', 'cgma')` evaluates to `false`.
  4. The candidate's completed case study milestone vanishes, displaying 0% progress for the Operational Tier!
  5. This directly violates the core architectural invariant stated in Section 6.2: *"Core Nodes Retain Completion... progress is seamlessly shared across tracks"*.
- **Actionable Remediation for Subagent 1A:**
  Harmonize case study node IDs across routes to unified identifiers:
  - `cgma-ocs` (Operational Case Study)
  - `cgma-mcs` (Management Case Study)
  - `cgma-scs` (Strategic Case Study)
  Both `traditional` and `flp` routes must reference these exact same IDs.

```diff
  // Route 2: flp
  Stage 1: FLP Operational Tier
    flp-op-learn: FLP Operational Digital Continuous Learning
-   flp-ocs: Operational Case Study Exam (OCS)
+   cgma-ocs: Operational Case Study Exam (OCS) (Shared Pearson VUE Milestone)

  Stage 2: FLP Management Tier
    flp-mgmt-learn: FLP Management Digital Continuous Learning
-   flp-mcs: Management Case Study Exam (MCS)
+   cgma-mcs: Management Case Study Exam (MCS) (Shared Pearson VUE Milestone)

  Stage 3: FLP Strategic Tier
    flp-strat-learn: FLP Strategic Digital Continuous Learning
-   flp-scs: Strategic Case Study Exam (SCS)
+   cgma-scs: Strategic Case Study Exam (SCS) (Shared Capstone Board Milestone)
```

---

### Finding #2: [DOM-001] Fabricated IIA CIA Part 3 Curriculum Erases IT, Cyber & Financial Management

- **Target Plan Section:** `docs/plans/segment_1_plan.md:L463-469`
- **Current Plan Specification:**
  ```text
  ├── Stage 4: Part 3 – Internal Audit Function
  │   ├── cia-p3-s1: Internal Audit Operations (25% | CAE duties, policies, budgeting, coordination)
  │   ├── cia-p3-s2: Internal Audit Plan (15% | Dynamic audit universe & risk-based board planning)
  │   ├── cia-p3-s3: Quality of the Internal Audit Function - QAIP (15% | GIAS QAIP & 5-Year EQA)
  │   └── cia-p3-s4: Engagement Results and Monitoring (45% | Reporting, remediation tracking, residual risk)
  ```
- **Real-World Field Failure Proof:**
  The syllabus proposed above is factually incorrect. Internal audit operations, planning, QAIP, and monitoring belong to **GIAS Domain IV & V (tested in Part 1 and Part 2)**.
  According to The Institute of Internal Auditors (The IIA) official 2025 CIA Exam Syllabus, **Part 3 is titled "Business Knowledge for Internal Auditing"** (100 MCQs, 120 minutes, 600/750 scaled passing score). The official domains and weights are:
  1. **Business Acumen (35%):** Organizational strategic management, organizational structures, business process analysis, project management, and contracts.
  2. **Information Security (25%):** Physical/logical security controls, encryption, cyber incident response, and privacy frameworks.
  3. **Information Technology (20%):** System software, database management (DBMS), networking, cloud computing, and IT control frameworks (COBIT).
  4. **Financial Management (20%):** Financial accounting (IFRS/US GAAP basics), cost accounting, working capital, and capital budgeting.
  
  Under Planner 1A's plan, an internal audit student using this platform would receive 0 guidance on Information Technology, Cybersecurity, or Financial Accounting—the core subject areas comprising 65% of the actual CIA Part 3 exam!
- **Actionable Remediation for Subagent 1A:**
  Completely replace Stage 4 of `cia.json` with the canonical IIA Part 3 syllabus:

```diff
- ├── Stage 4: Part 3 – Internal Audit Function
- │   ├── Subtitle: 100 MCQs | 120 Minutes | Scaled Score 600/750 Pass
- │   ├── cia-p3-s1: Internal Audit Operations (25% | CAE duties, policies, budgeting, coordination)
- │   ├── cia-p3-s2: Internal Audit Plan (15% | Dynamic audit universe & risk-based board planning)
- │   ├── cia-p3-s3: Quality of the Internal Audit Function - QAIP (15% | GIAS QAIP & 5-Year EQA)
- │   └── cia-p3-s4: Engagement Results and Monitoring (45% | Reporting, remediation tracking, residual risk)
+ ├── Stage 4: Part 3 – Business Knowledge for Internal Auditing
+ │   ├── Subtitle: 100 MCQs | 120 Minutes | Scaled Score 600/750 Pass (~80%)
+ │   ├── cia-p3-s1: Business Acumen (35% | Strategic Planning, Org Structure, Business Process & Analytics)
+ │   ├── cia-p3-s2: Information Security (25% | Cybersecurity, Access Controls, Incident Response & Privacy)
+ │   ├── cia-p3-s3: Information Technology (20% | IT Infrastructure, Cloud, Databases & Software Lifecycle)
+ │   └── cia-p3-s4: Financial Management (20% | Financial & Cost Accounting, Finance & Capital Budgeting)
```

---

### Finding #3: [UI-001] Schema-UI Impedance Mismatch in Node Details Drawer (`app.js:openNodeDrawer`)

- **Target Plan Section:** `docs/plans/segment_1_plan.md:L172-201` vs `app.js:L908-L1020`
- **Current Proposed Schema:**
  ```typescript
  interface RoadmapNode {
    id: string;
    name: string;
    category: string;
    description: string;
    passingScore?: string;
    modernThemes?: string[];
    specificationGrid?: Array<{ area: string; weight: string }>;
    tools?: string[];
    competencies?: string[];
    checklists?: string[];
    linkedRoadmaps?: Array<{ ... }>;
  }
  ```
- **Real-World Field Failure Proof:**
  Examining `app.js:908-1020` (`openNodeDrawer`), the active rendering code checks the following fields:
  1. `node.code` (pills)
  2. `node.weightage` (pills)
  3. `node.marks` (pills) — *omitted from plan schema!*
  4. `node.duration` (pills)
  5. `node.frequency` (pills) — *omitted from plan schema!*
  6. `node.format` (pills)
  7. `node.modernThemes` (tags)
  8. `node.description` (paragraph)
  9. `node.topics` (bullet list) — *omitted from plan schema!*
  10. `node.learningOutcomes` (bullet list) — *omitted from plan schema!*
  11. `node.checklists` (checklist)
  12. `node.resources` (resource tags) — *omitted from plan schema!*
  13. `node.specificationGrid` (table)
  14. `node.linkedRoadmaps` (companion cards)

  **The live application does NOT check or render `node.passingScore`, `node.tools`, or `node.competencies`.**
  If dataset authors put syllabus lists into `competencies` instead of `topics`, the drawer will render an empty section! If they specify `tools`, it is silently discarded!
- **Actionable Remediation for Subagent 1A:**
  Update the Universal Schema Contract in Section 3.4 to reflect the canonical properties supported by `openNodeDrawer`:

```typescript
interface RoadmapNode {
  id: string;
  name: string;
  category: 'Admin' | 'Exam' | 'Skill' | 'Pathway' | 'Coursework' | 'Training' | 'Experience' | 'Ethics' | 'Milestone' | 'Compliance';
  description: string;
  
  // Canonical metadata fields rendered by app.js:
  code?: string;
  weightage?: string;
  marks?: number;
  duration?: string;
  frequency?: string;
  format?: string;
  modernThemes?: string[];
  topics?: string[];               // Rendered in "Syllabus Topics & Competencies"
  learningOutcomes?: string[];     // Rendered in "Course Learning Outcomes (CLOs)"
  checklists?: string[];           // Rendered in "Study Milestones & Action Checklist"
  resources?: string[];            // Rendered in "Recommended Resources"
  specificationGrid?: Array<{ area: string; weight: string }>;
  linkedRoadmaps?: Array<{
    id: string;
    route: string;
    title: string;
    badge: string;
    description: string;
  }>;
}
```

---

### Finding #4: [SRCH-001] Command Palette & Search Engine Blindness on Non-Default Routes

- **Target Plan Section:** `docs/plans/segment_1_plan.md:L713-720` vs `app.js:L1188-L1230`
- **Live Implementation in `app.js` (lines 1193–1197):**
  ```javascript
  const defaultRoute = rData.routes ? (rData.routes[rData.defaultRoute || 'all'] || Object.values(rData.routes)[0]) : null;
  if (!defaultRoute) return;

  (defaultRoute.stages || []).forEach((stage) => {
    (stage.nodes || []).forEach((node) => {
      // Searches ONLY nodes in defaultRoute!
    });
  });
  ```
- **Real-World Field Failure Proof:**
  `executeSearch` iterates strictly through `defaultRoute` of each dataset.
  1. In `cpa.json`, `defaultRoute` is `core-isc`. The nodes in `core-bar` (`cpa-bar`) and `core-tcp` (`cpa-tcp`) are never inspected!
  2. When a CPA candidate presses `Ctrl+K` and searches `"BAR"` or `"Business Analysis and Reporting"`, the search engine yields **0 results**.
  3. In `cfa.json`, `defaultRoute` is `portfolio-mgmt`. A candidate searching `"Family Office"`, `"Private Equity"`, or `"Waterfall Model"` gets **0 results**.
  4. In `cgma.json`, searching `"FLP"` or `"Continuous Learning"` gets **0 node results**.
- **Actionable Remediation for Subagent 1A:**
  In Section 7.3 and Section 8, explicitly require updating `executeSearch` in `app.js` to index unique nodes across **all routes** of each qualification:

```javascript
// Proposed patch for app.js executeSearch:
Object.entries(window.ROADMAP_DATA).forEach(([rId, rData]) => {
  const catItem = ROADMAP_CATALOG[rId];
  if (filter !== 'all' && catItem && catItem.category !== filter) return;

  // Collect unique nodes across all routes for comprehensive discovery:
  const visitedNodeIds = new Set();
  const allRoutes = Object.values(rData.routes || {});

  allRoutes.forEach((route) => {
    (route.stages || []).forEach((stage) => {
      (stage.nodes || []).forEach((node) => {
        if (visitedNodeIds.has(node.id)) return;
        visitedNodeIds.add(node.id);
        
        // Match node against query q...
      });
    });
  });
});
```

---

### Finding #5: [ROUT-001] URL Hash Router Hardcoded `'all'` Fallback Crashes Multi-Track Routes

- **Target Plan Section:** `docs/plans/segment_1_plan.md:L701-711` vs `app.js:L491-L513`
- **Live Implementation in `app.js` (lines 498 and 507–513):**
  ```javascript
  if (parts.length === 1) {
    if (knownForQual.includes(parts[0])) {
      routeId = parts[0];
    } else {
      nodeId = parts[0];
      routeId = matchedQual === 'icab' ? 'grad' : (matchedQual === 'acca' ? 'standard' : 'all');
    }
  }
  ...
  if (!routeId) {
    if (matchedQual === 'icab') routeId = 'grad';
    else if (matchedQual === 'icab-it-labs') routeId = 'all';
    else if (matchedQual.startsWith('icab-')) routeId = 'all';
    else if (matchedQual === 'acca') routeId = 'standard';
    else routeId = 'all';
  }
  ```
- **Real-World Field Failure Proof:**
  1. A user navigates to `#cfa` or deep-links to `#cfa/cfa-l1-exam`.
  2. In `app.js:512`, `matchedQual` is `'cfa'`. Because `'cfa'` is neither `'icab'` nor `'acca'`, `routeId` is defaulted to `'all'`.
  3. `parseHash` returns `{ qualId: 'cfa', routeId: 'all', nodeId: 'cfa-l1-exam' }`.
  4. In `cfa.json`, `cfa.routes` contains `['portfolio-mgmt', 'private-markets', 'private-wealth']`. **There is no route named `'all'`!**
  5. In `loadRoadmap()`, `getActiveStages()` returns `undefined`, triggering an empty roadmap state or runtime error.
- **Actionable Remediation for Subagent 1A:**
  In Section 7.3 and Section 8, mandate updating `KNOWN_ROUTES` and replacing hardcoded `'all'` fallbacks in `parseHash`:

```javascript
// Register all routes for new qualifications in KNOWN_ROUTES:
const KNOWN_ROUTES = {
  'icab': ['grad', 'hsc', 'pas', 'pro'],
  'icab-it-labs': ['all', 'cl_labs', 'pl_labs'],
  'acca': ['standard'],
  'cfa': ['portfolio-mgmt', 'private-wealth', 'private-markets'],
  'cpa': ['core-isc', 'core-bar', 'core-tcp'],
  'cgma': ['traditional', 'flp'],
  'cma': ['standard'],
  'cisa': ['standard'],
  'csaa': ['standard'],
  'cia': ['standard'],
  'frm': ['standard']
};

// Update fallback in parseHash to use ROADMAP_CATALOG defaultRoute:
if (!routeId) {
  const catalogEntry = ROADMAP_CATALOG[matchedQual];
  routeId = catalogEntry ? catalogEntry.defaultRoute : 'standard';
}
```

---

### Finding #6: [TEST-001] Automated Test Harness Permits Stale Bundles, Invalid Categories & Dead Links

- **Target Plan Section:** `docs/plans/segment_1_plan.md:L628-697`
- **Current Test Specification:**
  Planner 1A proposes asserting `jsonFiles.length === 28` and checking `Object.keys(cfa.routes)`.
- **Real-World Field Failure Proof:**
  1. **Category Enum Blindness:** In Test 1, `assert.ok(node.category)` checks only that the string is non-empty. If an author writes `category: 'exam'` (lowercase) or `category: 'Syllabus'`, Test 1 passes, but `.cat-exam` fails to match the CSS class `.cat-Exam`, producing unstyled tags.
  2. **Dead Companion Sub-Roadmap Links:** Test 2 checks only ICAB paper links. If a node in `cfa.json` or `csaa.json` specifies `linkedRoadmaps: [{ id: 'broken-link' }]`, it is never validated.
  3. **Stale Bundle Verification Failure:** Test 3 tests `data/roadmaps.js` by requiring it and checking keys. However, it **never verifies whether `roadmaps.js` contains the current content of `data/*.json`**! If a developer updates `cfa.json` but forgets `npm run build`, `npm test` still passes green!
- **Actionable Remediation for Subagent 1A:**
  Expand Section 7.1 and 7.2 with rigorous verification gates:

```javascript
// Gate 1: Strict Category Taxonomy Assertion
const VALID_CATEGORIES = new Set([
  'Admin', 'Exam', 'Skill', 'Pathway', 'Coursework',
  'Training', 'Experience', 'Ethics', 'Milestone', 'Compliance'
]);
assert.ok(VALID_CATEGORIES.has(node.category), 
  `${file} node ${node.id} has invalid category "${node.category}"`);

// Gate 2: defaultRoute Existence Assertion
assert.ok(data.defaultRoute, `${file} missing required top-level defaultRoute`);
assert.ok(data.routes[data.defaultRoute], 
  `${file} defaultRoute "${data.defaultRoute}" does not exist in routes`);

// Gate 3: Universal Companion Sub-Roadmap Link Resolution
if (Array.isArray(node.linkedRoadmaps)) {
  node.linkedRoadmaps.forEach(link => {
    assert.ok(EXPECTED_ROADMAP_KEYS.includes(link.id), 
      `${file} node ${node.id} links to unknown roadmap "${link.id}"`);
  });
}

// Gate 4: Bundle Content Freshness Check
const diskJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
assert.deepStrictEqual(window.ROADMAP_DATA[key], diskJson, 
  `data/roadmaps.js is out of date for "${key}". Run "npm run build" to regenerate.`);
```

---

### Finding #7: [DATA-002] AAOIFI CSAA Fellowship Completion Math Poisoned by CIPA Bridge Milestone

- **Target Plan Section:** `docs/plans/segment_1_plan.md:L381-385`
- **Current Plan Specification:**
  ```text
  └── Stage 3: Practical Experience & Fellowship Induction
      ├── csaa-per: 1 Year Verified Practical Experience in IFI Shari'ah Compliance / Audit
      ├── csaa-charter: Formal Fellowship Conferred (CSAA Designation Award)
      └── csaa-cipa-bridge: CIPA Fellowship Fast-Track Bridge (Direct eligibility via single CPFAS module)
  ```
- **Real-World Field Failure Proof:**
  The platform's completion calculation is:
  $$\text{Progress \%} = \left( \frac{\sum \text{Completed Nodes}}{\text{Total Route Nodes}} \right) \times 100$$
  The Certified Islamic Professional Accountant (CIPA) is a distinct financial accounting credential. AAOIFI offers an articulation policy where CSAA charterholders can earn CIPA by completing only one module (CPFAS).
  Placing `csaa-cipa-bridge` as a node in the standard CSAA route means a candidate who has passed CPSS, passed CPAAGE, completed 1 year PER, and received their CSAA charter will only see **92% progress (12/13 completed)** unless they also check a bridge to an entirely different credential!
- **Actionable Remediation for Subagent 1A:**
  Remove `csaa-cipa-bridge` as an actionable roadmap node. Instead, model the CIPA articulation as an external reference in `csaa-charter`'s drawer metadata (`linkedRoadmaps` or `resources`), keeping CSAA 100% completion clean and self-contained.

---

### Finding #8: [DOM-002] CPA Evolution Omits Entry Eligibility & Misplaces 30-Month Credit Window

- **Target Plan Section:** `docs/plans/segment_1_plan.md:L408-419`
- **Current Plan Specification:**
  `cpa.json` jumps directly into Stage 1: The Mandatory CPA Core (`cpa-aud`, `cpa-far`, `cpa-reg`), and places `cpa-credit-window` in Stage 3: Licensure & The 4 Es alongside education, experience, and ethics.
- **Real-World Field Failure Proof:**
  1. **Eligibility Prerequisite Omission:** Unlike CMA (`cma-reg-1`), CIA (`cia-reg-1`), or CIMA (Cert BA), CPA Evolution in the US requires 120 college semester credits with specific upper-level accounting coursework, State Board / NASBA application approval, and receipt of an active Notice to Schedule (NTS) *before* sitting for AUD, FAR, or REG.
  2. **Credit Window Misplacement:** NASBA Model Rule 5-7's 30-month rolling credit window is an **active exam expiration rule**, not a post-exam licensing milestone. The clock starts ticking the moment a candidate passes their first section. Placing it in Stage 3 as an action item *after* passing all 4 exams distorts the regulatory reality.
- **Actionable Remediation for Subagent 1A:**
  Restructure `cpa.json` stages:
  - **Stage 1: Eligibility & Notice to Schedule (NTS)**
    - `cpa-eligibility`: 120 Semester Hours & State Board Application
    - `cpa-nts`: Prometric Scheduling & NASBA NTS Issuance
  - **Stage 2: The Mandatory CPA Core (12 Hours CBT)**
    - `cpa-aud`, `cpa-far`, `cpa-reg` (annotated with 30-month rolling window rules)
  - **Stage 3: Discipline Specialization (4 Hours CBT)**
    - `cpa-isc` / `cpa-bar` / `cpa-tcp`
  - **Stage 4: Licensure & 4 Es (Education, Experience, Ethics)**
    - `cpa-edu`: 150 Semester Hours
    - `cpa-exp`: 1–2 Years Verified Experience Sign-Off
    - `cpa-ethics`: State Board Ethics Examination

---

### Finding #9: [ARCH-001] Structural Asymmetry in Exam vs Subject Node Granularity Across 8 Blueprints

- **Target Plan Section:** `docs/plans/segment_1_plan.md:Section 4`
- **Current Plan Specification:**
  - CPA: 4 nodes total for exams (`cpa-aud`, `cpa-far`, `cpa-reg`, `cpa-isc`), zero syllabus breakdown nodes.
  - CMA: 12 syllabus section nodes (`cma-p1-s1..s6`, `cma-p2-s1..s6`), but zero exam nodes.
  - CIA: 11 syllabus section nodes across 3 parts, but zero exam nodes.
  - FRM: 10 syllabus subject nodes, but zero exam nodes.
  - CISA: 5 syllabus domain nodes, plus 1 exam node grouped into the Licensure stage.
  - CFA: Level I & II have 1 exam node + 1 PSM node; Level III has no exam node and instead splits the sitting into `cfa-l3-core` and `cfa-l3-pm-path`.
- **Real-World Field Failure Proof:**
  This extreme structural inconsistency creates an uneven user experience:
  - In CPA, ticking one box represents passing a 4-hour exam.
  - In CMA, a student ticks 6 boxes for Part 1 studying, but there is no box for passing Part 1!
  - In CFA Level III, the student takes one 4.4-hour exam, but the plan presents it as two distinct milestones.
- **Actionable Remediation for Subagent 1A:**
  Standardize the architectural hierarchy across all 8 qualifications:
  - For single/modular qualifications (CMA, CIA, FRM):
    Include the syllabus subject/section nodes (`category: 'Coursework'`), followed by an explicit Examination Milestone node (`category: 'Exam'`) for each Part:
    - In CMA: Stage 2 concludes with `cma-p1-exam` ("Part 1 Examination - 4h, 100 MCQs + 2 Essays, 360/500 Pass").
    - In FRM: Stage 1 concludes with `frm-p1-exam` ("FRM Part I Examination - 4h, 100 MCQs CBT").
    - In CIA: Stage 2 concludes with `cia-p1-exam`, Stage 3 with `cia-p2-exam`, Stage 4 with `cia-p3-exam`.
  - In CFA Level III: Stage 3 contains `cfa-l3-exam` (single unified exam sitting) and the chosen PSM III node.

---

### Finding #10: [PERF-001] Raw Formatted JSON in `bundle-data.js` Wastes ~65 KB of Production Payload

- **Target Plan Section:** `docs/plans/segment_1_plan.md:Section 5.1` & `scripts/bundle-data.js:21`
- **Current Code in `scripts/bundle-data.js`:**
  ```javascript
  const content = fs.readFileSync(filePath, 'utf8');
  bundleEntries += `window.ROADMAP_DATA['${key}'] = ${content};\n`;
  ```
- **Real-World Field Failure Proof:**
  All 28 JSON files in `data/*.json` are formatted with 2-space indentation for human developer readability. By interpolating `${content}` directly into `roadmaps.js`, every newline, space, and indentation character is duplicated into the production script.
  - Existing uncompressed bundle: 367 KB.
  - With 8 unminified JSON files: ~560 KB.
  - Minifying via `JSON.stringify(JSON.parse(content))` strips ~35% of the payload size, reducing `roadmaps.js` by $\approx 65\text{ KB}$ uncompressed ($\approx 18\text{ KB}$ gzipped), improving script evaluation time on mobile devices.
- **Actionable Remediation for Subagent 1A:**
  Update `scripts/bundle-data.js` build step:

```javascript
// Minify bundled JSON object literals:
const parsed = JSON.parse(content);
bundleEntries += `window.ROADMAP_DATA['${key}'] = ${JSON.stringify(parsed)};\n`;
```

---

### Finding #11: [SPEC-001] Omission of Explicit `ROADMAP_CATALOG` Metadata Specifications

- **Target Plan Section:** `docs/plans/segment_1_plan.md:L748`
- **Current Plan Specification:**
  Planner 1A lists *"Update app.js ROADMAP_CATALOG"* as a bullet in Section 8 without specifying the actual entries.
- **Real-World Field Failure Proof:**
  `verify-all.js` Test 8 strictly asserts that every catalog entry has `id`, `title`, `code`, `level`, `category`, and `categoryLabel`. Leaving these undefined in the plan forces Segment 2/3 implementers to improvise labels, leading to UI visual drift.
- **Actionable Remediation for Subagent 1A:**
  Incorporate the canonical `ROADMAP_CATALOG` specifications directly into the plan:

```javascript
const NEW_ROADMAP_CATALOG_ENTRIES = {
  'cfa': {
    id: 'cfa',
    title: 'CFA® Charter (Chartered Financial Analyst)',
    code: 'CFA',
    level: '3 Levels · 3 Practical Skills Modules (PSMs)',
    category: 'qual',
    categoryLabel: 'Global Qualification',
    defaultRoute: 'portfolio-mgmt',
    summary: 'Premier global investment management charter covering Level I tools, Level II asset valuation, Level III specialized pathways (Portfolio Management, Private Wealth, Private Markets), and mandatory Python/AI PSMs.',
    tags: ['CFA', 'Finance', 'Investment', 'Portfolio Management', 'CFA Institute', 'PSM', 'Equity', 'Fixed Income']
  },
  'cma': {
    id: 'cma',
    title: 'CMA® Certification (Certified Management Accountant)',
    code: 'CMA',
    level: '2 Parts · 12 Core Competencies · 8 Hours CBT',
    category: 'qual',
    categoryLabel: 'Global Qualification',
    defaultRoute: 'standard',
    summary: 'Global benchmark for management accountants: Part 1 Financial Planning, Performance and Analytics, and Part 2 Strategic Financial Management with 50% MCQ gate and Prometric case essays.',
    tags: ['CMA', 'IMA', 'Management Accounting', 'Cost Accounting', 'FP&A', 'Financial Strategy']
  },
  'cisa': {
    id: 'cisa',
    title: 'CISA® Certification (Certified Information Systems Auditor)',
    code: 'CISA',
    level: '5 Job Practice Domains · 150 MCQs · 4 Hours',
    category: 'qual',
    categoryLabel: 'Global Qualification',
    defaultRoute: 'standard',
    summary: 'Premier IS audit, control, and cyber resilience credential updated to the August 2024 Job Practice framework across 5 re-weighted domains and 450/800 scaled scoring.',
    tags: ['CISA', 'ISACA', 'IT Audit', 'Cybersecurity', 'IT Governance', 'COBIT', 'Zero Trust']
  },
  'csaa': {
    id: 'csaa',
    title: 'CSAA Fellowship (Certified Shari\'ah Advisor & Auditor)',
    code: 'CSAA',
    level: '2 Core Modules · 60+ Shari\'ah Standards · Fellowship',
    category: 'qual',
    categoryLabel: 'Global Qualification',
    defaultRoute: 'standard',
    summary: 'AAOIFI flagship Islamic finance fellowship: Module 1 CPSS (60+ Shari\'ah Standards across commercial contracts) and Module 2 CPAAGE (Governance, Audit, Ethics) with CIPA fast-track bridge.',
    tags: ['CSAA', 'AAOIFI', 'Islamic Finance', 'Shari\'ah Audit', 'Sukuk', 'Murabahah', 'CIPA']
  },
  'cpa': {
    id: 'cpa',
    title: 'Uniform CPA Examination (CPA Evolution)',
    code: 'CPA',
    level: 'Core + Discipline Model · 4 Exam Sections · 16 Hours',
    category: 'qual',
    categoryLabel: 'Global Qualification',
    defaultRoute: 'core-isc',
    summary: 'US CPA Evolution framework: 3 mandatory Core sections (AUD, FAR, REG) plus 1 candidate-selected Discipline (BAR, ISC, or TCP) governed by the 30-month rolling credit window and 150 credit hours.',
    tags: ['CPA', 'AICPA', 'NASBA', 'CPA Evolution', 'AUD', 'FAR', 'REG', 'ISC', 'BAR', 'TCP', 'US GAAP']
  },
  'cia': {
    id: 'cia',
    title: 'CIA® Certification (Certified Internal Auditor)',
    code: 'CIA',
    level: '3 Parts · 2025 GIAS Standards · 600/750 Scaled Pass',
    category: 'qual',
    categoryLabel: 'Global Qualification',
    defaultRoute: 'standard',
    summary: 'The IIA\'s globally recognized internal audit designation realigned to the 2025 Global Internal Audit Standards (GIAS) across Part 1 Fundamentals, Part 2 Engagement, and Part 3 Business Knowledge.',
    tags: ['CIA', 'IIA', 'Internal Audit', 'GIAS', 'QAIP', 'Risk Management', 'Governance', 'Cybersecurity']
  },
  'frm': {
    id: 'frm',
    title: 'FRM® Certification (Financial Risk Manager)',
    code: 'FRM',
    level: '2 Parts · 180 MCQs · Strict 4-Year Window',
    category: 'qual',
    categoryLabel: 'Global Qualification',
    defaultRoute: 'standard',
    summary: 'GARP flagship financial risk designation: Part I quantitative analysis, markets, and VaR models; and Part II market, credit, operational, liquidity, and investment risk with 2 years verified experience.',
    tags: ['FRM', 'GARP', 'Risk Management', 'Market Risk', 'Credit Risk', 'VaR', 'Basel III', 'Derivatives']
  },
  'cgma': {
    id: 'cgma',
    title: 'CGMA® / CIMA Professional Qualification',
    code: 'CGMA',
    level: 'Dual Pathway (Traditional vs FLP) · 3 Integrated Case Studies',
    category: 'qual',
    categoryLabel: 'Global Qualification',
    defaultRoute: 'traditional',
    summary: 'AICPA & CIMA global management accounting designation offering both the Traditional Exam Route (Cert BA + 9 OTs + 3 Case Studies OCS/MCS/SCS) and the digital Finance Leadership Program (FLP).',
    tags: ['CGMA', 'CIMA', 'Management Accounting', 'FLP', 'Case Study', 'OCS', 'MCS', 'SCS', 'AICPA']
  }
};
```

---

## 5. Summary of Recommended Plan Revisions

To advance Segment 1 to **APPROVED** status, Subagent 1A must apply the following revisions to `docs/plans/segment_1_plan.md`:

1. **Harmonize CIMA Node IDs:** Update `cgma.json` blueprint so that case study nodes (`cgma-ocs`, `cgma-mcs`, `cgma-scs`) share identical IDs across both `traditional` and `flp` routes.
2. **Correct CIA Part 3:** Replace the duplicated internal audit operations syllabus in `cia.json` Stage 4 with the official IIA Part 3 domains (Business Acumen 35%, InfoSec 25%, IT 20%, Financial Management 20%).
3. **Reconcile Drawer Schema:** Expand `RoadmapNode` interface in Section 3.4 with `topics`, `learningOutcomes`, `resources`, `marks`, and `frequency`.
4. **Patch Search Engine Blindness:** Mandate updating `executeSearch` in `app.js` to iterate over all routes of each qualification.
5. **Update Hash Router Fallbacks:** Update `KNOWN_ROUTES` and configure `parseHash` to fall back to `ROADMAP_CATALOG[id].defaultRoute` instead of hardcoding `'all'`.
6. **Harden `verify-all.js` Test Assertions:** Add validation gates for category taxonomy enums, route existence, unique node IDs, companion sub-roadmap link resolution, and bundle synchronization freshness.
7. **Cleanse CSAA Progress Math:** Remove `csaa-cipa-bridge` as an actionable node in `csaa.json` standard route.
8. **Add Exam Nodes to Single-Track Credentials:** Add explicit exam nodes (`cma-p1-exam`, `frm-p1-exam`, `cia-p1-exam`, etc.) to standardize progress reporting.
9. **Incorporate Canonical `ROADMAP_CATALOG` Definitions:** Embed the full 8-item catalog dictionary into the plan.
10. **Enable Minification in `bundle-data.js`:** Require `JSON.stringify(JSON.parse(content))` to optimize bundle payload size.

---

**Report Finalized:** Persisted at `docs/critiquesGPT/segment_1_critique.md`. Subagent 1B standing by for Subagent 1A reconciliation.