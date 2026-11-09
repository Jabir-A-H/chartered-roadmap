# Chartered Roadmap 🧭

> Interactive visual roadmaps, chapter-by-chapter study trackers, and qualification pathways for professional accountancy and finance qualifications (ICAB CA Curriculum 2025, ACCA, and beyond). Inspired by [roadmap.sh](https://roadmap.sh).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Deployment](https://img.shields.io/badge/Deploy-Cloudflare%20Pages%20%7C%20GitHub%20Pages-blue.svg)](#deployment)
[![Version](https://img.shields.io/badge/Version-1.4.0-blue.svg)](package.json)

---

## 🌟 Why Chartered Roadmap?

Information for professional qualifications—such as Chartered Accountancy (CA) and ACCA—is notoriously scattered across lengthy PDF circulars, 180-page syllabus manuals, and institutional portals. Students face complex challenges:
- **Multiple Entry Routes:** Graduate entry, HSC/A-Level direct entry, Pre-Articleship (PAS), and mutual professional exemptions.
- **Concurrent Milestones:** Managing intensive articleship alongside multi-tier exams (Certificate, Professional, and Advanced levels).
- **Chapter-Level Study Tracking:** Moving beyond exam-level milestones to track specific chapters, syllabus areas, learning outcomes (CLOs), and study checklists.

**Chartered Roadmap** gives aspirants a comprehensive, node-based progression map and interactive study tracker. Search across any topic, tap any milestone for syllabus breakdowns, and tick off topics as you master them—persisted locally in your browser.

---

## 🗺️ 20 Available Roadmaps & Study Trackers

### 1. Full Professional Qualifications (2)
- **[ICAB Chartered Accountancy (Curriculum 2025)](data/icab.json):** 17 examinations (1,600 marks), 5 IT practical labs, 4 entry routes (Graduate, HSC, PAS, Professional Exemption), and articleship milestones.
- **[ACCA (Global)](data/acca.json):** 7 stages across Applied Knowledge, Applied Skills, Strategic Professional, EPSM ethics, and 36-month Practical Experience Requirement (PER).

### 2. Certificate Level Individual Paper Study Trackers (7)
Official 2025 Syllabus chapter and topic study roadmaps with specification grid weightings and learning outcome checklists:
- **[C1 - Accounting](data/icab-c1.json):** Double-entry, adjustments, sole trader & company accounts (IAS 1), public financial management (PFM). (100 Marks · 1.5h)
- **[C2 - Assurance](data/icab-c2.json):** 5 elements of assurance, COSO internal controls, substantive testing (AEIOU), and IESBA ethics. (100 Marks · 1.5h)
- **[C3 - Business, Technology and Finance](data/icab-c3.json):** Organizational structures, financial markets, PESTEL, CSR, and digital transformation. (100 Marks · 1.5h)
- **[C4 - Management Information](data/icab-c4.json):** Costing methods, budgeting, standard costing variance analysis, CVP, and data analytics. (100 Marks · 1.5h)
- **[C5 - Principles of Taxation](data/icab-c5.json):** Income Tax Act 2023 individual and corporate computations, TDS, and VAT Act 2012. (100 Marks · 1.5h)
- **[C6 - Business Laws](data/icab-c6.json):** Companies Act 1994, Negotiable Instruments Act 1881, Partnership Act 1932, and Contract Act 1872. (50 Marks · 1.0h)
- **[C7 - Information Technology](data/icab-c7.json):** Systems analysis & SDLC, agile, cloud architectures, relational DBMS/SQL, and cybersecurity. (50 Marks · 1.0h)

### 3. Professional Level Individual Paper Study Trackers (7)
- **[P1 - Financial Accounting and Reporting](data/icab-p1.json):** Single entity IFRS/BFRS, group consolidation (IFRS 10/3), AAOIFI Islamic finance, and IPSAS. (100 Marks · 3.0h)
- **[P2 - Audit and Assurance](data/icab-p2.json):** ISA risk assessment (ISA 315), planning materiality, fraud responsibilities, KAM, and auditor reporting. (100 Marks · 3.0h)
- **[P3 - Business Planning: Taxation & Compliance](data/icab-p3.json):** Tax litigation, Appellate Tribunal, ADR, transfer pricing, corporate M&A tax, and VAT disputes. (100 Marks · 3.0h)
- **[P4 - Financial Management](data/icab-p4.json):** WACC, Modigliani-Miller capital structure, DCF appraisal under capital rationing, business valuation, and derivatives. (100 Marks · 3.0h)
- **[P5 - Business Strategy & Technology](data/icab-p5.json):** VRIO analysis, Porter models, Bowman Strategy Clock, Balanced Scorecard, and change management. (100 Marks · 3.0h)
- **[P6 - Corporate Laws & Practices](data/icab-p6.json):** Advanced Companies Act practice, RJSC charges, BSEC IPO/Rights rules, Bank Companies Act, and FERA. (100 Marks · 3.0h)
- **[P7 - IT Governance](data/icab-p7.json):** Aligned with ISACA CISA: National IT Policy, Cyber Security Act 2023, COBIT 2019, ITIL 4, CAATs, and BCP/DRP. (100 Marks · 4.0h)

### 4. Advanced Level Individual Paper Study Trackers (3)
- **[V1 - Corporate Reporting](data/icab-v1.json):** Complex IFRS 9 (ECL, hedging), IAS 19 pensions, step acquisitions, foreign subsidiaries, and ISSB S1/S2. (100 Marks · 3.5h)
- **[V2 - Strategic Business Management & Leadership](data/icab-v2.json):** Executive leadership, digital disruption, COSO ERM, M&A/LBO deal structuring, and Integrated Reporting. (100 Marks · 3.5h)
- **[V3 - Case Study](data/icab-v3.json):** Capstone simulation: Advance information analysis, unseen exhibit processing, financial modeling, and executive board reporting. (100 Marks · 4.5h)

### 5. Practical Skills & IT Workshops (1)
- **[ICAB IT Practical Labs](data/icab-it-labs.json):** 5 hands-on workshops (QuickBooks/Sage, Applied Excel modeling, BI/AI, Cybersecurity Forensics, and IS Audit Banking CAATs).

---

## ⚡ Key Features

- **🔍 Omnipresent Command Palette (`Ctrl+K` / `⌘K`):** Instantly search across all 20 roadmaps, paper codes (`C1`, `P7`, `V3`), syllabus topics, and keywords with real-time match highlighting and category filtering.
- **🧭 Explore All Roadmaps Catalog:** Interactive card catalog grouped by qualification level with live progress tracking bars for each paper.
- **📖 Granular Topic Study Trackers:** Every individual paper features official syllabus areas with percentage weightings, chapter nodes, Course Learning Outcomes (CLOs), and study checklists.
- **🔗 Bidirectional Deep-Linking & Breadcrumbs:** Jump seamlessly from parent qualification papers to individual study trackers and back with context preservation (e.g. `#icab-c1/c1-s1-n1`).
- **💾 Safe Multi-Roadmap Storage:** Namespaced progress persistence (`roadmapId:nodeId`) in local storage with in-memory fallback.
- **📱 Mobile-First Ergonomics & Bottom Sheet:** Fully optimized for mobile screens (320px–414px+), featuring zero horizontal overflow, swipeable tabs, touch-friendly 44px+ hit areas, swipe-to-dismiss bottom sheet with safe-area insets (`env(safe-area-inset-bottom)`), scroll locking, and iOS Safari zoom prevention.
- **🌐 100% Zero-Dependency Offline Runtime:** Pre-compiled `data/roadmaps.js` bundle enables instant loading even when opening via local `file:///`.
- **🌓 Dark & Light Theme:** Accessible high-contrast typography adhering to WCAG 2.1 AA standards.

---

## 🛠️ Developer & Build Scripts

```bash
# Install zero-dependency scripts
npm install

# Start local development server
npm start
# -> Runs at http://localhost:3000/

# Re-bundle all 20 JSON datasets for offline file:/// support
npm run build
# -> Compiles data/*.json into data/roadmaps.js

# Run full automated verification gate (100% pass required)
npm test
# -> Validates JSON schemas, bundle, routing, search engine, and storage
```

---

## 📂 Project Structure

```text
chartered-roadmap/
├── archive/             # Safely quarantined legacy prototypes (Rule 4)
│   ├── roadmap.html
│   ├── test-acca-hash.js
│   └── roadmap-for-professional-accounting-certifications-2026-10-27.md
├── data/
│   ├── icab.json        # Core ICAB CA qualification roadmap & route definitions
│   ├── acca.json        # Core ACCA qualification roadmap
│   ├── icab-it-labs.json# 5 practical IT workshops companion dataset
│   ├── icab-c1.json .. icab-c7.json # 7 Certificate Level paper study trackers
│   ├── icab-p1.json .. icab-p7.json # 7 Professional Level paper study trackers
│   ├── icab-v1.json .. icab-v3.json # 3 Advanced Level paper study trackers
│   └── roadmaps.js      # Bundled offline datasets (20 roadmaps)
├── docs/
│   ├── ADR/             # Architecture Decision Records
│   │   ├── 0001-static-json-driven-architecture.md
│   │   ├── 0002-icab-2025-curriculum-modernization.md
│   │   ├── 0003-autonomous-it-labs-and-subroadmap-architecture.md
│   │   └── 0004-individual-paper-study-trackers-and-search-catalog.md
│   ├── critiquesGPT/    # Multi-agent audit & critique reports
│   └── Curriculum-2025-Technical-Specification.md
├── scripts/
│   ├── bundle-data.js   # Generates data/roadmaps.js
│   ├── build_all_paper_roadmaps.py # Syllabus 2025 paper extractor
│   ├── link_icab_papers.py # Links paper nodes to trackers
│   └── verify-all.js    # Unified automated test runner (npm test)
├── tools/
│   └── server.js        # Zero-dependency local static HTTP server (npm start)
├── app.js               # Application state, router, search & explore controller
├── index.html           # Main semantic single-page application
├── package.json         # Project metadata and npm scripts
└── styles.css           # Modern roadmap.sh aesthetic, search & catalog styles
```

---

## 📄 License & Attribution

- Released under the [MIT License](LICENSE).
- Curriculum specifications derived from official publications of the **Institute of Chartered Accountants of Bangladesh (ICAB)** and **Association of Chartered Certified Accountants (ACCA)**.
