# CV-Web Portfolio

Single-page portfolio built with SvelteKit 2, Svelte 5, and a static adapter. The codebase is intentionally small: one route, data-driven content, lightweight canvas background motion, and no unused section scaffolding.

## Stack

- SvelteKit 2 with Svelte 5
- TypeScript
- Vite 7
- Static generation via `@sveltejs/adapter-static`
- Local fonts via `@fontsource`

## Scripts

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Project Structure

```text
src/
  app.css                      Global design tokens and shared layout styles
  routes/
    +layout.svelte             Root layout, analytics, and critical resets
    +page.svelte               Page composition and SEO metadata
  lib/
    data/
      site.ts                  Typed site content and section data
    components/
      CapabilityGrid.svelte    Capability cards
      FeaturedWorkSection.svelte
      HeroSection.svelte       Hero copy, portrait, metrics, and social actions
      InteractiveBackdrop.svelte
      Reveal.svelte            Reusable reveal wrapper
```

## Editing Content

Most content lives in [src/lib/data/site.ts](src/lib/data/site.ts).

- `site.titleRole` is used for the document title and plain metadata.
- `site.heroRoleHtml` and `site.heroHeadlineHtml` support deliberate inline HTML such as `<br>` or styled spans for the hero only.
- `metrics`, `capabilities`, and `projects` drive the rest of the page.

## Performance Notes

- Static prerendered output
- Local font loading
- Sized images to reduce layout shift
- Reduced-motion fallback for animation
- Minimal component tree and no client-side routing complexity

## Deployment

`npm run build` writes the static site to `build/`.

Deploy the contents of `build/` to any static host.
