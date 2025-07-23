"use client";
import { HiCode, HiExternalLink, HiLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";
import { projects, siteConfig, stats } from "@/data";
import { useState } from "react";

const ModernProfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const companies = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.type))),
  ];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getCompanyColor = (company: string) => {
    const colors = {
      EDNS: "bg-gradient-to-r from-blue-500 to-blue-600",
      SenMedia: "bg-gradient-to-r from-green-500 to-green-600",
      "Sik Sik Yuen": "bg-gradient-to-r from-purple-500 to-purple-600",
      "Gammon Construction": "bg-gradient-to-r from-orange-500 to-orange-600",
      Healthcare: "bg-gradient-to-r from-red-500 to-red-600",
      FYP: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      Lookcard: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    };
    return (
      colors[company as keyof typeof colors] ||
      "bg-gradient-to-r from-gray-500 to-gray-600"
    );
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.highlights.projects}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company) => (
            <motion.button
              key={company}
              onClick={() => setActiveFilter(company)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeFilter === company
                  ? "bg-primary-600 text-white shadow-colored"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-soft"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {company}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeFilter}
        >
          {filteredProjects.map((project, _index) => (
            <motion.div
              key={project.name}
              className="bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div
                className={`p-6 text-white ${getCompanyColor(project.type)}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-100 transition-colors">
                  {project.name}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {project.background || project.highlights?.[0]}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights?.slice(0, 2).map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <HiLightBulb className="text-yellow-500 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <motion.button
                    className="flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiCode className="mr-2" />
                    View Details
                  </motion.button>
                  <motion.button
                    className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <HiExternalLink className="text-lg" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              label: "Total Projects",
              value: stats.projectsCompleted,
              icon: "🚀",
            },
            {
              label: "Companies Worked",
              value: stats.companiesWorked,
              icon: "🏢",
            },
            { label: "Technologies Used", value: stats.techUsed, icon: "⚡" },
            { label: "Awards Won", value: stats.awardsWon, icon: "🏆" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white rounded-2xl p-6 shadow-soft"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`p-6 text-white ${getCompanyColor(
                selectedProject.type
              )}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedProject.type}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.name}
              </h2>
              <p className="text-white/90">{selectedProject.year}</p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {selectedProject.background && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.background}
                  </p>
                </div>
              )}

              {selectedProject.technical && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Technical Implementation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.technical}
                  </p>
                </div>
              )}

              {selectedProject.highlights && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Achievements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <HiLightBulb className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ModernProfolioPage;
