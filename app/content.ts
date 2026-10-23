// Site content. Sourced from the brief and the long-form résumé.
// Placeholder the owner may fill in: LINKEDIN_URL (link is hidden while empty).

export const CONTACT_EMAIL = "annalurene_3411@yahoo.com";
export const LINKEDIN_URL = ""; // TODO: e.g. "https://www.linkedin.com/in/..."

// Downloadable résumés, served from /public/resume.
export const resumes = [
  {
    title: "Executive résumé",
    version: "Short",
    description: "Concise overview of leadership, expertise, and results.",
    href: "/resume/anna-sendaydiego-resume-short.docx",
    meta: "DOCX · 30 KB",
  },
  {
    title: "Full résumé",
    version: "Long",
    description: "Complete career history with responsibilities and achievements per role.",
    href: "/resume/anna-sendaydiego-resume-long.docx",
    meta: "DOCX · 97 KB",
  },
];

export const site = {
  name: "Anna Lurene Sendaydiego",
  postNominals: "CPA, CIA",
  title: "Anna Lurene Sendaydiego, CPA, CIA — Finance Executive",
  description:
    "CPA and Certified Internal Auditor with about 20 years in financial leadership, controllership, FP&A, tax, internal audit, and multi-entity governance across the Philippines, Japan-facing leadership, and Kenya.",
};

export const nav = [
  { n: "01", id: "profile", label: "Profile" },
  { n: "02", id: "impact", label: "Impact" },
  { n: "03", id: "expertise", label: "Expertise" },
  { n: "05", id: "experience", label: "Experience" },
  { n: "06", id: "credentials", label: "Credentials" },
  { n: "08", id: "contact", label: "Contact" },
];

export const hero = {
  label: "CPA · CIA · Finance Executive",
  line: "Finance that holds steady while the business moves.",
  sub: "Financial strategy, governance, and controllership across the Philippines, Japan, and Kenya.",
};

export const profile = {
  bio: [
    "I am a CPA and Certified Internal Auditor with about 20 years in financial leadership, controllership, FP&A, tax, internal audit, and multi-entity governance.",
    "At RareJob Philippines I rose from Finance Department Head to Corporate Division Director across seven leadership appointments, leading finance and shared services for the Philippine group companies and partnering with Japan-based leadership.",
    "Before that, I led finance and audit work in Nairobi, Kenya.",
  ],
  facts: [
    { k: "Experience", v: "~20 years in finance & audit" },
    { k: "Geography", v: "Philippines · Japan-facing · Kenya" },
    { k: "Scope", v: "Multi-entity group finance" },
    { k: "Progression", v: "7 leadership appointments at RareJob" },
    { k: "Credentials", v: "CPA (2006) · CIA (2010)" },
  ],
};

export const metrics = [
  {
    value: 67,
    decimals: 0,
    suffix: "%",
    label: "Operating headcount reduced (33 to 11) through process redesign and automation",
    note: "a",
  },
  {
    value: 7.04,
    decimals: 2,
    suffix: "%",
    label: "Reduction in average lesson cost, to ₱70.65",
    note: "a",
  },
  {
    value: 20,
    decimals: 0,
    prefix: "~",
    label: "Years across controllership, FP&A, tax, and audit",
  },
  {
    value: 4,
    decimals: 0,
    suffix: "+",
    label: "Group entities supported under centralized finance",
  },
];

// Secondary quality figures from the same 2023–2026 transformation.
export const qualityMetrics = [
  { value: "99.45%", label: "Lesson stability" },
  { value: "4.93 / 5", label: "Customer satisfaction" },
  { value: "−68%", label: "Non-compliant lessons" },
  { value: "5% → 1.60%", label: "Lesson cancellation rate" },
];

export const expertise = [
  "FP&A",
  "Budgeting & Forecasting",
  "Cash Flow & Liquidity",
  "Financial Statements & Group Reporting",
  "Accounting Operations",
  "Tax & BIR Audits",
  "Statutory Compliance",
  "Internal Controls & Risk",
  "External Audit Management",
  "Cost Optimization",
  "Multi-Entity Shared Services",
  "Executive Stakeholder Reporting",
];

// Balance-sheet pairing: what was brought (debit) against what it delivered (credit).
export const achievements = [
  {
    n: "01",
    title: "Centralized group finance",
    body: "Led accounting and finance services for multiple Philippine subsidiaries, supporting entity formation, acquisition integration, and governance.",
    result: "Formed Envizion Philippines and Ripple Kids Educational Services, and set up GOLA English Tutorial, each on centralized end-to-end finance.",
  },
  {
    n: "02",
    title: "Built the budgeting system",
    body: "Introduced company budgeting and expenditure monitoring that became the planning backbone.",
    result: "Budget monitoring tightened expenditure control and departmental accountability.",
  },
  {
    n: "03",
    title: "Cost transformation",
    body: "67% headcount reduction and 7.04% lower average lesson cost while sustaining service.",
    result: "99.45% lesson stability and a 4.93 / 5 satisfaction rating held throughout.",
  },
  {
    n: "04",
    title: "Listing readiness",
    body: "Supported the Japanese parent's Tokyo Stock Exchange listing through stronger controls, compliance, and documentation.",
    result: "The parent company listed on the TSE Mothers Market.",
    footnote: true,
  },
];

