"use client";
import { EducationCard } from "@/components/commons/EducationCard";
import { education, siteConfig } from "@/data";
import { motion } from "framer-motion";

const EducationPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section className="py-20 bg-white" id="education">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.highlights.education}
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationPage;
