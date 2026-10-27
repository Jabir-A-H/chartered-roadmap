# Roadmap for professional accounting certifications

*Exported Oct 27, 2026, 11:30 AM · 10 messages · claude-sonnet-5-5*

---

## You · Oct 27, 2026, 11:00 AM

you know roadmap.sh ? and similar sites? i want a similar roadmap but for ca acca cpa cma etc professional degrees. possible?

---

## Claude · Oct 27, 2026, 11:00 AM

Yes, it's very doable, and I'd say it's a good gap. Most professional-qualification info is scattered across each body's website, forums, and YouTube, with no visual "what comes after what" view like roadmap.sh gives developers.

**What the content would cover**
- One roadmap per qualification (CA, ACCA, CPA, CMA, CIA, CFA, etc.), showing levels, papers, and prerequisites as a node graph
- Per node: what it covers, rough study hours, exam format, pass rates, and links to the official syllabus
- Practical-experience and ethics requirements, membership steps, and typical timeline and cost
- **The part nobody does well:** cross-qualification links, such as exemptions and pathways (e.g., which ACCA papers you can skip with a given degree or CA level, or how ACCA leads toward CPA)

**How to build it**
- **Front end:** React Flow (or similar) for the interactive node graph, with click-to-expand details and a checkbox progress tracker saved locally
- **Data:** each roadmap as a JSON/YAML file in a GitHub repo, separate from the UI, so people can submit corrections by pull request
- **Hosting:** a static site (Next.js or Astro on Vercel/Cloudflare) is enough; no backend is needed to start

**The hard parts**
1. **Accuracy and freshness.** Syllabi, exemptions, and fees change, and they differ by country (e.g., CPA US vs. CPA Australia, or ICAB vs. ICAI vs. ICAEW). Every node should link to its official source and show a "last verified" date.
2. **Scope.** Decide early whether it's global or country-specific. Starting with one country and one or two qualifications, then expanding, works much better than launching broad and shallow.
3. **Licensing.** roadmap.sh's content has its own license terms, so build your own content and design rather than copying theirs. The same goes for exam bodies' syllabi: summarize and link, don't reproduce.
4. **Trust.** Ideally, people who hold the qualifications review the content.

I can prototype this for you: a small working site with 2 or 3 roadmaps (say ACCA, CMA, CPA) and a pathway-comparison view. Do you want a prototype of the interactive graph, or a content outline for one qualification first?

---

## You · Oct 27, 2026, 11:02 AM

then make a prototype for bd ca (icab) and acca. just these two. no need for pathway comparison, this site will be for just guiding, not for comparing to make decisions. it is for dedicated peeps who want to pursue those dergees.

---

## Claude · Oct 27, 2026, 11:03 AM

