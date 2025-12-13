import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: 'AI' | 'Web' | 'General';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  category: 'ai' | 'web' | 'teaching';
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}