export type Role = {
  title: string;
  dates: string;
  start: string;
  summary: string;
  achievement: string;
};

export const rarejobRoles: Role[] = [
  {
    title: "Lesson Management Division Director (concurrent)",
    dates: "Apr 2023 – Present",
    start: "2023",
    summary:
      "Executive oversight of lesson supply, tutor incentives, service quality, and divisional budget.",
    achievement:
      "Cut manpower 67% (33 to 11) through automation, AI-enabled tools, and process redesign. Lowered average lesson cost 7.04% to ₱70.65. Non-compliant lessons down 68%; cancellations from about 5% to 1.60%; 99.45% lesson stability and 4.93 / 5 satisfaction sustained.",
  },
  {
    title: "Corporate Division Director",
    dates: "May 2020 – Present",
    start: "2020",
    summary:
      "Leads finance, accounting, payroll, compliance, records, and corporate support services.",
    achievement:
      "Steered finance and administration through COVID-19 without interruption. No material regulatory violations across managed Philippine subsidiaries; minimal audit adjustments; departments regularly in the organization's top 5 for employee satisfaction.",
  },
  {
    title: "Administrative & Finance Department Senior Manager",
    dates: "Apr 2018 – Apr 2020",
    start: "2018",
    summary:
      "Ran finance and administration concurrently, plus outsourced finance for group subsidiaries.",
    achievement:
      "Managed BIR Letters of Authority across multiple entities through to resolution, while keeping financial operations continuous.",
  },
  {
    title: "Administrative & Finance Department Manager",
    dates: "Oct 2017 – Mar 2018",
    start: "2017",
    summary: "Added the Administrative Department, facilities, procurement, and vendor management.",
    achievement:
      "Streamlined administrative workflows and facilities management, tightening internal controls and resource use.",
  },
  {
    title: "Finance Department Manager",
    dates: "Oct 2016 – Sep 2017",
    start: "2016",
    summary: "Owned close, statements, budgets, tax compliance, and external and BIR audits.",
    achievement:
      "Set up GOLA English Tutorial, Inc. in Makati with centralized outsourced finance. Closed BIR audit cases under Letters of Authority.",
  },
  {
    title: "Finance Department Assistant Manager",
    dates: "Feb 2016 – Sep 2016",
    start: "2016",
    summary: "Supervised accounting, payroll, and financial reporting for the RareJob Group.",
    achievement:
      "Established Envizion Philippines in Cagayan de Oro and supported the Ripple Kids Park acquisition in Cebu, then formed Ripple Kids Educational Services, Inc.",
  },
  {
    title: "Finance Department Head",
    dates: "Apr 2013 – Jan 2016",
    start: "2013",
    summary:
      "Built the finance function: close, statements, tax, tutor fees, payroll, and banking.",
    achievement:
      "Introduced the company budgeting system. Supported the parent company's Tokyo Stock Exchange listing through controls and process documentation.",
  },
];

export const groupScope = [
  { name: "Borderlink Educational Services Inc.", note: "formerly Ripple Kids · 2016 – present" },
  { name: "RareJob English Assessment Inc.", note: "formerly GOLA English Tutorial · 2018 – present" },
  { name: "Envizion Philippines Inc.", note: "2016 – 2022" },
];

export const earlierRoles = [
  {
    dates: "2012",
    title: "Finance Controller",
    org: "Trident Insurance Co. Ltd.",
    place: "Nairobi, Kenya",
    detail: "Accounting procedures, internal controls, audited statements, MIS and budget plan.",
  },
  {
    dates: "2010 – 2012",
    title: "Group Internal Auditor",
    org: "Premier Group of Companies",
    place: "Nairobi, Kenya",
    detail: "Risk-based audit plans, fieldwork, and reports to senior management with follow-up.",
  },
  {
    dates: "2008 – 2010",
    title: "Director / Audit Supervisor / Senior Auditor",
    org: "IA Report and Consulting Inc. (RSM service arm)",
    place: "Makati",
    detail: "Planned and supervised concurrent engagements; led teams averaging six auditors.",
  },
  {
    dates: "2007 – 2008",
    title: "Accounting & Finance Officer",
    org: "Glenmark Philippines Inc.",
    place: "Pasig",
    detail: "Monthly MIS to the parent in India, rolling cash flow and profit forecasts, close.",
  },
  {
    dates: "2006 – 2007",
    title: "Senior Auditor / Tax Associate / System Implementor",
    org: "Alas, Oplas & Co., CPAs",
    place: "Makati",
    detail: "Financial audits, control testing, and full-cycle Philippine tax compliance.",
  },
];

export const credentials = [
  { title: "Certified Public Accountant", short: "CPA", meta: "Philippines", year: "2006" },
  { title: "Certified Internal Auditor", short: "CIA", meta: "Institute of Internal Auditors", year: "2010" },
  { title: "BS Accountancy", short: "BSA", meta: "Saint Louis University, Baguio", year: "2005" },
];

export const memberships = [
  "Philippine Institute of Certified Public Accountants",
  "Institute of Internal Auditors",
];

export const services = [
  {
    title: "Controllership & Reporting",
    body: "Close, statements, group reporting.",
  },
  {
    title: "Governance & Audit Readiness",
    body: "Internal controls, BIR audits, external audit management.",
  },
  {
    title: "Cost & Process Transformation",
    body: "Budgeting, FP&A, shared-services design.",
  },
];
