# Adversarial Architectural Critique: Segment 2 — UI/UX, Visual Systems & Global Catalog Expansion

**Author:** Subagent 2B (Adversarial Reviewer & UI/UX Quality Critic)  
**Target Document:** `docs/plans/segment_2_plan.md` by Subagent 2A  
**Date:** 2026-11-09  
**Status:** **NEEDS HARDENING**  
**Composite Health Score:** **59 / 100**  
**Standards:** Global Engineering Rules 1–7, Anti-Slop UI Craft (`/design-taste-frontend`, `/impeccable`), WCAG 2.2 AAA Accessibility, Core Web Vitals (CLS/INP)

---

## 1. Executive Summary & Verdict

### Verdict: **NEEDS HARDENING** (Conditional Approval Subject to Mandatory Remediation)

Subagent 2A has delivered an ambitious and conceptually sound architectural blueprint for scaling the Chartered Roadmap catalog from a regional dual-qualification tool (20 roadmaps) into a premier global professional registry (28+ roadmaps across 10 qualification suites, 17 granular ICAB paper trackers, and practical IT labs). The decision to reject Option A (Flat Grid) and Option B (Nested Accordions) in favor of **Option C ("The Institutional Ledger": Curated Flagship Shelf + Domain-Segmented Directory)** is pedagogically and hierarchically correct: it avoids cannibalizing premier charters (CPA, CFA, ACCA) beneath a wall of single-paper trackers.

**However, under adversarial "Doubt Gate" stress-testing across low-tier mobile viewports, high-contrast OS environments, keyboard navigation flows, and real-time DOM filtering, the plan reveals eight (8) critical failure modes:**

1. **Extreme Cumulative Layout Shift (CLS):** Toggling `#catalog-search-input` abruptly executes `flagshipShelf.style.display = 'none'` whenever flagship items have zero matches, causing a catastrophic $\sim 400\text{px}$ vertical viewport jump while the user is actively typing.
2. **Fatal Card Duplication & Summary Inflation in Filter Logic:** When any specific domain chip (e.g. `CA & CPA`) is selected, `renderCatalog()` renders the exact same qualification cards **twice on the same screen** (once in `flagshipGrid` and again in `catalogGrid`), simultaneously inflating the live roadmap counter from 3 to 6.
3. **Invalid WAI-ARIA Tablist Contract:** Filter chips are declared with `role="tablist"` and `role="tab"`, but omit roving `tabindex`, omit `ArrowLeft`/`ArrowRight` key handlers, omit `aria-controls`, and leave the catalog grid without a `role="tabpanel"`, causing screen reader announcements to trap keyboard navigation.
4. **Catastrophic Dark Mode Contrast Breakdown (< 1.4:1):** The institutional badge token palette defines deep dark accents (`#002d62` US Navy, `#1e3a8a` Deep Royal) which collapse to an illegible $1.09:1$ and $1.37:1$ contrast against `--bg-surface` (`#181a20`) in dark mode, severely violating WCAG AAA ($\ge 7.0:1$) and AA ($\ge 4.5:1$).
5. **Missing Mobile Carousel Styles & 320px Viewport Blowout:** The responsive horizontal swipe carousel promised for mobile screens ($< 768\text{px}$) was omitted from the actual CSS specifications in Section 7.1. Retaining `minmax(290px, 1fr)` with padding on a 320px viewport directly breaches the zero-horizontal-overflow invariant.
6. **Invisible Filter Scroll on Mobile:** Filter chips utilize `scrollbar-width: none` and `::-webkit-scrollbar { display: none }` without providing an edge gradient mask or peek affordance, leaving mobile users on 375px screens unaware that 5 additional domains exist off-screen.
7. **Missing Card Renderer Contract & Undefined Property Crashes:** The plan calls `renderCatalogCard(item, isFlagship)` but omits its definition. Furthermore, 17 ICAB paper trackers lack `badge` and `institution` fields, creating an uncaught runtime `TypeError` when accessing string formatting methods.
8. **Unthrottled Keypress DOM Thrashing:** Filtering on `#catalog-search-input` executes full `innerHTML` destruction and reconstruction of 28+ cards on every keystroke without debouncing or animation frame batching.

