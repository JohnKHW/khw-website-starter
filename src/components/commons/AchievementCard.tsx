"use client";
import { HiCalendar } from "react-icons/hi";
import { IAchievement } from "@/utils/interfaces";
import { motion } from "framer-motion";

interface AchievementCardProps {
  achievement: IAchievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  index,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "international":
        return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white";
      case "university":
        return "bg-gradient-to-r from-primary-500 to-primary-600 text-white";
      case "institute":
        return "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white";
      case "professional":
        return "bg-gradient-to-r from-success-500 to-success-600 text-white";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 p-6 border border-gray-100 group overflow-hidden relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="text-6xl">{achievement.icon}</div>
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <span className="text-3xl mr-3">{achievement.icon}</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-gray-600 font-medium text-sm mb-2">
                {achievement.category}
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <HiCalendar className="mr-1" />
                {achievement.year}
              </div>
            </div>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(
              achievement.level
            )}`}
          >
            {achievement.level}
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};

export { AchievementCard };
