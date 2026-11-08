# Multi-Agent Architectural Audit & Implementation Blueprint
**Chartered Roadmap Modernization: IT Practical Lab Separation & Roadmap.sh Modular Architecture**

- **Author:** Chief-of-Staff Prompt Architect & Skill Synthesizer
- **Repository:** `d:\WebDev\roadmap-for-professional-degrees`
- **Output Directory:** `docs/critiquesGPT/`
- **Date:** 2026-11-08
- **Operational Standard:** Production-grade pre-production refactoring under Global Engineering Rules 1–7

---

## 1. Executive Context & Architectural Objectives

### 1.1 User Directives & Strategic Intent
1. **Separation of IT Practical Labs from Exam Papers:**
   - *Problem:* In the existing data model (`data/icab.json`), practical IT workshops were embedded directly inside the written examination papers `c7` (Information Technology, Certificate Level) and `p7` (IT Governance, Professional Level) under `embeddedLabs` and rendered as *"Mandatory Practical IT Lab Workshops"*.
   - *Correction:* ICAB regulations mandate that IT lab training sessions are separate practical qualification requirements, not embedded modules or prerequisites to sit for or pass the written `c7` and `p7` examination papers.
   - *Directive:* Extract the IT lab training modules out of `c7` and `p7` into an autonomous, dedicated practical skills roadmap (`icab-it-labs`).
2. **Modular Roadmap Expansion (Roadmap.sh Paradigm):**
   - *Inspiration:* Reference the design and structural architecture of `roadmap.sh`, where high-level role/qualification maps link out to dedicated deep-dive sub-roadmaps for specialized topics, tools, or papers.
   - *Architecture:* Equip node cards and drawers with clean sub-roadmap links (`Explore Dedicated Roadmap ↗`), enabling seamless cross-roadmap navigation while laying the foundation for future individual paper roadmaps (`c1` Accounting, `p2` Tax, etc.).
3. **Multi-Agent Dialectical Execution:**
   - Execute an adversarial 2-agent dialectic per segment during the diagnostic critique phase:
     - **Agent A (Investigator):** Read-only, zero code modifications, deep multi-axis audit.
     - **Agent B (Reviewer):** Stress-test findings, prune theoretical strawmen, evaluate cross-boundary side effects, score health (0–100).
   - Follow with a Master Reviewer evaluation before initiating the implementation phase.

---

