# To Be Seen — 2BD Studios

A faithful Next.js conversion of the supplied Figma/Vite prototype, retaining its seven painterly illustrations, original copy, palette, fonts, and interactive nine-person gallery.

## Run locally

Requires Node.js 20.9 or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` followed by `npm start`. `npx tsc --noEmit` checks types; `npm run lint` runs ESLint.

The app uses the installed Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Motion for React, Lucide React, and `next/image`. Read the bundled `node_modules/next/dist/docs/` before making framework changes. Keep the repository's Tailwind Turbopack configuration in `next.config.ts`.

This Windows environment required the documented `experimental.turbopackPluginRuntimeStrategy: "workerThreads"` setting: the default CSS-loader child process exited before its socket connection, while worker threads compiled successfully. Keep this setting on Node.js 22.18.0; consult the bundled guide's compatibility notes before changing Node versions.

## Organization

```text
app/                   Root layout, homepage, shared styles
  about/page.tsx       Dedicated story view
  game/page.tsx        Dedicated game view
  team/page.tsx        Dedicated team view
  contact/page.tsx     Dedicated contact view
components/
  layout/              Shared fixed navigation and footer
  sections/            Five reusable sections and their interactive controls
  team/                Gallery, profile card, thumbnail, gallery styles
  ui/                  Buttons, headings, brand marks, reveal/motion helpers
data/                  Team roster, game features, studio links
types/                 TeamMember interface
public/images/         Original prototype illustrations
```

The homepage composes all five sections into one continuous scroll. Dedicated routes reuse the same section components. Every navigation link returns to its homepage section, including from dedicated routes. Current-section highlighting follows scrolling, and mobile navigation supports Escape.

Static sections remain Server Components. Browser behavior is confined to navigation, gallery, artwork preview, story expansion, form preview, and animation helpers. Images use responsive `next/image` sizes; the hero is preloaded. The original font families are bundled from Fontsource packages and self-hosted with `next/font/local`; builds and visitors do not need Google Fonts access. Font licenses are included with those packages.

## Update content

- **Team:** Edit `data/team.ts`. Each typed profile has an ID, name, role, biography, portrait, LinkedIn URL, and portfolio URL. Preserve nine members for the intended layout. For approved local portraits, put files in `public/images/team/` and set `photo` to a root-relative path such as `/images/team/alex.jpg`. The original Unsplash sample portraits are cached in `public/images/team-samples/`; their source IDs are retained in the data. Set `teamIsSample` to `false` only after all profiles and links are approved. The count and thumbnails follow the data automatically.
- **Game:** Edit `data/game.ts` for the four feature cards. Section-specific copy is in the matching file under `components/sections/`.
- **Studio links:** Replace `email`, `steam`, and `socials` in `data/site.ts`. Set `linksAreSamples` to `false` after approval. The Steam link currently opens the prototype's search destination, not an official game store page.
- **Illustrations:** Replace images in `public/images/`, preserving filenames or updating imports. Keep meaningful alternative text for content images. Original brand marks are the prototype's inline SVG/CSS, not newly invented assets.
- **Styling:** Shared colors and font variables are in the Tailwind `@theme` block in `app/globals.css`. Gallery styling is in `components/team/team-gallery.css`. Original visual rules were retained; obsolete prototype carousel rules were removed.

## Interactions and accessibility

The gallery supports thumbnails, wrapping previous/next arrows, left/right keys, Home/End keys, and horizontal touch swipes. It announces selection changes. The artwork preview uses a native modal dialog with focus containment, Escape, backdrop dismissal, and focus restoration. Animations and smooth scrolling respect reduced motion. A skip link and semantic section headings support keyboard and screen-reader navigation.

## Content still awaiting studio approval

The supplied prototype explicitly labels all nine profiles, sample portraits, professional links, and social destinations as illustrative. These are preserved and visibly labeled while approved content is pending. No real trailer video was supplied, so the preview displays the original concept artwork and explains that the trailer is forthcoming. The contact form validates input and demonstrates the original interaction, but it does not send or store messages; its status says so before and after submission. Connecting delivery requires an approved email destination and service, server-side validation, and abuse protection. Do not present the form as delivering mail until that integration exists.

The GIF supplied with the request is a visual reference of the site, not a background asset: using it as the hero would duplicate embedded UI and text. The site instead uses the original `lake.png` illustration with gentle parallax and jellyfish motion.

## Visual review

Validation completed: production build and TypeScript passed; ESLint passed. Browser checks covered 1920×1080 and 1440×900 desktop layouts, 768×1024 tablet, and 390×844 phone widths, with no horizontal overflow. Confirmed gallery thumbnail selection, wrapping in both directions, arrow-key selection, active-section highlighting, mobile menu behavior, story expansion, artwork dialog opening/Escape dismissal, required-field validation, demo submission status, and navigation from a dedicated route to a homepage section. Reduced-motion handling is implemented in CSS and Motion; an OS-level reduced-motion setting and physical-device swipe gestures were not emulated during these checks.

Check at 1920×1080, 1440×900, tablet width, and a narrow phone width. Verify all section links, active navigation, the nine thumbnails, wrapping arrows, keyboard/swipe interactions, dialog dismissal, form validation, and reduced-motion behavior. All illustrations, sample portraits, and fonts are served locally.
