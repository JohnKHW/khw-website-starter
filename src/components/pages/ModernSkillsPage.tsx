"use client";
import { categories, siteConfig, skills, stats } from "@/data";
import { motion } from "framer-motion";
import { useState } from "react";

interface SkillCategory {
  name: string;
  color: string;
  bgColor: string;
  skills: typeof skills;
}

const ModernSkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories: SkillCategory[] = [
    {
      name: "All",
      color: "text-gray-700",
      bgColor: "bg-gray-100",
      skills: skills,
    },
    ...categories.map((category) => ({
      name: category.name,
      color: category.color,
      bgColor: category.bgColor,
      skills: skills.filter((skill) => skill.category === category.name),
    })),
  ];

  const activeSkills =
    skillCategories.find((cat) => cat.name === activeCategory)?.skills ||
    skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-white to-gray-50"
      id="skills"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.highlights.skills}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? `${category.bgColor} ${category.color} shadow-soft`
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeCategory}
        >
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group"
              variants={skillVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm font-bold text-primary-600">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <motion.div
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                />
              </div>

              {/* Skill Level Indicator */}
              <div className="flex items-center space-x-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < Math.ceil(skill.percentage / 20)
                        ? "bg-primary-500"
                        : "bg-gray-300"
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-2">
                  {skill.percentage >= 90
                    ? "Expert"
                    : skill.percentage >= 75
                    ? "Advanced"
                    : skill.percentage >= 60
                    ? "Intermediate"
                    : "Beginner"}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { label: "Years of Experience", value: stats.yearsExperience },
            { label: "Programming Languages", value: stats.programming },
            { label: "Frameworks & Tools", value: stats.frameworks },
            { label: "Projects Completed", value: stats.projectsCompleted },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                className="text-3xl font-bold text-primary-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernSkillsPage;