**Generated file: `roadmap.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Accountancy Roadmaps: ICAB CA &amp; ACCA</title>
<style>
:root{--bg:#f7f7f4;--card:#fff;--tx:#1d1d1b;--mut:#6b6b66;--line:#d9d9d2;--ac:#1f6feb;--ok:#1a7f4b;--tag:#eef1f6;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#15161a;--card:#1e2026;--tx:#ececea;--mut:#9a9a95;--line:#33363d;--ac:#5b9dff;--ok:#4cc58a;--tag:#2a2d35}}
:root[data-theme="dark"]{--bg:#15161a;--card:#1e2026;--tx:#ececea;--mut:#9a9a95;--line:#33363d;--ac:#5b9dff;--ok:#4cc58a;--tag:#2a2d35}
html{scroll-padding-top:env(safe-area-inset-top,0px)}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--tx);font:16px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
main{max-width:720px;margin:0 auto;padding:24px 16px 64px}
h1{font-size:1.5rem;margin:0 0 4px}
.sub{color:var(--mut);margin:0 0 20px;font-size:.95rem}
.tabs{display:flex;gap:8px;margin-bottom:16px}
.tabs button{flex:1;padding:10px;border:1px solid var(--line);background:var(--card);color:var(--tx);border-radius:10px;font:inherit;font-weight:600;cursor:pointer}
.tabs button.on{background:var(--ac);border-color:var(--ac);color:#fff}
.intro{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 16px;margin-bottom:16px;font-size:.93rem}
.bar{height:8px;background:var(--line);border-radius:99px;overflow:hidden;margin:6px 0 4px}
.bar i{display:block;height:100%;width:0;background:var(--ok);transition:width .25s}
.pl{display:flex;justify-content:space-between;font-size:.85rem;color:var(--mut)}
.pl button{background:none;border:0;color:var(--mut);text-decoration:underline;cursor:pointer;font:inherit}
.stage{margin-top:28px}
.stage h2{font-size:1.05rem;margin:0}
.stage p{margin:2px 0 10px;color:var(--mut);font-size:.88rem}
.list{border-left:2px solid var(--line);margin-left:8px;padding-left:16px}
.node{position:relative;background:var(--card);border:1px solid var(--line);border-radius:10px;margin-bottom:8px}
.node:before{content:"";position:absolute;left:-23px;top:20px;width:12px;height:12px;border-radius:50%;background:var(--bg);border:2px solid var(--line)}
.node.done:before{background:var(--ok);border-color:var(--ok)}
.hd{display:flex;align-items:center;gap:10px;padding:10px 12px;cursor:pointer}
.hd input{width:18px;height:18px;accent-color:var(--ok);flex:none;cursor:pointer}
.nm{flex:1;font-weight:600}
.node.done .nm{color:var(--mut);text-decoration:line-through}
.tag{font-size:.72rem;background:var(--tag);color:var(--mut);padding:2px 8px;border-radius:99px;white-space:nowrap}
.dt{display:none;padding:0 12px 12px 40px;font-size:.9rem;color:var(--mut)}
.node.open .dt{display:block}
.note{margin-top:32px;font-size:.82rem;color:var(--mut);border-top:1px solid var(--line);padding-top:14px}
a{color:var(--ac)}
</style>
</head>
<body>
<main>
<h1>Accountancy Roadmaps</h1>
<p class="sub">Step-by-step paths for ICAB CA and ACCA. Tap a step for details, tick it when done.</p>
<div class="tabs"><button id="t-icab">ICAB CA (Bangladesh)</button><button id="t-acca">ACCA</button></div>
<div class="intro" id="intro"></div>
<div class="bar"><i id="fill"></i></div>
<div class="pl"><span id="pct"></span><button id="reset">Reset progress</button></div>
<div id="out"></div>
<p class="note">Prototype. Structure is summarised from general knowledge of each body’s published framework; module names, exam sessions and requirements change. Always confirm against the official sources linked above before planning. Last verified: not yet.</p>
</main>
<script>
var D={
icab:{intro:'The Institute of Chartered Accountants of Bangladesh (ICAB) CA qualification has three exam levels, plus mandatory articleship (practical training) and ethics/professional development. Official source: <a href="https://www.icab.org.bd/students" target="_blank" rel="noopener">icab.org.bd/students</a>',
stages:[
{t:'Stage 1: Get started',s:'Before any exam',n:[
{id:'i1',n:'Check eligibility',k:'Admin',d:'Confirm the academic entry requirement for ICAB registration on the official student page. Requirements and accepted prior qualifications are set by ICAB and can change.'},
{id:'i2',n:'Register as a student',k:'Admin',d:'Complete ICAB student registration and pay the fees. Keep your enrolment number; it is needed for classes, exams and articleship records.'}]},
{t:'Stage 2: Certificate Level',s:'Foundation of the CA qualification',n:[
{id:'i3',n:'Accounting',k:'Exam',d:'Core financial accounting, from recording transactions to preparing financial statements.'},
{id:'i4',n:'Assurance',k:'Exam',d:'Introduction to audit and assurance concepts and processes.'},
{id:'i5',n:'Business Law',k:'Exam',d:'Legal framework for business, with focus on Bangladesh company and contract law.'},
{id:'i6',n:'Management Information',k:'Exam',d:'Costing and management accounting techniques used for decision making.'},
{id:'i7',n:'Principles of Taxation',k:'Exam',d:'Basics of the Bangladesh tax system, income tax and VAT.'},
{id:'i8',n:'Business, Technology and Finance',k:'Exam',d:'Business environment, technology in business, and basic finance. Confirm the exact Certificate module list on ICAB’s site, as it has been revised over time.'}]},
{t:'Stage 3: Articleship',s:'Practical training, runs alongside the later levels',n:[
{id:'i9',n:'Secure an articleship at an ICAB-approved CA firm',k:'Experience',d:'Articleship is mandatory and is generally started after the Certificate Level. Firms recruit through their own processes, so start preparing your CV and applications early.'},
{id:'i10',n:'Complete the articleship period',k:'Experience',d:'Typically three years of supervised training. Maintain the required records and get them signed off. ICAB also ties class attendance rules to the articleship period.'}]},
{t:'Stage 4: Professional Level',s:'Applying technical knowledge to real scenarios',n:[
{id:'i11',n:'Financial Accounting and Reporting',k:'Exam',d:'IFRS-based reporting, including group accounts and more complex transactions.'},
{id:'i12',n:'Audit and Assurance',k:'Exam',d:'Audit planning, risk, evidence, and reporting under ISAs.'},
{id:'i13',n:'Taxation',k:'Exam',d:'Applied corporate and individual taxation with planning issues.'},
{id:'i14',n:'Financial Management',k:'Exam',d:'Investment appraisal, financing decisions, and risk.'},
{id:'i15',n:'Business Strategy and Technology',k:'Exam',d:'Strategy, governance, and IT in business. These modules help you progress to the Advanced Level. Confirm exact module titles on the ICAB site.'}]},
{t:'Stage 5: Advanced Level',s:'Integration and the final test',n:[
{id:'i16',n:'Corporate Reporting',k:'Exam',d:'Applies Professional Level knowledge with analytical and professional skills to complex reporting and compliance problems.'},
{id:'i17',n:'Strategic Business Management',k:'Exam',d:'Integrated strategic, financial and risk questions at senior level.'},
{id:'i18',n:'Case Study',k:'Exam',d:'The final integrated assessment, drawing on all earlier levels in a realistic business scenario.'}]},
{t:'Stage 6: Qualify',s:'',n:[
{id:'i19',n:'Meet ethics and professional development requirements',k:'Ethics',d:'ICAB requires professional ethics and scepticism throughout the course, and ongoing professional development after qualifying.'},
{id:'i20',n:'Apply for ICAB membership (ACA)',k:'Admin',d:'Submit the membership application with exam results and articleship completion evidence, then pay membership fees.'}]}
]},
acca:{intro:'The Association of Chartered Certified Accountants (ACCA) qualification has three exam levels, an Ethics and Professional Skills module, and 36 months of practical experience. Official source: <a href="https://www.accaglobal.com" target="_blank" rel="noopener">accaglobal.com</a>',
stages:[
{t:'Stage 1: Get started',s:'Before any exam',n:[
{id:'a1',n:'Check entry requirements',k:'Admin',d:'ACCA has defined entry routes depending on your prior education. Check the current ones on ACCA’s site.'},
{id:'a2',n:'Register as an ACCA student',k:'Admin',d:'Create your myACCA account, register, and pay the registration fee. Your annual subscription keeps you active.'}]},
{t:'Stage 2: Applied Knowledge',s:'Three computer-based exams',n:[
{id:'a3',n:'Business and Technology (BT)',k:'Exam',d:'How organisations work: governance, ethics, and business functions.'},
{id:'a4',n:'Management Accounting (MA)',k:'Exam',d:'Costing, budgeting and basic performance measurement.'},
{id:'a5',n:'Financial Accounting (FA)',k:'Exam',d:'Double entry and preparing basic financial statements.'}]},
{t:'Stage 3: Applied Skills',s:'Six exams, building technical competence',n:[
{id:'a6',n:'Corporate and Business Law (LW)',k:'Exam',d:'Legal framework for business. Local variants exist for some countries.'},
{id:'a7',n:'Performance Management (PM)',k:'Exam',d:'Advanced management accounting and decision making.'},
{id:'a8',n:'Taxation (TX)',k:'Exam',d:'Tax rules for a specific tax year and jurisdiction. Variants exist per country.'},
{id:'a9',n:'Financial Reporting (FR)',k:'Exam',d:'IFRS-based preparation of single and group financial statements.'},
{id:'a10',n:'Audit and Assurance (AA)',k:'Exam',d:'Audit process, risk, evidence and reporting.'},
{id:'a11',n:'Financial Management (FM)',k:'Exam',d:'Financial decisions, investment appraisal and risk management.'}]},
{t:'Stage 4: Strategic Professional – Essentials',s:'Two compulsory exams',n:[
{id:'a12',n:'Strategic Business Leader (SBL)',k:'Exam',d:'Case-based leadership, governance, strategy and ethics exam, assessed on professional skills as well as technical content.'},
{id:'a13',n:'Strategic Business Reporting (SBR)',k:'Exam',d:'Advanced IFRS reporting and its wider business implications.'}]},
{t:'Stage 5: Strategic Professional – Options',s:'Choose two',n:[
{id:'a14',n:'Option 1 of 2',k:'Exam',d:'Choose from Advanced Financial Management (AFM), Advanced Performance Management (APM), Advanced Taxation (ATX) or Advanced Audit and Assurance (AAA). Pick based on the career area you intend to work in.'},
{id:'a15',n:'Option 2 of 2',k:'Exam',d:'Choose a second option from the same list.'}]},
{t:'Stage 6: Qualify',s:'Alongside or after the exams',n:[
{id:'a16',n:'Ethics and Professional Skills module',k:'Ethics',d:'Online module covering ethics and professional skills. Required before you can become a member.'},
{id:'a17',n:'Complete 36 months of practical experience (PER)',k:'Experience',d:'Record experience through the Practical Experience Requirement with an approved practical experience supervisor. Experience can be gained before, during or after the exams.'},
{id:'a18',n:'Apply for membership (ACCA)',k:'Admin',d:'Once exams, ethics module and experience are complete, apply for membership.'}]}
]}};
var cur='icab',K='roadmap-progress-v1',S={};
try{S=JSON.parse(localStorage.getItem(K)||'{}')}catch(e){S={}}
function save(){try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}}
function render(){
var d=D[cur],h='',tot=0,dn=0;
document.getElementById('intro').innerHTML=d.intro;
d.stages.forEach(function(st){
h+='<section class="stage"><h2>'+st.t+'</h2>'+(st.s?'<p>'+st.s+'</p>':'')+'<div class="list">';
st.n.forEach(function(x){tot++;var c=S[x.id];if(c)dn++;
h+='<div class="node'+(c?' done':'')+'" id="'+x.id+'"><div class="hd"><input type="checkbox" '+(c?'checked':'')+' data-id="'+x.id+'" aria-label="Mark done"><span class="nm">'+x.n+'</span><span class="tag">'+x.k+'</span></div><div class="dt">'+x.d+'</div></div>'});
h+='</div></section>'});
document.getElementById('out').innerHTML=h;
document.getElementById('fill').style.width=(tot?dn/tot*100:0)+'%';
document.getElementById('pct').textContent=dn+' of '+tot+' steps done';
['icab','acca'].forEach(function(k){document.getElementById('t-'+k).className=k===cur?'on':''});
}
document.getElementById('out').addEventListener('click',function(e){
var cb=e.target.closest('input');
if(cb){S[cb.dataset.id]=cb.checked;save();render();return}
var hd=e.target.closest('.hd');if(hd)hd.parentNode.classList.toggle('open');
});
['icab','acca'].forEach(function(k){document.getElementById('t-'+k).onclick=function(){cur=k;location.hash=k;render()}});
document.getElementById('reset').onclick=function(){var ids=D[cur].stages.reduce(function(a,s){return a.concat(s.n.map(function(x){return x.id}))},[]);ids.forEach(function(i){delete S[i]});save();render()};
var hs=(location.hash||'').replace('#','');if(D[hs])cur=hs;
render();
</script>
</body>
</html>

```

