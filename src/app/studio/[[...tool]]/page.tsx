import { StudioPageClient } from "@/components/studio-page-client";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <StudioPageClient />;
}
