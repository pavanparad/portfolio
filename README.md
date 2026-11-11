# MR. PAVAN CREATION — Creative Portfolio

Personal creative portfolio website for **Pavan Parad** (`@mr.pavan_creation`), maintained under [`pavanparad`](https://github.com/pavanparad) — showcasing video editing, cinematic storytelling, creative direction, motion graphics, and visual projects.

---

## Project Overview

**MR. PAVAN CREATION** is a responsive React + TypeScript portfolio web application designed to present video editing work, event coverage, brand and club campaigns, personal creator reels, institutional film work, and dedicated About and Contact pages.

---

## Key Features

- **Personal Portfolio & Introduction**: Custom logo intro sequence (`LoadingIntro`), editorial Hero showcase (`Hero`), and homepage overview (`About`).
- **Client & Organization Showcases**: Dedicated showcases for `VELOXX CLUB` and `SHUTTLECLUB` (`Collaborations`, `ClientProjects`, `VeloxxShowcase`, `ShuttleclubShowcase`).
- **Experience & Leadership Showcases**: Event campaign galleries for PICT ACM Student Chapter (`PULZION'26`, `STRIVER: Code to Career`) and `PICT ADDICTION'26`.
- **Personal Creator & Institutional Galleries**: `PAVAN ARTS` (`PersonalCreatorWork`), PICT official promotional film (`InstitutionalProject`), and `CONTENT THAT CONNECTS.` (`SocialMediaContent`) with creator video reels.
- **Video Portfolio Galleries**: Native HTML5 `<video>` playback supporting `16:9` horizontal and `9:16` vertical formats (`VeloxxVideoPlayer`, `ReelCard`, `ProjectModal`, Instagram reel fallback/embed support).
- **Dedicated About & Contact Pages**: Client-side routed `/about` (`AboutPage`) and `/contact` (`ContactPage`) alongside the homepage, with validated project inquiry drafting and direct contact links.
- **Responsive Design & Motion**: Tailored layouts across desktop, tablet, and mobile viewports with Framer Motion transitions respecting `prefers-reduced-motion` accessibility preferences.

---

## Tech Stack

- **UI Framework**: React `18.3.1` & React DOM `18.3.1`
- **Language**: TypeScript `5.6.3`
- **Build Tool**: Vite `5.4.10` (`@vitejs/plugin-react` `4.3.3`)
- **Styling**: Tailwind CSS `3.4.14`, PostCSS `10.4.20`, Autoprefixer `10.4.20`
- **Animations & UI**: Framer Motion `11.11.17`, Lucide React `0.454.0`, Canvas Confetti `1.9.4`
- **Class Utilities**: `clsx` `2.1.1`, `tailwind-merge` `2.5.4`

---

## Project Structure

```text
├── public/
│   ├── images/              # Portraits, logos, brand assets, and SVG thumbnails
│   ├── logos/               # Organization and brand logos
│   ├── videos/              # Portfolio showcase MP4 videos
│   ├── _redirects           # SPA route fallback for static hosts
│   └── favicon.svg
├── src/
│   ├── components/          # Homepage sections, shared nav/footer, and video players
│   ├── data/                # Structured project, skill, logo, and showcase metadata
│   ├── pages/               # Dedicated AboutPage (/about) and ContactPage (/contact)
│   ├── styles/              # Tailwind CSS entry and custom utility styles
│   ├── types/               # TypeScript interfaces
│   ├── App.tsx              # Route handling and main application layout
│   └── main.tsx             # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json              # Vercel SPA routing rewrites
└── vite.config.ts
```

---

## Installation & Local Development

Requires Node.js and npm.

```bash
# Install dependencies
npm install

# Start the local development server (http://localhost:3000)
npm run dev
```

---

## Production Build & Deployment

```bash
# Type-check with TypeScript and generate production bundle in dist/
npm run build

# Preview the production bundle locally
npm run preview
```

SPA fallback routing for `/about` and `/contact` is configured via `vercel.json` (Vercel) and `public/_redirects` (Netlify / Cloudflare Pages).

---

## Contact

- **Instagram**: [`@mr.pavan_creation`](https://www.instagram.com/mr.pavan_creation/)
- **Email**: [mr.pavancreation@gmail.com](mailto:mr.pavancreation@gmail.com)
- **LinkedIn**: [`linkedin.com/in/pavanparad`](https://www.linkedin.com/in/pavanparad)
