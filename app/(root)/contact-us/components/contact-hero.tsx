"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-black/80 dark:from-black dark:to-black/90 overflow-hidden border-b border-neon-500/20 dark:border-neon-500/30 transition-colors duration-300 z-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-bg.jpg"
          alt="Contact Us"
          fill
          className="object-cover opacity-40 dark:opacity-30"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 text-white">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Get In{" "}
            <span className="text-neon-400 dark:text-neon-500">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Have questions about our courses or trading strategies? Our team is
            here to help you on your trading journey.
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
