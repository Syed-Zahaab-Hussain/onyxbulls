"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart, Check, Zap } from "lucide-react";

const BriefInfos = [
  {
    title: "Master the Markets",
    description:
      "Whether you're new to trading or looking to refine your strategy, our comprehensive education resources will help you navigate the complex world of forex and cryptocurrency markets.",
    items: [
      {
        icon: Check,
        title: "Learn at Your Own Pace",
        description:
          "Access on-demand courses and tutorials designed for all skill levels.",
      },
      {
        icon: Zap,
        title: "Real-World Strategies",
        description:
          "Discover proven trading techniques from experienced market professionals.",
      },
      {
        icon: BarChart,
        title: "Market Analysis",
        description:
          "Learn to analyze market trends and make informed trading decisions.",
      },
    ],
    imageSrc: "/images/home/info-section-1.jpg",
    imageAlt: "Trading Education",
    reverseLayout: false,
  },
  {
    title: "Cryptocurrency Revolution",
    description:
      "Dive into the world of digital assets with our expert guidance. Understand blockchain technology, trading strategies, and how to securely manage your crypto portfolio.",
    items: [
      {
        icon: Check,
        title: "Blockchain Fundamentals",
        description:
          "Learn the core concepts behind cryptocurrencies and how blockchain works.",
      },
      {
        icon: Zap,
        title: "Crypto Trading Strategies",
        description:
          "Master techniques for trading volatile cryptocurrency markets effectively.",
      },
      {
        icon: BarChart,
        title: "Portfolio Management",
        description:
          "Discover how to diversify and protect your digital asset investments.",
      },
    ],
    imageSrc: "/images/home/info-section-2.jpg",
    imageAlt: "Cryptocurrency Trading",
    reverseLayout: true,
  },
];

export default function BriefInfoSection() {
  return (
    <>
      {BriefInfos.map((section, index) => (
        <section
          key={index}
          className={
            "py-16 bg-gray-50 dark:bg-black/50 border-y border-neon-500/10 dark:border-neon-500/20 transition-colors duration-300"
          }
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: section.reverseLayout ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`order-2 ${
                  section.reverseLayout ? "md:order-2" : "md:order-1"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {section.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  {section.description}
                </p>

                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * (itemIndex + 1),
                      }}
                      className="flex items-start"
                    >
                      <div className="bg-neon-100 dark:bg-neon-900/30 p-2 rounded-full mr-4 text-neon-600 dark:text-neon-500">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: section.reverseLayout ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`order-1 ${
                  section.reverseLayout ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="rounded-xl overflow-hidden shadow-xl border border-neon-500/20 dark:border-neon-500/30">
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
