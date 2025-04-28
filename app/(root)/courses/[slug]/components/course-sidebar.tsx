"use client";

import { motion } from "framer-motion";
import { Clock, BookOpen, Users, CheckCircle } from "lucide-react";
import { Course } from "@/lib/types";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function CourseSidebar({ course }: { course: Course }) {
  return (
    <>
      <motion.div
        className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        custom={0}
      >
        <h3 className="text-xl font-bold mb-4">Requirements</h3>
        <ul className="space-y-2">
          {course.requirements?.map((requirement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-neon-500 mr-2">•</span>
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        custom={1}
      >
        <h3 className="text-xl font-bold mb-4">This Course Includes</h3>
        <ul className="space-y-3">
          {course.includes?.map((include, index) => (
            <li key={index} className="flex items-center">
              {index === 0 && (
                <BookOpen className="h-5 w-5 text-neon-500 mr-3" />
              )}
              {index === 1 && (
                <CheckCircle className="h-5 w-5 text-neon-500 mr-3" />
              )}
              {index === 2 && <Users className="h-5 w-5 text-neon-500 mr-3" />}
              {index === 3 && <Clock className="h-5 w-5 text-neon-500 mr-3" />}
              <span>{include}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
