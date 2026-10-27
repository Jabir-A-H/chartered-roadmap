const fs = require('fs');
const path = require('path');

const icab = fs.readFileSync(path.join(__dirname, '..', 'data', 'icab.json'), 'utf8');
const acca = fs.readFileSync(path.join(__dirname, '..', 'data', 'acca.json'), 'utf8');

const code = `/**
 * Chartered Roadmap - Bundled Datasets
 * Offline-friendly bundle ensuring roadmaps load instantly whether via HTTP(S) or local file:///
 */
window.ROADMAP_DATA = window.ROADMAP_DATA || {};
window.ROADMAP_DATA['icab'] = ${icab};
window.ROADMAP_DATA['acca'] = ${acca};

window.ROADMAP_LOADER = {
  async get(id) {
    if (window.ROADMAP_DATA[id]) {
      return window.ROADMAP_DATA[id];
    }
    try {
      const res = await fetch(\`data/\${id}.json\`);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      const json = await res.json();
      window.ROADMAP_DATA[id] = json;
      return json;
    } catch (e) {
      console.warn(\`Local fetch fallback for \${id}:\`, e);
      return window.ROADMAP_DATA[id] || null;
    }
  }
};
`;

fs.writeFileSync(path.join(__dirname, '..', 'data', 'roadmaps.js'), code, 'utf8');
console.log('roadmaps.js successfully generated.');
