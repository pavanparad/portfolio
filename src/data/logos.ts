/**
 * Central Official Logo Asset Registry
 * Mapped to the exact files in public/images/logos/
 */

export interface OfficialLogo {
  id: string;
  name: string;
  src: string;
  alt: string;
  category: 'brand' | 'college' | 'creator' | 'institution';
}

export const OFFICIAL_LOGOS: Record<string, OfficialLogo> = {
  veloxxclub: {
    id: 'veloxxclub',
    name: 'VELOXX CLUB',
    src: './images/logos/veloxxclub-logo.jpg',
    alt: 'VELOXX CLUB Official Logo',
    category: 'brand',
  },
  shuttleclub: {
    id: 'shuttleclub',
    name: 'SHUTTLECLUB',
    src: './images/logos/shuttleclub logo.png',
    alt: 'SHUTTLECLUB Official Logo',
    category: 'brand',
  },
  pasc: {
    id: 'pasc',
    name: 'PICT ACM (PASC)',
    src: './images/logos/pasc logo.png',
    alt: 'PICT ACM Student Chapter Logo',
    category: 'college',
  },
  addiction: {
    id: 'addiction',
    name: 'ADDICTION’26',
    src: './images/logos/ADDICTION logo .png',
    alt: 'PICT Addiction’26 Cultural Fest Logo',
    category: 'college',
  },
  pavanarts: {
    id: 'pavanarts',
    name: 'PAVAN ARTS',
    src: './images/logos/pavanarts logo.jpg',
    alt: 'PAVAN ARTS Official Logo',
    category: 'creator',
  },
  pict: {
    id: 'pict',
    name: 'PICT',
    src: './images/logos/pict logo.png',
    alt: 'Pune Institute of Computer Technology Logo',
    category: 'institution',
  },
};
