# To Be Seen — 2BD Studios

A faithful Next.js conversion of the supplied Figma/Vite prototype, retaining its painterly world, original copy, palette, and interactive nine-person gallery, with the supplied official hero artwork and transparent game/studio logos.

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

Static sections remain Server Components. Browser behavior is confined to navigation, gallery, story expansion, form preview, and animation helpers. Images use responsive `next/image` sizes; the hero is preloaded. The original font families are bundled from Fontsource packages and self-hosted with `next/font/local`; builds and visitors do not need Google Fonts access. Font licenses are included with those packages.

## Update content

- **Team:** Edit `data/team.ts`. The roster follows the supplied CSV order and contains the approved names, roles, LinkedIn links, and matching headshots in `public/images/team/`. `portfolio` is optional: Skylar’s CSV entry has none, so that button is hidden. Put replacement portraits in the same folder and update `photo`; use `photoPosition` to keep the face framed consistently in the featured card and thumbnails. Existing biography wording remains temporary, with names and neutral pronouns updated; replace it with approved bios and set `teamBiosAreDraft` to `false` when ready. The count and thumbnails follow the data automatically.
- **Game:** Edit `data/game.ts` for the four feature cards. Section-specific copy is in the matching file under `components/sections/`.
- **Studio links:** Edit `email`, `steam`, and `socials` in `data/site.ts`. The current approved destinations are the To Be Seen Steam page, 2BD Studios Instagram and LinkedIn, and `twobdstudios@gmail.com`. Discord and YouTube are omitted. `linksAreSamples` is `false`, so the old prototype contact notice is hidden.
- **Illustrations:** Replace images in `public/images/`, preserving filenames or updating imports. Keep meaningful alternative text for content images. Official transparent brand marks are in `public/logos/`.
- **Typography and icons:** Primary interface text uses the reduced readability scale: a minimum of 18px, a 21.6px base, and regular-weight labels/buttons. Secondary hero credits, biography notices, and footer copyright use a subdued 12px caption size. The navigation studio logo is 96px on desktop and 84px on mobile. `app/favicon.ico` includes 16–256px studio-logo sizes, and `app/icon.png` supplies a transparent 512px browser icon. Both are generated from the official studio logo.
- **Styling:** Shared colors and font variables are in the Tailwind `@theme` block in `app/globals.css`. Gallery styling is in `components/team/team-gallery.css`. Original visual rules were retained; obsolete prototype carousel rules were removed.

## Interactions and accessibility

The gallery supports thumbnails, wrapping previous/next arrows, left/right keys, Home/End keys, and horizontal touch swipes. It announces selection changes. The trailer frame displays “Coming Soon” without a play button. To add the official trailer later, pass `videoSrc` and optionally `poster` to `TrailerPreview`; it renders a native video player in the same frame. Animations and smooth scrolling respect reduced motion. A skip link and semantic section headings support keyboard and screen-reader navigation.

## Content still awaiting studio approval

The nine team names, roles, professional links, and headshots now come from the supplied team CSV and headshot folder. Biography paragraphs remain explicitly labeled draft copy at the owner’s request; they are not verified personal biographies. The studio email, Steam page, Instagram, and LinkedIn use the supplied official destinations. No real trailer video was supplied, so the existing trailer frame displays “Coming Soon.” The contact form validates input and demonstrates the original interaction, but it does not send or store messages; its status says so before and after submission. Connecting delivery requires an approved email destination and service, server-side validation, and abuse protection. Do not present the form as delivering mail until that integration exists.

The GIF supplied with the request is a visual reference of the site, not a background asset: using it as the hero would duplicate embedded UI and text. The site uses the supplied official `public/images/to-be-seen-hero.png` artwork with gentle parallax. A blue CSS tint overlay improves hero text contrast; the original image file remains unchanged. The official game and studio logos are copied unchanged into `public/logos/to-be-seen.png` and `public/logos/2bd-studios.png`; both retain their transparency.

## Visual review

Validation completed: production build and TypeScript passed; ESLint passed. Browser checks covered 1920×1080 and 1440×900 desktop layouts, 768×1024 tablet, and 390×844 phone widths, with no horizontal overflow. Confirmed gallery thumbnail selection, wrapping in both directions, arrow-key selection, active-section highlighting, mobile menu behavior, story expansion, the centered Coming Soon trailer placeholder, required-field validation, demo submission status, and navigation from a dedicated route to a homepage section. Reduced-motion handling is implemented in CSS and Motion; an OS-level reduced-motion setting and physical-device swipe gestures were not emulated during these checks.

Check at 1920×1080, 1440×900, tablet width, and a narrow phone width. Verify all section links, active navigation, the nine thumbnails, wrapping arrows, keyboard/swipe interactions, the non-interactive trailer placeholder, form validation, and reduced-motion behavior. All illustrations, team headshots, and fonts are served locally.
