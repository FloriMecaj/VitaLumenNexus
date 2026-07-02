export const sanityEnv = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "12ghd1j6",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-01",
  studioBasePath: "/studio",
};

export const projectId = sanityEnv.projectId;
export const dataset = sanityEnv.dataset;
export const apiVersion = sanityEnv.apiVersion;
export const studioBasePath = sanityEnv.studioBasePath;

export const useCdn = false;

export const writeToken = process.env.SANITY_API_WRITE_TOKEN || "";

export function hasSanityConfig() {
  return Boolean(sanityEnv.projectId && sanityEnv.dataset);
}

export const isSanityConfigured = hasSanityConfig();
