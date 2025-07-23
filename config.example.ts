// 這是一個範例配置檔案。請複製這個檔案並根據您的需求修改。
// This is an example configuration file. Please copy this file and modify according to your needs.

export const personalInfo = {
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
};

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
  website: "https://yourwebsite.com",
  email: "your-email@example.com",
};

export const stats = {
  yearsExperience: "X+", // 例如: "5+", "10+"
  linesOfCode: "XXk+", // 例如: "50k+", "100k+"
  companiesWorked: "X+", // 例如: "3+", "10+"
  projectsCompleted: "XX+", // 例如: "20+", "50+"
};

export const siteConfig = {
  title: "Your Name - Your Title",
  description: "Your professional description for SEO and social sharing.",
  keywords: "Your, Professional, Keywords, Separated, By, Commas",
  author: "Your Full Name",
  url: "https://yourwebsite.com",
  siteName: "Your Portfolio Name",
  locale: "en_US", // 或 "zh_TW" 等其他語言代碼
  copyright: "© 2024 Your Name. All rights reserved.",
  buildInfo: "Built with Next.js, React, and Tailwind CSS.",
};

/*
使用步驟 Usage Steps:
1. 複製這個檔案到 src/data/ 資料夾中的對應檔案
2. 修改所有的範例值為您的真實資訊
3. 確保您的頭像和 CV 檔案已放置在正確的資料夾中
4. 更新 src/data/ 中的其他檔案（experience.ts, projects.ts 等）

1. Copy this file to the corresponding files in src/data/ folder
2. Modify all example values to your real information  
3. Make sure your avatar and CV files are placed in the correct folders
4. Update other files in src/data/ (experience.ts, projects.ts, etc.)
*/
