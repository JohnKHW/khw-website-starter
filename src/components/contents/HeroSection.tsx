"use client";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiDownload, HiLocationMarker, HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { personalInfo, stats } from "@/data";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-100 rounded-full opacity-10 animate-pulse-slow"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center py-0 lg:pt-12">
          {/* Left side - Text content */}
          <motion.div
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-soft text-primary-600 font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <HiLocationMarker className="mr-2" />
              {personalInfo.location}
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Hello, I&apos;m</span>
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {personalInfo.preferredName}
              </span>
            </h1>

            <div className="text-2xl lg:text-3xl text-gray-600 mb-6 h-20">
              <span className="inline-block">I&apos;m a&nbsp;</span>
              <span className="font-semibold text-primary-600 inline-block">
                <Typewriter
                  options={{
                    strings: personalInfo.roles,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </div>

            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.button
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-colored flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open(personalInfo.cvPath, "_blank");
                }}
              >
                <HiDownload className="mr-2" />
                Download CV
              </motion.button>
              <motion.button
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open(
                    `mailto:${personalInfo.email}?subject=${personalInfo.emailSubject}`,
                    "_blank"
                  );
                }}
              >
                <HiMail className="mr-2" />
                Contact Me
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiFillGithub className="text-xl" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiFillLinkedin className="text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-4xl transform rotate-6 scale-105"></div>
              <div className="relative bg-white p-8 rounded-4xl shadow-large">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  width={400}
                  height={400}
                  className="rounded-3xl"
                  priority
                />

                {/* Stats overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-large p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      {stats.yearsExperience}
                    </div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-large p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-600">
                      {stats.linesOfCode}
                    </div>
                    <div className="text-sm text-gray-600">Lines of Code</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { HeroSection };
