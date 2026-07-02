"use client";

import { NextStudio } from "next-sanity/studio/client-component";

import config from "../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export function StudioPageClient() {
  if (!isSanityConfigured) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
        <div className="space-y-5 rounded-[32px] border border-[color:var(--border)] bg-white/75 p-8 shadow-[0_24px_80px_rgba(20,34,53,0.08)]">
          <h1 className="font-display text-4xl tracking-[-0.05em] text-[color:var(--foreground)]">
            Sanity setup required
          </h1>
          <p className="text-base leading-8 text-[color:var(--muted-foreground)]">
            Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and
            `NEXT_PUBLIC_SANITY_DATASET` to `client/.env.local`, then restart
            the app. The rest of the setup steps are documented in
            `client/README-SANITY.md`.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
