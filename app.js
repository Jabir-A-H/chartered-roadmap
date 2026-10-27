/**
 * Chartered Roadmap - Application Controller
 * Handles interactive node mapping, route switching, progress tracking,
 * drawer state, and URL hash routing.
 */

(function () {
  'use strict';

  // State keys
  const PROGRESS_STORAGE_KEY = 'chartered-roadmap-progress-v1';
  const THEME_STORAGE_KEY = 'chartered-roadmap-theme';

  // Application State
  const state = {
    qualId: 'icab',
    routeId: 'grad',
    progress: {},
    activeNodeId: null,
    currentData: null,
    nodesById: {}
  };

  // DOM Elements
  const el = {
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    tabIcab: document.getElementById('tab-icab'),
    tabAcca: document.getElementById('tab-acca'),
    routeContainer: document.getElementById('route-selector-container'),
    routePills: document.getElementById('route-pills'),
    routeBlurb: document.getElementById('route-blurb'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    progressText: document.getElementById('progress-text'),
    resetProgressBtn: document.getElementById('reset-progress-btn'),
    roadmapTree: document.getElementById('roadmap-tree'),
    drawer: document.getElementById('details-drawer'),
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
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeIcon(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      updateThemeIcon(prefersDark ? 'dark' : 'light');
    }

    el.themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      let next = 'dark';
      if (current === 'dark') {
        next = 'light';
      } else if (current === 'light') {
        next = 'dark';
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        next = prefersDark ? 'light' : 'dark';
      }

      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(THEME_STORAGE_KEY, next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    el.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // -------------------------------------------------------------
  // Progress Persistence
  // -------------------------------------------------------------
  function loadProgress() {
    try {
      state.progress = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) || '{}');
    } catch (e) {
      console.warn('Could not read progress from localStorage:', e);
      state.progress = {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(state.progress));
    } catch (e) {
      console.warn('Could not save progress to localStorage:', e);
    }
  }

  // -------------------------------------------------------------
  // Hash Routing
  // -------------------------------------------------------------
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

  function updateHash() {
    if (state.qualId === 'icab') {
      location.hash = `icab-${state.routeId}`;
    } else {
      location.hash = state.qualId;
    }
  }

  // -------------------------------------------------------------
  // Roadmap Data & Rendering
  // -------------------------------------------------------------
  async function loadRoadmap(qualId) {
    if (!window.ROADMAP_LOADER) {
      console.error('ROADMAP_LOADER is not defined.');
      return;
    }

    const data = await window.ROADMAP_LOADER.get(qualId);
    if (!data) {
      el.roadmapTree.innerHTML = '<p style="text-align:center;padding:40px;">Failed to load roadmap dataset.</p>';
      return;
    }

    state.currentData = data;
    // Verify route exists for current qualification
    if (!data.routes[state.routeId]) {
      state.routeId = data.defaultRoute || Object.keys(data.routes)[0];
    }

    renderRouteSelector();
    renderMap();
  }

  function renderRouteSelector() {
    const qual = state.currentData;
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
    if (!state.currentData) return [];
    const route = state.currentData.routes[state.routeId];
    return route ? route.stages : [];
  }

  function renderMap() {
    const stages = getActiveStages();
    let mapHtml = '';
    let totalNodes = 0;
    let completedNodes = 0;
    state.nodesById = {};

    stages.forEach((stage, stageIndex) => {
      const nodes = stage.nodes || [];
      const half = Math.ceil(nodes.length / 2);
      let leftHtml = '';
      let rightHtml = '';
      let stageDoneCount = 0;

      nodes.forEach((node, nodeIndex) => {
        totalNodes++;
        state.nodesById[node.id] = node;
        const isDone = Boolean(state.progress[node.id]);
        if (isDone) {
          completedNodes++;
          stageDoneCount++;
        }

        const isSelected = state.activeNodeId === node.id;
        const categoryClass = `cat-${node.category || 'Admin'}`;

        const cardHtml = `
          <button class="node-card ${isDone ? 'done' : ''} ${isSelected ? 'selected' : ''}" 
                  data-node-id="${node.id}"
                  aria-pressed="${isDone}">
            <span class="check-icon">✓</span>
            <span class="node-name">${node.name}</span>
            <span class="legend-tag ${categoryClass}" style="font-size: 0.65rem; padding: 1px 6px;">${node.category}</span>
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

    // Update progress stats
    const pct = totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0;
    el.progressBarFill.style.width = `${pct}%`;
    el.progressText.textContent = `${completedNodes} of ${totalNodes} milestones completed (${pct}%)`;

    // Update Tabs
    el.tabIcab.classList.toggle('active', state.qualId === 'icab');
    el.tabAcca.classList.toggle('active', state.qualId === 'acca');
  }

  // -------------------------------------------------------------
  // Details Drawer Management
  // -------------------------------------------------------------
  function openNodeDrawer(nodeId) {
    const node = state.nodesById[nodeId];
    if (!node) return;

    state.activeNodeId = nodeId;
    const isDone = Boolean(state.progress[nodeId]);

    el.drawerCategory.className = `legend-tag cat-${node.category || 'Admin'}`;
    el.drawerCategory.textContent = node.category || 'Milestone';
    el.drawerTitle.textContent = node.name;
    el.drawerBody.textContent = node.description || 'No detailed syllabus notes available yet.';

    el.drawerToggleBtn.dataset.nodeId = nodeId;
    el.drawerToggleBtn.textContent = isDone ? 'Mark as Incomplete' : 'Mark as Completed';
    el.drawerToggleBtn.className = `drawer-action-btn ${isDone ? 'is-done' : ''}`;

    el.drawer.classList.add('open');
    el.drawer.setAttribute('aria-hidden', 'false');

    renderMap();
  }

  function openStageDrawer(stageIndex) {
    const stages = getActiveStages();
    const stage = stages[stageIndex];
    if (!stage) return;

    state.activeNodeId = null;
    let completedCount = 0;
    (stage.nodes || []).forEach((n) => {
      if (state.progress[n.id]) completedCount++;
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

    renderMap();
  }

  function closeDrawer() {
    state.activeNodeId = null;
    el.drawer.classList.remove('open');
    el.drawer.setAttribute('aria-hidden', 'true');
    el.drawerToggleBtn.style.display = 'block';
    renderMap();
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
      updateHash();
      closeDrawer();
      loadRoadmap('icab');
    });

    el.tabAcca.addEventListener('click', () => {
      if (state.qualId === 'acca') return;
      state.qualId = 'acca';
      state.routeId = 'standard';
      updateHash();
      closeDrawer();
      loadRoadmap('acca');
    });

    // Route selector pills delegation
    el.routePills.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-route]');
      if (!btn) return;
      const targetRoute = btn.dataset.route;
      if (state.routeId === targetRoute) return;

      state.routeId = targetRoute;
      updateHash();
      closeDrawer();
      renderRouteSelector();
      renderMap();
    });

    // Map delegation: Node or Hub clicks
    el.roadmapTree.addEventListener('click', (e) => {
      const nodeCard = e.target.closest('.node-card');
      if (nodeCard) {
        openNodeDrawer(nodeCard.dataset.nodeId);
        return;
      }

      const hubBtn = e.target.closest('.hub-btn');
      if (hubBtn) {
        openStageDrawer(parseInt(hubBtn.dataset.stageIndex, 10));
      }
    });

    // Drawer Toggle Done Button
    el.drawerToggleBtn.addEventListener('click', () => {
      const nodeId = el.drawerToggleBtn.dataset.nodeId;
      if (!nodeId) return;

      state.progress[nodeId] = !state.progress[nodeId];
      saveProgress();
      openNodeDrawer(nodeId);
    });

    // Drawer Close
    el.drawerCloseBtn.addEventListener('click', closeDrawer);

    // Reset Progress
    el.resetProgressBtn.addEventListener('click', () => {
      const stages = getActiveStages();
      if (!confirm('Are you sure you want to reset your saved progress for this qualification route?')) {
        return;
      }

      stages.forEach((stage) => {
        (stage.nodes || []).forEach((node) => {
          delete state.progress[node.id];
        });
      });

      saveProgress();
      closeDrawer();
      renderMap();
    });

    // Keyboard navigation (Escape closes drawer)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && el.drawer.classList.contains('open')) {
        closeDrawer();
      }
    });

    // Window Hashchange
    window.addEventListener('hashchange', () => {
      const prevQual = state.qualId;
      syncStateFromHash();
      if (state.qualId !== prevQual) {
        loadRoadmap(state.qualId);
      } else {
        renderRouteSelector();
        renderMap();
      }
    });
  }

  // -------------------------------------------------------------
  // Initialization
  // -------------------------------------------------------------
  function init() {
    initTheme();
    loadProgress();
    syncStateFromHash();
    bindEvents();
    loadRoadmap(state.qualId);
  }

  init();
})();
