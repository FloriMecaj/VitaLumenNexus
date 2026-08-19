import { defineArrayMember, defineField, defineType } from "sanity";

import { iconOptions } from "../lib/icon-options";
import { createSiteSettingsDocument } from "../lib/site-settings-document";

const iconField = defineField({
  name: "icon",
  title: "Icon",
  type: "string",
  options: {
    list: iconOptions,
    layout: "dropdown",
  },
});

const sectionAnchorFields = [
  defineField({
    name: "sectionId",
    title: "Section ID",
    type: "string",
    description:
      "Used for the website anchor link, for example 'platform' becomes '#platform'.",
    validation: (Rule) =>
      Rule.required()
        .regex(/^[a-z0-9-]+$/)
        .error("Use lowercase letters, numbers, and hyphens only."),
  }),
];

const sectionIntroFields = [
  defineField({
    name: "label",
    title: "Label",
    type: "string",
  }),
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "description",
    title: "Description",
    type: "text",
    rows: 4,
  }),
];

const navigationItem = defineType({
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  preview: {
    select: {
      title: "label",
      subtitle: "href",
    },
  },
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Href",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "action",
      title: "Action",
      type: "string",
      options: {
        list: [
          { title: "Scroll", value: "scroll" },
          { title: "Open Contact Dialog", value: "contactDialog" },
        ],
      },
      initialValue: "scroll",
    }),
  ],
});

