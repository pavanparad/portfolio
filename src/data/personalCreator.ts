import { PersonalCreatorData } from '../types';
import { OFFICIAL_LOGOS } from './logos';

export const PERSONAL_CREATOR_DATA: PersonalCreatorData = {
  platformName: 'PAVAN ARTS',
  logoUrl: OFFICIAL_LOGOS.pavanarts.src,
  logoAlt: OFFICIAL_LOGOS.pavanarts.alt,
  heading: 'MADE BY ME. WATCHED BY MILLIONS.',
  supportingDescription:
    'A CREATIVE JOURNEY BUILT THROUGH ART, CONSISTENCY AND CONTENT THAT CONNECTS WITH PEOPLE.',
  performanceStatement:
    'MULTIPLE REELS CROSSING THOUSANDS OF VIEWS, WITH 100K+ MONTHLY ENGAGEMENT.',
  combinedViews: '5.2M+',
  combinedViewsScope: 'Combined views on the three featured reels below',
  disclaimer:
    'The 5.2M+ figure represents the combined play count of the three featured viral reels showcased below, distinct from total account views or lifetime statistics. Multiple reels crossing thousands of views with 100K+ monthly engagement is presented as a professional portfolio highlight, not a guaranteed future result.',
  instagramProfileUrl: 'https://www.instagram.com/pavanarts07/',
  instagramHandle: '@pavanarts07',
  ctaText: 'EXPLORE MORE ON INSTAGRAM',
  featuredStats: [
    {
      value: '5.2M+',
      label: 'COMBINED VIEWS ON FEATURED REELS',
      subtext: 'Combined views of the three featured reels below',
    },
    {
      value: '100K+',
      label: 'MONTHLY ENGAGEMENT',
      subtext: 'Active viewer interactions, shares and watch time',
    },
    {
      value: 'MULTIPLE',
      label: 'REELS CROSSING THOUSANDS OF VIEWS',
      subtext: 'Consistent organic reach driven by high-retention editing',
    },
  ],
  reels: [
    {
      id: 'pavanarts-reel-1',
      reelNumber: '01',
      title: 'REEL 01 — 2.5M VIEWS',
      views: '2.5M+ VIEWS',
      displayViews: '2.5M+ VIEWS',
      instagramUrl: 'https://www.instagram.com/reel/DYSBonXJP3z/',
      instagramReelUrl: 'https://www.instagram.com/reel/DYSBonXJP3z/',
      thumbnailUrl: './images/projects/reels/pavanarts-reel-1.svg',
    },
    {
      id: 'pavanarts-reel-2',
      reelNumber: '02',
      title: 'REEL 02 — 1.5M VIEWS',
      views: '1.5M+ VIEWS',
      displayViews: '1.5M+ VIEWS',
      instagramUrl: 'https://www.instagram.com/reel/DV0q_vICB6q/',
      instagramReelUrl: 'https://www.instagram.com/reel/DV0q_vICB6q/',
      thumbnailUrl: './images/projects/reels/pavanarts-reel-2.svg',
    },
    {
      id: 'pavanarts-reel-3',
      reelNumber: '03',
      title: 'REEL 03 — 1.2M VIEWS',
      views: '1.2M+ VIEWS',
      displayViews: '1.2M+ VIEWS',
      instagramUrl: 'https://www.instagram.com/reel/DT-jpgDD6k-/',
      instagramReelUrl: 'https://www.instagram.com/reel/DT-jpgDD6k-/',
      thumbnailUrl: './images/projects/reels/pavanarts-reel-3.svg',
    },
  ],
};