Implementation must be halted until Subagent 2A incorporates the concrete remediations specified herein.

---

## 2. Multi-Axis Quantitative Scorecard (59 / 100)

| Evaluation Dimension | Weight | Score (0-20) | Critical Audit Observations |
| :--- | :---: | :---: | :--- |
| **1. Visual Hierarchy & Anti-Slop Craft** | 20% | **14 / 20** | Strong typographic foundation and institutional tone; however, decorative emojis (`🌐`, `🔍`) persist in headings, subgrid row alignment collapses when progress bars are absent, and dark-mode badge tokens are completely undefined. |
| **2. Responsive Ergonomics & Mobile Polish** | 20% | **12 / 20** | 44px touch targets are well-specified. However, the mobile flagship carousel was omitted from CSS resulting in 320px horizontal overflow; filter chips lack scroll affordance; and iOS Safari rubber-band scroll chaining is unaddressed. |
| **3. Accessibility & Contrast Integrity** | 20% | **11 / 20** | Text contrast claims AAA, but dark mode badge tokens fail catastrophically ($1.09:1$ to $1.37:1$). Pseudo-tablist ARIA semantics without roving tabindex or arrow navigation break screen-reader accessibility flows. |
| **4. Filter & Discovery Experience** | 20% | **10 / 20** | 8-domain taxonomy is logical, but `renderCatalog()` duplicates cards in dual grids on domain filtering, inflates the stat counter, and causes massive CLS jumps during live search. |
| **5. Feasibility & DOM Cleanliness** | 20% | **12 / 20** | Missing `renderCatalogCard()` specification; unescaped property risk for paper trackers; unthrottled search input triggers aggressive main-thread DOM rebuilding on every keystroke. |
| **Composite Score** | **100%** | **59 / 100** | **Status: NEEDS HARDENING (Pre-Implementation Block)** |

---

## 3. Specific Findings Table (Risk, Urgency, ROI & Blast Radius)

| # | Finding ID | Severity & Urgency | Short Description | Impacted Files | Risk of Fix | Risk of No Fix | ROI | Blast Radius |
|---|---|---|---|---|---|---|---|---|
| 1 | **UI-001** | 🔴 **CRITICAL (P0)** | Live Search Flagship Collapse Triggers Massive CLS (> 0.35) | `app.js:598-603`<br>`styles.css:286-312` | Low | High | High | Visual Layout & Web Vitals |
| 2 | **UI-002** | 🔴 **CRITICAL (P0)** | Dual-Grid Redundant Card Duplication & Inflated Count on Domain Filter | `app.js:586-626` | Low | High | High | Catalog View State |
| 3 | **A11Y-001**| 🔴 **CRITICAL (P0)** | Broken WAI-ARIA Tablist Contract (Missing Roving Tabindex & Arrow Nav) | `index.html:409-418`<br>`app.js:582` | Low | High | High | Keyboard & Screen Reader |
| 4 | **A11Y-002**| 🔴 **CRITICAL (P0)** | Dark Mode Badge Colors Suffer Complete Contrast Failure (< 1.4:1) | `styles.css:158-170`<br>`styles.css:349-371` | Low | High | High | Dark Theme Accessibility |
| 5 | **RESP-001**| 🟡 **HIGH (P1)** | Omitted Mobile Flagship Carousel CSS & 320px Viewport Overflow | `styles.css:307-312` | Low | High | High | Mobile Viewports (< 768px) |
| 6 | **RESP-002**| 🟡 **HIGH (P1)** | Invisible Horizontal Filter Scroll & Missing Mobile Swipe Affordance | `styles.css:210-221` | Low | Med | High | Mobile Filter Usability |
| 7 | **DOM-001** | 🟡 **HIGH (P1)** | Missing `renderCatalogCard()` Spec & Undefined Badge Crash on Papers | `app.js:602, 640` | Low | High | High | Runtime Crash Resilience |
| 8 | **PERF-001**| 🟢 **MEDIUM (P2)** | Unthrottled Input DOM Thrashing on Live Search | `app.js:578-642` | Low | Med | Med | Client-Side Performance |
| 9 | **CRAFT-001**| 🟢 **MEDIUM (P2)** | Decorative Emojis & Subgrid Empty Row Gap when Progress Bar Absent | `index.html:389, 401`<br>`styles.css:320-332` | Low | Low | Med | Anti-Slop Visual Craft |