const heroStat = defineType({
  name: "heroStat",
  title: "Hero Stat",
  type: "object",
  preview: {
    select: {
      title: "label",
      subtitle: "value",
    },
  },
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

const moduleItem = defineType({
  name: "moduleItem",
  title: "Module",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      ...iconField,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

const methodologyStep = defineType({
  name: "methodologyStep",
  title: "Methodology Step",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "number",
    },
  },
  fields: [
    defineField({
      name: "number",
      title: "Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

const contactOption = defineType({
  name: "contactOption",
  title: "Contact Option",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "label",
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      ...iconField,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

const stringValueItem = defineType({
  name: "stringValueItem",
  title: "Text Item",
  type: "object",
  preview: {
    select: {
      title: "value",
    },
    prepare(selection) {
      const title = selection.title || "Text Item";

      return {
        title:
          title.length > 72 ? `${title.slice(0, 69).trimEnd()}...` : title,
      };
    },
  },
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

const contentCard = defineType({
  name: "contentCard",
  title: "Content Card",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    iconField,
  ],
});

const featurePanel = defineType({
  name: "featurePanel",
  title: "Feature Panel",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "label",
    },
  },
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

const brand = defineType({
  name: "brand",
  title: "Brand",
  type: "object",
  preview: {
    select: {
      title: "siteTitle",
      subtitle: "tagline",
    },
  },
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "footerBlurb",
      title: "Footer Blurb",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

const heroSection = defineType({
  name: "heroSection",
  title: "Hero",
  type: "object",
  fieldsets: [
    { name: "intro", title: "Intro Copy", options: { columns: 2 } },
    { name: "cta", title: "Calls To Action", options: { columns: 2 } },
    { name: "story", title: "Story Card", options: { columns: 2 } },
    { name: "stats", title: "Stats" },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "eyebrow",
    },
  },
  fields: [
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      fieldset: "intro",
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      fieldset: "intro",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "intro",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      fieldset: "intro",
    }),
    defineField({
      name: "supportingText",
      title: "Supporting Text",
      type: "text",
      rows: 4,
      fieldset: "intro",
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      fieldset: "cta",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Primary CTA Link",
      type: "string",
      fieldset: "cta",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      fieldset: "cta",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Secondary CTA Link",
      type: "string",
      fieldset: "cta",
    }),
    defineField({
      name: "storyBadge",
      title: "Story Card Badge",
      type: "string",
      fieldset: "story",
    }),
    defineField({
      name: "storyTitle",
      title: "Story Card Title",
      type: "string",
      fieldset: "story",
    }),
    defineField({
      name: "storyDescription",
      title: "Story Card Description",
      type: "text",
      rows: 3,
      fieldset: "story",
    }),
    defineField({
      name: "storyEyebrow",
      title: "Story Card Eyebrow",
      type: "string",
      fieldset: "story",
    }),
    defineField({
      name: "storySummary",
      title: "Story Card Summary",
      type: "text",
      rows: 3,
      fieldset: "story",
    }),
    defineField({
      name: "storySupportingText",
      title: "Story Card Supporting Text",
      type: "text",
      rows: 3,
      fieldset: "story",
    }),
    defineField({
      ...iconField,
      name: "storyIcon",
      title: "Story Card Icon",
      fieldset: "story",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [defineArrayMember({ type: "heroStat" })],
      fieldset: "stats",
    }),
  ],
});

const platformSection = defineType({
  name: "platformSection",
  title: "Platform Section",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "sectionId",
    },
  },
  fields: [
    ...sectionAnchorFields,
    ...sectionIntroFields,
    defineField({
      name: "missionLabel",
      title: "Mission Label",
      type: "string",
    }),
    defineField({
      name: "missionTitle",
      title: "Mission Title",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "missionDescription",
      title: "Mission Description",
      type: "text",
      rows: 4,
    }),
  ],
});

const architectureSection = defineType({
  name: "architectureSection",
  title: "Architecture Section",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "sectionId",
    },
  },
  fields: [
    ...sectionAnchorFields,
    ...sectionIntroFields,
    defineField({
      name: "modules",
      title: "Modules",
      type: "array",
      of: [defineArrayMember({ type: "moduleItem" })],
    }),
  ],
});

const capabilitiesSection = defineType({
  name: "capabilitiesSection",
  title: "Capabilities Section",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "sectionId",
    },
  },
  fields: [
    ...sectionAnchorFields,
    ...sectionIntroFields,
    defineField({
      name: "items",
      title: "Capabilities",
      type: "array",
      of: [defineArrayMember({ type: "stringValueItem" })],
    }),
  ],
});

const aerospaceFeature = defineType({
  name: "aerospaceFeature",
  title: "Feature Highlight",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "sectionId",
    },
  },
  fields: [
    ...sectionAnchorFields,
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({
      name: "title",
      title: "Title",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "objectiveLabel",
      title: "Objective Label",
      type: "string",
    }),
    defineField({
      name: "objective",
      title: "Objective",
      type: "text",
      rows: 3,
    }),
  ],
});

const methodologySection = defineType({
  name: "methodologySection",
  title: "Methodology Section",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "sectionId",
    },
  },
  fields: [
    ...sectionAnchorFields,
    ...sectionIntroFields,
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [defineArrayMember({ type: "methodologyStep" })],
    }),
  ],
});

const sectionIntro = defineType({
  name: "sectionIntro",
  title: "Intro Section",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "sectionId",
    },
  },
  fields: [...sectionAnchorFields, ...sectionIntroFields],
});

const flexibleContentSection = defineType({
  name: "flexibleContentSection",
  title: "Flexible Section",
  type: "object",
  fieldsets: [
    { name: "copy", title: "Section Copy" },
    { name: "support", title: "Supporting Content" },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "sectionId",
      layout: "layout",
    },
    prepare(selection) {
      return {
        title: selection.title || "Flexible Section",
        subtitle: `${selection.subtitle || "no-id"} • ${selection.layout || "copy"}`,
      };
    },
  },
  fields: [
    ...sectionAnchorFields,
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      fieldset: "copy",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "copy",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      fieldset: "copy",
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      initialValue: "copy",
      options: {
        list: [
          { title: "Copy", value: "copy" },
          { title: "Copy With Panel", value: "copyWithPanel" },
          { title: "Bullet List", value: "bulletList" },
          { title: "Card Grid", value: "cardGrid" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body Paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "stringValueItem" })],
      fieldset: "support",
    }),
    defineField({
      name: "items",
      title: "Bullet Items",
      type: "array",
      of: [defineArrayMember({ type: "stringValueItem" })],
      fieldset: "support",
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [defineArrayMember({ type: "contentCard" })],
      fieldset: "support",
    }),
    defineField({
      name: "panel",
      title: "Feature Panel",
      type: "featurePanel",
      fieldset: "support",
    }),
  ],
});

