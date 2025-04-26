"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TradingEducationSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black/50 border-y border-neon-500/10 dark:border-neon-500/20 transition-colors duration-300">
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
              Master the Markets
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              Whether you&apos;re new to trading or looking to refine your
              strategy, our comprehensive education resources will help you
              navigate the complex world of forex and cryptocurrency markets.
            </p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start"
              >
                <div className="bg-neon-100 dark:bg-neon-900/30 p-2 rounded-full mr-4 text-neon-600 dark:text-neon-500">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Learn at Your Own Pace
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access on-demand courses and tutorials designed for all
                    skill levels.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start"
              >
                <div className="bg-neon-100 dark:bg-neon-900/30 p-2 rounded-full mr-4 text-neon-600 dark:text-neon-500">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Real-World Strategies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Discover proven trading techniques from experienced market
                    professionals.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-start"
              >
                <div className="bg-neon-100 dark:bg-neon-900/30 p-2 rounded-full mr-4 text-neon-600 dark:text-neon-500">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Market Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Learn to analyze market trends and make informed trading
                    decisions.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-8"
            >
              <button className="bg-neon-500 hover:bg-neon-600 text-black px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-[0_0_10px_rgba(0,255,170,0.3)] hover:shadow-[0_0_20px_rgba(0,255,170,0.5)]">
                Explore Our Courses
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="rounded-xl overflow-hidden shadow-xl border border-neon-500/20 dark:border-neon-500/30">
              <Image
                src={"/images/trading-education.jpg"}
                alt="Trading Education"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
