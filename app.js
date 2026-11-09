/**
 * Chartered Roadmap - Application Controller
 * Handles interactive node mapping, route switching, progress tracking,
 * drawer state, sub-roadmap portals, search & command palette, explore catalog,
 * and URL hash routing.
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // State Keys & Roadmap Catalog
  // -------------------------------------------------------------
  const PROGRESS_STORAGE_KEY_V2 = 'chartered-roadmap-progress-v2';
  const PROGRESS_STORAGE_KEY_V1 = 'chartered-roadmap-progress-v1';
  const THEME_STORAGE_KEY = 'chartered-roadmap-theme';

  const ROADMAP_CATALOG = {
    'icab': {
      id: 'icab',
      title: 'ICAB CA Qualification (Curriculum 2025)',
      code: 'ICAB',
      level: 'All Levels (1,600 Marks)',
      category: 'qual',
      categoryLabel: 'Full Qualification',
      summary: 'Complete qualification roadmap covering Certificate, Professional, and Advanced levels, 17 exam papers, 5 IT practical labs, articleship routes, and ethics modules under the 2025 Syllabus.',
      tags: ['ICAB', 'CA', 'Bangladesh', 'Chartered Accountant', 'Curriculum 2025']
    },
    'acca': {
      id: 'acca',
      title: 'ACCA Global Qualification',
      code: 'ACCA',
      level: 'Global Qualification',
      category: 'qual',
      categoryLabel: 'Full Qualification',
      summary: 'Comprehensive ACCA qualification pathway: Applied Knowledge, Applied Skills, Strategic Professional, Ethics and Professional Skills Module (EPSM), and Practical Experience Requirement (PER).',
      tags: ['ACCA', 'Global', 'Chartered Certified', 'IFRS']
    },
    'icab-it-labs': {
      id: 'icab-it-labs',
      title: 'ICAB IT Practical Labs',
      code: 'IT LABS',
      level: 'Certificate & Professional Skills',
      category: 'labs',
      categoryLabel: 'Practical Skills',
      summary: '5 hands-on IT practical workshops: QuickBooks/Sage ERP, Applied Excel for Accountants, BI & Big Data Analytics with AI, IS Security & Forensics, and IS Audit Banking CAATs.',
      tags: ['IT Labs', 'QuickBooks', 'Excel', 'Data Analytics', 'IS Audit', 'AI', 'Cybersecurity']
    },
    'icab-c1': {
      id: 'icab-c1',
      title: 'ICAB C1 - Accounting',
      code: 'C1',
      level: 'Certificate Level · 100 Marks · 1.5 Hours',
      category: 'cl',
      categoryLabel: 'Certificate Level',
      summary: 'Double-entry bookkeeping, adjusting entries, financial statement preparation for sole traders, partnerships, and limited companies under IFRS, and public financial management.',
      tags: ['C1', 'Accounting', 'Bookkeeping', 'IFRS', 'PFM', 'Trial Balance']
    },
    'icab-c2': {
      id: 'icab-c2',
      title: 'ICAB C2 - Assurance',
      code: 'C2',
      level: 'Certificate Level · 100 Marks · 1.5 Hours',
      category: 'cl',
      categoryLabel: 'Certificate Level',
      summary: 'Assurance framework, five elements, internal control systems, obtaining audit evidence, and professional ethics under ISA.',
      tags: ['C2', 'Assurance', 'Audit', 'Internal Controls', 'Evidence', 'Ethics']
    },
    'icab-c3': {
      id: 'icab-c3',
      title: 'ICAB C3 - Business, Technology and Finance',
      code: 'C3',
      level: 'Certificate Level · 100 Marks · 1.5 Hours',
      category: 'cl',
      categoryLabel: 'Certificate Level',
      summary: 'Business objectives, organizational structures, financial markets, PESTEL environment, corporate governance, CSR, and digital transformation.',
      tags: ['C3', 'BTF', 'Business Strategy', 'Finance', 'Governance', 'Digital']
    },
    'icab-c4': {
      id: 'icab-c4',
      title: 'ICAB C4 - Management Information',
      code: 'C4',
      level: 'Certificate Level · 100 Marks · 1.5 Hours',
      category: 'cl',
      categoryLabel: 'Certificate Level',
      summary: 'Cost classification, absorption vs marginal costing, budgeting, variance analysis, CVP decision making, and data analytics in management accounting.',
      tags: ['C4', 'MI', 'Costing', 'Budgeting', 'Variance Analysis', 'CVP']
    },
    'icab-c5': {
      id: 'icab-c5',
      title: 'ICAB C5 - Principles of Taxation',
      code: 'C5',
      level: 'Certificate Level · 100 Marks · 1.5 Hours',
      category: 'cl',
      categoryLabel: 'Certificate Level',
      summary: 'Bangladesh Income Tax Act 2023, individual and company tax computations, TDS, return filing, and VAT and SD Act 2012.',
      tags: ['C5', 'Taxation', 'Income Tax Act 2023', 'VAT', 'TDS', 'NBR']
    },
    'icab-c6': {
      id: 'icab-c6',
      title: 'ICAB C6 - Business Laws',
      code: 'C6',
      level: 'Certificate Level · 50 Marks · 1.0 Hour',
      category: 'cl',
      categoryLabel: 'Certificate Level',
      summary: 'Companies Act 1994, Negotiable Instruments Act 1881, Partnership Act 1932, Contract Act 1872, Sale of Goods Act, and Labour Act 2006.',
      tags: ['C6', 'Business Laws', 'Companies Act', 'Contracts', 'Negotiable Instruments', 'Labour Act']
    },
    'icab-c7': {
      id: 'icab-c7',
      title: 'ICAB C7 - Information Technology',
      code: 'C7',
      level: 'Certificate Level · 50 Marks · 1.0 Hour',
      category: 'cl',
      categoryLabel: 'Certificate Level',
      summary: 'System development lifecycle (SDLC), agile methodologies, cloud computing, relational DBMS/SQL, business intelligence, and cybersecurity resilience.',
      tags: ['C7', 'IT', 'SDLC', 'Agile', 'Cloud', 'DBMS', 'Cybersecurity']
    },
    'icab-p1': {
      id: 'icab-p1',
      title: 'ICAB P1 - Financial Accounting and Reporting',
      code: 'P1',
      level: 'Professional Level · 100 Marks · 3.0 Hours',
      category: 'pl',
      categoryLabel: 'Professional Level',
      summary: 'Single entity financial statements under BFRS/IFRS, consolidated group statements, financial ratio analysis, AAOIFI Islamic accounting, and IPSAS.',
      tags: ['P1', 'FAR', 'IFRS', 'Consolidation', 'Islamic Finance', 'Cash Flows']
    },
    'icab-p2': {
      id: 'icab-p2',
      title: 'ICAB P2 - Audit and Assurance',
      code: 'P2',
      level: 'Professional Level · 100 Marks · 3.0 Hours',
      category: 'pl',
      categoryLabel: 'Professional Level',
      summary: 'Audit risk model (ISA 315), planning materiality, fraud responsibilities (ISA 240), substantive testing, Key Audit Matters (KAM), and auditor reporting.',
      tags: ['P2', 'Audit', 'ISA', 'Materiality', 'KAM', 'Audit Risk']
    },
    'icab-p3': {
      id: 'icab-p3',
      title: 'ICAB P3 - Business Planning: Taxation & Compliance',
      code: 'P3',
      level: 'Professional Level · 100 Marks · 3.0 Hours',
      category: 'pl',
      categoryLabel: 'Professional Level',
      summary: 'Tax litigation, appellate tribunal, Alternative Dispute Resolution (ADR), transfer pricing, corporate restructuring, tax holidays, and VAT investigations.',
      tags: ['P3', 'Tax Planning', 'Transfer Pricing', 'ADR', 'Tribunal', 'VAT Audit']
    },
    'icab-p4': {
      id: 'icab-p4',
      title: 'ICAB P4 - Financial Management',
      code: 'P4',
      level: 'Professional Level · 100 Marks · 3.0 Hours',
      category: 'pl',
      categoryLabel: 'Professional Level',
      summary: 'WACC, Modigliani-Miller capital structure, DCF appraisal under capital rationing, business valuation (FCFF/FCFE), FX/interest rate derivatives, and green finance.',
      tags: ['P4', 'Financial Management', 'WACC', 'Valuation', 'Derivatives', 'Hedging', 'ESG']
    },
    'icab-p5': {
      id: 'icab-p5',
      title: 'ICAB P5 - Business Strategy & Technology',
      code: 'P5',
      level: 'Professional Level · 100 Marks · 3.0 Hours',
      category: 'pl',
      categoryLabel: 'Professional Level',
      summary: 'VRIO analysis, Porter generic strategies, Bowman Strategy Clock, Ansoff matrix, Balanced Scorecard, change management, and strategic ethics.',
      tags: ['P5', 'BST', 'Strategy', 'Porter', 'Balanced Scorecard', 'VRIO']
    },
    'icab-p6': {
      id: 'icab-p6',
      title: 'ICAB P6 - Corporate Laws & Practices',
      code: 'P6',
      level: 'Professional Level · 100 Marks · 3.0 Hours',
      category: 'pl',
      categoryLabel: 'Professional Level',
      summary: 'Advanced Companies Act practice, RJSC charges, winding up, BSEC Public Issue Rules (IPO book building), Rights Issue, Bank Companies Act, and FERA.',
      tags: ['P6', 'Corporate Law', 'BSEC', 'IPO', 'Banking Act', 'FERA', 'RJSC']
    },
    'icab-p7': {
      id: 'icab-p7',
      title: 'ICAB P7 - IT Governance',
      code: 'P7',
      level: 'Professional Level · 100 Marks · 4.0 Hours',
      category: 'pl',
      categoryLabel: 'Professional Level',
      summary: 'Aligned with ISACA CISA: National IT Policy, Cyber Security Act 2023, COBIT 2019, ITIL 4, risk-based IS auditing, CAATs, cybersecurity defense, and BCP/DRP.',
      tags: ['P7', 'IT Governance', 'CISA', 'COBIT', 'IS Audit', 'CAATs', 'BCP']
    },
    'icab-v1': {
      id: 'icab-v1',
      title: 'ICAB V1 - Corporate Reporting',
      code: 'V1',
      level: 'Advanced Level · 100 Marks · 3.5 Hours',
      category: 'al',
      categoryLabel: 'Advanced Level',
      summary: 'Complex IFRS 9 (ECL, hedge accounting), IAS 19 pensions, step acquisitions, foreign subsidiaries (IAS 21), group cash flows, forensic auditing, and IFRS S1/S2 sustainability.',
      tags: ['V1', 'CR', 'Complex IFRS', 'Group Accounts', 'Forensic', 'ISSB', 'ESG']
    },
    'icab-v2': {
      id: 'icab-v2',
      title: 'ICAB V2 - Strategic Business Management & Leadership',
      code: 'V2',
      level: 'Advanced Level · 100 Marks · 3.5 Hours',
      category: 'al',
      categoryLabel: 'Advanced Level',
      summary: 'Executive leadership, digital disruption, COSO ERM, M&A deal structuring, management buyouts (MBO/LBO), international treasury pooling, and Integrated Reporting (<IR>).',
      tags: ['V2', 'SBM', 'Executive Strategy', 'M&A', 'LBO', 'Integrated Reporting', 'ERM']
    },
    'icab-v3': {
      id: 'icab-v3',
      title: 'ICAB V3 - Case Study',
      code: 'V3',
      level: 'Advanced Level · 100 Marks · 4.5 Hours',
      category: 'al',
      categoryLabel: 'Advanced Level',
      summary: 'Capstone professional simulation: Advance business information analysis, unseen material synthesis, financial appraisal, risk management, ethical dilemma resolution, and executive board reporting.',
      tags: ['V3', 'Case Study', 'Capstone', 'Simulation', 'Board Report', 'Executive Advisory']
    }
  };

  // Sort KNOWN_ROADMAPS by length descending so specific prefixes (e.g. icab-c1) match before 'icab'
  const KNOWN_ROADMAPS = Object.keys(ROADMAP_CATALOG).sort((a, b) => b.length - a.length);

  const KNOWN_ROUTES = {
    'icab': ['grad', 'hsc', 'pas', 'pro'],
    'icab-it-labs': ['all', 'cl_labs', 'pl_labs'],
    'acca': ['standard']
  };

  // Safe Storage helper with in-memory dictionary fallback
  const safeStorage = (function () {
    const memory = {};
    return {
      get(key) {
        try {
          const val = localStorage.getItem(key);
          if (val !== null) return val;
        } catch (e) {
          // localStorage disabled or SecurityError in private browsing
        }
        return Object.prototype.hasOwnProperty.call(memory, key) ? memory[key] : null;
      },
      set(key, val) {
        const strVal = String(val);
        try {
          localStorage.setItem(key, strVal);
        } catch (e) {
          // quota exceeded or SecurityError
        }
        memory[key] = strVal;
      },
      remove(key) {
        try {
          localStorage.removeItem(key);
        } catch (e) {
          // ignore
        }
        delete memory[key];
      }
    };
  })();

  // Application State
  const state = {
    view: 'catalog', // 'catalog' | 'roadmap'
    qualId: 'icab',
    routeId: 'grad',
    progress: {},
    activeNodeId: null,
    returnContext: null,
    invokingElement: null,
    currentData: null,
    nodesById: {},
    catalogFilter: 'all',
    catalogQuery: ''
  };

  // Search UI State (Command Palette Ctrl+K)
  const searchState = {
    isOpen: false,
    filter: 'all',
    selectedIndex: -1,
    results: [],
    query: ''
  };

  // DOM Elements
  const el = {
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    brandHome: document.getElementById('brand-home'),
    catalogView: document.getElementById('catalog-view'),
    roadmapView: document.getElementById('roadmap-view'),
    catalogSearchInput: document.getElementById('catalog-search-input'),
    catalogStatSummary: document.getElementById('catalog-stat-summary'),
    catalogGrid: document.getElementById('catalog-grid'),
    catalogChipsContainer: typeof document.querySelector === 'function' ? document.querySelector('.catalog-filters-chips') : null,
    breadcrumbBar: typeof document.querySelector === 'function' ? document.querySelector('.roadmap-breadcrumb-bar') : null,
    breadcrumbHomeBtn: document.getElementById('breadcrumb-home-btn'),
    breadcrumbQualTitle: document.getElementById('breadcrumb-qual-title'),
    breadcrumbSubSep: document.getElementById('breadcrumb-sub-sep'),
    breadcrumbSubTitle: document.getElementById('breadcrumb-sub-title'),
    roadmapTitle: document.getElementById('roadmap-title'),
    roadmapSubtitle: document.getElementById('roadmap-subtitle'),
    subroadmapBanner: document.getElementById('subroadmap-banner'),
    subroadmapBackBtn: document.getElementById('subroadmap-back-btn'),
    routeContainer: document.getElementById('route-selector-container'),
    routePills: document.getElementById('route-pills'),
    routeBlurb: document.getElementById('route-blurb'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    progressText: document.getElementById('progress-text'),
    resetProgressBtn: document.getElementById('reset-progress-btn'),
    roadmapTree: document.getElementById('roadmap-tree'),
    drawer: document.getElementById('details-drawer'),
    drawerBackdrop: document.getElementById('drawer-backdrop'),
    drawerCategory: document.getElementById('drawer-category'),
    drawerTitle: document.getElementById('drawer-title'),
    drawerBody: document.getElementById('drawer-body'),
    drawerToggleBtn: document.getElementById('drawer-toggle-btn'),
    drawerCloseBtn: document.getElementById('drawer-close-btn'),
    modalBackdrop: document.getElementById('modal-backdrop'),
    searchTriggerBtn: document.getElementById('search-trigger-btn'),
    searchModal: document.getElementById('search-modal'),
    searchInput: document.getElementById('search-input'),
    searchCloseBtn: document.getElementById('search-close-btn'),
    searchResultsList: document.getElementById('search-results-list'),
    exploreTriggerBtn: document.getElementById('explore-trigger-btn')
  };

  // -------------------------------------------------------------
  // Theme Management
  // -------------------------------------------------------------
  function initTheme() {
    const savedTheme = safeStorage.get(THEME_STORAGE_KEY);
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeIcon(savedTheme);
    } else {
      let prefersDark = false;
      try {
        prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      } catch (e) {}
      updateThemeIcon(prefersDark ? 'dark' : 'light');
    }

    if (el.themeToggle) {
      el.themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        let next = 'dark';
        if (current === 'dark') {
          next = 'light';
        } else if (current === 'light') {
          next = 'dark';
        } else {
          let prefersDark = false;
          try {
            prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          } catch (e) {}
          next = prefersDark ? 'light' : 'dark';
        }

        document.documentElement.setAttribute('data-theme', next);
        safeStorage.set(THEME_STORAGE_KEY, next);
        updateThemeIcon(next);
      });
    }
  }

  function updateThemeIcon(theme) {
    if (el.themeIcon) {
      el.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // -------------------------------------------------------------
  // Progress Persistence & Namespacing
  // -------------------------------------------------------------
  function getNodeStorageKey(nodeId, roadmapId = state.qualId) {
    if (!nodeId) return '';
    if (nodeId.includes(':')) return nodeId;
    return `${roadmapId}:${nodeId}`;
  }

  function isNodeCompleted(nodeId, roadmapId = state.qualId) {
    if (!nodeId) return false;
    const namespacedKey = getNodeStorageKey(nodeId, roadmapId);
    return Boolean(state.progress[namespacedKey] || state.progress[nodeId]);
  }

  function setNodeCompleted(nodeId, isDone, roadmapId = state.qualId) {
    if (!nodeId) return;
    const namespacedKey = getNodeStorageKey(nodeId, roadmapId);
    if (isDone) {
      state.progress[namespacedKey] = true;
    } else {
      delete state.progress[namespacedKey];
      delete state.progress[nodeId];
    }
    saveProgress();
  }

  function loadProgress() {
    let raw = safeStorage.get(PROGRESS_STORAGE_KEY_V2);
    if (raw) {
      try {
        state.progress = JSON.parse(raw);
        return;
      } catch (e) {
        state.progress = {};
      }
    }

    // Migration from v1
    const v1Raw = safeStorage.get(PROGRESS_STORAGE_KEY_V1);
    if (v1Raw) {
      try {
        const v1Data = JSON.parse(v1Raw);
        state.progress = {};
        Object.keys(v1Data).forEach((key) => {
          if (v1Data[key]) {
            if (key.includes(':')) {
              state.progress[key] = true;
            } else if (key.startsWith('lab-')) {
              state.progress[`icab-it-labs:${key}`] = true;
            } else if (key.startsWith('a') || key.startsWith('f') || key.startsWith('p') || key.startsWith('s')) {
              state.progress[`acca:${key}`] = true;
            } else {
              state.progress[`icab:${key}`] = true;
            }
          }
        });
        saveProgress();
      } catch (e) {
        state.progress = {};
      }
    }
  }

  function saveProgress() {
    try {
      safeStorage.set(PROGRESS_STORAGE_KEY_V2, JSON.stringify(state.progress));
    } catch (e) {
      console.warn('Could not save progress to storage:', e);
    }
  }

  // -------------------------------------------------------------
  // Hash Routing
  // -------------------------------------------------------------
  function parseHash(hashStr) {
    const clean = (hashStr || '').replace(/^#\/?/, '').trim();
    if (!clean || clean === 'home' || clean === 'catalog' || clean === 'explore') {
      return {
        view: 'catalog',
        qualId: null,
        routeId: null,
        nodeId: null
      };
    }

    let matchedQual = null;
    let remainder = '';

    for (const rId of KNOWN_ROADMAPS) {
      if (clean === rId) {
        matchedQual = rId;
        remainder = '';
        break;
      } else if (clean.startsWith(rId + '/') || clean.startsWith(rId + '-')) {
        matchedQual = rId;
        remainder = clean.slice(rId.length + 1);
        break;
      }
    }

    if (!matchedQual) {
      return {
        view: 'catalog',
        qualId: null,
        routeId: null,
        nodeId: null
      };
    }

    let routeId = null;
    let nodeId = null;

    if (remainder) {
      const parts = remainder.split('/').filter(Boolean);
      if (parts.length > 0) {
        const knownForQual = KNOWN_ROUTES[matchedQual] || [];
        if (parts.length === 1) {
          if (knownForQual.includes(parts[0])) {
            routeId = parts[0];
          } else {
            // Single parameter is a nodeId
            nodeId = parts[0];
            routeId = matchedQual === 'icab' ? 'grad' : (matchedQual === 'acca' ? 'standard' : 'all');
          }
        } else {
          routeId = parts[0];
          nodeId = parts.slice(1).join('/');
        }
      }
    }

    if (!routeId) {
      if (matchedQual === 'icab') routeId = 'grad';
      else if (matchedQual === 'icab-it-labs') routeId = 'all';
      else if (matchedQual.startsWith('icab-')) routeId = 'all';
      else if (matchedQual === 'acca') routeId = 'standard';
      else routeId = 'all';
    }

    return {
      view: 'roadmap',
      qualId: matchedQual,
      routeId: routeId,
      nodeId: nodeId || null
    };
  }

  function syncStateFromHash() {
    const parsed = parseHash(location.hash);
    if (!parsed) return;

    state.view = parsed.view;
    if (parsed.view === 'roadmap') {
      state.qualId = parsed.qualId;
      if (parsed.routeId) {
        state.routeId = parsed.routeId;
      }
      state.activeNodeId = parsed.nodeId;
    } else {
      state.activeNodeId = null;
    }
  }

  function updateHash(replace = false) {
    if (state.view === 'catalog') {
      const cleanHash = (location.hash || '').replace(/^#\/?/, '').trim();
      if (cleanHash && cleanHash !== 'home' && cleanHash !== 'catalog' && cleanHash !== 'explore') {
        if (replace && window.history && typeof window.history.replaceState === 'function') {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        } else {
          location.hash = '';
        }
      }
      return;
    }

    let baseHash = '';
    if (state.qualId === 'icab') {
      baseHash = `icab-${state.routeId || 'grad'}`;
    } else if (state.qualId === 'icab-it-labs') {
      baseHash = `icab-it-labs-${state.routeId || 'all'}`;
    } else if (state.qualId.startsWith('icab-')) {
      baseHash = state.qualId;
    } else {
      baseHash = state.routeId && state.routeId !== 'standard' ? `acca-${state.routeId}` : 'acca';
    }

    const newHash = state.activeNodeId ? `#${baseHash}/${state.activeNodeId}` : `#${baseHash}`;

    if (location.hash !== newHash) {
      if (replace && window.history && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, '', newHash);
      } else {
        location.hash = newHash;
      }
    }
  }

  // -------------------------------------------------------------
  // Roadmap Data & Rendering
  // -------------------------------------------------------------
  let activeLoadSequence = 0;

  async function loadRoadmap(qualId, targetRouteId = null, targetNodeId = null) {
    const sequenceId = ++activeLoadSequence;

    if (!window.ROADMAP_LOADER) {
      console.error('ROADMAP_LOADER is not defined.');
      if (el.roadmapTree) {
        el.roadmapTree.innerHTML = `
          <div class="system-error-card" role="alert">
            <h3>Roadmap Loader Unavailable</h3>
            <p style="margin: 12px 0;">The roadmap data bundle could not be loaded. Please check your network connection or reload the application.</p>
            <button class="btn-primary" onclick="window.location.reload()">Reload Application</button>
          </div>`;
      }
      return;
    }

    if (el.roadmapTree) {
      el.roadmapTree.setAttribute('aria-busy', 'true');
      el.roadmapTree.innerHTML = `
        <div class="loading-state" role="status">
          <span class="spinner" aria-hidden="true"></span>
          <p style="margin-top: 12px; font-weight: 500; color: var(--text-muted, #52525b);">Loading roadmap data...</p>
        </div>`;
    }

    try {
      const data = await window.ROADMAP_LOADER.get(qualId);

      // Stale request guard
      if (sequenceId !== activeLoadSequence) {
        console.warn(`Discarding stale roadmap load for "${qualId}" (seq ${sequenceId} < ${activeLoadSequence})`);
        return;
      }

      if (el.roadmapTree) {
        el.roadmapTree.removeAttribute('aria-busy');
      }

      if (!data) {
        if (el.roadmapTree) {
          el.roadmapTree.innerHTML = `
            <div class="error-state" role="alert">
              <p style="margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Unable to load the requested roadmap dataset.</p>
              <button class="btn-primary btn-retry" id="roadmap-retry-btn">Retry</button>
            </div>`;
          const retryBtn = document.getElementById('roadmap-retry-btn');
          if (retryBtn) {
            retryBtn.addEventListener('click', () => loadRoadmap(qualId, targetRouteId, targetNodeId));
          }
        }
        return;
      }

      state.currentData = data;
      if (el.roadmapTitle) {
        el.roadmapTitle.textContent = data.title || 'Roadmap';
      }
      if (el.roadmapSubtitle) {
        el.roadmapSubtitle.textContent = data.description || '';
      }
      document.title = `${data.title || qualId.toUpperCase()} — Chartered Roadmap`;
      updateBreadcrumbs(qualId);

      // Verify route exists for current qualification
      const requestedRoute = targetRouteId || state.routeId;
      if (data.routes && data.routes[requestedRoute]) {
        state.routeId = requestedRoute;
      } else {
        state.routeId = data.defaultRoute || (data.routes ? Object.keys(data.routes)[0] : 'all');
      }

      renderRouteSelector();
      renderMap();

      // Deep link to node if requested
      const nodeToOpen = targetNodeId || state.activeNodeId;
      if (nodeToOpen && state.nodesById[nodeToOpen]) {
        openNodeDrawer(nodeToOpen, false);
        const card = el.roadmapTree.querySelector(`.node-card[data-node-id="${nodeToOpen}"]`);
        if (card && typeof card.scrollIntoView === 'function') {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        if (state.activeNodeId && !state.nodesById[state.activeNodeId]) {
          closeDrawer(false);
        }
        if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
          window.scrollTo(0, 0);
        }
      }
    } catch (err) {
      if (sequenceId !== activeLoadSequence) return;
      if (el.roadmapTree) {
        el.roadmapTree.removeAttribute('aria-busy');
        console.error('Failed to load roadmap:', err);
        el.roadmapTree.innerHTML = `
          <div class="error-state" role="alert">
            <p style="margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">An unexpected error occurred while loading the roadmap.</p>
            <button class="btn-primary btn-retry" id="roadmap-retry-btn">Retry</button>
          </div>`;
        const retryBtn = document.getElementById('roadmap-retry-btn');
        if (retryBtn) {
          retryBtn.addEventListener('click', () => loadRoadmap(qualId, targetRouteId, targetNodeId));
        }
      }
    }
  }

  function renderRouteSelector() {
    const qual = state.currentData;
    if (!qual || !qual.routes) return;
    const routes = qual.routes;
    const routeKeys = Object.keys(routes);

    if (routeKeys.length <= 1) {
      el.routeContainer.style.display = 'none';
      return;
    }

    el.routeContainer.style.display = 'block';
    let pillsHtml = '';

    routeKeys.forEach((key) => {
      const r = routes[key];
      const isActive = key === state.routeId;
      pillsHtml += `
        <button class="pill-btn ${isActive ? 'active' : ''}" data-route="${key}" title="${escapeHtml(r.tag || '')}">
          ${escapeHtml(r.name)}
        </button>
      `;
    });

    el.routePills.innerHTML = pillsHtml;
    el.routeBlurb.textContent = routes[state.routeId] ? routes[state.routeId].blurb : '';
  }

  function getActiveStages() {
    if (!state.currentData || !state.currentData.routes) return [];
    const route = state.currentData.routes[state.routeId];
    return route ? route.stages : [];
  }

  function updateProgressStats() {
    const stages = getActiveStages();
    let totalNodes = 0;
    let completedNodes = 0;

    stages.forEach((stage) => {
      (stage.nodes || []).forEach((node) => {
        totalNodes++;
        if (isNodeCompleted(node.id)) {
          completedNodes++;
        }
      });
    });

    const percent = totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0;
    el.progressBarFill.style.width = `${percent}%`;
    el.progressText.textContent = `${completedNodes} of ${totalNodes} milestones completed (${percent}%)`;

    // Update hub counters
    stages.forEach((stage, stageIndex) => {
      const hubBtn = el.roadmapTree.querySelector(`.hub-btn[data-stage-index="${stageIndex}"]`);
      if (hubBtn) {
        const countSpan = hubBtn.querySelector('.hub-count');
        const nodes = stage.nodes || [];
        const doneCount = nodes.filter((n) => isNodeCompleted(n.id)).length;
        if (countSpan) {
          countSpan.textContent = `${doneCount} / ${nodes.length} completed`;
        }
      }
    });
  }

  function renderMap() {
    const stages = getActiveStages();
    state.nodesById = {};

    if (!stages || stages.length === 0) {
      el.roadmapTree.innerHTML = '<p class="empty-state">No roadmap stages found for this stream.</p>';
      return;
    }

    let mapHtml = '';

    stages.forEach((stage, stageIndex) => {
      const nodes = stage.nodes || [];
      const half = Math.ceil(nodes.length / 2);

      let leftHtml = '';
      let rightHtml = '';
      let stageDoneCount = 0;

      nodes.forEach((node, nodeIndex) => {
        state.nodesById[node.id] = node;
        const isDone = isNodeCompleted(node.id);
        if (isDone) stageDoneCount++;

        const isSelected = state.activeNodeId === node.id;
        const hasSubroadmap = Boolean(node.linkedRoadmaps && node.linkedRoadmaps.length > 0);
        const subBadgeText = hasSubroadmap ? (node.linkedRoadmaps[0].badge || 'Tracker ↗') : '';
        const categoryClass = `cat-${node.category || 'Admin'}`;
        const codePrefix = node.code ? `<span class="node-code-tag">${escapeHtml(node.code)}</span> ` : '';
        const weightTag = node.weightage ? `<span class="node-weight-tag">${escapeHtml(node.weightage)}</span>` : '';

        const cardHtml = `
          <button class="node-card ${isDone ? 'done' : ''} ${isSelected ? 'selected' : ''} ${hasSubroadmap ? 'has-subroadmap' : ''}" 
                  data-node-id="${node.id}"
                  aria-pressed="${isDone}">
            <span class="check-icon">✓</span>
            <span class="node-name">${codePrefix}${escapeHtml(node.name)}</span>
            <div class="node-tags-row">
              <span class="legend-tag ${categoryClass}" style="font-size: 0.65rem; padding: 1px 6px;">${escapeHtml(node.category)}</span>
              ${weightTag}
            </div>
            ${hasSubroadmap ? `<span class="subroadmap-badge" title="Dedicated Tracker / Labs Available">${escapeHtml(subBadgeText)}</span>` : ''}
          </button>
        `;

        if (nodeIndex < half) {
          leftHtml += cardHtml;
        } else {
          rightHtml += cardHtml;
        }
      });

      const weightageBadge = stage.weightage ? `<span class="stage-weightage-badge">${escapeHtml(stage.weightage)}</span>` : '';

      mapHtml += `
        <div class="stage-row" data-stage-index="${stageIndex}">
          <div class="stage-hub-col">
            <button class="hub-btn" data-stage-index="${stageIndex}">
              ${escapeHtml(stage.title || stage.name)} ${weightageBadge}
              <span class="hub-count">${stageDoneCount} / ${nodes.length} completed</span>
            </button>
          </div>
          <div class="stage-side left">${leftHtml}</div>
          <div class="stage-side right">${rightHtml}</div>
        </div>
      `;
    });

    el.roadmapTree.innerHTML = mapHtml;

    updateProgressStats();
    updateSubroadmapBanner();

    // Update Tabs
    if (el.tabIcab) {
      el.tabIcab.classList.toggle('active', state.qualId === 'icab' || state.qualId.startsWith('icab-'));
    }
    if (el.tabAcca) {
      el.tabAcca.classList.toggle('active', state.qualId === 'acca');
    }
    if (el.tabExplore) {
      el.tabExplore.classList.toggle('active', false);
    }
  }

  function updateSubroadmapBanner() {
    if (!el.subroadmapBanner) return;

    if (state.currentData && state.currentData.parentRoadmap) {
      el.subroadmapBanner.style.display = 'flex';
      if (el.subroadmapBackBtn) {
        let backText = 'Return to ICAB CA Qualification Roadmap';
        if (state.returnContext && state.returnContext.nodeId) {
          backText = `Return to ICAB (${state.returnContext.nodeId.toUpperCase()})`;
        } else if (state.currentData.parentRoadmap.nodeId) {
          backText = `Return to ICAB (${state.currentData.parentRoadmap.nodeId.toUpperCase()})`;
        }
        el.subroadmapBackBtn.innerHTML = `<span class="back-arrow">←</span> ${escapeHtml(backText)}`;
      }
      const tag = el.subroadmapBanner.querySelector('.subroadmap-indicator-tag');
      if (tag) {
        tag.textContent = state.currentData.level || (state.qualId === 'icab-it-labs' ? 'Companion Practical Skills' : 'Paper Study Tracker');
      }
    } else {
      el.subroadmapBanner.style.display = 'none';
    }
  }

  // -------------------------------------------------------------
  // Details Drawer Management
  // -------------------------------------------------------------
  function escapeHtml(str) {
    if (typeof str !== 'string') return String(str || '');
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function syncBodyScrollLock() {
    const isDrawerOpen = el.drawer && el.drawer.classList.contains('open');
    const isSearchOpen = searchState && searchState.isOpen;
    if (isDrawerOpen || isSearchOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }

  function openNodeDrawer(nodeId, updateUrl = true) {
    const node = state.nodesById[nodeId];
    if (!node) return;

    state.activeNodeId = nodeId;
    if (!state.invokingElement) {
      state.invokingElement = document.activeElement;
    }

    if (updateUrl) {
      updateHash(true);
    }

    const isDone = isNodeCompleted(nodeId);

    el.drawerCategory.className = `legend-tag cat-${node.category || 'Admin'}`;
    el.drawerCategory.textContent = node.category || 'Milestone';
    el.drawerTitle.textContent = node.name;

    // Build rich drawer content
    let html = '';

    // Metadata badges (Marks, Duration, Frequency, Format, Weightage)
    const pills = [];
    if (node.code) {
      pills.push(`<span class="drawer-meta-pill pill-code">📌 Code: ${escapeHtml(node.code)}</span>`);
    }
    if (node.weightage) {
      pills.push(`<span class="drawer-meta-pill pill-marks">📊 Weight: ${escapeHtml(node.weightage)}</span>`);
    }
    if (node.marks) {
      pills.push(`<span class="drawer-meta-pill pill-marks">🎯 ${node.marks} Marks</span>`);
    }
    if (node.duration) {
      pills.push(`<span class="drawer-meta-pill pill-duration">⏱️ ${escapeHtml(node.duration)}</span>`);
    }
    if (node.frequency) {
      pills.push(`<span class="drawer-meta-pill pill-frequency">📅 ${escapeHtml(node.frequency)}</span>`);
    }
    if (node.format) {
      pills.push(`<span class="drawer-meta-pill pill-format">📝 ${escapeHtml(node.format)}</span>`);
    }
    if (pills.length > 0) {
      html += `<div class="drawer-meta-pills">${pills.join('')}</div>`;
    }

    // Modern Themes (ESG, AI, Cybersecurity, etc.)
    if (Array.isArray(node.modernThemes) && node.modernThemes.length > 0) {
      html += `
        <div class="drawer-section">
          <div class="drawer-section-label">Curriculum Themes (2025 Syllabus)</div>
          <div class="drawer-theme-tags">
            ${node.modernThemes.map(t => `<span class="theme-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      `;
    }

    // Main description
    html += `
      <div class="drawer-desc">
        <p>${escapeHtml(node.description || 'No detailed syllabus notes available yet.')}</p>
      </div>
    `;

    // Syllabus Topics / Competencies
    if (Array.isArray(node.topics) && node.topics.length > 0) {
      html += `
        <div class="drawer-section">
          <div class="drawer-section-label">Syllabus Topics & Competencies</div>
          <ul class="drawer-bullet-list">
            ${node.topics.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Learning Outcomes
    if (Array.isArray(node.learningOutcomes) && node.learningOutcomes.length > 0) {
      html += `
        <div class="drawer-section">
          <div class="drawer-section-label">Course Learning Outcomes (CLOs)</div>
          <ul class="drawer-bullet-list">
            ${node.learningOutcomes.map(o => `<li>${escapeHtml(o)}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Study Milestones & Checklists
    if (Array.isArray(node.checklists) && node.checklists.length > 0) {
      html += `
        <div class="drawer-section">
          <div class="drawer-section-label">Study Milestones & Action Checklist</div>
          <ul class="drawer-check-list">
            ${node.checklists.map(c => `<li><span class="checklist-bullet">✓</span> ${escapeHtml(c)}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Resources & References
    if (Array.isArray(node.resources) && node.resources.length > 0) {
      html += `
        <div class="drawer-section">
          <div class="drawer-section-label">Recommended Resources</div>
          <div class="drawer-theme-tags">
            ${node.resources.map(r => `<span class="theme-tag">📖 ${escapeHtml(r)}</span>`).join('')}
          </div>
        </div>
      `;
    }

    // Specification Grid Table (for parent ICAB exam papers)
    if (Array.isArray(node.specificationGrid) && node.specificationGrid.length > 0) {
      html += `
        <div class="drawer-section">
          <div class="drawer-section-label">Syllabus Specification Grid</div>
          <div class="spec-grid-table-wrapper">
            <table class="spec-grid-table">
              <thead>
                <tr>
                  <th>Syllabus Area / Competency</th>
                  <th style="width: 120px; text-align: right;">Weight / Marks</th>
                </tr>
              </thead>
              <tbody>
                ${node.specificationGrid.map(row => `
                  <tr>
                    <td>${escapeHtml(row.area)}</td>
                    <td style="text-align: right; font-weight: 600;">${escapeHtml(row.weight)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // Linked Dedicated Sub-Roadmaps (e.g. Individual Paper Trackers & IT Practical Labs)
    if (Array.isArray(node.linkedRoadmaps) && node.linkedRoadmaps.length > 0) {
      node.linkedRoadmaps.forEach((link) => {
        html += `
          <div class="companion-card">
            <div class="companion-header">
              <span class="companion-badge">${escapeHtml(link.badge || 'Study Tracker ↗')}</span>
              <h4 class="companion-title">${escapeHtml(link.title || 'Topic Study Roadmap')}</h4>
            </div>
            <p class="companion-desc">
              ${escapeHtml(link.description || 'Dedicated study roadmap covering syllabus chapters, learning outcomes, and topic tracking.')}
            </p>
            <button class="companion-cta-btn" data-action="open-subroadmap" data-roadmap-id="${escapeHtml(link.id)}" data-route="${escapeHtml(link.route || 'all')}">
              Open ${escapeHtml(link.title || 'Roadmap')} ↗
            </button>
          </div>
        `;
      });
    }

    el.drawerBody.innerHTML = html;

    el.drawerToggleBtn.dataset.nodeId = nodeId;
    el.drawerToggleBtn.textContent = isDone ? 'Mark as Incomplete' : 'Mark as Completed';
    el.drawerToggleBtn.className = `drawer-action-btn ${isDone ? 'is-done' : ''}`;
    el.drawerToggleBtn.style.display = 'block';

    el.drawer.classList.add('open');
    el.drawer.setAttribute('aria-hidden', 'false');

    if (el.drawerBackdrop) {
      el.drawerBackdrop.classList.add('active');
      el.drawerBackdrop.setAttribute('aria-hidden', 'false');
    }
    syncBodyScrollLock();

    // Surgical card state update without tearing down the entire roadmap DOM
    el.roadmapTree.querySelectorAll('.node-card.selected').forEach((c) => c.classList.remove('selected'));
    const targetCard = el.roadmapTree.querySelector(`.node-card[data-node-id="${nodeId}"]`);
    if (targetCard) {
      targetCard.classList.add('selected');
      targetCard.classList.toggle('done', isDone);
      targetCard.setAttribute('aria-pressed', isDone ? 'true' : 'false');
    }
  }

  function closeDrawer(updateUrl = true) {
    el.drawer.classList.remove('open');
    el.drawer.setAttribute('aria-hidden', 'true');

    if (el.drawerBackdrop) {
      el.drawerBackdrop.classList.remove('active');
      el.drawerBackdrop.setAttribute('aria-hidden', 'true');
    }
    syncBodyScrollLock();

    el.roadmapTree.querySelectorAll('.node-card.selected').forEach((c) => c.classList.remove('selected'));
    state.activeNodeId = null;

    if (updateUrl) {
      updateHash(true);
    }

    if (state.invokingElement && typeof state.invokingElement.focus === 'function') {
      state.invokingElement.focus();
      state.invokingElement = null;
    }
  }

  // -------------------------------------------------------------
  // Search & Command Palette Controller (Ctrl+K)
  // -------------------------------------------------------------
  function openSearchModal() {
    searchState.isOpen = true;
    searchState.selectedIndex = -1;
    searchState.query = '';
    if (el.searchInput) {
      el.searchInput.value = '';
    }

    if (el.searchModal) {
      el.searchModal.classList.add('open');
      el.searchModal.setAttribute('aria-hidden', 'false');
    }
    if (el.modalBackdrop) {
      el.modalBackdrop.classList.add('open');
      el.modalBackdrop.setAttribute('aria-hidden', 'false');
    }
    syncBodyScrollLock();

    renderSearchResults();
    setTimeout(() => {
      if (el.searchInput) el.searchInput.focus();
    }, 50);
  }

  function closeSearchModal() {
    searchState.isOpen = false;
    if (el.searchModal) {
      el.searchModal.classList.remove('open');
      el.searchModal.setAttribute('aria-hidden', 'true');
    }
    if (el.modalBackdrop) {
      el.modalBackdrop.classList.remove('open');
      el.modalBackdrop.setAttribute('aria-hidden', 'true');
    }
    syncBodyScrollLock();
  }

  function highlightMatches(text, query) {
    if (!text || !query) return escapeHtml(text || '');
    const escapedText = escapeHtml(text);
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escapedText.replace(regex, '<mark>$1</mark>');
  }

  function executeSearch(query, filter = 'all') {
    const q = (query || '').trim().toLowerCase();
    const results = [];

    // Search catalog roadmaps
    Object.values(ROADMAP_CATALOG).forEach((item) => {
      // Category filter check
      if (filter !== 'all' && item.category !== filter) return;

      let score = 0;
      let matchedIn = '';

      if (!q) {
        score = 1;
      } else {
        if (item.code && item.code.toLowerCase() === q) {
          score += 100;
          matchedIn = `Exact paper code: ${item.code}`;
        } else if (item.code && item.code.toLowerCase().includes(q)) {
          score += 50;
          matchedIn = `Paper code: ${item.code}`;
        } else if (item.title.toLowerCase().includes(q)) {
          score += 40;
          matchedIn = item.title;
        } else if (item.summary.toLowerCase().includes(q)) {
          score += 20;
          matchedIn = item.summary;
        } else if (item.tags && item.tags.some(t => t.toLowerCase().includes(q))) {
          score += 15;
          matchedIn = `Tagged: ${item.tags.join(', ')}`;
        }
      }

      if (score > 0) {
        results.push({
          type: 'roadmap',
          roadmapId: item.id,
          title: item.title,
          code: item.code,
          categoryLabel: item.categoryLabel,
          level: item.level,
          snippet: matchedIn || item.summary,
          score: score
        });
      }
    });

    // Also search bundled topics and nodes from window.ROADMAP_DATA if query length >= 2
    if (q.length >= 2 && window.ROADMAP_DATA) {
      Object.entries(window.ROADMAP_DATA).forEach(([rId, rData]) => {
        const catItem = ROADMAP_CATALOG[rId];
        if (filter !== 'all' && catItem && catItem.category !== filter) return;

        const defaultRoute = rData.routes ? (rData.routes[rData.defaultRoute || 'all'] || Object.values(rData.routes)[0]) : null;
        if (!defaultRoute) return;

        (defaultRoute.stages || []).forEach((stage) => {
          (stage.nodes || []).forEach((node) => {
            let nodeScore = 0;
            let matchedText = '';

            if (node.name.toLowerCase().includes(q)) {
              nodeScore += 35;
              matchedText = `Topic: ${node.name}`;
            } else if (node.code && node.code.toLowerCase().includes(q)) {
              nodeScore += 45;
              matchedText = `Topic code: ${node.code}`;
            } else if (node.description && node.description.toLowerCase().includes(q)) {
              nodeScore += 15;
              matchedText = node.description;
            } else if (Array.isArray(node.topics) && node.topics.some(t => t.toLowerCase().includes(q))) {
              nodeScore += 25;
              const matchedTopic = node.topics.find(t => t.toLowerCase().includes(q));
              matchedText = `Syllabus item: ${matchedTopic}`;
            }

            if (nodeScore > 0) {
              results.push({
                type: 'node',
                roadmapId: rId,
                nodeId: node.id,
                title: `${node.name} (${catItem ? catItem.code : rId.toUpperCase()})`,
                code: node.code || (catItem ? catItem.code : ''),
                categoryLabel: catItem ? catItem.categoryLabel : 'Topic',
                level: catItem ? catItem.title : rId,
                snippet: matchedText,
                score: nodeScore
              });
            }
          });
        });
      });
    }

    // Sort results by score descending
    results.sort((a, b) => b.score - a.score);
    return results;
  }

  function renderSearchResults() {
    if (!el.searchResultsList) return;

    const query = (el.searchInput ? el.searchInput.value : '').trim();
    searchState.query = query;
    const results = executeSearch(query, searchState.filter);
    searchState.results = results;

    if (results.length === 0) {
      el.searchResultsList.innerHTML = `
        <div class="search-empty-state">
          <p>No roadmaps or topics found matching "<strong>${escapeHtml(query)}</strong>".</p>
          <p style="font-size: 0.8rem; margin-top: 6px; color: var(--text-muted);">Try searching for paper codes (e.g. C1, P7, V3), topics (e.g. Tax, WACC, Audit), or tools (e.g. QuickBooks, Excel).</p>
        </div>
      `;
      return;
    }

    let html = '';
    results.forEach((res, index) => {
      const isSelected = index === searchState.selectedIndex;
      const titleHighlighted = highlightMatches(res.title, query);
      const snippetSnippet = res.snippet.length > 120 ? res.snippet.slice(0, 120) + '...' : res.snippet;
      const snippetHighlighted = highlightMatches(snippetSnippet, query);

      html += `
        <li class="search-result-item ${isSelected ? 'selected' : ''}" 
            role="option" 
            aria-selected="${isSelected}"
            data-index="${index}"
            data-roadmap-id="${escapeHtml(res.roadmapId)}"
            ${res.nodeId ? `data-node-id="${escapeHtml(res.nodeId)}"` : ''}>
          <div class="search-result-title-row">
            <span class="search-result-title">
              ${res.code ? `<span class="explore-card-code">${escapeHtml(res.code)}</span>` : ''}
              ${titleHighlighted}
            </span>
            <span class="search-result-badge">${escapeHtml(res.categoryLabel)}</span>
          </div>
          <div class="search-result-snippet">${snippetHighlighted}</div>
        </li>
      `;
    });

    el.searchResultsList.innerHTML = html;
  }

  function navigateToSearchResult(item) {
    if (!item) return;
    closeSearchModal();
    closeDrawer(false);

    if (item.type === 'node') {
      location.hash = `${item.roadmapId}/${item.nodeId}`;
    } else {
      location.hash = item.roadmapId;
    }
  }

  // -------------------------------------------------------------
  // Catalog Hub & Breadcrumbs Controller (roadmap.sh Model)
  // -------------------------------------------------------------
  function getRoadmapProgressStats(roadmapId) {
    if (!window.ROADMAP_DATA || !window.ROADMAP_DATA[roadmapId]) {
      return { total: 0, done: 0, percent: 0 };
    }
    const data = window.ROADMAP_DATA[roadmapId];
    const route = data.routes ? (data.routes[data.defaultRoute || 'all'] || Object.values(data.routes)[0]) : null;
    if (!route) return { total: 0, done: 0, percent: 0 };

    let total = 0;
    let done = 0;
    (route.stages || []).forEach((stage) => {
      (stage.nodes || []).forEach((node) => {
        total++;
        if (isNodeCompleted(node.id, roadmapId)) {
          done++;
        }
      });
    });

    const percent = total > 0 ? Math.round((done / total) * 100) : 0;
    return { total, done, percent };
  }

  function updateBreadcrumbs(qualId) {
    if (!el.breadcrumbQualTitle) return;

    if (qualId === 'icab') {
      el.breadcrumbQualTitle.textContent = 'ICAB CA Qualification';
      el.breadcrumbQualTitle.className = 'breadcrumb-current';
      if (el.breadcrumbSubSep) el.breadcrumbSubSep.style.display = 'none';
      if (el.breadcrumbSubTitle) el.breadcrumbSubTitle.style.display = 'none';
    } else if (qualId === 'acca') {
      el.breadcrumbQualTitle.textContent = 'ACCA Qualification';
      el.breadcrumbQualTitle.className = 'breadcrumb-current';
      if (el.breadcrumbSubSep) el.breadcrumbSubSep.style.display = 'none';
      if (el.breadcrumbSubTitle) el.breadcrumbSubTitle.style.display = 'none';
    } else if (qualId === 'icab-it-labs') {
      el.breadcrumbQualTitle.innerHTML = '<a href="#icab-grad" class="breadcrumb-parent-link">ICAB CA</a>';
      el.breadcrumbQualTitle.className = '';
      if (el.breadcrumbSubSep) el.breadcrumbSubSep.style.display = 'inline-block';
      if (el.breadcrumbSubTitle) {
        el.breadcrumbSubTitle.style.display = 'inline-block';
        el.breadcrumbSubTitle.textContent = 'Practical IT Skills Labs';
      }
    } else if (qualId && qualId.startsWith('icab-')) {
      const item = ROADMAP_CATALOG[qualId];
      el.breadcrumbQualTitle.innerHTML = '<a href="#icab-grad" class="breadcrumb-parent-link">ICAB CA</a>';
      el.breadcrumbQualTitle.className = '';
      if (el.breadcrumbSubSep) el.breadcrumbSubSep.style.display = 'inline-block';
      if (el.breadcrumbSubTitle) {
        el.breadcrumbSubTitle.style.display = 'inline-block';
        el.breadcrumbSubTitle.textContent = item ? `${item.title} (${item.code})` : qualId;
      }
    } else {
      const item = ROADMAP_CATALOG[qualId];
      el.breadcrumbQualTitle.textContent = item ? item.title : qualId;
      el.breadcrumbQualTitle.className = 'breadcrumb-current';
      if (el.breadcrumbSubSep) el.breadcrumbSubSep.style.display = 'none';
      if (el.breadcrumbSubTitle) el.breadcrumbSubTitle.style.display = 'none';
    }
  }

  function renderCatalog() {
    if (!el.catalogGrid) return;

    const q = (el.catalogSearchInput ? el.catalogSearchInput.value : '').trim().toLowerCase();
    state.catalogQuery = q;
    const filter = state.catalogFilter || 'all';

    const categories = [
      { id: 'qual', title: '🎓 Full Professional Qualifications', items: [] },
      { id: 'cl', title: '📘 Certificate Level Examination Papers (7)', items: [] },
      { id: 'pl', title: '📙 Professional Level Examination Papers (7)', items: [] },
      { id: 'al', title: '📕 Advanced Level Examination Papers (3)', items: [] },
      { id: 'labs', title: '💻 Companion Practical IT Skills Workshops', items: [] }
    ];

    let totalMatched = 0;

    Object.values(ROADMAP_CATALOG).forEach((item) => {
      // Category filter check
      if (filter !== 'all' && item.category !== filter) return;

      if (q) {
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesCode = item.code && item.code.toLowerCase().includes(q);
        const matchesSummary = item.summary.toLowerCase().includes(q);
        const matchesTags = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesCode && !matchesSummary && !matchesTags) {
          return;
        }
      }

      totalMatched++;
      const cat = categories.find(c => c.id === item.category);
      if (cat) cat.items.push(item);
    });

    if (el.catalogStatSummary) {
      el.catalogStatSummary.textContent = `${totalMatched} of ${Object.keys(ROADMAP_CATALOG).length} roadmaps`;
    }

    if (totalMatched === 0) {
      el.catalogGrid.innerHTML = `
        <div class="search-empty-state">
          <p>No roadmaps found matching "<strong>${escapeHtml(q)}</strong>".</p>
          <p style="font-size: 0.85rem; margin-top: 8px; color: var(--text-muted);">Try searching for paper codes (e.g. C1, P7, V3) or topic keywords.</p>
        </div>
      `;
      return;
    }

    let gridHtml = '';

    categories.forEach((cat) => {
      if (cat.items.length === 0) return;

      let cardsHtml = '';
      cat.items.forEach((item) => {
        const stats = getRoadmapProgressStats(item.id);
        const hasStats = stats.total > 0;
        const targetHref = item.id === 'icab' ? '#icab-grad' : `#${item.id}`;

        cardsHtml += `
          <a href="${targetHref}" class="explore-card" data-roadmap-id="${escapeHtml(item.id)}">
            <div class="explore-card-top">
              <span class="explore-card-code">${escapeHtml(item.code)}</span>
              <span class="explore-card-badge">${escapeHtml(item.level)}</span>
            </div>
            <h3 class="explore-card-title">${escapeHtml(item.title)}</h3>
            <p class="explore-card-desc">${escapeHtml(item.summary)}</p>
            ${hasStats ? `
              <div class="explore-progress-mini">
                <div class="explore-progress-track">
                  <div class="explore-progress-fill" style="width: ${stats.percent}%;"></div>
                </div>
                <span>${stats.done}/${stats.total} (${stats.percent}%)</span>
              </div>
            ` : ''}
            <div class="explore-card-action">
              <span>Explore Roadmap</span>
              <span aria-hidden="true">→</span>
            </div>
          </a>
        `;
      });

      gridHtml += `
        <div class="catalog-category-group">
          <h2 class="catalog-category-title">${cat.title}</h2>
          <div class="catalog-cards-grid">${cardsHtml}</div>
        </div>
      `;
    });

    el.catalogGrid.innerHTML = gridHtml;
  }

  function showCatalogView() {
    state.view = 'catalog';
    state.activeNodeId = null;
    closeDrawer(false);
    closeSearchModal();

    if (el.catalogView) el.catalogView.style.display = 'block';
    if (el.roadmapView) el.roadmapView.style.display = 'none';

    document.title = 'Chartered Roadmap — Professional Accountancy Roadmaps';

    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo(0, 0);
    }

    renderCatalog();
  }

  function showRoadmapView(qualId, routeId = null, nodeId = null) {
    state.view = 'roadmap';
    state.qualId = qualId;
    if (routeId) state.routeId = routeId;
    state.activeNodeId = nodeId || null;

    if (el.catalogView) el.catalogView.style.display = 'none';
    if (el.roadmapView) el.roadmapView.style.display = 'block';

    if (!nodeId && typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo(0, 0);
    }

    updateBreadcrumbs(qualId);
    loadRoadmap(qualId, routeId, nodeId);
  }

  function handleRoute() {
    const parsed = parseHash(location.hash);
    if (!parsed || parsed.view === 'catalog') {
      showCatalogView();
    } else {
      showRoadmapView(parsed.qualId, parsed.routeId, parsed.nodeId);
    }
  }

  // -------------------------------------------------------------
  // Event Bindings
  // -------------------------------------------------------------
  function bindEvents() {
    // Catalog Filter Chips
    if (el.catalogChipsContainer) {
      el.catalogChipsContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;

        el.catalogChipsContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.catalogFilter = chip.dataset.catalogFilter || 'all';
        renderCatalog();
      });
    }

    // Catalog Search Input Filter
    if (el.catalogSearchInput) {
      el.catalogSearchInput.addEventListener('input', () => {
        renderCatalog();
      });
    }

    // Catalog Grid Card Click Delegation
    if (el.catalogGrid) {
      el.catalogGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.explore-card');
        if (!card) return;

        const rId = card.dataset.roadmapId;
        if (rId) {
          e.preventDefault();
          closeDrawer(false);
          if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
            window.scrollTo(0, 0);
          }
          const targetHash = rId === 'icab' ? 'icab-grad' : rId;
          if (location.hash === `#${targetHash}`) {
            handleRoute();
          } else {
            location.hash = targetHash;
          }
        }
      });
    }

    // Breadcrumb Home Button -> Navigate to Catalog Hub
    if (el.breadcrumbHomeBtn) {
      el.breadcrumbHomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeDrawer(false);
        state.returnContext = null;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (location.hash === '#' || location.hash === '') {
          handleRoute();
        } else {
          location.hash = '';
        }
      });
    }

    // Header Search Trigger
    if (el.searchTriggerBtn) {
      el.searchTriggerBtn.addEventListener('click', openSearchModal);
    }

    // Header Explore Button -> Navigate to Catalog Hub
    if (el.exploreTriggerBtn) {
      el.exploreTriggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeDrawer(false);
        closeSearchModal();
        state.returnContext = null;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (location.hash === '#' || location.hash === '') {
          handleRoute();
        } else {
          location.hash = '';
        }
      });
    }

    // Modal Close Button
    if (el.searchCloseBtn) {
      el.searchCloseBtn.addEventListener('click', closeSearchModal);
    }

    // Modal Backdrop Click
    if (el.modalBackdrop) {
      el.modalBackdrop.addEventListener('click', () => {
        closeSearchModal();
      });
    }

    // Search Input Real-Time Event
    if (el.searchInput) {
      el.searchInput.addEventListener('input', () => {
        searchState.selectedIndex = -1;
        renderSearchResults();
      });
    }

    // Search Category Filter Chips
    if (el.searchModal) {
      el.searchModal.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;

        el.searchModal.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        searchState.filter = chip.dataset.filter || 'all';
        searchState.selectedIndex = -1;
        renderSearchResults();
      });
    }

    // Search Results Item Click Delegation
    if (el.searchResultsList) {
      el.searchResultsList.addEventListener('click', (e) => {
        const itemEl = e.target.closest('.search-result-item');
        if (!itemEl) return;

        const idx = parseInt(itemEl.dataset.index, 10);
        if (!isNaN(idx) && searchState.results[idx]) {
          navigateToSearchResult(searchState.results[idx]);
        }
      });
    }



    // Route pill selection
    el.routePills.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn');
      if (!btn) return;

      const targetRoute = btn.dataset.route;
      if (!targetRoute || targetRoute === state.routeId) return;

      state.routeId = targetRoute;
      state.activeNodeId = null;

      closeDrawer(false);
      updateHash(false);
      renderRouteSelector();
      renderMap();
    });

    // Stage Hub Button Clicks (Toggle all nodes in stage)
    el.roadmapTree.addEventListener('click', (e) => {
      const hubBtn = e.target.closest('.hub-btn');
      if (hubBtn) {
        const stageIndex = parseInt(hubBtn.dataset.stageIndex, 10);
        const stages = getActiveStages();
        if (isNaN(stageIndex) || !stages[stageIndex]) return;

        const stage = stages[stageIndex];
        const nodes = stage.nodes || [];
        const allDone = nodes.every((n) => isNodeCompleted(n.id));
        const nextState = !allDone;

        nodes.forEach((n) => setNodeCompleted(n.id, nextState));
        renderMap();
        return;
      }

      // Node Card Clicks
      const card = e.target.closest('.node-card');
      if (card) {
        const nodeId = card.dataset.nodeId;
        if (!nodeId) return;

        if (state.activeNodeId === nodeId && el.drawer.classList.contains('open')) {
          closeDrawer(true);
        } else {
          openNodeDrawer(nodeId, true);
        }
      }
    });

    // Drawer Completion Toggle Button
    el.drawerToggleBtn.addEventListener('click', () => {
      const nodeId = el.drawerToggleBtn.dataset.nodeId;
      if (!nodeId) return;

      const currentDone = isNodeCompleted(nodeId);
      const nextDone = !currentDone;
      setNodeCompleted(nodeId, nextDone);

      // Surgical card update
      const card = el.roadmapTree.querySelector(`.node-card[data-node-id="${nodeId}"]`);
      if (card) {
        card.classList.toggle('done', nextDone);
        card.setAttribute('aria-pressed', nextDone ? 'true' : 'false');
      }

      updateProgressStats();

      // Update drawer button
      el.drawerToggleBtn.textContent = nextDone ? 'Mark as Incomplete' : 'Mark as Completed';
      el.drawerToggleBtn.className = `drawer-action-btn ${nextDone ? 'is-done' : ''}`;
    });

    // Drawer Close
    el.drawerCloseBtn.addEventListener('click', () => closeDrawer(true));

    // Drawer Backdrop Click
    if (el.drawerBackdrop) {
      el.drawerBackdrop.addEventListener('click', () => closeDrawer(true));
    }

    // Mobile Drawer Swipe-Down Gesture to Dismiss
    let touchStartY = 0;
    let touchDiffY = 0;
    if (el.drawer) {
      el.drawer.addEventListener('touchstart', (e) => {
        if (el.drawerBody && el.drawerBody.scrollTop > 5) {
          touchStartY = 0;
          return;
        }
        touchStartY = e.touches[0].clientY;
        touchDiffY = 0;
      }, { passive: true });

      el.drawer.addEventListener('touchmove', (e) => {
        if (!touchStartY) return;
        const currentY = e.touches[0].clientY;
        touchDiffY = currentY - touchStartY;
        if (touchDiffY > 0 && window.innerWidth <= 768) {
          el.drawer.style.transform = `translateY(${touchDiffY}px)`;
        }
      }, { passive: true });

      el.drawer.addEventListener('touchend', () => {
        if (!touchStartY) return;
        el.drawer.style.transform = '';
        if (touchDiffY > 70) {
          closeDrawer(true);
        }
        touchStartY = 0;
        touchDiffY = 0;
      }, { passive: true });
    }

    // Subroadmap Back Button Click
    if (el.subroadmapBackBtn) {
      el.subroadmapBackBtn.addEventListener('click', () => {
        let targetHash = 'icab-grad';
        if (state.returnContext && state.returnContext.qualId) {
          const ctx = state.returnContext;
          const base = ctx.routeId ? `${ctx.qualId}-${ctx.routeId}` : ctx.qualId;
          targetHash = ctx.nodeId ? `${base}/${ctx.nodeId}` : base;
        } else if (state.currentData && state.currentData.parentRoadmap) {
          const pr = state.currentData.parentRoadmap;
          targetHash = pr.nodeId ? `${pr.returnHash || 'icab-grad'}/${pr.nodeId}` : (pr.returnHash || 'icab-grad');
        }
        closeDrawer(false);
        location.hash = targetHash;
      });
    }

    // Drawer Subroadmap CTA Delegation
    el.drawer.addEventListener('click', (e) => {
      const ctaBtn = e.target.closest('[data-action="open-subroadmap"], [data-roadmap-id], [data-open-roadmap]');
      if (!ctaBtn) return;

      const targetRoadmap = ctaBtn.dataset.roadmapId || ctaBtn.dataset.openRoadmap;
      const targetRoute = ctaBtn.dataset.route || 'all';
      if (!targetRoadmap) return;

      // Record return context
      state.returnContext = {
        qualId: state.qualId,
        routeId: state.routeId,
        nodeId: state.activeNodeId
      };

      closeDrawer(false);
      location.hash = targetRoadmap;
    });

    // Reset Progress scoped to active qualification/roadmap
    el.resetProgressBtn.addEventListener('click', () => {
      const qualTitle = state.currentData?.title || state.qualId.toUpperCase();
      if (!confirm(`Are you sure you want to reset your saved progress for ${qualTitle}?`)) {
        return;
      }

      const prefix = `${state.qualId}:`;
      Object.keys(state.progress).forEach((key) => {
        if (key.startsWith(prefix)) {
          delete state.progress[key];
        }
      });

      // Also clean up any unnamespaced legacy keys matching active roadmap's nodes across all routes
      if (state.currentData && state.currentData.routes) {
        Object.values(state.currentData.routes).forEach((r) => {
          (r.stages || []).forEach((stage) => {
            (stage.nodes || []).forEach((node) => {
              delete state.progress[node.id];
            });
          });
        });
      }

      saveProgress();
      closeDrawer(false);
      renderMap();
    });

    // Keyboard navigation (Ctrl+K for search, Escape for modals)
    document.addEventListener('keydown', (e) => {
      // Command palette / Search trigger (Ctrl+K or Cmd+K)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (searchState.isOpen) {
          closeSearchModal();
        } else {
          openSearchModal();
        }
        return;
      }

      // Escape key closes open modals
      if (e.key === 'Escape') {
        if (searchState.isOpen) {
          closeSearchModal();
          return;
        }
        if (el.drawer.classList.contains('open')) {
          closeDrawer(true);
          return;
        }
      }

      // Search results list keyboard navigation (Arrow Up, Down, Enter)
      if (searchState.isOpen && searchState.results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          searchState.selectedIndex = (searchState.selectedIndex + 1) % searchState.results.length;
          renderSearchResults();
          const selectedEl = el.searchResultsList.querySelector(`.search-result-item[data-index="${searchState.selectedIndex}"]`);
          if (selectedEl && typeof selectedEl.scrollIntoView === 'function') {
            selectedEl.scrollIntoView({ block: 'nearest' });
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          searchState.selectedIndex = (searchState.selectedIndex - 1 + searchState.results.length) % searchState.results.length;
          renderSearchResults();
          const selectedEl = el.searchResultsList.querySelector(`.search-result-item[data-index="${searchState.selectedIndex}"]`);
          if (selectedEl && typeof selectedEl.scrollIntoView === 'function') {
            selectedEl.scrollIntoView({ block: 'nearest' });
          }
        } else if (e.key === 'Enter') {
          if (searchState.selectedIndex >= 0 && searchState.results[searchState.selectedIndex]) {
            e.preventDefault();
            navigateToSearchResult(searchState.results[searchState.selectedIndex]);
          }
        }
      }
    });

    // Window Hashchange
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('hashchange', () => {
        handleRoute();
      });
    }

    // Brand Home Click -> Navigate to Catalog Hub
    const brandHome = document.getElementById('brand-home') || document.querySelector('.brand-group');
    if (brandHome) {
      brandHome.addEventListener('click', (e) => {
        e.preventDefault();
        closeDrawer(false);
        closeSearchModal();
        state.returnContext = null;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (location.hash === '#' || location.hash === '') {
          handleRoute();
        } else {
          location.hash = '';
        }
      });
    }

    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // -------------------------------------------------------------
  // Initialization
  // -------------------------------------------------------------
  function init() {
    initTheme();
    loadProgress();
    bindEvents();
    handleRoute();
  }

  // Expose routing and safeStorage testing utilities on window
  if (typeof window !== 'undefined') {
    window.CHARTERED_ROUTER = {
      parseHash,
      safeStorage,
      KNOWN_ROADMAPS,
      ROADMAP_CATALOG,
      getNodeStorageKey,
      isNodeCompleted,
      executeSearch,
      state,
      showCatalogView,
      showRoadmapView,
      handleRoute,
      renderCatalog
    };
  }

  init();
})();
