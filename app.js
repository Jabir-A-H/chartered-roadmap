/**
 * Chartered Roadmap - Application Controller
 * Handles interactive node mapping, route switching, progress tracking,
 * drawer state, sub-roadmap portals, and URL hash routing.
 */

(function () {
  'use strict';

  // State keys & Constants
  const PROGRESS_STORAGE_KEY_V2 = 'chartered-roadmap-progress-v2';
  const PROGRESS_STORAGE_KEY_V1 = 'chartered-roadmap-progress-v1';
  const THEME_STORAGE_KEY = 'chartered-roadmap-theme';
  const KNOWN_ROADMAPS = ['icab-it-labs', 'icab', 'acca'];
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
    qualId: 'icab',
    routeId: 'grad',
    progress: {},
    activeNodeId: null,
    returnContext: null,
    invokingElement: null,
    currentData: null,
    nodesById: {}
  };

  // DOM Elements
  const el = {
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    tabIcab: document.getElementById('tab-icab'),
    tabAcca: document.getElementById('tab-acca'),
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
    drawerCloseBtn: document.getElementById('drawer-close-btn')
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
    const v2Raw = safeStorage.get(PROGRESS_STORAGE_KEY_V2);
    if (v2Raw) {
      try {
        state.progress = JSON.parse(v2Raw) || {};
        return;
      } catch (e) {
        console.warn('Could not parse progress v2:', e);
        state.progress = {};
      }
    }

    // Check for v1 migration
    const v1Raw = safeStorage.get(PROGRESS_STORAGE_KEY_V1);
    if (v1Raw) {
      try {
        const v1Data = JSON.parse(v1Raw) || {};
        state.progress = {};
        Object.keys(v1Data).forEach((nodeId) => {
          if (v1Data[nodeId]) {
            const prefix = nodeId.startsWith('ac') ? 'acca' : 'icab';
            state.progress[`${prefix}:${nodeId}`] = true;
          }
        });
        saveProgress();
      } catch (e) {
        console.warn('Could not migrate progress v1:', e);
        state.progress = {};
      }
    } else {
      state.progress = {};
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
    if (!clean) return null;

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

    if (!matchedQual) return null;

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
            routeId = matchedQual === 'icab-it-labs' ? 'all' : (matchedQual === 'acca' ? 'standard' : null);
          }
        } else {
          routeId = parts[0];
          nodeId = parts.slice(1).join('/');
        }
      }
    }

    if (matchedQual === 'icab-it-labs' && !routeId) {
      routeId = 'all';
    }

    return {
      qualId: matchedQual,
      routeId: routeId || null,
      nodeId: nodeId || null
    };
  }

  function syncStateFromHash() {
    const parsed = parseHash(location.hash);
    if (!parsed) return;

    state.qualId = parsed.qualId;
    if (parsed.routeId) {
      state.routeId = parsed.routeId;
    }
    if (parsed.nodeId) {
      state.activeNodeId = parsed.nodeId;
    }
  }

  function updateHash(replace = false) {
    let baseHash = '';
    if (state.qualId === 'icab') {
      baseHash = `icab-${state.routeId || 'grad'}`;
    } else if (state.qualId === 'icab-it-labs') {
      baseHash = `icab-it-labs-${state.routeId || 'all'}`;
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
      } else if (state.activeNodeId && !state.nodesById[state.activeNodeId]) {
        closeDrawer(false);
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
        <button class="pill-btn ${isActive ? 'active' : ''}" data-route="${key}" title="${r.tag || ''}">
          ${r.name}
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

    stages.forEach((stage, stageIndex) => {
      const nodes = stage.nodes || [];
      let stageDone = 0;
      nodes.forEach((n) => {
        totalNodes++;
        if (isNodeCompleted(n.id)) {
          completedNodes++;
          stageDone++;
        }
      });
      const countEl = el.roadmapTree.querySelector(`.hub-btn[data-stage-index="${stageIndex}"] .hub-count`);
      if (countEl) {
        countEl.textContent = `${stageDone} / ${nodes.length} completed`;
      }
    });

    const pct = totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0;
    el.progressBarFill.style.width = `${pct}%`;
    el.progressText.textContent = `${completedNodes} of ${totalNodes} milestones completed (${pct}%)`;
  }

  function renderMap() {
    const stages = getActiveStages();
    let mapHtml = '';
    state.nodesById = {};

    stages.forEach((stage, stageIndex) => {
      const nodes = stage.nodes || [];
      const half = Math.ceil(nodes.length / 2);
      let leftHtml = '';
      let rightHtml = '';
      let stageDoneCount = 0;

      nodes.forEach((node, nodeIndex) => {
        state.nodesById[node.id] = node;
        const isDone = isNodeCompleted(node.id);
        if (isDone) {
          stageDoneCount++;
        }

        const isSelected = state.activeNodeId === node.id;
        const hasSubroadmap = Boolean(node.linkedRoadmaps && node.linkedRoadmaps.length > 0);
        const categoryClass = `cat-${node.category || 'Admin'}`;

        const cardHtml = `
          <button class="node-card ${isDone ? 'done' : ''} ${isSelected ? 'selected' : ''} ${hasSubroadmap ? 'has-subroadmap' : ''}" 
                  data-node-id="${node.id}"
                  aria-pressed="${isDone}">
            <span class="check-icon">✓</span>
            <span class="node-name">${node.name}</span>
            <span class="legend-tag ${categoryClass}" style="font-size: 0.65rem; padding: 1px 6px;">${node.category}</span>
            ${hasSubroadmap ? '<span class="subroadmap-badge" title="Dedicated Practical Skills Roadmap Available">Labs ↗</span>' : ''}
          </button>
        `;

        if (nodeIndex < half) {
          leftHtml += cardHtml;
        } else {
          rightHtml += cardHtml;
        }
      });

      mapHtml += `
        <div class="stage-row" data-stage-index="${stageIndex}">
          <div class="stage-hub-col">
            <button class="hub-btn" data-stage-index="${stageIndex}">
              ${stage.title}
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
    el.tabIcab.classList.toggle('active', state.qualId === 'icab' || state.qualId === 'icab-it-labs');
    el.tabAcca.classList.toggle('active', state.qualId === 'acca');
  }

  function updateSubroadmapBanner() {
    if (!el.subroadmapBanner) return;

    if (state.qualId === 'icab-it-labs') {
      el.subroadmapBanner.style.display = 'flex';
      if (el.subroadmapBackBtn) {
        let backText = 'Return to ICAB CA Exam Roadmap';
        if (state.returnContext && state.returnContext.nodeId) {
          backText = `Return to ICAB (${state.returnContext.nodeId.toUpperCase()})`;
        } else if (state.returnContext && state.returnContext.routeId) {
          backText = `Return to ICAB (${state.returnContext.routeId.toUpperCase()})`;
        }
        el.subroadmapBackBtn.innerHTML = `<span class="back-arrow">←</span> ${escapeHtml(backText)}`;
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

    // Metadata badges (Marks, Duration, Frequency, Format)
    const pills = [];
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

    // Specification Grid Table
    if (Array.isArray(node.specificationGrid) && node.specificationGrid.length > 0) {
      html += `
        <div class="drawer-section">
          <div class="drawer-section-label">Syllabus Specification Grid</div>
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
      `;
    }

    // Linked Dedicated Sub-Roadmaps (e.g. ICAB IT Practical Labs)
    if (Array.isArray(node.linkedRoadmaps) && node.linkedRoadmaps.length > 0) {
      node.linkedRoadmaps.forEach((link) => {
        html += `
          <div class="companion-card">
            <div class="companion-header">
              <span class="companion-badge">Companion Practical Skills</span>
              <h4 class="companion-title">${escapeHtml(link.title || 'Practical Labs Roadmap')}</h4>
            </div>
            <p class="companion-desc">
              ${escapeHtml(link.description || 'Dedicated practical skills roadmap covering applied software and hands-on modules, administered independently by ICAB.')}
            </p>
            <button class="companion-cta-btn" data-action="open-subroadmap" data-roadmap-id="${escapeHtml(link.id)}" data-route="${escapeHtml(link.route || 'all')}">
              Explore Practical IT Labs Roadmap ↗
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

    // Surgical card state update without tearing down the entire roadmap DOM
    el.roadmapTree.querySelectorAll('.node-card.selected').forEach((c) => c.classList.remove('selected'));
    const targetCard = el.roadmapTree.querySelector(`.node-card[data-node-id="${nodeId}"]`);
    if (targetCard) {
      targetCard.classList.add('selected');
      targetCard.classList.toggle('done', isDone);
      targetCard.setAttribute('aria-pressed', isDone ? 'true' : 'false');
    }
  }

  function openStageDrawer(stageIndex) {
    const stages = getActiveStages();
    const stage = stages[stageIndex];
    if (!stage) return;

    state.activeNodeId = null;
    state.invokingElement = document.activeElement;
    let completedCount = 0;
    (stage.nodes || []).forEach((n) => {
      if (isNodeCompleted(n.id)) completedCount++;
    });

    el.drawerCategory.className = 'legend-tag cat-Admin';
    el.drawerCategory.textContent = 'Stage Overview';
    el.drawerTitle.textContent = stage.title;
    el.drawerBody.innerHTML = `
      <p style="margin-bottom: 8px;"><strong>Focus:</strong> ${stage.subtitle || 'Stage progression'}</p>
      <p><strong>Status:</strong> ${completedCount} of ${(stage.nodes || []).length} milestones cleared.</p>
    `;

    el.drawerToggleBtn.style.display = 'none';
    el.drawer.classList.add('open');
    el.drawer.setAttribute('aria-hidden', 'false');

    if (el.drawerBackdrop) {
      el.drawerBackdrop.classList.add('active');
      el.drawerBackdrop.setAttribute('aria-hidden', 'false');
    }

    el.roadmapTree.querySelectorAll('.node-card.selected').forEach((c) => c.classList.remove('selected'));
  }

  function closeDrawer() {
    const updateUrl = arguments.length > 0 ? arguments[0] : true;
    state.activeNodeId = null;
    if (updateUrl) {
      updateHash(true);
    }

    el.drawer.classList.remove('open');
    el.drawer.setAttribute('aria-hidden', 'true');
    if (el.drawerBackdrop) {
      el.drawerBackdrop.classList.remove('active');
      el.drawerBackdrop.setAttribute('aria-hidden', 'true');
    }
    el.drawerToggleBtn.style.display = 'block';

    // Deselect cards surgically
    el.roadmapTree.querySelectorAll('.node-card.selected').forEach((c) => c.classList.remove('selected'));

    // Restore focus to invoking element
    if (state.invokingElement && typeof state.invokingElement.focus === 'function') {
      state.invokingElement.focus();
      state.invokingElement = null;
    }
  }

  // -------------------------------------------------------------
  // Event Listeners
  // -------------------------------------------------------------
  function bindEvents() {
    // Qualification Tabs
    el.tabIcab.addEventListener('click', () => {
      if (state.qualId === 'icab') return;
      state.qualId = 'icab';
      state.routeId = 'grad';
      state.activeNodeId = null;
      updateHash();
      closeDrawer(false);
      loadRoadmap('icab');
    });

    el.tabAcca.addEventListener('click', () => {
      if (state.qualId === 'acca') return;
      state.qualId = 'acca';
      state.routeId = 'standard';
      state.activeNodeId = null;
      updateHash();
      closeDrawer(false);
      loadRoadmap('acca');
    });

    // Route selector pills delegation
    el.routePills.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-route]');
      if (!btn) return;
      const targetRoute = btn.dataset.route;
      if (state.routeId === targetRoute) return;

      state.routeId = targetRoute;
      state.activeNodeId = null;
      updateHash();
      closeDrawer(false);
      renderRouteSelector();
      renderMap();
    });

    // Map delegation: Node or Hub clicks
    el.roadmapTree.addEventListener('click', (e) => {
      const nodeCard = e.target.closest('.node-card');
      if (nodeCard) {
        state.invokingElement = nodeCard;
        openNodeDrawer(nodeCard.dataset.nodeId);
        return;
      }

      const hubBtn = e.target.closest('.hub-btn');
      if (hubBtn) {
        state.invokingElement = hubBtn;
        openStageDrawer(parseInt(hubBtn.dataset.stageIndex, 10));
      }
    });

    // Drawer Toggle Done Button
    el.drawerToggleBtn.addEventListener('click', () => {
      const nodeId = el.drawerToggleBtn.dataset.nodeId;
      if (!nodeId) return;

      const nextDone = !isNodeCompleted(nodeId);
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

    // Subroadmap Back Button Click
    if (el.subroadmapBackBtn) {
      el.subroadmapBackBtn.addEventListener('click', () => {
        let targetHash = 'icab-grad';
        if (state.returnContext && state.returnContext.qualId) {
          const ctx = state.returnContext;
          const base = ctx.routeId ? `${ctx.qualId}-${ctx.routeId}` : ctx.qualId;
          targetHash = ctx.nodeId ? `${base}/${ctx.nodeId}` : base;
        } else if (state.currentData && state.currentData.parentRoadmap) {
          targetHash = state.currentData.parentRoadmap.returnHash || 'icab-grad';
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
      location.hash = targetRoadmap + (targetRoute ? '-' + targetRoute : '');
    });

    // Reset Progress scoped to active qualification
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

    // Keyboard navigation (Escape closes drawer)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && el.drawer.classList.contains('open')) {
        closeDrawer(true);
      }
    });

    // Window Hashchange
    window.addEventListener('hashchange', () => {
      const parsed = parseHash(location.hash);
      if (!parsed) return;

      const qualChanged = parsed.qualId !== state.qualId;
      const routeChanged = Boolean(parsed.routeId && parsed.routeId !== state.routeId);
      const nodeChanged = (parsed.nodeId || null) !== (state.activeNodeId || null);

      if (qualChanged) {
        state.qualId = parsed.qualId;
        if (parsed.routeId) state.routeId = parsed.routeId;
        state.activeNodeId = parsed.nodeId || null;
        loadRoadmap(parsed.qualId, parsed.routeId, parsed.nodeId);
        return;
      }

      if (routeChanged) {
        state.routeId = parsed.routeId;
        state.activeNodeId = parsed.nodeId || null;
        renderRouteSelector();
        renderMap();
        if (parsed.nodeId) {
          openNodeDrawer(parsed.nodeId, false);
        } else {
          closeDrawer(false);
        }
        return;
      }

      if (nodeChanged) {
        if (parsed.nodeId) {
          openNodeDrawer(parsed.nodeId, false);
        } else {
          closeDrawer(false);
        }
      }
    });

    // Brand and back-to-top smooth scrolling
    const brandHome = document.getElementById('brand-home') || document.querySelector('.brand-group');
    if (brandHome) {
      brandHome.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
    syncStateFromHash();
    bindEvents();
    loadRoadmap(state.qualId, state.routeId, state.activeNodeId);
  }

  // Expose routing and safeStorage testing utilities on window
  if (typeof window !== 'undefined') {
    window.CHARTERED_ROUTER = {
      parseHash,
      safeStorage,
      KNOWN_ROADMAPS,
      getNodeStorageKey,
      isNodeCompleted,
      state
    };
  }

  init();
})();
