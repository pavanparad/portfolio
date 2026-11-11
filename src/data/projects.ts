import { ProjectShowcaseItem, Project } from '../types';

export const PROJECT_SHOWCASES: ProjectShowcaseItem[] = [
  {
    id: 'pulzion-26-pasc',
    number: '01',
    title: 'PULZION’26 — PASC',
    client: 'PICT ACM Student Chapter (PASC)',
    category: 'FLAGSHIP TECH SYMPOSIUM & SOCIAL CAMPAIGN',
    year: '2026',
    role: 'Video Editing & Social Media Lead',
    responsibilities: [
      'Led the core video editing pipeline and motion design direction',
      'Orchestrated multi-platform promotional reel release calendar',
      'Designed kinetic title cards, HUD graphics, and cybernetic audio sync',
      'Created multi-format adaptations for 16:9 widescreen & 9:16 vertical stories'
    ],
    introduction: 'The annual flagship technical symposium of the PICT ACM Student Chapter (PASC). Built around the celestial theme "Beyond Earth", this campaign transformed technical event announcements into high-velocity cinematic experiences engineered to command attention across campus and student social networks.',
    logoUrl: './images/projects/pulzion-logo.svg',
    accentColor: '#C9A45C',
    reels: [
      {
        id: 'pulzion-reel-1',
        title: 'Theme Reveal: Beyond Earth',
        label: 'CONCEPT LAUNCH',
        duration: '00:32',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/pulzion-reel-1.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      },
      {
        id: 'pulzion-reel-2',
        title: 'Flagship Teaser & Speaker Announcement',
        label: 'EVENT TEASER',
        duration: '00:48',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/pulzion-reel-2.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      },
      {
        id: 'pulzion-reel-3',
        title: 'Symposium Recap & Grand Aftermovie',
        label: 'OFFICIAL RECAP',
        duration: '01:05',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/pulzion-reel-3.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      }
    ],
    highlightsSection: {
      theme: 'Beyond Earth',
      eventCount: 12,
      description: 'Pulzion’26 is PICT ACM Student Chapter’s flagship technical symposium. Centered around the "Beyond Earth" futuristic theme, PASC hosted 12 diverse technical and non-technical competitive events spanning algorithmic coding, UI/UX design, robotics, web development, and competitive quizzing.',
      keyMoments: [
        'Curated thematic "Beyond Earth" futuristic title sequences and sound design',
        'Coordinated coverage across all 12 events hosted simultaneously by PASC',
        'Engineered rapid-turnaround daily teasers to drive registration momentum',
        'Delivered high-octane 60 FPS vertical cuts tuned for algorithm retention'
      ]
    },
    performance: {
      totalViewsPlaceholder: '[METRICS PENDING VERIFICATION]',
      reachPlaceholder: '[REACH STATS PENDING VERIFIED DATA]',
      engagementPlaceholder: '[ENGAGEMENT METRIC TO BE ADDED]',
      metricsNotice: 'Official analytics will be displayed once verified creator data is linked.'
    },
    socialLinks: {
      instagramPage: {
        handle: '@pasc_pict',
        urlPlaceholder: '[INSTAGRAM PAGE URL TO BE ADDED]'
      },
      reels: [
        {
          title: 'Reel 01: Theme Reveal',
          urlPlaceholder: '[INSTAGRAM REEL 1 URL TO BE ADDED]'
        },
        {
          title: 'Reel 02: Flagship Teaser',
          urlPlaceholder: '[INSTAGRAM REEL 2 URL TO BE ADDED]'
        },
        {
          title: 'Reel 03: Event Aftermovie',
          urlPlaceholder: '[INSTAGRAM REEL 3 URL TO BE ADDED]'
        }
      ]
    },
    tools: ['Premiere Pro', 'After Effects', 'Photoshop']
  },
  {
    id: 'addiction-26-pict',
    number: '02',
    title: 'ADDICTION’26 — PICT',
    client: 'PICT Annual Cultural Festival',
    category: 'COLLEGIATE CULTURAL FESTIVAL & CONCERT COVERAGE',
    year: '2026',
    role: 'Content Lead',
    responsibilities: [
      'Directed video coverage team across concert nights and campus stages',
      'Orchestrated multi-camera concert synchronization and beat-matched cuts',
      'Custom color grading tailored to dynamic stage lighting and crowd euphoria',
      'Published same-night recap packages for continuous viral engagement'
    ],
    introduction: 'The crown jewel of PICT’s student calendar, Addiction’26 brings together thousands of students for electrifying musical nights, celebrity artist concerts, and competitive performing arts. Every edit captures raw human emotion, collective adrenaline, and unforgettable stage energy.',
    logoUrl: './images/logos/ADDICTION logo .png',
    accentColor: '#8964DE',
    reels: [
      {
        id: 'addiction-reel-1',
        title: 'Festival Launch & Campus Anthem',
        label: 'LAUNCH TEASER',
        duration: '00:35',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/addiction-reel-1.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      },
      {
        id: 'addiction-reel-2',
        title: 'Concert Euphoria & Stage Beams',
        label: 'CONCERT HIGHLIGHT',
        duration: '00:52',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/addiction-reel-2.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      },
      {
        id: 'addiction-reel-3',
        title: 'Cultural Dance & Crowd Euphoria',
        label: 'STAGE BATTLE',
        duration: '00:44',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/addiction-reel-3.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      }
    ],
    highlightsSection: {
      description: 'PICT Addiction is one of Pune’s premier collegiate cultural celebrations. Featuring star nights, inter-college choreography battles, battle of the bands, and theatrical performances, the festival demands relentless, high-energy storytelling.',
      keyMoments: [
        'Multi-cam synchronization of live concerts and 8+ stage angles',
        'Color grading preserving rich neon stage tones and deep nighttime blacks',
        'Fast turnaround reel production keeping students hyped throughout the fest',
        'Seamless audio crossfades blending crowd noise with musical drops'
      ]
    },
    performance: {
      totalViewsPlaceholder: '[METRICS PENDING VERIFICATION]',
      reachPlaceholder: '[REACH STATS PENDING VERIFIED DATA]',
      engagementPlaceholder: '[ENGAGEMENT METRIC TO BE ADDED]',
      metricsNotice: 'Official analytics will be displayed once verified creator data is linked.'
    },
    socialLinks: {
      instagramPage: {
        handle: '@pict_addiction',
        urlPlaceholder: '[INSTAGRAM PAGE URL TO BE ADDED]'
      },
      reels: [
        {
          title: 'Reel 01: Launch Teaser',
          urlPlaceholder: '[INSTAGRAM REEL 1 URL TO BE ADDED]'
        },
        {
          title: 'Reel 02: Concert Euphoria',
          urlPlaceholder: '[INSTAGRAM REEL 2 URL TO BE ADDED]'
        },
        {
          title: 'Reel 03: Cultural Battle',
          urlPlaceholder: '[INSTAGRAM REEL 3 URL TO BE ADDED]'
        }
      ]
    },
    tools: ['Premiere Pro', 'After Effects', 'CapCut']
  },
  {
    id: 'veloxx-club',
    number: '03',
    title: 'VELOXX CLUB',
    client: 'Veloxx Club',
    category: 'SPORTS & CREATIVE YOUTH COMMUNITY',
    year: '2025–2026',
    role: 'Creative Collaboration',
    responsibilities: [
      'Collaborated on visual aesthetic, moodboards, and camera framing',
      'Crafted custom non-linear speed ramp profiles for athletic movements',
      'Optimized vertical 9:16 compositions for rapid swipe retention',
      'Developed bespoke impact sound design and kinetic title treatments'
    ],
    introduction: 'A high-energy creative collaboration celebrating urban lifestyle, community movement, and youth athletic expression. Tailored from the ground up for mobile vertical feeds with aggressive speed ramps, micro-beat cuts, and contrasty color grades.',
    logoUrl: './images/logos/veloxx-logo.svg',
    accentColor: '#C9A45C',
    reels: [
      {
        id: 'veloxx-reel-1',
        title: 'Speed Ramp & Motion Profile',
        label: 'KINETIC PROFILE',
        duration: '00:28',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/veloxx-reel-1.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      },
      {
        id: 'veloxx-reel-2',
        title: 'Community Meet & Urban Lifestyle',
        label: 'COMMUNITY REEL',
        duration: '00:34',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/veloxx-reel-2.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      },
      {
        id: 'veloxx-reel-3',
        title: 'Athletic Pace & Dynamic Micro-Cuts',
        label: 'DYNAMIC SHOWCASE',
        duration: '00:30',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/veloxx-reel-3.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      }
    ],
    highlightsSection: {
      description: 'Veloxx Club brings together creators, athletes, and youth pioneers. The project emphasizes raw kinetic momentum, urban textures, and modern rhythm-driven editing.',
      keyMoments: [
        'Non-linear speed ramping (100% → 400% acceleration → 40% slow-mo impact)',
        'Frame-accurate beat matching ensuring visual sync with trending tracks',
        'Contrasty modern color grading emphasizing urban tones and highlights',
        'Mobile-first retention strategy keeping view drop-off under 15%'
      ]
    },
    performance: {
      totalViewsPlaceholder: '[METRICS PENDING VERIFICATION]',
      reachPlaceholder: '[REACH STATS PENDING VERIFIED DATA]',
      engagementPlaceholder: '[ENGAGEMENT METRIC TO BE ADDED]',
      metricsNotice: 'Official analytics will be displayed once verified creator data is linked.'
    },
    socialLinks: {
      instagramPage: {
        handle: '@veloxxclub',
        urlPlaceholder: '[INSTAGRAM PAGE URL TO BE ADDED]'
      },
      reels: [
        {
          title: 'Reel 01: Speed Ramp Showcase',
          urlPlaceholder: '[INSTAGRAM REEL 1 URL TO BE ADDED]'
        },
        {
          title: 'Reel 02: Community Meet',
          urlPlaceholder: '[INSTAGRAM REEL 2 URL TO BE ADDED]'
        },
        {
          title: 'Reel 03: Athletic Cut',
          urlPlaceholder: '[INSTAGRAM REEL 3 URL TO BE ADDED]'
        }
      ]
    },
    tools: ['Premiere Pro', 'CapCut']
  },
  {
    id: 'shuttleclub',
    number: '04',
    title: 'SHUTTLECLUB',
    client: 'ShuttleClub',
    category: 'SPORTS & TOURNAMENT SHOWCASE',
    year: '2025–2026',
    role: 'Creative Collaboration',
    responsibilities: [
      'Executed dynamic sports cinematography editing and slow-motion retiming',
      'Engineered frame-accurate audio foley: racket swishes, court squeaks, smashes',
      'Color graded high-contrast athletic documentary visuals',
      'Structured tournament recaps to celebrate champion rallies and athletic skill'
    ],
    introduction: 'A cinematic sports showcase highlighting the agility, speed, and fierce intensity of competitive badminton. Cut to rhythm with 120 FPS high-frame-rate retiming and impactful sound design that puts the viewer directly on the court.',
    logoUrl: './images/logos/shuttleclub-logo.svg',
    accentColor: '#6C41CE',
    reels: [
      {
        id: 'shuttle-reel-1',
        title: 'Championship Point: 120 FPS Slow-Mo',
        label: 'ATHLETIC IMPACT',
        duration: '00:38',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/shuttle-reel-1.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      },
      {
        id: 'shuttle-reel-2',
        title: 'Rally Intensity & Court Movement',
        label: 'MATCH RALLY',
        duration: '00:45',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/shuttle-reel-2.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      },
      {
        id: 'shuttle-reel-3',
        title: 'Tournament Aftermovie & Athlete Spotlight',
        label: 'CHAMPIONS RECAP',
        duration: '01:10',
        aspectRatio: '9:16',
        thumbnailUrl: './images/projects/reels/shuttle-reel-3.svg',
        videoUrl: '', // Ready for local MP4 or video file
        socialUrl: '', // Ready for Instagram reel URL
        viewsPlaceholder: '[VERIFIED VIEWS PENDING]'
      }
    ],
    highlightsSection: {
      description: 'ShuttleClub celebrates the fast-paced competitive badminton circuit. The video package covers critical tournament matches, athlete concentration, and lightning-fast rallies.',
      keyMoments: [
        'Frame-accurate 120 FPS slow-motion retiming on decisive smash points',
        'Custom audio design magnifying racket impacts, sneaker skids, and applause',
        'Deep sports contrast grading with vivid greens and crisp white shuttlecock highlights',
        'Emotional arc tracking tournament tension through to final trophy lift'
      ]
    },
    performance: {
      totalViewsPlaceholder: '[METRICS PENDING VERIFICATION]',
      reachPlaceholder: '[REACH STATS PENDING VERIFIED DATA]',
      engagementPlaceholder: '[ENGAGEMENT METRIC TO BE ADDED]',
      metricsNotice: 'Official analytics will be displayed once verified creator data is linked.'
    },
    socialLinks: {
      instagramPage: {
        handle: '@shuttleclub',
        urlPlaceholder: '[INSTAGRAM PAGE URL TO BE ADDED]'
      },
      reels: [
        {
          title: 'Reel 01: Championship Point',
          urlPlaceholder: '[INSTAGRAM REEL 1 URL TO BE ADDED]'
        },
        {
          title: 'Reel 02: Rally Intensity',
          urlPlaceholder: '[INSTAGRAM REEL 2 URL TO BE ADDED]'
        },
        {
          title: 'Reel 03: Tournament Aftermovie',
          urlPlaceholder: '[INSTAGRAM REEL 3 URL TO BE ADDED]'
        }
      ]
    },
    tools: ['Premiere Pro', 'After Effects']
  }
];

// Backwards-compatible PROJECTS export if needed
export const PROJECTS: Project[] = PROJECT_SHOWCASES.map(p => ({
  id: p.id,
  number: p.number,
  title: p.title,
  category: p.category,
  categoryKey: p.id.includes('pulzion') || p.id.includes('addiction') ? 'event' : 'sports',
  year: p.year,
  role: p.role,
  tools: p.tools,
  duration: p.reels[0]?.duration || '01:00',
  aspectRatio: '9:16',
  thumbnailUrl: p.reels[0]?.thumbnailUrl || '',
  description: p.introduction,
  client: p.client,
  highlights: p.responsibilities,
  accentColor: p.accentColor
}));

export const CATEGORIES = [
  { key: 'all', label: '00 — ALL SHOWCASES' },
  { key: 'event', label: '01 — EVENT & SYMPOSIUMS' },
  { key: 'sports', label: '02 — SPORTS & COMMUNITY' },
] as const;
