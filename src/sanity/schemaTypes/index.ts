import { defineArrayMember, defineField, defineType } from "sanity";

import { createSiteSettingsDocument } from "../lib/site-settings-document";
import { iconOptions } from "../lib/icon-options";

const iconField = defineField({
  name: "icon",
  title: "Icon",
  type: "string",
  options: {
    list: iconOptions,
    layout: "dropdown",
  },
  validation: (Rule) => Rule.required(),
});

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
    iconField,
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
    iconField,
    defineField({
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

const sectionIntro = defineType({
  name: "sectionIntro",
  title: "Section Intro",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
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
      validation: (Rule) => Rule.required(),
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
  options: {
    collapsible: true,
    collapsed: false,
  },
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
  options: {
    collapsible: true,
    collapsed: false,
  },
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

const heroSection = defineType({
  name: "heroSection",
  title: "Hero",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
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
  options: {
    collapsible: true,
    collapsed: false,
  },
  preview: {
    select: {
      title: "title",
      subtitle: "missionTitle",
    },
  },
  fields: [
    ...sectionIntro.fields,
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
  options: {
    collapsible: true,
    collapsed: false,
  },
  preview: {
    select: {
      title: "title",
      subtitle: "label",
    },
  },
  fields: [
    ...sectionIntro.fields,
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
  options: {
    collapsible: true,
    collapsed: false,
  },
  preview: {
    select: {
      title: "title",
      subtitle: "label",
    },
  },
  fields: [
    ...sectionIntro.fields,
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
  title: "Aerospace Feature",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  preview: {
    select: {
      title: "title",
      subtitle: "objective",
    },
  },
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "title", title: "Title", type: "text", rows: 3 }),
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
  options: {
    collapsible: true,
    collapsed: false,
  },
  preview: {
    select: {
      title: "title",
      subtitle: "label",
    },
  },
  fields: [
    ...sectionIntro.fields,
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [defineArrayMember({ type: "methodologyStep" })],
    }),
  ],
});

const founderSection = defineType({
  name: "founderSection",
  title: "Founder Section",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
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
  options: {
    collapsible: true,
    collapsed: false,
  },
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
  options: {
    collapsible: true,
    collapsed: false,
  },
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
    { name: "platform", title: "Platform" },
    { name: "architecture", title: "Architecture" },
    { name: "capabilities", title: "Capabilities" },
    { name: "methodology", title: "Method" },
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
      title: "Navigation",
      type: "array",
      of: [defineArrayMember({ type: "navigationItem" })],
      group: "foundation",
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "heroSection",
      group: "hero",
    }),
    defineField({
      name: "platform",
      title: "Platform Section",
      type: "platformSection",
      group: "platform",
    }),
    defineField({
      name: "architecture",
      title: "Architecture Section",
      type: "architectureSection",
      group: "architecture",
    }),
    defineField({
      name: "capabilities",
      title: "Capabilities Section",
      type: "capabilitiesSection",
      group: "capabilities",
    }),
    defineField({
      name: "aerospaceFeature",
      title: "Aerospace Feature",
      type: "aerospaceFeature",
      group: "capabilities",
    }),
    defineField({
      name: "methodology",
      title: "Methodology Section",
      type: "methodologySection",
      group: "methodology",
    }),
    defineField({
      name: "vision",
      title: "Vision Section",
      type: "sectionIntro",
      group: "methodology",
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
  sectionIntro,
  stringValueItem,
  heroSection,
  platformSection,
  architectureSection,
  capabilitiesSection,
  aerospaceFeature,
  methodologySection,
  founderSection,
  contactSection,
  contactDialogSection,
];
