import { defaultHomePageContent } from "./default-content";

const withKeys = <T extends object>(items: T[], prefix: string) =>
  items.map((item, index) => ({
    _key: `${prefix}-${index + 1}`,
    ...item,
  }));

export function createSiteSettingsDocument() {
  const content = defaultHomePageContent;

  return {
    _id: "siteSettings",
    _type: "siteSettings",
    seo: {
      _type: "seo",
      ...content.seo,
    },
    brand: {
      _type: "brand",
      ...content.brand,
    },
    navigation: withKeys(
      content.navigation.map((item) => ({
        _type: "navigationItem",
        ...item,
      })),
      "nav",
    ),
    hero: {
      _type: "heroSection",
      ...content.hero,
      stats: withKeys(
        content.hero.stats.map((item) => ({
          _type: "heroStat",
          ...item,
        })),
        "hero-stat",
      ),
    },
    platform: {
      _type: "platformSection",
      ...content.platform,
    },
    architecture: {
      _type: "architectureSection",
      ...content.architecture,
      modules: withKeys(
        content.architecture.modules.map((item) => ({
          _type: "moduleItem",
          ...item,
        })),
        "module",
      ),
    },
    capabilities: {
      _type: "capabilitiesSection",
      ...content.capabilities,
      items: withKeys(
        content.capabilities.items.map((item) => ({
          _type: "stringValueItem",
          value: item,
        })),
        "capability",
      ),
    },
    aerospaceFeature: {
      _type: "aerospaceFeature",
      ...content.aerospaceFeature,
    },
    methodology: {
      _type: "methodologySection",
      ...content.methodology,
      steps: withKeys(
        content.methodology.steps.map((item) => ({
          _type: "methodologyStep",
          ...item,
        })),
        "step",
      ),
    },
    vision: {
      _type: "sectionIntro",
      ...content.vision,
    },
    founder: {
      _type: "founderSection",
      ...content.founder,
      paragraphs: withKeys(
        content.founder.paragraphs.map((paragraph) => ({
          _type: "stringValueItem",
          value: paragraph,
        })),
        "founder-paragraph",
      ),
    },
    contact: {
      _type: "contactSection",
      ...content.contact,
    },
    contactDialog: {
      _type: "contactDialogSection",
      ...content.contactDialog,
      options: withKeys(
        content.contactDialog.options.map((item) => ({
          _type: "contactOption",
          ...item,
        })),
        "contact-option",
      ),
    },
  };
}
