"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMission() {
  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission & Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Dominion Markets was founded in 2015 by a team of professional
              traders who saw a gap in the market for high-quality, accessible
              trading education. What began as a small group of mentors has
              grown into a global community of traders and educators passionate
              about helping others succeed in the financial markets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our mission is simple: to demystify trading and provide students
              with the knowledge, tools, and support they need to become
              consistently profitable traders. We believe that financial markets
              should be accessible to everyone, not just institutional players.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Over the years, we&apos;ve refined our teaching methodology to
              focus on practical skills, risk management, and psychological
              resilience—the three pillars of successful trading. Our approach
              has helped thousands of students from over 50 countries transform
              their trading and achieve financial independence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-neon-500/20 dark:border-neon-500/30">
              <Image
                src="https://placehold.co/600x400?text=No+Image"
                alt="Our story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-neon-400 dark:text-neon-500 font-medium">
                    Est. 2024
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    From Vision to Reality
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
