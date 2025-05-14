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
              ONYXBULLS began as a vision in 2022, when traders came together
              with a mission to master the financial markets and deliver real
              results. Starting with personal trading success and handling
              international clients, we consistently generated strong returns —
              and soon, demand grew for our expertise in both training and
              financial consultancy.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              In 2024, we officially launched ONYXBULLS to make our knowledge
              accessible to others. Since then, we&apos;ve trained over 30
              students — not just in theory, but in real-world, profit-driven
              trading. Our unique approach blends technical skill, risk
              management, and real-time market analysis.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, ONYXBULLS stands as the largest trading education community
              in Balochistan — trusted, growing, and delivering results. Our
              mission is simple: to empower individuals with the skills,
              mindset, and tools needed to succeed in the global forex market.
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
                src={"/images/about-image-1.jpg"}
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
