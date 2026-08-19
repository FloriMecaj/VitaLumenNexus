import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    seo,
    brand,
    navigation[]{
      label,
      href,
      action
    },
    hero{
      badge,
      eyebrow,
      title,
      description,
      supportingText,
      primaryCtaLabel,
      primaryCtaHref,
      secondaryCtaLabel,
      secondaryCtaHref,
      storyBadge,
      storyTitle,
      storyDescription,
      storyEyebrow,
      storySummary,
      storySupportingText,
      storyIcon,
      stats[]{
        label,
        value
      }
    },
    sections[]{
      _type,
      sectionId,
      label,
      title,
      description,
      missionLabel,
      missionTitle,
      missionDescription,
      "modules": modules[]{
        title,
        description,
        icon
      },
      "items": items[].value,
      badge,
      objectiveLabel,
      objective,
      "steps": steps[]{
        number,
        title
      },
      layout,
      "body": body[].value,
      "cards": cards[]{
        title,
        description,
        icon
      },
      panel{
        label,
        title,
        description
      }
    },
    founder{
      badge,
      name,
      role,
      title,
      "paragraphs": paragraphs[].value,
      quoteLabel,
      quote
    },
    contact,
    contactDialog{
      title,
      description,
      options[]{
        title,
        description,
        href,
        label,
        icon,
        openInNewTab
      }
    },
    platform,
    architecture{
      label,
      title,
      description,
      "modules": modules[]{
        title,
        description,
        icon
      }
    },
    capabilities{
      label,
      title,
      description,
      "items": items[].value
    },
    aerospaceFeature,
    methodology{
      label,
      title,
      description,
      "steps": steps[]{
        number,
        title
      }
    },
    vision
  }
`);
