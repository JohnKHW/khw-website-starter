import { ServiceType } from "@/utils/enums";

export interface ISkillSet {
  name: string;
  percentage: number;
  category: string;
}

export interface ISkillCategory {
  name: string;
  color: string;
  bgColor: string;
}

export interface IProject {
  name: string;
  type: string;
  image?: string;
  year?: string;
  background?: string;
  technical?: string;
  highlights?: string[];
}

export interface IService {
  type: ServiceType;
  skills: string[];
}

export interface IEducation {
  degree: string;
  institution: string;
  year: string;
  description: string;
  gpa?: string;
  relevantCourses?: string[];
}

export interface IExperience {
  position: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ICertification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  description: string;
  badge?: string | null;
}

export interface IAchievement {
  title: string;
  category: string;
  year: string;
  level: string;
  description: string;
  icon: string;
}

export interface ILanguage {
  name: string;
  level: string;
  proficiency: number;
  description: string;
}

export interface IPersonalInfo {
  preferredName: string;
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  website: string;
  summary: string;
  avatar: string;
  cvPath: string;
  emailSubject: string;
  roles: string[];
}

export interface ISocialLinks {
  github: string;
  linkedin: string;
  website: string;
  email: string;
}

export interface IStatsData {
  yearsExperience: string;
  linesOfCode: string;
  companiesWorked: string;
  projectsCompleted: string;
  techUsed: string;
  awardsWon: string;
  programming: string;
  frameworks: string;
}

export interface ISiteConfig {
  title: string;
  description: string;
  keywords: string;
  author: string;
  url: string;
  siteName: string;
  locale: string;
  copyright: string;
  buildInfo: string;
  highlights: {
    work: string;
    education: string;
    skills: string;
    projects: string;
    certifications: string;
    achievements: string;
  };
}

export interface ISiteMetadata {
  personalInfo: IPersonalInfo;
  socialLinks: ISocialLinks;
  stats: IStatsData;
  siteConfig: ISiteConfig;
}
