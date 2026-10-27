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
Fully mapped to the official ICAB framework:
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
│   ├── acca.json        # Pure JSON dataset for ACCA qualification stages
│   └── roadmaps.js      # Offline-friendly bundle for seamless local file:/// opening
├── docs/
│   └── ADR/
│       └── 0001-static-json-driven-architecture.md
├── scripts/
│   └── bundle-data.js   # Synchronizes data/*.json into data/roadmaps.js
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
