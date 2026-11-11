export interface ProjectReel {
  id: string;
  title: string;
  label: string;
  duration?: string;
  aspectRatio: '9:16' | '16:9';
  videoUrl?: string; // Direct MP4 path if available
  socialUrl?: string; // Instagram / YouTube reel URL placeholder
  thumbnailUrl: string; // SVG or poster image placeholder
  viewsPlaceholder?: string; // e.g. "[VERIFIED VIEWS PENDING]"
  viewsCount?: string; // e.g. "2.5M VIEWS"
}

export interface ProjectPerformance {
  totalViewsPlaceholder: string;
  reachPlaceholder: string;
  engagementPlaceholder: string;
  metricsNotice: string;
}

export interface ProjectShowcaseItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  responsibilities: string[];
  introduction: string;
  logoUrl?: string;
  accentColor: string;
  reels: ProjectReel[];
  highlightsSection: {
    theme?: string;
    eventCount?: number | string;
    description: string;
    keyMoments: string[];
  };
  performance: ProjectPerformance;
  socialLinks: {
    instagramPage: {
      handle: string;
      urlPlaceholder: string;
    };
    reels: {
      title: string;
      urlPlaceholder: string;
    }[];
    otherLinks?: {
      label: string;
      urlPlaceholder: string;
    }[];
  };
  tools: string[];
}

// Section 2: Client Project Item
export interface ClientProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  logoUrl: string;
  logoAlt: string;
  accentColor: string;
  myContribution: {
    role: string;
    responsibilities: string[];
    description: string;
  };
  projectHighlights: string[];
  performance: {
    verifiedViews: string;
    reachStatus: string;
    notice: string;
  };
  socialLinks: {
    instagramPage: {
      handle: string;
      url: string;
    };
    reels: {
      title: string;
      url: string;
    }[];
  };
  reels: ProjectReel[];
}

// Section 3: College Experience Item
export interface CollegeProjectShowcase {
  id: string;
  title: string;
  tagline: string;
  theme?: string;
  eventCount?: number;
  description: string;
  highlights: string[];
  verifiedMetricsNotice: string;
  reels: ProjectReel[];
  socialLinks?: {
    instagramHandle?: string;
    instagramUrl?: string;
  };
}

export interface CollegeExperienceItem {
  id: string;
  organization: string;
  role: string;
  logoUrl: string;
  logoAlt: string;
  accentColor: string;
  period: string;
  badge: string;
  overview: string;
  responsibilities: string[];
  projects: CollegeProjectShowcase[];
}

// Section 4: Personal Creator Work Item (Pavan Arts)
export interface PersonalCreatorReel {
  id: string;
  reelNumber: string; // "01", "02", "03"
  title: string;
  views: string; // e.g. "2.5M+ VIEWS"
  displayViews: string; // e.g. "2.5M+ VIEWS"
  viewsNumeric?: number;
  label?: string;
  thumbnailUrl: string;
  videoUrl?: string;
  instagramUrl: string;
  instagramReelUrl?: string;
  caption?: string;
}

export interface FeaturedStatItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface PersonalCreatorData {
  platformName: string;
  logoUrl: string;
  logoAlt: string;
  heading: string;
  supportingDescription: string;
  performanceStatement: string;
  subheadingPhrase?: string;
  description?: string;
  combinedViews: string; // "5.2M+"
  combinedViewsScope?: string;
  featuredStats: FeaturedStatItem[];
  reels: PersonalCreatorReel[];
  disclaimer: string;
  instagramProfileUrl: string;
  instagramHandle: string;
  ctaText: string;
}

// Section 5: Social Media Content Item
export type SocialCategoryKey =
  | 'creator-content'
  | 'promotional-films'
  | 'talking-head-edits'
  | 'social-media-reels'
  | 'creative-experiments';

export interface SocialCategoryTab {
  id: SocialCategoryKey;
  label: string;
  shortLabel: string;
  count: number;
  description: string;
}

export interface SocialMediaContentItem {
  id: string;
  title: string;
  category: SocialCategoryKey;
  categoryLabel: string;
  aspectRatio: '9:16' | '16:9';
  duration: string;
  thumbnailUrl: string;
  videoUrl?: string;
  fallbackVideoUrl?: string;
  description: string;
  tags: string[];
  statusPlaceholder: string;
}

// Section 6: Institutional Project Item
export interface InstitutionalProjectItem {
  id: string;
  institution: string;
  title: string;
  logoUrl: string;
  logoAlt: string;
  year: string;
  role: string;
  description: string;
  contribution: string[];
  aspectRatio: '16:9';
  thumbnailUrl: string;
  videoUrl?: string;
  duration: string;
  verifiedStatus: string;
}

// Legacy / Support types
export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryKey: string;
  year: string;
  role: string;
  tools: string[];
  duration: string;
  aspectRatio: string;
  thumbnailUrl: string;
  videoUrl?: string;
  previewGif?: string;
  description: string;
  client?: string;
  highlights: string[];
  accentColor?: string;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  organization: string;
  role: string;
  type: string;
  description: string;
  responsibilities: string[];
  tag: string;
  image?: string;
}

export interface CollaborationBrand {
  id: string;
  name: string;
  category: string;
  role: string;
  badge: string;
  description: string;
  logoUrl?: string;
  logoText: string;
  subText: string;
  highlightYear: string;
}

export interface SkillItem {
  name: string;
  level: string;
  proficiency: number;
  category: 'software' | 'creative';
  description: string;
  iconName: string;
  tags: string[];
}
