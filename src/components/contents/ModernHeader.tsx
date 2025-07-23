"use client";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { HiDownload, HiMenu, HiX } from "react-icons/hi";
import { personalInfo } from "@/data";
import { useEffect, useState } from "react";

const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">
                {personalInfo.preferredName.charAt(0)}
              </span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              {personalInfo.preferredName}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Right side - Social links and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillGithub className="text-lg" />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillLinkedin className="text-lg" />
            </motion.a>
            <motion.button
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-xl font-medium flex items-center transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload className="mr-2" />
              CV
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <HiX className="text-xl" />
            ) : (
              <HiMenu className="text-xl" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-large p-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600"
                  >
                    <AiFillGithub className="text-lg" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600"
                  >
                    <AiFillLinkedin className="text-lg" />
                  </a>
                  <a
                    className="flex-1 bg-primary-600 text-white px-6 py-2 rounded-xl font-medium flex items-center justify-center"
                    href={personalInfo.cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiDownload className="mr-2" />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export { ModernHeader };
