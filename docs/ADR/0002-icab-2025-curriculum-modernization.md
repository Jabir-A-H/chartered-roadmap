# ADR 0002: ICAB 2025 Syllabus & Practical IT Lab Curriculum Modernization

- **Status:** Accepted
- **Date:** 2026-11-08
- **Deciders:** Antigravity Engineering Lead, CA Curriculum Strategist, Adversarial Curriculum Critic
- **Consulted:** Official ICAB 2025 Syllabus (`D:\CA Resources\Study Manuals\ICAB Latest Syllabus (2025).pdf`), ICAB Portal (`https://www.icab.org.bd/page/icab-latest-syllabus`)

---

## Context & Problem Statement

The Institute of Chartered Accountants of Bangladesh (ICAB) enacted the **ICAB Syllabus 2025**, representing the most consequential transformation in the qualification's history. The new curriculum:
1. Adopts the **Design Down Methodology (DDM)**, shifting the learning paradigm from historical accounting record-keeping to proactive business leadership, ESG stewardship, and digital intelligence.
2. Re-architects exam durations, marks, and frequencies:
   - Certificate Level: 1.5 hours standard; condensed **1.0 hour / 50 marks** for *Business Laws* and *Information Technology* (Total Certificate marks: **600 marks** across 7 papers; sat 3 times/year).
   - Professional Level: 3.5 hours standard; extended **4.0 hours / 100 marks** for *IT Governance* (Total Professional marks: **700 marks** across 7 papers; sat 2 times/year).
   - Advanced Level: 3.5 hours for *Corporate Reporting* and the renamed *Strategic Business Management and Leadership*; extended **4.5 hours / 100 marks** for the capstone *Case Study* (Total Advanced marks: **300 marks**; sat 2 times/year).
   - Total examination marks for full ACA qualification: **1,600 marks** across 17 exams.
3. Embeds mandatory hands-on practical lab class syllabi within *Information Technology* (QuickBooks/Sage, Applied Excel) and *IT Governance* (Power BI/AI, Cybersecurity Forensics, Core Banking CAAT scenarios).
4. Pervasively integrates contemporary themes: ISSB (IFRS S1 & S2) sustainability standards, double materiality, AI in financial analysis, ISACA CISA-aligned controls, and AML/CFT anti-financial crime safeguards.

The previous codebase represented the syllabus using a 2024 brochure baseline with flat text strings, lacking structured marks, durations, specification grids, or lab workshop details. We must modernize the data model and visual drawer while strictly preserving the application's zero-dependency static runtime, responsive layout, and student progress calculation.

---

## Decision Drivers

1. **Pedagogical & Regulatory Fidelity:** Mappings must mirror the 178-page official 2025 syllabus with 100% precision.
2. **Progress Tracking Invariance:** Stage completion metrics (`stageDoneCount / nodes.length`) must remain strictly aligned with the 17 formal board examination papers (7 CL, 7 PL, 3 AL).
3. **Exemption Route Safety:** ACCA and ICMAB members entering via the `pro` route must not be presented with invalid or un-exempted phantom lab milestones.
4. **Rich Visual Discovery:** Students must be able to view exam durations, frequency, marks, syllabus specification weightings, modern theme badges, and embedded hands-on lab workshop activities inside the interactive drawer.
5. **Backwards Compatibility:** Datasets must continue to function offline (`file:///` protocol) and with `data/acca.json`.

---

## Considered Alternatives

### Alternative 1: Conservative String Shimming
Embed all new marks, timings, and lab descriptions into plain text strings inside `description`.
- *Pros:* Zero JavaScript or CSS changes required.
- *Cons:* Destroys discoverability; students cannot filter or quickly view exam duration or weighting grids; fails to highlight ICAB's new practical IT labs.

### Alternative 2: Standalone Milestone Nodes for Hands-on Labs
Inject 5 new top-level milestone nodes into Certificate (`lab-cl-1`, `lab-cl-2`) and Professional (`lab-pl-1`, `lab-pl-2`, `lab-pl-3`) stages.
- *Pros:* Allows independent checking-off of lab workshops.
- *Cons (Rejected via Adversarial Review):* Corrupts stage progress counters (reporting 9 milestones instead of 7 papers for Certificate Level); blurs the line between statutory board exams and practical firm workshops; breaks the ACCA/ICMAB `pro` exemption route where students are exempt from IT Governance.

