import { createClient } from "next-sanity";

import {
  apiVersion,
  dataset,
  isSanityConfigured,
  projectId,
  studioBasePath,
  useCdn,
} from "../env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      stega: {
        studioUrl: studioBasePath,
      },
    })
  : null;
