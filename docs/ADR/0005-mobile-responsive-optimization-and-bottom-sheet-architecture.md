# ADR 0005: Mobile-Responsive Optimization & Bottom-Sheet Architecture

## Status
Accepted

## Context
When loading Chartered Roadmap on mobile viewports (e.g. 320px–414px across iOS Safari and Android Chrome), users experienced severe usability and layout degradation:
1. **Horizontal Viewport Blowout**: Unconstrained header items (`brand-group`, fixed `header-search-wrapper`, and 3 action buttons) summed to > 500px, blowing out `document.documentElement.scrollWidth` to 544px on a 375px viewport and causing horizontal scrolling.
2. **Tab Bar Clipping**: The qualification segmented tab bar (`.tabs-segmented`) rendered as fixed `inline-flex` (357px+), overflowing the padded hero container on screens under 390px.
3. **Buried Drawer Action Button**: On mobile, the details drawer rendered as a bottom drawer with internal scroll over the entire container. When viewing long syllabi with extensive learning outcomes and checklists, the "Mark as Completed" button was buried hundreds of pixels below the fold.
4. **iOS Safari Input Auto-Zoom**: `<input>` elements sized at `0.9rem` (< 16px) triggered iOS Safari's disruptive automatic viewport zoom when focused.
5. **Scroll Chaining / Background Bleed**: Scrolling inside active modals or the drawer caused the underlying roadmap page to scroll simultaneously.
6. **Virtual Keyboard Occlusion**: On mobile devices, opening the Search modal with fixed centering resulted in the modal box being occluded by the onscreen virtual keyboard, with redundant desktop keyboard shortcut hints consuming valuable vertical space.

## Decision
We implemented a comprehensive, native-grade Mobile Responsive and Ergonomic Architecture:

1. **Fluid Mobile Header & Zero Overflow**:
   - Clamped `html` and `body` to `max-width: 100vw; overflow-x: hidden;`.
   - Converted `.header-container` to fluid flex distribution (`max-width: 100vw; padding: 8px 12px; gap: 8px;`).
   - Sized the brand typography responsively with truncation protection.
   - Introduced semantic text toggling for search (`.search-text-full` vs `.search-text-short` "Search..."), allowing the search pill to flex naturally (`flex: 1 1 auto; min-width: 0;`).
   - Standardized touch target actions (`.btn-nav-explore`, `.btn-icon`, `#gh-link`) to compact, accessible 40px hit areas with icon-only presentation on mobile.

2. **Horizontally-Scrollable Qualification Tabs**:
   - Styled `.tabs-segmented` on mobile with `overflow-x: auto`, momentum touch scrolling (`-webkit-overflow-scrolling: touch`), and hidden scrollbars, allowing seamless swiping between qualifications and the catalog with zero page blowout.

3. **Bottom-Sheet Details Drawer UX**:
   - Converted `.details-drawer` into a structured flex column bottom sheet with a visual drag pill (`.drawer-drag-handle`).
   - Sticky header with close touch target (`min-width: 44px; min-height: 44px`).
   - Independently scrollable `.drawer-body` (`flex: 1 1 auto; overflow-y: auto; overscroll-behavior: contain`).
   - Docked bottom action button (`#drawer-toggle-btn`) with iOS safe-area bottom padding (`env(safe-area-inset-bottom)`), ensuring completion is always one tap away regardless of syllabus length.
   - Integrated native swipe-to-dismiss gesture handling with touch threshold (> 70px drag down).

4. **Mobile Full-Screen Dialogs (Search & Explore)**:
   - Configured `.search-modal` and `.explore-modal` to occupy full dynamic viewport height (`100dvh`), maximizing space above the virtual keyboard.
   - Enforced `font-size: 16px` on all mobile text inputs to permanently prevent iOS Safari auto-zoom.
   - Suppressed desktop keyboard legends on mobile touch devices.

5. **Scroll Bleed Elimination**:
   - Added `syncBodyScrollLock()` controller and `body.modal-open { overflow: hidden; touch-action: none; }` to guarantee complete isolation of background scrolling while drawers or modals are active.

6. **Continuous Integration & Quality Gates**:
   - Added Test 7 to `scripts/verify-all.js` to assert viewport meta configuration, zero-overflow guards, bottom-sheet components, safe-area insets, and iOS zoom prevention on every build.

## Consequences
- **Positive**: 0px horizontal overflow across all tested viewports (320px iPhone SE 1st gen, 375px, 390px iPhone 14/15, 414px Plus/Max).
- **Positive**: Native app feel with smooth momentum scrolling, bottom sheet swipe gestures, and immediate action accessibility.
- **Positive**: Desktop experience remains 100% pixel-perfect and backward compatible.
- **Positive**: Fully automated regression test in `verify-all.js`.
