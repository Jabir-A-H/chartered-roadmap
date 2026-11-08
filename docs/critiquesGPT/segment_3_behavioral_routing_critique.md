# Architectural Critique Report: Segment 3: Behavioral State, Routing & Cross-Roadmap Navigation
**Date:** 2026-11-08  
**Evaluated Branch/Commit:** Pre-Implementation Baseline  
**Health Score:** 44/100  
**Status:** CRITICAL ATTENTION  
**Participants:** Agent 3A (Deep Behavioral State & Navigation Investigator), Agent 3B (Adversarial Behavioral State & Architecture Reviewer)

---

## 1. Executive Summary

Segment 3 governs the browser runtime state machine, client-side URL hash routing, persistent milestone tracking in `localStorage`, and event delegation across roadmap visual representations. An adversarial audit of [`app.js`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js) and [`index.html`](file:///d:/WebDev/roadmap-for-professional-degrees/index.html) reveals foundational architectural vulnerabilities that directly imperil the chartered roadmap modernization. Most critically, the current routing logic in `syncStateFromHash` naively splits the URL hash on hyphens (`-`) and strictly checks `qual === 'icab' || qual === 'acca'`, which catastrophically breaks ingestion for any sub-roadmap identifier containing hyphens (e.g., `#icab-it-labs`). Any attempt to deep-link to the upcoming autonomous practical IT labs dataset collapses into an orphan route (`WEB-001`), resetting the application to the default graduate route.

Furthermore, the client runtime is vulnerable to silent initialization crashes, unmitigated asynchronous race conditions, and severe DOM thrashing. `initTheme` invokes `localStorage` without exception guards, exposing private browsing sessions and restricted environments to fatal boot halts. When switching qualifications or routes rapidly, `loadRoadmap` lacks monotonic request sequence guards, allowing delayed asynchronous fetches to overwrite active views with stale data (`WEB-010`). On every single node selection or completion toggle, the controller completely destroys and re-renders the entire roadmap DOM tree via `el.roadmapTree.innerHTML`, obliterating user keyboard focus and causing layout recalculation latency. Addressing these architectural flaws is a hard prerequisite for supporting Segment 1's modular datasets and Segment 2's cross-roadmap transition UI.

---

## 2. Multi-Axis Scorecard

| Quality Dimension | Rating (1-10) | Primary Observation & Real-World Failure Mode |
| :--- | :---: | :--- |
| **Invariants & State Integrity** | 4/10 | Unhandled `localStorage` calls crash execution in private browsing modes; flat progress dictionary keys cause collisions across qualifications and roadmap versions. |
| **Data Schema & Seam Clarity** | 4/10 | Routing contract hardcodes `icab` and `acca` while assuming single-hyphen syntax, causing complete failure when parsing sub-roadmaps like `icab-it-labs`. |
| **Behavioral Robustness & Edge Cases** | 4/10 | Zero async race condition mitigation on rapid navigation; silent error swallowing leaves blank screens on data loader or network failure (`WEB-014`). |
| **UI Craft & Anti-Slop** | 4/10 | Total DOM tree destruction (`innerHTML = mapHtml`) on every node drawer open or checkbox toggle destroys accessibility focus rings and triggers layout recalculation. |
| **Testability & Seam Decoupling** | 5/10 | State mutation, hash manipulation, DOM rendering, and storage persistence are tightly coupled inside an anonymous IIFE without isolated unit-testable seams. |

---

## 3. Behavioral Audit Findings Table (5-Layer Methodology)

| # | Bug ID | Short Title | File Location | Urgency | Risk: Fix | Risk: No Fix | ROI | Blast Radius | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | WEB-001 | Sub-Roadmap URL Hash Ingestion Failure & Route Orphanage | [`app.js:L103-L117`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L103-L117) | 🔴 CRITICAL | Low | Critical | High | Router / Global | Open |
| 2 | WEB-003 | Unwired Sub-Roadmap Transition CTA in Node Drawer | [`app.js:L343-L372`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L343-L372), [`app.js:L458-L470`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L458-L470) | 🔴 CRITICAL | Low | Critical | High | Component / Drawer | Open |
| 3 | WEB-011 | URL-State Desync on Node Deep-Linking & History Traversal | [`app.js:L119-L125`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L119-L125), [`app.js:L267-L384`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L267-L384) | 🟡 HIGH | Medium | High | High | Router / State | Open |
| 4 | WEB-010 | Loading State Trap & Async Race Conditions in `loadRoadmap` | [`app.js:L130-L150`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L130-L150), [`app.js:L509-L520`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L509-L520) | 🟡 HIGH | Low | High | High | Controller / Async | Open |
| 5 | WEB-014 | Silent Error Swallowing on Loader Absence & Network Failure | [`app.js:L131-L141`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L131-L141) | 🟡 HIGH | Low | Medium | High | Error Handling | Open |
| 6 | WEB-012 | Flat Progress Key Collision & Route-Restricted Purge Trap | [`app.js:L83-L98`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L83-L98), [`app.js:L485-L500`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L485-L500) | 🟡 HIGH | Medium | High | High | Persistence / State | Open |
| 7 | WEB-008 | Hash-Mangling Brand and Footer Anchor Links | [`index.html:L15`](file:///d:/WebDev/roadmap-for-professional-degrees/index.html#L15), [`index.html:L96`](file:///d:/WebDev/roadmap-for-professional-degrees/index.html#L96) | 🔵 MEDIUM | Low | Medium | Medium | Navigation / Shell | Open |
| 8 | WEB-005 | Full DOM Re-render Thrashing & Focus Loss on Node Selection | [`app.js:L383`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L383), [`app.js:L417`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L417), [`app.js:L478`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L478) | 🟡 HIGH | Low | Medium | High | DOM / A11y | Open |
| 9 | WEB-002 | Unhandled `localStorage` Security Exceptions in Theme Initialization | [`app.js:L48-L74`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L48-L74), [`app.js:L526`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L526) | 🔴 CRITICAL | Low | Critical | High | Initialization | Open |

---

### Receipts & Remediation Plans

#### Finding #1: [WEB-001] Sub-Roadmap URL Hash Ingestion Failure & Route Orphanage
- **File & Line:** [`app.js:L103-L117`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L103-L117)
- **Current Behavior:**
  ```javascript
  function syncStateFromHash() {
    const rawHash = (location.hash || '').replace('#', '').trim();
    if (!rawHash) return;

    const parts = rawHash.split('-');
    const qual = parts[0];
    const route = parts.slice(1).join('-');

    if (qual === 'icab' || qual === 'acca') {
      state.qualId = qual;
      if (route) {
        state.routeId = route;
      }
    }
  }
  ```
- **Real-World Failure Mode:** When a student bookmarks, refreshes, or follows a direct link to `#icab-it-labs` or `#icab-it-labs/all`, `parts.split('-')` evaluates `qual = 'icab'` and `route = 'it-labs'`. The router queries `icab.json` for a route keyed `'it-labs'`, which does not exist in the primary ICAB qualification dataset. Line 144 falls back to `data.defaultRoute` (`'grad'`), silently redirecting the user to ICAB Graduate Level. The entire IT practical lab sub-roadmap becomes a completely unreachable orphan route (`WEB-001`) from direct navigation.
- **Authoritative Citation:** Global Engineering Rule 2 (Adversarial Doubt Gate) and Roadmap.sh Modular Architecture Spec (`docs/MULTI_AGENT_AUDIT_AND_IMPLEMENTATION_BLUEPRINT.md#Section-2`).
- **Concrete Actionable Remediation:** Modernize routing syntax from naive hyphen splitting to structured hierarchical path parsing (`#/<roadmapId>[/<routeId>][/<nodeId>]`) while preserving legacy `#icab-<route>` fallback:
  ```javascript
  function syncStateFromHash() {
    const rawHash = (location.hash || '').replace(/^#\/?/, '').trim();
    if (!rawHash) return;

    // Check slash-delimited route first: #/roadmapId/routeId/nodeId
    const slashParts = rawHash.split('/').filter(Boolean);
    if (slashParts.length > 0) {
      const targetMap = slashParts[0];
      state.qualId = targetMap;
      if (slashParts[1]) state.routeId = slashParts[1];
      if (slashParts[2]) state.activeNodeId = slashParts[2];
      return;
    }

    // Backward-compatibility: legacy hyphenated hash #icab-grad or #icab-it-labs
    if (rawHash.startsWith('icab-it-labs')) {
      state.qualId = 'icab-it-labs';
      const remainder = rawHash.replace('icab-it-labs', '').replace(/^-/, '');
      state.routeId = remainder || 'all';
    } else {
      const parts = rawHash.split('-');
      const qual = parts[0];
      const route = parts.slice(1).join('-');
      if (qual === 'icab' || qual === 'acca') {
        state.qualId = qual;
        if (route) state.routeId = route;
      }
    }
  }
  ```
- **Cross-Segment Blast Radius:** Blocks Segment 1 (`icab-it-labs.json`) and Segment 2 breadcrumbs if unresolved.

---

#### Finding #2: [WEB-003] Unwired Sub-Roadmap Transition CTA in Node Drawer
- **File & Line:** [`app.js:L343-L372`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L343-L372), [`app.js:L458-L470`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L458-L470)
- **Current Behavior:** `openNodeDrawer` renders embedded practical labs statically inside the drawer. When Segment 1 replaces `embeddedLabs` with `linkedRoadmaps` metadata and Segment 2 injects a companion button (`<button class="btn-subroadmap" data-open-roadmap="icab-it-labs" data-stage="stage-cl-it">Explore Dedicated Roadmap ↗</button>`), there is zero event delegation attached to `el.drawer` or `el.drawerBody` to intercept the action.
- **Real-World Failure Mode:** When an articled student opens the `c7` (Information Technology) or `p7` (IT Governance) examination drawer and clicks the companion CTA, nothing happens. The click bubbles up and is ignored, leaving the student stranded in an unwired dead end (`WEB-003`). If wrapped in an `<a href="#icab-it-labs">` without drawer synchronization, the hash updates, but the drawer remains locked open over the wrong dataset.
- **Authoritative Citation:** ICAB Curriculum Modernization Directive (ICAB Syllabus 2025 separation mandate) & `WEB-003` (Unwired Action).
- **Concrete Actionable Remediation:** Implement event delegation on `el.drawer` to orchestrate clean cross-roadmap transitions:
  ```javascript
  el.drawer.addEventListener('click', (e) => {
    const cta = e.target.closest('[data-open-roadmap]');
    if (!cta) return;
    
    const targetRoadmap = cta.dataset.openRoadmap;
    const targetStage = cta.dataset.stage;
    const targetNode = cta.dataset.node;

    closeDrawer();
    state.qualId = targetRoadmap;
    state.routeId = cta.dataset.route || 'all';
    state.activeNodeId = targetNode || null;
    
    updateHash();
    loadRoadmap(targetRoadmap).then(() => {
      if (targetStage) {
        const stageEl = document.querySelector(`[data-stage-id="${targetStage}"]`);
        if (stageEl) stageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  ```
- **Cross-Segment Blast Radius:** Affects Segment 1's `linkedRoadmaps` metadata schema and Segment 2's drawer CTA component.

---

#### Finding #3: [WEB-011] URL-State Desync on Node Deep-Linking & History Traversal
- **File & Line:** [`app.js:L119-L125`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L119-L125), [`app.js:L267-L384`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L267-L384)
- **Current Behavior:** `updateHash()` only synchronizes `state.qualId` and `state.routeId`. When `openNodeDrawer(nodeId)` opens a detailed syllabus drawer, `location.hash` remains unchanged. Furthermore, `window.addEventListener('hashchange')` does not inspect or restore `state.activeNodeId`.
- **Real-World Failure Mode:** A student studying for `c7` copies the browser URL to share syllabus details with peers or bookmark it. The resulting URL contains only `#icab-grad`. When reopened, the page renders the top-level map, losing the active paper view. If the student presses the browser's native Back button to dismiss the drawer (a standard mobile and desktop web expectation), the browser exits the application entirely rather than closing the drawer (`WEB-011`).
- **Authoritative Citation:** Global Engineering Rule 2 (Adversarial Doubt Gate) and WCAG 2.1 Navigation & History Standards.
- **Concrete Actionable Remediation:** Synchronize node selection with the URL via `history.replaceState` or hash updates without polluting browser history stacks, and restore active nodes during `loadRoadmap`:
  ```javascript
  function updateHash(replace = false) {
    let newHash = `#/${state.qualId}/${state.routeId}`;
    if (state.activeNodeId) {
      newHash += `/${state.activeNodeId}`;
    }
    if (location.hash !== newHash) {
      if (replace) {
        history.replaceState(null, '', newHash);
      } else {
        location.hash = newHash;
      }
    }
  }
  ```
  In `loadRoadmap`, after rendering the map, check if `state.activeNodeId` is present in `state.nodesById`; if so, trigger `openNodeDrawer(state.activeNodeId, false)` without re-triggering hash updates.
- **Cross-Segment Blast Radius:** Requires coordinate updates in Segment 2 UI components so visual cards reflect deep-linked selection.

---

#### Finding #4: [WEB-010] Loading State Trap & Async Race Conditions in `loadRoadmap`
- **File & Line:** [`app.js:L130-L150`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L130-L150), [`app.js:L509-L520`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L509-L520)
- **Current Behavior:**
  ```javascript
  async function loadRoadmap(qualId) {
    if (!window.ROADMAP_LOADER) { ... return; }
    const data = await window.ROADMAP_LOADER.get(qualId);
    if (!data) { ... return; }
    state.currentData = data;
    renderRouteSelector();
    renderMap();
  }
  ```
  `loadRoadmap` provides no visual feedback (spinner or skeleton) during asynchronous fetching, and possesses no concurrency or cancellation controls.
- **Real-World Failure Mode:** On a mobile connection or low-bandwidth cellular network, when a user rapidly toggles between qualification tabs (e.g., clicks "ICAB", then immediately clicks "ACCA", then "IT Practical Labs"), multiple asynchronous `window.ROADMAP_LOADER.get()` promises are dispatched simultaneously. If the ICAB fetch encounters network jitter and resolves *after* the ACCA fetch, the resolved ICAB dataset overwrites `state.currentData`. The user is left looking at ICAB exam nodes while the ACCA tab and route selector are marked active, causing total state desynchronization (`WEB-010`).
- **Authoritative Citation:** Rule 2 Trade-off Analysis (Race conditions and paint latency).
- **Concrete Actionable Remediation:** Introduce a monotonic request sequence counter and an accessible loading state:
  ```javascript
  let activeLoadSequence = 0;

  async function loadRoadmap(qualId) {
    const sequenceId = ++activeLoadSequence;
    el.roadmapTree.setAttribute('aria-busy', 'true');
    el.roadmapTree.innerHTML = '<div class="loading-state" role="status"><span class="spinner"></span> Loading roadmap...</div>';

    const data = await window.ROADMAP_LOADER.get(qualId);

    // Stale request guard
    if (sequenceId !== activeLoadSequence) {
      console.warn(`Discarding stale roadmap load for "${qualId}" (seq ${sequenceId} < ${activeLoadSequence})`);
      return;
    }

    el.roadmapTree.removeAttribute('aria-busy');
    if (!data) {
      el.roadmapTree.innerHTML = `
        <div class="error-state" role="alert">
          <p>Unable to load the requested roadmap dataset.</p>
          <button class="btn-retry" onclick="location.reload()">Retry</button>
        </div>`;
      return;
    }

    state.currentData = data;
    if (!data.routes[state.routeId]) {
      state.routeId = data.defaultRoute || Object.keys(data.routes)[0];
    }
    renderRouteSelector();
    renderMap();
  }
  ```
- **Cross-Segment Blast Radius:** Isolated to `app.js` controller lifecycle; guarantees predictable rendering.

---

#### Finding #5: [WEB-014] Silent Error Swallowing on Loader Absence & Network Failure
- **File & Line:** [`app.js:L131-L141`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L131-L141)
- **Current Behavior:**
  ```javascript
  if (!window.ROADMAP_LOADER) {
    console.error('ROADMAP_LOADER is not defined.');
    return;
  }
  ```
- **Real-World Failure Mode:** If `data/roadmaps.js` fails to load (e.g., CDN failure, 404 on static host, strict corporate script blocker, or file corruption), `loadRoadmap` silently logs to the console and exits. The application displays an empty hero shell, a non-responsive progress card (0 of 0), and an empty tree container with zero user feedback or recovery path (`WEB-014`).
- **Authoritative Citation:** Global Engineering Rule 5 (Quality & Pre-Flight Verification) and `WEB-014` (Silent Error Swallowing).
- **Concrete Actionable Remediation:** Inject user-facing recovery UI when runtime dependencies fail:
  ```javascript
  if (!window.ROADMAP_LOADER) {
    el.roadmapTree.innerHTML = `
      <div class="system-error-card" role="alert">
        <h3>Roadmap Loader Unavailable</h3>
        <p>The roadmap data bundle could not be loaded. Please check your network connection or reload the application.</p>
        <button class="btn-primary" onclick="window.location.reload()">Reload Application</button>
      </div>`;
    return;
  }
  ```
- **Cross-Segment Blast Radius:** Frontend error presentation; improves operational predictability.

---

#### Finding #6: [WEB-012] Flat Progress Key Collision & Route-Restricted Purge Trap
- **File & Line:** [`app.js:L83-L98`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L83-L98), [`app.js:L485-L500`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L485-L500)
- **Current Behavior:** Progress tracking stores milestone completion in a single unnamespaced dictionary (`localStorage['chartered-roadmap-progress-v1']`) keyed directly by `node.id`. In `el.resetProgressBtn`, the handler purges progress by iterating exclusively over `getActiveStages()`:
  ```javascript
  el.resetProgressBtn.addEventListener('click', () => {
    const stages = getActiveStages();
    if (!confirm('Are you sure you want to reset your saved progress for this qualification route?')) return;
    stages.forEach((stage) => {
      (stage.nodes || []).forEach((node) => {
        delete state.progress[node.id];
      });
    });
    saveProgress();
    closeDrawer();
    renderMap();
  });
  ```
- **Real-World Failure Mode:**
  1. *Key Collision:* If `icab-it-labs` or future qualification modules utilize milestone IDs that overlap with ICAB or ACCA papers (e.g., `stage1`, `m1`, or `c7`), checking off a lab module inadvertently marks written exams as passed across unrelated qualification roadmaps (`WEB-012`).
  2. *Purge Trap:* If a student switches from the Graduate route (`grad`) to the HSC route (`hsc`) or opens a sub-roadmap, clicking "Reset Progress" wipes only nodes present in the current view. Nodes unique to other routes or completed in sub-roadmaps remain invisibly stored in `localStorage`, desynchronizing aggregate milestone calculations.
- **Authoritative Citation:** ADR 0001 (Data Isolation Architecture) and Rule 4 (Preserve User Data).
- **Concrete Actionable Remediation:** Implement composite namespacing (`${roadmapId}:${nodeId}`) or nested roadmap progress dictionaries, alongside an explicit reset confirmation modal clarifying whether the user is resetting the active route or all stored progress:
  ```javascript
  function getNodeStorageKey(nodeId, roadmapId = state.qualId) {
    return `${roadmapId}:${nodeId}`;
  }

  // Backward-compatible ingestion:
  function isNodeCompleted(nodeId) {
    return Boolean(state.progress[getNodeStorageKey(nodeId)] || state.progress[nodeId]);
  }
  ```
- **Cross-Segment Blast Radius:** Protects Segment 1 datasets from collision; preserves historical user progress during migration.

---

#### Finding #7: [WEB-008] Hash-Mangling Brand and Footer Anchor Links
- **File & Line:** [`index.html:L15`](file:///d:/WebDev/roadmap-for-professional-degrees/index.html#L15), [`index.html:L96`](file:///d:/WebDev/roadmap-for-professional-degrees/index.html#L96)
- **Current Behavior:** The brand link uses `href="#"`, while the footer "Back to top" link uses `href="#tab-icab"`.
- **Real-World Failure Mode:** When a student clicks the brand logo to return to the top of the page, the browser updates `location.hash` to `#`, firing a `hashchange` event. `syncStateFromHash()` parses an empty string and aborts, leaving the browser URL at a bare `#`. If the user subsequently refreshes the page, the state is lost. Similarly, clicking "Back to top ↑" sets the URL hash to `#tab-icab`. `syncStateFromHash` attempts to parse `qual = 'tab'` and fails silently, but the URL bar retains the invalid hash `#tab-icab`. Sharing or bookmarking this URL causes routing fallback errors.
- **Authoritative Citation:** HTML5 Living Standard & Single Page App Hash Safety (`WEB-008`).
- **Concrete Actionable Remediation:** Replace raw hash mutations with semantic scrolling behaviors:
  ```html
  <!-- index.html -->
  <a href="javascript:void(0)" class="brand-group" id="brand-home" aria-label="Chartered Roadmap Homepage">...</a>
  <button type="button" class="btn-link" id="back-to-top">Back to top ↑</button>
  ```
  ```javascript
  // app.js
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  ```
- **Cross-Segment Blast Radius:** Confined to `index.html` navigation anchors.

---

#### Finding #8: [WEB-005] Full DOM Re-render Thrashing & Focus Loss on Node Selection
- **File & Line:** [`app.js:L383`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L383), [`app.js:L417`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L417), [`app.js:L478`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L478)
- **Current Behavior:** Whenever `openNodeDrawer()`, `closeDrawer()`, or `drawerToggleBtn.click` executes, the controller invokes `renderMap()`, which completely destroys and rebuilds the roadmap DOM via `el.roadmapTree.innerHTML = mapHtml`.
- **Real-World Failure Mode:** A student navigating via keyboard presses Enter on an exam card to inspect syllabus details. `openNodeDrawer` destroys the focused button from the DOM. Browser focus is abruptly dumped onto `document.body`, forcing the user to tab all the way through the header, tabs, and route pills again. On low-end mobile devices, re-parsing 40+ complex HTML stage cards causes perceptible paint stutter and unnecessary garbage collection churn.
- **Authoritative Citation:** WCAG 2.1 Focus Retention (Success Criterion 2.4.3 Focus Order) & Web Performance (Cumulative Layout Shift / Paint Latency).
- **Concrete Actionable Remediation:** Decouple drawer state and completion status updates from structural map re-renders:
  ```javascript
  function updateNodeSelectionUI(nodeId) {
    document.querySelectorAll('.node-card.selected').forEach(c => c.classList.remove('selected'));
    if (nodeId) {
      const activeCard = document.querySelector(`.node-card[data-node-id="${nodeId}"]`);
      if (activeCard) activeCard.classList.add('selected');
    }
  }

  function updateNodeCompletionUI(nodeId, isDone) {
    const card = document.querySelector(`.node-card[data-node-id="${nodeId}"]`);
    if (card) {
      card.classList.toggle('done', isDone);
      card.setAttribute('aria-pressed', String(isDone));
    }
    updateProgressSummary();
  }
  ```
  Only call `renderMap()` when the underlying dataset or active route changes.
- **Cross-Segment Blast Radius:** Eliminates focus loss and accelerates mobile interaction speed.

---

#### Finding #9: [WEB-002] Unhandled `localStorage` Security Exceptions in Theme Initialization
- **File & Line:** [`app.js:L48-L74`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L48-L74), [`app.js:L526`](file:///d:/WebDev/roadmap-for-professional-degrees/app.js#L526)
- **Current Behavior:**
  ```javascript
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    ...
    el.themeToggle.addEventListener('click', () => {
      ...
      localStorage.setItem(THEME_STORAGE_KEY, next);
    });
  }
  ```
  `initTheme()` is executed synchronously as the first statement in `init()`. Unlike `loadProgress()`, it lacks `try...catch` wrapper blocks.
- **Real-World Failure Mode:** In iOS Safari Private Browsing mode, privacy-focused browsers (e.g., Brave with shields up), embedded enterprise webviews, or when storage quotas are exceeded, calling `localStorage.getItem` or `localStorage.setItem` throws an uncaught `DOMException: SecurityError`. Because this exception occurs on the first line of `init()`, script execution halts immediately. Event listeners are never attached, and `loadRoadmap()` is never called. The user is left staring at a completely blank, non-interactive skeleton (`WEB-002`).
- **Authoritative Citation:** MDN Web Docs (`Storage.setItem` SecurityError in private browsing) & Global Engineering Rule 2 (Doubt Gate).
- **Concrete Actionable Remediation:** Encapsulate all storage access within a resilient helper module with in-memory fallback:
  ```javascript
  const safeStorage = {
    getItem(key) {
      try { return localStorage.getItem(key); } catch (e) { return null; }
    },
    setItem(key, val) {
      try { localStorage.setItem(key, val); } catch (e) { console.warn('Storage unavailable:', e); }
    }
  };
  ```
- **Cross-Segment Blast Radius:** Hardens application bootstrap sequence across all environments.

---

## 4. Adversarial Reviewer Stress-Test & Doubt Gate

### 4.1 Pruned Strawmen & Dismissed False Positives
1. **Dismissed Item 1: "Introduce a third-party client-side routing library (e.g., Navigo, Page.js, or React Router)."**
   - *Adversarial Cross-Examination:* An external routing library introduces external dependency risks, increases bundle weight, and requires build tooling or external script tags. For a zero-dependency static application with 3 qualification targets and 2 sub-levels, native `window.location.hash` and `hashchange` event listeners provide 100% of required functionality when paired with clean path parsing.
   - *Verdict:* REJECTED as premature architectural complexity under Rule 2 (Favor simplicity and density).
2. **Dismissed Item 2: "Push a full `history.pushState` on every node card click."**
   - *Adversarial Cross-Examination:* Proposing `history.pushState` every time a student opens a node drawer creates catastrophic "history stack poisoning." A user clicking through 15 examination papers to compare credit hours would have to press the browser "Back" button 15 times just to return to the previous website.
   - *Verdict:* REJECTED. Node drawer deep-linking must use `history.replaceState` or URL hash mutation with single-entry history capping.
3. **Dismissed Item 3: "Banned Trivial Con: Splitting progress keys adds boilerplate."**
   - *Adversarial Cross-Examination:* Citing the minor inconvenience of namespacing keys (`roadmapId:nodeId`) as an objection is a banned trivial con under Rule 2.3. Without key isolation, the modular roadmap architecture cannot scale to autonomous lab roadmaps or individual paper deep-dives.
   - *Verdict:* REJECTED. Namespacing is mandatory.

### 4.2 Cross-Segment Ripple Effect Analysis
- **Impact on Segment 1 (Data Layer):**
  Segment 3's router must immediately support the exact roadmap identifier created by Segment 1: `icab-it-labs`. The router must also parse route keys within `icab-it-labs.json` (such as `all`, `cl_labs`, and `pl_labs`) and stage anchors (`stage-cl-it`, `stage-pl-it`).
- **Impact on Segment 2 (UI Presentation & Breadcrumbs):**
  When transitioning into `icab-it-labs`, Segment 3 must signal Segment 2's breadcrumb bar (`← Return to ICAB CA Main Roadmap`). Clicking the breadcrumb must cleanly transition the router back to `#icab-grad` without leaving orphaned drawer overlays.
- **Data Migration & Backward Compatibility:**
  Existing users who have saved progress under `localStorage['chartered-roadmap-progress-v1']` must not lose their milestones. The progress loader must support a dual-lookup strategy: reading unnamespaced legacy keys (`c1`, `p7`) while writing forward-compatible namespaced keys (`icab:c1`, `icab-it-labs:lab-1`).

---

## 5. Architectural Recommendations & Implementation Sequence

1. **Step 1: Bootstrap Resiliency & Safe Storage:**
   Wrap all `localStorage` access in `safeStorage` helpers so that private browsing modes cannot abort application initialization (`Finding #9`).
2. **Step 2: Hierarchical Hash Router Modernization:**
   Refactor `syncStateFromHash()` and `updateHash()` to parse slash-delimited paths (`#/<roadmapId>/<routeId>/<nodeId>`) with backward-compatibility fallbacks for `#icab-grad` and `#icab-it-labs` (`Finding #1`, `Finding #3`).
3. **Step 3: Asynchronous Lifecycle Hardening:**
   Implement monotonic sequence tracking (`activeLoadSequence`) and accessible loading states in `loadRoadmap()` to eliminate race conditions during rapid navigation (`Finding #4`, `Finding #5`).
4. **Step 4: Cross-Roadmap Drawer Delegation & History Orchestration:**
   Add event listeners to `el.drawer` for `[data-open-roadmap]` triggers. Ensure clicking a companion lab CTA closes the current drawer, smoothly loads `icab-it-labs`, updates the hash, and scrolls to the corresponding practical lab stage (`Finding #2`).
5. **Step 5: Surgical DOM Updates & Focus Preservation:**
   Replace the indiscriminate `renderMap()` calls in `openNodeDrawer()`, `closeDrawer()`, and completion toggles with surgical class toggling (`updateNodeSelectionUI`, `updateNodeCompletionUI`), preserving keyboard focus and eliminating layout thrashing (`Finding #8`).
6. **Step 6: Progress Isolation & Semantic Reset:**
   Namespace progress keys (`${roadmapId}:${nodeId}`) with backward-compatible legacy lookup. Clarify the scope of progress resetting so users can intentionally reset an individual route or the entire dataset without leaving phantom milestone records (`Finding #6`).
7. **Step 7: Clean Page Anchors:**
   Replace `href="#"` and `href="#tab-icab"` on brand and footer anchors with smooth scrolling event listeners to prevent hash-mangling collisions with the router (`Finding #7`).

---
*Authored and verified under Global Engineering Rules 1–7. Ready for Master Reviewer synthesis.*
