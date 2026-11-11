import { ClientProjectItem } from '../types';
import { OFFICIAL_LOGOS } from './logos';

export const CLIENT_PROJECTS: ClientProjectItem[] = [
  {
    id: 'veloxx-club',
    number: '01',
    title: 'VELOXX CLUB',
    tagline: 'LIFESTYLE & CREATIVE COMMUNITY BRANDING',
    category: 'CLIENT COLLABORATION / BRAND REELS',
    logoUrl: OFFICIAL_LOGOS.veloxxclub.src,
    logoAlt: OFFICIAL_LOGOS.veloxxclub.alt,
    accentColor: '#C9A45C',
    myContribution: {
      role: 'Creative Video Editor & Motion Designer',
      responsibilities: [
        'Crafted dynamic vertical reels tailored for high social media engagement',
        'Built rhythm-matched editing sequences synced precisely with contemporary audio tracks',
        'Implemented custom color grades to establish a high-contrast cinematic mood',
        'Designed motion graphics, text treatments, and subtle graphic overlays',
      ],
      description: 'Collaborated with VELOXX CLUB to develop an electrifying visual tone across their short-form video releases, establishing visual consistency that resonates with their target audience.',
    },
    projectHighlights: [
      'Multi-angle footage assembly with high-tempo kinetic cuts',
      'Atmospheric color grading balancing golden hour accents with deep shadow tones',
      'Dynamic speed ramps and transition design matching beat drops',
      'Optimized 9:16 vertical storytelling for Instagram Reels & TikTok algorithms',
    ],
    performance: {
      verifiedViews: '[VERIFIED VIEWS PENDING]',
      reachStatus: '[METRICS PENDING CREATOR SYNC]',
      notice: 'Performance data will reflect verified client platform analytics upon release.',
    },
    socialLinks: {
      instagramPage: {
        handle: '@veloxxclub',
        url: 'https://instagram.com/veloxxclub',
      },
      reels: [
        {
          title: 'Reel 01: Community Launch Film',
          url: '[INSTAGRAM REEL LINK PENDING]',
        },
        {
          title: 'Reel 02: Drop Teaser & Highlights',
          url: '[INSTAGRAM REEL LINK PENDING]',
        },
        {
          title: 'Reel 03: Event Recap Edit',
          url: '[INSTAGRAM REEL LINK PENDING]',
        },
      ],
    },
    reels: [
      {
        id: 'veloxx-reel-1',
        title: 'Community Launch & Lifestyle Teaser',
        label: 'CONCEPT LAUNCH',
        duration: '00:30',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/veloxx-reel-1.svg',
        videoUrl: '', // Ready for direct MP4 upload
        socialUrl: '',
        viewsPlaceholder: '[PENDING VERIFICATION]',
      },
      {
        id: 'veloxx-reel-2',
        title: 'Drop Teaser: Streetwear & Energy',
        label: 'PRODUCT DROP',
        duration: '00:26',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/veloxx-reel-2.svg',
        videoUrl: '',
        socialUrl: '',
        viewsPlaceholder: '[PENDING VERIFICATION]',
      },
      {
        id: 'veloxx-reel-3',
        title: 'Weekend Meet Recap & Atmosphere',
        label: 'AFTERMOVIE',
        duration: '00:45',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/veloxx-reel-3.svg',
        videoUrl: '',
        socialUrl: '',
        viewsPlaceholder: '[PENDING VERIFICATION]',
      },
    ],
  },
  {
    id: 'shuttleclub',
    number: '02',
    title: 'SHUTTLECLUB',
    tagline: 'HIGH-VELOCITY SPORTS CINEMATICS',
    category: 'CLIENT COLLABORATION / SPORTS MEDIA',
    logoUrl: OFFICIAL_LOGOS.shuttleclub.src,
    logoAlt: OFFICIAL_LOGOS.shuttleclub.alt,
    accentColor: '#8964DE',
    myContribution: {
      role: 'Lead Sports Video Editor & Social Specialist',
      responsibilities: [
        'Curated fast-paced court-side coverage capturing raw athletic intensity',
        'Implemented punchy SFX sound design for racquet smashes and court footwork',
        'Engineered dynamic motion graphics tracking scores, rally counters, and player tags',
        'Delivered quick-turnaround tournament recap reels for social media channels',
      ],
      description: 'Produced compelling promotional and highlight reels for SHUTTLECLUB, highlighting the agility, speed, and competitive spirit of modern badminton with cinematic precision.',
    },
    projectHighlights: [
      'Synchronized micro-sound design enhancing every high-velocity shuttle impact',
      'Ultra-smooth slow-motion speed ramping at peak smash heights',
      'Clean typography and dynamic scoreboard motion overlays',
      'High-impact vertical storytelling tailored for athlete communities',
    ],
    performance: {
      verifiedViews: '[VERIFIED VIEWS PENDING]',
      reachStatus: '[METRICS PENDING CREATOR SYNC]',
      notice: 'Official tournament metrics and engagement data to be synchronized.',
    },
    socialLinks: {
      instagramPage: {
        handle: '@shuttleclub',
        url: 'https://instagram.com/shuttleclub',
      },
      reels: [
        {
          title: 'Reel 01: Fast-Break Tournament Teaser',
          url: '[INSTAGRAM REEL LINK PENDING]',
        },
        {
          title: 'Reel 02: Matchpoint Smash Slow-Mo',
          url: '[INSTAGRAM REEL LINK PENDING]',
        },
        {
          title: 'Reel 03: League Championship Recap',
          url: '[INSTAGRAM REEL LINK PENDING]',
        },
      ],
    },
    reels: [
      {
        id: 'shuttle-reel-1',
        title: 'Matchpoint Energy & Speed Cuts',
        label: 'HIGH VOLTAGE',
        duration: '00:28',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/shuttle-reel-1.svg',
        videoUrl: '',
        socialUrl: '',
        viewsPlaceholder: '[PENDING VERIFICATION]',
      },
      {
        id: 'shuttle-reel-2',
        title: 'Athlete Precision & Smash Highlights',
        label: 'PLAYER SPOTLIGHT',
        duration: '00:35',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/shuttle-reel-2.svg',
        videoUrl: '',
        socialUrl: '',
        viewsPlaceholder: '[PENDING VERIFICATION]',
      },
      {
        id: 'shuttle-reel-3',
        title: 'Tournament Grand Championship Recap',
        label: 'FINAL RECAP',
        duration: '00:52',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/shuttle-reel-3.svg',
        videoUrl: '',
        socialUrl: '',
        viewsPlaceholder: '[PENDING VERIFICATION]',
      },
    ],
  },
];
