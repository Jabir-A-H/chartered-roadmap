# ADR 0001: Static JSON-Driven Architecture for Roadmap Visualization

## Context
Aspirants pursuing professional accountancy qualifications (such as ICAB CA and ACCA) need a clear, interactive visual roadmap to navigate multi-tiered examinations, articleship training requirements, and ethics certifications.

Key architectural requirements:
1. **Low Maintenance & Free Edge Hosting:** Must deploy seamlessly to Cloudflare Pages or GitHub Pages with zero operational server cost.
2. **Community Contributable:** Qualified accountants, tutors, and students should be able to update syllabi, circular changes, and papers easily via GitHub pull requests without having to edit complex frontend code.
3. **Zero Dependencies & Offline Capable:** The application should load instantly without build pipelines or heavy node modules, and work locally even when opened as a file (`file:///`).

## Decision
We adopt a lightweight static architecture:
1. **Data Layer (`data/*.json`):** Pure JSON datasets for each professional qualification with standardized schemas (`id`, `title`, `routes`, `stages`, `nodes`, `category`).
2. **Offline Data Bundle (`data/roadmaps.js`):** Synchronized script bundle ensuring local file executions bypass browser file-protocol CORS limits while hosted environments can leverage `fetch()`.
3. **Vanilla Web Presentation (`index.html`, `styles.css`, `app.js`):** Native ES6, CSS variables with light/dark theme support, and responsive CSS Grid/Flexbox architecture implementing the signature `roadmap.sh` visual tree aesthetic (central spine, branch arms, interactive detail drawer, and local-storage progress persistence).

## Consequences
- **Positive:** Instant load times (<100ms), 0 build failure risk, 100% free hosting on Cloudflare Pages or GitHub Pages, clear separation of data from view.
- **Negative:** For very large numbers of roadmaps (50+), a static site generator or client search index may be considered later; for the current target scope (CA, ACCA, CMA, CPA), the JSON architecture is optimal.
