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
    sections: withKeys(
      content.sections.map((section, index) => {
        if (section._type === "architectureSection") {
          return {
            ...section,
            modules: withKeys(
              section.modules.map((item) => ({
                _type: "moduleItem",
                ...item,
              })),
              `section-${index + 1}-module`,
            ),
          };
        }

        if (section._type === "capabilitiesSection") {
          return {
            ...section,
            items: withKeys(
              section.items.map((item) => ({
                _type: "stringValueItem",
                value: item,
              })),
              `section-${index + 1}-item`,
            ),
          };
        }

        if (section._type === "methodologySection") {
          return {
            ...section,
            steps: withKeys(
              section.steps.map((item) => ({
                _type: "methodologyStep",
                ...item,
              })),
              `section-${index + 1}-step`,
            ),
          };
        }

        if (section._type === "flexibleContentSection") {
          return {
            ...section,
            body: withKeys(
              section.body.map((paragraph) => ({
                _type: "stringValueItem",
                value: paragraph,
              })),
              `section-${index + 1}-body`,
            ),
            items: withKeys(
              section.items.map((item) => ({
                _type: "stringValueItem",
                value: item,
              })),
              `section-${index + 1}-bullet`,
            ),
            cards: withKeys(
              section.cards.map((card) => ({
                _type: "contentCard",
                ...card,
              })),
              `section-${index + 1}-card`,
            ),
            panel: section.panel
              ? {
                  _type: "featurePanel",
                  ...section.panel,
                }
              : undefined,
          };
        }

        return section;
      }),
      "section",
    ),
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
