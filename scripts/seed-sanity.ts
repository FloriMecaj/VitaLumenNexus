import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const writeToken = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!dataset) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_DATASET");
}

if (!writeToken) {
  throw new Error("Missing SANITY_API_WRITE_TOKEN");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-07-01",
  token: writeToken,
  useCdn: false,
});

const document = {
  _id: "siteSettings",
  _type: "siteSettings",
  seo: {
    _type: "seo",
    title: "VitaLumen Nexus",
    description:
      "VitaLumen Nexus is the infrastructure for next-generation intelligence, innovation orchestration, and applied deep-tech discovery.",
  },
  brand: {
    _type: "brand",
    siteTitle: "VitaLumen Nexus",
    tagline: "Intelligence • Innovation • Orchestration",
    footerBlurb:
      "Building the infrastructure for the next generation of intelligent systems.",
  },
  navigation: [
    {
      _key: "nav-1",
      _type: "navigationItem",
      label: "Platform",
      href: "#platform",
      action: "scroll",
    },
    {
      _key: "nav-2",
      _type: "navigationItem",
      label: "Architecture",
      href: "#architecture",
      action: "scroll",
    },
    {
      _key: "nav-3",
      _type: "navigationItem",
      label: "Capabilities",
      href: "#capabilities",
      action: "scroll",
    },
    {
      _key: "nav-4",
      _type: "navigationItem",
      label: "Founder",
      href: "#founder",
      action: "scroll",
    },
    {
      _key: "nav-5",
      _type: "navigationItem",
      label: "Contact",
      href: "#contact",
      action: "contactDialog",
    },
  ],
  hero: {
    _type: "heroSection",
    badge: "Presenting Website",
    eyebrow: "The Infrastructure for Next-Generation Intelligence",
    title: "A modular platform for intelligence, innovation, and execution.",
    description:
      "VitaLumen Nexus is an advanced intelligence platform designed to orchestrate innovation, accelerate technology creation, and connect complex systems through a unified architecture.",
    supportingText:
      "Built around specialized modules, it gives organizations a structured environment to explore opportunities, generate solutions, validate ideas, and transform knowledge into actionable innovation.",
    primaryCtaLabel: "Explore the Platform",
    primaryCtaHref: "#platform",
    secondaryCtaLabel: "View Architecture",
    secondaryCtaHref: "#architecture",
    storyBadge: "Unified Architecture",
    storyTitle:
      "Intelligence becomes structured, scalable, and actionable.",
    storyDescription:
      "A single framework for strategic thinking, technology generation, orchestration, and real-world validation.",
    storyEyebrow: "Aerospace Core",
    storySummary:
      "Applied deep-tech intelligence for engineering-focused exploration.",
    storySupportingText:
      "Conceptual analysis, propulsion modeling, and advanced system evaluation inside structured intelligence workflows.",
    storyIcon: "rocket",
    stats: [
      {
        _key: "hero-stat-1",
        _type: "heroStat",
        label: "Modules",
        value: "10",
      },
      {
        _key: "hero-stat-2",
        _type: "heroStat",
        label: "Method",
        value: "4 Steps",
      },
      {
        _key: "hero-stat-3",
        _type: "heroStat",
        label: "Direction",
        value: "Multi-Domain",
      },
    ],
  },
  platform: {
    _type: "platformSection",
    label: "About The Platform",
    title: "What is VitaLumen Nexus?",
    description:
      "VitaLumen Nexus is a modular intelligence ecosystem that combines strategic thinking, technology generation, system orchestration, and real-world validation into a single framework.",
    missionLabel: "Mission",
    missionTitle:
      "To provide a structured environment where intelligence, innovation, and execution work together.",
    missionDescription:
      "Rather than focusing on one industry, the platform is designed to support multiple domains, including advanced technology, aerospace, intelligent systems, healthcare innovation, and future-oriented research.",
  },
  architecture: {
    _type: "architectureSection",
    label: "Platform Architecture",
    title:
      "A unified intelligence framework built around connected modules.",
    description:
      "Each module is responsible for a distinct layer of intelligence and innovation. Together they create a coordinated system capable of discovering opportunities, generating solutions, validating outcomes, and continuously improving performance.",
    modules: [
      {
        _key: "module-1",
        _type: "moduleItem",
        title: "Meta Platform Layer",
        description:
          "The strategic layer that aligns every module inside a coherent innovation framework.",
        icon: "orbit",
      },
      {
        _key: "module-2",
        _type: "moduleItem",
        title: "Genesis Core",
        description:
          "The origin point for concept generation, directional thinking, and early future scenarios.",
        icon: "sparkles",
      },
      {
        _key: "module-3",
        _type: "moduleItem",
        title: "Orchestrator Core",
        description:
          "The coordinating center for workflows, systems, and intelligence operations.",
        icon: "workflow",
      },
      {
        _key: "module-4",
        _type: "moduleItem",
        title: "AIDL",
        description:
          "A structured layer for applied intelligence development and system reasoning.",
        icon: "bot",
      },
      {
        _key: "module-5",
        _type: "moduleItem",
        title: "Technology Creation Engine",
        description:
          "A dedicated capability for generating concepts, architectures, and technology structures.",
        icon: "cpu",
      },
      {
        _key: "module-6",
        _type: "moduleItem",
        title: "Technology Discovery Engine",
        description:
          "A signal-seeking layer for emerging opportunities, hidden patterns, and innovation gaps.",
        icon: "radar",
      },
      {
        _key: "module-7",
        _type: "moduleItem",
        title: "Civilization Core",
        description:
          "A long-range systems perspective for future structures, societal change, and macro evolution.",
        icon: "compass",
      },
      {
        _key: "module-8",
        _type: "moduleItem",
        title: "Reality Core",
        description:
          "The validation layer that connects ideas to measurable outcomes and feedback loops.",
        icon: "shieldCheck",
      },
      {
        _key: "module-9",
        _type: "moduleItem",
        title: "Innovation Meta Core",
        description:
          "The synthesis layer where strategy, intelligence, and execution become continuous innovation.",
        icon: "binary",
      },
      {
        _key: "module-10",
        _type: "moduleItem",
        title: "Aerospace Core",
        description:
          "The engineering-focused research module for propulsion, analysis, and aerospace exploration.",
        icon: "rocket",
      },
    ],
  },
  capabilities: {
    _type: "capabilitiesSection",
    label: "Core Capabilities",
    title: "What the platform enables.",
    description:
      "VitaLumen Nexus is built to move from exploration to execution through a coordinated innovation cycle.",
    items: [
      {
        _key: "capability-1",
        _type: "stringValueItem",
        value:
          "Generate new concepts, architectures, and technology frameworks.",
      },
      {
        _key: "capability-2",
        _type: "stringValueItem",
        value:
          "Identify emerging trends, hidden opportunities, and innovation gaps.",
      },
      {
        _key: "capability-3",
        _type: "stringValueItem",
        value:
          "Coordinate multiple intelligent processes within a unified environment.",
      },
      {
        _key: "capability-4",
        _type: "stringValueItem",
        value:
          "Connect ideas with measurable outcomes and real-world feedback.",
      },
      {
        _key: "capability-5",
        _type: "stringValueItem",
        value:
          "Support long-term innovation through adaptive learning and strategic intelligence.",
      },
    ],
  },
  aerospaceFeature: {
    _type: "aerospaceFeature",
    badge: "Aerospace Core",
    title:
      "Applied deep-tech intelligence with an engineering-focused research layer.",
    description:
      "Designed to support conceptual analysis, propulsion modeling, system evaluation, and advanced aerospace exploration through structured intelligence workflows.",
    objectiveLabel: "Objective",
    objective: "Bridge visionary ideas and practical engineering thinking.",
  },
  methodology: {
    _type: "methodologySection",
    label: "Our Approach",
    title: "From discovery to innovation.",
    description:
      "The VitaLumen Nexus methodology follows a self-reinforcing cycle that creates continuity between insight, generation, validation, and progress.",
    steps: [
      {
        _key: "step-1",
        _type: "methodologyStep",
        number: "01",
        title: "Discover opportunities.",
      },
      {
        _key: "step-2",
        _type: "methodologyStep",
        number: "02",
        title: "Create solutions.",
      },
      {
        _key: "step-3",
        _type: "methodologyStep",
        number: "03",
        title: "Validate outcomes.",
      },
      {
        _key: "step-4",
        _type: "methodologyStep",
        number: "04",
        title: "Continuously improve.",
      },
    ],
  },
  vision: {
    _type: "sectionIntro",
    label: "Vision",
    title: "Building the future of intelligent systems.",
    description:
      "We believe the future belongs to systems that can discover, create, adapt, and evolve. VitaLumen Nexus is designed as a foundation for that future: a platform where intelligence becomes structured, scalable, and actionable.",
  },
  founder: {
    _type: "founderSection",
    badge: "Themeluesi",
    name: "Pullumb Vathi",
    role: "Founder & Vision Architect of VitaLumen Nexus",
    title: "Founder’s Vision",
    paragraphs: [
      {
        _key: "founder-paragraph-1",
        _type: "stringValueItem",
        value:
          "Pullumb Vathi është themeluesi i VitaLumen Nexus, një iniciative e fokusuar në eksplorimin e sistemeve inteligjente, inovacionit teknologjik dhe arkitekturave të avancuara për të ardhmen.",
      },
      {
        _key: "founder-paragraph-2",
        _type: "stringValueItem",
        value:
          "Vizioni i tij është ndërtimi i një platforme që bashkon inteligjencën, krijimin e teknologjisë dhe mendimin strategjik në një ekosistem të vetëm, të aftë për të mbështetur zhvillimin e ideve dhe zgjidhjeve me ndikim afatgjatë.",
      },
      {
        _key: "founder-paragraph-3",
        _type: "stringValueItem",
        value:
          "Puna e tij është përqendruar në konceptimin e modeleve multidisiplinare që lidhin fusha të ndryshme si inteligjenca artificiale, sistemet komplekse, teknologjitë e avancuara dhe inovacioni i vazhdueshëm.",
      },
      {
        _key: "founder-paragraph-4",
        _type: "stringValueItem",
        value:
          "Përmes VitaLumen Nexus, ai synon të krijojë një mjedis ku idetë transformohen në struktura të organizuara, teknologjitë zhvillohen në mënyrë sistematike dhe inovacioni trajtohet si një proces i vazhdueshëm.",
      },
    ],
    quoteLabel: "Founder’s Vision",
    quote:
      "Teknologjia nuk duhet të kufizohet vetëm në zgjidhjen e problemeve të sotme. Ajo duhet të krijojë mundësitë e së nesërmes.",
  },
  contact: {
    _type: "contactSection",
    badge: "Contact & Partnerships",
    title: "Collaborate with us.",
    description:
      "We welcome discussions with researchers, innovators, technology companies, and organizations interested in advanced intelligence systems and next-generation technology development.",
    panelDescription:
      "For partnership opportunities, research collaborations, and platform inquiries, contact the VitaLumen Nexus team.",
    actionLabel: "Start the conversation",
  },
  contactDialog: {
    _type: "contactDialogSection",
    title: "Contact VitaLumen Nexus",
    description: "Choose how you want to start the conversation.",
    options: [
      {
        _key: "contact-option-1",
        _type: "contactOption",
        title: "Gmail",
        description:
          "Send an email directly to the VitaLumen Nexus inbox.",
        href: "mailto:vitalumennexus@gmail.com",
        label: "vitalumennexus@gmail.com",
        icon: "mail",
      },
      {
        _key: "contact-option-2",
        _type: "contactOption",
        title: "WhatsApp",
        description:
          "Start a WhatsApp conversation using a placeholder number.",
        href: "https://wa.me/355692456138",
        label: "+355692456138",
        icon: "messageCircle",
        openInNewTab: true,
      },
    ],
  },
};

await client.createOrReplace(document);

console.log(`Seeded ${document._id} into ${projectId}/${dataset}.`);