const legacyPlatformSection = defineType({
  name: "legacyPlatformSection",
  title: "Legacy Platform Section",
  type: "object",
  fields: [
    ...sectionIntroFields,
    defineField({
      name: "missionLabel",
      title: "Mission Label",
      type: "string",
    }),
    defineField({
      name: "missionTitle",
      title: "Mission Title",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "missionDescription",
      title: "Mission Description",
      type: "text",
      rows: 4,
    }),
  ],
});

const legacyArchitectureSection = defineType({
  name: "legacyArchitectureSection",
  title: "Legacy Architecture Section",
  type: "object",
  fields: [
    ...sectionIntroFields,
    defineField({
      name: "modules",
      title: "Modules",
      type: "array",
      of: [defineArrayMember({ type: "moduleItem" })],
    }),
  ],
});

const legacyCapabilitiesSection = defineType({
  name: "legacyCapabilitiesSection",
  title: "Legacy Capabilities Section",
  type: "object",
  fields: [
    ...sectionIntroFields,
    defineField({
      name: "items",
      title: "Capabilities",
      type: "array",
      of: [defineArrayMember({ type: "stringValueItem" })],
    }),
  ],
});

const legacyAerospaceFeature = defineType({
  name: "legacyAerospaceFeature",
  title: "Legacy Feature Highlight",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({
      name: "title",
      title: "Title",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "objectiveLabel",
      title: "Objective Label",
      type: "string",
    }),
    defineField({
      name: "objective",
      title: "Objective",
      type: "text",
      rows: 3,
    }),
  ],
});

const legacyMethodologySection = defineType({
  name: "legacyMethodologySection",
  title: "Legacy Methodology Section",
  type: "object",
  fields: [
    ...sectionIntroFields,
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [defineArrayMember({ type: "methodologyStep" })],
    }),
  ],
});

const legacyVisionSection = defineType({
  name: "legacyVisionSection",
  title: "Legacy Vision Section",
  type: "object",
  fields: [...sectionIntroFields],
});

const founderSection = defineType({
  name: "founderSection",
  title: "Founder Section",
  type: "object",
  preview: {
    select: {
      title: "name",
      subtitle: "role",
    },
  },
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "stringValueItem" })],
    }),
    defineField({
      name: "quoteLabel",
      title: "Quote Label",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
    }),
  ],
});

const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "badge",
    },
  },
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "panelDescription",
      title: "Panel Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "actionLabel",
      title: "Action Label",
      type: "string",
    }),
  ],
});

const contactDialogSection = defineType({
  name: "contactDialogSection",
  title: "Contact Dialog",
  type: "object",
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "options",
      title: "Options",
      type: "array",
      of: [defineArrayMember({ type: "contactOption" })],
    }),
  ],
});

