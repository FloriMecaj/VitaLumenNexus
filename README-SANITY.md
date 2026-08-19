# Sanity Setup

This project now supports a Sanity Studio admin panel at `/studio` and reads the landing-page content from a singleton `siteSettings` document.

## What was moved into Sanity

Everything that was handwritten in the landing page is modeled in Sanity:

- SEO title and description
- Brand title, tagline, and footer copy
- Navigation
- Hero copy, CTAs, stats, and story card
- Ordered page sections that can be rearranged
- Reusable built-in section types for platform, architecture, capabilities, feature blocks, method, and intro sections
- A generic `Flexible Section` type for brand new sections without code changes
- Founder section, paragraphs, and quote
- Contact section and contact dialog options

## Required setup

1. Upgrade Node to `22.12.0` or newer. The installed Sanity packages warn on `22.11.0`.
2. Create a Sanity project at https://www.sanity.io/manage.
3. Create or choose a dataset. `production` is the expected default.
4. In the Sanity project settings, create a token with write access.
5. Copy `client/.env.example` to `client/.env.local`.
6. Fill in:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_WRITE_TOKEN`
   - Leave `NEXT_PUBLIC_SANITY_API_VERSION=2026-07-01` unless you have a reason to change it

## Seed the existing content

The existing handwritten website copy has already been encoded into the project as seed data.

From `client/` run:

```bash
npm run seed:sanity
```

That creates or replaces the singleton `siteSettings` document in your Sanity dataset, so you do not have to copy the current text by hand into the admin panel.

## Run the app and Studio

From `client/` run:

```bash
npm run dev
```

Then open:

- Website: `http://localhost:3000`
- Sanity Studio: `http://localhost:3000/studio`

## Editing flow

1. Open `/studio`
2. Open `Website Content`
3. Edit the sections you want
4. Reorder or add entries inside `Page Sections`
5. Use `Flexible Section` when you need a completely new section
6. Set `Navigation Label` on a section if it should appear in the header automatically
7. Publish changes
8. Refresh the website if needed

## Notes

- If Sanity env vars are missing, the website falls back to the built-in content so local development does not break.
- The Studio route will show a setup message until the Sanity env vars are configured.
