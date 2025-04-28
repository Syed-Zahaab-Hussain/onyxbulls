"use client";

import { motion } from "framer-motion";
import { CourseCard } from "./course-card";
import { Course } from "@/lib/types";

export default function AnimatedCourseCards({
  courses,
}: {
  courses: Course[];
}) {
  if (courses.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16"
      >
        <h3 className="text-2xl font-medium mb-4">No courses found</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your filters or search query to find what you&apos;re
          looking for.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {courses.map((course, index) => (
        <motion.div
          key={course._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  );
}