### Alternative 3: First-Class 17-Paper Exam Framework with Embedded Lab Workshops (Chosen)
Retain the canonical 17-paper examination node model across all four routes (`grad`, `hsc`, `pas`, `pro`). Extend the node schema to support first-class metadata (`marks`, `duration`, `frequency`, `format`, `modernThemes`, `specificationGrid`, `embeddedLabs`). Enhance `app.js` and `styles.css` to render rich badges, specification tables, and interactive lab workshop cards in the details drawer.

---

## Decision Outcome

**Chosen Alternative: Alternative 3.**

### Architectural Specifications:

1. **Schema Extension in `data/icab.json`:**
   Each examination node is enriched with:
   ```json
   {
     "id": "c7",
     "name": "Information Technology",
     "category": "Exam",
     "marks": 50,
     "duration": "1.0 Hour",
     "frequency": "3 sittings / year",
     "format": "Computer-Based Assessment (Objective / Scenario)",
     "modernThemes": ["AI & Big Data", "Cloud Architecture", "Cybersecurity", "Disaster Recovery"],
     "specificationGrid": [
       { "area": "Building Information Systems", "weight": "15 Marks (30%)" },
       { "area": "Managing Information Systems", "weight": "15 Marks (30%)" },
       { "area": "Information Technologies", "weight": "10 Marks (20%)" },
       { "area": "Business Continuity & Disaster Recovery", "weight": "10 Marks (20%)" }
     ],
     "embeddedLabs": [
       {
         "title": "Accounting Software Implementation (QuickBooks / Sage)",
         "duration": "2–4 Weeks (Hands-on sessions)",
         "tools": ["QuickBooks", "Sage", "ERP Sandbox"],
         "learningOutcomes": ["Chart of Accounts configuration", "AR/AP/GL setup", "Data migration & rollback", "Post-implementation IS audit"]
       },
       {
         "title": "Applied Excel for Accountants",
         "duration": "1–2 Weeks (Hands-on sessions)",
         "tools": ["Microsoft Excel", "Power Query", "Financial Modeling"],
         "learningOutcomes": ["XLOOKUP / INDEX-MATCH", "Dynamic Pivot Tables", "What-If Analysis", "Executive Financial Dashboards"]
       }
     ],
     "description": "..."
   }
   ```

2. **Zero-Regression Progress Calculation:**
   Progress tracking logic in `app.js` continues to count milestone nodes cleanly. Certificate Level tracks `x / 7`, Professional Level tracks `x / 7`, Advanced Level tracks `x / 3`.

3. **Drawer Upgrade in `app.js` & `styles.css`:**
   The drawer dynamically renders:
   - Metadata badge pills (Marks, Duration, Sitting Frequency, Assessment Format).
   - Modern thematic tags (ESG & Sustainability, AI, Islamic Finance, ISACA/CISA).
   - Formatted specification grid table.
   - Interactive practical lab workshop cards detailing toolkits and real-world banking CAAT scenarios.

4. **Regeneration Pipeline:**
   `scripts/bundle-data.js` synchronizes the expanded dataset into `data/roadmaps.js`, preserving instant offline capability.

---

## Consequences

### Positive:
- **Total Alignment:** Exactly mirrors the official 178-page ICAB 2025 Syllabus.
- **Accurate Progress:** Progress bars strictly measure the 17 board exams.
- **Exemption Safety:** ACCA and ICMAB routes remain completely intact without anomalous lab prerequisites.
- **Enhanced Student Utility:** Aspirants gain immediate visibility into exam durations, frequency, topic weights, and required software tools.

### Negative / Neutral:
- Minor increase in `data/icab.json` payload size (~18 KB), which remains negligible for local and edge hosting.
- Requires careful HTML template handling in `app.js` with semantic CSS classes.
