// lib/site.ts
export const site = {
  name: "VTS Services",
  legalName: "VTS Services",
  domain: "vts-services.com", // change when ready
  email: "leads@vts-services.com", // change
  phone: "+971 XX XXX XXXX", // change
  whatsapp: "+971XXXXXXXXX", // change
  locationLine: "UAE (International delivery available)", // change
  tagline: "Fire alarm services for large-scale projects.",
  description:
    "VTS Services provides fire alarm installation, testing, commissioning, maintenance, and troubleshooting for commercial and large-scale projects. Fast response, compliant delivery, and clear reporting.",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Sectors", href: "/sectors" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    {
      slug: "fire-alarm-installation",
      title: "Fire Alarm Installation",
      excerpt:
        "End-to-end installation for new builds and refurbishments, delivered to spec with clean handover documentation.",
      bullets: ["Site survey & scope", "Install & integrate", "Testing support", "Handover packs"],
    },
    {
      slug: "fire-alarm-maintenance",
      title: "Fire Alarm Maintenance (AMC)",
      excerpt:
        "Planned preventative maintenance to reduce faults, keep compliance on track, and avoid downtime.",
      bullets: ["PPM visits", "Fault trend reporting", "Spare strategy", "SLA response options"],
    },
    {
      slug: "fire-alarm-testing-inspection",
      title: "Testing, Inspection & Reporting",
      excerpt:
        "Routine testing and inspection with clear reporting for facilities teams and auditors.",
      bullets: ["Device testing", "Panel checks", "Cause & effect checks", "Compliance-ready reports"],
    },
    {
      slug: "fire-alarm-troubleshooting-repairs",
      title: "Troubleshooting & Repairs",
      excerpt:
        "Rapid diagnosis and repairs to get systems stable again—minimising disruption and repeat callouts.",
      bullets: ["On-site fault finding", "Isolate root cause", "Repair/replace", "Prevent recurrence"],
    },
  ],
  sectors: [
    "Commercial Offices",
    "Retail & Malls",
    "Hospitality (Hotels & Resorts)",
    "Industrial & Warehousing",
    "Healthcare",
    "Education",
    "Residential Towers",
    "Data Centres",
  ],
};