const siteSettings = defineType({
  name: "siteSettings",
  title: "Website Content",
  type: "document",
  initialValue: createSiteSettingsDocument,
  groups: [
    { name: "foundation", title: "Foundation", default: true },
    { name: "hero", title: "Hero" },
    { name: "sections", title: "Page Sections" },
    { name: "founder", title: "Founder" },
    { name: "contact", title: "Contact" },
  ],
  preview: {
    select: {
      title: "brand.siteTitle",
      subtitle: "seo.description",
    },
  },
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "foundation",
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "brand",
      group: "foundation",
    }),
    defineField({
      name: "navigation",
      title: "Manual Navigation Items",
      description:
        "These are the only links shown in the header navigation. Keep this list to the four main sections.",
      type: "array",
      of: [defineArrayMember({ type: "navigationItem" })],
      validation: (Rule) => Rule.max(4),
      group: "foundation",
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "heroSection",
      group: "hero",
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      description:
        "Reorder sections freely and add new ones. 'Flexible Section' is the generic option for brand new website sections.",
      type: "array",
      of: [
        defineArrayMember({ type: "platformSection" }),
        defineArrayMember({ type: "architectureSection" }),
        defineArrayMember({ type: "capabilitiesSection" }),
        defineArrayMember({ type: "aerospaceFeature" }),
        defineArrayMember({ type: "methodologySection" }),
        defineArrayMember({ type: "sectionIntro" }),
        defineArrayMember({ type: "flexibleContentSection" }),
      ],
      group: "sections",
    }),
    defineField({
      name: "platform",
      title: "Legacy Platform Section",
      type: "legacyPlatformSection",
      group: "sections",
      hidden: true,
      readOnly: true,
      deprecated: {
        reason:
          "Legacy field kept only to avoid Studio warnings on older documents. Use Page Sections instead.",
      },
    }),
    defineField({
      name: "architecture",
      title: "Legacy Architecture Section",
      type: "legacyArchitectureSection",
      group: "sections",
      hidden: true,
      readOnly: true,
      deprecated: {
        reason:
          "Legacy field kept only to avoid Studio warnings on older documents. Use Page Sections instead.",
      },
    }),
    defineField({
      name: "capabilities",
      title: "Legacy Capabilities Section",
      type: "legacyCapabilitiesSection",
      group: "sections",
      hidden: true,
      readOnly: true,
      deprecated: {
        reason:
          "Legacy field kept only to avoid Studio warnings on older documents. Use Page Sections instead.",
      },
    }),
    defineField({
      name: "aerospaceFeature",
      title: "Legacy Feature Highlight",
      type: "legacyAerospaceFeature",
      group: "sections",
      hidden: true,
      readOnly: true,
      deprecated: {
        reason:
          "Legacy field kept only to avoid Studio warnings on older documents. Use Page Sections instead.",
      },
    }),
    defineField({
      name: "methodology",
      title: "Legacy Methodology Section",
      type: "legacyMethodologySection",
      group: "sections",
      hidden: true,
      readOnly: true,
      deprecated: {
        reason:
          "Legacy field kept only to avoid Studio warnings on older documents. Use Page Sections instead.",
      },
    }),
    defineField({
      name: "vision",
      title: "Legacy Vision Section",
      type: "legacyVisionSection",
      group: "sections",
      hidden: true,
      readOnly: true,
      deprecated: {
        reason:
          "Legacy field kept only to avoid Studio warnings on older documents. Use Page Sections instead.",
      },
    }),
    defineField({
      name: "founder",
      title: "Founder Section",
      type: "founderSection",
      group: "founder",
    }),
    defineField({
      name: "contact",
      title: "Contact Section",
      type: "contactSection",
      group: "contact",
    }),
    defineField({
      name: "contactDialog",
      title: "Contact Dialog",
      type: "contactDialogSection",
      group: "contact",
    }),
  ],
});

export const schemaTypes = [
  siteSettings,
  seo,
  brand,
  navigationItem,
  heroStat,
  moduleItem,
  methodologyStep,
  contactOption,
  stringValueItem,
  contentCard,
  featurePanel,
  heroSection,
  platformSection,
  architectureSection,
  capabilitiesSection,
  aerospaceFeature,
  methodologySection,
  sectionIntro,
  flexibleContentSection,
  legacyPlatformSection,
  legacyArchitectureSection,
  legacyCapabilitiesSection,
  legacyAerospaceFeature,
  legacyMethodologySection,
  legacyVisionSection,
  founderSection,
  contactSection,
  contactDialogSection,
];