The prototype is published: https://claude.ai/artifact/8ZctnzWM9wH3arFiEdVwUH

It has two tabs, ICAB CA and ACCA. Each is a vertical roadmap of stages and steps. Tap a step to expand it, and tick it when done. Progress is saved in your browser, so it persists between visits. The links `#icab` and `#acca` open a tab directly. I left out pathway comparison, as you asked.

- **ICAB:** registration, Certificate Level, articleship, Professional Level, Advanced Level with the Case Study, then ethics and membership.
- **ACCA:** registration, Applied Knowledge (BT, MA, FA), Applied Skills (six papers), Strategic Professional Essentials (SBL, SBR), two Options, the Ethics module, 36 months of practical experience, then membership.

**Check the ICAB content before using it.** My search didn't surface ICAB's official syllabus, so the Certificate and Professional module names are my best recollection of the framework. They may differ from the current official list, and I haven't filled in articleship duration beyond "typically three years." The ACCA structure is better established, but exam sessions and fees still need checking. The page itself says nothing has been verified yet.

I also left out study hours, pass rates and fees, because I couldn't back them with sources and didn't want to invent numbers.

If you paste the current ICAB syllabus or give me the official page, I can correct the modules. Next steps could be moving the data into separate JSON files, as in my earlier suggestion, or adding per-step "last verified" dates and official links.

