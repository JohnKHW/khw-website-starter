"use client";
import { ExperienceCard } from "@/components/commons/ExperienceCard";
import { experience, siteConfig } from "@/data";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      id="experience"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Professional Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.highlights.work}
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </motion.div>

        {/* Timeline decoration */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200"></div>
      </div>
    </section>
  );
};

export default ExperiencePage;
