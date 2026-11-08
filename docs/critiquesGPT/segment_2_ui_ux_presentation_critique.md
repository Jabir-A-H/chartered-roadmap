# Architectural Critique Report: Segment 2 — UI/UX, Roadmap.sh Visual Metaphors & Component Presentation
**Date:** 2026-11-08  
**Evaluated Branch/Commit:** Pre-Implementation Baseline  
**Health Score:** 60/100  
**Status:** NEEDS HARDENING  
**Participants:** Agent 2A (Deep UI/UX & Craft Investigator), Agent 2B (Adversarial Reviewer & QA Critic)

---

## 1. Executive Summary

Segment 2 oversees the presentation layer, visual hierarchy, roadmap metaphors, mobile ergonomics, and accessibility of the Chartered Roadmap web application (`index.html`, `styles.css`, and UI rendering routines in `app.js`). While the application delivers a clean, retro-bordered aesthetic inspired by `roadmap.sh`, deep inspection reveals critical architectural and user-experience compromises. The UI currently treats all curriculum milestones as homogenous terminal boxes, completely obscuring that technical milestone nodes (such as Certificate Level `c7` Information Technology and Professional Level `p7` IT Governance) serve as gateways to autonomous practical training curricula. Furthermore, the exam paper detail drawer embeds heavy "Mandatory Practical IT Lab Workshops" blocks directly into written exam syllabi, directly contravening ICAB 2024/2025 curriculum regulations and creating severe cognitive confusion for students.

Under adversarial stress-testing (the "Doubt Gate"), several operational vulnerabilities emerge. On mobile viewports (e.g., iPhone SE / 375px), touch targets for core controls (`#theme-toggle`, `.drawer-close`, `#reset-progress-btn`) violate WCAG 2.5.5 minimum dimensions, while the absence of a backdrop scrim and keyboard focus trap allows interaction leakage into obscured background layers. Crucially, every drawer open or close event triggers a total DOM teardown and re-injection via `renderMap()`, completely destroying the browser's active focus ring and trapping screen-reader users. The presentation layer requires systematic hardening: visual sub-roadmap portal badges, clean companion callouts replacing embedded lab clutter, accessible mobile sheets with backdrops, non-destructive state updates, and WCAG AA contrast compliance across all themes.

---

## 2. Multi-Axis Scorecard

| Quality Dimension | Rating (1-10) | Primary Observation & Real-World Failure Mode |
| :--- | :---: | :--- |
| **Invariants & State Integrity** | 6/10 | `openNodeDrawer` and `closeDrawer` trigger full DOM destruction via `renderMap()`, vaporizing active DOM nodes and losing keyboard focus. |
| **Data Schema & Seam Clarity** | 7/10 | Presentation logic tightly couples to legacy `node.embeddedLabs` instead of cleanly consuming Segment 1's `linkedRoadmaps` seam. |
| **Behavioral Robustness & Edge Cases** | 5/10 | No backdrop scrim on mobile drawer (`max-width: 768px`); users can tap obscured nodes behind modal sheet, desyncing drawer state. |
| **UI Craft & Anti-Slop** | 6/10 | Terminal nodes and deep-dive sub-roadmaps look visually identical; passed papers use `line-through` text, appearing canceled or deprecated. |
| **Testability & Seam Decoupling** | 6/10 | Raw HTML template strings are concatenated directly within monolithic functions in `app.js` without isolated rendering components. |

---

## 3. Behavioral Audit Findings Table (5-Layer Methodology)

