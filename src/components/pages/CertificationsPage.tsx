"use client";
import { AchievementCard } from "@/components/commons/AchievementCard";
import { CertificationCard } from "@/components/commons/CertificationCard";
import { achievements, certifications, siteConfig } from "@/data";
import { motion } from "framer-motion";

const CertificationsPage = () => {
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
      className="py-20 bg-gradient-to-br from-primary-50 to-white"
      id="certifications"
    >
      <div className="container mx-auto px-6">
        {/* Certifications Section */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block bg-success-100 text-success-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Professional Credentials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.highlights.certifications}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} index={index} />
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Recognition & Awards
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.highlights.achievements}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsPage;