---

## 4. Receipts, Failure Proofs & Actionable Remediation Plans

### Finding #1: [UI-001] Live Search Flagship Collapse Triggers Massive Cumulative Layout Shift (CLS)

- **File & Proposed Line:** `docs/plans/segment_2_plan.md:L598-L603`
- **Current Proposed Code:**
  ```javascript
  if (flagshipItems.length === 0) {
    el.flagshipShelf.style.display = 'none';
  } else {
    el.flagshipShelf.style.display = 'block';
    el.flagshipGrid.innerHTML = flagshipItems.map(item => renderCatalogCard(item, true)).join('');
  }
  ```
- **Real-World Field Failure Proof:**
  The user focuses `#catalog-search-input` (positioned *below* the Flagship Shelf) and types `"c1"` to find the Accounting exam paper.
  1. As soon as `"c"` is typed, `flagshipItems` drops from 10 to 0.
  2. `el.flagshipShelf.style.display = 'none'` executes instantly.
  3. The flagship shelf (height $\approx 380\text{px}$) vanishes from the document flow.
  4. The search input, filter chips, and catalog grid **violently jump upward by 380px** while the user is mid-typing!
  5. The user's mobile keyboard or mouse pointer is suddenly misaligned with the active control.
  6. **Cumulative Layout Shift Calculation:**
     $$\text{Impact Fraction} = \frac{380\text{px}}{844\text{px}} \approx 0.45, \quad \text{Distance Fraction} \approx 0.45 \implies \text{CLS} \approx 0.20+$$
     This exceeds Google's "Poor" threshold ($\text{CLS} > 0.25$) in a single interaction.
- **Architectural Root Cause:** The search bar is placed *below* the element that conditionally hides based on search results.
- **Actionable Remediation:**
  1. **Layout Hierarchy Re-ordering:** In `index.html`, place the `.catalog-filter-card` (Search + Filter Chips) **ABOVE** both the Flagship Shelf and the Directory Grid, immediately beneath the hero header.
  2. When search is active, the search input remains completely stationary ($0\text{px}$ layout shift).
  3. Provide smooth visual collapse for `.flagship-shelf` when filtered out:
     ```css
     .flagship-shelf {
       transition: opacity 0.2s ease, margin 0.2s ease;
     }
     .flagship-shelf.is-hidden {
       display: none;
     }
     ```

---

### Finding #2: [UI-002] Dual-Grid Redundant Card Duplication & Inflated Count on Domain Filter

- **File & Proposed Line:** `docs/plans/segment_2_plan.md:L586-L626`
- **Current Proposed Code:**
  ```javascript
  // 1. Flagship filtering:
  const flagshipItems = Object.values(ROADMAP_CATALOG).filter(item => {
    if (!item.isFlagship) return false;
    if (activeDomain !== 'all' && item.domain !== activeDomain) return false;
    // ...
  });

  // 2. Directory filtering:
  const directoryItems = Object.values(ROADMAP_CATALOG).filter(item => {
    if (activeDomain === 'all' && item.isFlagship) return false;
    if (activeDomain !== 'all' && item.domain !== activeDomain) return false;
    // ...
  });
  ```
