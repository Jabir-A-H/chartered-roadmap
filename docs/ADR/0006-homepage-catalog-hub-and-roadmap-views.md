# ADR 0006: Homepage as Catalog Hub and Dedicated Roadmap Views (roadmap.sh Model)

## Status
Accepted

## Date
2026-11-09

## Context
In previous iterations, the application loaded the ICAB CA exam roadmap by default on the homepage, while discovery of all 20 roadmaps (ICAB CA, ACCA, 17 individual paper study trackers, and IT practical labs) was mediated through a modal dialog pop-up (`#explore-modal`) or the `Ctrl+K` command palette.

While effective as a prototype, modal overlays on content hubs have distinct usability drawbacks:
1. **Modal Clutter on Mobile:** A modal pop-up covering 20 cards on mobile viewports competes with browser chrome, scroll locking, and URL state.
2. **Mental Model Drift:** Users expect a qualification directory platform (like [roadmap.sh](https://roadmap.sh)) to feature the catalog hub directly on the root homepage (`/` or `#`), where all available disciplines and certifications are immediately visible and searchable.
3. **Navigation Expectations:** Clicking the site logo or header brand ("Chartered Roadmap") naturally suggests returning to the catalog directory rather than sticking to one particular qualification.

## Decision
We adopted **Option 3: The `roadmap.sh` Hub-and-Spoke Model**:

1. **Retirement of `#explore-modal`**:
   The pop-up explore modal dialog was retired completely, deleting `#explore-modal` from the DOM and eliminating related scroll-lock orchestration.

2. **Dual-View Content Architecture in `<main>`**:
   `<main>` now coordinates two primary viewports:
   - `<div id="catalog-view" class="catalog-view">`: The root directory hub displaying all 20 roadmaps grouped into 5 categories (`Full Qualifications`, `Certificate Level`, `Professional Level`, `Advanced Level`, and `Practical IT Labs`). Features real-time search filtering (`#catalog-search-input`), category filter chips, live match counts, and progress tracking bars.
   - `<div id="roadmap-view" class="roadmap-view">`: The focused, interactive qualification or paper roadmap viewport displaying stage columns, node trees, route selectors, and detail drawers.

3. **Breadcrumb Navigation**:
   The roadmap view introduces a persistent breadcrumb navigation bar (`.roadmap-breadcrumb-bar`):
   - `← All Roadmaps`: Links back to `#` (the Catalog Hub).
   - Parent qualification link (e.g. `ICAB CA` links to `#icab-grad` when viewing individual paper trackers).
   - Active roadmap indicator with current title and paper code (e.g. `Assurance (C1)`).

4. **Client-Side Hash Router Integration**:
   - Empty hash `""`, `'#'`, `'#home'`, `'#catalog'`, and `'#explore'` route to `view: 'catalog'`, immediately rendering the Catalog Hub.
   - Roadmap hashes (`#icab-grad`, `#acca`, `#icab-c1`, etc.) route to `view: 'roadmap'`, loading the requested dataset and updating breadcrumbs.
   - Preserves 0ms client-side transition speed, native browser back/forward history, and zero-dependency offline `file:///` support without requiring a server router or page reloads.

5. **Universal Brand Navigation**:
   Clicking the header brand logo (`#brand-home`), header `All Roadmaps (20)` button (`#explore-trigger-btn`), or breadcrumb home button (`#breadcrumb-home-btn`) smoothly returns the user to the Catalog Hub.

## Consequences

### Positive
- **Streamlined Discovery:** First-time visitors immediately see the full scope of available qualification frameworks and syllabus trackers.
- **Improved Mobile UX:** Removes dialog layering and modal scroll locks in favor of native page scrolling.
- **Consistent Mental Model:** Matches developer and student familiarity with `roadmap.sh` and modern documentation hubs.
- **Zero Latency & Offline Integrity:** No server roundtrips or multi-page asset re-downloads; remains 100% functional via static file serving and `file:///`.

### Trade-offs
- Router must manage surgical DOM display toggling between `#catalog-view` and `#roadmap-view` while preserving node drawer scroll positions.
