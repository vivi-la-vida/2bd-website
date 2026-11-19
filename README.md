# 2BD Studios Website

## 1. Project name

**2BD Studios Website** is the official website for 2BD Studios, an independent game studio creating thoughtful, emotionally resonant games inspired by personal experience.

**Deployed website: [2bdstudios.com](https://2bdstudios.com)**

The studio began as a nine-person team in Duke University's Game Design, Development, and Innovation program. Its game, **To Be Seen**, is a cozy, narrative-driven puzzle adventure about family, memory, and reconnection.

## 2. Intended audience

- Players interested in cozy, story-driven puzzle games.
- People following the development of To Be Seen.
- Potential collaborators, industry contacts, and anyone interested in the studio and its team.

## 3. Problem or opportunity

Players need a clear place to discover the game, understand its story and mechanics, and connect with its creators. The website brings the trailer, game information, team profiles, Steam wishlist link, and contact options together in one place.

The goal is to turn initial curiosity into an ongoing connection with the studio. Painterly artwork, lavender colors, expressive headings, and playful stationery details introduce the personality of the game before visitors play it.

## 4. Description of the primary user flow

1. Arrive on the [homepage](https://2bdstudios.com) and discover the studio and To Be Seen.
2. Open the [game page](https://2bdstudios.com/game) to explore the premise, gameplay features, story, and trailer.
3. Follow the Steam link to [wishlist To Be Seen](https://store.steampowered.com/app/4883480/To_Be_Seen/).
4. Optionally visit [About](https://2bdstudios.com/about) to learn about the studio and browse the interactive team cards.
5. Follow the studio through its social links or use [Contact](https://2bdstudios.com/contact) to compose an email. The form opens a draft in the visitor's email app; the visitor reviews and sends it there.

## 5. Technical stack

| Technology | Role |
| --- | --- |
| Next.js 16 App Router | Routing, page metadata, rendering, and production builds |
| React 19 and TypeScript | Typed components and interactive UI |
| Tailwind CSS 4 and CSS | Styling, responsive layouts, and shared design tokens |
| Motion for React | Card shuffles and entrance animations |
| WebGL | Originkit Cloud Sky background rendering |
| Lucide React and custom SVGs | Interface icons, social illustrations, and stamp details |
| Fontsource and next/font/local | Locally bundled Mansalva headings and Fredoka body/UI text |
| ESLint | Code linting |

Shared typography, colors, spacing, and tactile button styles live in `app/design-system.css`. Pages live in `app/`, reusable components in `components/`, content data in `data/`, and images and logos in `public/`.

## 6. API used and how it contributes to the product

The site does not currently fetch data from a third-party REST or GraphQL API and has no custom backend API. Studio links, team profiles, and game features are stored locally in the repository.

Its integrations and browser APIs support the experience:

- **YouTube embed:** A privacy-enhanced iframe displays the game trailer. The site does not use the YouTube Data API or require a YouTube API key.
- **WebGL API:** Renders the cloud backgrounds that establish the site's atmosphere. Visibility tracking pauses rendering away from view to reduce unnecessary work.
- **FormData API and mailto links:** Read the contact fields and open a prefilled email draft addressed to `twobdstudios@gmail.com`. This uses the visitor's email app rather than an email-delivery API.
- **Steam and social links:** Take visitors to the game's wishlist page and studio channels. They are outbound links, not API integrations.

No API keys or environment variables are required for the current implementation.

## 7. Instructions for running the project locally

Install a Node.js version compatible with the installed Next.js release and npm. Read `AGENTS.md` and the bundled Next.js documentation before making framework changes.

From the project directory, install dependencies and start the development server:

```sh
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

Run the code checks:

```sh
npm run lint
npx tsc --noEmit
```

Build and serve the production version:

```sh
npm run build
npm start
```

## 8. Known Limitations

- The contact form opens an email draft; it does not send mail from the website or confirm delivery. Visitors need an email app or handler configured, and long drafts may exceed client-specific URL limits.
- Team biographies are still marked as draft copy in `data/team.ts`.
- Content updates require repository changes; there is no content management system.
- Trailer playback depends on YouTube availability and the visitor's network or browser restrictions.
- Cloud effects depend on WebGL support and device performance. Motion preferences are respected, but rendering capabilities vary by browser and hardware.
- Responsive layout checks do not replace a complete accessibility audit. Screen-reader behavior, 200% text enlargement, and broader device coverage still need dedicated verification.

## 9. Next Improvements

1. Add server-side email delivery with validation, abuse protection, and clear delivery feedback so contacting the studio does not depend on an installed email app.
2. Replace draft team biographies with approved copy and review all public-facing content with the studio.
3. Create a development log page for documenting process throughout developing the game.
4. Complete keyboard, screen-reader, text-resize, reduced-motion, and cross-device accessibility testing.
5. Profile image loading and cloud rendering on lower-powered phones, then improve performance where measurements identify bottlenecks.
6. Add automated checks for navigation, team selection, contact validation, and key responsive layouts.
