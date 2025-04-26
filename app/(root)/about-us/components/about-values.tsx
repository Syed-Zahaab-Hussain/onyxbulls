"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Value {
  id: number;
  title: string;
  description: string;
}

export default function AboutValues() {
  const values: Value[] = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We believe in honest, transparent education that prioritizes student success over profit. We only teach strategies we use ourselves.",
    },
    {
      id: 2,
      title: "Excellence",
      description:
        "We continuously refine our curriculum and teaching methods to provide the highest quality trading education available.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a supportive community where traders can learn from each other, share insights, and grow together.",
    },
    {
      id: 4,
      title: "Innovation",
      description:
        "We stay at the forefront of trading technology and strategies, ensuring our students have access to cutting-edge tools and techniques.",
    },
    {
      id: 5,
      title: "Empowerment",
      description:
        "We equip our students with the knowledge and skills to become independent, self-sufficient traders who can adapt to changing market conditions.",
    },
    {
      id: 6,
      title: "Responsibility",
      description:
        "We teach responsible trading practices that emphasize risk management, emotional discipline, and sustainable growth.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <motion.div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These principles guide everything we do, from curriculum development
            to student interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-black/50 rounded-xl p-6 border border-neon-500/20 dark:border-neon-500/30"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="bg-neon-100 dark:bg-neon-900/30 p-2 rounded-full text-neon-600 dark:text-neon-500">
                    <Check className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
