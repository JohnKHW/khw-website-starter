"use client";
import { HiCalendar, HiLocationMarker, HiOfficeBuilding } from "react-icons/hi";
import { IExperience } from "@/utils/interfaces";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  experience: IExperience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-6 border border-gray-100"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {experience.position}
          </h3>
          <div className="flex items-center text-primary-600 font-semibold mb-1">
            <HiOfficeBuilding className="mr-2" />
            {experience.company}
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-1">
            <HiLocationMarker className="mr-2" />
            {experience.location}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <HiCalendar className="mr-2" />
            {experience.period} · {experience.type}
          </div>
        </div>
        <div className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
          {experience.type}
        </div>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {experience.description}
      </p>

      {/* Key Achievements */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600">
              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export { ExperienceCard };
