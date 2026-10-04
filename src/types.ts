export interface Course {
  id: string;
  title: string;
  englishTitle?: string;
  description: string;
  duration: string;
  sessionsCount?: string;
  level: 'مبتدی' | 'مبتدی تا متوسط' | 'مبتدی تا پیشرفته' | 'متوسط' | 'متوسط تا پیشرفته' | 'پیشرفته';
  price: string;
  category: 'ai' | 'programming' | 'data' | 'web' | 'mobile' | 'design';
  categoryLabel: string;
  iconName: string;
  link: string;
  syllabus: {
    title: string;
    topics: string[];
  }[];
  highlights: string[];
  prerequisites: string;
  targetAudience: string;
  isPopular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDetails?: string;
  tags: string[];
  category: 'ai' | 'web' | 'teaching' | 'data' | 'mobile';
  categoryLabel: string;
  iconName: string;
  link: string;
  accuracyOrMetric?: string;
  year?: string;
}

export interface Skill {
  name: string;
  category: 'ai' | 'web' | 'data' | 'tools';
  categoryLabel: string;
  level: number;
  iconName: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  subject: string;
  courseOfInterest?: string;
  message: string;
}
