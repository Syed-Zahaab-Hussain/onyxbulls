"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LoadingSpinner from "@/components/loading-spinner";

export default function ContactMap() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="py-16 bg-gray-50 dark:bg-black/50 border-y border-neon-500/10 dark:border-neon-500/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visit our office in the Model Town, Pishin Stop Road, Quetta for
            in-person consultations and trading workshops.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-xl overflow-hidden shadow-lg border border-neon-500/20 dark:border-neon-500/30 h-[500px]"
        >
          {isLoading && <LoadingSpinner color="neon-500" />}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27585.84415173317!2d67.0040252!3d30.2019675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2df9c567d4d8d%3A0xcee262a097f22aab!2sONYXBULLS!5e0!3m2!1sen!2s!4v1745007742798!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Onyxbulls Office Location"
            className="filter grayscale hover:grayscale-0 transition-all duration-500"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
