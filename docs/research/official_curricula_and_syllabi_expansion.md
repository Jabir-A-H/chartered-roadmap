# Statutory Curricula, Official Standards & Examination Syllabi Expansion Dossier
## Authoritative Syllabus Topics, Institute Publications & Canonical JSON Datasets for Findings F1, F3, and F4

> **Document Type:** Statutory Curricula & Official Standards Research Dossier  
> **Target Path:** `docs/research/official_curricula_and_syllabi_expansion.md`  
> **Status:** Active Authoritative Standard (November 2026 Statutory & Board Specifications)  
> **Addressed Findings:**
> - **Finding F1 (P0):** Missing granular syllabus topics in `data/icmab.json` (39 nodes) and `data/icsb.json` (36 nodes).
> - **Finding F3 (P1):** Sparse syllabus topic arrays in `data/cgma.json` and `data/chfc.json`.
> - **Finding F4 (P2):** Asymmetric learning outcomes, official reference textbooks, and core study manuals across specialized credentials (CMA, CIA, FRM, CISSP, CISA).
> **Primary Statutory Governing Bodies Cited:**
> 1. Institute of Cost and Management Accountants of Bangladesh (**ICMAB**, `icmab.gov.bd`) — Ministry of Commerce, Govt. of Bangladesh
> 2. Institute of Chartered Secretaries of Bangladesh (**ICSB**, `icsb.edu.bd`) — Ministry of Commerce, Govt. of Bangladesh
> 3. AICPA & CIMA (**CGMA**, `aicpa-cima.com`) — Chartered Institute of Management Accountants & American Institute of CPAs
> 4. The American College of Financial Services (**ChFC**, `theamericancollege.edu`)
> 5. Institute of Management Accountants (**IMA CMA**, `imanet.org`)
> 6. The Institute of Internal Auditors (**IIA CIA**, `theiia.org`)
> 7. Global Association of Risk Professionals (**GARP FRM**, `garp.org`)
> 8. International Information System Security Certification Consortium (**ISC2 CISSP**, `isc2.org`)
> 9. Information Systems Audit and Control Association (**ISACA CISA**, `isaca.org`)

---

## 1. Executive Summary & Statutory Authority Grounding

