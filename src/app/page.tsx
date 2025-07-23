"use client";
import { HeroSection } from "@/components/contents/HeroSection";
import { ModernHeader } from "@/components/contents/ModernHeader";
import { ParallaxProvider } from "react-scroll-parallax";
import { motion, useScroll } from "framer-motion";
import { siteConfig, socialLinks } from "@/data";
import CertificationsPage from "@/components/pages/CertificationsPage";
import EducationPage from "@/components/pages/EducationPage";
import ExperiencePage from "@/components/pages/ExperiencePage";
import ModernProfolioPage from "@/components/pages/ModernProfolioPage";
import ModernSkillsPage from "@/components/pages/ModernSkillsPage";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <ParallaxProvider>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 origin-left z-50"
      />

      <div className="min-h-screen bg-gray-50">
        <ModernHeader />

        <main>
          <section id="home">
            <HeroSection />
          </section>

          <section id="experience">
            <ExperiencePage />
          </section>

          <section id="education">
            <EducationPage />
          </section>

          <section id="skills">
            <ModernSkillsPage />
          </section>

          <section id="projects">
            <ModernProfolioPage />
          </section>

          <section id="certifications">
            <CertificationsPage />
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Ready to bring your next project to life? I&apos;m always open
                to discussing new opportunities and innovative ideas.
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href={socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </a>
              </div>
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-500">{siteConfig.copyright}</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  );
}
