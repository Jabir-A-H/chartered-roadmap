const KNOWN_ROADMAPS = ['icab-it-labs', 'icab', 'acca'];
const KNOWN_ROUTES = {
  'icab': ['grad', 'hsc', 'pas', 'pro'],
  'icab-it-labs': ['all', 'cl_labs', 'pl_labs'],
  'acca': ['standard']
};

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

console.log('#acca/ac1 ->', parseHash('#acca/ac1'));
console.log('#acca/ac-bt ->', parseHash('#acca/ac-bt'));
console.log('#acca-standard/ac-bt ->', parseHash('#acca-standard/ac-bt'));
console.log('#acca/standard/ac-bt ->', parseHash('#acca/standard/ac-bt'));
console.log('#acca ->', parseHash('#acca'));
console.log('#acca-standard ->', parseHash('#acca-standard'));
console.log('#icab-grad ->', parseHash('#icab-grad'));
console.log('#icab-grad/c7 ->', parseHash('#icab-grad/c7'));
console.log('#icab/c7 ->', parseHash('#icab/c7'));
console.log('#icab-it-labs ->', parseHash('#icab-it-labs'));
console.log('#icab-it-labs-all ->', parseHash('#icab-it-labs-all'));
console.log('#icab-it-labs/all ->', parseHash('#icab-it-labs/all'));
console.log('#icab-it-labs-all/lab-cl-1 ->', parseHash('#icab-it-labs-all/lab-cl-1'));
console.log('#icab-it-labs/lab-cl-1 ->', parseHash('#icab-it-labs/lab-cl-1'));
