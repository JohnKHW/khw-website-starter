# 🌟 現代個人作品集網站模板

一個美觀、現代化且完全可自定義的個人作品集網站模板，使用 Next.js、React 和 Tailwind CSS 構建。

DEMO: [https://template.johnkhw.work/](https://template.johnkhw.work/)

[English](#english) | [繁體中文](#繁體中文)

## ✨ 功能特色

- 🎨 **現代設計**: 清潔、專業的 UI/UX 設計
- 📱 **響應式設計**: 完美支援各種設備尺寸
- ⚡ **高效能**: 使用 Next.js 13 和 TypeScript
- 🎭 **動畫效果**: 流暢的過渡動畫和互動效果
- 📊 **動態數據**: 所有內容都可透過配置檔案輕鬆自定義
- 🔍 **SEO 優化**: 完整的 SEO 和社交媒體分享優化
- 🚀 **易於部署**: 支援 Vercel、Netlify 等平台

## 🏗️ 技術架構

- **框架**: Next.js 13 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **圖示**: React Icons
- **字體**: Inter (Google Fonts)

## 📋 必要條件

在開始之前，請確保您的系統已安裝：

- Node.js 18+
- npm 或 yarn 或 pnpm

## 🚀 快速開始

### 1. 下載專案

```bash
# 使用 git clone
git clone https://github.com/JohnKHW/khw-website-starter.git
cd khw-website-starter

# 或下載 ZIP 檔案並解壓縮
```

### 2. 安裝依賴套件

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 3. 自定義您的內容

#### 步驟 3.1: 個人資訊設定

編輯 `src/data/personal.ts`:

```typescript
export const personalInfo: IPersonalInfo = {
  preferredName: "您的暱稱",
  name: "您的全名",
  title: "您的職位",
  location: "您的位置",
  email: "your-email@example.com",
  phone: "+886-912-345-678", // 可選
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
  website: "https://yourwebsite.com",
  summary: "您的專業簡介...",
  avatar: "/assets/images/your-profile.jpg",
  cvPath: "/assets/Your_CV.pdf",
  emailSubject: "Hello%20Subject",
};
```

#### 步驟 3.2: 統計數據設定

編輯 `src/data/stats.ts`:

```typescript
export const stats: IStatsData = {
  yearsExperience: "5+",
  linesOfCode: "100k+",
  companiesWorked: "3+",
  projectsCompleted: "20+",
};
```

#### 步驟 3.3: 網站配置

編輯 `src/data/siteConfig.ts`:

```typescript
export const siteConfig: ISiteConfig = {
  title: "您的名字 - 您的職位",
  description: "您的專業描述，用於 SEO 和社交媒體分享。",
  keywords: "您的,專業,關鍵字",
  author: "您的全名",
  url: "https://yourwebsite.com",
  siteName: "您的作品集名稱",
  locale: "zh_TW",
  copyright: "© 2024 您的名字. 版權所有.",
  buildInfo: "使用 Next.js、React 和 Tailwind CSS 構建。",
};
```

#### 步驟 3.4: 工作經驗

編輯 `src/data/experience.ts`:

```typescript
export const experience: IExperience[] = [
  {
    position: "職位名稱",
    company: "公司名稱",
    location: "工作地點",
    period: "2020 - 現在",
    type: "全職",
    description: "工作描述...",
    achievements: ["主要成就 1", "主要成就 2"],
    technologies: ["React", "Node.js", "TypeScript"],
  },
  // 更多經驗...
];
```

#### 步驟 3.5: 專案作品

編輯 `src/data/projects.ts`:

```typescript
export const projects: IProject[] = [
  {
    name: "專案名稱",
    type: "Web 應用程式",
    year: "2024",
    background: "專案背景描述...",
    highlights: ["主要特色 1", "主要特色 2"],
  },
  // 更多專案...
];
```

#### 步驟 3.6: 教育背景

編輯 `src/data/education.ts`，新增您的學歷資訊。

#### 步驟 3.7: 技能專長

編輯 `src/data/skills.ts`，列出您的技能和熟練度。

#### 步驟 3.8: 證書認證

編輯 `src/data/certifications.ts`，新增您的專業證書。

### 4. 準備資源檔案

#### 個人照片

- 將您的個人照片放在 `public/assets/images/profile.jpg`
- 建議尺寸: 400x400 像素
- 格式: JPG 或 PNG

#### 履歷檔案

- 將您的履歷 PDF 放在 `public/assets/Your_CV.pdf`

#### 公司 Logo（可選）

- 放在 `public/assets/images/companies/` 資料夾中

### 5. 啟動開發伺服器

```bash
npm run dev
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

## 🚀 部署指南

### Vercel 部署（推薦）

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 註冊帳號
3. 點擊 "New Project" 並選擇您的 GitHub 倉庫
4. Vercel 會自動偵測 Next.js 專案並進行部署
5. 部署完成後，您會獲得一個免費的 `.vercel.app` 網址

### Netlify 部署

1. 建構專案：

```bash
npm run build
npm run export
```

2. 將 `out` 資料夾拖放到 [Netlify](https://netlify.com) 的部署區域

### GitHub Pages 部署

1. 安裝 `gh-pages`:

```bash
npm install --save-dev gh-pages
```

2. 在 `package.json` 中新增腳本：

```json
{
  "scripts": {
    "deploy": "gh-pages -d out"
  }
}
```

3. 執行部署：

```bash
npm run build
npm run export
npm run deploy
```

### 自訂網域

如果您有自己的網域：

1. 在您的網域服務商設定 DNS
2. 在部署平台（Vercel/Netlify）新增自訂網域
3. 更新 `src/data/siteConfig.ts` 中的 `url` 欄位

## 📁 專案結構

```
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile.jpg          # 您的個人照片
│   │   │   └── companies/           # 公司 logo
│   │   └── Your_CV.pdf              # 您的履歷
├── src/
│   ├── app/
│   │   ├── layout.tsx               # 應用程式佈局
│   │   ├── page.tsx                 # 主頁面
│   │   └── globals.css              # 全域樣式
│   ├── components/
│   │   ├── commons/                 # 通用組件
│   │   ├── contents/                # 內容組件
│   │   └── pages/                   # 頁面組件
│   ├── data/                        # 📊 所有數據檔案
│   │   ├── personal.ts              # 個人資訊
│   │   ├── experience.ts            # 工作經驗
│   │   ├── projects.ts              # 專案作品
│   │   ├── education.ts             # 教育背景
│   │   ├── skills.ts                # 技能專長
│   │   ├── certifications.ts        # 證書認證
│   │   ├── stats.ts                 # 統計數據
│   │   ├── siteConfig.ts            # 網站配置
│   │   └── index.ts                 # 統一匯出
│   └── utils/
│       ├── interfaces/              # TypeScript 介面定義
│       └── enums/                   # 列舉定義
├── config.example.ts                # 配置範例檔案
└── README.md                        # 本檔案
```

## 🎨 自定義主題

### 顏色配置

編輯 `tailwind.config.js` 來自定義顏色主題：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          // ... 更多顏色層級
          600: "#2563eb",
        },
        secondary: {
          // 您的次要顏色
        },
      },
    },
  },
};
```

### 字體自定義

在 `src/app/layout.tsx` 中更改字體：

```typescript
import { Your_Font } from "next/font/google";

const yourFont = Your_Font({ subsets: ["latin"] });
```

## 🔧 常見問題

### Q: 如何新增新的頁面區塊？

A: 您可以在 `src/components/pages/` 中建立新組件，然後在 `src/app/page.tsx` 中引入和使用。

### Q: 如何修改動畫效果？

A: 動畫使用 Framer Motion，您可以在各組件中修改 `motion` 屬性的參數。

### Q: 如何新增新的技能類別？

A: 編輯 `src/components/pages/ModernSkillsPage.tsx` 中的 `skillCategories` 陣列。

### Q: 部署後圖片無法顯示？

A: 確保圖片路徑正確，且檔案已放在 `public/` 資料夾中。

## 📞 技術支援

如果您在使用過程中遇到問題：

1. 查看本 README 的常見問題區塊
2. 查看 [Next.js 官方文件](https://nextjs.org/docs)
3. 在 GitHub 上提交 Issue

## 📄 授權條款

本專案採用 MIT 授權條款 - 詳情請參閱 [LICENSE](LICENSE) 檔案。

## 🙏 致謝

感謝所有開源專案的貢獻者，讓這個模板得以實現。

---

# English

## 🌟 Modern Personal Portfolio Website Template

A beautiful, modern, and fully customizable personal portfolio website template built with Next.js, React, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern Design**: Clean and professional UI/UX design
- 📱 **Responsive**: Perfect support for all device sizes
- ⚡ **High Performance**: Built with Next.js 13 and TypeScript
- 🎭 **Animations**: Smooth transitions and interactive effects
- 📊 **Dynamic Data**: All content easily customizable through configuration files
- 🔍 **SEO Optimized**: Complete SEO and social media sharing optimization
- 🚀 **Easy Deployment**: Support for Vercel, Netlify, and other platforms

## 🚀 Quick Start

### 1. Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### 2. Installation

```bash
npm install
```

### 3. Configuration

1. Edit `src/data/personal.ts` with your personal information
2. Edit `src/data/experience.ts` with your work experience
3. Edit `src/data/projects.ts` with your projects
4. Edit `src/data/education.ts` with your education
5. Edit `src/data/skills.ts` with your skills
6. Place your profile photo at `public/assets/images/profile.jpg`
7. Place your CV at `public/assets/Your_CV.pdf`

### 4. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Deployment

#### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

#### Netlify

```bash
npm run build
npm run export
```

Upload the `out` folder to Netlify.

## 📁 Project Structure

See the Chinese section above for the complete project structure.

## 🔧 Customization

All content can be customized through the files in the `src/data/` directory. Each file contains typed interfaces to ensure data consistency.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**建議**: 請參考 `config.example.ts` 檔案來了解完整的配置選項。

**Tip**: Check the `config.example.ts` file for complete configuration options.
