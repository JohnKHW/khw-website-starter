import "./globals.css";
import { Inter } from "next/font/google";
import { personalInfo, siteConfig } from "@/data";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    images: [
      {
        url: personalInfo.avatar,
        width: 400,
        height: 400,
        alt: `${personalInfo.name} Profile Picture`,
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [personalInfo.avatar],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XWR35Y68ZQ"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-XWR35Y68ZQ');
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
