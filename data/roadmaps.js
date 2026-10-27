/**
 * Chartered Roadmap - Bundled Datasets
 * Offline-friendly bundle ensuring roadmaps load instantly whether via HTTP(S) or local file:///
 */
window.ROADMAP_DATA = window.ROADMAP_DATA || {};
window.ROADMAP_DATA['icab'] = {
  "id": "icab",
  "title": "ICAB Chartered Accountancy (CA)",
  "region": "Bangladesh",
  "body": "The Institute of Chartered Accountants of Bangladesh (ICAB)",
  "officialUrl": "https://www.icab.org.bd/students",
  "lastVerified": "2024-09-25",
  "source": "ICAB 'How to become a CA' Brochure (25 September 2024)",
  "summary": "The ICAB CA qualification comprises three progressive examination levels (Certificate, Professional, and Advanced), a mandatory articleship at an approved CA firm, and ethics/professional training. Entry requirements and articleship duration vary based on your academic path.",
  "defaultRoute": "grad",
  "routes": {
    "grad": {
      "id": "grad",
      "name": "Graduate (Honours / Masters)",
      "tag": "Any Discipline",
      "blurb": "For graduates and post-graduates in any discipline. Articleship duration is 3 years, with exams taken in parallel.",
      "stages": [
        {
          "id": "eligibility",
          "title": "Check Eligibility",
          "subtitle": "Academic criteria & university credit exemptions",
          "nodes": [
            {
              "id": "g1",
              "name": "Meet Academic Criteria",
              "category": "Admin",
              "description": "Graduation or post-graduation in any discipline with at least 7 points in total and at least 2 points at each level up to graduation from a recognised board/university (CGPA 3.0+ = 3 points, CGPA 2.0-2.99 = 2 points)."
            },
            {
              "id": "g2",
              "name": "Claim University Exemptions (CPL)",
              "category": "Admin",
              "description": "If your university department has an ICAB MoU or Credit for Prior Learning (CPL) agreement, submit transcripts to claim subject-wise Certificate Level exemptions."
            }
          ]
        },
        {
          "id": "articleship-entry",
          "title": "Join a CA Firm",
          "subtitle": "Articleship duration: 3 Years",
          "nodes": [
            {
              "id": "f1",
              "name": "Register with an Approved CA Firm",
              "category": "Admin",
              "description": "Secure a position as an articled student at an ICAB-approved Chartered Accountancy firm. Receive the monthly student allowance prescribed by ICAB."
            },
            {
              "id": "t1",
              "name": "Pre-Articleship Training Course (PATC)",
              "category": "Training",
              "description": "Mandatory 1-month intensive course on Audit & Assurance fundamentals and English business communication before commencing firm duties."
            },
            {
              "id": "g4",
              "name": "Complete 3-Year Articleship",
              "category": "Experience",
              "description": "Undergo 3 full years of supervised audit, tax, advisory, and accounting practical training at the firm."
            }
          ]
        },
        {
          "id": "certificate-level",
          "title": "Certificate Level (CL)",
          "subtitle": "7 computer-based objective exams (MCQ, scenario, calculation)",
          "nodes": [
            { "id": "c1", "name": "Accounting", "category": "Exam", "description": "Foundations of financial accounting, double-entry mechanics, and statutory financial statement preparation." },
            { "id": "c2", "name": "Assurance", "category": "Exam", "description": "Fundamentals of audit and assurance services, internal control mechanisms, and professional scepticism." },
            { "id": "c3", "name": "Business, Technology and Finance", "category": "Exam", "description": "Organizational management, technology integration in business operations, and capital finance basics." },
            { "id": "c4", "name": "Management Information", "category": "Exam", "description": "Costing methodologies, budgeting techniques, and management decision support systems." },
            { "id": "c5", "name": "Principles of Taxation", "category": "Exam", "description": "Fundamentals of Bangladesh direct and indirect tax laws, income tax rules, and VAT." },
            { "id": "c6", "name": "Business Laws", "category": "Exam", "description": "Bangladesh legal framework governing contracts, sales of goods, partnerships, and negotiable instruments." },
            { "id": "c7", "name": "Information Technology", "category": "Exam", "description": "Information systems, cybersecurity foundations, cloud enterprise computing, and database essentials." }
          ]
        },
        {
          "id": "professional-level",
          "title": "Professional Level (PL)",
          "subtitle": "7 application-focused technical papers",
          "nodes": [
            { "id": "p1", "name": "Financial Accounting and Reporting", "category": "Exam", "description": "Complex IFRS/IAS standards, group accounts, consolidated statements, and practical accounting scenarios." },
            { "id": "p2", "name": "Audit and Assurance", "category": "Exam", "description": "Audit execution under International Standards on Auditing (ISA), risk assessments, and reporting." },
            { "id": "p3", "name": "Business Planning: Taxation & Compliance", "category": "Exam", "description": "Corporate tax planning, fiscal compliance, assessments, appeals, and VAT administration in Bangladesh." },
            { "id": "p4", "name": "Financial Management", "category": "Exam", "description": "Capital budgeting, cost of capital, dividend policy, financial restructuring, and risk management." },
            { "id": "p5", "name": "Business Strategy and Technology", "category": "Exam", "description": "Strategic analysis, competitive positioning, business model innovation, and technology adoption." },
            { "id": "p6", "name": "Corporate Laws and Practices", "category": "Exam", "description": "Bangladesh Companies Act, SEC guidelines, corporate governance codes, and winding-up procedures." },
            { "id": "p7", "name": "IT Governance", "category": "Exam", "description": "IT risk frameworks, internal audit of IT systems, COBIT alignment, and digital control security." }
          ]
        },
        {
          "id": "advanced-level",
          "title": "Advanced Level (AL)",
          "subtitle": "2 integrated strategic papers & the Capstone Case Study",
          "nodes": [
            { "id": "v1", "name": "Corporate Reporting", "category": "Exam", "description": "Advanced multi-entity financial reporting, forensic review, auditing ethics, and corporate governance integration." },
            { "id": "v2", "name": "Strategic Business Management & Leadership", "category": "Exam", "description": "Senior executive decision-making integrating financial strategy, risk management, and organizational leadership." },
            { "id": "v3", "name": "Case Study", "category": "Exam", "description": "The capstone four-hour integrated business simulation requiring a comprehensive board-level advisory report." }
          ]
        },
        {
          "id": "qualification",
          "title": "Qualify as a Chartered Accountant",
          "subtitle": "Membership & Designation",
          "nodes": [
            {
              "id": "e1",
              "name": "Ethics & Professional Development",
              "category": "Ethics",
              "description": "Complete mandatory professional ethics modules and continuous professional development (CPD) requirements."
            },
            {
              "id": "m1",
              "name": "ICAB Associate Membership (ACA)",
              "category": "Admin",
              "description": "Submit articleship completion verification and exam transcripts to be formally admitted as an Associate Chartered Accountant (ACA)."
            }
          ]
        }
      ]
    },
    "hsc": {
      "id": "hsc",
      "name": "HSC / A Level",
      "tag": "School Leavers",
      "blurb": "Direct entry route after HSC, A Level, or equivalent. Articleship duration is 4 years (3.5 years for high A Level achievers).",
      "stages": [
        {
          "id": "eligibility",
          "title": "Check Eligibility",
          "subtitle": "Secondary education GPA requirements",
          "nodes": [
            {
              "id": "h1",
              "name": "Academic Merit Requirements",
              "category": "Admin",
              "description": "Minimum aggregate GPA 8.0 in SSC & HSC combined, or minimum 36 O Level points (5-7 subjects) and 12 A Level points (up to 3 subjects)."
            }
          ]
        },
        {
          "id": "articleship-entry",
          "title": "Join a CA Firm",
          "subtitle": "Articleship duration: 4 Years",
          "nodes": [
            {
              "id": "f1",
              "name": "Register with an Approved CA Firm",
              "category": "Admin",
              "description": "Join an ICAB-approved firm directly. Fast-track to 3.5 years if achieving Grade A in three A Level subjects with required O Levels."
            },
            {
              "id": "t1",
              "name": "Pre-Articleship Training Course (PATC)",
              "category": "Training",
              "description": "Mandatory 1-month course on Audit & Assurance fundamentals and English business communication."
            },
            {
              "id": "h3",
              "name": "Complete 4-Year Articleship",
              "category": "Experience",
              "description": "4 years of hands-on articleship training concurrently with examination attempts."
            }
          ]
        },
        {
          "id": "certificate-level",
          "title": "Certificate Level (CL)",
          "subtitle": "7 computer-based objective exams",
          "nodes": [
            { "id": "c1", "name": "Accounting", "category": "Exam", "description": "Foundations of financial accounting, double-entry mechanics, and statutory financial statement preparation." },
            { "id": "c2", "name": "Assurance", "category": "Exam", "description": "Fundamentals of audit and assurance services, internal control mechanisms, and professional scepticism." },
            { "id": "c3", "name": "Business, Technology and Finance", "category": "Exam", "description": "Organizational management, technology integration in business operations, and capital finance basics." },
            { "id": "c4", "name": "Management Information", "category": "Exam", "description": "Costing methodologies, budgeting techniques, and management decision support systems." },
            { "id": "c5", "name": "Principles of Taxation", "category": "Exam", "description": "Fundamentals of Bangladesh direct and indirect tax laws, income tax rules, and VAT." },
            { "id": "c6", "name": "Business Laws", "category": "Exam", "description": "Bangladesh legal framework governing contracts, sales of goods, partnerships, and negotiable instruments." },
            { "id": "c7", "name": "Information Technology", "category": "Exam", "description": "Information systems, cybersecurity foundations, cloud enterprise computing, and database essentials." }
          ]
        },
        {
          "id": "professional-level",
          "title": "Professional Level (PL)",
          "subtitle": "7 application-focused technical papers",
          "nodes": [
            { "id": "p1", "name": "Financial Accounting and Reporting", "category": "Exam", "description": "Complex IFRS/IAS standards, group accounts, consolidated statements, and practical accounting scenarios." },
            { "id": "p2", "name": "Audit and Assurance", "category": "Exam", "description": "Audit execution under International Standards on Auditing (ISA), risk assessments, and reporting." },
            { "id": "p3", "name": "Business Planning: Taxation & Compliance", "category": "Exam", "description": "Corporate tax planning, fiscal compliance, assessments, appeals, and VAT administration in Bangladesh." },
            { "id": "p4", "name": "Financial Management", "category": "Exam", "description": "Capital budgeting, cost of capital, dividend policy, financial restructuring, and risk management." },
            { "id": "p5", "name": "Business Strategy and Technology", "category": "Exam", "description": "Strategic analysis, competitive positioning, business model innovation, and technology adoption." },
            { "id": "p6", "name": "Corporate Laws and Practices", "category": "Exam", "description": "Bangladesh Companies Act, SEC guidelines, corporate governance codes, and winding-up procedures." },
            { "id": "p7", "name": "IT Governance", "category": "Exam", "description": "IT risk frameworks, internal audit of IT systems, COBIT alignment, and digital control security." }
          ]
        },
        {
          "id": "advanced-level",
          "title": "Advanced Level (AL)",
          "subtitle": "2 integrated strategic papers & the Capstone Case Study",
          "nodes": [
            { "id": "v1", "name": "Corporate Reporting", "category": "Exam", "description": "Advanced multi-entity financial reporting, forensic review, auditing ethics, and corporate governance integration." },
            { "id": "v2", "name": "Strategic Business Management & Leadership", "category": "Exam", "description": "Senior executive decision-making integrating financial strategy, risk management, and organizational leadership." },
            { "id": "v3", "name": "Case Study", "category": "Exam", "description": "The capstone four-hour integrated business simulation requiring a comprehensive board-level advisory report." }
          ]
        },
        {
          "id": "qualification",
          "title": "Qualify as a Chartered Accountant",
          "subtitle": "Membership & Designation",
          "nodes": [
            { "id": "e1", "name": "Ethics & Professional Development", "category": "Ethics", "description": "Complete mandatory professional ethics modules and continuous professional development." },
            { "id": "m1", "name": "ICAB Associate Membership (ACA)", "category": "Admin", "description": "Admitted as an Associate Chartered Accountant (ACA)." }
          ]
        }
      ]
    },
    "pas": {
      "id": "pas",
      "name": "Pre-Articleship Student (PAS)",
      "tag": "Current University Students",
      "blurb": "For enrolled university students. Sit exams up to Professional Level before joining a firm, unlocking shortened articleship (2.5 or 2 years).",
      "stages": [
        {
          "id": "pas-enrollment",
          "title": "While Enrolled in University",
          "subtitle": "Pre-Articled Student (PAS) Registration",
          "nodes": [
            {
              "id": "a1",
              "name": "Verify PAS Eligibility",
              "category": "Admin",
              "description": "Must be currently enrolled in an undergraduate or post-graduate program at a recognised university and meet general academic point criteria."
            },
            {
              "id": "a2",
              "name": "Register as PAS & Attend Coaching",
              "category": "Admin",
              "description": "Register under the PAS wing. Maintain at least 50% mandatory class attendance per paper to earn exam eligibility."
            },
            {
              "id": "a3",
              "name": "Apply Academic Exemptions (CPL)",
              "category": "Admin",
              "description": "If your university department has an ICAB agreement, claim eligible exemptions early so you can advance to higher papers."
            }
          ]
        },
        {
          "id": "pas-certificate",
          "title": "Certificate Level (as PAS)",
          "subtitle": "Sit exams without firm attachment",
          "nodes": [
            { "id": "c1", "name": "Accounting", "category": "Exam", "description": "Foundations of financial accounting, double-entry mechanics, and statutory financial statement preparation." },
            { "id": "c2", "name": "Assurance", "category": "Exam", "description": "Fundamentals of audit and assurance services, internal control mechanisms, and professional scepticism." },
            { "id": "c3", "name": "Business, Technology and Finance", "category": "Exam", "description": "Organizational management, technology integration in business operations, and capital finance basics." },
            { "id": "c4", "name": "Management Information", "category": "Exam", "description": "Costing methodologies, budgeting techniques, and management decision support systems." },
            { "id": "c5", "name": "Principles of Taxation", "category": "Exam", "description": "Fundamentals of Bangladesh direct and indirect tax laws, income tax rules, and VAT." },
            { "id": "c6", "name": "Business Laws", "category": "Exam", "description": "Bangladesh legal framework governing contracts, sales of goods, partnerships, and negotiable instruments." },
            { "id": "c7", "name": "Information Technology", "category": "Exam", "description": "Information systems, cybersecurity foundations, cloud enterprise computing, and database essentials." }
          ]
        },
        {
          "id": "pas-professional",
          "title": "Professional Level (as PAS)",
          "subtitle": "Sit corresponding PL papers after clearing matching CL papers",
          "nodes": [
            { "id": "p1", "name": "Financial Accounting and Reporting", "category": "Exam", "description": "Complex IFRS/IAS standards, group accounts, consolidated statements, and practical accounting scenarios." },
            { "id": "p2", "name": "Audit and Assurance", "category": "Exam", "description": "Audit execution under International Standards on Auditing (ISA), risk assessments, and reporting." },
            { "id": "p3", "name": "Business Planning: Taxation & Compliance", "category": "Exam", "description": "Corporate tax planning, fiscal compliance, assessments, appeals, and VAT administration in Bangladesh." },
            { "id": "p4", "name": "Financial Management", "category": "Exam", "description": "Capital budgeting, cost of capital, dividend policy, financial restructuring, and risk management." },
            { "id": "p5", "name": "Business Strategy and Technology", "category": "Exam", "description": "Strategic analysis, competitive positioning, business model innovation, and technology adoption." },
            { "id": "p6", "name": "Corporate Laws and Practices", "category": "Exam", "description": "Bangladesh Companies Act, SEC guidelines, corporate governance codes, and winding-up procedures." },
            { "id": "p7", "name": "IT Governance", "category": "Exam", "description": "IT risk frameworks, internal audit of IT systems, COBIT alignment, and digital control security." }
          ]
        },
        {
          "id": "pas-firm",
          "title": "Transition to Articleship",
          "subtitle": "Shortened duration based on papers cleared",
          "nodes": [
            {
              "id": "a4",
              "name": "Join CA Firm within 1 Year",
              "category": "Admin",
              "description": "PAS exam credits remain valid for 1 year from your final university exam date. Join an approved firm within this window."
            },
            {
              "id": "t1",
              "name": "Pre-Articleship Training Course (PATC)",
              "category": "Training",
              "description": "Complete the mandatory 1-month course prior to starting work."
            },
            {
              "id": "a5",
              "name": "Shortened Articleship Period",
              "category": "Experience",
              "description": "Articleship is reduced to 2.5 years (30 months) if Certificate Level is completed, and down to 2 years (24 months) if Professional Level is completed."
            }
          ]
        },
        {
          "id": "advanced-level",
          "title": "Advanced Level (AL)",
          "subtitle": "2 integrated strategic papers & the Capstone Case Study",
          "nodes": [
            { "id": "v1", "name": "Corporate Reporting", "category": "Exam", "description": "Advanced multi-entity financial reporting, forensic review, auditing ethics, and corporate governance integration." },
            { "id": "v2", "name": "Strategic Business Management & Leadership", "category": "Exam", "description": "Senior executive decision-making integrating financial strategy, risk management, and organizational leadership." },
            { "id": "v3", "name": "Case Study", "category": "Exam", "description": "The capstone four-hour integrated business simulation requiring a comprehensive board-level advisory report." }
          ]
        },
        {
          "id": "qualification",
          "title": "Qualify as a Chartered Accountant",
          "subtitle": "Membership & Designation",
          "nodes": [
            { "id": "e1", "name": "Ethics & Professional Development", "category": "Ethics", "description": "Complete mandatory professional ethics modules and continuous professional development." },
            { "id": "m1", "name": "ICAB Associate Membership (ACA)", "category": "Admin", "description": "Admitted as an Associate Chartered Accountant (ACA)." }
          ]
        }
      ]
    },
    "pro": {
      "id": "pro",
      "name": "ACCA / ICMAB Members",
      "tag": "Mutual Recognition & Exemption",
      "blurb": "Direct pathways for ACCA affiliates/members and ICMAB ACMA/FCMA members. Major exemptions and 2-year articleship.",
      "stages": [
        {
          "id": "exemption-verification",
          "title": "Check Eligibility & Exemptions",
          "subtitle": "Credit for Prior Learning (CPL) for qualified members",
          "nodes": [
            {
              "id": "r1",
              "name": "Verify Qualified Membership Status",
              "category": "Admin",
              "description": "Must hold full ACCA membership/affiliate status or ICMAB ACMA/FCMA designation (excluding reciprocal pathways via third bodies)."
            },
            {
              "id": "r2",
              "name": "Claim 7 Certificate + Selected PL Papers",
              "category": "Admin",
              "description": "Exempt from all 7 Certificate papers. ICMAB: exempt from PL Business Strategy, Corporate Law, IT Governance. ACCA: exempt from PL Business Strategy, IT Governance, and Audit & Assurance (if AAA completed in ACCA)."
            }
          ]
        },
        {
          "id": "pro-firm",
          "title": "CA Firm Articleship",
          "subtitle": "Reduced duration: 2 Years",
          "nodes": [
            {
              "id": "f1",
              "name": "Register with an Approved CA Firm",
              "category": "Admin",
              "description": "Register under an approved ICAB principal for the specialized 2-year articleship term."
            },
            {
              "id": "t1",
              "name": "Pre-Articleship Training Course (PATC)",
              "category": "Training",
              "description": "Complete mandatory 1-month training course."
            },
            {
              "id": "r3",
              "name": "Complete 2-Year Articleship",
              "category": "Experience",
              "description": "24 months of specialized articleship training (can be completed concurrently or following PL exam attempts)."
            }
          ]
        },
        {
          "id": "pro-pl",
          "title": "Remaining Professional Level Papers",
          "subtitle": "Only non-exempt PL subjects",
          "nodes": [
            { "id": "p1", "name": "Financial Accounting and Reporting", "category": "Exam", "description": "Complex IFRS/IAS standards, group accounts, consolidated statements, and practical accounting scenarios." },
            { "id": "p2", "name": "Audit and Assurance", "category": "Exam", "description": "Required unless exempt via ACCA Advanced Audit and Assurance (AAA)." },
            { "id": "p3", "name": "Business Planning: Taxation & Compliance", "category": "Exam", "description": "Corporate tax planning, fiscal compliance, assessments, appeals, and VAT administration in Bangladesh." },
            { "id": "p4", "name": "Financial Management", "category": "Exam", "description": "Capital budgeting, cost of capital, dividend policy, financial restructuring, and risk management." },
            { "id": "p6", "name": "Corporate Laws and Practices", "category": "Exam", "description": "Required for ACCA candidates; exempt for ICMAB members." }
          ]
        },
        {
          "id": "advanced-level",
          "title": "Advanced Level (AL)",
          "subtitle": "2 integrated strategic papers & the Capstone Case Study",
          "nodes": [
            { "id": "v1", "name": "Corporate Reporting", "category": "Exam", "description": "Advanced multi-entity financial reporting, forensic review, auditing ethics, and corporate governance integration." },
            { "id": "v2", "name": "Strategic Business Management & Leadership", "category": "Exam", "description": "Senior executive decision-making integrating financial strategy, risk management, and organizational leadership." },
            { "id": "v3", "name": "Case Study", "category": "Exam", "description": "The capstone four-hour integrated business simulation requiring a comprehensive board-level advisory report." }
          ]
        },
        {
          "id": "qualification",
          "title": "Qualify as a Chartered Accountant",
          "subtitle": "Dual membership credentials",
          "nodes": [
            { "id": "e1", "name": "Ethics & Professional Development", "category": "Ethics", "description": "Complete ICAB ethics training and CPD onboarding." },
            { "id": "m1", "name": "ICAB Associate Membership (ACA)", "category": "Admin", "description": "Admitted as an Associate Chartered Accountant (ACA)." }
          ]
        }
      ]
    }
  }
}
;
window.ROADMAP_DATA['acca'] = {
  "id": "acca",
  "title": "ACCA Qualification",
  "region": "Global",
  "body": "Association of Chartered Certified Accountants",
  "officialUrl": "https://www.accaglobal.com",
  "lastVerified": "2024-10-01",
  "source": "ACCA Global Student Handbook & Framework",
  "summary": "The ACCA qualification develops strategic business leadership and high-level accounting skills across 13 exams (unless exemptions apply), an online Ethics and Professional Skills module, and 36 months of practical experience.",
  "defaultRoute": "standard",
  "routes": {
    "standard": {
      "id": "standard",
      "name": "Standard Pathway",
      "tag": "All Applicants",
      "blurb": "Complete the 3 tiers of exams, the Ethics module, and 36 months of supervised practical experience (PER).",
      "stages": [
        {
          "id": "acca-entry",
          "title": "Stage 1: Get Started",
          "subtitle": "Registration and entry route confirmation",
          "nodes": [
            {
              "id": "ac1",
              "name": "Check Academic Entry Route",
              "category": "Admin",
              "description": "Confirm your starting level: Foundation In Accountancy (FIA) for school leavers without minimum criteria, or direct entry with 2 A Levels + 3 GCSEs / Bachelor's degree."
            },
            {
              "id": "ac2",
              "name": "Register as an ACCA Student",
              "category": "Admin",
              "description": "Create your myACCA portal account, submit educational transcripts for exemption evaluation, and pay initial registration fees."
            }
          ]
        },
        {
          "id": "applied-knowledge",
          "title": "Stage 2: Applied Knowledge",
          "subtitle": "3 on-demand computer-based exams (CBE)",
          "nodes": [
            {
              "id": "a3",
              "name": "Business and Technology (BT)",
              "category": "Exam",
              "description": "Organizational structure, governance, ethical dilemmas, digital finance transformation, and corporate leadership fundamentals."
            },
            {
              "id": "a4",
              "name": "Management Accounting (MA)",
              "category": "Exam",
              "description": "Costing methodologies, budgeting techniques, variance analysis, and operational performance measurement."
            },
            {
              "id": "a5",
              "name": "Financial Accounting (FA)",
              "category": "Exam",
              "description": "Double-entry accounting, trial balance reconciliation, and drafting standard IFRS financial statements."
            }
          ]
        },
        {
          "id": "applied-skills",
          "title": "Stage 3: Applied Skills",
          "subtitle": "6 session-based computer exams (March, June, Sept, Dec)",
          "nodes": [
            {
              "id": "a6",
              "name": "Corporate and Business Law (LW)",
              "category": "Exam",
              "description": "General legal framework, contract law, corporate formations, capital financing, and insolvency regulations."
            },
            {
              "id": "a7",
              "name": "Performance Management (PM)",
              "category": "Exam",
              "description": "Advanced cost management, quantitative pricing strategies, risk assessment, and divisional performance evaluations."
            },
            {
              "id": "a8",
              "name": "Taxation (TX)",
              "category": "Exam",
              "description": "Computation of taxable liabilities for individuals and corporate entities under regional tax law variants."
            },
            {
              "id": "a9",
              "name": "Financial Reporting (FR)",
              "category": "Exam",
              "description": "Applying single entity and consolidated group IFRS accounting standards, lease accounting, and ratio evaluation."
            },
            {
              "id": "a10",
              "name": "Audit and Assurance (AA)",
              "category": "Exam",
              "description": "External audit engagements, audit planning, internal control testing, substantive procedures, and reporting."
            },
            {
              "id": "a11",
              "name": "Financial Management (FM)",
              "category": "Exam",
              "description": "Investment appraisal (NPV/IRR), working capital strategies, business valuation, and currency/interest risk hedging."
            }
          ]
        },
        {
          "id": "strategic-essentials",
          "title": "Stage 4: Strategic Professional – Essentials",
          "subtitle": "2 mandatory synoptic papers",
          "nodes": [
            {
              "id": "a12",
              "name": "Strategic Business Leader (SBL)",
              "category": "Exam",
              "description": "A 3-hour 15-minute integrated case study assessing senior leadership, enterprise risk, strategic governance, and professional acumen."
            },
            {
              "id": "a13",
              "name": "Strategic Business Reporting (SBR)",
              "category": "Exam",
              "description": "Mastery in advanced financial reporting, ethical challenges faced by CFOs, complex group structuring, and current reporting issues."
            }
          ]
        },
        {
          "id": "strategic-options",
          "title": "Stage 5: Strategic Professional – Options",
          "subtitle": "Choose 2 specialized papers",
          "nodes": [
            {
              "id": "a14",
              "name": "Advanced Financial Management (AFM)",
              "category": "Exam",
              "description": "Option Paper: Multinational corporate finance, cross-border M&A valuation, derivatives, and sophisticated hedging."
            },
            {
              "id": "a15",
              "name": "Advanced Performance Management (APM)",
              "category": "Exam",
              "description": "Option Paper: Strategic management accounting, value-based metrics, and high-level performance measurement systems."
            },
            {
              "id": "a16",
              "name": "Advanced Taxation (ATX)",
              "category": "Exam",
              "description": "Option Paper: High-net-worth tax planning, cross-border corporate restructuring, and advanced wealth management."
            },
            {
              "id": "a17",
              "name": "Advanced Audit and Assurance (AAA)",
              "category": "Exam",
              "description": "Option Paper: Group audit engagements, forensic audit procedures, quality management, and partner-level reporting."
            }
          ]
        },
        {
          "id": "experience-ethics",
          "title": "Stage 6: Experience & Ethics (PER & EPSM)",
          "subtitle": "Conducted alongside or following exams",
          "nodes": [
            {
              "id": "a18",
              "name": "Ethics & Professional Skills Module (EPSM)",
              "category": "Ethics",
              "description": "An interactive 20-hour online module exploring commercial awareness, data analytics, sceptical inquiry, and ethical problem-solving."
            },
            {
              "id": "a19",
              "name": "36 Months Practical Experience Requirement (PER)",
              "category": "Experience",
              "description": "Achieve 36 months of supervised accountancy/finance work experience signed off by an approved Practical Experience Supervisor (PES)."
            },
            {
              "id": "a20",
              "name": "Achieve 9 Performance Objectives",
              "category": "Experience",
              "description": "Demonstrate workplace competence across 5 essentials and 4 technical performance objectives documented in the PER online recorder."
            }
          ]
        },
        {
          "id": "membership",
          "title": "Stage 7: Full Membership",
          "subtitle": "Admission & Designation",
          "nodes": [
            {
              "id": "a21",
              "name": "Apply for ACCA Membership",
              "category": "Admin",
              "description": "Transition from ACCA Affiliate to ACCA Member, earning the right to use the globally recognised 'ACCA' designation."
            }
          ]
        }
      ]
    }
  }
}
;

window.ROADMAP_LOADER = {
  async get(id) {
    if (window.ROADMAP_DATA[id]) {
      return window.ROADMAP_DATA[id];
    }
    try {
      const res = await fetch(`data/${id}.json`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      window.ROADMAP_DATA[id] = json;
      return json;
    } catch (e) {
      console.warn(`Local fetch fallback for ${id}:`, e);
      return window.ROADMAP_DATA[id] || null;
    }
  }
};
