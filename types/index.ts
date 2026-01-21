/**
 * TypeScript Type Definitions for Portfolio
 */

// Navigation
export interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

// Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

// Skills
export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
}

export interface SkillCategory {
  name: string;
  icon?: React.ReactNode;
  skills: Skill[];
}

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  tech: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Experience
export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string; // undefined = present
  description: string;
  achievements?: string[];
  tech?: string[];
}

// Education
export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  achievements?: string[];
}

// Contact
export interface ContactInfo {
  type: "email" | "phone" | "location" | "website";
  label: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
}

// Testimonial
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  rating?: number;
}

// Personal Info
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar?: string;
  resumeUrl?: string;
  location?: string;
  email: string;
  phone?: string;
  availability?: string;
}

// Site Configuration
export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  twitterHandle?: string;
  keywords?: string[];
}

// Component Props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  gradient?: boolean;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  size?: "sm" | "md";
  className?: string;
}

// Form
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Animation Variants (for Framer Motion)
export interface AnimationVariants {
  hidden: object;
  visible: object;
}
