# Contributing to Chartered Roadmap

Thank you for your interest in improving **Chartered Roadmap**! Our mission is to provide accurate, transparent, and accessible visual pathways for students pursuing chartered accountancy and finance qualifications.

---

## How You Can Help

1. **Verify Official Data:** Check paper titles, exam structures, and articleship guidelines against the latest official circulars.
2. **Report Outdated Syllabus Information:** Exam bodies revise rules regularly. If an entry route, attendance quota, or paper title has changed, let us know!
3. **Propose New Roadmaps:** Help map out CPA (US/Australia), CMA (ICMAB/IMA), CFA, or CIA.

---

## Updating Roadmap Data

All roadmap content is stored as clean JSON in the `data/` directory:
- `data/icab.json`
- `data/acca.json`

### Step-by-Step Contribution Workflow

1. **Fork the repository** on GitHub.
2. **Clone your fork locally**:
   ```bash
   git clone https://github.com/<your-username>/chartered-roadmap.git
   cd chartered-roadmap
   ```
3. **Create a topic branch**:
   ```bash
   git checkout -b fix/icab-pl-syllabus
   ```
4. **Make your edits** in the appropriate `data/<qualification>.json` file.
   - Maintain the JSON schema format (`id`, `name`, `category`, `description`).
   - Categories must be one of: `Exam`, `Experience`, `Admin`, `Training`, `Ethics`.
5. **Re-bundle the offline dataset**:
   ```bash
   node scripts/bundle-data.js
   ```
6. **Verify your changes locally**:
   Open `index.html` in your browser to verify the visual rendering and node inspector.
7. **Commit and open a Pull Request**:
   Use clear, Conventional Commit messages (e.g., `fix(icab): update professional level tax syllabus details`).
   Please include a reference or link to the official circular or syllabus document in your PR description.

---

## Community Guidelines

- Be respectful and collaborative in issues and PR discussions.
- Avoid citing unverified rumors or coaching center claims; always ground changes in official institutional notices.