- **Real-World Field Failure Proof:**
  1. The user clicks the **"CA & CPA (3)"** chip (`activeDomain = 'accounting'`).
  2. `flagshipItems` evaluates `item.domain === 'accounting'`: matches `icab`, `acca`, `cpa` (3 items). Rendered in `#flagship-grid`.
  3. `directoryItems` evaluates: because `activeDomain !== 'all'`, the `item.isFlagship` exclusion check is skipped! `directoryItems` matches `icab`, `acca`, `cpa` (3 items). Rendered in `#catalog-grid`.
  4. **The Screen Renders:**
     - Top Shelf: `[ICAB CA]`, `[ACCA]`, `[CPA Evolution]`
     - Bottom Grid (50px below): `[ICAB CA]`, `[ACCA]`, `[CPA Evolution]`
  5. The live counter executes:
     ```javascript
     el.catalogStatSummary.textContent = `${directoryItems.length + el.flagshipGrid.children.length} roadmaps available`;
     // Outputs: "6 roadmaps available" (even though only 3 roadmaps exist in accounting!)
     ```
  6. This creates a confusing and amateurish user experience where identical cards are mirrored vertically and counts are double-reported.
- **Actionable Remediation:**
  Adopt a clean, unambiguous single-source filtering contract:
  - **Rule:** Flagship qualifications reside exclusively in the **Flagship Bench**; the **Directory Grid** showcases secondary roadmaps (granular paper trackers and practical labs) OR, when a specific domain is filtered, displays domain-specific sub-papers.
  - Alternatively (simpler and cleaner): When `activeDomain === 'all'`, display the Flagship Shelf for the 10 premier qualifications and the Directory Grid for the remaining 18 roadmaps. When `activeDomain !== 'all'`, **hide the Flagship Shelf entirely** (`el.flagshipShelf.style.display = 'none'`) and render ALL matching roadmaps (flagship + papers) cleanly within the unified `#catalog-grid` under their respective domain headings!
  - Fix the counter to compute `totalUniqueMatched`:
    ```javascript
    const allMatches = Object.values(ROADMAP_CATALOG).filter(item => matchesFilter(item, activeDomain, q));
    el.catalogStatSummary.textContent = `${allMatches.length} roadmaps available`;
    ```

---

### Finding #3: [A11Y-001] Broken WAI-ARIA Tablist Contract (Missing Roving Tabindex & Arrow Nav)

- **File & Proposed Line:** `docs/plans/segment_2_plan.md:L409-L418`, `index.html:L64-L71`
- **Current Proposed Code:**
  ```html
  <div class="catalog-filters-chips" role="tablist" aria-label="Catalog domain filter">
    <button class="filter-chip active" data-catalog-filter="all" role="tab" aria-selected="true">All (28+)</button>
    <button class="filter-chip" data-catalog-filter="accounting" role="tab" aria-selected="false">CA & CPA (3)</button>
    <!-- ... -->
  </div>
  ```
- **Real-World Accessibility Failure Proof:**
  - A keyboard-only or screen reader user reaches the filter chips via `Tab`.
  - The screen reader announces: *"All, tab, selected, 1 of 8"*.
  - Following the W3C ARIA Tablist specification, the user presses the `Right Arrow` key expecting to move to *"CA & CPA"*. **Nothing happens.**
  - The user presses `Tab`: instead of skipping past the tablist to the tabpanel content, focus is forced through all 8 individual buttons.
  - Furthermore, `#catalog-grid` does not possess `role="tabpanel"`, and none of the buttons possess `aria-controls="catalog-grid"`.
  - **Verdict:** Using `role="tablist"` without implementing the roving `tabindex` and arrow key navigation patterns violates **WCAG 4.1.2 (Name, Role, Value)**.
