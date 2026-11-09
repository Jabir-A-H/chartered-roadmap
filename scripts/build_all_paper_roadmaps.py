"""
Build All 17 ICAB Individual Paper Roadmaps
Extracts and structures syllabus data for all 17 ICAB examination papers based on
'D:/CA Resources/Study Manuals/ICAB Latest Syllabus (2025).pdf'
Outputs individual JSON datasets in data/icab-<paper>.json
"""

import os
import json
import pymupdf

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")
PDF_PATH = "D:/CA Resources/Study Manuals/ICAB Latest Syllabus (2025).pdf"

PAPER_SPECS = [
    # Certificate Level (7 papers)
    {
        "code": "c1",
        "paperCode": "C1",
        "title": "ICAB C1 - Accounting",
        "name": "Accounting",
        "level": "Certificate Level",
        "category": "Certificate Level Papers",
        "marks": 100,
        "duration": "1.5 Hours",
        "format": "Computer-Based Assessment (Objective & Scenario Questions)",
        "summary": "Covers double-entry accounting principles, recording transactions, adjustments, preparation of financial statements for sole traders, partnerships, and limited companies under IFRS, and public financial management fundamentals.",
        "tags": ["Certificate Level", "Core Exam", "Study Tracker", "Accounting", "Financial Statements"],
        "stages": [
            {
                "id": "c1-s1",
                "title": "Area 1: Accounting Concepts, Ethics & Sustainability",
                "weightage": "15%",
                "description": "IFRS Conceptual Framework, qualitative characteristics, accounting principles, and ISSB sustainability disclosures.",
                "nodes": [
                    {
                        "id": "c1-s1-n1",
                        "name": "Conceptual Framework & Standard Setting",
                        "code": "C1.1.1",
                        "category": "Core Theory",
                        "weightage": "8%",
                        "description": "Standard-setting process used by IASB and local authorities (FRC/ICAB); qualitative characteristics of financial information; effects of transactions under the Conceptual Framework; true and fair view override.",
                        "topics": [
                            "IASB standard-setting structure and Bangladesh endorsement process",
                            "Fundamental qualitative characteristics: Relevance and Faithful Representation",
                            "Enhancing characteristics: Comparability, Verifiability, Timeliness, Understandability",
                            "Elements of financial statements: Asset, Liability, Equity, Income, Expense",
                            "Concepts of 'fair presentation' and 'true and fair view'"
                        ],
                        "learningOutcomes": [
                            "Understand the standard-setting process used by IASB and local authority.",
                            "Identify the qualitative characteristics of financial information.",
                            "Apply recognition and derecognition criteria to business events."
                        ],
                        "checklists": [
                            "Read Conceptual Framework chapter in ICAB Manual",
                            "Practice 20 objective questions on qualitative characteristics",
                            "Summarize True and Fair view criteria in revision notebook"
                        ]
                    },
                    {
                        "id": "c1-s1-n2",
                        "name": "Ethics & Sustainability in Reporting",
                        "code": "C1.1.2",
                        "category": "Ethics & Governance",
                        "weightage": "7%",
                        "description": "Professional ethics under IESBA Code, ICAB Bye-laws on misconduct, and introduction to IFRS Sustainability Disclosure Standards (ISSB S1/S2).",
                        "topics": [
                            "IESBA Code of Ethics fundamental principles: Integrity, Objectivity, Professional Competence, Confidentiality, Professional Behaviour",
                            "Professional misconduct prescribed by ICAB bye-laws",
                            "Principles-based vs rules-based ethical reasoning",
                            "Introduction to sustainability in financial reporting and ISSB aims (IFRS S1 & S2)",
                            "Stakeholder information needs regarding climate and ESG impacts"
                        ],
                        "learningOutcomes": [
                            "Specify ethical considerations for preparers of financial statements.",
                            "Identify professional misconduct rules under ICAB bye-laws.",
                            "Explain the aims of ISSB and how standards meet investor information needs."
                        ],
                        "checklists": [
                            "Memorize 5 IESBA ethical principles and threats/safeguards",
                            "Review ICAB bye-laws regarding disciplinary procedures",
                            "Understand basic scope of IFRS S1 General Requirements"
                        ]
                    }
                ]
            },
            {
                "id": "c1-s2",
                "title": "Area 2: Maintaining Financial Records",
                "weightage": "20%",
                "description": "Double-entry bookkeeping techniques, books of prime entry, ledger accounting, and transaction recording.",
                "nodes": [
                    {
                        "id": "c1-s2-n1",
                        "name": "Double Entry Techniques & Prime Entry",
                        "code": "C1.2.1",
                        "category": "Technical Procedure",
                        "weightage": "10%",
                        "description": "Why entities maintain financial records; sources of financial information; sales, purchases, cash books, petty cash and general journals.",
                        "topics": [
                            "Purpose of maintaining records: Stewardship, tax compliance, management control",
                            "Books of prime entry: Sales daybook, Purchases daybook, Returns daybooks",
                            "Cash book, two-column and three-column formats, Petty cash imprest system",
                            "General journal entries for non-routine transactions",
                            "Trade discounts vs cash discounts recording"
                        ],
                        "learningOutcomes": [
                            "Specify why entities maintain financial records and prepare statements.",
                            "Identify sources of information for accounting records.",
                            "Record transactions across prime books into general ledger."
                        ],
                        "checklists": [
                            "Solve 15 practical exercises on books of prime entry",
                            "Balance off ledger accounts and extract initial trial balance"
                        ]
                    },
                    {
                        "id": "c1-s2-n2",
                        "name": "Ledger Accounting & Trial Balance",
                        "code": "C1.2.2",
                        "category": "Technical Procedure",
                        "weightage": "10%",
                        "description": "Posting to nominal ledger accounts, receivable/payable control accounts, and extracting initial trial balance.",
                        "topics": [
                            "Nominal ledger architecture: T-accounts, balancing off accounts",
                            "Sales ledger and purchase ledger control accounts and reconciliation",
                            "Trial balance extraction and role as an arithmetical validation check",
                            "Differences not revealed by a trial balance (error of commission, omission, principle, etc.)"
                        ],
                        "learningOutcomes": [
                            "Post transactions accurately to ledger accounts.",
                            "Prepare receivables and payables ledger reconciliations.",
                            "Extract and evaluate a trial balance."
                        ],
                        "checklists": [
                            "Complete control account reconciliation practice problems",
                            "Master identification of trial balance error types"
                        ]
                    }
                ]
            },
            {
                "id": "c1-s3",
                "title": "Area 3: Adjustments to Accounting Records",
                "weightage": "20%",
                "description": "Accruals, prepayments, depreciation, bad debts, inventory valuation, and suspense accounts.",
                "nodes": [
                    {
                        "id": "c1-s3-n1",
                        "name": "Accruals, Prepayments & Depreciation",
                        "code": "C1.3.1",
                        "category": "Practical Computation",
                        "weightage": "10%",
                        "description": "Year-end period adjustments for revenue and expenses; property, plant and equipment depreciation methods (straight-line, reducing balance).",
                        "topics": [
                            "Matching concept and accruals / prepayments calculations",
                            "Property, plant and equipment (IAS 16) capitalization criteria",
                            "Depreciation calculation: Straight-line vs reducing balance methods",
                            "Disposal of non-current assets and profit/loss on disposal",
                            "Asset registers and reconciliation with ledger accounts"
                        ],
                        "learningOutcomes": [
                            "Calculate and record year-end accruals and prepayments.",
                            "Compute depreciation charges and maintain asset schedules.",
                            "Account for non-current asset disposals and part-exchanges."
                        ],
                        "checklists": [
                            "Practice 10 complex multi-period depreciation questions",
                            "Solve combined accruals and prepayments ledger problems"
                        ]
                    },
                    {
                        "id": "c1-s3-n2",
                        "name": "Bad Debts, Inventory & Suspense Accounts",
                        "code": "C1.3.2",
                        "category": "Practical Computation",
                        "weightage": "10%",
                        "description": "Allowance for doubtful debts, inventory valuation under IAS 2 (lower of cost and NRV), and correcting errors via suspense accounts.",
                        "topics": [
                            "Irrecoverable debts write-off and allowance for receivables",
                            "Inventory valuation under IAS 2: Cost determination (FIFO vs Weighted Average)",
                            "Net Realizable Value (NRV) write-downs and damaged stock adjustments",
                            "Suspense account creation, error classification, and journal adjustments",
                            "Impact of errors on reported profit and statement of financial position"
                        ],
                        "learningOutcomes": [
                            "Calculate allowance for doubtful debts and record adjustments.",
                            "Value closing inventory applying lower of cost and NRV rule.",
                            "Correct trial balance errors using suspense accounts and evaluate profit impact."
                        ],
                        "checklists": [
                            "Solve 5 comprehensive suspense account correction problems",
                            "Practice inventory valuation under FIFO and AVCO"
                        ]
                    }
                ]
            },
            {
                "id": "c1-s4",
                "title": "Area 4: Preparing Financial Statements",
                "weightage": "40%",
                "description": "Preparation of financial statements for sole traders, partnerships, and limited liability companies under IFRS/BFRS.",
                "nodes": [
                    {
                        "id": "c1-s4-n1",
                        "name": "Sole Trader & Partnership Financial Statements",
                        "code": "C1.4.1",
                        "category": "Financial Statements",
                        "weightage": "18%",
                        "description": "Preparation of Statement of Profit or Loss and Statement of Financial Position for sole proprietorships and partnerships, including partnership appropriation accounts.",
                        "topics": [
                            "Sole trader final accounts: Trading, profit or loss, and balance sheet extracts",
                            "Partnership profit sharing: Interest on capital, interest on drawings, partner salaries",
                            "Partnership appropriation account and partner current/capital accounts",
                            "Admission of a partner, retirement, and goodwill adjustments at certificate level"
                        ],
                        "learningOutcomes": [
                            "Prepare sole trader financial statements from adjusted trial balance.",
                            "Draft partnership appropriation accounts and allocate net profit.",
                            "Maintain partner capital and current accounts."
                        ],
                        "checklists": [
                            "Draft 3 full sole trader financial statements from raw trial balance",
                            "Solve 3 complete partnership profit allocation scenarios"
                        ]
                    },
                    {
                        "id": "c1-s4-n2",
                        "name": "Limited Company Financial Statements (IAS 1)",
                        "code": "C1.4.2",
                        "category": "Financial Statements",
                        "weightage": "22%",
                        "description": "Preparation of Statement of Profit or Loss, Statement of Financial Position, and Statement of Changes in Equity for limited liability companies.",
                        "topics": [
                            "Components of complete financial statements under IAS 1",
                            "Share capital, share premium, retained earnings and other reserves",
                            "Taxation in company accounts (current tax provision)",
                            "Statement of Profit or Loss format (Cost of sales, administrative, distribution expenses)",
                            "Statement of Financial Position presentation (Current vs Non-current classification)",
                            "Statement of Changes in Equity (SOCIE) preparation and dividend accounting"
                        ],
                        "learningOutcomes": [
                            "Specify the components of financial statements under IAS 1.",
                            "Prepare Statement of Profit or Loss and Statement of Financial Position for limited companies.",
                            "Construct Statement of Changes in Equity and account for share issues/dividends."
                        ],
                        "checklists": [
                            "Complete 5 comprehensive limited company final accounts questions",
                            "Review IAS 1 presentation formats and disclosure requirements"
                        ]
                    }
                ]
            },
            {
                "id": "c1-s5",
                "title": "Area 5: Public Financial Management (PFM)",
                "weightage": "5%",
                "description": "Public sector characteristics, budget systems, IPSAS overview, and public sector accounting in Bangladesh.",
                "nodes": [
                    {
                        "id": "c1-s5-n1",
                        "name": "Public Sector Accounting & IFMIS",
                        "code": "C1.5.1",
                        "category": "Public Sector",
                        "weightage": "5%",
                        "description": "Differences between public and private sectors; legal framework for PFM; national budget preparation in Bangladesh; fund accounting; overview of IPSAS; Integrated Financial Management Information System (iBAS++).",
                        "topics": [
                            "Characteristics of public sector vs private sector accountability",
                            "Legal and administrative framework for PFM in Bangladesh",
                            "Budget preparation steps, budget classification code (BACS), and fiscal reporting",
                            "Fund accounting principles in government organizations",
                            "Introduction to International Public Sector Accounting Standards (IPSAS)",
                            "Integrated Financial Management Information System (iBAS++ / IFMIS)"
                        ],
                        "learningOutcomes": [
                            "Differentiate public sector financial governance from commercial entities.",
                            "Explain the budget preparation process and classification codes in Bangladesh.",
                            "Explain the role and architecture of IFMIS/iBAS++."
                        ],
                        "checklists": [
                            "Review government budgeting steps and BACS coding structure",
                            "Understand key differences between cash basis and accrual basis IPSAS"
                        ]
                    }
                ]
            }
        ]
    },

    # Certificate Level - C2 Assurance
    {
        "code": "c2",
        "paperCode": "C2",
        "title": "ICAB C2 - Assurance",
        "name": "Assurance",
        "level": "Certificate Level",
        "category": "Certificate Level Papers",
        "marks": 100,
        "duration": "1.5 Hours",
        "format": "Computer-Based Assessment (Objective & Scenario Questions)",
        "summary": "Explains the concept, purpose and legal framework of assurance, internal controls, obtaining evidence, and professional ethics and acceptance under ISA.",
        "tags": ["Certificate Level", "Core Exam", "Study Tracker", "Audit", "Assurance", "Internal Controls"],
        "stages": [
            {
                "id": "c2-s1",
                "title": "Area 1: Concept, Process & Need for Assurance",
                "weightage": "20%",
                "description": "Five elements of assurance, levels of assurance (reasonable vs limited), and statutory audit requirements.",
                "nodes": [
                    {
                        "id": "c2-s1-n1",
                        "name": "Assurance Framework & Audit Demand",
                        "code": "C2.1.1",
                        "category": "Core Theory",
                        "weightage": "20%",
                        "description": "Definition of assurance engagement, the 5 elements (three parties, subject matter, criteria, evidence, written report), reasonable vs limited assurance, audit expectations gap, and benefits of assurance.",
                        "topics": [
                            "Definition and objectives of assurance under IAASB Framework",
                            "The 5 elements of an assurance engagement",
                            "Reasonable assurance (audit) vs Limited assurance (review)",
                            "Inherent limitations of audit: Sampling, human error, collusive fraud, estimates",
                            "The expectations gap: Audit role vs public misconception",
                            "Statutory audit requirements under Bangladesh Companies Act 1994"
                        ],
                        "learningOutcomes": [
                            "Identify the 5 elements of an assurance engagement.",
                            "Distinguish between reasonable and limited assurance conclusions.",
                            "Recognise the inherent limitations of assurance."
                        ],
                        "checklists": [
                            "Master 5 elements diagram and criteria definition",
                            "Review statutory audit appointment rules under Companies Act"
                        ]
                    }
                ]
            },
            {
                "id": "c2-s2",
                "title": "Area 2: Internal Controls & Information Flows",
                "weightage": "25%",
                "description": "Internal control components (COSO), transaction cycles, IT controls, and deficiencies.",
                "nodes": [
                    {
                        "id": "c2-s2-n1",
                        "name": "Internal Control Framework & IT Controls",
                        "code": "C2.2.1",
                        "category": "Governance & Control",
                        "weightage": "25%",
                        "description": "Five components of internal control (Control environment, Risk assessment, Control activities, Information & communication, Monitoring); General IT controls vs Application controls; Revenue, Purchases, and Payroll transaction cycles.",
                        "topics": [
                            "COSO Internal Control components and auditor evaluation",
                            "Control activities: Authorization, Segregation of duties, Physical, Reconciliations",
                            "General IT controls (access security, backups, change management)",
                            "Application IT controls (input checks, batch totals, sequence checks)",
                            "Sales and revenue cycle controls and testing",
                            "Purchases and payments cycle controls and segregation",
                            "Payroll system controls and employee verification",
                            "Identifying internal control deficiencies and management letter recommendations"
                        ],
                        "learningOutcomes": [
                            "Explain the 5 components of internal control.",
                            "Differentiate general IT controls from application controls.",
                            "Evaluate internal controls across sales, purchases, and payroll cycles.",
                            "Draft control deficiency recommendations."
                        ],
                        "checklists": [
                            "Analyze sales and purchases cycle control flowcharts",
                            "Practice identifying control weaknesses in 5 case scenarios"
                        ]
                    }
                ]
            },
            {
                "id": "c2-s3",
                "title": "Area 3: Gathering Evidence on Engagements",
                "weightage": "35%",
                "description": "Financial statement assertions, audit procedures (AEIOU), substantive testing, and documentation.",
                "nodes": [
                    {
                        "id": "c2-s3-n1",
                        "name": "Audit Procedures, Assertions & Testing",
                        "code": "C2.3.1",
                        "category": "Audit Procedures",
                        "weightage": "35%",
                        "description": "Sufficient appropriate audit evidence (relevance and reliability); management assertions for classes of transactions and account balances; audit procedures: Analytical, Enquiry, Inspection, Observation, Recalculation/Reperformance (AEIOU); test of controls vs substantive testing; sampling fundamentals; audit working papers.",
                        "topics": [
                            "Sufficient appropriate evidence: Quality vs quantity, reliability hierarchy",
                            "Management assertions: Occurrence, Completeness, Accuracy, Cut-off, Classification, Existence, Rights & Obligations, Valuation & Allocation",
                            "Audit procedures (AEIOU): Inspection, Observation, External confirmation, Recalculation, Reperformance, Analytical procedures, Inquiry",
                            "Substantive testing for Tangible Assets, Inventory, Receivables, Payables, Cash",
                            "Bank confirmation letters and direct receivables circularisation",
                            "Inventory count attendance procedures (ISA 501)",
                            "Audit documentation: Working papers, retention, and confidentiality"
                        ],
                        "learningOutcomes": [
                            "Map audit procedures to specific financial statement assertions.",
                            "Evaluate the reliability of internal vs external evidence.",
                            "Design substantive audit tests for assets, liabilities, income, and expenses."
                        ],
                        "checklists": [
                            "Memorize all 8 audit assertions for P&L and Balance Sheet",
                            "Draft substantive audit program for inventory valuation and receivables",
                            "Practice bank reconciliation audit procedures"
                        ]
                    }
                ]
            },
            {
                "id": "c2-s4",
                "title": "Area 4: Professional Ethics & Acceptance",
                "weightage": "20%",
                "description": "IESBA Code of Ethics, ethical threats and safeguards, client acceptance, engagement letters, and reporting.",
                "nodes": [
                    {
                        "id": "c2-s4-n1",
                        "name": "Professional Ethics, Threats & Acceptance",
                        "code": "C2.4.1",
                        "category": "Ethics & Compliance",
                        "weightage": "20%",
                        "description": "Ethical threats (Self-interest, Self-review, Advocacy, Familiarity, Intimidation); safeguards; independence requirements; client acceptance and continuance checks; money laundering procedures; engagement letters (ISA 210); unmodified vs modified audit reports.",
                        "topics": [
                            "Fundamental principles: Integrity, Objectivity, Competence, Confidentiality, Behaviour",
                            "The 5 ethical threats and concrete safeguards in assurance",
                            "Auditor independence of mind and appearance",
                            "Client onboarding checks: Integrity, competence, legal capacity, AML/KYC",
                            "Communication with predecessor auditor (professional clearance)",
                            "Engagement letters: Purpose, contents, and agreement of terms (ISA 210)",
                            "Overview of auditor reporting: Unmodified report structure vs modifications"
                        ],
                        "learningOutcomes": [
                            "Identify ethical threats and formulate appropriate safeguards.",
                            "Evaluate acceptance of new assurance engagements.",
                            "Explain the purpose and key contents of an engagement letter."
                        ],
                        "checklists": [
                            "Practice 15 scenario questions on ethical threats and safeguards",
                            "Review standard engagement letter clauses under ISA 210"
                        ]
                    }
                ]
            }
        ]
    },

    # Certificate Level - C3 Business, Technology and Finance
    {
        "code": "c3",
        "paperCode": "C3",
        "title": "ICAB C3 - Business, Technology and Finance",
        "name": "Business, Technology and Finance",
        "level": "Certificate Level",
        "category": "Certificate Level Papers",
        "marks": 100,
        "duration": "1.5 Hours",
        "format": "Computer-Based Assessment (Objective & Scenario Questions)",
        "summary": "Introduces business operations, organisational design, financial markets, strategic management, corporate governance, CSR, and digital transformation.",
        "tags": ["Certificate Level", "Core Exam", "Study Tracker", "Business Strategy", "Technology", "Finance"],
        "stages": [
            {
                "id": "c3-s1",
                "title": "Area 1: Business Objectives & Functions",
                "weightage": "10%",
                "description": "Business purpose, mission, stakeholder theory, and core operational functions.",
                "nodes": [
                    {
                        "id": "c3-s1-n1",
                        "name": "Business Purpose, Stakeholders & Functions",
                        "code": "C3.1.1",
                        "category": "Business Management",
                        "weightage": "10%",
                        "description": "What is a business; primary and secondary objectives; profit-seeking vs non-profit; Mendelow's stakeholder matrix; core business functions: Operations, Marketing, HR, IT, and Finance.",
                        "topics": [
                            "Business definitions, mission statements, vision and values",
                            "Stakeholder identification and Mendelow's Power-Interest matrix",
                            "Core functional areas: Marketing mix (4Ps/7Ps), Operations management, Supply chain",
                            "Human Resource Management: Recruitment, appraisal, and labor regulations",
                            "Coordination between business functions to deliver customer value"
                        ],
                        "learningOutcomes": [
                            "Analyze organizational objectives and stakeholder expectations.",
                            "Apply Mendelow's matrix to categorize stakeholder influence.",
                            "Describe how core business functions interact."
                        ],
                        "checklists": [
                            "Review stakeholder power/interest mapping",
                            "Summarize marketing 7Ps and supply chain concepts"
                        ]
                    }
                ]
            },
            {
                "id": "c3-s2",
                "title": "Area 2: Business & Organisational Structures",
                "weightage": "15%",
                "description": "Organisational design, centralization vs decentralization, Mintzberg's configurations.",
                "nodes": [
                    {
                        "id": "c3-s2-n1",
                        "name": "Organisational Structures & Design",
                        "code": "C3.2.1",
                        "category": "Organisational Behaviour",
                        "weightage": "15%",
                        "description": "Management hierarchy, authority, power, delegation, span of control; functional, divisional, matrix and boundaryless structures; Mintzberg's five organisational configurations; shared service centres and outsourcing.",
                        "topics": [
                            "Power, authority, responsibility, and accountability definitions",
                            "Tall vs flat organizational structures and span of control",
                            "Functional, divisional, matrix, and project-based structures",
                            "Mintzberg's 5 organizational building blocks and configurations",
                            "Centralization vs decentralization trade-offs",
                            "Shared service centers, outsourcing, and offshoring models"
                        ],
                        "learningOutcomes": [
                            "Evaluate advantages and disadvantages of various organizational structures.",
                            "Apply Mintzberg's organizational configuration models.",
                            "Assess structural fit with strategic objectives."
                        ],
                        "checklists": [
                            "Draw matrix and divisional structure comparison diagrams",
                            "Learn Mintzberg's 5 organizational components"
                        ]
                    }
                ]
            },
            {
                "id": "c3-s3",
                "title": "Area 3: The Role of Finance & Financial Markets",
                "weightage": "20%",
                "description": "Finance function structure, capital markets, banking system, and sources of finance.",
                "nodes": [
                    {
                        "id": "c3-s3-n1",
                        "name": "Finance Function & Financial Markets",
                        "code": "C3.3.1",
                        "category": "Financial Markets",
                        "weightage": "20%",
                        "description": "Role of the finance function: Treasury, financial accounting, management accounting; the banking system and Bangladesh Bank; money markets vs capital markets; equity, debt, Islamic finance (Sukuk, Murabaha); SME financing options.",
                        "topics": [
                            "Key responsibilities of the modern finance function",
                            "Financial intermediaries, central banking role of Bangladesh Bank",
                            "Money markets (Treasury bills, commercial paper) vs Capital markets (Shares, bonds)",
                            "Stock exchanges: Dhaka Stock Exchange (DSE) and Chittagong Stock Exchange (CSE)",
                            "Short-term vs long-term sources of business finance",
                            "Islamic finance principles and key contracts: Murabaha, Ijara, Mudaraba, Sukuk",
                            "Microfinance, angel investing, and venture capital for SMEs in Bangladesh"
                        ],
                        "learningOutcomes": [
                            "Explain the structure and responsibilities of the finance function.",
                            "Differentiate money market and capital market instruments in Bangladesh.",
                            "Compare conventional finance with Islamic financial contracts."
                        ],
                        "checklists": [
                            "Study DSE and capital market structure",
                            "Compare equity vs debt financing pros and cons",
                            "Review Islamic finance terminology"
                        ]
                    }
                ]
            },
            {
                "id": "c3-s4",
                "title": "Area 4: External Environment of Business",
                "weightage": "15%",
                "description": "PESTEL environmental analysis, Porter's Five Forces, macroeconomic policy.",
                "nodes": [
                    {
                        "id": "c3-s4-n1",
                        "name": "PESTEL Analysis & Industry Competitiveness",
                        "code": "C3.4.1",
                        "category": "Strategic Analysis",
                        "weightage": "15%",
                        "description": "PESTEL framework (Political, Economic, Social, Technological, Environmental, Legal); macroeconomic policies (fiscal, monetary, inflation, interest rates, exchange rates); Porter's Five Forces industry analysis.",
                        "topics": [
                            "Macro-environmental scanning using PESTEL",
                            "Fiscal policy, government expenditure, taxation, and budget deficits",
                            "Monetary policy, interest rate transmission, and foreign exchange reserves",
                            "Demographic trends and socio-cultural shifts in emerging markets",
                            "Porter's Five Forces: Buyer power, supplier power, substitutes, new entrants, rivalry",
                            "Competitor analysis and industry life cycle phases"
                        ],
                        "learningOutcomes": [
                            "Conduct a PESTEL analysis for a commercial enterprise.",
                            "Explain how fiscal and monetary policy decisions affect businesses.",
                            "Apply Porter's Five Forces to evaluate industry attractiveness."
                        ],
                        "checklists": [
                            "Practice PESTEL breakdown on a Bangladesh textile or fintech firm",
                            "Map Porter's 5 forces for local pharmaceutical industry"
                        ]
                    }
                ]
            },
            {
                "id": "c3-s5",
                "title": "Area 5: Governance, Ethics & CSR",
                "weightage": "15%",
                "description": "Corporate governance codes, agency theory, board structures, ethical culture, and CSR.",
                "nodes": [
                    {
                        "id": "c3-s5-n1",
                        "name": "Corporate Governance & Sustainability",
                        "code": "C3.5.1",
                        "category": "Ethics & Governance",
                        "weightage": "15%",
                        "description": "Agency theory and conflict of interest; role of the Board of Directors, NEDs, and Audit Committee; BSEC Corporate Governance Code; corporate social responsibility (CSR); sustainability reporting frameworks.",
                        "topics": [
                            "Separation of ownership and control (Agency problem)",
                            "Corporate governance principles: Fairness, Transparency, Accountability, Responsibility",
                            "Board composition: Executive vs Independent Non-Executive Directors (NEDs)",
                            "Role of board committees: Audit, Nomination, Remuneration",
                            "BSEC Corporate Governance Code requirements for listed companies in Bangladesh",
                            "Corporate Social Responsibility (CSR) and stakeholder engagement",
                            "Triple Bottom Line (People, Planet, Profit) and UN SDGs"
                        ],
                        "learningOutcomes": [
                            "Explain the agency theory and governance mechanisms to protect shareholders.",
                            "State the requirements of BSEC Corporate Governance Code.",
                            "Describe how CSR and sustainability impact long-term corporate value."
                        ],
                        "checklists": [
                            "Review key provisions of BSEC Corporate Governance Code 2018",
                            "Summarize duties and independence requirements of Audit Committee"
                        ]
                    }
                ]
            },
            {
                "id": "c3-s6",
                "title": "Area 6: Technology, Data Analysis & Digitalization",
                "weightage": "25%",
                "description": "Cloud computing, Big Data, AI, automation, cybersecurity, and digital business models.",
                "nodes": [
                    {
                        "id": "c3-s6-n1",
                        "name": "Digital Transformation & Data Analytics",
                        "code": "C3.6.1",
                        "category": "Technology & AI",
                        "weightage": "25%",
                        "description": "Digital disruption and business model innovation (e-commerce, platforms, FinTech); Big Data characteristics (5Vs); Artificial Intelligence, Machine Learning and Robotic Process Automation (RPA) in business; cloud services (SaaS, PaaS, IaaS); cybersecurity threats and data protection fundamentals.",
                        "topics": [
                            "Digital business models: E-commerce, platform ecosystems, subscription economy",
                            "Big Data analytics: Volume, Velocity, Variety, Veracity, Value",
                            "AI and Machine Learning applications in accounting, auditing, and forecasting",
                            "Robotic Process Automation (RPA) for routine finance operations",
                            "Cloud computing architectures and benefits/risks for enterprise systems",
                            "Cybersecurity threats: Phishing, ransomware, data breaches, and controls",
                            "Data privacy, Bangladesh Cyber Security Act, and ethical use of customer data"
                        ],
                        "learningOutcomes": [
                            "Explain how emerging technologies transform business models and finance operations.",
                            "Identify the business value and risks of Big Data and Artificial Intelligence.",
                            "Recognize cybersecurity threats and essential enterprise control measures."
                        ],
                        "checklists": [
                            "Learn the 5Vs of Big Data and their business applications",
                            "Understand Cloud deployment models (Public, Private, Hybrid)",
                            "Review Cyber Security Act data protection obligations"
                        ]
                    }
                ]
            }
        ]
    },

    # Certificate Level - C4 Management Information
    {
        "code": "c4",
        "paperCode": "C4",
        "title": "ICAB C4 - Management Information",
        "name": "Management Information",
        "level": "Certificate Level",
        "category": "Certificate Level Papers",
        "marks": 100,
        "duration": "1.5 Hours",
        "format": "Computer-Based Assessment (Objective & Scenario Questions)",
        "summary": "Covers cost accounting, absorption vs marginal costing, pricing, budgeting, variance analysis, performance management, capital investment appraisal, and data analysis.",
        "tags": ["Certificate Level", "Core Exam", "Study Tracker", "Management Accounting", "Costing", "Budgeting"],
        "stages": [
            {
                "id": "c4-s1",
                "title": "Area 1: Costing and Pricing",
                "weightage": "20%",
                "description": "Cost classification, absorption costing, marginal costing, pricing strategies.",
                "nodes": [
                    {
                        "id": "c4-s1-n1",
                        "name": "Cost Classification, Absorption & Marginal Costing",
                        "code": "C4.1.1",
                        "category": "Cost Accounting",
                        "weightage": "20%",
                        "description": "Direct vs indirect, fixed vs variable costs; overhead absorption rates (OAR), under/over absorption; Marginal Costing vs Absorption Costing profit reconciliation; pricing methods (cost-plus, target, skimming, penetration).",
                        "topics": [
                            "Cost classification by nature, function, behavior, and decision relevance",
                            "Overhead allocation, apportionment, and absorption rates",
                            "Calculation and ledger treatment of under- and over-absorbed overheads",
                            "Marginal costing principles, contribution calculation, and CVP analysis",
                            "Reconciliation of absorption costing and marginal costing profit due to stock changes",
                            "Pricing strategies: Full-cost plus, marginal-cost plus, price skimming, market penetration"
                        ],
                        "learningOutcomes": [
                            "Classify costs and calculate overhead absorption rates.",
                            "Compare profit statements under marginal and absorption costing.",
                            "Calculate selling prices using various pricing strategies."
                        ],
                        "checklists": [
                            "Solve 5 profit reconciliation problems between absorption and marginal costing",
                            "Calculate predetermined OAR across multiple production cost centers"
                        ]
                    }
                ]
            },
            {
                "id": "c4-s2",
                "title": "Area 2: Budgeting and Forecasting",
                "weightage": "25%",
                "description": "Forecasting techniques, functional budgets, cash budgeting, and flexed budgets.",
                "nodes": [
                    {
                        "id": "c4-s2-n1",
                        "name": "Budget Preparation, Cash Budgets & Flexing",
                        "code": "C4.2.1",
                        "category": "Budgeting",
                        "weightage": "25%",
                        "description": "High-low method, regression and time series analysis; principal budget factor; sales, production, materials and labor budgets; master budget; cash budgeting; fixed vs flexible budgets.",
                        "topics": [
                            "Forecasting techniques: High-low method, moving averages, time series decomposition",
                            "Use of spreadsheets and data analytics in budgeting",
                            "Principal budget factor identification and functional budget preparation order",
                            "Sales, production, raw materials usage and purchases budgets",
                            "Labor and overhead budgets, preparation of master budget",
                            "Cash flow forecasting and monthly cash budget preparation",
                            "Fixed budgets vs flexed budgets for valid performance appraisal"
                        ],
                        "learningOutcomes": [
                            "Forecast revenues and costs using high-low and time-series techniques.",
                            "Construct comprehensive functional budgets and cash forecasts.",
                            "Prepare flexed budgets based on actual activity levels."
                        ],
                        "checklists": [
                            "Construct a 6-month rolling cash budget with timing delays",
                            "Flex a budget for 3 different volume scenarios"
                        ]
                    }
                ]
            },
            {
                "id": "c4-s3",
                "title": "Area 3: Performance Management & Variance Analysis",
                "weightage": "25%",
                "description": "Standard costing, calculation of variances, operating statements, and divisional performance.",
                "nodes": [
                    {
                        "id": "c4-s3-n1",
                        "name": "Standard Costing & Variance Analysis",
                        "code": "C4.3.1",
                        "category": "Variance Analysis",
                        "weightage": "25%",
                        "description": "Establishing standard costs; sales price and volume variances; material price and usage variances; labor rate, efficiency, and idle time variances; overhead variances; operating statement reconciliation; ROI and RI for divisional performance.",
                        "topics": [
                            "Purpose of standard costing and types of standards (ideal, attainable, basic, current)",
                            "Sales variances: Price variance and volume variance",
                            "Direct material variances: Price variance and usage variance",
                            "Direct labor variances: Rate variance, efficiency variance, and idle time variance",
                            "Variable overhead expenditure and efficiency variances",
                            "Fixed overhead expenditure and volume variances",
                            "Preparation of standard cost operating statements reconciling budgeted and actual profit",
                            "Divisional performance metrics: Return on Investment (ROI) vs Residual Income (RI)"
                        ],
                        "learningOutcomes": [
                            "Calculate all standard cost variances and identify operational causes.",
                            "Reconcile budgeted profit to actual profit in an operating statement.",
                            "Evaluate investment centers using ROI and Residual Income."
                        ],
                        "checklists": [
                            "Master formulas for all 10 standard cost variances",
                            "Draft 2 full profit reconciliation statements with all variances"
                        ]
                    }
                ]
            },
            {
                "id": "c4-s4",
                "title": "Area 4: Management Decision Making",
                "weightage": "20%",
                "description": "Breakeven analysis, limiting factor decisions, make or buy, shutdown decisions.",
                "nodes": [
                    {
                        "id": "c4-s4-n1",
                        "name": "CVP Analysis & Short-term Decisions",
                        "code": "C4.4.1",
                        "category": "Decision Science",
                        "weightage": "20%",
                        "description": "Cost-Volume-Profit (CVP) analysis, break-even point, margin of safety, target profit; single limiting factor decisions; make-or-buy decisions; shutdown or continuation of segments; relevant costing principles.",
                        "topics": [
                            "CVP analysis assumptions and multi-product break-even charts",
                            "Break-even volume, break-even revenue, and margin of safety calculations",
                            "Single limiting factor analysis: Contribution per unit of scarce resource",
                            "Make-or-buy decisions and optimal product mix determination",
                            "Relevant costs: Opportunity costs, avoidable costs, sunk costs",
                            "Special order acceptance and minimum pricing decisions"
                        ],
                        "learningOutcomes": [
                            "Calculate break-even points, contribution-to-sales ratios, and margins of safety.",
                            "Determine optimal production schedules under resource constraints.",
                            "Apply relevant costing to make-or-buy and special pricing decisions."
                        ],
                        "checklists": [
                            "Solve 4 scarce resource ranking and allocation problems",
                            "Review relevant vs non-relevant cost rules"
                        ]
                    }
                ]
            },
            {
                "id": "c4-s5",
                "title": "Area 5: Technology & Data in Management Accounting",
                "weightage": "10%",
                "description": "Data analytics, spreadsheet modeling, ERP integration, and ethical data governance.",
                "nodes": [
                    {
                        "id": "c4-s5-n1",
                        "name": "Digital Management Information & BI",
                        "code": "C4.5.1",
                        "category": "Management Information Systems",
                        "weightage": "10%",
                        "description": "Role of Management Information Systems (MIS); data extraction, transformation and loading (ETL); business intelligence dashboards; sensitivity analysis using spreadsheet tools; data integrity and ethics in reporting.",
                        "topics": [
                            "Role of enterprise resource planning (ERP) systems in management accounting",
                            "Business intelligence (BI) tools: Power BI, Tableau for executive KPI dashboards",
                            "Spreadsheet modeling techniques: What-if analysis, Goal seek, Scenario manager",
                            "Data security, validation controls, and error prevention in financial models",
                            "Ethical obligations when presenting management information to leadership"
                        ],
                        "learningOutcomes": [
                            "Explain how modern MIS and BI tools enhance managerial decision-making.",
                            "Apply spreadsheet sensitivity analysis to cost models.",
                            "Ensure accuracy, objectivity, and ethical presentation of operational reports."
                        ],
                        "checklists": [
                            "Review key Excel financial modeling functions (XLOOKUP, SUMIFS, What-If)",
                            "Understand data governance rules in management reporting"
                        ]
                    }
                ]
            }
        ]
    },

    # Certificate Level - C5 Principles of Taxation
    {
        "code": "c5",
        "paperCode": "C5",
        "title": "ICAB C5 - Principles of Taxation",
        "name": "Principles of Taxation",
        "level": "Certificate Level",
        "category": "Certificate Level Papers",
        "marks": 100,
        "duration": "1.5 Hours",
        "format": "Computer-Based Assessment (Objective & Scenario Questions)",
        "summary": "Comprehensive coverage of Bangladesh Income Tax Act 2023, individual tax computation, company tax, TDS, tax accounting, and Value Added Tax and Supplementary Duty Act 2012.",
        "tags": ["Certificate Level", "Core Exam", "Study Tracker", "Taxation", "Income Tax Act 2023", "VAT Act 2012"],
        "stages": [
            {
                "id": "c5-s1",
                "title": "Area 1: Income Tax Principles & Administration",
                "weightage": "15%",
                "description": "Income Tax Act 2023 framework, residential status, scope of income, NBR organization.",
                "nodes": [
                    {
                        "id": "c5-s1-n1",
                        "name": "Income Tax Act 2023 Framework & Residential Status",
                        "code": "C5.1.1",
                        "category": "Tax Law",
                        "weightage": "15%",
                        "description": "Objective of taxation, tax incidence, shifting; National Board of Revenue (NBR) structure; assessment year vs income year; definition of resident and non-resident individuals; scope of total income based on residence.",
                        "topics": [
                            "Constitutional basis and objectives of taxation in Bangladesh",
                            "Income Tax Act 2023 structure, definitions, and key concepts",
                            "National Board of Revenue (NBR), Taxes Appellate Tribunal, and tax authorities",
                            "Income Year vs Assessment Year distinctions",
                            "Residential status test for individuals (182-day rule and 90+365 day rule)",
                            "Residential status of companies, firms, and associations of persons (AOP)",
                            "Scope of income: Worldwide income vs Bangladesh-source income"
                        ],
                        "learningOutcomes": [
                            "Determine the residential status of individual and corporate taxpayers.",
                            "Identify total taxable income scope based on residential status.",
                            "Explain the administrative structure and powers of the NBR."
                        ],
                        "checklists": [
                            "Practice 10 residential status determination problems",
                            "Memorize assessment year vs income year timelines under ITA 2023"
                        ]
                    }
                ]
            },
            {
                "id": "c5-s2",
                "title": "Area 2: Computation of Income Tax (Individuals & Companies)",
                "weightage": "40%",
                "description": "Heads of income: Salary, Rent, Business, Capital Gains, Financial Assets, and tax calculation.",
                "nodes": [
                    {
                        "id": "c5-s2-n1",
                        "name": "Heads of Income & Individual Tax Computation",
                        "code": "C5.2.1",
                        "category": "Tax Computation",
                        "weightage": "20%",
                        "description": "Income from employment (Section 32/33); Income from rent; Income from business; Capital gains; Income from financial assets; allowable deductions; personal income tax slabs, rebates, and surcharge.",
                        "topics": [
                            "Income from employment: Basic salary, allowances, perquisites, exemptions (1/3rd or Tk 450,000)",
                            "Income from house property: Annual value calculation, allowable repairs and maintenance deductions",
                            "Income from agricultural property and other sources",
                            "Capital gains computation: Realization, exemptions, and tax rates",
                            "Investment tax rebate under Section 78: Eligible investments and rebate rate calculation",
                            "Individual tax rate slabs, minimum tax based on city corporation location, and wealth surcharge"
                        ],
                        "learningOutcomes": [
                            "Calculate net taxable income under each statutory head of income.",
                            "Determine gross tax liability, investment tax rebates, and net tax payable for individuals.",
                            "Compute wealth surcharge based on net wealth thresholds."
                        ],
                        "checklists": [
                            "Solve 4 comprehensive individual income tax calculation questions",
                            "Review allowable perquisites and salary exemptions under ITA 2023"
                        ]
                    },
                    {
                        "id": "c5-s2-n2",
                        "name": "Company Tax Computation & Allowable Deductions",
                        "code": "C5.2.2",
                        "category": "Corporate Tax",
                        "weightage": "20%",
                        "description": "Computation of business income for companies; allowable business expenses (Section 49-55); disallowances (Section 55); tax depreciation vs accounting depreciation; corporate tax rates.",
                        "topics": [
                            "Business profit computation starting from accounting net profit",
                            "Allowable business deductions: Rent, repairs, insurance, employee benefits",
                            "Inadmissible deductions (Section 55): Unapproved gratuity, cash payments over limits, CSR without proof",
                            "Tax depreciation rules: Normal depreciation, initial depreciation, amortisation",
                            "Loss set-off and carry-forward rules (up to 6 consecutive years)",
                            "Corporate tax rates: Listed vs non-listed companies, banks, tobacco, mobile operators",
                            "Minimum tax on gross receipts under Section 163"
                        ],
                        "learningOutcomes": [
                            "Reconcile accounting profit to taxable business income for companies.",
                            "Compute tax depreciation schedules under Third Schedule.",
                            "Calculate corporate tax liability including minimum tax rules."
                        ],
                        "checklists": [
                            "Practice 3 full corporate tax reconciliation adjustments",
                            "Memorize corporate tax rate matrix for listed vs non-listed entities"
                        ]
                    }
                ]
            },
            {
                "id": "c5-s3",
                "title": "Area 3: TDS, Assessment, Filing & Tax Accounting",
                "weightage": "15%",
                "description": "Tax Deducted at Source (TDS), advance tax, return submission, assessment, and deferred tax basics.",
                "nodes": [
                    {
                        "id": "c5-s3-n1",
                        "name": "TDS, Advance Tax, Assessment & Tax Return",
                        "code": "C5.3.1",
                        "category": "Tax Compliance",
                        "weightage": "15%",
                        "description": "Key TDS sections (supply of goods, services, commission, dividends, interest); advance tax payment installments; Tax Day and mandatory return filing requirements; universal self-assessment; tax accounting (IAS 12 basics).",
                        "topics": [
                            "TDS mechanism: Deducting authority obligations, deposit timelines, monthly returns",
                            "Key TDS rates: Contractors (Sec 89), Rent (Sec 109), Professional fees (Sec 102), Dividends",
                            "Advance tax calculation: 4 equal quarterly installments and interest for short payment",
                            "Mandatory requirement to submit return of income (PSR - Proof of Submission of Return)",
                            "Tax Day rules, universal self-assessment (Sec 180), and audit selection criteria",
                            "Tax accounting overview: Current tax liability vs deferred tax concept (IAS 12 introductory)"
                        ],
                        "learningOutcomes": [
                            "Apply TDS rates to various commercial transactions.",
                            "Calculate quarterly advance income tax obligations.",
                            "Explain return submission procedures and consequences of non-compliance."
                        ],
                        "checklists": [
                            "Memorize top 10 TDS rates and section numbers",
                            "Review Proof of Submission of Return (PSR) mandatory services list"
                        ]
                    }
                ]
            },
            {
                "id": "c5-s4",
                "title": "Area 4: Value Added Tax (VAT) & Supplementary Duty",
                "weightage": "30%",
                "description": "VAT and SD Act 2012, registration, input tax credit, VAT withholding (VDS), and return filing.",
                "nodes": [
                    {
                        "id": "c5-s4-n1",
                        "name": "VAT Mechanism, Registration & Standard Rate",
                        "code": "C5.4.1",
                        "category": "Indirect Tax",
                        "weightage": "15%",
                        "description": "Fundamentals of VAT; VAT and SD Act 2012; taxable goods and services; Business Identification Number (BIN) registration; turnover tax vs standard VAT; standard rate (15%) and truncated rates.",
                        "topics": [
                            "Basic concept of VAT as a multi-stage consumption tax",
                            "Taxable supplies, exempt supplies, zero-rated exports",
                            "Mandatory VAT registration thresholds and turnover tax regime",
                            "Application and issuance of 9-digit Business Identification Number (BIN)",
                            "Standard VAT rate (15%), reduced rates (5%, 7.5%, 10%), and specific VAT rates",
                            "Supplementary Duty (SD): Imposition, valuation, and calculation on luxury/sin goods"
                        ],
                        "learningOutcomes": [
                            "Determine VAT registration liability and obtain BIN.",
                            "Calculate Output VAT and Supplementary Duty on commercial transactions.",
                            "Distinguish exempt, zero-rated, standard-rated, and truncated supplies."
                        ],
                        "checklists": [
                            "Review VAT registration thresholds (turnover limits)",
                            "Practice Output VAT calculations with and without Supplementary Duty"
                        ]
                    },
                    {
                        "id": "c5-s4-n2",
                        "name": "Input Tax Credit, VDS & Monthly VAT Return",
                        "code": "C5.4.2",
                        "category": "Indirect Tax Compliance",
                        "weightage": "15%",
                        "description": "Input tax credit (rebate) conditions; VAT Deduction at Source (VDS); mandatory VAT records (Mushak 6.3, 6.5, 6.10); monthly VAT return (Mushak 9.1).",
                        "topics": [
                            "Conditions for claiming Input Tax Credit (Mushak 6.3 invoice, banking channel, 4-tax periods)",
                            "Non-creditable input taxes (vehicles, food, gifts, personal consumption)",
                            "VAT Deduction at Source (VDS): Withholding entities, applicable services, certificate (Mushak 6.6)",
                            "Mandatory VAT books: Purchase register (Mushak 6.1), Sales register (Mushak 6.2), Tax invoice (Mushak 6.3)",
                            "Monthly VAT return submission (Mushak 9.1): Due date (15th of following month), structure, adjustments",
                            "Penalties, late interest, and offenses under VAT and SD Act 2012"
                        ],
                        "learningOutcomes": [
                            "Assess admissibility of input tax credit claims.",
                            "Apply VDS deductions and issue Mushak 6.6 certificates.",
                            "Prepare and file monthly Mushak 9.1 VAT return."
                        ],
                        "checklists": [
                            "Complete a mock Mushak 9.1 VAT return with input rebate adjustments",
                            "Memorize VDS withholding service list and invoice validation rules"
                        ]
                    }
                ]
            }
        ]
    },

    # Certificate Level - C6 Business Laws
    {
        "code": "c6",
        "paperCode": "C6",
        "title": "ICAB C6 - Business Laws",
        "name": "Business Laws",
        "level": "Certificate Level",
        "category": "Certificate Level Papers",
        "marks": 50,
        "duration": "1.0 Hour",
        "format": "Computer-Based Assessment (Objective & Scenario Questions)",
        "summary": "Covers Companies Act 1994, Negotiable Instruments Act 1881, Partnership Act 1932, Contract Act 1872, Sale of Goods Act 1930, and Labour Act 2006.",
        "tags": ["Certificate Level", "Core Exam", "Study Tracker", "Business Law", "Companies Act", "Contracts"],
        "stages": [
            {
                "id": "c6-s1",
                "title": "Area 1: Companies Act 1994",
                "weightage": "15%",
                "description": "Company incorporation, Memorandum & Articles, shares, directors, and basic corporate governance.",
                "nodes": [
                    {
                        "id": "c6-s1-n1",
                        "name": "Company Formation, MoA, AoA & Directors",
                        "code": "C6.1.1",
                        "category": "Corporate Law",
                        "weightage": "15%",
                        "description": "Types of companies (private, public, one person company); incorporation process with RJSC; Memorandum and Articles of Association; doctrine of ultra vires and indoor management; appointment, qualification, and duties of directors; meetings (AGM, EGM) and resolutions.",
                        "topics": [
                            "Classification of companies: Private limited, Public limited, One Person Company (OPC)",
                            "Registration and incorporation steps with RJSC",
                            "Memorandum of Association: Clauses and alteration procedures",
                            "Articles of Association: Regulations, alteration by special resolution",
                            "Doctrine of Ultra Vires and Doctrine of Constructive Notice / Indoor Management",
                            "Directors: Legal position, appointment, disqualification, retirement by rotation",
                            "Company meetings: Statutory meeting, Annual General Meeting (AGM), Extra-ordinary General Meeting (EGM)",
                            "Ordinary and special resolutions, quorum, and voting"
                        ],
                        "learningOutcomes": [
                            "Explain the legal characteristics and incorporation procedures of companies.",
                            "Apply the doctrines of ultra vires and indoor management to contracts.",
                            "Determine legal requirements for directors' appointments and shareholder meetings."
                        ],
                        "checklists": [
                            "Review RJSC incorporation steps and required documentation",
                            "Memorize AGM statutory timeline and notice periods"
                        ]
                    }
                ]
            },
            {
                "id": "c6-s2",
                "title": "Area 2: Negotiable Instruments Act 1881",
                "weightage": "10%",
                "description": "Promissory notes, bills of exchange, cheques, crossing, endorsement, and dishonor under Section 138.",
                "nodes": [
                    {
                        "id": "c6-s2-n1",
                        "name": "Promissory Notes, Bills of Exchange & Cheque Dishonor",
                        "code": "C6.2.1",
                        "category": "Commercial Law",
                        "weightage": "10%",
                        "description": "Definition and characteristics of negotiable instruments; promissory note vs bill of exchange vs cheque; holder and holder in due course; negotiation, endorsement, and crossing of cheques; dishonour of cheques and legal remedies under Section 138.",
                        "topics": [
                            "Essential characteristics of negotiable instruments",
                            "Promissory notes vs Bills of exchange vs Cheques",
                            "Holder in due course: Rights, privileges, and protection",
                            "Endorsement types: Blank, full, restrictive, conditional",
                            "Types of crossing of cheques: General crossing vs Special crossing and protection to paying banker",
                            "Dishonour of cheque for insufficiency of funds (Section 138 NI Act): Legal notice, timelines, and penal consequences"
                        ],
                        "learningOutcomes": [
                            "Distinguish between promissory notes, bills of exchange, and cheques.",
                            "Identify the rights of a holder in due course.",
                            "Explain the legal procedure and notice requirements for cheque dishonor under Section 138."
                        ],
                        "checklists": [
                            "Memorize Section 138 statutory timeline (30 days notice, 30 days filing)",
                            "Practice identifying valid endorsements and crossing types"
                        ]
                    }
                ]
            },
            {
                "id": "c6-s3",
                "title": "Area 3: Partnership Act 1932",
                "weightage": "10%",
                "description": "Partnership nature, mutual rights, duties, dissolution, and effects of non-registration.",
                "nodes": [
                    {
                        "id": "c6-s3-n1",
                        "name": "Partnership Formation, Relations & Dissolution",
                        "code": "C6.3.1",
                        "category": "Commercial Law",
                        "weightage": "10%",
                        "description": "Definition and essential elements of partnership; mutual agency test; rights and duties of partners inter se; implied authority of a partner; position of a minor; dissolution of firm; consequences of non-registration of firm.",
                        "topics": [
                            "Definition of partnership: Agreement, business, profit sharing, mutual agency",
                            "True test of partnership (Section 6 - Cox v. Hickman principle)",
                            "Rights, duties, and liabilities of partners to one another and third parties",
                            "Implied authority of a partner and statutory restrictions",
                            "Admission, retirement, expulsion, and insolvency of a partner",
                            "Position of a minor admitted to benefits of partnership",
                            "Dissolution of a partnership firm by agreement, notice, contingencies, or court order",
                            "Consequences of non-registration of a firm (disability to sue third parties)"
                        ],
                        "learningOutcomes": [
                            "Apply the mutual agency test to identify partnership relationships.",
                            "Determine the extent of a partner's implied authority.",
                            "Explain grounds for dissolution and legal impact of non-registration."
                        ],
                        "checklists": [
                            "Review Section 69 consequences of non-registration",
                            "Analyze court order dissolution grounds under Section 44"
                        ]
                    }
                ]
            },
            {
                "id": "c6-s4",
                "title": "Area 4: Contract Act 1872 & Sale of Goods Act 1930",
                "weightage": "10%",
                "description": "Offer, acceptance, consideration, free consent, breach of contract, conditions and warranties.",
                "nodes": [
                    {
                        "id": "c6-s4-n1",
                        "name": "Contract Essentials, Breach & Sale of Goods",
                        "code": "C6.4.1",
                        "category": "Contract Law",
                        "weightage": "10%",
                        "description": "Essentials of a valid contract (Section 10); offer, acceptance, consideration; capacity to contract; free consent (coercion, undue influence, fraud, misrepresentation, mistake); discharge of contract; remedies for breach of contract (damages); Sale of Goods Act: Sale vs agreement to sell, conditions vs warranties, doctrine of caveat emptor.",
                        "topics": [
                            "Elements of a valid contract: Offer, acceptance, lawful consideration, intention",
                            "Vitiating factors: Coercion, Undue Influence, Fraud, Misrepresentation, Mistake",
                            "Void agreements vs voidable contracts vs illegal agreements",
                            "Discharge of contracts: By performance, agreement, frustration/impossibility, breach",
                            "Remedies for breach of contract: Damages (ordinary, special, nominal), specific performance, injunction",
                            "Sale of Goods Act: Sale vs agreement to sell, transfer of property/risk",
                            "Conditions and Warranties: Implied conditions as to title, description, quality/fitness",
                            "Doctrine of Caveat Emptor (buyer beware) and statutory exceptions"
                        ],
                        "learningOutcomes": [
                            "Evaluate validity of contracts under Contract Act 1872.",
                            "Determine available remedies for contractual breach.",
                            "Distinguish between conditions and warranties in sale of goods."
                        ],
                        "checklists": [
                            "Review Hadley v. Baxendale rule for contractual damages",
                            "List implied conditions under Sale of Goods Act 1930"
                        ]
                    }
                ]
            },
            {
                "id": "c6-s5",
                "title": "Area 5: Labour Act 2006 & Employment Regulations",
                "weightage": "5%",
                "description": "Employment conditions, leave, working hours, misconduct, retrenchment, and workers' participation fund.",
                "nodes": [
                    {
                        "id": "c6-s5-n1",
                        "name": "Employment Conditions, Termination & WPPF",
                        "code": "C6.5.1",
                        "category": "Labour Law",
                        "weightage": "5%",
                        "description": "Classification of workers (permanent, probationer, casual); service book and appointment letter; working hours, overtime, annual leave; termination of employment (discharge, dismissal, retrenchment, lay-off); misconduct disciplinary process; Workers' Profit Participation Fund (WPPF).",
                        "topics": [
                            "Worker classification under Bangladesh Labour Act 2006",
                            "Conditions of employment: Working hours (8h/day, 48h/week), overtime rate (double ordinary wage)",
                            "Leave entitlements: Casual leave, sick leave, annual leave with wages, maternity benefit",
                            "Termination modalities: Retrenchment, discharge, dismissal for misconduct",
                            "Disciplinary proceedings: Charge-sheet, inquiry committee, right of defense",
                            "Workers' Profit Participation Fund (WPPF): Participation fund and welfare fund allocation (5% of net profit)"
                        ],
                        "learningOutcomes": [
                            "Explain statutory working hours and leave entitlements.",
                            "Describe the legal procedure for dismissal on grounds of misconduct.",
                            "State employer obligations regarding WPPF establishment."
                        ],
                        "checklists": [
                            "Memorize misconduct disciplinary inquiry process timeline",
                            "Review maternity benefit calculation and notice rules"
                        ]
                    }
                ]
            }
        ]
    },

    # Certificate Level - C7 Information Technology
    {
        "code": "c7",
        "paperCode": "C7",
        "title": "ICAB C7 - Information Technology",
        "name": "Information Technology",
        "level": "Certificate Level",
        "category": "Certificate Level Papers",
        "marks": 50,
        "duration": "1.0 Hour",
        "format": "Computer-Based Assessment (Objective & Scenario Questions)",
        "summary": "Covers systems analysis and design (SDLC), agile development, cloud computing, enterprise software (ERP), database management, business intelligence, and cybersecurity.",
        "tags": ["Certificate Level", "Core Exam", "Study Tracker", "IT", "SDLC", "Cloud", "Cybersecurity"],
        "stages": [
            {
                "id": "c7-s1",
                "title": "Area 1: Building Information Systems & SDLC",
                "weightage": "15%",
                "description": "System development lifecycle, project governance, feasibility analysis, agile vs waterfall.",
                "nodes": [
                    {
                        "id": "c7-s1-n1",
                        "name": "SDLC, Feasibility Analysis & Agile Methodologies",
                        "code": "C7.1.1",
                        "category": "Systems Development",
                        "weightage": "15%",
                        "description": "Building information systems; project governance and management; business case and feasibility analysis (TELOS: Technical, Economic, Legal, Operational, Schedule); System Development Lifecycle (SDLC) stages: Planning, Analysis, Design, Implementation, Testing, Maintenance; Waterfall vs Agile/Scrum methodologies; system changeover strategies (Direct, Parallel, Pilot, Phased).",
                        "topics": [
                            "System development need identification and business case formulation",
                            "Feasibility study: Technical, Economic, Legal, Operational, Schedule (TELOS)",
                            "SDLC phases: Requirements engineering, architectural design, coding, testing",
                            "Waterfall model vs Agile / Scrum methodology (sprints, standups, user stories)",
                            "Software testing methods: Unit, integration, system, user acceptance testing (UAT)",
                            "System changeover strategies: Direct cutover, parallel run, pilot, phased adoption",
                            "Post-implementation review and ongoing system maintenance"
                        ],
                        "learningOutcomes": [
                            "Conduct a TELOS feasibility study for an enterprise software acquisition.",
                            "Compare Waterfall and Agile methodologies for business applications.",
                            "Recommend appropriate system changeover strategies."
                        ],
                        "checklists": [
                            "Review comparison table between 4 system changeover methods",
                            "Practice TELOS feasibility analysis on a real business scenario"
                        ]
                    }
                ]
            },
            {
                "id": "c7-s2",
                "title": "Area 2: Cloud Computing & Enterprise Systems",
                "weightage": "10%",
                "description": "Cloud service models (IaaS, PaaS, SaaS), ERP architectures, supply chain systems.",
                "nodes": [
                    {
                        "id": "c7-s2-n1",
                        "name": "Cloud Architectures & Enterprise Resource Planning (ERP)",
                        "code": "C7.2.1",
                        "category": "Enterprise Systems",
                        "weightage": "10%",
                        "description": "Cloud service delivery models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS); cloud deployment models (Public, Private, Hybrid); Enterprise Resource Planning (ERP) systems (SAP, Oracle, Odoo); Customer Relationship Management (CRM) and Supply Chain Management (SCM) systems.",
                        "topics": [
                            "Cloud computing concepts, elasticity, multi-tenancy, pay-per-use economics",
                            "Service models: SaaS (QuickBooks Online, Salesforce), PaaS (AWS Elastic Beanstalk), IaaS (Azure VMs)",
                            "Enterprise Resource Planning (ERP) architecture, centralized database, module integration",
                            "ERP implementation challenges: Change management, data migration, customization risks",
                            "Customer Relationship Management (CRM) and Supply Chain Management (SCM) integration",
                            "Service Level Agreements (SLAs) and cloud vendor risk governance"
                        ],
                        "learningOutcomes": [
                            "Differentiate SaaS, PaaS, and IaaS models and select appropriate solutions.",
                            "Explain the architecture and strategic benefits of integrated ERP systems.",
                            "Assess operational risks associated with cloud service adoption."
                        ],
                        "checklists": [
                            "Map enterprise business processes into standard ERP modules",
                            "Evaluate cloud SLA key performance metrics"
                        ]
                    }
                ]
            },
            {
                "id": "c7-s3",
                "title": "Area 3: Data Management, BI & AI Foundations",
                "weightage": "10%",
                "description": "Relational databases, SQL concepts, data warehousing, BI analytics, AI/ML in accounting.",
                "nodes": [
                    {
                        "id": "c7-s3-n1",
                        "name": "DBMS, SQL, Business Intelligence & Applied AI",
                        "code": "C7.3.1",
                        "category": "Data & AI",
                        "weightage": "10%",
                        "description": "Database Management Systems (DBMS); relational data models, primary keys, foreign keys, normalization; basic SQL queries (SELECT, JOIN, GROUP BY); Data Warehousing and ETL pipelines; Business Intelligence (BI) dashboards; Artificial Intelligence and Machine Learning applications in accounting and auditing.",
                        "topics": [
                            "Relational database concepts: Entities, attributes, tables, relationships (1:1, 1:N, M:N)",
                            "Database normalization concepts (1NF, 2NF, 3NF) for transactional integrity",
                            "SQL fundamentals for financial audit data extraction",
                            "Data warehouses vs Data lakes vs Operational transactional databases",
                            "Business Intelligence (BI) tools: Data visualization and executive reporting",
                            "Artificial Intelligence (AI), Machine Learning (ML), and Natural Language Processing (NLP)",
                            "Automating financial reconciliation and anomaly detection using algorithmic models"
                        ],
                        "learningOutcomes": [
                            "Explain relational database structure and normalization principles.",
                            "Describe how data warehouses and ETL support business analytics.",
                            "Identify practical applications of AI and machine learning in finance."
                        ],
                        "checklists": [
                            "Practice basic SQL SELECT and JOIN statements",
                            "Review normalization rules (1NF to 3NF)"
                        ]
                    }
                ]
            },
            {
                "id": "c7-s4",
                "title": "Area 4: Information Security & Cyber Resilience",
                "weightage": "15%",
                "description": "Cybersecurity threats, CIA triad, access controls, disaster recovery, data protection laws.",
                "nodes": [
                    {
                        "id": "c7-s4-n1",
                        "name": "CIA Triad, Cyber Controls & Disaster Recovery",
                        "code": "C7.4.1",
                        "category": "Cybersecurity & Controls",
                        "weightage": "15%",
                        "description": "Confidentiality, Integrity, and Availability (CIA triad); common cyber threats: Malware, Phishing, Ransomware, DDoS, Social Engineering; technical and physical controls: Firewalls, encryption, multi-factor authentication (MFA); Business Continuity Planning (BCP) and Disaster Recovery Planning (DRP); Bangladesh Cyber Security Act 2023.",
                        "topics": [
                            "The CIA triad: Confidentiality, Integrity, Availability principles",
                            "Cyber threat taxonomy: Phishing, Spear-phishing, Ransomware, Man-in-the-middle, Zero-day",
                            "Access controls: Role-based access control (RBAC), Least privilege, Multi-Factor Authentication (MFA)",
                            "Data encryption: In-transit (TLS/SSL) and at-rest (AES-256)",
                            "Backup strategies: Full, differential, incremental; 3-2-1 backup rule",
                            "Business Continuity Planning (BCP) and Disaster Recovery Planning (DRP): RTO and RPO metrics",
                            "Legal framework: Cyber Security Act 2023 obligations and data protection"
                        ],
                        "learningOutcomes": [
                            "Apply the CIA triad to assess enterprise information risks.",
                            "Design multi-layered cybersecurity defense mechanisms.",
                            "Formulate disaster recovery strategies incorporating RTO and RPO targets."
                        ],
                        "checklists": [
                            "Master RTO (Recovery Time Objective) and RPO (Recovery Point Objective) definitions",
                            "Review 3-2-1 backup strategy implementation"
                        ]
                    }
                ]
            }
        ]
    }
]

