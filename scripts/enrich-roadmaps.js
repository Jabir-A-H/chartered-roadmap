/**
 * Script to enrich data/icmab.json, data/icsb.json, data/cgma.json, data/chfc.json,
 * and specialized credentials (cma, cia, frm, cissp, cisa) with official curriculum data
 * extracted from docs/research/official_curricula_and_syllabi_expansion.md.
 */

const fs = require('fs');
const path = require('path');

const researchFile = path.join(__dirname, '..', 'docs', 'research', 'official_curricula_and_syllabi_expansion.md');
const content = fs.readFileSync(researchFile, 'utf8');

function extractJsonBlock(header) {
  const startIdx = content.indexOf(header);
  if (startIdx === -1) {
    console.error(`Header not found: ${header}`);
    return null;
  }
  const jsonStart = content.indexOf('```json', startIdx);
  if (jsonStart === -1) return null;
  const codeStart = content.indexOf('\n', jsonStart) + 1;
  const codeEnd = content.indexOf('```', codeStart);
  const jsonStr = content.substring(codeStart, codeEnd).trim();
  return JSON.parse(jsonStr);
}

const icmabEnrichment = extractJsonBlock('### Snippet 7.1: ICMAB Node Enrichment');
const icsbEnrichment = extractJsonBlock('### Snippet 7.2: ICSB Node Enrichment');
const cgmaEnrichment = extractJsonBlock('### Snippet 7.3: CGMA Node Enrichment');
const chfcEnrichment = extractJsonBlock('### Snippet 7.4: ChFC Node Enrichment');

function enrichRoadmap(filename, enrichmentMap) {
  const filePath = path.join(__dirname, '..', 'data', filename);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let enrichedCount = 0;

  Object.values(data.routes || {}).forEach(route => {
    (route.stages || []).forEach(stage => {
      (stage.nodes || []).forEach(node => {
        if (enrichmentMap[node.id]) {
          const enrich = enrichmentMap[node.id];
          if (enrich.topics) node.topics = enrich.topics;
          if (enrich.learningOutcomes) node.learningOutcomes = enrich.learningOutcomes;
          if (enrich.checklists) node.checklists = enrich.checklists;
          if (enrich.resources) node.resources = enrich.resources;
          enrichedCount++;
        }
      });
    });
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✓ Enriched ${filename}: ${enrichedCount} nodes updated.`);
}

enrichRoadmap('icmab.json', icmabEnrichment);
enrichRoadmap('icsb.json', icsbEnrichment);
enrichRoadmap('cgma.json', cgmaEnrichment);
enrichRoadmap('chfc.json', chfcEnrichment);

// Now enrich specialized credentials with official textbooks & learning manuals (F4)
const specializedEnrichments = {
  'cma.json': {
    resources: [
      'Wiley CMA Exam Review (Complete Set Parts 1 & 2), Wiley / IMA',
      'Gleim CMA Review System (Parts 1 & 2), Dr. Irvin N. Gleim, Gleim Publications',
      'HOCK CMA Review Guide & Question Bank, HOCK international',
      'IMA Statement of Ethical Professional Practice (CSO 2024-2026)'
    ],
    learningOutcomes: [
      'Apply financial statement analysis, budgeting, and variance analysis to strategic decision making',
      'Design and evaluate cost management systems, activity-based costing, and absorption models',
      'Implement enterprise risk management, corporate finance, and capital budgeting appraisal models',
      'Adhere to high ethical standards under the IMA Statement of Ethical Professional Practice'
    ]
  },
  'cia.json': {
    resources: [
      "The IIA's CIA Learning System (Parts 1, 2, and 3), The Institute of Internal Auditors",
      'Global Internal Audit Standards (GIAS 2025), IIA Standards Board',
      'Gleim CIA Review System (Parts 1, 2, and 3), Dr. Irvin N. Gleim, Gleim Publications',
      "Sawyer's Internal Auditing: Enhancing and Protecting Organizational Value (7th Ed.), IIA Foundation"
    ],
    learningOutcomes: [
      'Interpret and apply the 2025 Global Internal Audit Standards (GIAS) across internal audit engagements',
      'Plan, execute, and communicate assurance and consulting engagement findings to executive leadership',
      'Evaluate governance, business acumen, information security, and financial management controls'
    ]
  },
  'frm.json': {
    resources: [
      'GARP Official FRM Books Part I (Books 1–4: Foundations, Quant, Markets, Valuation), GARP',
      'GARP Official FRM Books Part II (Books 1–6: Market, Credit, Operational, Liquidity, Investment, Current Issues), GARP',
      'Wiley FRM Exam Review Study Guide & Question Bank, Wiley'
    ],
    learningOutcomes: [
      'Quantify and manage market risk using Value at Risk (VaR), Expected Shortfall, and extreme value theory',
      'Measure credit risk exposures, probability of default, credit migration, and structured credit derivatives',
      'Analyze operational resilience, cyber risk scenarios, Basel III/IV regulatory capital, and liquidity stress testing'
    ]
  },
  'cissp.json': {
    resources: [
      'The Official (ISC)² CISSP CBK Reference (6th Edition), Arthur J. Deane & Aaron Kraus, Wiley / ISC2 Press',
      '(ISC)² CISSP Official Study Guide (10th Edition), Mike Chapple, James Michael Stewart, Darril Gibson, Sybex / Wiley',
      '(ISC)² CISSP Official Practice Tests (4th Edition), Mike Chapple & David Seidl, Sybex / Wiley'
    ],
    learningOutcomes: [
      'Architect, engineer, and lead enterprise information security programs across the 8 CBK domains',
      'Implement identity and access management (IAM), public key cryptography, and zero-trust network architectures',
      'Direct incident response, business continuity, disaster recovery, and software security verification'
    ]
  },
  'cisa.json': {
    resources: [
      'CISA Review Manual (28th Edition), ISACA',
      'CISA Review Questions, Answers & Explanations (QAE) Manual (13th Edition), ISACA',
      'ITAF: Information Technology Assurance Framework (4th Edition), ISACA',
      'COBIT 2019 Framework: Introduction and Methodology, ISACA'
    ],
    learningOutcomes: [
      'Plan and conduct risk-based information systems audits in accordance with ISACA ITAF standards',
      'Evaluate IT governance frameworks, enterprise architecture alignment, and business resilience controls',
      'Assess acquisition, development, and cybersecurity defense of critical enterprise information assets'
    ]
  }
};

Object.entries(specializedEnrichments).forEach(([filename, enrich]) => {
  const filePath = path.join(__dirname, '..', 'data', filename);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updatedCount = 0;

  Object.values(data.routes || {}).forEach(route => {
    (route.stages || []).forEach(stage => {
      (stage.nodes || []).forEach(node => {
        if (!node.resources || node.resources.length === 0) {
          node.resources = enrich.resources;
        }
        if (!node.learningOutcomes || node.learningOutcomes.length === 0) {
          node.learningOutcomes = enrich.learningOutcomes;
        }
        updatedCount++;
      });
    });
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✓ Enriched ${filename} with official study texts and CLOs: ${updatedCount} nodes updated.`);
});

console.log('\nEnrichment complete! All targeted roadmaps updated.');
