"use client";
import { HiBadgeCheck, HiCalendar, HiExternalLink } from "react-icons/hi";
import { ICertification } from "@/utils/interfaces";
import { motion } from "framer-motion";
import Image from "next/image";

interface CertificationCardProps {
  certification: ICertification;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  index,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-6 border border-gray-100 group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start">
          {certification.badge ? (
            <div className="w-12 h-12 mr-4 flex-shrink-0">
              <Image
                src={certification.badge}
                alt={certification.issuer}
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>
          ) : (
            <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <HiBadgeCheck className="text-success-600 text-xl" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
              {certification.name}
            </h3>
            <p className="text-gray-600 font-medium mb-1">
              {certification.issuer}
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <HiCalendar className="mr-2" />
              {certification.year}
            </div>
          </div>
        </div>
        <motion.div
          className="text-gray-400 group-hover:text-primary-600 transition-colors cursor-pointer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <HiExternalLink className="text-lg" />
        </motion.div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        {certification.description}
      </p>

      {certification.credentialId && (
        <div className="mt-3 text-xs text-gray-500">
          <span className="font-medium">ID:</span> {certification.credentialId}
        </div>
      )}
    </motion.div>
  );
};

export { CertificationCard };
