import { OFFICIAL_LOGOS } from './logos';

export interface BrandShowcaseItem {
  id: string;
  name: string;
  src: string;
  alt: string;
}

export const BRANDS_SHOWCASE: BrandShowcaseItem[] = [
  {
    id: OFFICIAL_LOGOS.veloxxclub.id,
    name: OFFICIAL_LOGOS.veloxxclub.name,
    src: OFFICIAL_LOGOS.veloxxclub.src,
    alt: OFFICIAL_LOGOS.veloxxclub.alt,
  },
  {
    id: OFFICIAL_LOGOS.shuttleclub.id,
    name: OFFICIAL_LOGOS.shuttleclub.name,
    src: OFFICIAL_LOGOS.shuttleclub.src,
    alt: OFFICIAL_LOGOS.shuttleclub.alt,
  },
];