*🔧 Used: web_search, memory_write, Artifact*

---

## You · Oct 27, 2026, 11:05 AM

no, icab is more complex. like pre articleship is an entirely different route. then theres hsc route. and the normal honours route.

---

## Claude · Oct 27, 2026, 11:07 AM

You were right, ICAB isn't a single path. I've updated the same page: https://claude.ai/artifact/8ZctnzWM9wH3arFiEdVwUH

The ICAB tab now opens with a route selector, and each route has its own roadmap:

- **Pre-articleship (PAS):** for current university students who aren't employed. You register as a Pre-Articled Student, join ICAB's coaching classes and sit Certificate papers before joining a CA firm. The credit is applied when you register as an articled student, and results stay valid for 3 years from your last academic exam.
- **HSC / A Level:** four years of articleship, or three and a half for top A Level results.
- **Graduate (honours/masters):** any discipline, three years of articleship, with optional university exemptions.
- **ACCA/ACMA members:** this is a fourth route I found in the brochure. Some papers are exempt and articleship is two years.

The modules are now ICAB's own list from its "How to become a CA" brochure:
- **Certificate Level (7 papers):** Accounting, Assurance, Business and Finance, Management Information, Principles of Taxation, Business Law, Information Technology.
- **Professional Level (7 papers):** Financial Accounting and Reporting, Audit and Assurance, Tax Planning and Compliance, Financial Management, Business Strategy, Corporate Laws and Practices, IT Governance.
- **Advanced Level:** Corporate Reporting, Strategic Business Management and the Case Study.

