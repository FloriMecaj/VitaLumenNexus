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
  label?: string;
  title: string;
  description?: string;
};

export type ContentCard = {
  title: string;
  description: string;
  icon?: IconName;
};

export type FeaturePanel = {
  label?: string;
  title: string;
  description: string;
};

export type SectionAnchor = {
  sectionId: string;
};

export type PlatformPageSection = SectionAnchor &
  SectionIntroContent & {
    _type: "platformSection";
    missionLabel: string;
    missionTitle: string;
    missionDescription: string;
  };

export type ArchitecturePageSection = SectionAnchor &
  SectionIntroContent & {
    _type: "architectureSection";
    modules: ModuleItem[];
  };

export type CapabilitiesPageSection = SectionAnchor &
  SectionIntroContent & {
    _type: "capabilitiesSection";
    items: string[];
  };

export type AerospaceFeaturePageSection = SectionAnchor & {
  _type: "aerospaceFeature";
  badge: string;
  title: string;
  description: string;
  objectiveLabel: string;
  objective: string;
};

export type MethodologyPageSection = SectionAnchor &
  SectionIntroContent & {
    _type: "methodologySection";
    steps: MethodologyStep[];
  };

export type VisionPageSection = SectionAnchor &
  SectionIntroContent & {
    _type: "sectionIntro";
  };

export type FlexibleSectionLayout =
  | "copy"
  | "copyWithPanel"
  | "bulletList"
  | "cardGrid";

export type FlexibleContentSection = SectionAnchor & {
  _type: "flexibleContentSection";
  label?: string;
  title: string;
  description?: string;
  layout: FlexibleSectionLayout;
  body: string[];
  items: string[];
  cards: ContentCard[];
  panel?: FeaturePanel;
};

export type PageSection =
  | PlatformPageSection
  | ArchitecturePageSection
  | CapabilitiesPageSection
  | AerospaceFeaturePageSection
  | MethodologyPageSection
  | VisionPageSection
  | FlexibleContentSection;

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
  sections: PageSection[];
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
