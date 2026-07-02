import { unstable_noStore as noStore } from "next/cache";

import { defaultHomePageContent } from "./default-content";
import { client } from "./client";
import { siteSettingsQuery } from "./queries";
import type { HomePageContent } from "../types";

export async function loadHomePageContent(): Promise<HomePageContent> {
  noStore();

  if (!client) {
    return defaultHomePageContent;
  }

  try {
    const content = await client.fetch<HomePageContent | null>(siteSettingsQuery);
    return content ?? defaultHomePageContent;
  } catch {
    return defaultHomePageContent;
  }
}