Ticking a paper on one route carries over to the others, since the papers are the same.

Two caveats:
- **Brochure age:** the brochure is the August 2022 edition. ICAB may have revised the entry criteria, exemptions or syllabus since, so the page says to confirm on icab.org.bd.
- **PAS articleship length:** one third-party site claimed PAS students get a shorter articleship (2.5 or 2 years). ICAB's brochure says the PAS period is the same as for your normal route, so I followed that.

I kept the exemption list for university departments out of the page. It is long and specific to each department, so it's better linked from ICAB's site. I also haven't touched ACCA, and its content is still unverified. If you tell me which routes you want covered there (it also has different entry and exemption routes), I can fix it the same way.

*🔧 Used: web_search, web_fetch, bash_tool, Artifact, memory_str_replace*

---

## You · Oct 27, 2026, 11:09 AM

pas students can attempt exams upto pl level. your info is not updates. scrap the icab website for info. and keep the graduate option by default. and no need for acca route for now if you cant get concrete info on that route.

---

## Claude · Oct 27, 2026, 11:10 AM

I've rebuilt the ICAB data from the September 2024 brochure and the page code checks out. Next I'm publishing the update to the same link.

I've updated the page at the same link: https://claude.ai/artifact/8ZctnzWM9wH3arFiEdVwUH