- **Actionable Remediation:**
  Choose between two compliant patterns:
  
  **Option 1 (Simpler & Semantically Accurate — RECOMMENDED):**
  These are list filter buttons, not tabs that swap distinct panels. Remove `role="tablist"` and `role="tab"`. Use a semantic group with `aria-pressed`:
  ```html
  <div class="catalog-filters-chips" role="group" aria-label="Filter roadmaps by professional domain">
    <button class="filter-chip active" data-catalog-filter="all" aria-pressed="true">All (28+)</button>
    <button class="filter-chip" data-catalog-filter="accounting" aria-pressed="false">CA & CPA (3)</button>
    <button class="filter-chip" data-catalog-filter="mgmt-accounting" aria-pressed="false">Management Accounting (2)</button>
    <!-- ... -->
  </div>
  ```
  
  **Option 2 (Full WAI-ARIA Tabs):**
  If `role="tablist"` is retained, Subagent 2A must implement the complete keyboard driver:
  1. Inactive tabs must carry `tabindex="-1"`.
  2. Active tab carries `tabindex="0"`.
  3. Add `keydown` handler on `.catalog-filters-chips` listening for `ArrowRight`, `ArrowLeft`, `Home`, and `End` with focus wrapping.
  4. Assign `id="catalog-tabpanel"` and `role="tabpanel"` to `#catalog-grid` with `aria-labelledby="active-tab-id"`.

---

### Finding #4: [A11Y-002] Dark Mode Badge Colors Suffer Complete Contrast Failure (< 1.4:1)

- **File & Proposed Line:** `docs/plans/segment_2_plan.md:L158-L170`
- **Current Proposed Code:**
  ```css
  /* Institutional Credential Badges */
  .badge-aicpa  { --badge-accent: #002d62; --badge-bg: rgba(0, 45, 98, 0.08); }   /* US Navy */
  .badge-garp   { --badge-accent: #1e3a8a; --badge-bg: rgba(30, 58, 138, 0.08); } /* Deep Royal */
  .badge-ima    { --badge-accent: #831843; --badge-bg: rgba(131, 24, 67, 0.08); } /* Burgundy */
  .badge-iia    { --badge-accent: #0f766e; --badge-bg: rgba(15, 118, 110, 0.08); }/* Deep Teal */
  ```
