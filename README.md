# Chartered Roadmap 🧭

> Interactive visual roadmaps and study trackers for professional accountancy and finance qualifications (ICAB CA, ACCA, and beyond). Inspired by [roadmap.sh](https://roadmap.sh).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Deployment](https://img.shields.io/badge/Deploy-Cloudflare%20Pages%20%7C%20GitHub%20Pages-blue.svg)](#deployment)

---

## 🌟 Why Chartered Roadmap?

Information for professional qualifications—such as Chartered Accountancy (CA) and ACCA—is notoriously scattered across lengthy PDF circulars, forum discussions, and institutional portals. Students face complex academic rules:
- **Multiple Entry Routes:** Graduate entry, HSC/A-Level direct entry, Pre-Articleship (PAS), and mutual professional exemptions.
- **Concurrent Requirements:** Running intensive articleship alongside multi-tier exams (Certificate, Professional, and Advanced levels).
- **Credit for Prior Learning (CPL):** University-specific exemption agreements that differ from student to student.

**Chartered Roadmap** gives aspirants a clear, visual, node-based progression map. Tap any milestone for syllabus breakdowns and tick off modules as you complete them—persisted locally in your browser.

---

## 🗺️ Available Roadmaps

### 1. [ICAB Chartered Accountancy (Bangladesh)](data/icab.json)
Fully mapped to the official **ICAB Syllabus 2025** (17 examinations, 1,600 total marks):
- **17 Exam Papers & 1,600 Total Marks:**
  - **Certificate Level (600 Marks):** 5 papers at 1.5h / 100m + 2 condensed papers (*Business Laws* and *Information Technology*) at 1.0h / 50m. Sat 3 times/year.
  - **Professional Level (700 Marks):** 6 papers at 3.5h / 100m + extended *IT Governance* at 4.0h / 100m. Sat 2 times/year.
  - **Advanced Level (300 Marks):** *Corporate Reporting* (3.5h), *Strategic Business Management and Leadership* (3.5h), and capstone *Case Study* (4.5h / 100m). Sat 2 times/year.
- **Mandatory Hands-On Practical IT Labs:** Decoupled from written examination papers and hosted on an autonomous companion roadmap (`icab-it-labs`), covering Certificate Level (QuickBooks/Sage and Applied Excel modeling) and Professional Level (Power BI/AI, Cybersecurity Forensics, and Banking CAATs).
- **Contemporary Cross-Disciplinary Themes:** Pervasive integration of ESG & sustainability (ISSB S1/S2, IAASB ISSA 5000, double materiality), AI & big data analytics, ISACA/CISA standards, and Islamic finance.
- **Four Progression Routes:**
  - **Graduate Route (Honours / Masters):** 3-year articleship with parallel exams.
  - **HSC / A-Level Route:** 4-year articleship (3.5 years for top A-Level results).
  - **Pre-Articleship Student (PAS) Route:** Sit Certificate and Professional papers while still at university, reducing subsequent articleship to 2.5 or 2 years.
  - **ACCA / ICMAB Exemption Route:** Full 7-paper Certificate exemption, selective Professional exemptions, and a 2-year articleship.
- **Mandatory Milestones:** Pre-Articleship Training Course (PATC), Articleship registration, and Ethics & Continuous Professional Development.

### 2. [ACCA (Global)](data/acca.json)
Structured into 7 progression stages:
- **Applied Knowledge:** Business and Technology (BT), Management Accounting (MA), Financial Accounting (FA).
- **Applied Skills:** 6 core technical papers (LW, PM, TX, FR, AA, FM).
- **Strategic Professional:** Essentials (SBL, SBR) + 2 chosen Options (AFM, APM, ATX, AAA).
- **Professional Requirements:** 36-month Practical Experience Requirement (PER) and the online Ethics and Professional Skills Module (EPSM).

### 3. [ICAB IT Practical Labs (Companion Sub-Roadmap)](data/icab-it-labs.json)
Autonomous practical skills curriculum linked directly from Certificate (`c7`) and Professional (`p7`) gateways:
- **Certificate Level Labs (2 Workshops):** Accounting Software Implementation (QuickBooks / Sage / ERP) and Applied Excel for Professional Accountants (Power Query ETL, 3-statement dynamic modeling).
- **Professional Level Labs (3 Workshops):** Business Intelligence & AI Analytics (Power BI / Tableau / BigQuery), Information Systems Security & Digital Forensics (ISO 27001, AWS/Azure RBAC, SIEM, FTK Imager, Autopsy), and IS Audit Banking CAATs (CaseWare IDEA / ACL duplicate scans, Maker-Checker bypass, dormant account reactivation, AML structuring).

*(Planned additions: CMA, CPA, CIA, CFA)*

---

## 🚀 Live Demo & Hosting

You can host Chartered Roadmap anywhere as a zero-dependency static web app:

* **Cloudflare Pages:** `https://chartered-roadmap.pages.dev`
* **GitHub Pages:** `https://Jabir-A-H.github.io/chartered-roadmap`

---

## 📂 Project Structure

```text
chartered-roadmap/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── syllabus_update.md
│   │   └── new_qualification_request.md
│   └── PULL_REQUEST_TEMPLATE.md
├── data/
│   ├── icab.json        # Pure JSON dataset for ICAB CA routes & syllabus
│   ├── icab-it-labs.json# Autonomous JSON dataset for ICAB hands-on IT labs
│   ├── acca.json        # Pure JSON dataset for ACCA qualification stages
│   └── roadmaps.js      # Offline-friendly bundle for seamless local file:/// opening
├── docs/
│   ├── ADR/
│   │   ├── 0001-static-json-driven-architecture.md
│   │   ├── 0002-icab-2025-curriculum-modernization.md
│   │   └── 0003-autonomous-it-labs-and-subroadmap-architecture.md
│   ├── critiquesGPT/
│   │   ├── segment_1_data_and_schemas_critique.md
│   │   ├── segment_2_ui_ux_presentation_critique.md
│   │   ├── segment_3_behavioral_routing_critique.md
│   │   └── master_architectural_synthesis.md
│   ├── ICAB_2025_CURRICULUM_SPECIFICATION.md
│   ├── CURRICULUM_COMPARISON_2023_VS_2025.md
│   ├── ROADMAP_PROGRESSION_AND_EXEMPTION_GUIDE.md
│   └── MULTI_AGENT_AUDIT_AND_IMPLEMENTATION_BLUEPRINT.md
├── scripts/
│   ├── bundle-data.js   # Synchronizes data/*.json into data/roadmaps.js
│   ├── verify-segment1.js # Automated verification gate for Segment 1
│   ├── verify-segment2.js # Automated verification gate for Segment 2
│   ├── verify-segment3.js # Automated verification gate for Segment 3
│   └── update_icab_json.py # Reproducible ICAB dataset generator
├── index.html           # Main semantic single-page application
├── styles.css           # Modern roadmap.sh inspired styling & dark mode
├── app.js               # Application state, hash routing, & progress tracker
├── CONTRIBUTING.md      # Community contribution guidelines
├── LICENSE              # MIT License
└── README.md
```

---

## 💻 Running Locally

Because this project is built using native web standards with zero dependencies, you can run it immediately without `npm install`:

1. **Option A (Direct File Opening):**
   Simply open `index.html` in any web browser. Local storage and the bundled dataset will work seamlessly.

2. **Option B (Local Static Server):**
   ```bash
   # Using Node.js npx
   npx serve .

   # Or using Python
   python -m http.server 8000
   ```
   Visit `http://localhost:8000`.

---

## 🤝 Contributing

We welcome contributions from qualified accountants, current students, and developers!
Whether you are reporting a syllabus update, adding missing pass rates/exam windows, or proposing a new qualification:

1. Check out our [Contributing Guidelines](CONTRIBUTING.md).
2. Edit the corresponding dataset under [`data/`](data/).
3. Run `node scripts/bundle-data.js` to compile the offline bundle.
4. Open a Pull Request!

---

## ⚖️ Official Notice & Disclaimer

Chartered Roadmap is an independent, community-driven educational open-source project. It is not officially affiliated with, endorsed by, or sponsored by the **Institute of Chartered Accountants of Bangladesh (ICAB)** or the **Association of Chartered Certified Accountants (ACCA)**.

Always consult official portals ([icab.org.bd](https://www.icab.org.bd) and [accaglobal.com](https://www.accaglobal.com)) for binding regulatory criteria, circulars, fees, and exam registration deadlines.

---

## 📄 License

Distributed under the [MIT License](LICENSE).
