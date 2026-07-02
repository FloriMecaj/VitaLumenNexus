export type IconName =
  | "orbit"
  | "sparkles"
  | "workflow"
  | "bot"
  | "cpu"
  | "radar"
  | "compass"
  | "shieldCheck"
  | "binary"
  | "rocket"
  | "mail"
  | "messageCircle";

export type NavItem = {
  label: string;
  href: string;
  action?: "scroll" | "contactDialog";
};

export type HeroStat = {
  label: string;
  value: string;
};

export type ModuleItem = {
  title: string;
  description: string;
  icon: IconName;
};

export type MethodologyStep = {
  number: string;
  title: string;
};

export type ContactOption = {
  title: string;
  description: string;
  href: string;
  label: string;
  icon: IconName;
  openInNewTab?: boolean;
};

export type SectionIntroContent = {
  label: string;
  title: string;
  description: string;
};

export type HomePageContent = {
  seo: {
    title: string;
    description: string;
  };
  brand: {
    siteTitle: string;
    tagline: string;
    footerBlurb: string;
  };
  navigation: NavItem[];
  hero: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    supportingText: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    storyBadge: string;
    storyTitle: string;
    storyDescription: string;
    storyEyebrow: string;
    storySummary: string;
    storySupportingText: string;
    storyIcon: IconName;
    stats: HeroStat[];
  };
  platform: SectionIntroContent & {
    missionLabel: string;
    missionTitle: string;
    missionDescription: string;
  };
  architecture: SectionIntroContent & {
    modules: ModuleItem[];
  };
  capabilities: SectionIntroContent & {
    items: string[];
  };
  aerospaceFeature: {
    badge: string;
    title: string;
    description: string;
    objectiveLabel: string;
    objective: string;
  };
  methodology: SectionIntroContent & {
    steps: MethodologyStep[];
  };
  vision: SectionIntroContent;
  founder: {
    badge: string;
    name: string;
    role: string;
    title: string;
    paragraphs: string[];
    quoteLabel: string;
    quote: string;
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    panelDescription: string;
    actionLabel: string;
  };
  contactDialog: {
    title: string;
    description: string;
    options: ContactOption[];
  };
};
