"use client";

import { motion } from "framer-motion";
import AchievementsCarousel from "./achievements-carousel";

export default function AchievementsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black/50 border-y border-neon-500/10 dark:border-neon-500/20 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Achievements & Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            We pride ourselves on our expertise and proven track record in the
            trading industry. Here are some of our achievements and
            certifications that demonstrate our commitment to excellence.
          </p>
        </motion.div>

        <AchievementsCarousel />
      </div>
    </section>
  );
}
