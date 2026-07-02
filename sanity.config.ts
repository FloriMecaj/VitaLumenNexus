import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { StudioLayout } from "./src/components/studio-layout";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { dataset, projectId, studioBasePath } from "./src/sanity/env";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "default",
  title: "VitaLumen Nexus Admin",
  basePath: studioBasePath,
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Website Content")
              .id("siteSettings")
              .child(
                S.editor().id("siteSettings").schemaType("siteSettings").documentId("siteSettings"),
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      layout: StudioLayout,
    },
  },
  document: {
    actions: (prev, context) =>
      context.schemaType === "siteSettings"
        ? prev.filter((action) => action.action && singletonActions.has(action.action))
        : prev,
    newDocumentOptions: (prev, context) =>
      context.creationContext.type === "global"
        ? prev.filter((item) => item.templateId !== "siteSettings")
        : prev,
  },
});
