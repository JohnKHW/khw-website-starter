import { IPersonalInfo } from "@/utils/interfaces";

export const personalInfo: IPersonalInfo = {
  preferredName: "Your Preferred Name",
  name: "Your Full Name",
  title: "Your Job Title",
  location: "Your Location",
  email: "your-email@example.com",
  phone: "+1234567890", // 可選 Optional
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
  website: "https://yourwebsite.com",
  summary:
    "Your professional summary here. Describe your experience, skills, and what makes you unique.",
  avatar: "/assets/images/your-profile.jpg", // 放在 public/assets/images/ 資料夾中
  cvPath: "/assets/Your_CV.pdf", // 放在 public/assets/ 資料夾中
  emailSubject: "Hello%20Subject", // URL 編碼的郵件主旨
  roles: ["Dummy1", "Dummy2", "Dummy3"],
};
