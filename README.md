# salivon.net

The site of Arturas Salivonas (Salivon Ltd): technical SEO, business automation, internal
tools and dashboards.

One page, prerendered to static files. No server, no database, no runtime dependencies.

## Stack

| What       | Version                                       |
| ---------- | --------------------------------------------- |
| SvelteKit  | 3 (Svelte 5, runes mode)                      |
| Build      | Vite 8                                        |
| Language   | TypeScript 6, strict                          |
| Output     | `@sveltejs/adapter-static`                    |
| Fonts      | Red Hat Display and Red Hat Text, self-hosted |
| Code style | ESLint 10 and Prettier 3                      |

Node 22.17 or newer.

## Commands

```bash
npm install        # once
npm run dev        # local site with hot reload
npm run verify     # lint, type-check and build: run this before every deploy
npm run format     # let Prettier fix formatting
npm run preview    # serve the production build locally
```

## Deploying

The site is plain files, uploaded by hand.

1. `npm run verify`
2. Upload the **contents** of `build/` to the web root (not the folder itself).

`static/.htaccess` travels with the build. It sets caching and security headers, and shows
`404.html` for any address that does not exist.

## How it is organised

```text
src/
  app.html                 Document shell and the analytics tag
  hooks.client.ts          Holds the app back until the first paint
  hooks.server.ts          Marks the scripts as low priority, at build time
  routes/
    +layout.svelte         Fonts, global styles, header and footer
    +page.svelte           The page: one line per section
    +error.svelte          The 404 page
  lib/
    content/               Every word and number on the site, as typed data
    components/            One component per section, plus Button, Icon and Logo
      sketches/            The animated mini wireframes
    attachments/           Reusable element behaviour (in-view detection)
    styles/                Global CSS: tokens, base, the cut-corner shape, the sketch kit
static/                    Files served as they are: images, icons, robots, sitemap
```

Component styles live inside their components. Only the four files in `lib/styles/` are
global.

## Changing things

**Words, tools, sites.** Edit the files in `src/lib/content/`. Nothing else needs to change:
the filter counts, the structured data and the page all read from there.

**Adding a tool.** Add an entry to `tools` in `content/tools.ts` and give it a sketch. A
sketch is a small component in `components/sketches/` built from the shapes in
`styles/sketch.css`. Copy the closest existing one and adjust it.

**Colours and type.** Everything comes from the custom properties in `styles/tokens.css`.

## Three ideas worth knowing

**The cut corner.** Every box has its bottom-right corner cut off, with the missing piece
floating beside it. Point at the box and the piece clicks into place. It is two classes,
`cut` and `cut-piece`, documented in `styles/shape.css`.

**Sketches.** Each tool is shown as a tiny wireframe that plays in a loop while you hover
it (or while it is on screen, on a phone). A sketch at rest already shows the finished
picture, so nothing looks broken when motion is off, and the loop only animates `transform`
and `opacity`. The rules are at the top of `styles/sketch.css`.

Animations respect `prefers-reduced-motion`.

**Paint first.** The page is complete as HTML, so nothing is allowed to stand between the
visitor and the first paint:

- The CSS is inlined into the HTML (`inlineStyleThreshold` in `vite.config.ts`), so the page
  needs one request to render, not four.
- The scripts are fetched at low priority (`hooks.server.ts`) and the app only starts once
  the first frame is on screen (`hooks.client.ts`).
- Google Analytics, over half the weight of the page, loads on the first sign of a visitor
  or five seconds after the page has loaded (`app.html`).

To measure a change, run `npm run build` and test the `build/` folder with Lighthouse on its
mobile setting.
