"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Users, GraduationCap, Globe, Award } from "lucide-react";

interface Stat {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export default function AboutStats() {
  const stats: Stat[] = [
    {
      id: 1,
      value: "10,000+",
      label: "STUDENTS TAUGHT",
      description: "Traders from beginners to professionals",
      icon: <Users className="h-8 w-8" />,
    },
    {
      id: 2,
      value: "50+",
      label: "COUNTRIES",
      description: "Global community of traders",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      id: 3,
      value: "25+",
      label: "COURSES",
      description: "Comprehensive trading curriculum",
      icon: <GraduationCap className="h-8 w-8" />,
    },
    {
      id: 4,
      value: "15+",
      label: "INDUSTRY AWARDS",
      description: "Recognized for educational excellence",
      icon: <Award className="h-8 w-8" />,
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <motion.div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact By The Numbers
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Since 2015, we&apos;ve been dedicated to transforming traders&apos;
            lives through education and mentorship. Here&apos;s what we&apos;ve
            accomplished so far.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 border border-neon-500/30 rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center bg-neon-900/30 p-4 rounded-full mb-4 text-neon-500">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 text-neon-400 dark:text-neon-500">
                {stat.value}
              </div>
              <div className="text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-neon-500/70 dark:text-neon-400/70">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