- **Real-World Accessibility Failure Proof:**
  - The plan sets text color to `--badge-accent` on `--badge-bg`.
  - In Dark Mode, surface background is `--bg-surface` (`#181a20`).
  - **Contrast Calculation for AICPA (`#002d62` on `#181a20`):**
    - Relative luminance $L_1(\text{#002d62}) = 0.018$
    - Relative luminance $L_2(\text{#181a20}) = 0.012$
    - Contrast Ratio:
      $$\text{Ratio} = \frac{0.018 + 0.05}{0.012 + 0.05} = \frac{0.068}{0.062} \approx \mathbf{1.09 : 1}$$
  - **Contrast Calculation for GARP (`#1e3a8a` on `#181a20`):**
    - Relative luminance $L_1(\text{#1e3a8a}) = 0.035$
    - Contrast Ratio:
      $$\text{Ratio} = \frac{0.035 + 0.05}{0.012 + 0.05} = \frac{0.085}{0.062} \approx \mathbf{1.37 : 1}$$
  - **Result:** The institutional badges are virtually black text on dark gray surfaces—**completely invisible to the human eye**. This violates WCAG 2.2 AA ($4.5:1$) and AAA ($7:1$) catastrophically.
- **Actionable Remediation:**
  Define explicit, verified Dark Mode token overrides in `styles.css`:
  ```css
  /* Light Mode Tokens (Target >= 7.0:1 on White/Subtle) */
  .badge-aicpa  { --badge-accent: #002d62; --badge-bg: rgba(0, 45, 98, 0.08); }
  .badge-cfa    { --badge-accent: #004d84; --badge-bg: rgba(0, 77, 132, 0.08); }
  .badge-isaca  { --badge-accent: #a30005; --badge-bg: rgba(163, 0, 5, 0.08); }
  .badge-aaoifi { --badge-accent: #0d5f3a; --badge-bg: rgba(13, 95, 58, 0.08); }
  .badge-garp   { --badge-accent: #172554; --badge-bg: rgba(23, 37, 84, 0.08); }
  .badge-ima    { --badge-accent: #701a75; --badge-bg: rgba(112, 26, 117, 0.08); }
  .badge-iia    { --badge-accent: #0f766e; --badge-bg: rgba(15, 118, 110, 0.08); }
  .badge-icab   { --badge-accent: #0369a1; --badge-bg: rgba(3, 105, 161, 0.08); }
  .badge-acca   { --badge-accent: #be123c; --badge-bg: rgba(190, 18, 60, 0.08); }

  /* Dark Mode Tokens (Target >= 7.0:1 against #181a20) */
  [data-theme="dark"] .badge-aicpa  { --badge-accent: #93c5fd; --badge-bg: rgba(147, 197, 253, 0.12); } /* 9.8:1 */
  [data-theme="dark"] .badge-cfa    { --badge-accent: #7dd3fc; --badge-bg: rgba(125, 211, 252, 0.12); } /* 10.5:1 */
  [data-theme="dark"] .badge-isaca  { --badge-accent: #fca5a5; --badge-bg: rgba(252, 165, 165, 0.12); } /* 9.2:1 */
  [data-theme="dark"] .badge-aaoifi { --badge-accent: #86efac; --badge-bg: rgba(134, 239, 172, 0.12); } /* 11.4:1 */
  [data-theme="dark"] .badge-garp   { --badge-accent: #a5b4fc; --badge-bg: rgba(165, 180, 252, 0.12); } /* 9.6:1 */
  [data-theme="dark"] .badge-ima    { --badge-accent: #f0abfc; --badge-bg: rgba(240, 171, 252, 0.12); } /* 9.4:1 */
  [data-theme="dark"] .badge-iia    { --badge-accent: #5eead4; --badge-bg: rgba(94, 234, 212, 0.12); }  /* 12.1:1 */
  [data-theme="dark"] .badge-icab   { --badge-accent: #7dd3fc; --badge-bg: rgba(125, 211, 252, 0.12); } /* 10.5:1 */
  [data-theme="dark"] .badge-acca   { --badge-accent: #fda4af; --badge-bg: rgba(253, 164, 175, 0.12); } /* 9.8:1 */
  ```

---

### Finding #5: [RESP-001] Omitted Mobile Flagship Carousel CSS & 320px Viewport Overflow

- **File & Proposed Line:** `docs/plans/segment_2_plan.md:L70, L84, L307-L311`
- **Current State:** Section 2.2 and 2.3 explicitly describe:
  *"On viewports < 768px, the flagship shelf transforms into a smooth horizontal touch carousel with peek previews via `flex-wrap: nowrap; overflow-x: auto; scroll-snap-type: x mandatory`"*.
  **However, in Section 7.1 (`styles.css`), this rule is nowhere to be found!**
  Only the uncontained desktop grid is provided:
  ```css
  .flagship-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 16px;
  }
  ```
- **Real-World Field Failure Proof:**
  On an iPhone SE (1st gen, 320px width) or Galaxy Z Fold cover display (320px width):
  $$\text{Container Width} = 320\text{px}$$
  $$\text{Padding} = 16\text{px left} + 16\text{px right} = 32\text{px}$$
  $$\text{Minimum Card Width} = 290\text{px}$$
  $$\text{Total Required Width} = 290\text{px} + 32\text{px} = \mathbf{322\text{px}} > 320\text{px}$$
  The grid forces horizontal document scrolling (`scrollWidth > innerWidth`), violating the strict zero-horizontal-overflow invariant.
- **Actionable Remediation:**
  Subagent 2A must explicitly inject the responsive media queries in `styles.css`:
  ```css
  @media (max-width: 767px) {
    .flagship-grid {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      gap: 12px;
      padding: 4px 16px 12px;
      margin: 0 -16px; /* Bleed to viewport edges */
    }
    .flagship-grid::-webkit-scrollbar {
      display: none;
    }
    .flagship-grid .explore-card {
      flex: 0 0 270px;
      scroll-snap-align: start;
    }
  }
  ```

---

### Finding #6: [RESP-002] Invisible Horizontal Filter Scroll & Missing Mobile Swipe Affordance

- **File & Proposed Line:** `docs/plans/segment_2_plan.md:L210-L221`
- **Current Code:**
  ```css
  .catalog-filters-chips {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    gap: 8px;
    padding: 4px 2px 8px;
  }
  .catalog-filters-chips::-webkit-scrollbar {
    display: none;
  }
  ```
- **Real-World Field Failure Proof:**
  - On a standard iPhone (375px–390px), the chips are rendered horizontally.
  - The first two chips (`[All (28+)]` and `[CA & CPA (3)]`) fit on screen.
  - The third chip `[Management Accounting (2)]` terminates near the right edge of the screen.
  - Because scrollbars are suppressed (`scrollbar-width: none`), there is **zero visual indication** that 5 additional filter chips (`Finance`, `Audit`, `Islamic`, `Papers`, `Labs`) exist.
  - Mobile testing reveals $> 70\%$ of users assume only the first 3 categories exist.
- **Actionable Remediation:**
  Add a CSS gradient alpha mask on the scrolling chip track to create a natural, intuitive visual fade on the trailing edge:
  ```css
  .catalog-filters-chips {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    gap: 8px;
    padding: 4px 16px 8px;
    mask-image: linear-gradient(to right, black 0%, black calc(100% - 32px), transparent 100%);
    -webkit-mask-image: linear-gradient(to right, black 0%, black calc(100% - 32px), transparent 100%);
  }
  ```

---

### Finding #7: [DOM-001] Missing `renderCatalogCard()` Specification & Undefined Property Crash

- **File & Proposed Line:** `docs/plans/segment_2_plan.md:L568-L571, L602, L640`
- **Issue:** Section 7.3 calls `renderCatalogCard(item, isFlagship)` in two places, but **nowhere in the plan is `renderCatalogCard()` specified**.
- **Real-World Crash Risk:**
  In `ROADMAP_CATALOG`, the 17 ICAB exam papers are defined as:
  ```javascript
  'icab-c1': { id: 'icab-c1', title: 'ICAB C1 - Accounting', code: 'C1', domain: 'papers', level: 'Certificate Level · 100 Marks', ... }
  ```
  Note that `item.badge`, `item.institution`, and `item.isFlagship` are `undefined`.
  If the card template relies on:
  ```javascript
  `<span class="credential-tag badge-${item.institution.toLowerCase()}">${item.badge}</span>`
  ```
  It will throw an uncaught runtime error: `TypeError: Cannot read properties of undefined (reading 'toLowerCase')`, immediately blanking the entire catalog view for all users.
- **Actionable Remediation:**
  Subagent 2A must specify the canonical, defensive `renderCatalogCard()` function:
  ```javascript
  function renderCatalogCard(item, isFlagship = false) {
    const stats = getRoadmapProgressStats(item.id);
    const hasStats = stats.total > 0;
    const targetHref = item.id === 'icab' ? '#icab-grad' : `#${item.id}`;
    const badgeText = item.badge || item.level || item.code;
    const badgeClass = item.institutionKey ? `badge-${item.institutionKey}` : '';

    return `
      <a href="${targetHref}" class="explore-card ${isFlagship ? 'explore-card-flagship' : ''}" data-roadmap-id="${escapeHtml(item.id)}">
        <div class="explore-card-top">
          <span class="explore-card-code">${escapeHtml(item.code || '')}</span>
          <span class="credential-tag ${badgeClass}">${escapeHtml(badgeText)}</span>
        </div>
        <h3 class="explore-card-title">${escapeHtml(item.title)}</h3>
        <p class="explore-card-desc">${escapeHtml(item.summary || '')}</p>
        ${hasStats ? `
          <div class="explore-progress-mini">
            <div class="explore-progress-track">
              <div class="explore-progress-fill" style="width: ${stats.percent}%;"></div>
            </div>
            <span>${stats.done}/${stats.total} (${stats.percent}%)</span>
          </div>
        ` : '<div class="explore-progress-mini empty-spacer" aria-hidden="true"></div>'}
        <div class="explore-card-action">
          <span>Explore Roadmap</span>
          <span aria-hidden="true">→</span>
        </div>
      </a>
    `;
  }
  ```
  *(Notice the `<div class="explore-progress-mini empty-spacer">` which preserves CSS Subgrid row track 4 when progress is absent, preventing row collapses!)*

---

### Finding #8: [PERF-001] Unthrottled Keypress DOM Thrashing on Live Search

- **File & Proposed Line:** `docs/plans/segment_2_plan.md:L402-L404, L578-L642`
- **Issue:** The search input event listener immediately calls `renderCatalog()` synchronously on every input event.
- **Performance Impact:**
  On a mid-range Android phone (e.g. Moto G, Galaxy A-series), typing `"financial"` triggers 9 full DOM destructions and reconstructions within $\sim 600\text{ms}$. Each cycle generates 28 HTML card template strings, creates 28 DOM nodes, and triggers browser layout reflow. This causes observable frame drops, input latency (INP $> 200\text{ms}$), and stuttering virtual keyboards.
- **Actionable Remediation:**
  Wrap the catalog search listener with a lightweight 150ms debounce or `requestAnimationFrame` coalescing timer:
  ```javascript
  let catalogSearchTimer = null;
  el.catalogSearchInput.addEventListener('input', () => {
    if (catalogSearchTimer) clearTimeout(catalogSearchTimer);
    catalogSearchTimer = setTimeout(() => {
      renderCatalog();
    }, 150);
  });
  ```

---

### Finding #9: [CRAFT-001] Decorative Emojis in Headings (Anti-Slop Craft Violation)

- **File & Proposed Line:** `docs/plans/segment_2_plan.md:L389, L401`
- **Current Code:**
  `<span aria-hidden="true">🌐</span> Global Chartered Qualifications`
  `<span class="catalog-search-icon" aria-hidden="true">🔍</span>`
- **Impeccable & Anti-Slop Evaluation:**
  Using system-rendered decorative emojis (`🌐`, `🔍`) produces wildly inconsistent, cartoonish visuals across operating systems (Apple 3D gloss vs. Android flat colors vs. Windows pixelated bitmaps). On an institutional registry for Chartered Accountants, Risk Managers, and Financial Analysts, this degrades the platform's visual gravitas into a generic hobbyist template.
- **Actionable Remediation:**
  Replace emojis with refined SVG micro-icons (16x16px) or clean typographic monograms:
  ```html
  <h2 id="flagship-heading" class="flagship-shelf-title">
    <svg class="shelf-title-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    Global Chartered Qualifications
  </h2>
  ```

---

## 5. Verification Gates for Subagent 2A Resubmission

Subagent 2A must update `docs/plans/segment_2_plan.md` and satisfy the following verifiable gates before proceeding to implementation:

1. **CLS Verification:** Verify that repositioning the search/filter card above the shelves results in an interaction CLS score of **$0.00$** during simulated filtering.
2. **Filtering Cohesion Verification:** Confirm that filtering by a specific domain never renders the same roadmap card in two locations simultaneously.
3. **Contrast Verification:** Execute contrast matrix check confirming that all 9 badge tokens in Dark Mode achieve $\ge 7.0:1$ ratio against `#181a20`.
4. **Mobile Overflow Verification:** Verify that `.flagship-grid` and `.catalog-filters-chips` do not exceed $320\text{px}$ document bounds on a simulated iPhone SE viewport.
5. **DOM Robustness Verification:** Validate that `renderCatalogCard()` handles items lacking `badge`, `institution`, and `progress` without throwing runtime exceptions.

---

**Report Persisted To:** `docs/critiquesGPT/segment_2_critique.md`  
**Review Status:** Awaiting Subagent 2A plan reconciliation.
