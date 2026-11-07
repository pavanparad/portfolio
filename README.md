# MR. PAVAN CREATION — Creative Portfolio Website

> **Premium Personal Branding & Video Editing Portfolio for Pavan**  
> *Video Editor | Visual Storyteller | Content Creator*  
> *Crafting Stories. Creating Impact.*

---

## 🎨 Visual Design System & Behance Inspiration

This website is custom-engineered based on high-end editorial and motion graphics aesthetics:
- **Color Palette**:
  - Primary Background: `#F5F0FA`
  - Lavender Accent: `#DCCBFA`
  - Light Purple Tint: `#EAE0FF`
  - Deep Text: `#17151D`
  - Subtle Muted Text: `#77717F`
  - Accent Purple: `#A88BEA` / `#6C41CE`
- **Typography**:
  - Headings: `Space Grotesk` (Bold Editorial Sans)
  - Expressive Accents: `Playfair Display` (Elegant Italic Serif)
  - Body: `DM Sans` (Clean, Readable Sans)
  - Metadata & Specs: `JetBrains Mono` (Technical Precision)
- **Signature Interactive Elements**:
  - **Dashed Bounding Box with 8 Resize Handles** and dimensions badge (`W: 460PX • H: 600PX`) inspired by Figma/Photoshop/NLE edit viewfinders.
  - **Pixel Custom Cursor & Dashed Reticle** on desktop with magnetic hover expansion over buttons and interactive cards (auto-disabled on touch/mobile devices).
  - **Subtle Geometric Grid Overlay & Ambient Particles** drifting smoothly in the background.
  - **Interactive Project Modal** with YouTube embed & direct MP4 video playback support.
  - **Web Audio Sound Effects**: Subtle tactile feedback on interactions (toggleable via the audio button on the navigation bar).
  - **Celebration Confetti Burst** on copying email or submitting the project inquiry form.

---

## 🚀 Website Architecture

```
src/
├── components/
│   ├── Navbar.tsx             # Floating glassmorphism nav with active indicators & sound toggle
│   ├── Hero.tsx               # Asymmetric 2-column editorial hero with portrait & oversized typography
│   ├── Collaborations.tsx     # Editorial grid for PICT Addiction'26, PASC Pulzion'26, Veloxx, ShuttleClub
│   ├── Projects.tsx           # Category-filtered asymmetric project gallery (16:9 & 9:16 vertical reels)
│   ├── ProjectModal.tsx       # Video player modal (YouTube & MP4), specs, and project breakdowns
│   ├── About.tsx              # Behind the Frame story, secondary photography & numerical impact metrics
│   ├── Experience.tsx         # Modern editorial timeline with roles and verified deliverables
│   ├── Skills.tsx             # Tools of My Craft (CapCut, Premiere Pro, After Effects + 6 Creative disciplines)
│   ├── Contact.tsx            # Memorable inquiry section with 1-click email copy & pre-filled mailto form
│   ├── Footer.tsx             # Editorial footer with dynamic year, social links & back-to-top interaction
│   ├── CustomCursor.tsx       # Reticle cursor with pixel center and dashed follower
│   ├── DashedBoundingBox.tsx  # Reusable Photoshop/Figma-style bounding box component
│   └── BackgroundElements.tsx # Subtle grid, floating particles, and purple ambient gradient blooms
├── data/
│   ├── projects.ts            # Centralized project catalog (easy to add/edit/replace links)
│   ├── collaborations.ts      # Brands and verified collaborations data
│   ├── experience.ts          # Timeline and organizational roles
│   └── skills.ts              # Software proficiencies and creative capabilities
├── types/
│   └── index.ts               # Complete TypeScript interfaces
└── styles/
    └── index.css              # Custom Tailwind CSS utilities, glassmorphism & grain overlay
```

---

## 🛠️ How to Replace Placeholders with Real Assets

### 1. Replacing the Hero & About Portraits
- Place your transparent background cutout or portrait photo in `public/images/portrait.png`.
- The hero image will automatically prioritize `/images/portrait.png` and falls back gracefully to `/images/hero-portrait.svg`.
- For the About section secondary photo, replace `public/images/about-portrait.svg` or drop `about-portrait.png`.

### 2. Updating Projects and Videos
All projects are centralized in [`src/data/projects.ts`](file:///c:/Users/pavan/OneDrive/Desktop/PORTFOLIO/src/data/projects.ts):
```ts
{
  id: 'pict-addiction-aftermovie',
  title: 'PICT ADDICTION’26 — OFFICIAL FESTIVAL AFTERMOVIE',
  category: 'EVENT FILMS',
  categoryKey: 'event',
  aspectRatio: '16:9', // or '9:16' for vertical reels!
  thumbnailUrl: 'https://images.unsplash.com/...',
  videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID', // Or direct .mp4 URL
  description: '...',
  client: '...',
  highlights: [...]
}
```

### 3. Contact & Social Information
- **Email**: `mr.pavancreation@gmail.com`
- **Instagram**: `@mr.pavancreation` (`https://www.instagram.com/mr.pavancreation`)
- **LinkedIn**: Configurable in [`src/components/Contact.tsx`](file:///c:/Users/pavan/OneDrive/Desktop/PORTFOLIO/src/components/Contact.tsx)

---

## 💻 Development & Production

To run locally outside the sandbox:
```bash
# Start local development server on http://localhost:3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
