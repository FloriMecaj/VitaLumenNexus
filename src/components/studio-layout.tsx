"use client";

import type { LayoutProps } from "sanity";

export function StudioLayout(props: LayoutProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --vn-studio-max-width: min(1680px, calc(100vw - 72px));
        }

        [data-ui='Card'][data-scheme],
        [data-ui='Pane'] {
          backdrop-filter: saturate(110%);
        }

        [data-testid='document-panel-portal']
          [data-ui='Container'][data-width='2'],
        [data-testid='document-panel-portal']
          [data-ui='Container'][data-width='3'],
        [data-testid='document-panel-portal']
          [data-ui='Container'][data-width='4'],
        [data-testid='document-panel-portal']
          [data-ui='Container'][data-width='5'],
        [data-testid='document-panel-portal']
          [data-ui='Container'][data-width='6'] {
          max-width: var(--vn-studio-max-width) !important;
          width: 100% !important;
        }

        [data-testid='document-panel-portal'] [data-ui='Container'] {
          padding-left: 32px !important;
          padding-right: 32px !important;
        }

        [data-testid='document-panel-portal'] form {
          width: 100%;
        }

        [data-testid='document-panel-portal'] [data-ui='TextInput'],
        [data-testid='document-panel-portal'] textarea {
          font-size: 16px;
        }

        @media (max-width: 900px) {
          :root {
            --vn-studio-max-width: calc(100vw - 24px);
          }

          [data-testid='document-panel-portal'] [data-ui='Container'] {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }
      `}</style>
      {props.renderDefault(props)}
    </>
  );
}
