import { ISkillCategory, ISkillSet } from "@/utils/interfaces";

export const skills: ISkillSet[] = [
  {
    name: "JavaScript/TypeScript",
    percentage: 90,
    category: "Web Development",
  },
  {
    name: "Python",
    percentage: 80,
    category: "Programming",
  },
];

export const categories: ISkillCategory[] = [
  {
    name: "Programming",
    color: "text-primary-600",
    bgColor: "bg-primary-100",
  },
  {
    name: "Web Development",
    color: "text-secondary-600",
    bgColor: "bg-secondary-100",
  },
];
