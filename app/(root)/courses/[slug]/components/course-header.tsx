"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/lib/types";
import { CurrencyFormat } from "@/lib/utils";

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CourseHeader({ course }: { course: Course }) {
  return (
    <motion.div
      className="bg-black text-white py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants}>
          <Link
            href="/courses"
            className="inline-flex items-center text-neon-400 hover:text-neon-300 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-4"
            >
              <Badge className="bg-neon-500 text-black">{course.level}</Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {course.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg mb-6"
            >
              {course.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center flex-wrap gap-6 mb-6"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 relative rounded-full overflow-hidden mr-3 border-2 border-neon-500">
                  <Image
                    src={
                      course.instructor?.image ||
                      "https://placehold.co/600x400?text=No+Image"
                    }
                    alt={course.instructor?.name || "Instructor"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{course.instructor?.name}</p>
                  <p className="text-sm text-gray-400">
                    {course.instructor?.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-900 rounded-lg p-6 h-fit"
          >
            <div className="relative h-48 w-full mb-6 rounded-md overflow-hidden">
              <Image
                src={course.image || "/default-course.jpg"}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-6">
              {course.salePrice ? (
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-neon-400">
                    {CurrencyFormat(course.salePrice)}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {CurrencyFormat(course.price)}
                  </span>
                  <Badge className="hover:bg-neon-500 ml-auto">
                    {Math.round(
                      ((course.price - course.salePrice) / course.price) * 100
                    )}
                    % OFF
                  </Badge>
                </div>
              ) : (
                <span className="text-3xl font-bold text-neon-400">
                  {CurrencyFormat(course.price)}
                </span>
              )}
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-neon-400" />
                <span>{course.duration} course duration</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-3 text-neon-400" />
                <span>{course.lessons} lessons</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-neon-400" />
                <span>Certificate of completion</span>
              </div>
            </div>

            <Link href="/contact-us">
              <Button className="w-full bg-neon-500 hover:bg-neon-600 text-black font-bold py-3 mb-3">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