def generate_professional_and_advanced_specs():
    """Generates specs for 7 Professional and 3 Advanced papers."""
    pro_adv = [
        # P1 FAR
        {
            "code": "p1",
            "paperCode": "P1",
            "title": "ICAB P1 - Financial Accounting and Reporting",
            "name": "Financial Accounting and Reporting",
            "level": "Professional Level",
            "category": "Professional Level Papers",
            "marks": 100,
            "duration": "3.0 Hours",
            "format": "Written & Scenario-Based Technical Examination",
            "summary": "Advanced preparation, presentation, analysis, and interpretation of single entity and consolidated financial statements under IFRS/BFRS, including Islamic finance and public sector transition.",
            "tags": ["Professional Level", "Core Exam", "Study Tracker", "IFRS", "Consolidation", "Reporting"],
            "stages": [
                {
                    "id": "p1-s1",
                    "title": "Area 1: Accounting & Reporting Concepts and Ethics",
                    "weightage": "10%",
                    "description": "Standard setting, Conceptual Framework, IAS 8 changes in policy/estimates, and professional ethics.",
                    "nodes": [
                        {
                            "id": "p1-s1-n1",
                            "name": "IFRS Conceptual Framework & IAS 8",
                            "code": "P1.1.1",
                            "category": "Standards & Theory",
                            "weightage": "10%",
                            "description": "Standard-setting process by IASB, FRC Bangladesh endorsement; qualitative characteristics; IAS 8 accounting policies, changes in estimates and prior period errors; ethical dilemmas in financial reporting.",
                            "topics": [
                                "IASB and FRC standard-setting governance and adoption",
                                "IFRS Conceptual Framework: Recognition, measurement bases (historical cost, fair value, value in use)",
                                "IAS 8: Retrospective application of policy changes vs prospective estimates",
                                "Correction of material prior period errors",
                                "Professional ethics under IESBA Code when facing management pressure to misstate"
                            ],
                            "learningOutcomes": ["Evaluate accounting policies under IAS 8.", "Apply IFRS measurement bases.", "Resolve ethical conflicts in financial reporting."],
                            "checklists": ["Review IAS 8 retrospective restatement steps", "Practice disclosure notes for accounting policy changes"]
                        }
                    ]
                },
                {
                    "id": "p1-s2",
                    "title": "Area 2: Single Entity Financial Statements (IFRS/BFRS)",
                    "weightage": "30%",
                    "description": "Preparation of single entity statements applying IAS 16, IAS 36, IAS 38, IAS 37, IFRS 15, IFRS 16, IAS 12.",
                    "nodes": [
                        {
                            "id": "p1-s2-n1",
                            "name": "Non-Current Assets: IAS 16, IAS 38, IAS 36 & IAS 40",
                            "code": "P1.2.1",
                            "category": "Standards & Practice",
                            "weightage": "15%",
                            "description": "PPE revaluation and component depreciation (IAS 16); Intangible assets and R&D capitalization (IAS 38); Impairment testing and CGUs (IAS 36); Investment property fair value vs cost models (IAS 40); Borrowing costs (IAS 23).",
                            "topics": [
                                "IAS 16 Revaluation model and revaluation surplus accounting",
                                "IAS 38 Criteria for capitalizing development expenditure vs research expense",
                                "IAS 36 Impairment indicators, Cash Generating Units (CGUs), impairment allocation",
                                "IAS 40 Investment Property: Dual-use property, transfers, and fair value model",
                                "IAS 23 Capitalization of borrowing costs on qualifying assets"
                            ],
                            "learningOutcomes": ["Compute revaluations and impairment losses.", "Account for intangible assets and investment properties.", "Prepare non-current asset note disclosures."],
                            "checklists": ["Practice 3 CGU impairment allocation problems", "Review IAS 38 development capitalization criteria"]
                        },
                        {
                            "id": "p1-s2-n2",
                            "name": "Revenue, Leases, Provisions & Tax: IFRS 15, IFRS 16, IAS 37, IAS 12",
                            "code": "P1.2.2",
                            "category": "Standards & Practice",
                            "weightage": "15%",
                            "description": "IFRS 15 5-step revenue recognition; IFRS 16 Right-of-Use assets and lease liabilities; IAS 37 Provisions and contingent liabilities; IAS 12 Deferred tax temporary differences.",
                            "topics": [
                                "IFRS 15 5-step model: Contract, performance obligations, transaction price, allocation, satisfaction",
                                "IFRS 16 Lessee accounting: ROU asset, lease liability, short-term lease exemptions",
                                "IAS 37 Present legal/constructive obligation, probable outflow, reliable estimate",
                                "IAS 37 Restructuring provisions, onerous contracts, contingent assets/liabilities",
                                "IAS 12 Deferred tax: Tax base vs carrying amount, taxable vs deductible temporary differences"
                            ],
                            "learningOutcomes": ["Apply 5-step model to multi-element revenue contracts.", "Account for leases under IFRS 16.", "Compute deferred tax provisions and prepare reconciliation."],
                            "checklists": ["Complete 3 full IFRS 15 multi-element revenue calculations", "Calculate deferred tax on revalued assets under IAS 12"]
                        }
                    ]
                },
                {
                    "id": "p1-s3",
                    "title": "Area 3: Consolidated Financial Statements",
                    "weightage": "30%",
                    "description": "Group accounting under IFRS 10, IFRS 3, and IAS 28; subsidiaries, associates, and intra-group adjustments.",
                    "nodes": [
                        {
                            "id": "p1-s3-n1",
                            "name": "Consolidated Statement of Financial Position (IFRS 10 & IFRS 3)",
                            "code": "P1.3.1",
                            "category": "Group Accounting",
                            "weightage": "15%",
                            "description": "Concept of control under IFRS 10; goodwill computation under IFRS 3 (proportionate vs fair value method); non-controlling interests (NCI); intra-group balances, cash-in-transit, and unrealized profit on inventory and PPE.",
                            "topics": [
                                "IFRS 10 Control model: Power, exposure to variable returns, link between power and returns",
                                "Goodwill calculation: Purchase consideration, fair value of net assets, NCI valuation",
                                "Fair value adjustments to net assets at acquisition date and subsequent depreciation",
                                "Intra-group balances, cash and goods in transit reconciliation",
                                "Unrealized profit (PURP) in closing inventory and transfer of PPE between group entities",
                                "Consolidated retained earnings and non-controlling interest calculation"
                            ],
                            "learningOutcomes": ["Calculate goodwill and NCI under IFRS 3.", "Eliminate intra-group balances and unrealized profits.", "Prepare consolidated statement of financial position."],
                            "checklists": ["Draft 3 full consolidated balance sheets with fair value adjustments", "Master PURP inventory adjustment for parent vs subsidiary sales"]
                        },
                        {
                            "id": "p1-s3-n2",
                            "name": "Consolidated Profit or Loss & Associates (IAS 28)",
                            "code": "P1.3.2",
                            "category": "Group Accounting",
                            "weightage": "15%",
                            "description": "Consolidated Statement of Profit or Loss; mid-year acquisitions; intra-group sales and dividends; NCI share of profit; Equity accounting for associates under IAS 28.",
                            "topics": [
                                "Consolidated P&L preparation: Revenue, cost of sales, operating expenses line-by-line",
                                "Mid-year acquisition: Apportionment of subsidiary revenue and expenses",
                                "Elimination of intra-group sales, management fees, interest, and dividends",
                                "Allocation of profit for the year between owners of parent and NCI",
                                "IAS 28 Accounting for associates: Significant influence test (20-50%), equity method",
                                "Equity accounting adjustments: Group share of associate profit, PURP in associate sales"
                            ],
                            "learningOutcomes": ["Prepare consolidated statement of profit or loss for mid-year acquisition.", "Allocate comprehensive income to NCI.", "Apply equity method for investments in associates."],
                            "checklists": ["Complete 2 mid-year acquisition group P&L questions", "Review equity method balance sheet and income statement presentations"]
                        }
                    ]
                },
                {
                    "id": "p1-s4",
                    "title": "Area 4: Financial Statement Analysis & Interpretation",
                    "weightage": "15%",
                    "description": "Financial ratio analysis, statement of cash flows (IAS 7), and performance appraisal.",
                    "nodes": [
                        {
                            "id": "p1-s4-n1",
                            "name": "Cash Flows (IAS 7) & Comprehensive Ratio Analysis",
                            "code": "P1.4.1",
                            "category": "Financial Analysis",
                            "weightage": "15%",
                            "description": "Preparation of Statement of Cash Flows under IAS 7 (indirect method); profitability, liquidity, efficiency, and solvency ratios; limitations of ratio analysis.",
                            "topics": [
                                "IAS 7 Cash Flows: Operating activities (indirect method), investing, and financing activities",
                                "Non-cash transactions, interest, dividend, and tax cash flows",
                                "Profitability ratios: ROCE, Gross margin, Net margin, Asset turnover",
                                "Liquidity & working capital ratios: Current ratio, Quick ratio, Inventory turnover days, Debtor days",
                                "Solvency and gearing: Debt-to-equity, Interest cover",
                                "Investor ratios: Earnings per share (IAS 33 basics), P/E ratio, Dividend yield",
                                "Limitations of financial statement analysis and qualitative factors"
                            ],
                            "learningOutcomes": ["Construct IAS 7 statement of cash flows using indirect method.", "Compute and interpret financial ratios across multiple periods.", "Write an executive report evaluating corporate financial health."],
                            "checklists": ["Prepare 2 full IAS 7 cash flow statements with working capital adjustments", "Write a 500-word performance critique on profitability vs liquidity"]
                        }
                    ]
                },
                {
                    "id": "p1-s5",
                    "title": "Area 5: Islamic Finance & Public Sector Accounting",
                    "weightage": "15%",
                    "description": "AAOIFI accounting standards for Islamic financial institutions, and cash-to-accrual public sector transition.",
                    "nodes": [
                        {
                            "id": "p1-s5-n1",
                            "name": "AAOIFI Islamic Accounting & IPSAS Accrual Transition",
                            "code": "P1.5.1",
                            "category": "Specialized Accounting",
                            "weightage": "15%",
                            "description": "Accounting for Islamic financial transactions under AAOIFI standards (Murabaha, Ijara, Mudaraba, Musharaka, Sukuk); transition from cash to accrual accounting in Bangladesh public sector; IPSAS standards.",
                            "topics": [
                                "Principles of Islamic banking and finance: Riba prohibition, risk sharing, asset-backing",
                                "Accounting for Murabaha (cost-plus sale) and Ijara (leasing) contracts under AAOIFI",
                                "Mudaraba and Musharaka profit-and-loss sharing mechanisms and balance sheet recognition",
                                "Sukuk (Islamic bonds) structure, issuance, and financial reporting",
                                "Government financial management in Bangladesh: Move from cash basis to accrual basis",
                                "Key IPSAS standards: Fixed assets, financial liabilities, revenue from exchange transactions"
                            ],
                            "learningOutcomes": ["Record Islamic financing transactions under AAOIFI standards.", "Differentiate Murabaha and Ijara accounting treatments.", "Explain challenges in transitioning public sector accounting to accruals."],
                            "checklists": ["Compare AAOIFI Murabaha accounting with IFRS 9 amortized cost", "Summarize 4 key implementation steps of IPSAS in Bangladesh"]
                        }
                    ]
                }
            ]
        },

        # P2 Audit and Assurance
        {
            "code": "p2",
            "paperCode": "P2",
            "title": "ICAB P2 - Audit and Assurance",
            "name": "Audit and Assurance",
            "level": "Professional Level",
            "category": "Professional Level Papers",
            "marks": 100,
            "duration": "3.0 Hours",
            "format": "Written & Scenario-Based Technical Examination",
            "summary": "Covers acceptance, managing and performing audit and assurance engagements in accordance with International Standards on Auditing (ISAs), risk assessment, audit evidence, and auditor reporting.",
            "tags": ["Professional Level", "Core Exam", "Study Tracker", "ISA", "Audit Risk", "Auditor Report"],
            "stages": [
                {
                    "id": "p2-s1",
                    "title": "Area 1: Legal/Professional Regulations, Ethics & Acceptance",
                    "weightage": "25%",
                    "description": "Statutory audit requirements, IESBA Code of Ethics, quality management (ISQM 1), and client acceptance.",
                    "nodes": [
                        {
                            "id": "p2-s1-n1",
                            "name": "ISQM 1, Professional Ethics & Client Acceptance",
                            "code": "P2.1.1",
                            "category": "Ethics & Governance",
                            "weightage": "25%",
                            "description": "Appointment, removal, and duties of auditors under Companies Act 1994; FRC audit oversight; IESBA Code of Ethics for Professional Accountants; ISQM 1 Quality Management for Firms; client acceptance and engagement management.",
                            "topics": [
                                "Auditor appointment, qualifications, disqualifications, and removal under Companies Act 1994",
                                "Role of Financial Reporting Council (FRC) Bangladesh in auditing oversight",
                                "IESBA Code fundamental principles, independence in mind and appearance",
                                "Ethical threats (long association, non-audit services, fee dependence) and safeguards",
                                "ISQM 1: System of quality management, governance, ethics, risk assessment, monitoring",
                                "Pre-conditions for audit (ISA 210), engagement letters, client onboarding and KYC"
                            ],
                            "learningOutcomes": ["Evaluate compliance with Companies Act 1994 auditor appointment rules.", "Design firm quality management procedures under ISQM 1.", "Resolve complex independence and conflict of interest scenarios."],
                            "checklists": ["Review ISQM 1 eight components checklist", "Practice 4 ethical threat scenarios with appropriate safeguards"]
                        }
                    ]
                },
                {
                    "id": "p2-s2",
                    "title": "Area 2: Planning & Performing Audit Engagements",
                    "weightage": "50%",
                    "description": "Audit risk (ISA 315), materiality (ISA 320), fraud (ISA 240), internal control evaluation, and substantive procedures.",
                    "nodes": [
                        {
                            "id": "p2-s2-n1",
                            "name": "Audit Risk Assessment & Materiality (ISA 315 & 320)",
                            "code": "P2.2.1",
                            "category": "Audit Risk & Planning",
                            "weightage": "25%",
                            "description": "Audit risk model: Inherent risk, Control risk, Detection risk; understanding the entity and environment (ISA 315 Revised); planning and performance materiality (ISA 320); auditor responsibilities for fraud (ISA 240); IT environment risks and automated controls.",
                            "topics": [
                                "The audit risk model: AR = IR x CR x DR and its practical application",
                                "ISA 315 (Revised 2019): Identifying and assessing risks of material misstatement (RMM)",
                                "Assessing IT general controls (ITGCs) and automated application controls",
                                "Determination of planning materiality, performance materiality, and trivial threshold (ISA 320)",
                                "Auditor's responsibilities relating to fraud in an audit (ISA 240): Fraud risk factors and skepticism",
                                "Laws and regulations in an audit (ISA 250): Direct vs indirect compliance"
                            ],
                            "learningOutcomes": ["Calculate planning and performance materiality benchmarks.", "Identify and assess risks of material misstatement at financial statement and assertion levels.", "Design responses to address identified fraud risks."],
                            "checklists": ["Calculate materiality on 3 scenario financial statements", "Draft risk and response audit planning matrix"]
                        },
                        {
                            "id": "p2-s2-n2",
                            "name": "Substantive Audit Procedures & Complex Balances",
                            "code": "P2.2.2",
                            "category": "Substantive Procedures",
                            "weightage": "25%",
                            "description": "Designing substantive audit tests for complex areas: Revenue (IFRS 15), Inventory, Provisions, Going concern (ISA 570), Related parties (ISA 550), and Accounting estimates (ISA 540).",
                            "topics": [
                                "Substantive testing methodology: Analytical procedures vs tests of details",
                                "Auditing revenue recognition under IFRS 15: Cut-off, rebates, multi-element contracts",
                                "Auditing inventory: Count attendance, valuation testing, NRV write-down testing",
                                "Auditing accounting estimates including fair value under ISA 540 (Revised)",
                                "Auditing related party transactions and disclosures under ISA 550",
                                "Going concern evaluation under ISA 570: Indicators, cash forecasts, and management support",
                                "Audit sampling techniques (ISA 530) and Computer-Assisted Audit Techniques (CAATs)"
                            ],
                            "learningOutcomes": ["Design detailed substantive audit programs for high-risk accounts.", "Audit complex accounting estimates and fair value measurements.", "Evaluate going concern adequacy and audit evidence."]
                        }
                    ]
                },
                {
                    "id": "p2-s3",
                    "title": "Area 3: Concluding & Reporting on Engagements",
                    "weightage": "25%",
                    "description": "Subsequent events (ISA 560), written representations (ISA 580), and auditor reporting (ISA 700, 701, 705, 706).",
                    "nodes": [
                        {
                            "id": "p2-s3-n1",
                            "name": "Subsequent Events, Evaluation & Auditor's Report",
                            "code": "P2.3.1",
                            "category": "Auditor Reporting",
                            "weightage": "25%",
                            "description": "Subsequent events up to and after report date (ISA 560); written representations from management (ISA 580); evaluating misstatements (ISA 450); Key Audit Matters (KAM - ISA 701); unmodified vs modified opinions (ISA 705); Emphasis of Matter and Other Matter paragraphs (ISA 706).",
                            "topics": [
                                "Evaluating uncorrected misstatements against materiality thresholds (ISA 450)",
                                "Subsequent events procedures: Adjusting vs non-adjusting events under IAS 10 / ISA 560",
                                "Written representations: Purpose, limitations, and refusal to provide (ISA 580)",
                                "Standard unmodified auditor's report structure under ISA 700 (Revised)",
                                "Communicating Key Audit Matters (KAM) in listed entity reports (ISA 701)",
                                "Modifications to the opinion (ISA 705): Qualified, Adverse, Disclaimer of opinion",
                                "Emphasis of Matter and Other Matter paragraphs (ISA 706) criteria and placement"
                            ],
                            "learningOutcomes": ["Determine required modifications to the audit opinion based on pervasive/material tests.", "Draft Key Audit Matters (KAM) descriptions for listed entities.", "Evaluate the impact of subsequent events on audit reports."],
                            "checklists": ["Memorize opinion decision matrix (Material vs Material & Pervasive)", "Draft sample Key Audit Matter paragraph for inventory valuation"]
                        }
                    ]
                }
            ]
        },

        # P3 Business Planning: Taxation & Compliance
        {
            "code": "p3",
            "paperCode": "P3",
            "title": "ICAB P3 - Business Planning: Taxation & Compliance",
            "name": "Business Planning: Taxation & Compliance",
            "level": "Professional Level",
            "category": "Professional Level Papers",
            "marks": 100,
            "duration": "3.0 Hours",
            "format": "Written & Scenario-Based Technical Examination",
            "summary": "Advanced corporate taxation, group relief, business restructuring, international taxation, transfer pricing, dispute resolution, tax litigation, and strategic VAT compliance under Bangladesh tax legislation.",
            "tags": ["Professional Level", "Core Exam", "Study Tracker", "Tax Planning", "Transfer Pricing", "VAT Litigation"],
            "stages": [
                {
                    "id": "p3-s1",
                    "title": "Area 1: Income Tax Administration, Disputes & Transfer Pricing",
                    "weightage": "40%",
                    "description": "Tax assessments, audit, appeals to Appellate Tribunal and High Court, ADR, and Transfer Pricing Chapter.",
                    "nodes": [
                        {
                            "id": "p3-s1-n1",
                            "name": "Tax Litigation, Appeals & Alternative Dispute Resolution (ADR)",
                            "code": "P3.1.1",
                            "category": "Tax Litigation",
                            "weightage": "20%",
                            "description": "Selection of cases for tax audit; assessment under Section 180 vs best judgment under Section 182; appeals to Commissioner (Appeals); Taxes Appellate Tribunal; High Court references; Alternative Dispute Resolution (ADR) mechanism.",
                            "topics": [
                                "Audit selection criteria and powers of Deputy Commissioner of Taxes (DCT)",
                                "Reopening of assessment: Section 212 powers and statutory time bars",
                                "First appeal to Commissioner of Taxes (Appeals): Grounds, deposit requirements, timelines",
                                "Second appeal to Taxes Appellate Tribunal: Composition, procedures, legal questions",
                                "Reference applications to High Court Division of the Supreme Court of Bangladesh",
                                "Alternative Dispute Resolution (ADR): Eligibility, facilitator role, binding agreement"
                            ],
                            "learningOutcomes": ["Formulate grounds of appeal for disputed tax assessments.", "Advise clients on ADR benefits and dispute resolution strategy.", "Draft legal submissions for Taxes Appellate Tribunal."],
                            "checklists": ["Review appellate timeline and mandatory tax deposit rules", "Study ADR procedural guidelines under ITA 2023"]
                        },
                        {
                            "id": "p3-s1-n2",
                            "name": "Transfer Pricing, International Tax & Double Taxation",
                            "code": "P3.1.2",
                            "category": "International Tax",
                            "weightage": "20%",
                            "description": "Arm's length principle; Transfer Pricing methods under ITA 2023 (CUP, Resale Price, Cost Plus, TNMM, Profit Split); TP documentation and accountant certification; Double Taxation Avoidance Agreements (DTAA); permanent establishment (PE).",
                            "topics": [
                                "Transfer pricing regulations under Bangladesh Income Tax Act 2023",
                                "Definition of associated enterprise and international transactions",
                                "Arm's length price determination methods: CUP, Resale Price, Cost Plus, Profit Split, TNMM",
                                "Transfer pricing documentation requirements and mandatory Chartered Accountant certificate",
                                "Double Tax Avoidance Agreements (DTAA): Credit method vs Exemption method",
                                "Permanent Establishment (PE) concepts and taxation of cross-border digital services"
                            ],
                            "learningOutcomes": ["Select and defend the most appropriate transfer pricing method.", "Compute tax credits under DTAA provisions.", "Identify Permanent Establishment exposure for multinational entities."]
                        }
                    ]
                },
                {
                    "id": "p3-s2",
                    "title": "Area 2: Corporate Tax Planning & Restructuring",
                    "weightage": "30%",
                    "description": "Tax planning for corporate reorganizations, mergers, amalgamations, demergers, and incentives.",
                    "nodes": [
                        {
                            "id": "p3-s2-n1",
                            "name": "Tax-Efficient Mergers, Acquisitions & Incentives",
                            "code": "P3.2.1",
                            "category": "Corporate Tax Strategy",
                            "weightage": "30%",
                            "description": "Tax implications of business combinations, amalgamations, and demergers; carry-forward and set-off of accumulated losses; tax holidays and economic zone incentives (BEZA, BIDA, Hi-Tech parks); tax-efficient financing structures (debt vs equity, thin capitalization).",
                            "topics": [
                                "Tax treatment of amalgamations and company mergers under ITA 2023",
                                "Conditions for transfer of accumulated tax losses and unabsorbed depreciation in mergers",
                                "Demergers, slump sales, and asset acquisitions tax implications",
                                "Tax holiday regimes for industrial undertakings, physical infrastructure, and green initiatives",
                                "Incentives in Special Economic Zones (BEZA) and Hi-Tech Parks",
                                "Tax planning for employee remuneration: ESOPs, provident funds, gratuity approvals",
                                "Thin capitalization and interest deductibility restrictions"
                            ],
                            "learningOutcomes": ["Structure tax-neutral corporate amalgamations.", "Advise corporations on claiming tax holiday benefits in Economic Zones.", "Optimize debt-equity ratios considering tax deductibility."]
                        }
                    ]
                },
                {
                    "id": "p3-s3",
                    "title": "Area 3: Strategic VAT Compliance & Customs",
                    "weightage": "30%",
                    "description": "VAT planning, audits, investigations, appeals, customs valuation, and import-export procedures.",
                    "nodes": [
                        {
                            "id": "p3-s3-n1",
                            "name": "VAT Audits, Investigations, Appeals & Customs",
                            "code": "P3.3.1",
                            "category": "Indirect Tax Strategy",
                            "weightage": "30%",
                            "description": "VAT audits and investigations by Customs, Excise and VAT Commissionerate; demand notices and show-cause proceedings; appeals to Commissioner (Appeals) and Customs, Excise and VAT Appellate Tribunal; customs valuation under Customs Act 2023; bonded warehouse facilities.",
                            "topics": [
                                "Powers of VAT officers during audits, inspections, and seizure of records",
                                "Adjudication process: Show Cause Notice (SCN) response and personal hearings",
                                "VAT appellate procedure: Appeal to Commissioner (Appeals), Tribunal, and High Court",
                                "Input tax rebate disputes, credit cancellation, and recovery of unpaid VAT",
                                "Customs Act 2023: Assessment of customs duty, regulatory duty, and advance tax on imports",
                                "Customs valuation methods: Transaction value of imported goods and adjustments",
                                "Bonded warehouse facilities, duty drawback, and export facilitation"
                            ],
                            "learningOutcomes": ["Draft replies to VAT show-cause notices.", "Navigate the VAT and Customs appellate ladder.", "Optimize customs duty through bonded warehouse and drawback facilities."]
                        }
                    ]
                }
            ]
        },

        # P4 Financial Management
        {
            "code": "p4",
            "paperCode": "P4",
            "title": "ICAB P4 - Financial Management",
            "name": "Financial Management",
            "level": "Professional Level",
            "category": "Professional Level Papers",
            "marks": 100,
            "duration": "3.0 Hours",
            "format": "Written & Quantitative Technical Examination",
            "summary": "Advanced corporate finance, capital structure, cost of capital (WACC), investment appraisal under uncertainty, business valuation, treasury risk management, and ESG finance.",
            "tags": ["Professional Level", "Core Exam", "Study Tracker", "Corporate Finance", "WACC", "Valuation", "Hedging"],
            "stages": [
                {
                    "id": "p4-s1",
                    "title": "Area 1: Business Finance – Methods & Strategies",
                    "weightage": "30%",
                    "description": "Cost of capital, WACC, capital structure theories (Modigliani-Miller), and dividend policy.",
                    "nodes": [
                        {
                            "id": "p4-s1-n1",
                            "name": "Cost of Capital (WACC) & Capital Structure Theories",
                            "code": "P4.1.1",
                            "category": "Corporate Finance",
                            "weightage": "30%",
                            "description": "Cost of equity using CAPM and Dividend Growth Model; cost of debt (irredeemable, redeemable, convertible); calculation of Weighted Average Cost of Capital (WACC); capital structure theories: Traditional view, Modigliani-Miller with and without corporate taxes, pecking order theory; dividend policy theories and signaling.",
                            "topics": [
                                "Cost of equity calculation: Capital Asset Pricing Model (CAPM) and Gordon Growth Model",
                                "Systematic vs unsystematic risk, Beta estimation, de-gearing and re-gearing betas",
                                "Cost of redeemable debt using internal rate of return (IRR) interpolation",
                                "Cost of convertible bonds and floor value analysis",
                                "Weighted Average Cost of Capital (WACC) calculation and conditions for use in appraisal",
                                "Capital structure debate: Traditional view vs MM Proposition I & II (tax shield)",
                                "Pecking order hypothesis, trade-off theory, and financial distress costs",
                                "Dividend irrelevance (MM) vs Walter/Gordon models, clientele effect, signaling"
                            ],
                            "learningOutcomes": ["Calculate WACC for complex financing structures.", "Evaluate capital structure decisions applying MM theories.", "De-gear and re-gear equity betas for investment projects."],
                            "checklists": ["Solve 3 complex WACC calculations with convertible debt", "Master asset beta formula: Beta_A = Beta_E * (E/(E+D(1-t)))"]
                        }
                    ]
                },
                {
                    "id": "p4-s2",
                    "title": "Area 2: Investment Appraisal & Business Valuation",
                    "weightage": "30%",
                    "description": "Discounted cash flow (DCF), sensitivity, real options, M&A, and company valuation methods.",
                    "nodes": [
                        {
                            "id": "p4-s2-n1",
                            "name": "DCF Appraisal, Risk Analysis & Business Valuation",
                            "code": "P4.2.1",
                            "category": "Valuation & Investments",
                            "weightage": "30%",
                            "description": "Net Present Value (NPV), IRR, MIRR, Payback; dealing with inflation, taxation, and capital rationing; sensitivity analysis and simulation; real options (delay, expand, abandon); business valuation methods: Asset-based, Earnings multiples (P/E, EV/EBITDA), Free Cash Flow to Firm (FCFF) and Equity (FCFE).",
                            "topics": [
                                "NPV analysis incorporating working capital, tax depreciation allowances, and residual values",
                                "Inflation in investment appraisal: Real discount rate vs nominal cash flows (Fisher equation)",
                                "Single-period capital rationing: Profitability Index (PI) ranking",
                                "Multi-period capital rationing and linear programming principles",
                                "Risk in investment appraisal: Sensitivity analysis, scenario analysis, real options value",
                                "Business valuation approaches: Net Asset Value (NAV), book value vs liquidation value",
                                "Earnings-based valuation: P/E multiples, EV/EBITDA, earnings yield method",
                                "Discounted Free Cash Flow valuation: FCFF discounted at WACC, FCFE discounted at Ke",
                                "Mergers and acquisitions: Valuation of synergies and defense against hostile bids"
                            ],
                            "learningOutcomes": ["Formulate advanced DCF models with tax shields and capital rationing.", "Value private and public companies using FCFF and market multiple methods.", "Quantify real options in high-uncertainty capital investments."]
                        }
                    ]
                },
                {
                    "id": "p4-s3",
                    "title": "Area 3: Treasury & Financial Risk Management",
                    "weightage": "25%",
                    "description": "Currency and interest rate risk management using forwards, futures, options, and swaps.",
                    "nodes": [
                        {
                            "id": "p4-s3-n1",
                            "name": "FX Hedging, Interest Rate Risk & Derivatives",
                            "code": "P4.3.1",
                            "category": "Risk Management",
                            "weightage": "25%",
                            "description": "Foreign exchange risk exposure: Transaction, translation, and economic risk; hedging techniques: Forward contracts, money market hedges, futures, currency options, currency swaps; interest rate risk: Forward Rate Agreements (FRAs), interest rate futures, options (caps, floors, collars), interest rate swaps.",
                            "topics": [
                                "Foreign exchange exposure types: Transaction, translation, economic risk",
                                "Internal hedging techniques: Invoicing in home currency, netting, matching, leading/lagging",
                                "External FX hedging: Forward contracts vs Money market hedge step-by-step comparison",
                                "Currency futures and options hedging: Call vs Put option strategies",
                                "Interest rate risk sources: Gap analysis, basis risk",
                                "Forward Rate Agreements (FRAs) structure, fixing rates, and settlement calculations",
                                "Interest rate swaps: Comparative advantage argument, mechanics, counterparty risk",
                                "Options on interest rates: Caps, Floors, Collars construction and cost optimization"
                            ],
                            "learningOutcomes": ["Construct money market hedges for FX payments and receipts.", "Hedge floating interest rate exposure using FRAs and interest rate swaps.", "Design option collar strategies to bound interest rate costs."]
                        }
                    ]
                },
                {
                    "id": "p4-s4",
                    "title": "Area 4: Sustainable Finance, ESG & FinTech",
                    "weightage": "15%",
                    "description": "Green bonds, ESG investment metrics, FinTech innovations, and climate risk finance.",
                    "nodes": [
                        {
                            "id": "p4-s4-n1",
                            "name": "Green Finance, ESG Integration & Financial Technology",
                            "code": "P4.4.1",
                            "category": "Emerging Finance",
                            "weightage": "15%",
                            "description": "Role of sustainable finance and Bangladesh Bank Green Banking Policy; green bonds, sustainability-linked loans (SLL); ESG ratings and investment screening; financial technology (FinTech): Mobile financial services (bKash/Nagad), blockchain in settlement, and crowdfunding.",
                            "topics": [
                                "Bangladesh Bank Green Banking policy guidelines and mandatory refinancing schemes",
                                "Green bonds and sustainability-linked debt: Issuance criteria, verification, greenium",
                                "Integrating ESG criteria into corporate cost of capital and DCF valuation",
                                "Climate-related financial risks: Physical risks vs transition risks",
                                "FinTech ecosystem in Bangladesh: MFS, digital credit, peer-to-peer lending",
                                "Blockchain and distributed ledger technology (DLT) in international trade finance and remittances"
                            ],
                            "learningOutcomes": ["Apply green banking criteria to evaluate project financing proposals.", "Explain the pricing and structuring of green bonds in Bangladesh.", "Assess FinTech business models and regulatory sandboxes."]
                        }
                    ]
                }
            ]
        },

        # P5 Business Strategy & Technology
        {
            "code": "p5",
            "paperCode": "P5",
            "title": "ICAB P5 - Business Strategy & Technology",
            "name": "Business Strategy & Technology",
            "level": "Professional Level",
            "category": "Professional Level Papers",
            "marks": 100,
            "duration": "3.0 Hours",
            "format": "Written & Strategic Case Analysis Examination",
            "summary": "Strategic formulation, competitive analysis, strategic choice, methods of strategic development, technology integration, performance monitoring, and business ethics.",
            "tags": ["Professional Level", "Core Exam", "Study Tracker", "Strategy", "Tech Transformation", "Leadership"],
            "stages": [
                {
                    "id": "p5-s1",
                    "title": "Area 1: Strategic Formulation & Manifold Analysis",
                    "weightage": "35%",
                    "description": "External environmental analysis, resource-based view (VRIO), core competencies, competitor profiling.",
                    "nodes": [
                        {
                            "id": "p5-s1-n1",
                            "name": "Strategic Audit, Resource View & Industry Dynamics",
                            "code": "P5.1.1",
                            "category": "Strategic Analysis",
                            "weightage": "35%",
                            "description": "Strategic direction and mission; PESTEL environmental audit; Porter's Diamond of national advantage; Resource-Based View (RBV); VRIO framework (Value, Rarity, Inimitability, Organization); Porter's Value Chain; strategic groups and benchmarking.",
                            "topics": [
                                "Strategic planning process: Vision, mission, strategic intent",
                                "External macro-environmental forecasting and scenario planning",
                                "Porter's Diamond model for competitive advantage of nations (Bangladesh RMG/Pharma)",
                                "Resource-Based View: Tangible vs intangible assets, threshold vs distinctive capabilities",
                                "VRIO framework analysis to test for sustainable competitive advantage",
                                "Porter's Value Chain: Primary activities, support activities, margin optimization",
                                "Strategic group analysis and competitive rivalry mapping"
                            ],
                            "learningOutcomes": ["Conduct comprehensive VRIO resource audits.", "Apply Porter's Diamond to analyze emerging export sectors in Bangladesh.", "Deconstruct corporate operations using Value Chain analysis."]
                        }
                    ]
                },
                {
                    "id": "p5-s2",
                    "title": "Area 2: Strategic Choice & Evaluation",
                    "weightage": "35%",
                    "description": "Porter's generic strategies, Ansoff's matrix, evaluation criteria (SFA: Suitability, Feasibility, Acceptability).",
                    "nodes": [
                        {
                            "id": "p5-s2-n1",
                            "name": "Generic Strategies, Growth Vectors & SFA Evaluation",
                            "code": "P5.2.1",
                            "category": "Strategic Choice",
                            "weightage": "35%",
                            "description": "Porter's Generic Strategies (Cost leadership, Differentiation, Focus); Bowman's Strategy Clock; Ansoff's Growth Vector matrix; Blue Ocean Strategy; methods of development: Organic growth, Mergers & Acquisitions, Strategic alliances/Joint ventures; SFA evaluation framework (Suitability, Feasibility, Acceptability).",
                            "topics": [
                                "Porter's generic competitive strategies: Cost leadership, differentiation, focus",
                                "Bowman's Strategy Clock: 8 strategic positions and hybrid strategies",
                                "Ansoff's Matrix: Market penetration, market development, product development, diversification",
                                "Blue Ocean Strategy: Value innovation, 4 Actions framework (Eliminate, Reduce, Raise, Create)",
                                "Growth pathways: Organic internal development vs M&A vs Joint ventures/alliances",
                                "Johnson, Scholes & Whittington SFA framework: Suitability, Feasibility, Acceptability",
                                "Financial acceptability metrics: Return on Capital, Cash flow impact, Shareholder Value Added"
                            ],
                            "learningOutcomes": ["Select competitive positioning using Bowman's Strategy Clock.", "Evaluate strategic options using the SFA framework.", "Formulate M&A versus alliance strategies for international expansion."]
                        }
                    ]
                },
                {
                    "id": "p5-s3",
                    "title": "Area 3: Implementation, Technology & Digital KPIs",
                    "weightage": "20%",
                    "description": "Balanced Scorecard, change management, digital business models, and IT integration.",
                    "nodes": [
                        {
                            "id": "p5-s3-n1",
                            "name": "Balanced Scorecard, Change Management & Tech Execution",
                            "code": "P5.3.1",
                            "category": "Strategy Execution",
                            "weightage": "20%",
                            "description": "Strategy implementation across business units; Kaplan & Norton's Balanced Scorecard; change management models (Kotter's 8 steps, Lewin's unfreeze-change-refreeze); digital transformation and technology integration in supply chains; monitoring strategic performance.",
                            "topics": [
                                "Aligning functional strategies (Marketing, Finance, Operations, HR) with corporate goals",
                                "Balanced Scorecard perspectives: Financial, Customer, Internal Business Process, Learning & Growth",
                                "Strategy maps linking non-financial leading indicators to financial lagging outcomes",
                                "Managing organizational change: Resistance causes, cultural web analysis (Johnson)",
                                "Lewin's 3-stage change model and Kotter's 8-step transformation framework",
                                "Integrating cloud, AI, and big data into enterprise operational models"
                            ],
                            "learningOutcomes": ["Construct Balanced Scorecards with balanced financial and operational KPIs.", "Design change management programs to overcome resistance.", "Align technology investments with strategic enterprise objectives."]
                        }
                    ]
                },
                {
                    "id": "p5-s4",
                    "title": "Area 4: Strategic Ethics, Governance & ESG",
                    "weightage": "10%",
                    "description": "Business ethics in strategy, stakeholder management, and corporate sustainability.",
                    "nodes": [
                        {
                            "id": "p5-s4-n1",
                            "name": "Strategic Ethics, Stakeholder Governance & ESG Strategy",
                            "code": "P5.4.1",
                            "category": "Strategic Governance",
                            "weightage": "10%",
                            "description": "Ethical considerations in strategic planning; Carroll's CSR Pyramid; stakeholder management and ethical leadership; ESG strategy alignment with UN Sustainable Development Goals (SDGs); data privacy and algorithmic ethics in corporate decisions.",
                            "topics": [
                                "Ethical dilemmas in strategic decisions (outsourcing, factory relocations, environmental trade-offs)",
                                "Carroll's Corporate Social Responsibility Pyramid: Economic, Legal, Ethical, Philanthropic",
                                "ESG integration in corporate strategy and national SDG commitments in Bangladesh",
                                "Ethical governance of technology, artificial intelligence, and automated decision systems",
                                "Whistleblowing policies and fostering ethical corporate cultures"
                            ],
                            "learningOutcomes": ["Evaluate strategic plans against ethical principles and ESG standards.", "Apply Carroll's CSR pyramid to business decisions.", "Address data ethics and privacy in algorithmic business models."]
                        }
                    ]
                }
            ]
        },

        # P6 Corporate Laws & Practices
        {
            "code": "p6",
            "paperCode": "P6",
            "title": "ICAB P6 - Corporate Laws & Practices",
            "name": "Corporate Laws & Practices",
            "level": "Professional Level",
            "category": "Professional Level Papers",
            "marks": 100,
            "duration": "3.0 Hours",
            "format": "Written & Legal Scenario Examination",
            "summary": "Advanced corporate legal practice under Companies Act 1994, BSEC Securities & Exchange rules, Bank Companies Act 1991, Financial Institutions Act, and FERA foreign investment regulations.",
            "tags": ["Professional Level", "Core Exam", "Study Tracker", "Corporate Law", "BSEC Rules", "Banking Act", "FERA"],
            "stages": [
                {
                    "id": "p6-s1",
                    "title": "Area 1: Companies Act 1994 Advanced Corporate Practice",
                    "weightage": "35%",
                    "description": "Share capital alteration, debentures, mortgages, investigations, amalgamation, and winding up.",
                    "nodes": [
                        {
                            "id": "p6-s1-n1",
                            "name": "Capital Restructuring, Mortgages & Corporate Winding Up",
                            "code": "P6.1.1",
                            "category": "Corporate Law",
                            "weightage": "35%",
                            "description": "Share capital reduction and variation of shareholder rights; registration of charges, mortgages, and debentures (Section 159); corporate investigations by government; schemes of arrangement and compromise (Sections 228-229); modes of winding up: By High Court, voluntary winding up (members' vs creditors'), and role of official liquidator.",
                            "topics": [
                                "Alteration of share capital: Consolidation, subdivision, cancellation under Section 53",
                                "Reduction of share capital: Special resolution and High Court confirmation requirements",
                                "Registration of charges and mortgages with RJSC: 21-day timeline, certificate, consequences of non-registration",
                                "Investigation into company affairs by Registrar or Government under Section 195",
                                "Corporate reconstruction, compromise, and amalgamation procedures under Sections 228 & 229",
                                "Modes of winding up: Compulsory winding up by court (grounds under Section 241)",
                                "Voluntary winding up: Members' voluntary winding up vs Creditors' voluntary winding up",
                                "Powers, duties, and liabilities of Official Liquidators"
                            ],
                            "learningOutcomes": ["Advise on legal procedure for capital reduction and charge registration.", "Draft schemes of compromise and amalgamation under Section 228.", "Determine grounds and statutory procedures for winding up a company."]
                        }
                    ]
                },
                {
                    "id": "p6-s2",
                    "title": "Area 2: BSEC Securities & Exchange Regulations",
                    "weightage": "35%",
                    "description": "Securities Rules 2020, Public Issue Rules 2015, Rights Issue Rules, and Listing Regulations.",
                    "nodes": [
                        {
                            "id": "p6-s2-n1",
                            "name": "BSEC Public Issue, Rights Issue & Listing Regulations",
                            "code": "P6.2.1",
                            "category": "Capital Market Law",
                            "weightage": "35%",
                            "description": "Securities and Exchange Ordinance 1969; Bangladesh Securities and Exchange Commission (Public Issue) Rules 2015 (Fixed price method vs Book building method); BSEC (Rights Issue) Rules 2006; Listing Regulations 2015 of DSE/CSE; Corporate Governance Code compliance.",
                            "topics": [
                                "BSEC regulatory framework and market surveillance powers",
                                "Public Issue Rules 2015: Eligibility for IPO, minimum paid-up capital, sponsor share lock-in",
                                "IPO methods: Fixed Price Method vs Book Building Method (bidding by institutional investors)",
                                "Rights Issue Rules: Conditions, eligibility, approval process, and renounceable letters of rights",
                                "Private placement of debt securities: BSEC guidelines for sukuk, green bonds, asset-backed securities",
                                "Stock Exchange Listing Regulations 2015: Continuous disclosures, price-sensitive information (PSI)",
                                "Corporate Governance Code 2018: Mandatory compliance, board composition, and governance audits"
                            ],
                            "learningOutcomes": ["Formulate IPO proposals under Fixed Price and Book Building methods.", "Ensure compliance with BSEC Rights Issue Rules.", "Identify Price Sensitive Information (PSI) and fulfill disclosure obligations."]
                        }
                    ]
                },
                {
                    "id": "p6-s3",
                    "title": "Area 3: Bank Companies Act & Financial Institutions Act",
                    "weightage": "15%",
                    "description": "Bank Companies Act 1991, licensing, board governance, non-performing loans, and NBFIs.",
                    "nodes": [
                        {
                            "id": "p6-s3-n1",
                            "name": "Banking Regulation, Governance & Non-Performing Loans",
                            "code": "P6.3.1",
                            "category": "Financial Sector Law",
                            "weightage": "15%",
                            "description": "Bank Companies Act 1991 (with recent amendments): Licensing by Bangladesh Bank, capital requirements (BASEL III overview), board constitution, single borrower exposure limits, classification of non-performing loans (NPLs); Financial Institutions Act 1993 for Non-Bank Financial Institutions (NBFIs).",
                            "topics": [
                                "Licensing and business restrictions of banking companies under Bank Companies Act 1991",
                                "Board of directors rules: Maximum directors from one family, independent directors, tenure limits",
                                "Single borrower exposure limit and related party lending restrictions",
                                "Non-Performing Loans (NPL): Classification categories (Sub-standard, Doubtful, Bad/Loss) and provisioning",
                                "Powers of Bangladesh Bank: Prompt Corrective Action (PCA), appointing observer/administrator",
                                "Financial Institutions Act 1993: Regulation of NBFIs, leasing, and merchant banks"
                            ],
                            "learningOutcomes": ["Apply Bank Companies Act restrictions on lending and family directorships.", "Classify loans and calculate mandatory loan-loss provisions.", "Explain Bangladesh Bank supervisory interventions under PCA."]
                        }
                    ]
                },
                {
                    "id": "p6-s4",
                    "title": "Area 4: Foreign Exchange Regulation Act & BIDA",
                    "weightage": "15%",
                    "description": "FERA 1947, foreign investment approvals, profit repatriation, and external commercial borrowing.",
                    "nodes": [
                        {
                            "id": "p6-s4-n1",
                            "name": "Foreign Exchange (FERA), BIDA & Profit Repatriation",
                            "code": "P6.4.1",
                            "category": "Foreign Investment Law",
                            "weightage": "15%",
                            "description": "Foreign Exchange Regulation Act 1947 (FERA): Authorized dealers, current account vs capital account transactions; Bangladesh Investment Development Authority (BIDA) registration; opening branch/liaison offices; repatriation of dividends, royalties, and franchise fees; External Commercial Borrowings (ECB).",
                            "topics": [
                                "FERA 1947 framework: Foreign currency dealing, authorized dealers, central bank circulars",
                                "Current account convertibility vs Capital account restrictions in Bangladesh",
                                "BIDA registration procedures for foreign direct investment (FDI)",
                                "Establishing Branch Office, Liaison/Representative Office, and permission renewals",
                                "Legal guidelines for outward remittance of dividend, technical fees, royalty, and consultancy fees",
                                "Foreign borrowing: External Commercial Borrowing (ECB) approvals by Bangladesh Bank committee",
                                "Money Laundering Prevention Act 2012 and compliance by reporting agencies"
                            ],
                            "learningOutcomes": ["Guide foreign investors through BIDA registration and office setup.", "Fulfill regulatory compliance for profit and dividend repatriation under FERA.", "Navigate Bangladesh Bank approvals for foreign currency commercial loans."]
                        }
                    ]
                }
            ]
        },

        # P7 IT Governance
        {
            "code": "p7",
            "paperCode": "P7",
            "title": "ICAB P7 - IT Governance",
            "name": "IT Governance",
            "level": "Professional Level",
            "category": "Professional Level Papers",
            "marks": 100,
            "duration": "4.0 Hours",
            "format": "Written & IS Audit Technical Paper (Aligned with CISA)",
            "summary": "Aligned with ISACA CISA standards, covering IT policies and cyber laws, COBIT/ITIL governance frameworks, Information Systems audit process, cybersecurity, BCP/DRP, and Big Data/AI.",
            "tags": ["Professional Level", "Core Exam", "Study Tracker", "CISA", "IT Audit", "COBIT", "Cybersecurity"],
            "stages": [
                {
                    "id": "p7-s1",
                    "title": "Area 1: IT Policies, Cyber Laws & Data Protection",
                    "weightage": "15%",
                    "description": "National IT Policy 2018, Cyber Security Act 2023, ICT Act 2006, and international data laws (GDPR).",
                    "nodes": [
                        {
                            "id": "p7-s1-n1",
                            "name": "National Cyber Legislation & Regulatory Compliance",
                            "code": "P7.1.1",
                            "category": "IT Law & Compliance",
                            "weightage": "15%",
                            "description": "National IT Policy 2018 strategic objectives; Information and Communication Technology (ICT) Act 2006 (amended 2013); Cyber Security Act 2023; digital evidence admissibility; legal protections for critical information infrastructure (CII); GDPR and global data compliance.",
                            "topics": [
                                "National IT Policy 2018: Vision for digital economy, governance, and human capital",
                                "ICT Act 2006 & Cyber Security Act 2023: Offenses, unauthorized access, hacking, electronic fraud",
                                "Critical Information Infrastructure (CII): Identification, security audits, and penalties for attack",
                                "Electronic signatures and legal evidentiary value of digital records",
                                "Data privacy principles and cross-border data transfer rules under GDPR and local laws",
                                "Intellectual property in software, copyright, and software licensing compliance"
                            ],
                            "learningOutcomes": ["Evaluate enterprise compliance with Bangladesh Cyber Security Act 2023.", "Determine legal admissibility requirements for digital audit evidence.", "Assess GDPR risks for cross-border e-commerce and financial platforms."]
                        }
                    ]
                },
                {
                    "id": "p7-s2",
                    "title": "Area 2: IT Governance Frameworks & Board Oversight",
                    "weightage": "25%",
                    "description": "COBIT 2019, ITIL 4, ISO/IEC 27001, IT steering committees, and IT investment governance.",
                    "nodes": [
                        {
                            "id": "p7-s2-n1",
                            "name": "COBIT 2019, ITIL 4 & Strategic Alignment",
                            "code": "P7.2.1",
                            "category": "IT Governance",
                            "weightage": "25%",
                            "description": "IT governance principles and Board oversight; COBIT 2019 framework (Governance vs Management, 40 core objectives); ITIL 4 service management; ISO/IEC 27001 Information Security Management System (ISMS); IT strategy committee and steering committee roles; IT balanced scorecard.",
                            "topics": [
                                "Definition of IT Governance and difference between governance and management",
                                "COBIT 2019 architecture: Governance System Principles, Design Factors, Focus Areas",
                                "COBIT domains: EDM (Evaluate, Direct, Monitor), APO, BAI, DSS, MEA",
                                "ITIL 4 Service Value System (SVS) and Service Value Chain",
                                "Role of IT Strategy Committee at the Board level and executive IT Steering Committee",
                                "IT risk management frameworks: Risk appetite, risk register, and heat maps",
                                "Measuring IT value delivery using IT Balanced Scorecard"
                            ],
                            "learningOutcomes": ["Design enterprise IT governance structures applying COBIT 2019.", "Establish roles for Board IT Strategy Committees.", "Evaluate IT service delivery against ITIL 4 standards."]
                        }
                    ]
                },
                {
                    "id": "p7-s3",
                    "title": "Area 3: Information Systems Audit Process & CAATs",
                    "weightage": "30%",
                    "description": "IS audit planning, ISACA Standards, testing IT controls, sampling, and CAATs.",
                    "nodes": [
                        {
                            "id": "p7-s3-n1",
                            "name": "IS Audit Execution, Controls Testing & CAATs",
                            "code": "P7.3.1",
                            "category": "IS Audit",
                            "weightage": "30%",
                            "description": "ISACA Information Systems Audit Standards and Code of Professional Ethics; risk-based IS audit planning; auditing IT General Controls (ITGC) and Application Controls; Computer-Assisted Audit Techniques (CAATs: IDEA, ACL); continuous auditing and reporting.",
                            "topics": [
                                "ISACA IS Audit Standards, Guidelines, and Code of Professional Ethics",
                                "Developing a risk-based IS audit program and audit charter",
                                "Auditing IT General Controls: Logical access, physical security, program change management, computer operations",
                                "Auditing Application Controls: Input controls, processing controls, output controls, error handling",
                                "Computer-Assisted Audit Techniques (CAATs): Data extraction, reconciliation, duplicate detection using ACL/IDEA",
                                "Continuous auditing and automated continuous monitoring techniques",
                                "Drafting IS audit findings, risk ratings, and management recommendations"
                            ],
                            "learningOutcomes": ["Conduct an IS audit in accordance with ISACA standards.", "Perform comprehensive testing of ITGCs and application controls.", "Apply CAATs for automated audit testing and fraud detection."]
                        }
                    ]
                },
                {
                    "id": "p7-s4",
                    "title": "Area 4: Cybersecurity, BCP & Disaster Recovery",
                    "weightage": "20%",
                    "description": "Threat intelligence, penetration testing, SOC, BCP/DRP testing, and ransomware resilience.",
                    "nodes": [
                        {
                            "id": "p7-s4-n1",
                            "name": "Cyber Defense, Incident Response & BCP/DRP",
                            "code": "P7.4.1",
                            "category": "Cyber & Resilience",
                            "weightage": "20%",
                            "description": "Defense-in-depth architecture; Security Operations Center (SOC); vulnerability assessments and penetration testing; cyber incident response plan; Business Impact Analysis (BIA); Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP) testing methods (walkthrough, simulation, parallel, full interruption).",
                            "topics": [
                                "Defense-in-depth principles: Perimeter security, endpoint protection, zero-trust architecture",
                                "Vulnerability scanning, ethical hacking, and penetration testing methodologies",
                                "Security Information and Event Management (SIEM) and 24/7 SOC monitoring",
                                "Cyber incident response lifecycle: Preparation, Detection, Containment, Eradication, Recovery",
                                "Business Impact Analysis (BIA): Determining critical business functions, RTO, and RPO",
                                "Disaster Recovery hot sites, warm sites, and cold sites evaluation",
                                "BCP/DRP testing types: Checklist review, tabletop walkthrough, simulation, parallel test, cutover"
                            ],
                            "learningOutcomes": ["Evaluate zero-trust and defense-in-depth cybersecurity architectures.", "Conduct a Business Impact Analysis (BIA) and establish recovery targets.", "Design and evaluate disaster recovery testing exercises."]
                        }
                    ]
                },
                {
                    "id": "p7-s5",
                    "title": "Area 5: Big Data, AI & Emerging Tech in AIS",
                    "weightage": "10%",
                    "description": "Big Data in AIS, blockchain in auditing, AI-powered fraud detection, and cloud audit.",
                    "nodes": [
                        {
                            "id": "p7-s5-n1",
                            "name": "Big Data Analytics, Blockchain & AI in Audit",
                            "code": "P7.5.1",
                            "category": "Emerging Tech Audit",
                            "weightage": "10%",
                            "description": "Big Data applications in Accounting Information Systems (AIS); blockchain technology for audit trail verification; Artificial Intelligence in forensic accounting and automated fraud detection; auditing cloud service providers and SOC reports (SOC 1, SOC 2 Type II).",
                            "topics": [
                                "Big Data architecture in modern enterprise accounting systems",
                                "Using analytics and machine learning for journal entry testing and anomaly detection",
                                "Blockchain and smart contracts: Triple-entry bookkeeping and immutable audit logs",
                                "Auditing artificial intelligence algorithms: Bias, explainability, and validation",
                                "Third-party cloud vendor audits: Evaluating SOC 1 / SSAE 18 and SOC 2 Type II reports"
                            ],
                            "learningOutcomes": ["Analyze Big Data in financial systems for fraud patterns.", "Audit smart contracts and blockchain ledger transactions.", "Interpret SOC 1 and SOC 2 reports for cloud outsourced services."]
                        }
                    ]
                }
            ]
        },

        # V1 Corporate Reporting
        {
            "code": "v1",
            "paperCode": "V1",
            "title": "ICAB V1 - Corporate Reporting",
            "name": "Corporate Reporting",
            "level": "Advanced Level",
            "category": "Advanced Level Papers",
            "marks": 100,
            "duration": "3.5 Hours",
            "format": "Written & Complex Multi-Disciplinary Case Examination",
            "summary": "Mastery of complex IFRS/IAS/IFRIC standards, group reporting with foreign subsidiaries, complex financial instruments, business valuations, advanced audit and forensic assurance, and IFRS Sustainability Standards (S1/S2).",
            "tags": ["Advanced Level", "Core Exam", "Study Tracker", "Complex IFRS", "Advanced Audit", "ESG Reporting"],
            "stages": [
                {
                    "id": "v1-s1",
                    "title": "Area 1: Complex Corporate Reporting – Compliance",
                    "weightage": "45%",
                    "description": "Complex IFRS/IAS (IFRS 9, IFRS 15, IFRS 16, IAS 19, IAS 21 foreign currency, step acquisitions).",
                    "nodes": [
                        {
                            "id": "v1-s1-n1",
                            "name": "Complex Financial Instruments (IFRS 9) & Employee Benefits (IAS 19)",
                            "code": "V1.1.1",
                            "category": "Advanced Standards",
                            "weightage": "20%",
                            "description": "IFRS 9 classification and measurement (Amortized Cost, FVOCI, FVTPL); Expected Credit Loss (ECL) 3-stage model; hedge accounting (fair value hedges, cash flow hedges); IAS 19 Employee Benefits: Defined benefit pension schemes, actuarial gains/losses, asset ceiling.",
                            "topics": [
                                "IFRS 9 Business model test and SPPI (Solely Payments of Principal and Interest) cash flow test",
                                "Financial liabilities: Amortized cost vs fair value option and credit risk treatment",
                                "Expected Credit Loss (ECL) impairment: Stage 1 (12-month), Stage 2 (lifetime), Stage 3 (default)",
                                "Hedge accounting requirements: Designated hedging instrument, hedged item, hedge ratio, testing",
                                "Cash flow hedge reserve accounting vs fair value hedge adjustments",
                                "IAS 19 Defined Benefit plans: Present value of obligation, plan assets, service costs",
                                "Remeasurements through OCI and asset ceiling test (IFRIC 14)"
                            ],
                            "learningOutcomes": ["Apply IFRS 9 ECL model to banking and corporate loan portfolios.", "Account for complex derivatives and cash flow hedges.", "Calculate defined benefit pension liabilities and OCI remeasurements."]
                        },
                        {
                            "id": "v1-s1-n2",
                            "name": "Advanced Group Accounts: Step Acquisitions & Foreign Subsidiaries (IAS 21)",
                            "code": "V1.1.2",
                            "category": "Complex Consolidation",
                            "weightage": "25%",
                            "description": "Step acquisitions (associate becoming subsidiary); partial disposals retaining control or losing control; foreign currency translation of overseas subsidiaries (IAS 21: Closing rate method, exchange differences in OCI); group statement of cash flows; joint arrangements (IFRS 11).",
                            "topics": [
                                "Step acquisitions: Remeasuring previously held interest to fair value through P&L",
                                "Disposal of subsidiary with loss of control: Derecognition, fair value of retained interest, gain/loss calculation",
                                "Disposal without loss of control: Equity transaction with NCI, no gain/loss in P&L",
                                "IAS 21 Foreign currency translation: Functional currency determination",
                                "Translating foreign subsidiary financial statements: Closing rate for B/S, average rate for P&L, translation reserve in OCI",
                                "Group Statement of Cash Flows: Acquisitions, disposals, foreign exchange effects on cash balances",
                                "IFRS 11 Joint Arrangements: Joint Operations vs Joint Ventures (equity method)"
                            ],
                            "learningOutcomes": ["Prepare group accounts for step acquisitions and partial disposals.", "Translate foreign subsidiary financial statements and compute exchange reserves.", "Construct group consolidated cash flow statements."]
                        }
                    ]
                },
                {
                    "id": "v1-s2",
                    "title": "Area 2: Financial Statement Analysis & Valuation",
                    "weightage": "15%",
                    "description": "Multi-year earnings quality, financial distress modeling (Altman Z-score), and entity valuation.",
                    "nodes": [
                        {
                            "id": "v1-s2-n1",
                            "name": "Earnings Quality, Distress Prediction & Valuation",
                            "code": "V1.2.1",
                            "category": "Advanced Analysis",
                            "weightage": "15%",
                            "description": "Earnings quality analysis; aggressive revenue recognition detection; Beneish M-Score and Altman Z-Score financial distress models; enterprise valuation synthesizing discounted cash flows and market multiples for M&A transactions.",
                            "topics": [
                                "Evaluating earnings quality: Accruals quality, persistence, and cash flow backing",
                                "Detecting financial statement manipulation using Beneish M-Score indicators",
                                "Bankruptcy prediction models: Altman Z-Score for manufacturing and service entities",
                                "Adjusted Present Value (APV) method for highly leveraged buyouts",
                                "Enterprise valuation under complex capital structures and cross-holding adjustments"
                            ],
                            "learningOutcomes": ["Audit earnings quality and identify manipulation signals.", "Calculate Altman Z-score to predict insolvency risk.", "Value acquisition targets in cross-border takeovers."]
                        }
                    ]
                },
                {
                    "id": "v1-s3",
                    "title": "Area 3: Audit & Assurance in Complex Environments",
                    "weightage": "30%",
                    "description": "Advanced auditing of complex groups, forensic accounting, transnational audit, and audit opinions.",
                    "nodes": [
                        {
                            "id": "v1-s3-n1",
                            "name": "Group Audits (ISA 600), Forensic Investigations & Reporting",
                            "code": "V1.3.1",
                            "category": "Advanced Assurance",
                            "weightage": "30%",
                            "description": "ISA 600 (Revised) Audits of Group Financial Statements: Component auditors, group materiality, consolidation adjustments; forensic accounting investigations and fraud evidence; transnational auditing challenges; audit reporting on complex groups.",
                            "topics": [
                                "ISA 600 (Revised): Group auditor responsibilities, component identification, communication",
                                "Evaluating work of component auditors and determining component materiality",
                                "Auditing consolidation journals, goodwill impairment tests, and foreign exchange reserves",
                                "Forensic investigation techniques: Interviewing, digital evidence forensics, asset tracing",
                                "Auditing transnational and multinational entities with divergent regulatory frameworks",
                                "Complex auditor reporting: Group audit opinion modifications, emphasis of matters, KAM synthesis"
                            ],
                            "learningOutcomes": ["Lead group audit engagements in compliance with ISA 600 (Revised).", "Design forensic audit procedures for suspected corporate fraud.", "Formulate audit opinions for complex global corporate groups."]
                        }
                    ]
                },
                {
                    "id": "v1-s4",
                    "title": "Area 4: Public Financial Management & Sustainability (ISSB)",
                    "weightage": "10%",
                    "description": "IFRS S1 and S2 sustainability disclosures, ESG metrics assurance, and public sector governance.",
                    "nodes": [
                        {
                            "id": "v1-s4-n1",
                            "name": "IFRS S1/S2 Sustainability Disclosures & ESG Assurance",
                            "code": "V1.4.1",
                            "category": "ESG & Sustainability",
                            "weightage": "10%",
                            "description": "IFRS S1 General Requirements for Disclosure of Sustainability-related Financial Information; IFRS S2 Climate-related Disclosures (Scope 1, 2, and 3 greenhouse gas emissions); assurance on sustainability reports under ISSA 5000; public sector financial reporting and IPSAS.",
                            "topics": [
                                "IFRS S1 Core content: Governance, Strategy, Risk Management, Metrics and Targets",
                                "IFRS S2 Climate disclosures: Physical climate risks, transition risks, scenario analysis",
                                "Greenhouse Gas (GHG) Protocol: Scope 1 (direct), Scope 2 (electricity), Scope 3 (value chain)",
                                "Independent assurance on ESG disclosures under ISSA 5000 General Requirements",
                                "Public Financial Management (PFM) reforms and IPSAS implementation in government entities"
                            ],
                            "learningOutcomes": ["Structure corporate sustainability disclosures under IFRS S1 and S2.", "Compute and report Scope 1, 2, and 3 GHG emissions.", "Plan an assurance engagement on sustainability reports under ISSA 5000."]
                        }
                    ]
                }
            ]
        },

        # V2 Strategic Business Management and Leadership
        {
            "code": "v2",
            "paperCode": "V2",
            "title": "ICAB V2 - Strategic Business Management & Leadership",
            "name": "Strategic Business Management and Leadership",
            "level": "Advanced Level",
            "category": "Advanced Level Papers",
            "marks": 100,
            "duration": "3.5 Hours",
            "format": "Written & Executive Leadership Case Examination",
            "summary": "Integrates strategic management, digital leadership, corporate restructuring, advanced financial strategy, enterprise risk management (ERM), and ethical leadership in complex real-world scenarios.",
            "tags": ["Advanced Level", "Core Exam", "Study Tracker", "Executive Strategy", "Digital Leadership", "M&A Restructuring"],
            "stages": [
                {
                    "id": "v2-s1",
                    "title": "Area 1: Business & Digital Strategy and Leadership",
                    "weightage": "35%",
                    "description": "Strategic leadership, executive vision, digital transformation, enterprise agility, and ERM.",
                    "nodes": [
                        {
                            "id": "v2-s1-n1",
                            "name": "Executive Leadership, Digital Transformation & ERM",
                            "code": "V2.1.1",
                            "category": "Executive Strategy",
                            "weightage": "35%",
                            "description": "Strategic leadership styles; organizational agility; digital business strategy and platform ecosystems; Enterprise Risk Management (COSO ERM framework); business model disruption and turnaround strategies for distressed companies.",
                            "topics": [
                                "Leadership models: Transformational, transactional, servant, and situational leadership",
                                "Strategic vision formulation and leading organizational change under severe market disruption",
                                "Digital transformation strategy: Cloud platforms, AI integration, IoT, and API ecosystems",
                                "COSO Enterprise Risk Management (ERM) framework: Governance, Strategy, Performance, Review",
                                "Corporate turnaround strategies: Retrenchment, restructuring, refinancing, and repositioning",
                                "Executive talent management, board succession planning, and corporate culture alignment"
                            ],
                            "learningOutcomes": ["Formulate digital transformation strategies for traditional businesses.", "Design and implement COSO ERM frameworks across operating divisions.", "Develop turnaround plans for distressed business enterprises."]
                        }
                    ]
                },
                {
                    "id": "v2-s2",
                    "title": "Area 2: Financial Strategy & Restructuring",
                    "weightage": "35%",
                    "description": "Corporate restructuring, MBOs, spin-offs, demergers, international treasury, and valuation.",
                    "nodes": [
                        {
                            "id": "v2-s2-n1",
                            "name": "M&A, Management Buyouts (MBOs) & International Treasury",
                            "code": "V2.2.1",
                            "category": "Financial Engineering",
                            "weightage": "35%",
                            "description": "Corporate reorganization: Spin-offs, demergers, equity carve-outs, Management Buyouts (MBO/MBI); leveraged buyouts (LBOs) and mezzanine financing; international treasury: Cross-border cash pooling, multilateral netting, and global capital raising; enterprise valuation in complex transactions.",
                            "topics": [
                                "Restructuring strategies: Demergers, spin-offs, carve-outs, liquidation of non-core assets",
                                "Management Buyouts (MBOs) and Buy-ins (MBIs): Deal structuring, venture capital backing, warranties",
                                "Leveraged Buyout (LBO) financial engineering: Senior debt, mezzanine finance, equity sweetners",
                                "International treasury management: Cash pooling (notional vs physical), multilateral netting centers",
                                "Global capital raising: ADRs, GDRs, foreign currency sovereign and corporate bonds",
                                "Financial defense tactics against hostile takeovers: Poison pills, white knights, crown jewel defense"
                            ],
                            "learningOutcomes": ["Structure MBO and LBO financial packages with optimal debt-equity layers.", "Design international cash management and pooling arrangements.", "Formulate anti-takeover defenses for public listed entities."]
                        }
                    ]
                },
                {
                    "id": "v2-s3",
                    "title": "Area 3: Integrated Governance, Ethics, Assurance & ESG",
                    "weightage": "30%",
                    "description": "Integrated Reporting (<IR> Framework), ethical leadership, board effectiveness, and ESG stewardship.",
                    "nodes": [
                        {
                            "id": "v2-s3-n1",
                            "name": "Integrated Reporting (<IR>), Board Stewardship & ESG Governance",
                            "code": "V2.3.1",
                            "category": "Integrated Governance",
                            "weightage": "30%",
                            "description": "International <IR> Framework (Six Capitals: Financial, Manufactured, Intellectual, Human, Social & Relationship, Natural); corporate governance failures and board oversight; ethical decision-making frameworks; ESG governance, biodiversity, and climate stewardship.",
                            "topics": [
                                "International Integrated Reporting (<IR>) Framework: Six Capitals and value creation over time",
                                "Connectivity of information: Linking strategic objectives, risks, performance, and remuneration",
                                "Board effectiveness evaluation, audit committee oversight of non-financial metrics",
                                "Ethical leadership dilemmas: Whistleblower protection, executive pay disparities, supply chain labor",
                                "Corporate climate stewardship aligned with Bangladesh's Delta Plan 2100 and SDG targets",
                                "Assurance over integrated reports and non-financial performance indicators"
                            ],
                            "learningOutcomes": ["Draft an Integrated Report applying the Six Capitals framework.", "Advise corporate boards on executive compensation and governance alignment.", "Establish ESG stewardship systems resilient to global supply chain audits."]
                        }
                    ]
                }
            ]
        },

        # V3 Case Study
        {
            "code": "v3",
            "paperCode": "V3",
            "title": "ICAB V3 - Case Study",
            "name": "Case Study",
            "level": "Advanced Level",
            "category": "Advanced Level Papers",
            "marks": 100,
            "duration": "4.5 Hours",
            "format": "Written & Capstone Strategic Simulation (Advance Information + Unseen)",
            "summary": "Capstone professional simulation requiring candidates to analyze advance business information, process unseen exam-day material, synthesize complex financial, strategic, ethical, and assurance challenges, and draft an executive report with actionable board recommendations.",
            "tags": ["Advanced Level", "Capstone Exam", "Study Tracker", "Case Simulation", "Executive Report", "Board Advisory"],
            "stages": [
                {
                    "id": "v3-s1",
                    "title": "Area 1: Strategic Business Analysis & Environmental Evaluation",
                    "weightage": "25%",
                    "description": "Deconstructing advance information, industry dynamics, competitive positioning, and SWOT synthesis.",
                    "nodes": [
                        {
                            "id": "v3-s1-n1",
                            "name": "Advance Information Analysis & Strategic Diagnosis",
                            "code": "V3.1.1",
                            "category": "Case Analysis",
                            "weightage": "25%",
                            "description": "Scrutiny of Advance Information (AI); industry benchmark comparisons; business model identification; external threats and opportunities; internal operational bottlenecks; stakeholder power dynamics.",
                            "topics": [
                                "Advance Information (AI) analytical methodology: Timeline, key actors, financial baseline",
                                "Industry analysis and macro-economic factors impacting the case entity",
                                "SWOT and PESTEL synthesis tailored to specific industry context",
                                "Competitor benchmarking and operational cost driver analysis",
                                "Identifying operational vulnerabilities, capacity constraints, and supply chain dependencies"
                            ],
                            "learningOutcomes": ["Synthesize complex advance business data into a strategic diagnosis.", "Benchmark operational performance against industry competitors.", "Identify strategic threats requiring executive board intervention."]
                        }
                    ]
                },
                {
                    "id": "v3-s2",
                    "title": "Area 2: Financial Analysis, Corporate Reporting & Forecasting",
                    "weightage": "25%",
                    "description": "Unseen financial data processing, ratio interpretation, forecasting, and investment evaluation.",
                    "nodes": [
                        {
                            "id": "v3-s2-n1",
                            "name": "Financial Appraisal, Ratio Analysis & Sensitivity Modeling",
                            "code": "V3.2.1",
                            "category": "Financial Synthesis",
                            "weightage": "25%",
                            "description": "Analysis of unseen financial exhibits; recalculating profitability, working capital cycles, and debt covenants; preparing financial projections; sensitivity analysis on proposed capital projects or acquisitions.",
                            "topics": [
                                "Interpreting unseen financial information under strict exam time constraints",
                                "Recalculating key financial ratios: Gross margin, EBITDA margin, ROCE, interest cover, gearing",
                                "Evaluating financial projections and cash flow forecasts provided by management",
                                "Conducting sensitivity analysis on critical revenue, cost, and interest rate assumptions",
                                "Assessing impact on bank borrowing covenants and liquidity cushions"
                            ],
                            "learningOutcomes": ["Extract and recalculate critical financial metrics from unseen exhibits.", "Perform sensitivity analysis on proposed investments.", "Evaluate loan covenant compliance under stressed scenarios."]
                        }
                    ]
                },
                {
                    "id": "v3-s3",
                    "title": "Area 3: Assurance, Risk Management, Governance & Ethics",
                    "weightage": "25%",
                    "description": "Identifying hidden financial/operational risks, ethical conflicts, and internal control breakdowns.",
                    "nodes": [
                        {
                            "id": "v3-s3-n1",
                            "name": "Risk Evaluation, Internal Controls & Ethical Dilemmas",
                            "code": "V3.3.1",
                            "category": "Risk & Ethics",
                            "weightage": "25%",
                            "description": "Identification and prioritization of strategic, operational, financial, and compliance risks; evaluation of internal control failures and fraud red flags; resolution of complex ethical dilemmas involving management pressure, confidentiality, and public interest.",
                            "topics": [
                                "Enterprise risk mapping: Impact vs likelihood matrix for case enterprise",
                                "Identifying internal control deficiencies and accounting irregularities",
                                "Evaluating fraud indicators, whistleblowing reports, and related-party dealings",
                                "Ethical evaluation using IESBA fundamental principles and threat framework",
                                "Balancing commercial profitability with stakeholder welfare and legal compliance"
                            ],
                            "learningOutcomes": ["Prioritize enterprise risks and design mitigating controls.", "Identify and resolve complex professional ethical dilemmas.", "Recommend governance enhancements to prevent corporate irregularities."]
                        }
                    ]
                },
                {
                    "id": "v3-s4",
                    "title": "Area 4: Strategic Recommendations & Executive Report Writing",
                    "weightage": "25%",
                    "description": "Report structure, professional tone, actionable recommendations, and implementation plan.",
                    "nodes": [
                        {
                            "id": "v3-s4-n1",
                            "name": "Professional Report Structure, Strategy & Implementation Plan",
                            "code": "V3.4.1",
                            "category": "Executive Reporting",
                            "weightage": "25%",
                            "description": "Structuring a formal board report (Title, Executive Summary, Introduction, Strategic Analysis, Financial Analysis, Strategic Options, Recommendations, Implementation Timetable); drafting persuasive, commercially realistic, and ethically sound recommendations.",
                            "topics": [
                                "Formal report format: Title, To/From/Date/Subject, Executive Summary, Table of Contents",
                                "Drafting a concise Executive Summary capturing key findings and strategic proposals",
                                "Formulating 2 to 3 distinct strategic alternatives with pros, cons, and financial impacts",
                                "Justifying a definitive commercial recommendation with clear rationale",
                                "Developing a detailed implementation plan: Milestones, resource allocation, KPI targets, risk mitigation",
                                "Maintaining professional skepticism and executive communication tone throughout"
                            ],
                            "learningOutcomes": ["Author a professional board-level report under strict time limits.", "Provide clear, prioritized, and commercially viable strategic recommendations.", "Design realistic implementation roadmaps with risk contingencies."]
                        }
                    ]
                }
            ]
        }
    ]
    return pro_adv

