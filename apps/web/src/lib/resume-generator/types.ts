// Core types for the resume generator system

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  projects: Project[];
  skills: Skills;
  experience?: WorkExperience[];
  certifications?: Certification[];
  achievements?: Achievement[];
  keyCompetencies?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location?: string;
  languages?: string[];
  contact: ContactInfo;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  twitter?: string;
  portfolio?: string;
}

export interface Education {
  id: number;
  date: string;
  title: string;
  institution?: string;
  description: string;
}

export interface Project {
  id: number;
  date: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
}

export interface Skills {
  languages?: Skill[];
  frontend?: Skill[];
  backend?: Skill[];
  databases?: Skill[];
  ai?: Skill[];
  messaging?: Skill[];
  i18n?: Skill[];
  crossPlatform?: Skill[];
  devops?: Skill[];
  testing?: Skill[];
  tools?: Skill[];
  frameworks?: Skill[]; // Legacy support
}

export interface Skill {
  name: string;
  icon?: string;
  category?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
}
