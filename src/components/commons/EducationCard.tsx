"use client";
import { HiAcademicCap, HiCalendar, HiStar } from "react-icons/hi";
import { IEducation } from "@/utils/interfaces";
import { motion } from "framer-motion";

interface EducationCardProps {
  education: IEducation;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-6 border border-primary-100"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
          <HiAcademicCap className="text-primary-600 text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {education.degree}
          </h3>
          <p className="text-primary-600 font-semibold mb-2">
            {education.institution}
          </p>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <HiCalendar className="mr-2" />
            {education.year}
            {education.gpa && (
              <>
                <span className="mx-2">•</span>
                <HiStar className="mr-1 text-yellow-500" />
                {education.gpa}
              </>
            )}
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {education.description}
      </p>

      {education.relevantCourses && education.relevantCourses.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">
            Relevant Coursework:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {education.relevantCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-80 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium border border-primary-100"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export { EducationCard };
