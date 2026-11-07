import { Project } from '../types';

export const CATEGORIES = [
  { key: 'all', label: '00 — ALL WORKS' },
  { key: 'event', label: '01 — EVENT FILMS' },
  { key: 'cinematic', label: '02 — CINEMATIC REELS' },
  { key: 'promo', label: '03 — PROMOTIONAL VIDEOS' },
  { key: 'social', label: '04 — SOCIAL MEDIA CONTENT' },
  { key: 'motion', label: '05 — MOTION GRAPHICS' },
] as const;

export const PROJECTS: Project[] = [
  {
    id: 'pict-addiction-aftermovie',
    number: '01',
    title: 'PICT ADDICTION’26 — OFFICIAL FESTIVAL AFTERMOVIE',
    category: 'EVENT FILMS',
    categoryKey: 'event',
    year: '2026',
    role: 'Lead Video Editor & Colorist',
    tools: ['Premiere Pro', 'After Effects', 'CapCut'],
    duration: '02:45',
    aspectRatio: '16:9',
    thumbnailUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Configurable YouTube or MP4 link
    description: 'A high-octane cinematic recap capturing the electric atmosphere, live performances, crowd euphoria, and campus spirit of PICT Addiction’26. Cut to dynamic rhythmic sync with bespoke sound design and film grain grading.',
    client: 'PICT Addiction’26 Festival Team',
    highlights: [
      'Multi-cam synchronization of 8+ stage & crowd angles',
      'Custom beat-matched speed ramps and glitch transitions',
      'Cinematic 2.39:1 widescreen framing with custom purple-tint LUT',
      'Over 25,000+ views across official college social handles'
    ],
    accentColor: '#A88BEA'
  },
  {
    id: 'pulzion-teaser-motion',
    number: '02',
    title: 'PASC PULZION’26 — FLAGSHIP TECH EVENT LAUNCH TEASER',
    category: 'PROMOTIONAL VIDEOS',
    categoryKey: 'promo',
    year: '2026',
    role: 'Video Editing & Social Media Lead',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop'],
    duration: '00:58',
    aspectRatio: '16:9',
    thumbnailUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4', // Configurable link
    description: 'An adrenaline-fueled promotional trailer introducing PICT ACM Student Chapter’s flagship annual symposium. Built with cyber-glitch typography, sleek 3D HUD motion elements, and bass-heavy pacing to ignite registrations.',
    client: 'PICT ACM Student Chapter (PASC)',
    highlights: [
      'Kinetic title animation and geometric UI overlays',
      'Heavy bass-drop pacing engineered for maximum engagement',
      'Custom sound FX: risers, braams, and digital glitch impacts',
      'Drove 40%+ spike in early-bird registrations upon release'
    ],
    accentColor: '#C4A7FF'
  },
  {
    id: 'veloxx-cinematic-reel',
    number: '03',
    title: 'VELOXX CLUB — HIGH ENERGY COMMUNITY REEL',
    category: 'CINEMATIC REELS',
    categoryKey: 'cinematic',
    year: '2025',
    role: 'Director of Editing & Creative Collaborator',
    tools: ['CapCut', 'Premiere Pro'],
    duration: '00:34',
    aspectRatio: '9:16',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skater-doing-tricks-in-a-skatepark-42232-large.mp4',
    description: 'Fast-paced vertical reel engineered specifically for Instagram Reels and TikTok algorithms. Seamless whip transitions, punchy typography pop-ups, and color-graded nighttime urban tones.',
    client: 'Veloxx Club',
    highlights: [
      'Vertical 9:16 mobile-first visual composition',
      'Micro-cut pacing under 0.4s per shot for relentless retention',
      'Trending audio sync with rhythmic flash transitions',
      'Surpassed 50,000+ organic reach within 48 hours'
    ],
    accentColor: '#8964DE'
  },
  {
    id: 'shuttleclub-sports-promo',
    number: '04',
    title: 'SHUTTLECLUB — ATHLETIC MOTION & TOURNAMENT SHOWCASE',
    category: 'EVENT FILMS',
    categoryKey: 'event',
    year: '2025',
    role: 'Creative Collaborator & Lead Editor',
    tools: ['Premiere Pro', 'After Effects'],
    duration: '01:20',
    aspectRatio: '16:9',
    thumbnailUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tennis-player-smashing-the-ball-in-a-court-41399-large.mp4',
    description: 'Dynamic sports cinematic highlighting the speed, agility, and competitive spirit of the ShuttleClub badminton championships. Combines 120fps slow-motion impact shots with sharp speed-ramp acceleration.',
    client: 'ShuttleClub',
    highlights: [
      'Frame-accurate slow-motion retiming at 120fps',
      'Custom athletic sound design: racket swishes, court squeaks, cheers',
      'Contrasty sports documentary grading with deep blacks and vibrant highlights'
    ],
    accentColor: '#DCCBFA'
  },
  {
    id: 'cyber-motion-typography',
    number: '05',
    title: 'EDITORIAL KINETIC TYPOGRAPHY & IDENTITY SHOWREEL',
    category: 'MOTION GRAPHICS',
    categoryKey: 'motion',
    year: '2026',
    role: 'Motion Designer',
    tools: ['After Effects', 'Illustrator'],
    duration: '00:45',
    aspectRatio: '16:9',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31911-large.mp4',
    description: 'Exploration of avant-garde editorial motion graphics, brutalist typography layouts, pixelated UI elements, and expressive text animation. Designed to push the boundary of branding in video.',
    client: 'Creative Lab Experiment',
    highlights: [
      'Variable font kinetic morphing and distortion effects',
      'Grid-locked isometric perspective animation',
      'Precision keyframing with expressive easing curves'
    ],
    accentColor: '#A88BEA'
  },
  {
    id: 'viral-creator-social-series',
    number: '06',
    title: 'RETENTION-FIRST SOCIAL MEDIA CONTENT SERIES',
    category: 'SOCIAL MEDIA CONTENT',
    categoryKey: 'social',
    year: '2025',
    role: 'Short-Form Video Specialist',
    tools: ['CapCut', 'Premiere Pro'],
    duration: '00:40',
    aspectRatio: '9:16',
    thumbnailUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-green-screen-42998-large.mp4',
    description: 'Hook-driven vertical video package crafted for maximum retention and watch-time. Features animated subtitles, dynamic B-roll cutaways, sound effects punctuation, and crisp visual hooks in the first 2 seconds.',
    client: 'Creator Collaboration Series',
    highlights: [
      '1.8s instant visual hook strategy to eliminate swipe-away',
      'Handcrafted word-by-word animated captions with emoji cues',
      'Seamless loop structure engineered for continuous replay'
    ],
    accentColor: '#6C41CE'
  }
];
