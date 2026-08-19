import { createClient } from "@sanity/client";
import { createSiteSettingsDocument } from "../src/sanity/lib/site-settings-document.ts";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const writeToken = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!dataset) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_DATASET");
}

if (!writeToken) {
  throw new Error("Missing SANITY_API_WRITE_TOKEN");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-07-01",
  token: writeToken,
  useCdn: false,
});

const document = createSiteSettingsDocument();

await client.createOrReplace(document);

console.log(`Seeded ${document._id} into ${projectId}/${dataset}.`);