| # | Bug ID | Short Title | File Location | Urgency | Risk: Fix | Risk: No Fix | ROI | Blast Radius | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | WEB-009 | Undifferentiated Node Cards for Sub-Roadmap Gateways | [`app.js:L211-L220`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L211-L220)<br>[`styles.css:L529-L558`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L529-L558) | 🔴 CRITICAL | Low | High | High | Component | Open |
| 2 | WEB-009<br>WEB-003 | Misleading Embedded Lab Clutter & Missing Sub-Roadmap CTA in Drawer | [`app.js:L343-L371`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L343-L371)<br>[`styles.css:L796-L867`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L796-L867) | 🔴 CRITICAL | Low | High | High | Component | Open |
| 3 | WEB-001<br>WEB-011 | Orphan Sub-Roadmap View & Missing Contextual Return Breadcrumb | [`index.html:L38-L48`](file:///d:/WebDev/roadmap-for-professional-degrees/index.html#L38-L48)<br>[`app.js:L249-L252`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L249-L252) | 🔴 CRITICAL | Low | High | High | Layout / Nav | Open |
| 4 | WEB-008<br>WEB-005 | Full DOM Destruction in `renderMap()` Causing Focus Vaporization | [`app.js:L242`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L242)<br>[`app.js:L383`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L383)<br>[`app.js:L417`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L417) | 🟡 HIGH | Med | High | High | Runtime State | Open |
| 5 | WEB-006 | WCAG 2.5.5 Touch Target Violations on Mobile Touchscreens (< 44px) | [`styles.css:L218-L230`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L218-L230)<br>[`styles.css:L387-L399`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L387-L399)<br>[`styles.css:L619-L637`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L619-L637) | 🟡 HIGH | Low | Med | High | Global CSS | Open |
| 6 | WEB-005 | Missing Mobile Scrim Backdrop, Focus Trapping & `aria-modal` | [`index.html:L76-L84`](file:///d:/WebDev/roadmap-for-professional-degrees/index.html#L76-L84)<br>[`styles.css:L948-L963`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L948-L963) | 🟡 HIGH | Low | High | High | Drawer Component | Open |
| 7 | WEB-007 | Contrast Failures for `--text-muted` on Dark Surface Themes | [`styles.css:L56`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L56)<br>[`styles.css:L91`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L91) | 🟢 MEDIUM | Low | Med | Med | Global CSS | Open |
| 8 | WEB-009 | Anti-Pattern Strikethrough on Completed Qualification Milestones | [`styles.css:L578-L584`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L578-L584) | 🟢 MEDIUM | Low | Low | High | Visual Craft | Open |

---

### Receipts & Remediation Plans

#### Finding #1: [WEB-009] Undifferentiated Node Cards for Sub-Roadmap Gateways
- **File & Line:** [`app.js:L211-L220`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L211-L220) and [`styles.css:L529-L558`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L529-L558)
- **Current Behavior:** Every node is rendered as a generic `<button class="node-card">` containing only name and category badge. Milestone `c7` (Information Technology) looks identical to terminal paper `c1` (Accounting).
- **Real-World Failure Mode:** Students navigating the ICAB roadmap have no visual affordance that clicking `c7` or `p7` unlocks a multi-stage practical IT curriculum. The discovery rate of the hands-on lab roadmap drops to near zero unless a user coincidentally opens every drawer.
- **Authoritative Citation:** Roadmap.sh Visual Hierarchy Standard & Global Engineering Rule 2 (Simplicity & Scanability).
- **Concrete Actionable Remediation:**
  1. In `app.js:renderMap()`, check if `node.linkedRoadmaps && node.linkedRoadmaps.length > 0` (or `node.linkedRoadmapId`).
  2. Conditionally append class `.has-subroadmap` to `.node-card`.
  3. Render an inline portal badge `<span class="subroadmap-badge">Labs ↗</span>` or `<span class="subroadmap-badge">Explore ↗</span>`.
  4. In `styles.css`, define `.subroadmap-badge` with `border: 1.5px solid var(--border-color); background: var(--hub-bg); color: var(--hub-text); border-radius: var(--radius-sm); font-size: 0.68rem; font-weight: 800; padding: 2px 6px; margin-left: auto; flex-shrink: 0;`.
  5. **Adversarial Constraint:** Do NOT make the badge an interactive nested `<button>` or `<a>` inside `.node-card`. Keep `.node-card` as the single interactive target to prevent invalid nested button HTML and focus bubbling errors.
- **Cross-Segment Blast Radius:** Consumes `linkedRoadmaps` schema from Segment 1; click handler delegates to Segment 3.

#### Finding #2: [WEB-009 / WEB-003] Misleading Embedded Lab Clutter & Missing Sub-Roadmap CTA in Drawer
- **File & Line:** [`app.js:L343-L371`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L343-L371) and [`styles.css:L796-L867`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L796-L867)
- **Current Behavior:** `openNodeDrawer` renders a massive vertical list of 5 embedded lab cards directly under the heading `🛠️ Mandatory Practical IT Lab Workshops` within the written exam drawer. No actionable button exists to open the standalone roadmap.
- **Real-World Failure Mode:** Students mistakenly believe the hands-on software configuration (QuickBooks, Sage, ERP) is tested in the 1-hour written computer-based exam for `c7`. Furthermore, the 5 cards expand drawer height beyond 1600px, pushing the "Mark as Completed" button out of immediate reach and confusing whether passing the written exam marks the practical labs complete.
- **Authoritative Citation:** ICAB Council Circular on Syllabus 2024/2025 (IT Practical Lab Separation) & ADR-0002.
- **Concrete Actionable Remediation:**
  1. Completely purge the `embeddedLabs` rendering loop from `app.js:L343-L371` and quarantine old CSS rules (`.embedded-labs-list`, `.lab-card`).
  2. If `node.linkedRoadmaps` exists, render a dedicated **Companion Practical Roadmap Callout** (`.companion-roadmap-card`):
     ```html
     <div class="companion-roadmap-card">
       <div class="companion-header">
         <span class="companion-badge">Companion Practical Curriculum</span>
         <h4 class="companion-title">ICAB IT Practical Skills Roadmap</h4>
       </div>
       <p class="companion-desc">
         Hands-on lab modules (Accounting Software, Financial Modeling, ERP & BI) are administered independently by ICAB's IT Training Centre and tracked on a dedicated roadmap.
       </p>
       <button class="btn-companion-cta" data-target-roadmap="icab-it-labs" data-target-stage="${node.linkedStageId || ''}">
         Open IT Practical Labs Roadmap ↗
       </button>
     </div>
     ```
  3. Wire the button via event delegation in `app.js` to dispatch Segment 3's navigation transition.
- **Cross-Segment Blast Radius:** Eliminates dependency on old `embeddedLabs` in `data/icab.json` (Segment 1); interfaces with `app.js` routing (Segment 3).

#### Finding #3: [WEB-001 / WEB-011] Orphan Sub-Roadmap View & Missing Contextual Return Breadcrumb
- **File & Line:** [`index.html:L38-L48`](file:///d:/WebDev/roadmap-for-professional-degrees/index.html#L38-L48) and [`app.js:L249-L252`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L249-L252)
- **Current Behavior:** The header contains static segmented buttons for `#tab-icab` and `#tab-acca`. When navigating to `#icab-it-labs`, neither tab matches, leaving the user without visual context or a mechanism to return to their exam progression.
- **Real-World Failure Mode:** A student jumps from `c7` into `icab-it-labs`. Once in the labs roadmap, they are trapped: there is no "Back to ICAB CA" link. Clicking "ICAB CA (Bangladesh)" resets their selected route back to `grad` default, losing their place in `hsc` or `pas`.
- **Authoritative Citation:** WCAG 2.4.8 (Location / Breadcrumbs) & Global Engineering Rule 2.
- **Concrete Actionable Remediation:**
  1. In `index.html`, introduce a semantic breadcrumb container `<nav id="subroadmap-breadcrumb" class="breadcrumb-bar" style="display: none;" aria-label="Roadmap navigation hierarchy"></nav>` directly above `controls-container` or `roadmap-tree`.
  2. When `state.qualId === 'icab-it-labs'` (or any sub-roadmap):
     - Hide the route pills selector (`#route-selector-container`).
     - Display `#subroadmap-breadcrumb` populated with:
       `<a href="#icab-${state.lastIcabRoute || 'grad'}" class="breadcrumb-back-btn">← Return to ICAB CA Exam Roadmap</a> <span class="breadcrumb-separator">/</span> <span class="breadcrumb-current">IT Practical Labs</span>`
     - Keep `#tab-icab` active with an accent indicator denoting a sub-module view.
- **Cross-Segment Blast Radius:** Requires Segment 3 state to remember `state.lastIcabRoute` to prevent routing reset loops.

#### Finding #4: [WEB-008 / WEB-005] Full DOM Destruction in `renderMap()` Causing Focus Vaporization
- **File & Line:** [`app.js:L242`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L242), [`app.js:L383`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L383), and [`app.js:L417`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L417)
- **Current Behavior:** Every call to `openNodeDrawer()`, `closeDrawer()`, or milestone toggle executes `renderMap()`, which assigns `el.roadmapTree.innerHTML = mapHtml`.
- **Real-World Failure Mode:** When a keyboard user focuses a `.node-card` and presses Enter to view details, `openNodeDrawer` destroys all cards in the DOM. Focus is abruptly dumped to the document `<body>`. When the user closes the drawer with Escape, focus does not return to the invoking card because the original DOM element was incinerated.
- **Authoritative Citation:** WCAG 2.4.3 (Focus Order) and WCAG 3.2.2 (On Input).
- **Concrete Actionable Remediation:**
  1. Decouple drawer state changes from whole-tree DOM re-renders.
  2. When selecting or deselecting a node, update CSS classes surgically:
     - Remove `.selected` from the previous node card via `el.roadmapTree.querySelector('.node-card.selected')?.classList.remove('selected')`.
     - Add `.selected` to the target card via `el.roadmapTree.querySelector(`[data-node-id="${nodeId}"]`)?.classList.add('selected')`.
  3. When toggling completion, toggle `.done` on the specific card and update `#progress-bar-fill` and `#progress-text` without re-rendering the entire stage tree.
  4. Store `state.invokingElement` before opening the drawer and restore focus upon `closeDrawer()`.
- **Cross-Segment Blast Radius:** Eliminates layout thrashing and flicker in Segment 3; protects a11y compliance.

#### Finding #5: [WEB-006] WCAG 2.5.5 Touch Target Violations on Mobile Touchscreens (< 44px)
- **File & Line:** [`styles.css:L218-L230`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L218-L230), [`styles.css:L387-L399`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L387-L399), [`styles.css:L619-L637`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L619-L637)
- **Current Behavior:**
  - `.btn-icon` (`#theme-toggle`) is fixed at `width: 36px; height: 36px;`.
  - `.drawer-close` is unconstrained with `padding: 4px; font-size: 1.5rem;`, resulting in an active hit box of ~26px.
  - `#reset-progress-btn` is a text button with `font-size: 0.8rem; padding: 0;`.
  - `.pill-btn` has `padding: 6px 14px`, computing to ~32px height.
- **Real-World Failure Mode:** On smartphones (held in one hand while commuting), students attempting to dismiss the drawer or toggle the theme repeatedly miss the touch target, instead tapping underlying text or triggering accidental link navigation.
- **Authoritative Citation:** WCAG 2.5.5 (Target Size: Enhanced, 44x44 CSS pixels minimum) and WCAG 2.5.8 (Target Size: Minimum, Level AA).
- **Concrete Actionable Remediation:**
  1. Update `.btn-icon` in `styles.css`: `min-width: 44px; min-height: 44px;`.
  2. Update `.drawer-close`: `min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center; right: 10px; top: 10px;`.
  3. Update `#reset-progress-btn`: `padding: 8px 12px; min-height: 44px; display: inline-flex; align-items: center;`.
  4. Update `.pill-btn`: `padding: 8px 16px; min-height: 40px; margin: 4px 2px;`.
- **Cross-Segment Blast Radius:** Pure CSS enhancement; zero regression risk for Segment 1 or Segment 3.

#### Finding #6: [WEB-005] Missing Mobile Scrim Backdrop, Focus Trapping & `aria-modal`
- **File & Line:** [`index.html:L76-L84`](file:///d:/WebDev/roadmap-for-professional-degrees/index.html#L76-L84) and [`styles.css:L948-L963`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L948-L963)
- **Current Behavior:** `<aside id="details-drawer">` has `role="dialog"` but lacks `aria-modal="true"`. On mobile viewports (`max-width: 768px`), the drawer slides up from the bottom occupying `75vh`, but no visual dimming scrim/backdrop is rendered.
- **Real-World Failure Mode:** Users tap on the exposed top 25% of the screen expecting it to dismiss the modal sheet (standard iOS/Android bottom sheet behavior). Instead, taps penetrate through to background stage nodes or tab controls, triggering unintended roadmap changes while the drawer remains open. Furthermore, screen readers continue announcing background nodes.
- **Authoritative Citation:** WAI-ARIA Modal Dialog Pattern & WCAG 2.1 Success Criterion 2.1.2 (No Keyboard Trap / Containment).
- **Concrete Actionable Remediation:**
  1. In `index.html`, add `<div id="drawer-backdrop" class="drawer-backdrop" aria-hidden="true"></div>` preceding `#details-drawer`.
  2. Add `aria-modal="true"` to `#details-drawer`.
  3. In `styles.css`:
     ```css
     .drawer-backdrop {
       position: fixed;
       inset: 0;
       background: rgba(0, 0, 0, 0.45);
       backdrop-filter: blur(2px);
       z-index: 45;
       opacity: 0;
       pointer-events: none;
       transition: opacity 0.2s ease;
     }
     .drawer-backdrop.active {
       opacity: 1;
       pointer-events: auto;
     }
     ```
  4. In `app.js`, toggle `.active` on `#drawer-backdrop` when drawer opens/closes, and attach a click listener on `#drawer-backdrop` to invoke `closeDrawer()`.
- **Cross-Segment Blast Radius:** Standardizes modal ergonomics across all devices; interfaces cleanly with Segment 3.

#### Finding #7: [WEB-007] Contrast Failures for `--text-muted` on Dark Surface Themes
- **File & Line:** [`styles.css:L56`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L56) and [`styles.css:L91`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L91)
- **Current Behavior:** In dark mode (`[data-theme="dark"]` and `@media (prefers-color-scheme: dark)`), `--text-muted` is configured to `#71717a` against surface `#181a20`.
- **Real-World Failure Mode:** `#71717a` on `#181a20` delivers a contrast ratio of only **3.5:1**, failing WCAG 2.1 AA requirement of **4.5:1** for regular text. Secondary metadata (syllabus codes, paper durations, stage subtitles) is virtually unreadable under direct sunlight or for students with mild visual impairments.
- **Authoritative Citation:** WCAG 2.1 Success Criterion 1.4.3 (Contrast Minimum, Level AA).
- **Concrete Actionable Remediation:**
  1. In `styles.css:[data-theme="dark"]`, adjust `--text-muted: #a1a1aa;` (contrast ratio **6.3:1**, passes AAA for large text and AA for normal text).
  2. In light mode, verify `--text-muted` is at least `#52525b` when rendered over `--bg-subtle` (`#f1f1eb`).
- **Cross-Segment Blast Radius:** Visual-only token refinement.

#### Finding #8: [WEB-009] Anti-Pattern Strikethrough on Completed Qualification Milestones
- **File & Line:** [`styles.css:L578-L584`](file:///d:/WebDev/roadmap-for-professional-degrees/styles.css#L578-L584)
- **Current Behavior:** `.node-card.done { text-decoration: line-through; }` strikes through the paper title, checkmark, and category badge.
- **Real-World Failure Mode:** Strikethrough typography universally denotes deprecated courses, canceled exam papers, or discarded tasks. When a student marks `c1 Accounting` as passed, seeing a black line slashed across the title implies failure or obsolescence rather than successful academic attainment.
- **Authoritative Citation:** Roadmap.sh Component Patterns & Material Design Milestone Conventions.
- **Concrete Actionable Remediation:**
  1. In `styles.css`, remove `text-decoration: line-through;` from `.node-card.done`.
  2. Rely on positive visual reinforcement: distinct emerald border (`--done-border`), light emerald tint (`--done-bg`), bold checkmark badge (`.check-icon`), and accessible `aria-pressed="true"`.
- **Cross-Segment Blast Radius:** Pure CSS polish.

---

## 4. Adversarial Reviewer Stress-Test & Doubt Gate

### 4.1 Pruned Strawmen & Dismissed False Positives

During the dialectical cross-examination of Agent 2A's initial investigation, the following items were aggressively challenged and dismissed:

1. **Dismissed: "Interactive Sub-Roadmap Gateway Button Inside Node Cards"**  
   - *Agent 2A Proposal:* Place a secondary `<button class="btn-sub-link">` directly inside `.node-card` so users can jump to IT labs directly from the map without opening the drawer.
   - *Adversarial Cross-Examination:* In HTML5, nesting a `<button>` inside another `<button class="node-card">` is invalid DOM syntax. Browsers either split the tags into siblings or create catastrophic event bubbling loops where tapping the sub-link triggers both drawer opening and route jumping simultaneously.
   - *Doubt Gate Ruling:* **REJECTED.** The node card must remain a single, uniform `<button>`. Sub-roadmap linkage on the card is strictly a visual badge (`<span class="subroadmap-badge">Labs ↗</span>`). The actionable navigation CTA belongs cleanly inside the details drawer.

2. **Dismissed: "Replacing Segmented Tabs with a Dynamic Dropdown Select for Future Scaling"**  
   - *Agent 2A Proposal:* Replace `<nav class="tabs-segmented">` with a `<select>` dropdown to prepare for when 10+ sub-roadmaps exist.
   - *Adversarial Cross-Examination:* Cites speculative future scaling (violating Global Engineering Rule 2: Simplicity over Premature Generalization). With 2 primary degree tracks (ICAB, ACCA) and 1 companion sub-roadmap (IT Labs), a dropdown adds cognitive friction and destroys one-click tab switching.
   - *Doubt Gate Ruling:* **REJECTED.** Retain the high-contrast segmented control for top-level qualifications. Contextual sub-roadmaps must be reached through node portals and returned from via the breadcrumb bar.

3. **Dismissed: "CSS Rule Count Overhead" as a Concern**  
   - *Adversarial Cross-Examination:* Any pushback claiming that introducing `.subroadmap-badge` or `.drawer-backdrop` adds "unnecessary CSS bloat" is explicitly banned under Rule 2.3. The added CSS footprint is < 60 lines and introduces zero runtime dependencies.

### 4.2 Real-World Field Condition Stress-Tests

- **Field Condition 1: 375px Viewport (iPhone SE / Compact Android)**  
  - *Scenario:* A user with large system font scaling opens `c7` drawer on a 375px screen.
  - *Doubt Gate Finding:* With bottom drawer at `75vh`, long text and spec grids can push CTA buttons below the fold. The drawer must maintain `display: flex; flex-direction: column;` with `overflow-y: auto;` and the CTA button pinned or easily reachable with sticky footer ergonomics.
- **Field Condition 2: High Contrast / Forced Colors Mode (`forced-colors: active`)**  
  - *Scenario:* User operates in Windows High Contrast mode.
  - *Doubt Gate Finding:* CSS variable colors are flattened by the OS. The `.subroadmap-badge` and `.node-card.done` must use semantic borders and text glyphs (`✓`, `↗`) rather than relying purely on background color tints.
- **Field Condition 3: Offline `file:///` Protocol Usage**  
  - *Scenario:* User downloads the repo and double-clicks `index.html` without a local web server.
  - *Doubt Gate Finding:* All visual assets and icons must remain pure inline SVG or system Unicode glyphs (`✓`, `↗`, `←`, `🌓`). Zero external icon fonts or unbundled web fonts may be introduced.

### 4.3 Cross-Segment Ripple Effect Analysis

1. **Interface with Segment 1 (Data Layer):**  
   Segment 2's visual badge and drawer callout directly depend on Segment 1 providing `linkedRoadmaps` (or `linkedRoadmapId`) on node objects in `data/icab.json`. Segment 2 will implement defensive checks (`Array.isArray(node.linkedRoadmaps) && node.linkedRoadmaps.length > 0`) so that nodes without sub-roadmaps render as standard terminal cards without error.
2. **Interface with Segment 3 (State & Routing):**  
   When the user clicks `.btn-companion-cta` inside the drawer, Segment 2 must not perform manual DOM hacks. It must update `window.location.hash = '#icab-it-labs'` (or invoke Segment 3's router dispatch), allowing Segment 3's unified `hashchange` listener to handle state synchronization, drawer closure, and stage rendering.

---

## 5. Architectural Recommendations & Implementation Sequence

To resolve all findings under pre-production rules, execute the following staged implementation during the execution phase:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                      SEGMENT 2 IMPLEMENTATION SEQUENCE                           │
└──────────────────────────────────────────────────────────────────────────────────┘
  Step 1: HTML & Dialog Architecture (`index.html`)
  ├── Add `<nav id="subroadmap-breadcrumb" class="breadcrumb-bar">`
  ├── Add `<div id="drawer-backdrop" class="drawer-backdrop">`
  └── Add `aria-modal="true"` to `#details-drawer`

  Step 2: Component CSS Modernization (`styles.css`)
  ├── Add `.subroadmap-badge` styling with `--hub-bg` retro accent
  ├── Replace `.embedded-labs-list` with `.companion-roadmap-card` & `.btn-companion-cta`
  ├── Style `.drawer-backdrop` with fade transition and blur
  ├── Adjust touch targets (`.btn-icon`, `.drawer-close`, `#reset-progress-btn`) >= 44px
  ├── Fix dark mode `--text-muted` to `#a1a1aa` (WCAG AA pass)
  └── Remove `text-decoration: line-through` from `.node-card.done`

  Step 3: Rendering & Event Hardening (`app.js`)
  ├── Update `renderMap()`: render `subroadmap-badge` on nodes with `linkedRoadmaps`
  ├── Overhaul `openNodeDrawer()`: render Companion Practical Roadmap callout with CTA
  ├── Refactor state updates: avoid full `renderMap()` DOM recreation on drawer open/close
  ├── Add backdrop click listener to dismiss drawer
  └── Wire CTA click event to trigger `#icab-it-labs` hash transition
```

---
*Report authored and validated under Global Engineering Rules 1–7. Ready for Master Reviewer integration.*
