"use client";

import { motion } from "framer-motion";

export default function BlogHeader() {
  return (
    <section className="relative bg-gradient-to-b from-black to-black/80 dark:from-black dark:to-black/90 py-20 border-b border-neon-500/20 dark:border-neon-500/30 transition-colors duration-300">
      <div className="container mx-auto px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Trading{" "}
            <span className="text-neon-400 dark:text-neon-500">Insights</span> &
            Knowledge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8"
          >
            Expert analysis, strategies, and market insights to help you become
            a more successful trader
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-24 h-1 bg-neon-500 mx-auto"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