def build_paper_dataset(spec):
    """Constructs the complete roadmap dataset following the standardized schema."""
    paper_id = f"icab-{spec['code']}"
    dataset = {
        "id": paper_id,
        "title": spec["title"],
        "paperCode": spec["paperCode"],
        "level": spec["level"],
        "marks": spec["marks"],
        "duration": spec["duration"],
        "format": spec["format"],
        "region": "Bangladesh",
        "category": spec["category"],
        "tags": spec.get("tags", [spec["level"], "Core Exam", "Study Tracker"]),
        "summary": spec["summary"],
        "parentRoadmap": {
            "id": "icab",
            "label": "ICAB CA Curriculum (2025)",
            "returnHash": "icab-grad",
            "nodeId": spec["code"]
        },
        "defaultRoute": "all",
        "routes": {
            "all": {
                "id": "all",
                "name": "Full Syllabus Tracker",
                "default": True,
                "blurb": f"Official 2025 Syllabus chapter and topic tracker for {spec['name']}. Track your study progress across all syllabus areas.",
                "stages": []
            }
        }
    }

    # Add stages
    for stage_spec in spec["stages"]:
        stage_obj = {
            "id": stage_spec["id"],
            "title": stage_spec["title"],
            "name": stage_spec.get("name", stage_spec["title"]),
            "weightage": stage_spec.get("weightage", ""),
            "description": stage_spec.get("description", ""),
            "nodes": []
        }
        for node_spec in stage_spec["nodes"]:
            node_obj = {
                "id": node_spec["id"],
                "name": node_spec["name"],
                "code": node_spec["code"],
                "category": node_spec.get("category", "Core Theory"),
                "weightage": node_spec.get("weightage", ""),
                "description": node_spec["description"],
                "topics": node_spec.get("topics", []),
                "learningOutcomes": node_spec.get("learningOutcomes", []),
                "checklists": node_spec.get("checklists", [
                    f"Read {node_spec['name']} in ICAB Study Manual",
                    "Complete chapter review practice questions",
                    "Review past exam scenario questions"
                ]),
                "resources": [
                    "ICAB Study Manual (2025 Edition)",
                    "ICAB Latest Syllabus 2025 (Official Document)",
                    "Relevant Acts & Standards (IFRS / ISA / Tax Acts)"
                ]
            }
            stage_obj["nodes"].append(node_obj)
        dataset["routes"]["all"]["stages"].append(stage_obj)

    return dataset

def main():
    all_specs = PAPER_SPECS + generate_professional_and_advanced_specs()
    print(f"Generating {len(all_specs)} individual paper roadmaps...")

    created_files = []
    for spec in all_specs:
        dataset = build_paper_dataset(spec)
        filename = f"icab-{spec['code']}.json"
        filepath = os.path.join(DATA_DIR, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(dataset, f, indent=2, ensure_ascii=False)
        created_files.append(filename)
        print(f"  ✓ Created data/{filename} ({spec['level']} - {len(dataset['routes']['all']['stages'])} stages, {sum(len(s['nodes']) for s in dataset['routes']['all']['stages'])} topic nodes)")

    print(f"\nSuccessfully generated {len(created_files)} individual paper roadmaps in data/!")

if __name__ == "__main__":
    main()
