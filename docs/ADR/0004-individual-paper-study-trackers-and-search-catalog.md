# ADR 0004: Individual Exam Paper Study Trackers and Roadmap.sh-Style Search Catalog

## Status
Accepted

## Date
2026-11-09

## Context & Problem Statement
In accordance with the official ICAB Syllabus 2025 (`"D:\CA Resources\Study Manuals\ICAB Latest Syllabus (2025).pdf"`), candidates preparing for professional exams require granular chapter-by-chapter and topic-by-topic tracking rather than just high-level qualification milestone tracking. 

As the application expanded from 2 parent qualifications (`icab`, `acca`) and 1 practical labs roadmap (`icab-it-labs`) to **20 distinct roadmaps** (adding 17 individual study tracker roadmaps for each of the 7 Certificate, 7 Professional, and 3 Advanced exam papers), the existing tab-based switcher was no longer scalable. Users needed an intuitive way to search, filter, explore, and deep-link directly into individual papers and syllabus topics, inspired by industry reference architectures like `roadmap.sh`.

Additionally, the workspace contained historical prototype files (`roadmap.html`, Markdown prototype notes, and ad-hoc test scripts) in the project root without a formal package management or unified test harness.

## Decision Drivers
1. **Granular Syllabus Study Tracking**: Students must be able to track chapter progress, learning outcomes (CLOs), syllabus weights, and study milestones across all 17 ICAB papers.
2. **Roadmap.sh Feature Parity**: Omnipresent Command Palette (`Ctrl+K`), live keyword search matching roadmaps and internal topics, filter chips, and an interactive Explore Catalog modal.
3. **Repository Cleanliness & Safety**: Quarantine historical prototypes into `archive/` without unilateral deletion (Rule 4), provide `package.json` for npm script standards, and consolidate fragmented test scripts into `scripts/verify-all.js`.
4. **Offline Zero-Dependency Runtime**: Preserve full client-side execution via `data/roadmaps.js` with zero runtime npm dependencies.
5. **Bidirectional Navigation & Context Preservation**: Seamless transitions between parent qualification roadmaps, individual paper study trackers, and practical IT labs with return breadcrumbs.

## Considered Options
1. **Option 1: Monolithic Nested Schema**: Embed all chapters and topics as sub-arrays inside `data/icab.json`.
   - *Pros*: Single JSON file.
   - *Cons*: Bloats `data/icab.json` to over 500 KB; breaks clean separation of concerns; high cognitive load on the qualification overview tree; sluggish rendering on mobile devices.
2. **Option 2: Standalone Micro-Roadmaps with Central Catalog & Command Palette (Selected)**:
   - Generate 17 autonomous JSON datasets (`data/icab-c1.json` through `data/icab-v3.json`).
   - Cross-link each paper node in `data/icab.json` via `linkedRoadmaps`.
   - Introduce an omnipresent search modal (`Ctrl+K`), category filter chips, and an Explore Catalog view.
   - *Pros*: Modular architecture; thin slices of state; high-speed indexed search; instant deep-linking; clean UI matching `roadmap.sh`.
   - *Cons*: Requires bundle synchronization via `scripts/bundle-data.js`.

## Decision Outcome
Chosen Option: **Option 2**.

### Architecture & Implementation Details
1. **17 Individual Paper Roadmaps**:
   - `icab-c1` through `icab-c7` (Certificate Level: Accounting, Assurance, Business Technology & Finance, Management Information, Principles of Taxation, Business Laws, Information Technology).
   - `icab-p1` through `icab-p7` (Professional Level: Financial Accounting & Reporting, Audit & Assurance, Business Planning: Tax & Compliance, Financial Management, Business Strategy & Technology, Corporate Laws & Practices, IT Governance).
   - `icab-v1` through `icab-v3` (Advanced Level: Corporate Reporting, Strategic Business Management & Leadership, Case Study).
2. **Search & Command Palette (`Ctrl+K` / `⌘K`)**:
   - Header search bar triggering an accessible modal dialog.
   - Live multi-axis search matching roadmap titles, paper codes, summaries, tags, and individual topic nodes across all 20 roadmaps.
   - Search filter chips: `All (20)`, `Qualifications (2)`, `Certificate (7)`, `Professional (7)`, `Advanced (3)`, `Practical Labs (1)`.
   - Full keyboard navigation (`↑`/`↓` selection, `↵` navigation, `Esc` dismissal).
3. **Explore All Roadmaps Modal**:
   - Grouped card grid displaying all 20 roadmaps categorized by qualification level.
   - Live completion progress calculation (`done / total (percent%)`) read from `safeStorage`.
4. **Repository Hygiene & Unified Verification**:
   - Quarantined `roadmap.html`, `roadmap-for-professional-accounting-certifications-2026-10-27.md`, and `scripts/test-acca-hash.js` into `archive/`.
   - Added zero-dependency `package.json` (`npm start`, `npm run build`, `npm test`).
   - Unified verification in `scripts/verify-all.js` testing schema validity, bundling, cross-links, routing, search indexing, and namespacing.

## Consequences
- **Positive**:
  - Full syllabus coverage for all 17 ICAB exam papers with exact learning outcomes and weightages from the 2025 PDF.
  - Effortless navigation and discovery via `Ctrl+K` search and Explore Catalog.
  - Zero-dependency architecture preserved.
  - Clean project root with formal npm script support.
- **Negative / Risks**:
  - 20 datasets bundled into `data/roadmaps.js` (~350 KB uncompressed, ~60 KB gzip), which remains well within high-performance web budgets.
