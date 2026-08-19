import { unstable_noStore as noStore } from "next/cache";

import { defaultHomePageContent } from "./default-content";
import { client } from "./client";
import { siteSettingsQuery } from "./queries";
import type {
  ArchitecturePageSection,
  CapabilitiesPageSection,
  FlexibleContentSection,
  HomePageContent,
  MethodologyPageSection,
  PageSection,
  PlatformPageSection,
  VisionPageSection,
} from "../types";

type LegacyContent = Partial<HomePageContent> & {
  platform?: Omit<PlatformPageSection, "_type" | "sectionId">;
  architecture?: Omit<ArchitecturePageSection, "_type" | "sectionId">;
  capabilities?: Omit<CapabilitiesPageSection, "_type" | "sectionId">;
  aerospaceFeature?: Omit<
    Extract<PageSection, { _type: "aerospaceFeature" }>,
    "_type" | "sectionId"
  >;
  methodology?: Omit<MethodologyPageSection, "_type" | "sectionId">;
  vision?: Omit<VisionPageSection, "_type" | "sectionId">;
};

function buildLegacySections(content: LegacyContent): PageSection[] {
  const sections: PageSection[] = [];

  if (content.platform) {
    sections.push({
      _type: "platformSection",
      sectionId: "platform",
      ...content.platform,
    });
  }

  if (content.architecture) {
    sections.push({
      _type: "architectureSection",
      sectionId: "architecture",
      ...content.architecture,
    });
  }

  if (content.capabilities) {
    sections.push({
      _type: "capabilitiesSection",
      sectionId: "capabilities",
      ...content.capabilities,
    });
  }

  if (content.aerospaceFeature) {
    sections.push({
      _type: "aerospaceFeature",
      sectionId: "aerospace-core",
      ...content.aerospaceFeature,
    });
  }

  if (content.methodology) {
    sections.push({
      _type: "methodologySection",
      sectionId: "methodology",
      ...content.methodology,
    });
  }

  if (content.vision) {
    sections.push({
      _type: "sectionIntro",
      sectionId: "vision",
      ...content.vision,
    });
  }

  return sections;
}

function normalizeSection(section: PageSection): PageSection {
  if (section._type === "architectureSection") {
    return {
      ...section,
      modules: section.modules ?? [],
    };
  }

  if (section._type === "capabilitiesSection") {
    return {
      ...section,
      items: section.items ?? [],
    };
  }

  if (section._type === "methodologySection") {
    return {
      ...section,
      steps: section.steps ?? [],
    };
  }

  if (section._type === "flexibleContentSection") {
    const flexibleSection: FlexibleContentSection = {
      ...section,
      layout: section.layout ?? "copy",
      body: section.body ?? [],
      items: section.items ?? [],
      cards: section.cards ?? [],
    };

    return flexibleSection;
  }

  return section;
}

function normalizeHomePageContent(content: LegacyContent | null): HomePageContent {
  if (!content) {
    return defaultHomePageContent;
  }

  const sections =
    content.sections && content.sections.length > 0
      ? content.sections
      : buildLegacySections(content);

  if (sections.length === 0) {
    return defaultHomePageContent;
  }

  return {
    seo: content.seo ?? defaultHomePageContent.seo,
    brand: content.brand ?? defaultHomePageContent.brand,
    navigation: content.navigation ?? defaultHomePageContent.navigation,
    hero: {
      ...(content.hero ?? defaultHomePageContent.hero),
      stats: content.hero?.stats ?? defaultHomePageContent.hero.stats,
    },
    sections: sections.map(normalizeSection),
    founder: content.founder ?? defaultHomePageContent.founder,
    contact: content.contact ?? defaultHomePageContent.contact,
    contactDialog: content.contactDialog ?? defaultHomePageContent.contactDialog,
  };
}

export async function loadHomePageContent(): Promise<HomePageContent> {
  noStore();

  if (!client) {
    return defaultHomePageContent;
  }

  try {
    const content = await client.fetch<LegacyContent | null>(siteSettingsQuery);
    return normalizeHomePageContent(content);
  } catch {
    return defaultHomePageContent;
  }
}
