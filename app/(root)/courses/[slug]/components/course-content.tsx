"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Course } from "@/lib/types";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function CourseContent({ course }: { course: Course }) {
  return (
    <>
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        custom={0}
      >
        About This Course
      </motion.h2>
      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        custom={0.2}
      >
        {course.longDescription}
      </motion.p>

      <motion.h2
        className="text-2xl font-bold mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        custom={0.4}
      >
        Course Curriculum
      </motion.h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <Accordion type="single" collapsible className="mb-8">
          {course.syllabus?.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              custom={0.5 + index * 0.1}
            >
              <AccordionItem value={`section-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pt-2">
                    {section.lessons?.map((lesson, lessonIndex) => (
                      <li
                        key={lessonIndex}
                        className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800"
                      >
                        <div className="flex items-center">
                          <span className="text-gray-700 dark:text-gray-300">
                            {lesson.title}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {lesson.duration}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        custom={1}
      >
        What You&apos;ll Learn
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {course.learningOutcomes?.map((outcome, index) => (
          <motion.div
            key={index}
            className="flex items-start"
            variants={fadeInVariants}
          >
            <CheckCircle className="h-5 w-5 text-neon-500 mr-3 mt-0.5" />
            <span>{outcome}</span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
