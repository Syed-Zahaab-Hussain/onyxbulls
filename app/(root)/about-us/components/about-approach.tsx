"use client";

import type React from "react";

import { motion } from "framer-motion";
import { LineChart, BarChart, Lightbulb, Shield } from "lucide-react";

interface ApproachItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function AboutApproach() {
  const approaches: ApproachItem[] = [
    {
      id: 1,
      title: "Technical Analysis Mastery",
      description:
        "Learn to read charts, identify patterns, and use indicators to make data-driven trading decisions across any market condition.",
      icon: <LineChart className="h-8 w-8" />,
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Fundamental Analysis",
      description:
        "Understand how economic events, news, and market sentiment impact price movements in forex and cryptocurrency markets.",
      icon: <BarChart className="h-8 w-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      title: "Trading Psychology",
      description:
        "Develop the mental discipline and emotional control needed to execute your trading plan consistently and overcome common psychological barriers.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-yellow-500 to-amber-600",
    },
    {
      id: 4,
      title: "Risk Management",
      description:
        "Master proven risk management techniques to protect your capital and ensure long-term sustainability in your trading career.",
      icon: <Shield className="h-8 w-8" />,
      color: "from-neon-500 to-neon-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-black/50 border-y border-neon-500/10 dark:border-neon-500/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Educational Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We believe in a comprehensive approach to trading education that
            addresses all aspects of successful trading. Our methodology focuses
            on these four key pillars:
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {approaches.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white dark:bg-black/50 rounded-xl overflow-hidden shadow-lg border border-neon-500/20 dark:border-neon-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,170,0.2)] dark:hover:shadow-[0_0_20px_rgba(0,255,170,0.3)]"
            >
              <div className="p-6 flex items-start">
                <div
                  className={`flex-shrink-0 mr-4 p-3 rounded-lg bg-gradient-to-br ${item.color} text-white`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