## 2. Decoupled 3-Segment Decomposition Blueprint

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                               ARCHITECTURAL SEGMENTATION MAP                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SEGMENT 1: Data Architecture, Lab Extraction & Sub-Roadmap Schemas                    │
│ ├─ data/icab.json (strip embeddedLabs, add linkedRoadmaps contract to c7/p7)          │
│ ├─ data/icab-it-labs.json (new autonomous practical lab curriculum dataset)            │
│ ├─ data/acca.json (schema compatibility verification)                                  │
│ ├─ scripts/bundle-data.js & data/roadmaps.js (offline bundle & dynamic loader)        │
│ └─ docs/ICAB_2025_CURRICULUM_SPECIFICATION.md & ADRs (spec reconciliation)             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SEGMENT 2: UI/UX, Roadmap.sh Visual Metaphors & Component Presentation                 │
│ ├─ index.html (semantic containers, sub-roadmap breadcrumb, tabs/switcher)             │
│ ├─ styles.css (roadmap.sh node link badges, drawer redesign, dark/light contrast)      │
│ ├─ Node Card Presentation (differentiating terminal topics vs sub-roadmap portals)     │
│ └─ Details Drawer Redesign (purging "Mandatory Lab" banner; adding companion CTAs)     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SEGMENT 3: Behavioral State, Routing & Cross-Roadmap Navigation                        │
│ ├─ app.js (hash routing: #icab-grad, #icab-it-labs, #acca, deep-linking #qual/node)    │
│ ├─ State Machine & Progress Isolation (namespacing keys to avoid progress collisions)  │
│ ├─ Event Delegation & Cross-Roadmap Transitions (seamless drawer -> sub-map flow)      │
│ └─ 14 Web Behavioral Failure Modes Scan (WEB-001 through WEB-014 audit)                │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Segment 1: Data Architecture, Lab Extraction & Sub-Roadmap Schemas
- **Primary Boundary:** The data schema, static JSON datasets, data bundling script, and documentation specifications.
- **Key Files:**
  - `data/icab.json`
  - `data/acca.json`
  - `data/icab-it-labs.json` (target new creation)
  - `scripts/bundle-data.js`
  - `data/roadmaps.js`
  - `docs/ICAB_2025_CURRICULUM_SPECIFICATION.md`
  - `docs/ADR/0001-static-json-driven-architecture.md`
- **Core Seams & Contracts:**
  - `c7` and `p7` node schema: removal of `embeddedLabs`; addition of `linkedRoadmapId: "icab-it-labs"`, `linkedStageId: "stage-cl-it"` / `"stage-pl-it"`, and `subRoadmapBadge: "Practical Lab Available"`.
  - Schema for `icab-it-labs.json`: `{ id, title, category, description, routes: { all, cl_labs, pl_labs }, stages: [...] }`.
  - `scripts/bundle-data.js`: must cleanly bundle `icab`, `acca`, and `icab-it-labs` into `window.ROADMAP_DATA` with offline fallback for `file:///` protocols.

### Segment 2: UI/UX, Roadmap.sh Visual Metaphors & Component Presentation
- **Primary Boundary:** Visual hierarchy, component design, CSS architecture, responsive ergonomics, and drawer presentation.
- **Key Files:**
  - `index.html`
  - `styles.css`
  - `app.js` (rendering functions: `renderMap`, `openNodeDrawer`, `renderRouteSelector`)
- **Core Seams & Contracts:**
  - Visual distinction between regular exam milestones and linked sub-roadmap nodes (e.g. roadmap.sh-style portal badge `Explore Roadmap ↗`).
  - Drawer content overhaul: complete removal of the `🛠️ Mandatory Practical IT Lab Workshops` block from standard exam drawers; injection of clean companion cards with explicit callouts (`Companion Practical Skills`).
  - Sub-roadmap view header: contextual breadcrumb bar (`← Return to ICAB CA Exam Roadmap`) with zero layout shift (CLS).
  - High-craft accessibility: WCAG AAA compliance, touch targets >= 44px, semantic dialog ARIA attributes.

### Segment 3: Behavioral State, Routing & Cross-Roadmap Navigation
- **Primary Boundary:** Browser runtime state machine, hash routing, localStorage progress tracking, and event orchestration.
- **Key Files:**
  - `app.js`
  - Browser APIs: `window.location.hash`, `window.localStorage`, `window.history`
- **Core Seams & Contracts:**
  - URL Hash Routing: Parse and sync `#<qual>-<route>` as well as sub-roadmaps (`#icab-it-labs`, `#icab-it-labs-all`) and deep-linked nodes (`#icab-grad/c7`).
  - Progress Persistence Namespacing: Avoid progress key collisions between qualifications and lab modules (e.g. isolated progress scopes or composite milestone keys).
  - Navigation Transitions: Smooth transition when a user clicks a "Jump to IT Labs" CTA inside the `c7` drawer — closes drawer, changes hash, loads `icab-it-labs`, renders the map, and preserves browser history.
  - 14 Web Behavioral Bug Categories (`WEB-001` through `WEB-014`): Zero orphan views, zero unwired buttons, zero silent error swallowing.

---

## 3. Standard Output Template for Critique Reports

All subagents participating in the diagnostic critique phase must write their final consensus report to:
`docs/critiquesGPT/<segment_name>_critique.md`

Every report must adhere to this exact Markdown schema:

```markdown
# Architectural Critique Report: <Segment Name>
**Date:** YYYY-MM-DD  
**Evaluated Branch/Commit:** Pre-Implementation Baseline  
**Health Score:** <Score>/100  
**Status:** [CRITICAL ATTENTION | NEEDS HARDENING | PRODUCTION READY]  
**Participants:** Agent A (Investigator), Agent B (Adversarial Reviewer)

---

## 1. Executive Summary
<!-- High-density summary of the segment's architectural integrity, core defects, and trade-offs. Max 2 paragraphs. -->

---

## 2. Multi-Axis Scorecard
| Quality Dimension | Rating (1-10) | Primary Observation & Real-World Failure Mode |
| :--- | :---: | :--- |
| **Invariants & State Integrity** | X/10 | ... |
| **Data Schema & Seam Clarity** | X/10 | ... |
| **Behavioral Robustness & Edge Cases** | X/10 | ... |
| **UI Craft & Anti-Slop** | X/10 | ... |
| **Testability & Seam Decoupling** | X/10 | ... |

---

## 3. Behavioral Audit Findings Table (5-Layer Methodology)
<!-- Map all concrete defects found in this segment against WEB-001 through WEB-014 and domain invariants -->
| # | Bug ID | Short Title | File Location | Urgency | Risk: Fix | Risk: No Fix | ROI | Blast Radius | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | WEB-003 | Unwired Sub-Roadmap CTA in Node Drawer | `app.js:L344-L370` | 🔴 CRITICAL | Low | High | High | Component | Open |
| 2 | WEB-011 | Hash Desync on Route Switching | `app.js:L103-L125` | 🟡 HIGH | Low | Medium | High | Router | Open |

### Receipts & Remediation Plans
#### Finding #[X]: [<Bug ID>] <Title>
- **File & Line:** [`<path>`](file:///<absolute_path>#LXX-LYY)
- **Current Behavior:** <What the code currently does>
- **Real-World Failure Mode:** <Under what field conditions this code fails or confuses the user>
- **Authoritative Citation:** <Relevant ICAB Circular / ADR / Global Engineering Rule>
- **Concrete Actionable Remediation:** <Exact code adjustment required without handwaving>
- **Cross-Segment Blast Radius:** <Impact on Segment 1, 2, or 3>

---

## 4. Adversarial Reviewer Stress-Test & Doubt Gate
<!-- Agent B's rigorous cross-examination of Agent A's initial findings -->
### 4.1 Pruned Strawmen & Dismissed False Positives
- *Dismissed Item 1:* <Why a finding was rejected as a theoretical non-issue or banned trivial con>
- *Dismissed Item 2:* <Why normal boilerplate/file addition was rejected as a valid risk>

### 4.2 Cross-Segment Ripple Effect Analysis
- *Impact on Neighboring Interfaces:* <How changing this segment affects the others>
- *Data Migration & Backward Compatibility:* <Will existing localStorage progress break?>

---

## 5. Architectural Recommendations & Implementation Sequence
1. **Step 1:** ...
2. **Step 2:** ...
3. **Step 3:** ...
```

---

## 4. Complete Prompt Suite: Subagent Directives

### 4.1 Segment 1: Data Architecture, Lab Extraction & Sub-Roadmap Schemas

#### Prompt for Agent 1A (Deep Data & Schema Investigator)
```markdown
You are Agent 1A: Deep Data & Schema Investigator subagent for Segment 1 of the Chartered Roadmap modernization project on `d:\WebDev\roadmap-for-professional-degrees`.

Your mission is to conduct an exhaustive, read-only architectural investigation into the project's data layer, schema design, dataset bundling, and the user-mandated separation of practical IT labs from examination papers.

CRITICAL INVARIANT: You are in READ-ONLY mode. You MUST NOT modify, create, or delete any source code files. You only inspect files and synthesize diagnostic findings.

Target Files to Investigate:
- `data/icab.json` (specifically inspect c7 in Certificate Level, p7 in Professional Level across all routes: grad, hsc, pas, pro)
- `data/acca.json` (inspect route and node schemas for cross-qualification consistency)
- `scripts/bundle-data.js` (inspect how datasets are read and compiled into data/roadmaps.js)
- `data/roadmaps.js` (inspect the window.ROADMAP_DATA and window.ROADMAP_LOADER contract)
- `docs/ICAB_2025_CURRICULUM_SPECIFICATION.md` & `docs/ADR/0001-static-json-driven-architecture.md`

Investigation Dimensions & Questions:
1. IT Lab Contamination Audit:
   - Identify every route and stage in `data/icab.json` where `embeddedLabs` is attached to `c7` or `p7`.
   - Document the complete schema and content of these 5 embedded labs.
   - Explain why embedding them inside `c7` and `p7` violates official ICAB examination regulations (referencing ICAB's 2024/2025 curriculum circulars).
2. Autonomous IT Labs Dataset Design (`data/icab-it-labs.json`):
   - Propose the exact, complete JSON schema for a standalone `icab-it-labs.json` roadmap dataset.
   - How should the stages be structured (e.g., Stage 1: Financial Modeling & Applied Excel; Stage 2: ERP & Business Systems; Stage 3: BI, Analytics & AI; Stage 4: IS Security & Forensics; Stage 5: CAATs & Banking IS Audit)?
   - What metadata fields are required (tools, prerequisites, hours, competencies, verification checklists)?
3. Roadmap.sh Linked Sub-Roadmap Schema Contract:
   - How should `data/icab.json` represent that `c7` and `p7` have companion sub-roadmaps without conflating them with exam requirements?
   - Formulate the exact node metadata schema: e.g. `linkedRoadmaps: [{ id: "icab-it-labs", targetStage: "stage-cl-it", title: "IT Practical Labs", type: "companion" }]`.
   - Can this schema scale to future individual paper roadmaps (e.g. `icab-c1`, `icab-p2`)?
4. Bundler & Offline Architecture:
   - Inspect `scripts/bundle-data.js`. If a new `icab-it-labs.json` file is added, what breaks?
   - How does `window.ROADMAP_LOADER` handle dynamic loading vs. bundled offline fallback for `file:///` executions?
   - What happens if a user opens `index.html` locally without an HTTP server?

Output:
Synthesize an exhaustive, evidence-backed diagnostic report with exact line numbers and concrete schema proposals. Deliver your findings directly to the orchestrator for Agent 1B review.
```

#### Prompt for Agent 1B (Adversarial Data & Schema Reviewer)
```markdown
You are Agent 1B: Adversarial Data & Schema Reviewer subagent for Segment 1 on `d:\WebDev\roadmap-for-professional-degrees`.

Your role is to cross-examine, stress-test, and refine the investigative findings of Agent 1A with uncompromising engineering skepticism. You enforce Rule 2 (Multi-Option Planning & Doubt Gate) and Global Engineering Standards.

CRITICAL INVARIANT: You are in READ-ONLY mode. You MUST NOT modify, create, or delete any source code files.

Your Adversarial Review Checklist:
1. Doubt Gate Stress-Test:
   - "Under what real-world field conditions will this clean-looking schema fail?"
   - What happens to existing users who already completed `c7` or `p7` in `localStorage['chartered-roadmap-progress-v1']`? Will separating labs corrupt their progress percentage or delete their milestones?
   - If `bundle-data.js` injects `window.ROADMAP_DATA['icab-it-labs']`, does it cause memory bloat on low-end mobile devices?
2. Eliminate False Positives & Banned Trivial Cons:
   - Discard any findings that cite trivial developer artifacts (e.g., "adding icab-it-labs.json creates a new file", "requires another readFileSync call").
   - Filter out theoretical nitpicks that do not impact runtime stability, data integrity, or user clarity.
3. Cross-Segment Cohesion Check:
   - How will Segment 2 (UI/UX) consume the new `linkedRoadmaps` field? Is the contract minimal and easy to render without defensive boilerplate?
   - How will Segment 3 (State & Routing) know which datasets are available? Does `window.ROADMAP_DATA` provide an index of available roadmaps, or does `app.js` have to hardcode keys?
4. Health Score Formulation:
   - Assign an objective Health Score (0–100) to Segment 1's current data architecture.
5. Finalize Consensus Critique Report:
   - Combine Agent 1A's valid findings and your adversarial critique into the standard report format.
   - Persist the report to `docs/critiquesGPT/segment_1_data_and_schemas_critique.md`.
```

---

### 4.2 Segment 2: UI/UX, Roadmap.sh Visual Metaphors & Component Presentation

#### Prompt for Agent 2A (Deep UI/UX & Craft Investigator)
```markdown
You are Agent 2A: Deep UI/UX & Craft Investigator subagent for Segment 2 on `d:\WebDev\roadmap-for-professional-degrees`.

Your mission is to conduct a rigorous, read-only frontend craft and UX audit based on `/impeccable`, `/design-taste-frontend`, and `roadmap.sh` design conventions.

CRITICAL INVARIANT: You are in READ-ONLY mode. You MUST NOT modify, create, or delete any source code files.

Target Files to Investigate:
- `index.html` (layout, header, qualification tabs, route pills, progress card, map viewport, drawer dialog)
- `styles.css` (CSS variables, `.node-card`, `.stage-row`, `.details-drawer`, `.embedded-labs-list`, dark mode tokens, typography)
- `app.js` (UI generation: `renderMap`, `openNodeDrawer`, `renderRouteSelector`)

Investigation Dimensions & Questions:
1. Roadmap.sh Visual Metaphors & Node Differentiation:
   - In `roadmap.sh`, nodes are not all identical boxes. There are core required topics, optional topics, and linked sub-roadmaps with badges/icons.
   - In our current `styles.css` and `app.js`, every node is a generic `.node-card` with a category tag.
   - How should nodes that have linked sub-roadmaps (like `c7` IT, `p7` IT Governance) be visually elevated? (e.g. an "Explore Roadmap ↗" badge, distinct border accent, or hover effect).
2. Elimination of AI Slop & Misleading UI:
   - Currently, `openNodeDrawer` renders `🛠️ Mandatory Practical IT Lab Workshops` with hardcoded styling inside the written exam paper drawer.
   - Audit the exact styling and UX flaws of this drawer section.
   - Design the replacement UI: A clean "Companion Practical Roadmap" callout card with description, badge, and an actionable button ("Open IT Practical Labs Roadmap ↗").
3. Multi-Roadmap Navigation & Switching UX:
   - Currently, `index.html` has two static tab buttons: `#tab-icab` and `#tab-acca`.
   - How should the UI accommodate the new `icab-it-labs` roadmap and future sub-roadmaps?
   - Should there be a segmented control grouping "Professional Degrees" (ICAB CA, ACCA) and "Specialized Roadmaps" (IT Practical Labs), or a clean dropdown/switcher?
   - When viewing `icab-it-labs`, how does the user navigate back? Design a top contextual breadcrumb/banner ("← Back to ICAB CA Main Roadmap").
4. Impeccable Craft, Dark Mode & Mobile Ergonomics:
   - Check contrast ratios for `.cat-Exam`, `.cat-Experience`, `.cat-Admin`, `.cat-Ethics`, `.cat-Training` in both light mode and dark mode.
   - Audit touch target sizes for all interactive elements (must be >= 44x44px per WCAG 2.5.5).
   - Check layout shift (CLS) when switching tabs or opening the drawer.
   - Verify keyboard accessibility and focus rings on `.node-card` and drawer buttons.

Output:
Produce an exhaustive UI/UX diagnostic breakdown citing specific CSS selectors, HTML line numbers, and visual hierarchy recommendations. Deliver to orchestrator for Agent 2B review.
```

#### Prompt for Agent 2B (Adversarial UI/UX & Layout Reviewer)
```markdown
You are Agent 2B: Adversarial UI/UX & Layout Reviewer subagent for Segment 2 on `d:\WebDev\roadmap-for-professional-degrees`.

Your role is to cross-examine Agent 2A's visual audit with ruthless attention to production front-end engineering, usability edge cases, and design discipline.

CRITICAL INVARIANT: You are in READ-ONLY mode. You MUST NOT modify, create, or delete any source code files.

Your Adversarial Review Checklist:
1. Doubt Gate Stress-Test:
   - "Under what real-world viewing conditions will this UI design break?"
   - What happens on narrow mobile viewports (iPhone SE / 375px width)? Does the breadcrumb wrap awkwardly? Does the drawer cover the viewport without a reachable close button?
   - What happens in High Contrast Mode or forced-colors OS settings?
   - Does introducing sub-roadmap badges create visual clutter ("badge fatigue") that distracts students from core exam milestones?
2. Eliminate Subjective Nitpicks & Enforce Rule 2:
   - Prune subjective aesthetic opinions that lack structural UX justification.
   - Reject any resistance based on "adds CSS rules" or "makes styles.css longer". Focus strictly on user comprehension, scanability, and performance.
3. Cross-Segment Cohesion Check:
   - Does the proposed UI design strictly depend on the schema established by Segment 1 (`linkedRoadmaps` metadata)?
   - Can the proposed drawer CTA trigger Segment 3's hash router without page reloads or layout jumping?
4. Health Score Formulation:
   - Assign an objective Health Score (0–100) to Segment 2's current UI/UX implementation.
5. Finalize Consensus Critique Report:
   - Synthesize Agent 2A's findings and your adversarial review into the standard critique report.
   - Persist the report to `docs/critiquesGPT/segment_2_ui_ux_presentation_critique.md`.
```

---

### 4.3 Segment 3: Behavioral State, Routing & Cross-Roadmap Navigation

#### Prompt for Agent 3A (Deep Behavioral State & Navigation Investigator)
```markdown
You are Agent 3A: Deep Behavioral State & Navigation Investigator subagent for Segment 3 on `d:\WebDev\roadmap-for-professional-degrees`.

Your mission is to execute a rigorous 5-layer behavioral audit across `app.js` using the `/behavioral-audit` framework (scanning against the 14 Web Behavioral Bug Categories WEB-001 through WEB-014).

CRITICAL INVARIANT: You are in READ-ONLY mode. You MUST NOT modify, create, or delete any source code files.

Target Files to Investigate:
- `app.js` (specifically: `state`, `initTheme`, `loadProgress`, `saveProgress`, `syncStateFromHash`, `updateHash`, `loadRoadmap`, `renderMap`, `openNodeDrawer`, `bindEvents`)
- `index.html` (interactive buttons, forms, hash anchors, script loading sequence)

Investigation Dimensions (The 5 Layers & 14 Bug Categories):
1. Layer 1: Route Reachability & Entry Point Discovery:
   - Scan `syncStateFromHash` and `updateHash`. How are routes currently represented? (`#icab-<routeId>` and `#acca`).
   - What happens if the hash is `#icab-it-labs` or `#icab-it-labs-all`? Flag any **Orphan Route / Feature (`WEB-001`)** where sub-roadmaps cannot be reached directly via URL or refresh.
2. Layer 2: Async Flow Tracing & Action Mapping:
   - Trace `loadRoadmap(qualId)` when invoked during tab switching or hashchange.
   - Is there a loading spinner or skeleton, or does the UI freeze during large dataset rendering? Check for **Loading State Trap (`WEB-010`)**.
   - If an invalid roadmap ID is passed, does `loadRoadmap` swallow the error or leave the page in an unrecoverable broken state? Check for **Silent Error Swallowing (`WEB-014`)**.
3. Layer 3: Behavioral Traps & Unwired CTAs:
   - Check `el.roadmapTree` and `el.drawer` event delegation. If a user clicks a "Linked Practical Lab Roadmap" button in the drawer, is it wired to a handler or is it an **Unwired CTA / Dead End (`WEB-003`)**?
   - Check `el.resetProgressBtn`. Does resetting progress wipe milestones across ALL qualifications, or only the current route? Check for **Data Loss Traps**.
4. Layer 4: State Invariants & Progress Isolation:
   - In `app.js`, `state.progress` is a flat dictionary `{ [node.id]: boolean }`.
   - What happens if `icab-it-labs` uses node IDs like `lab-1`, `lab-2`, or what if two roadmaps have overlapping node IDs (e.g. `c7`)?
   - How should progress keys be namespaced (e.g. `${qualId}:${nodeId}`) to maintain total data isolation?
5. Layer 5: 5-Hop Round-Trip Cross-Roadmap Transition:
   - Trace the exact 5-hop user journey:
     [Hop 1: User clicks c7 Exam Card] ->
     [Hop 2: openNodeDrawer renders c7 metadata + "Explore IT Practical Labs" CTA] ->
     [Hop 3: User clicks CTA -> event handler updates window.location.hash to #icab-it-labs] ->
     [Hop 4: hashchange fires -> loadRoadmap('icab-it-labs') -> state updates] ->
     [Hop 5: Map re-renders with IT Lab stages + Breadcrumb back to #icab-grad].
   - Identify every place in this 5-hop flow where state could desynchronize (**URL-State Desynchronization `WEB-011`**).

Output:
Produce an evidence-backed diagnostic report with exact line numbers and an Issue Rating Table. Deliver to orchestrator for Agent 3B review.
```

#### Prompt for Agent 3B (Adversarial Behavioral State & Architecture Reviewer)
```markdown
You are Agent 3B: Adversarial Behavioral State & Architecture Reviewer subagent for Segment 3 on `d:\WebDev\roadmap-for-professional-degrees`.

Your role is to cross-examine Agent 3A's behavioral findings, filter theoretical noise, and evaluate state machine edge cases and browser environment quirks.

CRITICAL INVARIANT: You are in READ-ONLY mode. You MUST NOT modify, create, or delete any source code files.

Your Adversarial Review Checklist:
1. Doubt Gate Stress-Test:
   - "Under what real-world browser conditions will this state machine fail?"
   - What happens when a user presses the browser's Back and Forward buttons rapidly? Does `hashchange` trigger race conditions where `loadRoadmap` overwrites state with stale data?
   - What happens if localStorage is disabled (Incognito mode, strict Safari tracking prevention, or quota exceeded)? Does `app.js` throw an unhandled exception and crash the entire UI?
   - What happens if a user navigates directly to a bookmarked deep-link like `https://.../#icab-it-labs` on first load? Does `init()` cleanly initialize `state.qualId` without falling back to `icab`?
2. Eliminate False Positives & Banned Trivial Cons:
   - Filter out recommendations that demand unnecessary third-party router libraries (like React Router, Navigo, etc.). This is a lean, zero-dependency vanilla JS application; solutions must remain native, lightweight, and robust.
   - Enforce Rule 2: Favor simplicity and density over speculative abstractions.
3. Cross-Segment Cohesion Check:
   - Does Segment 3's router support the exact data keys generated by Segment 1?
   - Does it cleanly toggle the UI classes defined by Segment 2?
4. Health Score Formulation:
   - Assign an objective Health Score (0–100) to Segment 3's current behavioral state architecture.
5. Finalize Consensus Critique Report:
   - Synthesize Agent 3A's findings and your adversarial review into the standard critique report.
   - Persist the report to `docs/critiquesGPT/segment_3_behavioral_routing_critique.md`.
```

---

## 5. Master Reviewer & Head Reviewer Evaluation Protocol

Once all three segment critique reports are written to `docs/critiquesGPT/`, the **Master Reviewer (Head Reviewer)** is invoked to conduct the overarching architectural synthesis before green-lighting the implementation phase.

### 5.1 Evaluation Gates & Rubric
The Master Reviewer must verify:
1. **Cross-Segment Interface Alignment:**
   - Does Segment 1's data contract (`data/icab-it-labs.json`, `linkedRoadmaps`) perfectly match Segment 2's rendering logic and Segment 3's router expectations?
   - Are there any mismatched IDs, orphan schemas, or circular dependencies?
2. **Composite Health Score Computation:**
   - Compute the weighted system health score:
     $$\text{System Health} = (0.35 \times \text{Seg 1}) + (0.35 \times \text{Seg 2}) + (0.30 \times \text{Seg 3})$$
   - Minimum threshold to green-light implementation: **70/100** baseline assessment with clear, prioritized remediation paths.
3. **Pre-Implementation Verification:**
   - Ensure zero source code was touched during the critique phase (`git status` is completely clean).
   - Verify that all three reports exist and follow the standard markdown schema in `docs/critiquesGPT/`.
4. **Implementation Phase Transition Plan:**
   - Outline the sequential implementation order (Segment 1 $\rightarrow$ Segment 2 $\rightarrow$ Segment 3) using the 2-agent Builder-Critic dialectical implementation loop.
   - Define the verification gates (Type safety, JSON schema validation, offline browser tests).

### 5.2 Master Synthesis Report Destination
The Master Reviewer documents the final verdict in:
`docs/critiquesGPT/master_architectural_synthesis.md`

---

## 6. Execution Directives for Subagent Dispatch

When dispatching the subagents, the Orchestrator must observe the following protocol:

| Step | Action | Executing Subagent | Required Output |
| :---: | :--- | :--- | :--- |
| **1** | Run Segment 1 Investigation | Agent 1A | Investigative draft report |
| **2** | Run Segment 1 Adversarial Review | Agent 1B | `docs/critiquesGPT/segment_1_data_and_schemas_critique.md` |
| **3** | Run Segment 2 Investigation | Agent 2A | Investigative draft report |
| **4** | Run Segment 2 Adversarial Review | Agent 2B | `docs/critiquesGPT/segment_2_ui_ux_presentation_critique.md` |
| **5** | Run Segment 3 Investigation | Agent 3A | Investigative draft report |
| **6** | Run Segment 3 Adversarial Review | Agent 3B | `docs/critiquesGPT/segment_3_behavioral_routing_critique.md` |
| **7** | Master Reviewer Evaluation | Head Reviewer | `docs/critiquesGPT/master_architectural_synthesis.md` |
| **8** | Implementation Handoff | Orchestrator | Transition to 2-agent dialectical Builder-Critic loop |

---
*End of Blueprint. Ready for execution.*
