"""
Link all 17 ICAB exam papers to their respective individual paper study roadmaps.
"""

import os
import json

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data")
ICAB_PATH = os.path.join(DATA_DIR, "icab.json")

PAPERS = {
    "c1": ("C1 Accounting", "Chapter-by-chapter study roadmap, double-entry, IFRS adjustments, and PFM."),
    "c2": ("C2 Assurance", "Assurance framework, COSO internal controls, substantive procedures, and ethics."),
    "c3": ("C3 Business, Technology and Finance", "Business structures, financial markets, PESTEL, and digital transformation."),
    "c4": ("C4 Management Information", "Costing methods, budgeting, variance analysis, CVP, and data analytics."),
    "c5": ("C5 Principles of Taxation", "Income Tax Act 2023, individual/company computation, TDS, and VAT Act 2012."),
    "c6": ("C6 Business Laws", "Companies Act 1994, Negotiable Instruments, Partnership, and Contract Acts."),
    "c7": ("C7 Information Technology", "SDLC, agile, cloud computing, DBMS/SQL, and cybersecurity resilience."),
    "p1": ("P1 Financial Accounting and Reporting", "Single entity IFRS, complex consolidation, AAOIFI Islamic finance, and IPSAS."),
    "p2": ("P2 Audit and Assurance", "ISA risk assessment, materiality, fraud procedures, KAM, and auditor reporting."),
    "p3": ("P3 Business Planning: Taxation & Compliance", "Tax litigation, transfer pricing, corporate reorganization, and VAT disputes."),
    "p4": ("P4 Financial Management", "WACC, DCF valuation, real options, treasury FX/interest rate derivatives, and ESG."),
    "p5": ("P5 Business Strategy & Technology", "VRIO, Porter's models, digital KPIs, Balanced Scorecard, and change management."),
    "p6": ("P6 Corporate Laws & Practices", "Advanced RJSC compliance, BSEC IPO/Rights regulations, and Bank Companies Act."),
    "p7": ("P7 IT Governance", "COBIT 2019, ISACA IS audit standards, CAATs, cyber resilience, and BCP/DRP."),
    "v1": ("V1 Corporate Reporting", "Complex IFRS 9/15/16, step acquisitions, foreign subsidiaries, and ISSB S1/S2."),
    "v2": ("V2 Strategic Business Management & Leadership", "Executive digital strategy, M&A/LBO financial engineering, and Integrated Reporting."),
    "v3": ("V3 Case Study", "Capstone advance information synthesis, financial modeling, and executive board reporting.")
}

with open(ICAB_PATH, "r", encoding="utf-8") as f:
    icab_data = json.load(f)

for route_key, route in icab_data.get("routes", {}).items():
    for stage in route.get("stages", []):
        for node in stage.get("nodes", []):
            node_id = node.get("id")
            if node_id in PAPERS:
                title, desc = PAPERS[node_id]
                topic_link = {
                    "id": f"icab-{node_id}",
                    "route": "all",
                    "title": f"{title} Study Tracker",
                    "badge": "Study Tracker ↗",
                    "description": desc
                }
                
                # Check existing linkedRoadmaps
                existing = node.get("linkedRoadmaps", [])
                
                # Filter out any existing link to same paper
                filtered = [l for l in existing if l.get("id") != f"icab-{node_id}"]
                
                # Place topic link first
                new_links = [topic_link] + filtered
                node["linkedRoadmaps"] = new_links

with open(ICAB_PATH, "w", encoding="utf-8") as f:
    json.dump(icab_data, f, indent=2, ensure_ascii=False)

print(f"Successfully updated data/icab.json with links to all 17 individual paper roadmaps across all routes!")
