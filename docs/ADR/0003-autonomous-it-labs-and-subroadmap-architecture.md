# ADR 0003: Autonomous IT Practical Labs & Roadmap.sh Sub-Roadmap Architecture

- **Status:** Accepted
- **Date:** 2026-11-08
- **Deciders:** Antigravity Engineering Lead, CA Curriculum Strategist, Adversarial QA Critic
- **Consulted:** ICAB Council Circulars on Syllabus 2024/2025, Roadmap.sh Architectural Patterns, Segment 1 Critique (`docs/critiquesGPT/segment_1_data_and_schemas_critique.md`)

---

## Context & Problem Statement

In ADR 0002, practical IT software training workshops were temporarily modeled as `embeddedLabs` inside written examination milestone nodes (`c7` Information Technology and `p7` IT Governance) in `data/icab.json`. While this accurately recorded the workshop curriculum, it introduced critical architectural and pedagogical defects:
1. **Regulatory Misalignment:** Under ICAB examination regulations, hands-on software workshops (Accounting Software in QuickBooks/Sage, Applied Excel, Power BI/AI, Cybersecurity Forensics, Banking CAATs) are independent training requirements administered by the ICAB IT Training Centre. They are not tested within the 1-hour computer-based MCQ assessment for `c7` or the written paper for `p7`.
2. **Progress Tracking Invalidation:** Students could not track practical software competencies independently from sitting written exam papers.
3. **Data Redundancy:** 276 lines of identical lab JSON were triplicated across `grad`, `hsc`, and `pas` routes in `data/icab.json`.
4. **Offline Bundling Vulnerability:** `scripts/bundle-data.js` hardcoded dataset reads, failing silently or crashing via CORS when new sub-roadmaps were loaded via `file:///`.

---

## Decision Drivers

1. **Autonomous Sub-Roadmap Pattern:** Follow modern modular curriculum paradigms (e.g., `roadmap.sh`), where high-level qualification maps link out to dedicated, specialized sub-roadmaps.
2. **Pedagogical Cleanliness:** Clear separation between written theoretical/objective examination papers and hands-on software/IS audit workshops.
3. **Dynamic Offline Bundling:** Automatic build-time discovery, validation, and offline compilation of all JSON datasets in `data/` into `data/roadmaps.js`.
4. **Collision-Proof Namespacing:** Clean, distinct node IDs (`lab-cl-1`, `lab-cl-2`, `lab-pl-1`, `lab-pl-2`, `lab-pl-3`) ensuring zero collisions in `localStorage` progress tracking.

---

## Decision Outcome

**Chosen Architectural Direction:**
1. **Creation of `data/icab-it-labs.json`:**
   - Standalone sub-roadmap dataset (`type: "sub-roadmap"`) with `parentRoadmap: { id: "icab", title: "ICAB Chartered Accountancy (CA)", returnHash: "icab-grad" }`.
   - Default route `all` containing 2 stages: `cl-practical-labs` (2 labs) and `pl-practical-labs` (3 labs).
   - Filtered routes `cl_labs` (Certificate Level only) and `pl_labs` (Professional Level only).
   - Rich schema per node: `id`, `name`, `category: "Training"`, `duration`, `tools`, `competencies`, `checklists`, and `description`.

2. **Cleansing of `data/icab.json`:**
   - Completely stripped `embeddedLabs` from `c7` and `p7` across all routes (`grad`, `hsc`, `pas`).
   - Cleaned `format` and `description` to focus purely on the written examination syllabus.
   - Introduced `linkedRoadmaps` metadata contract pointing to `icab-it-labs` with target route and stage.

3. **Dynamic Compiler `scripts/bundle-data.js`:**
   - Uses `fs.readdirSync` to discover all `data/*.json` files automatically.
   - Runs `JSON.parse` build-time validation to catch syntax errors fast.
   - Compiles all datasets into `window.ROADMAP_DATA` in `data/roadmaps.js` for zero-latency, CORS-free offline operation.

---

## Consequences

- **Positive:**
  - 100% regulatory fidelity with official ICAB examination rules.
  - Students can track practical competencies independently from written exam passes.
  - Sub-roadmaps can scale to future paper-specific or specialization guides without manual bundler updates.
  - Zero data loss for existing users: written exam progress (`c7`, `p7`) in `localStorage` remains completely valid.
- **Negative / Trade-offs:**
  - Requires Segment 2 to support sub-roadmap badges and breadcrumbs.
  - Requires Segment 3 router to parse hyphenated sub-roadmap keys (`icab-it-labs`).
