import type { Metadata } from "next";

import { HomePage } from "@/components/home-page";
import { loadHomePageContent } from "@/sanity/lib/load-home-page";

export async function generateMetadata(): Promise<Metadata> {
  const content = await loadHomePageContent();

  return {
    title: content.seo.title,
    description: content.seo.description,
  };
}

export default async function Home() {
  const content = await loadHomePageContent();

  return <HomePage content={content} />;
}