I couldn't scrape icab.org.bd itself. Its pages load through JavaScript, so fetching them returns an empty page. The newest official document I could read was ICAB's CA brochure published 25 September 2024, and the page now follows it. If you paste anything newer, such as a recent circular, I'll update it.

What changed:
- **Default route:** the page now opens on the Graduate route.
- **Pre-articleship (PAS):** students can now sit Certificate and Professional Level exams before joining a CA firm.
  - A Professional paper needs the matching Certificate paper passed first.
  - You need 50% of the mandatory class attendance on a paper to sit it.
  - Your results stay valid for one year from your last academic exam.
  - Articleship is 2.5 years if you passed the Certificate Level, and 2 years if you passed the Professional Level.
- **ACCA / ICMAB route:** I kept this because the brochure gave concrete details, and my earlier version of it was wrong.
  - Both groups are exempt from all 7 Certificate papers.
  - ICMAB members are also exempt from three Professional papers: Business Strategy and Technology, Corporate Laws and Practices, and IT Governance.
  - ACCA members are exempt from Business Strategy and Technology and IT Governance, and from Audit and Assurance if they completed ACCA's Advanced Audit and Assurance paper.
  - Articleship is 2 years.
- **Module names:** I corrected them to the current list.
  - Certificate Level: "Business and Finance" is now "Business, Technology and Finance".
  - Professional Level: the tax paper is now "Business Planning: Taxation and Compliance", and the strategy paper is "Business Strategy and Technology".
  - Advanced Level: "Strategic Business Management and Leadership".
- **Pre-Articleship Training Course:** I added it as a step on every route. It is a mandatory one-month course on Audit and Assurance and English.

I read "no need for the ACCA route" as meaning that ICAB route. If you meant the separate ACCA tab, tell me and I'll remove it. That tab is still the unverified version from before.

*🔧 Used: web_fetch ×2, web_search ×2, bash_tool, Artifact, memory_str_replace*

---

## You · Oct 27, 2026, 11:10 AM

make the ui more easy and clean. like instead of this horizontal roadmap, it looks not fun. but something like roadmap.sh's map ui looks cool.

---

## Claude · Oct 27, 2026, 11:12 AM

I've redesigned the page as a map in the style of roadmap.sh. It's at the same link: https://claude.ai/artifact/8ZctnzWM9wH3arFiEdVwUH

I haven't opened it in a browser, so the layout is untested. The script passes a syntax check, but check the spacing and the phone layout when you load it.

- **Map layout:** each stage is a yellow box on a dashed spine down the middle. Its steps branch off to the left and right, joined to the spine by dashed lines. The Certificate Level, for example, shows its seven papers split across both sides.
- **Step colours:** Exam, Experience, Admin, Training and Ethics each have their own colour, with a small legend at the top.
- **Details panel:** tapping a step opens a panel with its description and a "Mark as done" button. It's a side card on desktop and a bottom sheet on phones. Tapping a stage shows its progress.
- **Done state:** finished steps turn green with a tick, and each stage shows a count like "3 / 7 done".
- **Cleaner header:** the ICAB and ACCA switch is now a segmented control. The route choices are small pills with the Graduate route selected first, and the long intro text sits behind "About this roadmap".
- **Phone layout:** on narrow screens the map becomes a single column, with the spine running down the left edge.

Your saved progress carries over, and the `#icab-grad` style links still work.

I haven't touched the content in this round, so the ACCA tab is still the unverified version. Do you want me to verify it against ACCA's own published material next?

*🔧 Used: bash_tool, Artifact*
