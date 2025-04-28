"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CourseHero() {
  return (
    <div className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/70 z-10"></div>
      <div className="absolute inset-0">
        <Image
          src="/images/courses/course-hero-bg.jpg"
          alt="Trading course background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Master Trading with Our{" "}
            <span className="text-neon-400">Expert Courses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Comprehensive trading education designed to take you from beginner
            to professional trader. Learn from industry experts with proven
            track records.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
