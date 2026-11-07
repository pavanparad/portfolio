export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'EVENT FILMS' | 'CINEMATIC REELS' | 'PROMOTIONAL VIDEOS' | 'SOCIAL MEDIA CONTENT' | 'MOTION GRAPHICS';
  categoryKey: 'all' | 'event' | 'cinematic' | 'promo' | 'social' | 'motion';
  year: string;
  role: string;
  tools: string[];
  duration: string;
  aspectRatio: '16:9' | '9:16';
  thumbnailUrl: string;
  videoUrl?: string; // YouTube embed or direct MP4 URL
  previewGif?: string;
  description: string;
  client?: string;
  highlights: string[];
  accentColor?: string;
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
