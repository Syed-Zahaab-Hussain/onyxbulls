"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-black/80 dark:from-black dark:to-black/90 overflow-hidden border-b border-neon-500/20 dark:border-neon-500/30 transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-bg.jpg"
          alt="Trading background with jets"
          fill
          className="object-cover opacity-40 dark:opacity-30"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 text-white text-center uppercase">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-medium mb-2 text-neon-400 dark:text-neon-500"
        >
          Let every trade
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
        >
          bring you closer to
          <br />
          <span className="text-neon-400 dark:text-neon-500">
            financial freedom
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
