"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, CurrencyFormat } from "@/lib/utils";
import Link from "next/link";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
}

export default function PricingSection() {
  const pricingPlans: PricingPlan[] = [
    {
      id: "starter",
      name: "Starter",
      price: 10000,
      description:
        "Perfect for beginners looking to learn the fundamentals of trading.",
      features: [
        "Basic trading courses",
        "Weekly market analysis",
        "Trading basics e-book",
        "Email support",
        "Community forum access",
      ],
      cta: "Get Started",
    },
    {
      id: "professional",
      name: "Professional",
      price: 20000,
      description:
        "Comprehensive training for serious traders looking to improve their skills.",
      features: [
        "All Starter features",
        "Advanced trading strategies",
        "Live weekly webinars",
        "Trading signals (5 per week)",
        "1-on-1 coaching session (monthly)",
        "Priority email support",
        "Trading simulator access",
      ],
      cta: "Join Pro",
    },
    {
      id: "elite",
      name: "Elite",
      price: 30000,
      description:
        "For dedicated traders seeking mastery and personalized guidance.",
      features: [
        "All Professional features",
        "Expert trading masterclasses",
        "Daily trading signals",
        "Weekly 1-on-1 coaching",
        "Private strategy sessions",
        "Direct phone support",
        "Proprietary trading tools",
        "Funded account opportunity",
      ],
      cta: "Join Elite",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[0].id);

  const currentPlan =
    pricingPlans.find((plan) => plan.id === selectedPlan) || pricingPlans[0];

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Trading Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select the plan that best fits your trading goals and experience
            level. All plans include access to our community and ongoing
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 max-w-6xl w-full mx-auto items-start">
          {/* Plan Details (Left Side - 3 columns on desktop) */}
          <div className="md:col-span-3 order-2 md:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlan}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-black/50 rounded-xl border border-neon-500/20 dark:border-neon-500/30 overflow-hidden h-full shadow-[0_0_15px_rgba(0,255,170,0.1)] dark:shadow-[0_0_20px_rgba(0,255,170,0.15)] transition-all duration-300"
              >
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2">
                    {currentPlan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-neon-600 dark:text-neon-500">
                      {CurrencyFormat(currentPlan.price)}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">
                      /month
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                    {currentPlan.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {currentPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <Check className="h-6 w-6 text-neon-500" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-lg">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href={"/contact-us"}>
                    <Button
                      className={cn(
                        "w-full py-6 text-lg transition-all duration-300",
                        "bg-neon-500 hover:bg-neon-600 text-black shadow-[0_0_15px_rgba(0,255,170,0.3)] hover:shadow-[0_0_25px_rgba(0,255,170,0.5)]"
                      )}
                    >
                      {currentPlan.cta}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Plan Selection (Right Side - 2 columns on desktop) */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="bg-gray-50 dark:bg-black/50 rounded-xl p-6 h-full border border-neon-500/20 dark:border-neon-500/30 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                Select Your Plan
              </h3>
              <div className="space-y-4">
                {pricingPlans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all duration-300 relative overflow-hidden",
                      selectedPlan === plan.id
                        ? "bg-white dark:bg-black border border-neon-500 shadow-[0_0_15px_rgba(0,255,170,0.2)]"
                        : "bg-white dark:bg-black/30 border border-gray-200 dark:border-gray-800 hover:border-neon-300 dark:hover:border-neon-700"
                    )}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-lg">{plan.name}</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          {CurrencyFormat(plan.price)}/month
                        </p>
                      </div>
                      {selectedPlan === plan.id && (
                        <div className="h-full">
                          <div className="h-6 w-6 rounded-full bg-neon-100 dark:bg-neon-900/50 flex items-center justify-center">
                            <Check className="h-4 w-4 text-neon-600 dark:text-neon-500" />
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