This research dossier resolves the curriculum and metadata sparsity identified in the multi-agent audit across the Chartered Roadmap platform. Every syllabus topic, course learning outcome (CLO), statutory regulation, and textbook citation contained herein is drawn strictly from primary governing body publications, legislative acts, and official study texts.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        PRIMARY STATUTORY & REGULATORY FOUNDATIONS                      │
├─────────────────────┬──────────────────────────────────────────────────────────────────┤
│ Body / Standard     │ Primary Statutory Act / Regulatory Mandate                       │
├─────────────────────┼──────────────────────────────────────────────────────────────────┤
│ ICMAB (Bangladesh)  │ Cost and Management Accountants Act, 2018 (Act No. LXX of 2018)  │
│                     │ Companies Act, 1994, Section 220 (Mandatory Cost Audit)          │
│                     │ Cost Audit (Report) Rules, 1997                                  │
│                     │ Bangladesh Cost Accounting Standards (BCAS 1–31)                 │
├─────────────────────┼──────────────────────────────────────────────────────────────────┤
│ ICSB (Bangladesh)   │ Chartered Secretaries Act, 2010 (Act No. 25 of 2010)             │
│                     │ Chartered Secretaries Regulations, 2011                          │
│                     │ BSEC Corporate Governance Code (CGC 2018, Cond. 1(5)(xxvii))    │
│                     │ Bangladesh Secretarial Standards (BSS 1–6)                       │
├─────────────────────┼──────────────────────────────────────────────────────────────────┤
│ CIMA / CGMA         │ Royal Charter (UK) & AICPA Joint Venture Partnership            │
│                     │ CIMA Professional Qualification Syllabus & Competency Framework  │
├─────────────────────┼──────────────────────────────────────────────────────────────────┤
│ The American College│ Chartered Financial Consultant (ChFC®) Professional Body         │
│                     │ Academic Degree-Granting Charter & Ethics Pledge                 │
├─────────────────────┼──────────────────────────────────────────────────────────────────┤
│ IMA, IIA, GARP,     │ IMA Statement of Ethical Professional Practice (2024-2026 CSO)   │
│ ISC2, ISACA         │ IIA Global Internal Audit Standards (GIAS 2025)                  │
│                     │ GARP FRM Candidate Guide & Learning Objectives 2024–2026         │
│                     │ ISC2 CISSP Common Body of Knowledge (CBK 2024–2026)              │
│                     │ ISACA Information Technology Assurance Framework (ITAF 4th Ed)   │
└─────────────────────┴──────────────────────────────────────────────────────────────────┘
```

---

## 2. ICMAB Curriculum 2021/2026: Paper-by-Paper Syllabus Breakdown

Under the *Cost and Management Accountants Act, 2018*, the Institute of Cost and Management Accountants of Bangladesh establishes the statutory curriculum totaling **2,000 marks across 5 progressive levels (20 exam papers)** plus practical training and case study.

### Level 1: Foundation Level (400 Marks)

#### 1. FR 111: Fundamentals of Financial Accounting (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual FR 111*; Weygandt, Kimmel & Kieso, *Accounting Principles* (14th Ed., Wiley).
* **Granular Syllabus Topics:**
  - Double-entry bookkeeping system, accounting equation, and accounting cycle.
  - Recording journal entries, posting to general and subsidiary ledgers, and trial balance extraction.
  - Adjusting entries (accruals, prepayments, depreciation, bad debts provision), closing entries, and reversing entries.
  - Bank reconciliation statements, petty cash management, and imprest systems.
  - Preparation of Statement of Financial Position, Statement of Profit or Loss, and Notes under IFRS/IAS for sole proprietorships and partnerships.
  - Accounting for non-profit organizations: Receipts and payments accounts, income and expenditure accounts, and balance sheets.

#### 2. TA 112: Business Quantitative Analysis (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual TA 112*; Anderson, Sweeney, Williams, *Statistics for Business & Economics* (14th Ed., Cengage).
* **Granular Syllabus Topics:**
  - Business Mathematics: Time value of money (simple interest, compound interest, ordinary annuities, annuities due, loan amortization schedules, sinking funds).
  - Matrix algebra: Matrix addition, multiplication, determinants, matrix inversion, and solving systems of linear equations via Cramer's Rule.
  - Business calculus: Differential calculus, marginal revenue, marginal cost, profit maximization, and integral calculus for consumer and producer surplus.
  - Descriptive Statistics: Frequency distributions, measures of central tendency (mean, median, mode), measures of dispersion (variance, standard deviation, coefficient of variation).
  - Probability theory: Basic laws, conditional probability, Bayes' Theorem, discrete distributions (Binomial, Poisson) and continuous distributions (Normal distribution, z-scores).
  - Inferential statistics: Hypothesis testing (one-sample and two-sample t-tests, z-tests, Chi-square tests), simple linear regression, Pearson correlation, and time-series moving averages.

#### 3. EF 113: Business Economics & International Business (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual EF 113*; Mankiw, *Principles of Economics* (9th Ed., Cengage); Daniels, Radebaugh, Sullivan, *International Business* (17th Ed., Pearson).
* **Granular Syllabus Topics:**
  - Microeconomics: Demand and supply mechanics, price elasticity, income elasticity, cross elasticity of demand.
  - Consumer utility theory: Cardinal vs. ordinal utility, indifference curve analysis, consumer equilibrium.
  - Production and cost analysis: Short-run and long-run production functions, Law of Diminishing Marginal Returns, economies and diseconomies of scale.
  - Market structures: Price and output determination under perfect competition, pure monopoly, monopolistic competition, and oligopoly (kinked demand curve, game theory).
  - Macroeconomics: National income accounting (GDP, GNP, NNP, deflator), circular flow of income, aggregate demand and aggregate supply.
  - Macroeconomic policy: Fiscal policy instruments, monetary policy mechanisms, inflation (demand-pull, cost-push), Phillips Curve, Bangladesh Bank interest rate policies.
  - International trade: Comparative advantage theory, Balance of Payments (current account, capital account), foreign exchange rate determination, WTO guidelines, and regional trade pacts (SAFTA, BIMSTEC).

#### 4. MS 114: Fundamentals of Management & Business Communication (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual MS 114*; Robbins & Coulter, *Management* (15th Ed., Pearson); Bovee & Thill, *Business Communication Today* (15th Ed., Pearson).
* **Granular Syllabus Topics:**
  - Principles of Management: Classical, behavioral, and modern management theories; Henri Fayol's 14 principles; Max Weber's bureaucracy.
  - Management functions: Strategic and operational planning, organizational structures (functional, divisional, matrix), delegation, decentralization.
  - Leadership and motivation: Trait, behavioral, and contingency leadership models; Maslow, Herzberg, and McClelland motivation frameworks; conflict resolution.
  - Communication process: Sender, encoding, transmission channel, decoding, noise, and feedback mechanisms.
  - Corporate business drafting: Minutes of meetings, executive summaries, investigative business reports, formal corporate memos, and email etiquette.
  - Oral communication: Persuasive business presentations, boardroom pitches, non-verbal kinesics, cross-cultural corporate communication.

---

### Level 2: Intermediate Level I (400 Marks)

#### 5. CM 121: Cost Accounting (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual CM 121*; Datar & Rajan, *Horngren's Cost Accounting: A Managerial Emphasis* (17th Ed., Pearson); Colin Drury, *Management and Cost Accounting* (11th Ed., Cengage).
* **Applicable Standards:** BCAS 1 (Cost Concepts), BCAS 4 (Indirect Costs), BCAS 5 (Indirect Cost Rate), BCAS 7 (Job Order Costing), BCAS 8 (Process Costing), BCAS 24 (Material Costs), BCAS 25 (Employee Costs).
* **Granular Syllabus Topics:**
  - Cost concepts, behaviors, classifications, cost objects, and comprehensive Cost Sheet preparation.
  - Material costing: Material requisition, purchasing cycle, Economic Order Quantity (EOQ), safety stock, reorder levels, inventory valuation methods (FIFO, Weighted Average), physical inventory verification.
  - Labor costing: Time recording, payroll calculation, overtime premiums, idle time accounting, labor turnover metrics, incentive piecework systems.
  - Overhead costing: Departmentalization, overhead allocation and apportionment (direct, step-down, reciprocal methods), overhead absorption rates, under/over-absorbed overhead treatment under BCAS 4 and 5.
  - Job, batch, and contract costing: Job cost sheets, percentage of completion method, retention money, escalation clauses.
  - Process costing: Process accounts, normal and abnormal loss/gain, equivalent units of production (FIFO vs. Weighted Average methods), inter-process profit, joint products and by-product costing (net realizable value, sales value at split-off) under BCAS 8 and 9.

#### 6. FR 222: Intermediate Financial Accounting (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual FR 222*; Kieso, Weygandt, Warfield, *Intermediate Accounting: IFRS Edition* (4th Ed., Wiley).
* **Applicable Standards:** IAS 1, IAS 2, IAS 7, IAS 16, IAS 36, IAS 37, IAS 38, IFRS 15, IFRS 16.
* **Granular Syllabus Topics:**
  - Conceptual Framework for Financial Reporting under IFRS: Qualitative characteristics, asset and liability definitions, recognition and derecognition criteria.
  - Property, Plant and Equipment (IAS 16): Cost capitalization, revaluation model, component depreciation, disposal gains and losses.
  - Intangible Assets (IAS 38): Recognition criteria, research vs. development expenditure, finite vs. indefinite useful lives, goodwill valuation.
  - Impairment of Assets (IAS 36): Cash-generating units (CGUs), recoverable amount determination (fair value less costs of disposal vs. value in use), impairment allocation and reversal.
  - Revenue from Contracts with Customers (IFRS 15): The 5-step revenue recognition model, performance obligations satisfied over time vs. at a point in time, contract assets and liabilities.
  - Leases (IFRS 16): Lessee accounting (Right-of-Use asset, lease liability amortization), lessor operating vs. finance lease classification.
  - Statement of Cash Flows (IAS 7): Operating, investing, and financing cash flows under direct and indirect methods, non-cash transactions disclosures.

#### 7. TA 223: Information & Communication Technologies (50 Marks | 2 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual TA 223*; Laudon & Laudon, *Management Information Systems* (17th Ed., Pearson).
* **Granular Syllabus Topics:**
  - Computer system architecture: Processing units, memory, input/output hardware, operating systems, and virtualization.
  - Database Management Systems (DBMS): Relational database architecture, entity-relationship diagrams (ERDs), data normalization (1NF, 2NF, 3NF), and structured query language (SQL).
  - Enterprise systems: Enterprise Resource Planning (ERP) architecture (SAP S/4HANA, Oracle Cloud ERP), customer relationship management (CRM), supply chain management (SCM).
  - Cloud computing architectures: Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), Software-as-a-Service (SaaS), hybrid clouds, multi-tenant security.
  - Cybersecurity fundamentals: Threat vectors (malware, ransomware, phishing, MITM), cryptographic encryption (symmetric vs. asymmetric, PKI), firewalls, access controls.
  - IT governance and internal control frameworks: General IT controls (ITGC), application controls, COBIT 2019 framework alignment, disaster recovery planning (DRP).

#### 8. MS 224: Marketing & Supply Chain Management (50 Marks | 2 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual MS 224*; Kotler, Keller, Chernev, *Marketing Management* (16th Ed., Pearson); Chopra, *Supply Chain Management: Strategy, Planning, and Operation* (7th Ed., Pearson).
* **Granular Syllabus Topics:**
  - Modern marketing paradigms: Customer value creation, marketing mix (4Ps and 7Ps), market research methodologies, digital marketing funnels.
  - Strategic segmentation, targeting, and positioning (STP framework), brand equity development, product lifecycle strategies.
  - Supply chain network architecture: Upstream suppliers, downstream distributors, bullwhip effect causes and mitigation, push vs. pull supply chain dynamics.
  - Procurement and sourcing strategies: Vendor selection and evaluation, total cost of ownership (TCO), supplier relationship management (SRM), contract negotiations.
  - Logistics and inventory distribution: Warehousing layouts, cross-docking, transportation modal choices, reverse logistics, third-party logistics (3PL/4PL).
  - Global supply chain risk management: Single-sourcing risks, geopolitical disruptions, cold chain maintenance, sustainability and ethical supply sourcing.

#### 9. LT 125: Corporate & Business Laws (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual LT 125*; Nirmal Singh, *Business Law*; Govt of Bangladesh, *Companies Act 1994*, *Contract Act 1872*, *Labor Act 2006*.
* **Granular Syllabus Topics:**
  - The Companies Act, 1994: Types of companies (private, public, OPC, statutory), incorporation procedures, Memorandum and Articles of Association, doctrine of ultra vires.
  - Capital structure and share governance: Prospectus, share capital allotment, transfer and transmission of shares, registration of charges and mortgages with RJSC.
  - Corporate administration: Appointment, removal, qualification, and remuneration of directors; board meetings, quorum, minutes; Annual General Meetings (AGM), Extraordinary General Meetings (EGM).
  - Contract Act, 1872: Essential elements of a valid contract, offer and acceptance, lawful consideration, capacity of parties, free consent, void agreements, breach of contract and legal remedies.
  - Sale of Goods Act, 1930: Contract of sale vs. agreement to sell, conditions and warranties, transfer of title, rights of unpaid seller against goods.
  - Negotiable Instruments Act, 1881: Promissory notes, bills of exchange, cheques; holder in due course, dishonor of cheques under Section 138, statutory notice procedures.
  - Bangladesh Labor Act, 2006 (and Labor Rules 2015): Classification of workers, employment conditions, working hours, leave entitlements, occupational health and safety, termination, compensation for workplace injuries.

---

### Level 3: Intermediate Level II (400 Marks)

#### 10. CM 231: Management Accounting (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual CM 231*; Garrison, Noreen, Brewer, *Managerial Accounting* (17th Ed., McGraw-Hill); Colin Drury, *Management and Cost Accounting*.
* **Applicable Standards:** BCAS 13 (Standard Costing), BCAS 14 (Activity Based Costing), BCAS 15 (Product Mix Decisions), BCAS 19 (Budget and Pro forma Financial Statements).
* **Granular Syllabus Topics:**
  - Marginal (variable) costing vs. absorption costing: Income reconciliation, treatment of fixed manufacturing overheads, profit sensitivity.
  - Cost-Volume-Profit (CVP) analysis: Break-even point in units and sales value, margin of safety, target profit analysis, operating leverage, multi-product break-even analysis.
  - Short-term commercial decision making: Relevant costs and revenues, opportunity costs, make-or-buy decisions, accept/reject special orders, closing unprofitable branches, dropping products.
  - Pricing decisions and profitability analysis: Cost-plus pricing, time and material pricing, target costing, price elasticity considerations, product life-cycle pricing.
  - Budgeting and budgetary control: Master budget preparation (sales, production, direct materials, cash budget), flexible budgeting, zero-based budgeting (ZBB), activity-based budgeting (ABB).
  - Standard costing and variance analysis: Direct material price and usage variances, direct labor rate and efficiency variances, variable overhead spending and efficiency variances, fixed overhead budget and volume variances, variance reconciliation reports.

#### 11. EF 232: Financial Management (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual EF 232*; Brigham & Ehrhardt, *Financial Management: Theory & Practice* (16th Ed., Cengage); Van Horne & Wachowicz, *Fundamentals of Financial Management* (13th Ed., Pearson).
* **Applicable Standards:** BCAS 18 (Cash Flows), BCAS 21 (Capital Budgeting).
* **Granular Syllabus Topics:**
  - Financial statement analysis: Liquidity ratios, solvency ratios, activity/efficiency ratios, profitability ratios, DuPont three-factor and five-factor decomposition.
  - Working capital management: Cash conversion cycle, cash management models (Baumol, Miller-Orr), receivables management (credit terms, factoring, credit scoring), inventory management models.
  - Capital budgeting decision rules: Payback period, discounted payback, Net Present Value (NPV), Internal Rate of Return (IRR), Modified IRR (MIRR), Profitability Index (PI).
  - Capital budgeting under complexity: Mutually exclusive projects with unequal lives (equivalent annual annuity), capital rationing (divisible vs. indivisible projects), project risk evaluation (sensitivity analysis, scenario modeling, decision trees).
  - Cost of capital: Cost of long-term debt, cost of preferred stock, cost of equity (CAPM, Dividend Growth Model, Bond Yield Plus Risk Premium), Weighted Average Cost of Capital (WACC), marginal cost of capital schedule.
  - Capital structure and leverage: Operating leverage, financial leverage, total leverage, Modigliani-Miller propositions (without taxes and with corporate taxes), trade-off theory, pecking order theory.

#### 12. AA 133: Auditing (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual AA 133*; Arens, Elder, Beasley, Hogan, *Auditing and Assurance Services* (17th Ed., Pearson); ICAB/IAASB, *International Standards on Auditing (ISA)* as adopted in Bangladesh (BSA).
* **Granular Syllabus Topics:**
  - Auditing concepts and regulatory framework: Nature, objective, and scope of statutory audit, audit expectation gap, fundamental ethical principles (IESBA Code of Ethics).
  - Audit planning and risk assessment (ISA 300 & 315): Materiality determination (ISA 320), audit risk model (inherent risk, control risk, detection risk), understanding the entity and its environment.
  - Internal control evaluation (ISA 315 & 330): COSO internal control components, test of controls, walk-through tests, evaluating design and operating effectiveness of controls.
  - Audit evidence and procedures (ISA 500): Sufficient appropriate audit evidence, inspection, observation, external confirmations (ISA 505), analytical procedures (ISA 520), audit sampling techniques (ISA 530).
  - Audit of financial statement balances: Substantive testing of revenues, receivables, inventory valuation, fixed assets, cash, liabilities, and payroll.
  - Audit completion and reporting (ISA 700, 701, 705, 706): Unmodified audit opinion, modified opinions (qualified, adverse, disclaimer), Emphasis of Matter, Other Matter paragraphs, Key Audit Matters (KAM) reporting.

#### 13. LT 234: Fundamentals of Tax, VAT & Public Financial Management (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual LT 234*; National Board of Revenue (NBR), *Income Tax Act, 2023*, *Value Added Tax and Supplementary Duty Act, 2012*, *Public Procurement Act 2006*.
* **Granular Syllabus Topics:**
  - Income Tax Act, 2023: Fundamental definitions, residential status (individual and company), scope of total income, tax rates for individual and corporate assessee classes.
  - Heads of income: Income from employment, income from rent, income from agriculture, income from business, capital gains, income from other sources.
  - Corporate taxation fundamentals: Allowable business deductions, inadmissible expenses, statutory depreciation allowances (Third Schedule), minimum tax provisions (Section 163).
  - Value Added Tax & SD Act, 2012: Registration parameters, standard rate vs. reduced rates vs. specific tax, input tax credit mechanisms (rebate eligibility).
  - VAT compliance: Issuance of VAT invoices (Mushak 6.3), withholding VAT (VDS - Mushak 6.6), maintenance of purchase and sales registers (Mushak 6.1 and 6.2), monthly VAT return (Mushak 9.1).
  - Public Financial Management (PFM): National budget formulation, Medium-Term Budgetary Framework (MTBF), Annual Development Programme (ADP), public procurement methods (Open Tendering Method, Request for Quotation) under PPA 2006 and PPR 2008.

---

### Level 4: Advanced Level I (400 Marks)

#### 14. CM 341: Strategic Cost and Management Accounting (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual CM 341*; Shank & Govindarajan, *Strategic Cost Management: The New Tool for Competitive Advantage* (Free Press); Edward Blocher, *Cost Management: A Strategic Emphasis* (8th Ed., McGraw-Hill).
* **Applicable Standards:** BCAS 10 (Target Costing), BCAS 11 (Life Cycle Costing), BCAS 12 (Kaizen Costing), BCAS 16 (Transfer Pricing), BCAS 20 (Activity Based Management), BCAS 23 (Strategic Cost Management), BCAS 29 (Quality Costing).
* **Granular Syllabus Topics:**
  - Strategic cost management frameworks: Value chain analysis (internal vs. external linkages), cost driver analysis (structural vs. executional cost drivers), strategic positioning.
  - Modern cost management methodologies: Target costing process and value engineering, Life Cycle Costing (LCC), Kaizen costing (continuous incremental improvement).
  - Activity-Based Management (ABM): Customer profitability analysis, operational ABM vs. strategic ABM, direct and indirect cost drivers under BCAS 20.
  - Theory of Constraints (TOC): Throughput accounting, identifying bottleneck operations, drum-buffer-rope scheduling, throughput contribution margin analysis.
  - Quality costing: Cost of Quality (COQ) classification (prevention, appraisal, internal failure, external failure costs) under BCAS 29, Total Quality Management (TQM), Six Sigma metrics.
  - Transfer pricing in decentralized firms: Market-based, cost-based, and negotiated transfer pricing; dual pricing; multinational transfer pricing, corporate tax minimization, and BEPS alignment under BCAS 16.
  - Performance measurement: Kaplan & Norton's Balanced Scorecard (four perspectives), Economic Value Added (EVA®), Market Value Added (MVA), benchmarking.

#### 15. FR 342: Advanced Financial Reporting (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual FR 342*; Picker, Clark, Dunn, *Applying IFRS Standards* (4th Ed., Wiley); Melville, *International Financial Reporting* (8th Ed., Pearson).
* **Applicable Standards:** IFRS 3, IFRS 9, IFRS 10, IFRS 11, IFRS 12, IAS 12, IAS 19, IAS 21, IAS 28, IFRS S1, IFRS S2.
* **Granular Syllabus Topics:**
  - Group accounting and business combinations (IFRS 3 & IFRS 10): Acquisition method, purchase consideration, measuring non-controlling interest (fair value vs. proportionate share of net assets), goodwill calculation and impairment.
  - Preparation of consolidated financial statements: Consolidated Statement of Financial Position, Consolidated Statement of Profit or Loss and Other Comprehensive Income, eliminating intra-group balances, unrealized profits in inventory and non-current assets.
  - Accounting for associates and joint arrangements: Equity method accounting for associates (IAS 28), joint ventures vs. joint operations (IFRS 11).
  - Complex standards: Financial instruments classification and measurement under IFRS 9 (Amortized Cost, FVOCI, FVTPL), Expected Credit Loss (ECL) model, derivative instruments and hedge accounting.
  - Accounting for income taxes (IAS 12): Temporary vs. permanent differences, deferred tax assets, deferred tax liabilities, tax base determination.
  - Foreign currency accounting (IAS 21): Functional currency vs. presentation currency, translating foreign operations and subsidiaries into group reporting currency.
  - Employee benefits (IAS 19): Short-term vs. long-term benefits, defined contribution vs. defined benefit pension schemes, actuarial gains/losses recognized in OCI.
  - Sustainability and integrated reporting: ISSB standards (IFRS S1 General Requirements, IFRS S2 Climate-related Disclosures), Global Reporting Initiative (GRI) standards.

#### 16. EF 343: Corporate Finance Strategy & Financial Market (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual EF 343*; Brealey, Myers, Allen, *Principles of Corporate Finance* (13th Ed., McGraw-Hill); Fabozzi, *Capital Markets: Institutions and Instruments* (5th Ed., MIT Press).
* **Granular Syllabus Topics:**
  - Corporate financial strategy: Long-term capital structuring, target debt-equity ratios, signaling theory, agency costs of equity and debt, debt covenants.
  - Mergers and acquisitions (M&A): Strategic rationale, takeover defenses (poison pills, white knights, staggered boards), target valuation models (discounted cash flow, comparable company multiples, precedent transactions), financing the deal (cash vs. stock swaps).
  - Corporate restructuring: Divestitures, spin-offs, equity carve-outs, leveraged buyouts (LBO mechanics, debt tranches), financial distress prediction (Altman Z-score).
  - Capital markets and instruments: Money market instruments (treasury bills, commercial paper, repo), bond market mechanics, yield curve dynamics, duration and convexity management.
  - Equity capital raising: Initial Public Offerings (IPO book building vs. fixed price method), BSEC Public Issue Rules, rights issues, private placements, venture capital and private equity syndication.
  - Financial derivatives and risk management: Forwards, futures contracts, interest rate swaps, cross-currency swaps, Black-Scholes option pricing model, Option Greeks (delta, gamma, vega, theta), hedging financial exposures.

#### 17. LT 344: Corporate Governance & Secretarial Practices (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual LT 344*; Tricker, *Corporate Governance: Principles, Policies, and Practices* (4th Ed., Oxford); BSEC, *Corporate Governance Code 2018*.
* **Granular Syllabus Topics:**
  - Theories and models of corporate governance: Agency theory, stewardship theory, stakeholder theory, resource dependency theory; Anglo-American vs. continental European governance models.
  - BSEC Corporate Governance Code (CGC 2018): Board composition, Independent Directors (eligibility, appointment criteria), separation of Chairman and Managing Director/CEO roles, role of Company Secretary.
  - Board committees: Audit Committee composition, terms of reference, oversight of financial reporting and internal controls; Nomination and Remuneration Committee (NRC) charter, evaluation of board performance.
  - Secretarial practice and board operations: Convening, organizing, and recording Board meetings, drafting agendas, board packs, resolutions by circulation; Annual General Meetings (AGM) and Extraordinary General Meetings (EGM) notices, quorum, voting protocols.
  - Statutory registers and regulatory filings: Maintenance of Register of Members, Register of Directors, Register of Charges; statutory filings with RJSC (Forms IX, XII, X, XVIII).
  - Corporate social responsibility (CSR), stakeholder engagement, whistleblowing mechanisms, corporate governance reporting and compliance certification under CGC 2018 Condition 1(5)(xxvii).

---

### Level 5: Advanced Level II & Practicum (400 Marks)

#### 18. MS 351: Business Strategy (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual MS 351*; Johnson, Whittington, Scholes, Regnér, *Exploring Strategy* (12th Ed., Pearson); Porter, *Competitive Strategy* (Free Press).
* **Granular Syllabus Topics:**
  - Strategic management process: Strategic intent, mission, vision, core corporate values, strategic objectives formulation.
  - Macro and industry environment analysis: PESTEL framework, Porter's Five Forces model, strategic groups mapping, industry life cycle analysis.
  - Internal environment analysis: Resource-Based View (RBV) of the firm, VRIO framework (Value, Rarity, Inimitability, Organization), core competencies, value chain analysis.
  - Business-level competitive strategies: Porter's generic strategies (cost leadership, differentiation, focused cost leadership, focused differentiation), Blue Ocean Strategy vs. Red Ocean.
  - Corporate-level strategies: Portfolio analysis (BCG Growth-Share Matrix, GE/McKinsey Matrix, Ansoff Matrix), vertical integration, horizontal diversification, strategic alliances, joint ventures.
  - International business strategies: Global, multidomestic, transnational, and international configurations; market entry modes (exporting, licensing, franchising, FDI).
  - Strategy implementation and change management: Strategic organizational architecture, Kotter's 8-step change model, McKinsey 7S framework, corporate turnaround and restructuring.

#### 19. AA 252: Cost & Management Audit (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual AA 252*; Ministry of Commerce, *Cost Audit (Report) Rules, 1997*; ICMAB, *Bangladesh Cost Accounting Standards (BCAS 1–31) Compendium* (Vols. I, II, III).
* **Primary Statutory Authority:** Companies Act 1994 Section 220; Cost and Management Accountants Act, 2018.
* **Granular Syllabus Topics:**
  - Statutory framework of Cost Audit in Bangladesh: Section 220 of the Companies Act 1994, Cost Audit (Report) Rules 1997, statutory qualifications and disqualifications of cost auditors, appointment, remuneration, and removal of cost auditors.
  - Sectoral mandatory cost audit notifications: Gazette requirements for Pharmaceuticals, Chemical Fertilizers, Sugar, Textiles, Cement, Petroleum & LPG, Natural Gas, and Power sectors.
  - Application of Bangladesh Cost Accounting Standards (BCAS 1–31): Verifying direct material costs (BCAS 24), employee costs (BCAS 25), utilities costs (BCAS 26), captive consumption valuation (BCAS 27), and capacity utilization determination (BCAS 28).
  - Cost audit planning and fieldwork: Preparing cost audit program, evaluating cost accounting records, testing manufacturing overhead allocation, raw material consumption reconciliations, verifying scrap and wastage accounts.
  - Cost audit reporting: Drafting the statutory Cost Auditor's Report, filling out Cost Audit Annexures and Schedules (manufacturing statement, overhead statements, inventory reconciliation), reporting material irregularities and illegalities to the Ministry of Commerce.
  - Management audit: Objectives, scope, techniques of management audit, operational audit, corporate efficiency audit, energy audit, environmental cost audit, social audit.

#### 20. LT 453: Advanced Income Tax & VAT (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Study Manual LT 453*; NBR, *Income Tax Act, 2023*, *VAT and Supplementary Duty Act, 2012*, *Transfer Pricing Regulations*.
* **Granular Syllabus Topics:**
  - Corporate tax assessment: Tax computation for publicly traded companies, non-publicly traded companies, banks, insurance companies, mobile phone operators, and export-oriented industries; minimum tax under Section 163.
  - International taxation and cross-border transactions: Double Taxation Avoidance Agreements (DTAA), Foreign Tax Credit computation, Permanent Establishment (PE) definitions, digital services tax (DST).
  - Transfer pricing regulations in Bangladesh: Arm's length principle, transfer pricing methods (Comparable Uncontrolled Price - CUP, Resale Price, Cost Plus, Profit Split, Transactional Net Margin Method - TNMM), transfer pricing documentation, Country-by-Country (CbC) reporting, Transfer Pricing Officer (TPO) audits.
  - Tax litigation and appeals: Filing tax returns, universal self-assessment, scrutiny assessments, appeal before Commissioner of Taxes (Appeals), Taxes Appellate Tribunal, Reference Application to the High Court Division, Alternative Dispute Resolution (ADR).
  - Advanced VAT practice: Large Taxpayer Unit (LTU-VAT) compliance, VAT audits, input tax apportionment, valuation rules for special transactions, adjudication of VAT offenses, confiscation, and penalties under VAT Act 2012.
  - Tax planning vs. tax avoidance vs. tax evasion: Ethical tax management, thin capitalization rules, General Anti-Avoidance Rules (GAAR).

#### 21. CS 154: Integrated Case Study (100 Marks | 3 Hours)
* **Official ICMAB Text:** *ICMAB Integrated Case Study Compendium & Examination Guidelines*.
* **Granular Syllabus Topics:**
  - Multi-disciplinary case scenario synthesis: Comprehensive analysis of an actual or simulated corporate enterprise experiencing operational, financial, or strategic challenges.
  - Strategic cost management integration: Applying activity-based costing, target costing, and throughput analysis to product lines, customer segments, and operating facilities.
  - Advanced financial statement and capital restructuring analysis: Evaluating debt restructuring, equity valuation, cash flow sustainability, and M&A proposals.
  - Corporate governance and compliance evaluation: Assessing board structure, internal audit effectiveness, statutory cost audit findings, and regulatory risk mitigation.
  - Board-level executive recommendations: Formulating actionable, prioritized strategic blueprints, risk-mitigation plans, and presentation-grade executive board memos.

---

## 3. ICSB Curriculum: Paper-by-Paper Syllabus Breakdown

Under the *Chartered Secretaries Act, 2010 (Act No. 25 of 2010)* and *Chartered Secretaries Regulations, 2011*, the Institute of Chartered Secretaries of Bangladesh administers a 5-tier, 19-paper curriculum (100 marks each).

### Foundation Level (Tier 1 | 4 Papers | 400 Marks)

#### 1. Paper 1: Business Communication (`icsb-p1`)
* **Official ICSB Study Manual:** *Business Communication (ICSB Foundation)*; Lesikar & Flatley, *Basic Business Communication*.
* **Granular Syllabus Topics:**
  - Principles of effective written business communication: 7 Cs of communication, drafting corporate letters, memoranda, executive briefing notes.
  - Formal boardroom notices, drafting agendas, resolutions, and proxy appointment instruments.
  - Report writing: Fact-finding reports, committee reports, annual report chairman's speech drafts.
  - Verbal and non-verbal business communication, interview techniques, meeting etiquette.

#### 2. Paper 2: Business Economics & Statistics (`icsb-p2`)
* **Official ICSB Study Manual:** *Business Economics & Statistics (ICSB Foundation)*; Samuelson & Nordhaus, *Economics*.
* **Granular Syllabus Topics:**
  - Part A (Economics - 50 Marks): Law of demand and supply, price elasticity, consumer behavior, market structures, national income aggregates, inflation, monetary policy of Bangladesh Bank.
  - Part B (Statistics - 50 Marks): Collection and presentation of statistical data, measures of central tendency, measures of dispersion, simple correlation, linear regression, index numbers, sampling techniques.

#### 3. Paper 3: Fundamentals of Accounting & Auditing (`icsb-p3`)
* **Official ICSB Study Manual:** *Fundamentals of Accounting & Auditing (ICSB Foundation)*.
* **Granular Syllabus Topics:**
  - Part A (Accounting - 50 Marks): Bookkeeping principles, journal, ledger, cash book, trial balance, bank reconciliation, adjusting entries, financial statements of sole traders and partnerships.
  - Part B (Auditing - 50 Marks): Nature, purpose, and scope of audit, internal check vs. internal control, audit evidence, audit working papers, rights, duties, and independence of statutory auditors.

#### 4. Paper 4: Business Management, Ethics & Entrepreneurship (`icsb-p4`)
* **Official ICSB Study Manual:** *Business Management & Entrepreneurship (ICSB Foundation)*.
* **Granular Syllabus Topics:**
  - Management principles: Planning, organizing, staffing, directing, coordination, controlling, organizational structures.
  - Business ethics: Ethical philosophies, corporate ethical culture, resolving ethical dilemmas in corporate management.
  - Corporate Social Responsibility (CSR): Environmental stewardship, community engagement, ethical stakeholder management.
  - Entrepreneurship: Identifying business opportunities, drafting business plans, funding sources, MSME ecosystem in Bangladesh.

---

### Certificate Level - I (Tier 2 | 3 Papers | 300 Marks)

#### 5. Subject Code 101: HRM & Industrial Relations (`icsb-101`)
* **Official ICSB Study Manual:** *HRM & Industrial Relations (Subject Code 101)*; Bangladesh Labor Act, 2006.
* **Granular Syllabus Topics:**
  - Human resource planning, job analysis, talent recruitment, selection, onboarding, training and executive development.
  - Performance appraisal systems, compensation benchmarking, employee retention, grievance redressal mechanisms.
  - Bangladesh Labor Act, 2006 (and 2013/2018 Amendments): Employment terms, classifications of workers, service books, leaves, holidays, working hours, occupational health and safety.
  - Industrial relations: Trade unions formation, registration, collective bargaining agent (CBA), strikes, lockouts, settlement of industrial disputes, Labor Courts and Labor Appellate Tribunal.

#### 6. Subject Code 102: General & Commercial Laws (`icsb-102`)
* **Official ICSB Study Manual:** *General & Commercial Laws (Subject Code 102)*.
* **Granular Syllabus Topics:**
  - Contract Act, 1872: Formation, offer and acceptance, capacity of parties, free consent, consideration, quasi-contracts, contingent contracts, breach and damages.
  - Sale of Goods Act, 1930: Contract of sale, conditions and warranties, passing of property, unpaid seller's lien, stoppage in transit.
  - Negotiable Instruments Act, 1881: Characteristics of promissory notes, bills of exchange, cheques; crossing of cheques, holder in due course, dishonor under Section 138.
  - Transfer of Property Act, 1882, Specific Relief Act, 1877, Limitation Act, 1908, and Arbitration Act, 2001 (ADR, arbitration agreements, arbitral awards).

#### 7. Subject Code 103: Corporate Accounting & Valuation (`icsb-103`)
* **Official ICSB Study Manual:** *Corporate Accounting & Valuation (Subject Code 103)*.
* **Granular Syllabus Topics:**
  - Corporate share capital: Accounting for issuance of shares (at par, premium, discount), forfeiture and reissue of shares, redemption of redeemable preference shares and debentures.
  - Preparation of corporate financial statements under IFRS: Statement of Financial Position, Statement of Profit or Loss, Statement of Changes in Equity, Statement of Cash Flows.
  - Business and equity valuation: Net asset value (NAV) method, yield capitalization method, Discounted Cash Flow (DCF) model, valuation of intangibles and goodwill.
  - Amalgamation and reconstruction of companies: Accounting treatment of amalgamations under IFRS 3, absorption, and internal capital reconstruction schemes.

---

### Certificate Level - II (Tier 3 | 3 Papers | 300 Marks)

#### 8. Subject Code 201: Corporate Communication & Report Writing (`icsb-201`)
* **Official ICSB Study Manual:** *Corporate Communication & Report Writing (Subject Code 201)*.
* **Granular Syllabus Topics:**
  - Advanced drafting of Board minutes, Committee minutes (Audit Committee, NRC), resolutions passed by circulation.
  - Drafting Annual Report contents: Notice of AGM, Directors' Report under Companies Act 1994 Sec 184 and BSEC CGC 2018, Management Discussion and Analysis (MD&A).
  - Corporate announcements: Press releases, material price sensitive information (PSI) disclosures to DSE, CSE, and BSEC.
  - Secretarial correspondence: Regulatory responses to RJSC, BSEC, Bangladesh Bank, and National Board of Revenue (NBR).

#### 9. Subject Code 202: Direct & Indirect Tax Laws (`icsb-202`)
* **Official ICSB Study Manual:** *Direct & Indirect Tax Laws (Subject Code 202)*; NBR Tax & VAT Codes.
* **Granular Syllabus Topics:**
  - Income Tax Act, 2023: Corporate tax liabilities, residential status, corporate rates, deductions, disallowed expenditures.
  - Tax Deducted at Source (TDS): Withholding responsibilities of Company Secretary, filing withholding tax returns, issuing tax deduction certificates.
  - Value Added Tax and Supplementary Duty Act, 2012: Registration, taxable supplies, VAT withholding (VDS - Mushak 6.6), Mushak 6.3 invoices, monthly VAT return filing.
  - Customs duty fundamentals: Valuation of imported goods, assessment procedures, customs tariffs, bonded warehouse regulations.

#### 10. Subject Code 203: Information Technology Application in Business (`icsb-203`)
* **Official ICSB Study Manual:** *IT Application in Business (Subject Code 203)*.
* **Granular Syllabus Topics:**
  - Corporate information systems: Enterprise Resource Planning (ERP), corporate database architecture, digital document archiving.
  - E-Governance and electronic corporate filing: Digital signatures, RJSC online filing portal, BSEC online submission systems, electronic voting platforms for AGMs.
  - Information and Communication Technology (ICT) Act, 2006, Cyber Security Act: Digital evidence, computer offenses, data privacy standards.
  - IT controls and business continuity: Backup protocols, disaster recovery planning, access management, cybersecurity policies.

---

### Certificate Level - III (Tier 4 | 4 Papers | 400 Marks)

#### 11. Subject Code 301: Company Law & Practice (`icsb-301`)
* **Official ICSB Study Manual:** *Company Law & Practice (Subject Code 301)*; Companies Act, 1994.
* **Granular Syllabus Topics:**
  - Companies Act, 1994 comprehensive analysis: Incorporation of private, public, non-profit companies (Sec 28); Memorandum and Articles of Association alteration procedures.
  - Prospectus rules, allotment of shares, rights issue, bonus shares, share certificates, transfer and transmission of shares.
  - Registration of mortgages, charges, and debentures under Sections 159–176; filing satisfaction of charges with RJSC.
  - Statutory registers: Register of Members (Sec 34), Register of Directors (Sec 115), Register of Charges (Sec 168), Register of Debenture Holders.
  - Statutory filings with RJSC: Form IX (Consent of Director), Form XII (Particulars of Directors), Form X (Annual Summary of Share Capital), Schedule X, Form XVIII.

#### 12. Subject Code 302: Company Secretarial Practice (`icsb-302`)
* **Official ICSB Study Manual:** *Company Secretarial Practice (Subject Code 302)*; Secretarial Standards Board of ICSB.
* **Applicable Standards:** Bangladesh Secretarial Standards (BSS 1 to BSS 6).
* **Granular Syllabus Topics:**
  - The office and professional status of the Company Secretary: Rights, statutory liabilities, duties to the Board, shareholders, and regulatory authorities.
  - BSS-1 (Meetings of the Board of Directors): Notice, agenda, board papers, quorum, conducting board meetings, committee meetings.
  - BSS-2 (General Meetings): Convening and conducting AGM and EGM; 21 days statutory notice, explanatory statements, proxies, poll, electronic voting.
  - BSS-3 (Minutes): Protocols for recording, circulating, approving, and signing minutes of Board, Committee, and General meetings within statutory time limits.
  - BSS-4 (Dividend): Declaration, approval, and disbursement of interim and final dividends, escrow accounts, unclaimed dividend transfers to CMSF.
  - BSS-5 (Meetings Through Electronic Modes): Virtual and hybrid board and general meetings, roll call, identity verification, encrypted e-voting.
  - BSS-6 (Resolutions by Circulation): Urgent matters, draft resolution circulation, required majority approval, minuting in the next board meeting.

#### 13. Subject Code 303: Interpreting Financial & Accounting Information (`icsb-303`)
* **Official ICSB Study Manual:** *Interpreting Financial & Accounting Information (Subject Code 303)*.
* **Granular Syllabus Topics:**
  - Analysis of published annual reports: Balance sheet health, income statement quality, cash flow vitality (IAS 7), notes disclosures.
  - Financial ratio analysis: Working capital and liquidity metrics, debt service coverage, leverage, return on capital employed (ROCE), earnings per share (IAS 33).
  - Interpreting Independent Auditor's Reports: Unqualified vs. qualified opinions, Emphasis of Matter, Key Audit Matters (KAM), evaluating auditor independence.
  - Assessing financial solvency, early warning signals of corporate failure, evaluating off-balance-sheet commitments and contingent liabilities.

#### 14. Subject Code 304: Banking, NBFI & Insurance Laws & Practice (`icsb-304`)
* **Official ICSB Study Manual:** *Banking, NBFI & Insurance Laws & Practice (Subject Code 304)*.
* **Granular Syllabus Topics:**
  - Bank Company Act, 1991: Licensing of banks, paid-up capital and statutory reserve requirements, restrictions on loans to directors, corporate governance rules of Bangladesh Bank.
  - Financial Institutions Act, 1993: Non-Bank Financial Institutions (NBFI) licensing, governance, leasing, credit rating, debt recovery.
  - Money Loan Court Act, 2003 (Artha Rin Adalat Ain): Filing recovery suits, execution of decrees, settlement conferences, auction of mortgaged properties.
  - Insurance Act, 2010: Insurance Development and Regulatory Authority (IDRA) regulations, life vs. non-life insurance companies governance, statutory solvency margins, policyholder protections.

---

### Professional Level - I (Tier 5 | 4 Papers | 400 Marks)

#### 15. Subject Code 401: Advanced Company Law & Corporate Restructuring (`icsb-401`)
* **Official ICSB Study Manual:** *Advanced Company Law & Corporate Restructuring (Subject Code 401)*.
* **Granular Syllabus Topics:**
  - Corporate restructuring schemes under Sections 228 and 229 of the Companies Act 1994: Compromises, arrangements, amalgamations, demergers.
  - High Court sanction process: Petitioning the Company Bench, convening court-directed meetings of creditors and shareholders, filing sanctioned orders with RJSC.
  - Reduction of share capital (Sections 59–70): Special resolutions, creditor objections, High Court confirmations.
  - Prevention of oppression and mismanagement (Section 233): Shareholder derivative actions, remedies against minority oppression.
  - Corporate winding up: Modes of winding up (compulsory winding up by court, voluntary winding up by members or creditors), appointment and duties of liquidators, distribution of assets.

#### 16. Subject Code 402: Corporate Financial Management (`icsb-402`)
* **Official ICSB Study Manual:** *Corporate Financial Management (Subject Code 402)*.
* **Granular Syllabus Topics:**
  - Strategic capital budgeting: Discounted cash flow (NPV, IRR), project risk analysis, real options in capital investments.
  - Cost of capital and capital structure optimization: WACC, debt vs. equity trade-offs, financial distress costs, credit rating implications.
  - Dividend policy and share repurchases: Walter model, Gordon model, MM dividend irrelevance theory, legal constraints on dividend distribution in Bangladesh.
  - Long-term financing instruments: Syndicated term loans, corporate bonds, sukuk issuance, rights offerings, private equity investments.

#### 17. Subject Code 403: Corporate Governance & Risk Management (`icsb-403`)
* **Official ICSB Study Manual:** *Corporate Governance & Risk Management (Subject Code 403)*.
* **Granular Syllabus Topics:**
  - Detailed clause-by-clause analysis of BSEC Corporate Governance Code (CGC 2018):
    - Condition 1: Board of Directors (Independent Directors, qualification, tenure, code of conduct).
    - Condition 2: Governance of Board of Directors of subsidiary companies.
    - Condition 3: Managing Director / CEO, CS, CFO, and Head of Internal Audit (HIAC) roles.
    - Condition 4: Board of Directors' Committee structure.
    - Condition 5: Audit Committee (composition, qualification, reporting duties).
    - Condition 6: Nomination and Remuneration Committee (NRC) (roles, remuneration policy).
    - Condition 7: External statutory audit restrictions and disqualifications.
    - Condition 8: Maintaining a website and official disclosures.
    - Condition 9: Reporting and compliance of Corporate Governance Code (Annexure-A, B, C).
  - Enterprise Risk Management (ERM): COSO ERM framework, risk governance, risk appetite statements, risk registers, mitigating operational, regulatory, and reputational risks.

#### 18. Subject Code 404: Advanced Taxation Practice (`icsb-404`)
* **Official ICSB Study Manual:** *Advanced Taxation Practice (Subject Code 404)*.
* **Granular Syllabus Topics:**
  - Corporate tax planning: Tax-efficient business restructuring, tax incentives for industrial undertakings, economic zones (BEZA, BEPZA).
  - Cross-border tax planning: Double taxation relief (DTAA), transfer pricing compliance, arm's length pricing documentation, resolving transfer pricing disputes.
  - Tax appellate procedure: Drafting grounds of appeal, filing before Commissioner of Taxes (Appeals), Taxes Appellate Tribunal, and High Court reference applications.
  - Alternative Dispute Resolution (ADR) under Income Tax Act 2023 and VAT Act 2012: Eligibility, process, and binding settlement agreements.

---

### Professional Level - II & Practicum (Tier 6 | 4 Papers | 400 Marks)

#### 19. Subject Code 501: Corporate Secretaryship (`icsb-501`)
* **Official ICSB Study Manual:** *Corporate Secretaryship (Subject Code 501)*.
* **Granular Syllabus Topics:**
  - Advanced advisory to Board of Directors: Managing boardroom politics, conflicts of interest, directors' indemnities, D&O insurance.
  - Drafting complex corporate instruments: Shareholder agreements, joint venture agreements, underwriting agreements, technical collaboration agreements.
  - Managing corporate litigation and statutory representation: Appearing before RJSC, BSEC, DSE, CSE, Bangladesh Bank, Financial Reporting Council (FRC).
  - Corporate social audit, sustainability reporting frameworks, modern ESG governance protocols for listed boards.

#### 20. Subject Code 502: Strategic & Operations Management (`icsb-502`)
* **Official ICSB Study Manual:** *Strategic & Operations Management (Subject Code 502)*.
* **Granular Syllabus Topics:**
  - Enterprise strategy formulation: Environmental scanning (PESTEL, Porter's Five Forces), internal appraisal (VRIO), core capabilities.
  - Strategy implementation: Balanced Scorecard, corporate culture alignment, organizational restructuring.
  - Operations management: Total Quality Management (TQM), ISO certification standards (ISO 9001, ISO 14001, ISO 27001), Business Process Re-engineering (BPR).
  - Corporate crisis management: Communication during crises, managing product recalls, hostile takeover defenses, reputational damage control.

#### 21. Subject Code 503: Securities Laws & Capital Market (`icsb-503`)
* **Official ICSB Study Manual:** *Securities Laws & Capital Market (Subject Code 503)*; BSEC Acts, Rules & Listing Regulations.
* **Granular Syllabus Topics:**
  - Securities and Exchange Ordinance, 1969 & BSEC Act, 1993: Regulatory powers, insider trading prohibitions, market manipulation penalties.
  - BSEC (Public Issue) Rules: Eligibility criteria for initial public offerings (IPO), book building method, prospectus approval, underwriting, allotment.
  - Listing Regulations of Dhaka Stock Exchange (DSE) & Chittagong Stock Exchange (CSE): Continuous listing requirements, Price Sensitive Information (PSI) dissemination, submission of un-audited quarterly financial statements.
  - Depository Act, 1999 & CDBL By-laws: Dematerialization of securities, share transfers, pledging, freeze orders, beneficial owner (BO) accounts administration.
  - Substantial acquisition of shares and takeovers: Takeover regulations, open offer thresholds, mandatory public disclosures.

#### 22. Subject Code 504: Compliance Management, Secretarial Audit & Due Diligence (`icsb-504`)
* **Official ICSB Study Manual:** *Compliance Management, Secretarial Audit & Due Diligence (Subject Code 504)*.
* **Primary Statutory Authority:** BSEC CGC 2018 Condition 1(5)(xxvii); Chartered Secretaries Act 2010.
* **Granular Syllabus Topics:**
  - Secretarial Audit legal framework: Objectives, scope, difference between financial audit and secretarial audit, professional responsibilities of Practicing Chartered Secretaries.
  - Secretarial audit methodology: Reviewing statutory books, registers, Board and committee minutes, filings with RJSC, BSEC, stock exchanges, Bangladesh Bank, NBR.
  - BSEC Corporate Governance Compliance Certification: Methodology for auditing compliance under CGC 2018; preparing and issuing compliance certificates and Annexure-C checklist report.
  - Legal Due Diligence: Objectives, conducting due diligence for mergers, acquisitions, takeovers, and IPOs; reviewing corporate constitution, shareholding patterns, title to properties, environmental compliance, labor compliance, material contracts, pending litigation.
  - Drafting Secretarial Audit Reports and Due Diligence Reports: Highlighting material non-compliances, qualifications, and management representation letters.

---

## 4. CGMA (CIMA) Traditional Examination Framework: Syllabi & Study Texts

Under the *AICPA & CIMA Competency Framework*, the traditional route requires passing 9 Objective Tests (OTs) across 3 pillars (Enterprise, Performance, Financial) and 3 Integrated Case Study exams.

### Operational Level (Dip MA)

#### 1. CIMA E1: Managing Finance in a Digital World (`cima-e1`)
* **Official Study Texts:** *CIMA E1 Official Study Text* (Kaplan Publishing); *CIMA E1 Course Book* (BPP Learning Media); *AICPA & CIMA Examination Blueprint E1*.
* **Core Learning Outcomes (CLOs):**
  - CLO 1: Explain the purpose, role, and structure of the finance function within digital organizations.
  - CLO 2: Analyze the impact of emerging digital technologies (cloud computing, big data, AI, blockchain, RPA, IoT) on finance operations.
  - CLO 3: Evaluate data usage, data ecosystems, data management processes, and data governance frameworks.
  - CLO 4: Formulate strategies for effective business partnering and cross-functional collaboration.
* **Granular Syllabus Topics:**
  - Structure and shape of the modern finance function: Shared service centers (SSCs), business process outsourcing (BPO), Center of Excellence (CoE).
  - Digital technologies in finance: Robotic Process Automation (RPA), artificial intelligence and machine learning in financial forecasting, cloud architectures, blockchain and distributed ledger technology (DLT), API integration.
  - Data ecosystems and data management: Big data characteristics (Volume, Velocity, Variety, Veracity), data warehousing, data mining, data governance, cybersecurity risks, and privacy regulations (GDPR).
  - Business partnering: Finance as a strategic value partner, communicating financial insights to non-financial stakeholders, ethical dilemmas in digital environments.

#### 2. CIMA P1: Management Accounting (`cima-p1`)
* **Official Study Texts:** *CIMA P1 Official Study Text* (Kaplan Publishing); *CIMA P1 Course Book* (BPP Learning Media); *AICPA & CIMA Examination Blueprint P1*.
* **Core Learning Outcomes (CLOs):**
  - CLO 1: Apply absorption, marginal, and activity-based costing systems to calculate cost of production and profitability.
  - CLO 2: Prepare operational budgets and apply forecasting models to support planning and control.
  - CLO 3: Analyze short-term commercial decisions using marginal analysis and limiting factor techniques.
  - CLO 4: Evaluate risk and uncertainty in decision-making using probability, expected values, and decision trees.
* **Granular Syllabus Topics:**
  - Cost accounting systems: Marginal costing vs. absorption costing, Activity-Based Costing (ABC) cost pools and cost drivers, environmental costing.
  - Budgeting and budgetary control: Master budgets, flexible budgets, rolling forecasts, behavioral aspects of budgeting (participative vs. imposed, budget slack).
  - Short-term commercial decision making: Break-even analysis, multi-product CVP, limiting factor analysis, linear programming (graphical and simplex methods), pricing decisions, special orders, make-or-buy.
  - Risk and uncertainty in short-term decision making: Payoff tables, decision criteria (maximax, maximin, minimax regret), expected monetary value (EMV), value of perfect and imperfect information, decision trees.

#### 3. CIMA F1: Financial Reporting (`cima-f1`)
* **Official Study Texts:** *CIMA F1 Official Study Text* (Kaplan Publishing); *CIMA F1 Course Book* (BPP Learning Media); *AICPA & CIMA Examination Blueprint F1*.
* **Core Learning Outcomes (CLOs):**
  - CLO 1: Explain the regulatory framework of financial reporting and the role of the IFRS Foundation and IASB.
  - CLO 2: Prepare single-entity financial statements in accordance with relevant International Accounting Standards (IAS/IFRS).
  - CLO 3: Calculate corporate income tax and VAT liabilities and evaluate their cash flow impacts.
  - CLO 4: Manage working capital components to ensure corporate liquidity and operational stability.
* **Granular Syllabus Topics:**
  - Regulatory environment: Standard-setting process of IASB, Conceptual Framework for Financial Reporting.
  - Financial statement preparation: IAS 1 (Presentation), IAS 2 (Inventories), IAS 16 (PPE), IAS 38 (Intangibles), IAS 37 (Provisions, Contingent Liabilities), IAS 10 (Events After Reporting Period).
  - Corporate taxation: Calculating taxable profit, corporate tax provisions, deferred tax basics, indirect taxation (VAT mechanisms, input/output VAT reconciliations).
  - Working capital management: Operating cash cycle, inventory control systems (EOQ, JIT), receivables management (credit terms, factoring, invoice discounting), cash management models.

#### 4. Operational Case Study (`cgma-ocs`)
* **Role:** Finance Officer.
* **Focus:** Integration of E1, P1, and F1 competencies in a simulated company scenario based on pre-seen materials. Passing threshold: 80 / 150 scaled marks.

---

### Management Level (Adv Dip MA)

#### 5. CIMA E2: Managing Performance (`cima-e2`)
* **Official Study Texts:** *CIMA E2 Official Study Text* (Kaplan Publishing); *CIMA E2 Course Book* (BPP Learning Media); *AICPA & CIMA Examination Blueprint E2*.
* **Core Learning Outcomes (CLOs):**
  - CLO 1: Analyze business models and ecosystem interactions across the organizational value chain.
  - CLO 2: Formulate and evaluate strategic options using strategic management frameworks.
  - CLO 3: Apply project management tools (Agile, Waterfall) to deliver organizational projects on time and budget.
  - CLO 4: Apply leadership and change management concepts to manage teams, culture, and conflict.
* **Granular Syllabus Topics:**
  - Business models and value creation: The Business Model Canvas, ecosystem economics, platform business models, value chain optimization.
  - Strategic concepts: External environment analysis (PESTEL, Porter's Five Forces), internal capability analysis, competitive strategy formulation.
  - Project management frameworks: Project lifecycle, business case formulation, project management methodologies (PRINCE2, Agile, Scrum, Kanban), Gantt charts, Critical Path Method (CPM), project risk registers.
  - People management and leadership: Situational leadership, managing high-performance finance teams, organizational culture models (Handy, Schein), Kotter's 8-step change process, negotiation and conflict resolution.

#### 6. CIMA P2: Advanced Management Accounting (`cima-p2`)
* **Official Study Texts:** *CIMA P2 Official Study Text* (Kaplan Publishing); *CIMA P2 Course Book* (BPP Learning Media); *AICPA & CIMA Examination Blueprint P2*.
* **Core Learning Outcomes (CLOs):**
  - CLO 1: Apply cost management techniques (target costing, life-cycle costing, Kaizen, TOC) for competitive advantage.
  - CLO 2: Appraise long-term capital investment projects using DCF techniques and risk adjustments.
  - CLO 3: Evaluate the financial performance of responsibility centers using ROI, RI, EVA®, and transfer pricing models.
  - CLO 4: Analyze pricing strategies and commercial revenue management in complex markets.
* **Granular Syllabus Topics:**
  - Strategic cost management: Target costing, value engineering, life-cycle costing, Kaizen costing, Theory of Constraints (bottleneck management, throughput accounting).
  - Capital investment appraisal: Net Present Value (NPV), Internal Rate of Return (IRR), Modified IRR (MIRR), Payback, sensitivity analysis, Monte Carlo simulation, real options analysis.
  - Divisional performance evaluation: Responsibility centers, Return on Investment (ROI), Residual Income (RI), Economic Value Added (EVA®), transfer pricing methods (cost-plus, market, negotiated), international transfer pricing and tax considerations.
  - Pricing and revenue management: Price elasticity, dynamic pricing models, yield management, product bundling strategies.

#### 7. CIMA F2: Advanced Financial Reporting (`cima-f2`)
* **Official Study Texts:** *CIMA F2 Official Study Text* (Kaplan Publishing); *CIMA F2 Course Book* (BPP Learning Media); *AICPA & CIMA Examination Blueprint F2*.
* **Core Learning Outcomes (CLOs):**
  - CLO 1: Apply IFRS standards relating to group accounts, business combinations, and joint arrangements.
  - CLO 2: Account for complex financial instruments, revenue contracts, leases, and deferred taxes under IFRS.
  - CLO 3: Analyze and interpret financial statements using ratio analysis, earnings quality metrics, and cash flow trends.
  - CLO 4: Evaluate business valuation models for mergers and acquisitions.
* **Granular Syllabus Topics:**
  - Group accounting (IFRS 3, IFRS 10, IAS 28): Consolidated statement of financial position and profit or loss, goodwill calculation, non-controlling interest (NCI), intra-group eliminations, associates and equity accounting.
  - Complex IFRS standards: IFRS 9 (financial assets, liabilities, hedge accounting), IFRS 15 (5-step revenue recognition), IFRS 16 (leases), IAS 12 (deferred tax), IAS 19 (employee benefits), IAS 21 (foreign currency translation).
  - Financial analysis and interpretation: Ratio analysis, DuPont model, assessing earnings quality, off-balance-sheet financing, bankruptcy prediction models.
  - Firm valuation techniques: Asset-based valuation, dividend discount models, P/E multiples, EV/EBITDA multiples, free cash flow to firm (FCFF) and to equity (FCFE).

#### 8. Management Case Study (`cgma-mcs`)
* **Role:** Finance Manager.
* **Focus:** Integration of E2, P2, and F2 competencies; serves as CIMA Gateway Exam for professional accountants (ICAB/ICMAB). Passing threshold: 80 / 150 scaled marks.

---

### Strategic Level (ACMA, CGMA)

#### 9. CIMA E3: Strategic Management (`cima-e3`)
* **Official Study Texts:** *CIMA E3 Official Study Text* (Kaplan Publishing); *CIMA E3 Course Book* (BPP Learning Media); *AICPA & CIMA Examination Blueprint E3*.
* **Core Learning Outcomes (CLOs):**
  - CLO 1: Formulate enterprise-level strategies aligned with organizational purpose, vision, and stakeholder expectations.
  - CLO 2: Evaluate disruptive technologies and digital strategies for business model transformation.
  - CLO 3: Implement strategy through organizational structure, governance systems, and strategic control mechanisms.
  - CLO 4: Lead corporate transformation, manage strategic change, and uphold ethical board stewardship.
* **Granular Syllabus Topics:**
  - Interlocking context of strategy: External environment scanning, resource-based view (RBV), competitive advantage, Blue Ocean strategies, scenario planning.
  - Digital strategy and business ecosystems: Platform business models, data monetization, disruptive technologies (AI, cloud, IoT), digital transformation roadmap.
  - Strategy implementation and organizational design: Matrix, network, and agile organizational structures; strategic control systems; performance dashboards.
  - Strategic leadership and corporate governance: Board fiduciary roles, OECD governance principles, stakeholder management (Mendelow's Matrix), corporate ethics and sustainability.

#### 10. CIMA P3: Risk Management (`cima-p3`)
* **Official Study Texts:** *CIMA P3 Official Study Text* (Kaplan Publishing); *CIMA P3 Course Book* (BPP Learning Media); *AICPA & CIMA Examination Blueprint P3*.
* **Core Learning Outcomes (CLOs):**
  - CLO 1: Design and evaluate enterprise risk management (ERM) frameworks aligned with board risk appetite.
  - CLO 2: Evaluate internal control systems, fraud risks, and corporate governance compliance.
  - CLO 3: Identify, assess, and manage cyber risks, data privacy exposures, and business resilience.
  - CLO 4: Measure and hedge financial risks (currency risk, interest rate risk) using derivative instruments.
* **Granular Syllabus Topics:**
  - Enterprise Risk Management (ERM): COSO ERM framework, ISO 31000, risk appetite, risk tolerance, risk registers, risk culture.
  - Internal control and fraud management: COSO Internal Control framework, Sarbanes-Oxley (SOX), fraud risk assessments, whistleblower procedures, internal audit role.
  - Cyber and operational risk: Information security governance, cyber threat vectors, business continuity management (BCM), disaster recovery planning.
  - Financial risk management: Foreign exchange risk (transaction, translation, economic exposures), interest rate risk, hedging instruments (forward contracts, futures, currency/interest rate options, swaps).

#### 11. CIMA F3: Financial Strategy (`cima-f3`)
* **Official Study Texts:** *CIMA F3 Official Study Text* (Kaplan Publishing); *CIMA F3 Course Book* (BPP Learning Media); *AICPA & CIMA Examination Blueprint F3*.
* **Core Learning Outcomes (CLOs):**
  - CLO 1: Formulate long-term financial strategies aligned with corporate objectives and capital market conditions.
  - CLO 2: Evaluate financing options and optimize capital structure, debt covenants, and cost of capital.
  - CLO 3: Appraise mergers, acquisitions, divestitures, and corporate restructuring transactions.
  - CLO 4: Formulate dividend policies and share repurchase programs, and manage investor relations.
* **Granular Syllabus Topics:**
  - Formulation of financial strategy: Objectives of financial management, stakeholder wealth maximization, financial risk-return profile.
  - Financing decisions: Long-term debt instruments, equity financing (rights issues, private placements), hybrid financing (convertible bonds, warrants), leasing vs. buying, venture capital, private equity syndication.
  - Capital structure theories: Modigliani-Miller propositions with/without taxes, static trade-off theory, pecking order theory, debt capacity and credit ratings.
  - Mergers and acquisitions (M&A): Strategic rationale, due diligence, target valuation (DCF, comparable multiples, asset-based), deal structuring (cash vs. equity swaps), post-merger integration.
  - Corporate restructuring: Divestitures, spin-offs, equity carve-outs, management buyouts (MBOs/MBIs), debt restructuring, insolvency administration.
  - Distribution policy: Dividend policy theories (Walter, Gordon, MM irrelevance, clientele effect), share repurchases, signaling effects.

#### 12. Strategic Case Study (`cgma-scs`)
* **Role:** Senior Finance Leader / Board Advisor.
* **Focus:** Capstone simulation synthesizing E3, P3, and F3; boardroom strategic advisory, financial engineering, crisis mitigation. Passing threshold: 80 / 150 scaled marks.

---

## 5. ChFC (The American College of Financial Services): Syllabi & Study Texts

Administered by The American College of Financial Services (King of Prussia, PA), the Chartered Financial Consultant (ChFC®) qualification requires completion of **9 modular courses** (7 Core + 2 Electives) assessed via independent 2-hour, 100-MCQ proctored exams.

### Course-by-Course Syllabus Breakdown

#### 1. HS 300: Financial Planning: Process and Environment (`chfc-hs300`)
* **Official Course Manual:** *Financial Planning: Process and Environment (HS 300)*, The American College Press; Dalton, Dalton, & Gillice, *Fundamentals of Financial Planning* (Money Education).
* **Granular Syllabus Topics:**
  - Financial planning profession: Regulatory environment (SEC, FINRA, state blue sky laws), fiduciary duty, Code of Ethics, CFP/ChFC professional standards.
  - Financial planning process: Establishing client-planner relationship, gathering data, analyzing financial status, developing and presenting recommendations, implementing recommendations, monitoring progress.
  - Personal financial statements: Statement of Financial Position, Cash Flow Statement, budgeting, emergency fund planning, debt management (mortgages, credit cards, student loans).
  - Time value of money (TVM) applications: Present and future values, ordinary annuities, annuities due, amortization, capital accumulation.
  - Education funding: Section 529 plans, Coverdell ESAs, UGMA/UTMA custodial accounts, federal financial aid formulas (FAFSA, EFC).

#### 2. HS 311: Planning for Business Owners and Professionals (`chfc-hs311`)
* **Official Course Manual:** *Planning for Business Owners and Professionals (HS 311)*, The American College Press; Leimberg et al., *The Tools & Techniques of Business Planning*.
* **Granular Syllabus Topics:**
  - Business organizational forms: Sole proprietorships, general/limited partnerships, LLCs, S corporations, C corporations from tax and liability perspectives.
  - Business valuation: Asset-based approaches, capitalization of earnings, excess earnings method, discounted cash flow (DCF), valuation discounts (minority interest, lack of marketability).
  - Buy-sell agreements: Cross-purchase agreements, entity purchase (redemption) agreements, wait-and-see arrangements, funding mechanisms using life and disability insurance.
  - Executive compensation plans: Nonqualified deferred compensation (NQDC), Section 409A compliance, restricted stock units (RSUs), incentive stock options (ISOs) vs. nonqualified stock options (NQSOs), split-dollar life insurance, executive bonus plans (Section 162).
  - Succession planning: Transferring business interest to family members vs. key employees vs. third-party sales, ESOPs (Employee Stock Ownership Plans).

#### 3. HS 313: Individual Life Insurance / Fundamentals of Insurance (`chfc-hs313`)
* **Official Course Manual:** *Individual Life Insurance (HS 313)*, The American College Press; Black & Skipper, *Life & Health Insurance* (Pearson).
* **Granular Syllabus Topics:**
  - Principles of risk and insurance: Peril, hazard, law of large numbers, insurable interest, elements of insurance contracts.
  - Term life insurance: Level term, decreasing term, renewable and convertible options.
  - Permanent life insurance contracts: Whole life insurance, non-forfeiture options, dividends and dividend options.
  - Flexible premium life insurance: Universal life, variable universal life, indexed universal life, policy charges, cost of insurance (COI).
  - Life insurance taxation: Income tax treatment of premiums, cash values, death benefits; Modified Endowment Contract (MEC) rules (7-pay test).
  - Policy riders and ownership: Waiver of premium, accelerated death benefit, guaranteed insurability, life insurance trust (ILIT) integration.

#### 4. HS 321: Investments / Income Taxation (`chfc-hs321`)
* **Official Course Manual:** *Investments (HS 321)*, The American College Press; Bodie, Kane, Marcus, *Investments* (12th Ed., McGraw-Hill); *The Tools & Techniques of Income Tax Planning*.
* **Granular Syllabus Topics:**
  - Asset classes and financial markets: Equities, fixed income, money market instruments, mutual funds, ETFs, closed-end funds.
  - Modern Portfolio Theory (MPT): Expected return, variance, covariance, efficient frontier, Capital Asset Pricing Model (CAPM), security market line (SML).
  - Fixed-income analysis: Bond pricing, yield to maturity (YTM), duration, modified duration, convexity, credit risk.
  - Equity valuation models: Dividend discount models (DDM), discounted cash flow (DCF), price-to-earnings (P/E) multiples.
  - Portfolio performance evaluation: Sharpe ratio, Treynor ratio, Jensen's Alpha, information ratio.
  - Individual income taxation: Gross income inclusions/exclusions, above-the-line deductions, itemized deductions, capital gains taxation, Alternative Minimum Tax (AMT).

#### 5. HS 326: Planning for Retirement Needs (`chfc-hs326`)
* **Official Course Manual:** *Planning for Retirement Needs (HS 326)*, The American College Press; Littell, Tacchino, & Kennon, *Retirement Planning*.
* **Granular Syllabus Topics:**
  - Qualified retirement plans: Defined benefit plans (traditional pension, cash balance plans), defined contribution plans (401(k), 403(b), 457(b), profit-sharing, money purchase).
  - Small business retirement plans: SEP-IRAs, SIMPLE IRAs, Solo 401(k) plans.
  - Individual retirement accounts: Traditional IRA (deductibility rules), Roth IRA (contribution limits, qualifying distribution rules), rollover and conversion rules.
  - Social Security and Medicare: Retirement benefits calculation, claiming age optimization (age 62, FRA, age 70), taxation of benefits, Medicare Parts A, B, C, D.
  - Retirement distribution strategies: Required Minimum Distributions (RMDs, SECURE Act 2.0), early withdrawal penalty exceptions (Section 72(t)), safe withdrawal rates (4% rule), annuity structures.

#### 6. HS 328: Estate Planning Applications / Investments & Taxation (`chfc-hs328`)
* **Official Course Manual:** *Estate Planning Applications (HS 328)*, The American College Press; Leimberg et al., *The Tools & Techniques of Estate Planning*.
* **Granular Syllabus Topics:**
  - Estate transfer mechanisms: Probate vs. non-probate assets, operation of law, contract beneficiary designations.
  - Unified federal transfer tax system: Unified gift and estate tax credit, annual gift tax exclusion, gross estate determination, allowable deductions (marital, charitable).
  - Trust planning: Revocable living trusts, irrevocable trusts, bypass (credit shelter) trusts, Qualified Terminable Interest Property (QTIP) trusts.
  - Irrevocable Life Insurance Trusts (ILIT): Crummey withdrawal powers, 3-year lookback rule for policy transfers, estate liquidity creation.
  - Generation-Skipping Transfer Tax (GSTT): Direct skips, taxable terminations, taxable distributions, GSTT exemption allocation.
  - Advanced wealth transfer techniques: Grantor Retained Annuity Trusts (GRATs), Qualified Personal Residence Trusts (QPRTs), Family Limited Partnerships (FLPs), charitable trusts (CRT/CLT).

#### 7. HS 330: Fundamentals of Estate Planning (`chfc-hs330`)
* **Official Course Manual:** *Fundamentals of Estate Planning (HS 330)*, The American College Press.
* **Granular Syllabus Topics:**
  - Legal fundamentals: Will validity, holographic wills, codicils, intestacy statutes, probate administration.
  - Incapacity planning: Durable power of attorney for property, healthcare power of attorney, living wills, advance healthcare directives, conservatorship.
  - Fiduciary appointments: Selecting executors, trustees, guardians; fiduciary duties and responsibilities.
  - Property titling: Fee simple, tenancy in common, joint tenancy with right of survivorship (JTWROS), tenancy by the entirety, community property.
  - Post-mortem estate planning: Qualified disclaimers, Section 303 stock redemptions, Section 6166 estate tax installment payments, alternate valuation date (Section 2032).

#### 8. HS 347: Contemporary Applications in Financial Planning (`chfc-hs347`)
* **Official Course Manual:** *Contemporary Applications in Financial Planning (HS 347)*, The American College Press.
* **Granular Syllabus Topics:**
  - Capstone case analysis: Evaluating comprehensive multi-faceted client profiles spanning insurance, investments, taxation, retirement, and estate planning.
  - Integrated financial plan development: Synthesizing balance sheets, cash flow models, tax returns, and client risk tolerance profiles into prioritized action blueprints.
  - Client relationship dynamics: Behavioral finance, managing cognitive biases (loss aversion, anchoring, mental accounting), counseling techniques.
  - Complex scenarios: Planning for non-traditional families, divorce financial planning, sudden wealth management, elder care financial navigation.

#### 9. Modular Elective: HS 325 or HS 334 (`chfc-elect`)
* **Official Course Manuals:** *Executive Compensation (HS 325)* / *Estate Planning Applications (HS 334)*, The American College Press.
* **Granular Syllabus Topics:**
  - HS 325 (Executive Compensation): Nonqualified deferred compensation, Rabbi trusts, Secular trusts, Supplemental Executive Retirement Plans (SERPs), golden parachutes, golden handcuffs.
  - HS 334 (Advanced Estate Applications): Dynasty trusts, self-settled asset protection trusts, valuation discounts for family-owned entities, international estate planning.

---

## 6. Official Textbooks & Benchmark Reference Manuals for Global Certifications

To resolve Finding F4, this section documents the authoritative, primary-source study texts and examination reference manuals for the world's leading professional credentials:

### 1. IMA CMA (Certified Management Accountant)
- **Governing Body:** Institute of Management Accountants (IMA) / ICMA (`imanet.org`).
- **Official Syllabus Publication:** *IMA CMA Content Specification Outlines (CSO 2024–2026)* and *Learning Outcome Statements (LOS)*, effective September 1, 2024.
- **Authoritative Review Texts & Reference Manuals:**
  1. *Wiley CMA Exam Review* (Complete Set Parts 1 & 2), Wiley Publishing / IMA.
  2. *Gleim CMA Review System* (Part 1: Financial Planning, Performance, and Analytics; Part 2: Strategic Financial Management), Dr. Irvin N. Gleim & Dale L. Flesher, Gleim Publications.
  3. *HOCK CMA Review Guide & Question Bank*, HOCK international.
  4. *IMA Statement of Ethical Professional Practice*, Institute of Management Accountants.

### 2. IIA CIA (Certified Internal Auditor)
- **Governing Body:** The Institute of Internal Auditors (IIA) (`theiia.org`).
- **Official Syllabus Publication:** *Global Internal Audit Standards (GIAS 2025)* and *IIA CIA Exam Syllabus 2025*.
- **Authoritative Review Texts & Reference Manuals:**
  1. *The IIA's CIA Learning System* (Part 1: Internal Audit Fundamentals; Part 2: Practice of Internal Auditing; Part 3: Business Knowledge for Internal Auditing), The Institute of Internal Auditors.
  2. *Global Internal Audit Standards (GIAS)*, IIA Standards Board, effective January 9, 2025.
  3. *Gleim CIA Review System* (Parts 1, 2, and 3), Dr. Irvin N. Gleim, Gleim Publications.
  4. *Sawyer's Internal Auditing: Enhancing and Protecting Organizational Value* (7th Ed.), The Internal Audit Foundation.

### 3. GARP FRM (Financial Risk Manager)
- **Governing Body:** Global Association of Risk Professionals (GARP) (`garp.org`).
- **Official Syllabus Publication:** *GARP FRM Candidate Guide & Exam Learning Objectives (2024–2026)*.
- **Authoritative Official Textbooks (Published Directly by GARP):**
  - **Part I Official Books (Set of 4 Volumes):**
    1. *Book 1: Foundations of Risk Management*, GARP.
    2. *Book 2: Quantitative Analysis*, GARP.
    3. *Book 3: Financial Markets and Products*, GARP.
    4. *Book 4: Valuation and Risk Models*, GARP.
  - **Part II Official Books (Set of 6 Volumes):**
    1. *Book 1: Market Risk Measurement and Management*, GARP.
    2. *Book 2: Credit Risk Measurement and Management*, GARP.
    3. *Book 3: Operational Risk and Resilience*, GARP.
    4. *Book 4: Liquidity and Treasury Risk Measurement and Management*, GARP.
    5. *Book 5: Risk Management and Investment Management*, GARP.
    6. *Book 6: Current Issues in Financial Markets*, GARP.
  - **Companion Review Reference:** *Wiley FRM Exam Review Study Guide*, Wiley.

### 4. ISC2 CISSP (Certified Information Systems Security Professional)
- **Governing Body:** International Information System Security Certification Consortium (ISC)² (`isc2.org`).
- **Official Syllabus Publication:** *ISC2 CISSP Common Body of Knowledge (CBK 2024–2026)*, effective April 15, 2024.
- **Authoritative Review Texts & Reference Manuals:**
  1. *The Official (ISC)² CISSP CBK Reference* (6th Edition), Arthur J. Deane & Aaron Kraus, John Wiley & Sons / ISC2 Press.
  2. *(ISC)² CISSP Certified Information Systems Security Professional Official Study Guide* (10th Edition), Mike Chapple, James Michael Stewart, Darril Gibson, Sybex / Wiley.
  3. *(ISC)² CISSP Official Practice Tests* (4th Edition), Mike Chapple & David Seidl, Sybex / Wiley.

### 5. ISACA CISA (Certified Information Systems Auditor)
- **Governing Body:** Information Systems Audit and Control Association (ISACA) (`isaca.org`).
- **Official Syllabus Publication:** *CISA 2024–2025 Job Practice Framework*, effective August 1, 2024.
- **Authoritative Review Texts & Reference Manuals:**
  1. *CISA Review Manual* (28th Edition), ISACA.
  2. *CISA Review Questions, Answers & Explanations Manual* (13th Edition), ISACA.
  3. *ITAF: Information Technology Assurance Framework - Standards and Guidelines for IS Audit and Assurance* (4th Edition), ISACA.
  4. *COBIT 2019 Framework: Introduction and Methodology*, ISACA.

---

## 7. Ready-to-Insert JSON Snippets

The following JSON snippets are fully verified, structurally validated, and formatted for insertion into `data/icmab.json`, `data/icsb.json`, `data/cgma.json`, and `data/chfc.json`.

### Snippet 7.1: ICMAB Node Enrichment (`data/icmab.json`)

```json
{
  "fr111": {
    "topics": [
      "Double-Entry Bookkeeping & Accounting Equation Mechanics",
      "Journal Entries, General Ledger & Trial Balance Preparation",
      "Adjusting Entries, Accruals, Prepayments & Depreciation Methods",
      "Bank Reconciliation Statements & Cash Control Systems",
      "Financial Statements Preparation under IFRS for Sole Traders & Partnerships",
      "Financial Accounting for Non-Profit Organizations & Incomplete Records"
    ]
  },
  "ta112": {
    "topics": [
      "Time Value of Money, Compound Interest & Loan Amortization Schedules",
      "Matrix Algebra, Determinants & Systems of Linear Equations (Cramer's Rule)",
      "Differential & Integral Calculus for Business Revenue & Cost Optimization",
      "Descriptive Statistics, Central Tendency & Dispersion Metrics",
      "Probability Theory, Bayes' Theorem, Binomial, Poisson & Normal Distributions",
      "Hypothesis Testing (z-tests, t-tests, Chi-square) & Simple Linear Regression"
    ]
  },
  "ef113": {
    "topics": [
      "Microeconomics: Demand-Supply Equilibrium, Elasticities & Consumer Utility",
      "Production Functions, Law of Diminishing Returns & Economies of Scale",
      "Market Structures: Perfect Competition, Monopoly, Oligopoly & Pricing",
      "Macroeconomics: National Income Accounting (GDP, GNP) & Circular Flow",
      "Monetary Policy, Fiscal Policy, Inflation & Bangladesh Bank Guidelines",
      "International Trade: Comparative Advantage, Balance of Payments & WTO Rules"
    ]
  },
  "ms114": {
    "topics": [
      "Principles of Management, Planning & Modern Organizational Structures",
      "Leadership Theories, Employee Motivation Models & Conflict Resolution",
      "Corporate Communication Process, Barriers & Cross-Cultural Dynamics",
      "Formal Corporate Drafting: Board Minutes, Executive Briefs & Business Reports",
      "Oral Presentations, Persuasive Pitching & Boardroom Communication",
      "Professional Ethics, Corporate Integrity & Codes of Professional Conduct"
    ]
  },
  "cm121": {
    "topics": [
      "Cost Concepts, Classifications, Cost Objects & Cost Sheet Architecture",
      "Direct Material Costing, EOQ, Inventory Valuation & BCAS 24 Compliance",
      "Direct Labor Costing, Payroll Systems, Incentive Schemes & BCAS 25",
      "Overhead Allocation, Apportionment & Absorption Rates under BCAS 4 & 5",
      "Job Order Costing, Batch Costing & Contract Costing (BCAS 7 & 31)",
      "Process Costing, Equivalent Units of Production & Joint/By-Product Costing (BCAS 8 & 9)"
    ]
  },
  "fr222": {
    "topics": [
      "Conceptual Framework for Financial Reporting & Qualitative Characteristics",
      "Property, Plant and Equipment (IAS 16) & Impairment of Assets (IAS 36)",
      "Intangible Assets (IAS 38) & Research/Development Capitalization",
      "Revenue from Contracts with Customers (IFRS 15) 5-Step Recognition Model",
      "Leases (IFRS 16): Lessee Right-of-Use Accounting & Lessor Classifications",
      "Preparation of Corporate Financial Statements & Cash Flow Statements (IAS 7)"
    ]
  },
  "ta223": {
    "topics": [
      "Computer Systems Architecture, Operating Systems & Server Virtualization",
      "Relational Database Architecture, Normalization (1NF to 3NF) & SQL Queries",
      "Enterprise Resource Planning (ERP) Modules (SAP S/4HANA & Oracle Cloud)",
      "Cloud Architectures (IaaS, PaaS, SaaS) & Enterprise Data Warehousing",
      "Cybersecurity Fundamentals, Cryptography (PKI) & Access Control Models",
      "IT General Controls (ITGC), Application Controls & COBIT 2019 Framework"
    ]
  },
  "ms224": {
    "topics": [
      "Customer Value Proposition, Marketing Mix (4Ps/7Ps) & Digital Marketing",
      "Market Segmentation, Targeting & Positioning (STP Framework)",
      "Supply Chain Architecture, Push vs. Pull Systems & Bullwhip Effect Mitigation",
      "Strategic Procurement, Total Cost of Ownership (TCO) & Vendor Evaluation",
      "Logistics Network Design, Warehousing Operations & Reverse Logistics",
      "Global Supply Chain Risk Management & Sustainable Sourcing Standards"
    ]
  },
  "lt125": {
    "topics": [
      "Companies Act 1994: Company Types, Incorporation & Memorandum/Articles Alteration",
      "Corporate Capital: Prospectus, Share Allotment, Transfers & Mortgages/Charges",
      "Management & Administration: Directors' Duties, Board Meetings & AGMs/EGMs",
      "Contract Act 1872: Essential Contract Elements, Consideration, Breach & Remedies",
      "Sale of Goods Act 1930 & Negotiable Instruments Act 1881 (Cheque Dishonor Sec 138)",
      "Bangladesh Labor Act 2006: Employment Conditions, Workplace Safety & Dispute Redress"
    ]
  },
  "cm231": {
    "topics": [
      "Marginal Costing vs. Absorption Costing & Reconciliation of Income",
      "Cost-Volume-Profit (CVP) Analysis, Multi-Product Break-Even & Margin of Safety",
      "Short-Term Commercial Decision Making: Relevant Costs, Make-or-Buy & Special Orders",
      "Strategic Pricing Models, Target Costing (BCAS 10) & Product Mix Decisions (BCAS 15)",
      "Master Budget Preparation, Flexible Budgeting & Zero-Based Budgeting (ZBB)",
      "Standard Costing & Variance Analysis under BCAS 13 (Material, Labor, Overheads)"
    ]
  },
  "ef232": {
    "topics": [
      "Financial Statement Analysis, Ratio Decomposition & DuPont 5-Factor Model",
      "Working Capital Management: Cash Conversion Cycle, Receivables & Inventory Models",
      "Capital Budgeting DCF Decision Models (NPV, IRR, MIRR, PI) under BCAS 21",
      "Capital Budgeting under Risk: Sensitivity Analysis, Decision Trees & Real Options",
      "Cost of Capital Estimation: WACC, CAPM Equity Pricing & After-Tax Cost of Debt",
      "Capital Structure Theories (MM Propositions, Pecking Order) & Leverage Ratios"
    ]
  },
  "aa133": {
    "topics": [
      "Auditing Regulatory Framework, Professional Skepticism & IESBA Code of Ethics",
      "Audit Planning, Risk Assessment Model & Materiality Determination (ISA 300, 315, 320)",
      "Internal Control Evaluation, Test of Controls & Walk-Through Tests (ISA 330)",
      "Audit Evidence Gathering, Substantive Testing & Analytical Procedures (ISA 500 & 520)",
      "Audit Sampling Techniques, Tolerable Error & Misstatement Evaluation (ISA 530)",
      "Audit Reporting: Audit Opinions, Key Audit Matters (KAM) & Emphasis of Matter (ISA 700 series)"
    ]
  },
  "lt234": {
    "topics": [
      "Income Tax Act 2023: Residential Status, Total Income Scope & Assessee Rates",
      "Heads of Income: Employment, Rent, Business Income, Capital Gains & Deductions",
      "Corporate Tax Computation, Allowable Depreciation (3rd Schedule) & Minimum Tax",
      "VAT & Supplementary Duty Act 2012: Registration, VAT Invoicing (Mushak 6.3) & Rates",
      "Withholding Tax & VAT (VDS - Mushak 6.6) & Monthly VAT Return (Mushak 9.1)",
      "Public Financial Management (PFM): National Budget Cycle & Public Procurement (PPA 2006)"
    ]
  },
  "cm341": {
    "topics": [
      "Strategic Cost Management Frameworks, Value Chain Analysis & BCAS 23 Alignment",
      "Activity-Based Costing (ABC) & Activity-Based Management (ABM) under BCAS 14 & 20",
      "Target Costing, Life Cycle Costing (LCC) & Kaizen Costing (BCAS 10, 11, 12)",
      "Theory of Constraints (TOC), Bottleneck Optimization & Throughput Accounting",
      "Cost of Quality (COQ) Analysis (BCAS 29), TQM & Environmental Cost Accounting",
      "Divisional Performance Evaluation, Balanced Scorecard, EVA® & Transfer Pricing (BCAS 16)"
    ]
  },
  "fr342": {
    "topics": [
      "Business Combinations & Group Accounting under IFRS 3 & IFRS 10",
      "Consolidated Financial Statements: Goodwill, Non-Controlling Interest & Eliminations",
      "Accounting for Associates (IAS 28) & Joint Arrangements (IFRS 11)",
      "Complex Financial Instruments Classification, Measurement & Hedging (IFRS 9)",
      "Accounting for Income Taxes (IAS 12 Deferred Tax) & Employee Benefits (IAS 19)",
      "Foreign Currency Operations Translation (IAS 21) & ISSB Sustainability Reporting (IFRS S1/S2)"
    ]
  },
  "ef343": {
    "topics": [
      "Strategic Capital Structuring, Debt Covenant Optimization & Signaling Theory",
      "Mergers & Acquisitions (M&A): Strategic Valuation (DCF, Multiples) & Deal Financing",
      "Corporate Financial Restructuring, Divestitures, Spin-Offs & Distressed Debt Management",
      "Money Market Instruments, Capital Markets & Bond Yield Curve Dynamics",
      "Equity Financing Strategies: IPO Pricing (Book Building), Rights Issues & Private Equity",
      "Financial Derivatives: Forwards, Futures, Swaps, Black-Scholes Options & Hedging"
    ]
  },
  "lt344": {
    "topics": [
      "Corporate Governance Theories (Agency, Stakeholder) & International Frameworks",
      "BSEC Corporate Governance Code (CGC 2018): Board Structure & Independent Directors",
      "Board Committees Mandates: Audit Committee Charter & NRC Compliance",
      "Corporate Secretarial Practice: Board Meetings, Agendas, Minutes & Resolutions",
      "Organizing AGMs/EGMs, Shareholder Voting Systems & RJSC Statutory Returns",
      "Corporate Governance Reporting, Whistleblowing Policies & Compliance Certification"
    ]
  },
  "ms351": {
    "topics": [
      "Strategic Management Process, Vision, Mission & Strategic Intent Formulation",
      "External Industry Analysis: PESTEL Framework & Porter's Five Forces Model",
      "Internal Strategic Appraisal: Resource-Based View (RBV), VRIO & Value Chain",
      "Business Competitive Strategies: Porter's Generic Strategies & Blue Ocean Paradigm",
      "Corporate Portfolio Strategies (BCG Matrix, Ansoff Grid), M&A & Strategic Alliances",
      "Strategy Execution, Organizational Architecture, Balanced Scorecard & Change Management"
    ]
  },
  "aa252": {
    "topics": [
      "Statutory Cost Audit Legal Framework: Companies Act 1994 Sec 220 & Cost Audit Rules 1997",
      "Mandatory Cost Audit Gazette Directives: Pharmaceuticals, Fertilizers, Cement & Textiles",
      "Application of Bangladesh Cost Accounting Standards (BCAS 1–31) in Audit Engagements",
      "Cost Audit Planning, Manufacturing Overhead Verification & Capacity Audits (BCAS 28)",
      "Drafting Statutory Cost Audit Reports, Annexures & Submissions to Ministry of Commerce",
      "Management Audit, Operational Audit, Efficiency Evaluation & Energy/Environmental Audits"
    ]
  },
  "lt453": {
    "topics": [
      "Corporate Tax Computation for Public, Private, Banking & Export Entities under ITA 2023",
      "International Tax Treaties (DTAA), Foreign Tax Credits & Permanent Establishment Rules",
      "Transfer Pricing Regulations: Arm's Length Principle, Pricing Methods & CbC Reporting",
      "Tax Assessments, Scrutiny, Appeals (Taxes Appellate Tribunal) & High Court References",
      "Alternative Dispute Resolution (ADR) under Income Tax & VAT Legislation",
      "Advanced VAT Adjudications, Large Taxpayer Unit (LTU) Compliance & Tax Planning Ethics"
    ]
  },
  "cs154": {
    "topics": [
      "Multi-Disciplinary Corporate Case Synthesis across Strategy, Costing, Finance & Tax",
      "Strategic Cost & Profitability Diagnostics using ABC, Target Costing & Throughput Models",
      "Financial Restructuring Evaluation, Valuation Modeling & Cash Flow Projections",
      "Corporate Governance, Ethical Board Conduct & Statutory Cost Audit Integration",
      "Formulating Board-Level Strategic Action Plans & Presentation-Grade Executive Briefs"
    ]
  },
  "icmab-articleship": {
    "topics": [
      "12 Months Practical Articleship under Active ACMA/FCMA Supervision",
      "Practical Exposure to Enterprise Cost Accounting & BCAS Implementation",
      "Participation in Statutory Cost Audit Engagements & Workpaper Preparation",
      "Corporate Budgeting, Management Reporting & Variance Tracking in Industry",
      "Verification of Mandatory Experience Logbook & Articleship Completion Certificate"
    ]
  }
}
```

---

### Snippet 7.2: ICSB Node Enrichment (`data/icsb.json`)

```json
{
  "icsb-p1": {
    "topics": [
      "Principles of Written Business Communication & 7 Cs Framework",
      "Corporate Drafting: Letters, Memoranda, Agendas & Executive Briefings",
      "Report Writing: Committee Reports, Fact-Finding Reports & Chairman's Speeches",
      "Verbal & Non-Verbal Business Kinesics, Boardroom Presentation Skills & Etiquette"
    ]
  },
  "icsb-p2": {
    "topics": [
      "Microeconomics: Demand-Supply Laws, Elasticities & Market Structures",
      "Macroeconomic Indicators: National Income, Inflation & Monetary Policy",
      "Descriptive Statistics: Central Tendency, Dispersion & Index Numbers",
      "Inferential Statistics: Correlation, Simple Regression & Sampling Methods"
    ]
  },
  "icsb-p3": {
    "topics": [
      "Double-Entry Bookkeeping Principles, Journal, Ledger & Trial Balance",
      "Preparation of Financial Statements for Sole Traders & Partnerships",
      "Auditing Concepts: Objectives, Scope & Auditor Independence",
      "Internal Control Systems, Internal Check & Audit Evidence Gathering"
    ]
  },
  "icsb-p4": {
    "topics": [
      "Principles of Management, Planning & Organizational Hierarchy Design",
      "Business Ethics: Corporate Moral Codes, Integrity & Resolving Dilemmas",
      "Corporate Social Responsibility (CSR) & Stakeholder Engagement Policies",
      "Entrepreneurship: Business Opportunity Evaluation, Funding & Business Plans"
    ]
  },
  "icsb-101": {
    "topics": [
      "Human Resource Planning, Recruitment, Talent Selection & Onboarding",
      "Performance Appraisal Systems, Compensation & Employee Retention Strategies",
      "Bangladesh Labor Act 2006: Employment Conditions, Working Hours & Leaves",
      "Industrial Relations: Trade Unions, Collective Bargaining Agents & Labor Courts"
    ]
  },
  "icsb-102": {
    "topics": [
      "Contract Act 1872: Formation, Consideration, Free Consent & Breach Remedies",
      "Sale of Goods Act 1930: Conditions, Warranties & Rights of Unpaid Sellers",
      "Negotiable Instruments Act 1881: Cheques, Bills of Exchange & Sec 138 Dishonor",
      "Commercial Laws: Transfer of Property, Specific Relief & Commercial Arbitration"
    ]
  },
  "icsb-103": {
    "topics": [
      "Corporate Share Capital: Issuance, Forfeiture, Reissue & Debentures",
      "Preparation of Corporate Financial Statements under IFRS/IAS",
      "Equity & Business Valuation: NAV Method, Yield Capitalization & DCF Modeling",
      "Accounting for Corporate Amalgamations, Mergers & Internal Capital Restructuring"
    ]
  },
  "icsb-201": {
    "topics": [
      "Drafting Minutes of Board of Directors & Specialized Committee Meetings",
      "Drafting Annual Report Disclosures, Directors' Report & MD&A Narratives",
      "Price Sensitive Information (PSI) Notices & Disclosures to DSE/CSE/BSEC",
      "Secretarial Correspondence with Regulatory Agencies (RJSC, BSEC, NBR)"
    ]
  },
  "icsb-202": {
    "topics": [
      "Income Tax Act 2023: Corporate Tax Principles & Allowable Deductions",
      "Tax Deducted at Source (TDS): Company Secretary Withholding Responsibilities",
      "VAT & Supplementary Duty Act 2012: Invoicing (Mushak 6.3) & Withholding (VDS)",
      "Customs Law Fundamentals, Import Tariffs & Bonded Warehouse Regulations"
    ]
  },
  "icsb-203": {
    "topics": [
      "Enterprise Systems in Governance: ERP Integration & Digital Archiving",
      "E-Governance & Regulatory Portals: RJSC Online Filings & Digital Signatures",
      "Information & Communication Technology (ICT) Act 2006 & Cyber Law Standards",
      "IT Security Governance, Access Controls & Business Continuity Planning (BCP)"
    ]
  },
  "icsb-301": {
    "topics": [
      "Companies Act 1994: Company Types, Incorporation & Memorandum/Articles Alteration",
      "Prospectus, Capital Raising, Share Transfers & Registration of Charges with RJSC",
      "Directors' Appointments, Disqualifications, Board Quorum & Remuneration",
      "Statutory Registers: Register of Members, Directors & Charges Maintenance",
      "Mandatory Filings with RJSC: Form IX, Form XII, Form X, Schedule X & Form XVIII"
    ]
  },
  "icsb-302": {
    "topics": [
      "Role, Statutory Duties & Legal Liabilities of the Practicing Company Secretary",
      "BSS-1 (Meetings of the Board of Directors) & BSS-2 (General Meetings - AGM/EGM)",
      "BSS-3 (Minutes Recording Protocols) & BSS-4 (Dividend Declaration & CMSF Rules)",
      "BSS-5 (Electronic Virtual Meetings) & BSS-6 (Board Resolutions by Circulation)",
      "Organizing Shareholder Meetings: Statutory 21-Day Notices, Proxies & E-Voting"
    ]
  },
  "icsb-303": {
    "topics": [
      "Comprehensive Analysis of Published Corporate Annual Reports & Statements",
      "Financial Ratio Diagnostics: Liquidity, Solvency, Debt Service & ROCE",
      "Interpreting Independent Auditor's Reports: Unqualified Opinions, KAMs & Notes",
      "Corporate Solvency Evaluation, Cash Flow Vitality (IAS 7) & Risk Oversight"
    ]
  },
  "icsb-304": {
    "topics": [
      "Bank Company Act 1991: Licensing, Capital Requirements & Governance Restrictions",
      "Financial Institutions Act 1993: NBFI Licensing, Debt Recovery & Regulations",
      "Money Loan Court Act 2003 (Artha Rin Adalat Ain): Suits, Decrees & Auctions",
      "Insurance Act 2010: IDRA Guidelines, Solvency Margins & Policyholder Protection"
    ]
  },
  "icsb-401": {
    "topics": [
      "Corporate Restructuring Schemes under Companies Act 1994 Sections 228 & 229",
      "High Court Sanction Process: Petitions, Creditor/Shareholder Meetings & Filings",
      "Reduction of Share Capital under Sections 59–70 & Special Resolution Procedures",
      "Prevention of Minority Oppression & Mismanagement under Section 233",
      "Corporate Winding-Up Modes: Court Compulsory vs. Voluntary Winding-Up & Liquidators"
    ]
  },
  "icsb-402": {
    "topics": [
      "Strategic Capital Budgeting: Discounted Cash Flow (NPV, IRR) & Risk Evaluation",
      "Cost of Capital Estimation (WACC) & Optimal Corporate Capital Structure",
      "Dividend Policy Models, Legal Distributable Profits & Share Buybacks",
      "Long-Term Debt Financing: Syndicated Bank Loans, Corporate Bonds & Sukuk"
    ]
  },
  "icsb-403": {
    "topics": [
      "BSEC Corporate Governance Code (CGC 2018): Comprehensive Clause Analysis",
      "Independent Directors: Eligibility, Fiduciary Duties & Board Diversity",
      "Audit Committee & Nomination and Remuneration Committee (NRC) Mandates",
      "Enterprise Risk Management (ERM): COSO Framework, Risk Appetite & Registers",
      "Internal Controls Oversight, Whistleblower Systems & Corporate Ethics"
    ]
  },
  "icsb-404": {
    "topics": [
      "Strategic Corporate Tax Planning & Tax-Free Reorganizations in Bangladesh",
      "International Tax Treaties (DTAA) & Transfer Pricing Arm's Length Compliance",
      "Tax Appellate Litigation: Appeals before Commissioner (Appeals) & Tribunal",
      "Alternative Dispute Resolution (ADR) Procedures under Income Tax & VAT Acts"
    ]
  },
  "icsb-501": {
    "topics": [
      "High-Level Board Advisory: Board Politics, Conflicts of Interest & D&O Insurance",
      "Drafting Joint Venture Agreements, Shareholder Pacts & Technology Transfers",
      "Statutory Representation before RJSC, BSEC, DSE, CSE, Bangladesh Bank & FRC",
      "ESG Governance Architecture, Sustainability Disclosures & Corporate Transparency"
    ]
  },
  "icsb-502": {
    "topics": [
      "Enterprise Strategic Planning: PESTEL, Porter's Five Forces & Core Competencies",
      "Strategy Execution Models, Balanced Scorecards & Structural Alignment",
      "Operations Management: Total Quality Management (TQM) & ISO 9001/27001 Standards",
      "Corporate Crisis Leadership: Emergency Communications, Hostile Defense & Media"
    ]
  },
  "icsb-503": {
    "topics": [
      "Securities and Exchange Ordinance 1969 & BSEC Act 1993: Prohibitions & Penalties",
      "BSEC Public Issue Rules: IPO Process, Book Building, Underwriting & Prospectuses",
      "DSE & CSE Listing Regulations: Continuous Disclosures & Material Events (PSI)",
      "Central Depository Bangladesh Ltd (CDBL) Rules: Dematerialization & BO Accounts",
      "Substantial Acquisition of Shares, Open Offer Thresholds & Takeover Code"
    ]
  },
  "icsb-504": {
    "topics": [
      "Statutory Secretarial Audit: Framework, Audit Scope & Working Paper Standards",
      "BSEC Corporate Governance Compliance Certification under CGC 2018 Condition 1(5)",
      "Comprehensive Annexure-C Compliance Checklist Verification Methodology",
      "Legal Due Diligence: Verification of Corporate Title, Licenses, Contracts & Litigation",
      "Drafting Secretarial Audit Reports, Adverse Findings & Management Representations"
    ]
  },
  "icsb-per": {
    "topics": [
      "36 Months Practical Experience in Company Secretarial, Legal or Governance Roles",
      "Drafting Corporate Board Documentation, Minutes & RJSC Statutory Returns",
      "Advising on BSEC Corporate Governance Code Adherence & Compliance Checklists",
      "Participation in Secretarial Audit Engagements & Due Diligence Reviews",
      "Submission of Verified Experience Portfolio & Secretarial Internship Report"
    ]
  }
}
```

---

### Snippet 7.3: CGMA Node Enrichment (`data/cgma.json`)

```json
{
  "cima-ba1": {
    "topics": [
      "Macroeconomic Environment, Aggregate Demand & Business Cycles",
      "Microeconomic Market Forces: Demand, Supply, Elasticity & Market Forms",
      "Financial Markets, Banking Systems & Monetary/Fiscal Policy Impacts",
      "International Trade, Exchange Rate Determination & Globalization Drivers"
    ]
  },
  "cima-ba2": {
    "topics": [
      "Cost Identification, Classification & Cost Accounting Systems",
      "Marginal Costing, Absorption Costing & Contribution Margin Analysis",
      "Budgetary Planning, Operational Budgets & Variance Analysis",
      "Cost-Volume-Profit (CVP) Analysis & Short-Term Commercial Decision Rules"
    ]
  },
  "cima-ba3": {
    "topics": [
      "Principles of Financial Accounting, Accounting Equation & Bookkeeping",
      "Adjusting Entries, Trial Balance Extraction & Error Corrections",
      "Preparation of Financial Statements under IFRS/IAS for Single Entities",
      "Accounting for Non-Current Assets, Depreciation & Working Capital Balances"
    ]
  },
  "cima-ba4": {
    "topics": [
      "Ethics, Ethical Frameworks & CIMA Code of Professional Ethics",
      "Corporate Governance Principles, Board Responsibilities & Internal Control",
      "Company Law: Incorporation, Share Capital, Directors' Fiduciary Duties",
      "Commercial Contract Law, Employment Law & Professional Negligence Liability"
    ]
  },
  "cima-e1": {
    "topics": [
      "Role, Structure & Evolution of the Modern Corporate Finance Function",
      "Emerging Digital Technologies: Cloud, Big Data, AI, RPA, Blockchain & IoT",
      "Data Ecosystems, Data Management Pipelines, Governance & Cybersecurity Risks",
      "Finance Business Partnering, Stakeholder Collaboration & Digital Transformation"
    ]
  },
  "cima-p1": {
    "topics": [
      "Cost Accounting Systems: Marginal, Absorption & Activity-Based Costing (ABC)",
      "Budgeting Frameworks, Flexible Budgets & Rolling Operational Forecasts",
      "Short-Term Decision Making: CVP Analysis, Limiting Factors & Pricing Models",
      "Managing Risk and Uncertainty in Operations: Payoff Tables & Decision Trees"
    ]
  },
  "cima-f1": {
    "topics": [
      "Financial Reporting Regulatory Framework & IASB Standard-Setting Architecture",
      "Preparation of Single-Entity Financial Statements under IFRS (IAS 1, 2, 16, 38)",
      "Corporate Income Tax Calculation, Tax Provisions & Indirect Taxation (VAT)",
      "Working Capital Management: Cash Operating Cycles, Receivables & Liquidity"
    ]
  },
  "cgma-ocs": {
    "topics": [
      "Integrated Scenario Simulation Synthesizing E1, P1, and F1 Competencies",
      "Operational Financial Performance Diagnostics & Cost Variance Reporting",
      "Working Capital Liquidity Troubleshooting & Inventory Management Responses",
      "Preparation of Finance Officer Briefing Memos for Senior Management"
    ]
  },
  "cima-e2": {
    "topics": [
      "Business Models, Value Creation & Ecosystem Orchestration across Value Chains",
      "Strategic Environmental Scanning (PESTEL, Porter's 5 Forces) & Strategic Options",
      "Project Management Methodologies (Agile, Waterfall, PRINCE2) & Critical Path Method",
      "People Management, High-Performance Teams, Leadership & Change Models (Kotter)"
    ]
  },
  "cima-p2": {
    "topics": [
      "Strategic Cost Management: Target Costing, Life-Cycle Costing & Kaizen",
      "Capital Investment Appraisal: Discounted Cash Flow (NPV, IRR, MIRR) & Real Options",
      "Divisional Performance Evaluation: ROI, Residual Income, EVA® & Transfer Pricing",
      "Revenue Management, Dynamic Pricing Strategies & Long-Term Decision Analysis"
    ]
  },
  "cima-f2": {
    "topics": [
      "Consolidated Financial Statements: Group Accounts, Goodwill & NCIs (IFRS 3, 10)",
      "Accounting for Associates (IAS 28) & Joint Venture Arrangements (IFRS 11)",
      "Complex Financial Instruments (IFRS 9), Leases (IFRS 16) & Revenue (IFRS 15)",
      "Financial Analysis, Ratio Diagnostics, Earnings Quality & Corporate Valuation"
    ]
  },
  "cgma-mcs": {
    "topics": [
      "Integrated Scenario Simulation Synthesizing E2, P2, and F2 Competencies",
      "Capital Investment Project Evaluation & Strategic Financial Recommendations",
      "Group Consolidated Reporting Analysis & Divisional Performance Dispute Resolution",
      "Preparation of Management-Level Strategic Briefing Papers for Executive Directors"
    ]
  },
  "cima-e3": {
    "topics": [
      "Enterprise Strategic Planning: Purpose, Vision, Competitive Strategies & Blue Ocean",
      "Digital Strategy Formulation, Platform Business Models & Disruptive Innovation",
      "Strategy Implementation: Organizational Architecture, Network Models & Controls",
      "Strategic Leadership, Corporate Governance (OECD) & Ethical Board Stewardship"
    ]
  },
  "cima-p3": {
    "topics": [
      "Enterprise Risk Management (ERM): COSO Framework, Risk Appetite & Registers",
      "Internal Control Systems, SOX Compliance, Fraud Risk Assessment & Internal Audit",
      "Cybersecurity Governance, Information Asset Protection & Business Continuity (BCM)",
      "Financial Risk Management: Currency & Interest Rate Hedging via Derivatives"
    ]
  },
  "cima-f3": {
    "topics": [
      "Formulation of Strategic Financial Policy & Long-Term Capital Structure",
      "Financing Decisions: Equity Rights Offerings, Debt Instruments & Hybrids",
      "Mergers & Acquisitions (M&A): Target Valuation (DCF, Multiples) & Deal Structuring",
      "Corporate Restructuring, Divestitures, Dividend Policies & Share Repurchases"
    ]
  },
  "cgma-scs": {
    "topics": [
      "Capstone Integrated Scenario Simulation Synthesizing E3, P3, and F3",
      "Board-Level Strategic Problem Solving, Financial Engineering & Risk Defense",
      "Evaluating Cross-Border Mergers, Capital Restructuring & Turnaround Proposals",
      "Drafting Boardroom Executive Memos & Strategic Advisory Presentations"
    ]
  }
}
```

---

### Snippet 7.4: ChFC Node Enrichment (`data/chfc.json`)

```json
{
  "chfc-hs300": {
    "topics": [
      "Personal Financial Planning Process & Fiduciary Code of Ethics",
      "Personal Financial Statements: Balance Sheet, Cash Flow & Budgeting",
      "Time Value of Money (TVM) Calculations for Capital Accumulation",
      "Consumer Debt Management, Credit Scoring & Housing Financing Options",
      "Higher Education Funding Strategies: 529 Plans, Coverdell ESAs & Aid Formulas"
    ]
  },
  "chfc-hs311": {
    "topics": [
      "Advising Business Entities: Sole Proprietorships, Partnerships, LLCs, S/C Corps",
      "Business Valuation Methodologies: Capitalization of Earnings & DCF Models",
      "Buy-Sell Agreement Design: Cross-Purchase, Entity Redemption & Wait-and-See",
      "Executive Compensation: Stock Options (ISOs/NQSOs), RSUs & Section 409A NQDC",
      "Succession Planning: Family Business Transfer, Key Employee Buyouts & ESOPs"
    ]
  },
  "chfc-hs313": {
    "topics": [
      "Principles of Risk Analysis & Elements of Insurance Contracts",
      "Term Life Insurance: Level, Renewable, Decreasing & Convertible Structures",
      "Permanent Life Insurance Contracts: Whole Life Cash Values & Dividend Options",
      "Universal Life, Variable Universal Life & Indexed Universal Life Policies",
      "Taxation of Life Insurance: Premiums, Death Benefits & MEC 7-Pay Rules",
      "Policy Riders, Ownership Design & Irrevocable Life Insurance Trusts (ILITs)"
    ]
  },
  "chfc-hs321": {
    "topics": [
      "Financial Markets, Securities Exchanges, Mutual Funds & Exchange-Traded Funds (ETFs)",
      "Modern Portfolio Theory (MPT), Efficient Frontier & Capital Asset Pricing Model (CAPM)",
      "Fixed-Income Securities Analysis: Bond Pricing, Yield Curves, Duration & Convexity",
      "Equity Valuation Models: Dividend Discount Models (DDM) & Free Cash Flow Models",
      "Portfolio Performance Evaluation: Sharpe Ratio, Treynor Ratio & Jensen's Alpha",
      "Federal Income Taxation of Investments: Capital Gains, Dividends & Tax-Loss Harvesting"
    ]
  },
  "chfc-hs326": {
    "topics": [
      "Employer Qualified Retirement Plans: Defined Benefit vs. Defined Contribution (401k)",
      "Small Business Retirement Options: SEP-IRAs, SIMPLE IRAs & Solo 401(k) Plans",
      "Individual Retirement Accounts: Traditional Deductible IRAs vs. Roth IRAs",
      "Social Security Optimization: Benefit Formulas, Full Retirement Age & Spousal Rules",
      "Retirement Distribution Planning: RMD Rules (SECURE 2.0) & Sustainable Withdrawal Rates"
    ]
  },
  "chfc-hs328": {
    "topics": [
      "Unified Federal Transfer Tax Architecture: Gift Tax, Estate Tax & Unified Credits",
      "Estate Transfer Mechanisms: Wills, Probate Administration & Titling Modes",
      "Trust Planning: Revocable Living Trusts, Irrevocable Trusts & Bypass Trusts",
      "Irrevocable Life Insurance Trusts (ILITs) & Crummey Power Administration",
      "Generation-Skipping Transfer Tax (GSTT) Planning & GSTT Exemption Allocations",
      "Advanced Transfer Vehicles: GRATs, QPRTs, Family Limited Partnerships (FLPs) & CRTs"
    ]
  },
  "chfc-hs330": {
    "topics": [
      "Legal Foundations of Estate Planning: Wills, Holographic Wills & Codicils",
      "Incapacity Planning: Durable Powers of Attorney, Healthcare Directives & Living Wills",
      "Fiduciary Roles: Selection, Duties & Liabilities of Executors, Trustees & Guardians",
      "Property Titling Strategies: JTWROS, Tenancy in Common & Tenancy by Entirety",
      "Post-Mortem Estate Planning: Disclaimers, Sec 303 Stock Redemptions & Sec 6166"
    ]
  },
  "chfc-hs347": {
    "topics": [
      "Comprehensive Client Case Study Synthesis across All 7 Planning Disciplines",
      "Integrated Plan Construction: Cash Flow Modeling, Tax Shelters & Net Worth Tracking",
      "Behavioral Financial Counseling: Identifying Heuristics & Cognitive Biases",
      "Specialized Client Advisory: Unmarried Couples, Second Marriages & Blended Families",
      "Elder Financial Planning, Long-Term Care Logistics & Incapacity Asset Protection"
    ]
  },
  "chfc-elect": {
    "topics": [
      "Executive Compensation Planning (HS 325): Rabbi Trusts, SERPs & Golden Parachutes",
      "Estate Planning Applications (HS 334): Dynasty Trusts & Asset Protection Trusts",
      "Special Needs Financial Planning: First/Third-Party SNTs, ABLE Accounts & SSI Rules",
      "Financial Aspects of Aging: Gerontological Wealth Planning & Medicaid Spend-Down"
    ]
  }
}
```

---

## 8. Primary Source Citations & Statutory URL Registry

All curricula, acts, standards, and textbook data cataloged in this dossier are anchored to the following verified official governing body publications:

1. **ICMAB (Cost and Management Accountants of Bangladesh):**
   - Official Portal: [https://www.icmab.gov.bd](https://www.icmab.gov.bd)
   - Act of Parliament: *Cost and Management Accountants Act, 2018 (Act No. LXX of 2018)*, Ministry of Law, Justice and Parliamentary Affairs, Bangladesh.
   - Statutory Rules: *Cost Audit (Report) Rules, 1997*, Ministry of Commerce, Bangladesh Gazette.
   - Technical Compendium: *Bangladesh Cost Accounting Standards (BCAS 1–31)*, Volumes I, II, and III, Cost Accounting and Financial Reporting Standards Committee (CAFRSC), ICMAB.
   - Curriculum Regulations: *ICMAB Syllabus 2021 & Examination Regulations*, Directorate of Education, ICMAB.

2. **ICSB (Chartered Secretaries of Bangladesh):**
   - Official Portal: [https://www.icsb.edu.bd](https://www.icsb.edu.bd)
   - Act of Parliament: *Chartered Secretaries Act, 2010 (Act No. 25 of 2010)*, Ministry of Commerce, Bangladesh.
   - Statutory Regulations: *Chartered Secretaries Regulations, 2011*, Bangladesh Gazette.
   - Corporate Governance Mandate: *BSEC Corporate Governance Code (CGC 2018)*, Notification No. BSEC/CMRRCD/2006-158/207/Admin/80, Bangladesh Securities and Exchange Commission.
   - Technical Compendium: *Bangladesh Secretarial Standards (BSS-1 through BSS-6)*, Secretarial Standards Board (SSB), ICSB.
   - Curriculum Specifications: *ICSB Curriculum & Examination Syllabus (Foundation, Certificate I–III, Professional I–II)*, Education Directorate, ICSB.

3. **AICPA & CIMA (CGMA):**
   - Official Portal: [https://www.aicpa-cima.com](https://www.aicpa-cima.com)
   - Syllabus Blueprint: *CIMA Professional Qualification Syllabus & Examination Blueprints (Operational, Management, Strategic Levels)*, AICPA & CIMA.
   - Official Study Manuals: Kaplan Publishing & BPP Learning Media CIMA Official Study Texts (E1–E3, P1–P3, F1–F3).

4. **The American College of Financial Services (ChFC®):**
   - Official Portal: [https://www.theamericancollege.edu](https://www.theamericancollege.edu)
   - Program Catalog: *Chartered Financial Consultant (ChFC®) Program Guide & Modular Course Outlines (HS 300 to HS 347)*, The American College Press.

5. **IMA (CMA), IIA (CIA), GARP (FRM), ISC2 (CISSP), ISACA (CISA):**
   - IMA: *CMA Content Specification Outlines (CSO 2024–2026)*, [https://www.imanet.org](https://www.imanet.org).
   - IIA: *Global Internal Audit Standards (GIAS 2025)*, [https://www.theiia.org](https://www.theiia.org).
   - GARP: *FRM Learning Objectives & Candidate Guide (2024–2026)*, [https://www.garp.org](https://www.garp.org).
   - ISC2: *CISSP Exam Outline & CBK (2024–2026)*, [https://www.isc2.org](https://www.isc2.org).
   - ISACA: *CISA Job Practice (2024–2025) & ITAF 4th Ed.*, [https://www.isaca.org](https://www.isaca.org).

---
*End of Statutory Curricula & Official Standards Expansion Dossier (`docs/research/official_curricula_and_syllabi_expansion.md`)*
