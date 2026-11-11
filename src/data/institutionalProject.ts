import { InstitutionalProjectItem } from '../types';
import { OFFICIAL_LOGOS } from './logos';

export const INSTITUTIONAL_PROJECT: InstitutionalProjectItem = {
  id: 'pict-institutional-promotional-film',
  institution: 'Pune Institute of Computer Technology',
  title: 'PICT — INSTITUTIONAL PROMOTIONAL FILM',
  logoUrl: OFFICIAL_LOGOS.pict.src,
  logoAlt: OFFICIAL_LOGOS.pict.alt,
  year: '2025 – 2026',
  role: 'VIDEO EDITING',
  description: 'A promotional film created to visually represent Pune Institute of Computer Technology.',
  contribution: [
    'Led end-to-end video editing and timeline assembly',
    'Curated visual pacing, transitions, and narrative rhythm',
    'Audio equalization, background score sync, and sound design',
    'Color correction and cinematic horizontal 16:9 widescreen master export',
  ],
  aspectRatio: '16:9',
  thumbnailUrl: './images/projects/pict-promo-thumb.svg',
  videoUrl: './videos/pict-promotional-video.mp4',
  duration: '06:28',
  verifiedStatus: 'INSTITUTIONAL PROJECT',
};
