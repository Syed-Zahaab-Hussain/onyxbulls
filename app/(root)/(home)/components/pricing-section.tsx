"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, CurrencyFormat } from "@/lib/utils";
import Link from "next/link";
// import { PricingPlan } from "@/sanity/lib/types"; // You'll need to define this type

export interface PricingPlan {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  description: string;
  features: string[];
  ctaText: string;
  highlightColor: string;
  order: number;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

export default function PricingSection({ plans }: PricingSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]._id);

  const currentPlan =
    plans.find((plan) => plan._id === selectedPlan) || plans[0];

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
                className={`bg-white dark:bg-black/50 rounded-xl border border-${currentPlan.highlightColor}-500/20 dark:border-${currentPlan.highlightColor}-500/30 overflow-hidden h-full shadow-[0_0_15px_rgba(var(--color-${currentPlan.highlightColor}-500),0.1)] dark:shadow-[0_0_20px_rgba(var(--color-${currentPlan.highlightColor}-500),0.15)] transition-all duration-300`}
              >
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-2">
                    {currentPlan.name}
                  </h3>
                  <div className="mb-4">
                    <span
                      className={`text-5xl font-bold text-${currentPlan.highlightColor}-600 dark:text-${currentPlan.highlightColor}-500`}
                    >
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
                          <Check
                            className={`h-6 w-6 text-${currentPlan.highlightColor}-500`}
                          />
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
                        `bg-${currentPlan.highlightColor}-500 hover:bg-${currentPlan.highlightColor}-600 text-black shadow-[0_0_15px_rgba(var(--color-${currentPlan.highlightColor}-500),0.3)] hover:shadow-[0_0_25px_rgba(var(--color-${currentPlan.highlightColor}-500),0.5)]`
                      )}
                    >
                      {currentPlan.ctaText || "Get Started"}
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
                {plans.map((plan) => (
                  <button
                    key={plan._id}
                    onClick={() => setSelectedPlan(plan._id)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all duration-300 relative overflow-hidden",
                      selectedPlan === plan._id
                        ? `bg-white dark:bg-black border border-${plan.highlightColor}-500 shadow-[0_0_15px_rgba(var(--color-${plan.highlightColor}-500),0.2)]`
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
                      {selectedPlan === plan._id && (
                        <div className="h-full">
                          <div
                            className={`h-6 w-6 rounded-full bg-${plan.highlightColor}-100 dark:bg-${plan.highlightColor}-900/50 flex items-center justify-center`}
                          >
                            <Check
                              className={`h-4 w-4 text-${plan.highlightColor}-600 dark:text-${plan.highlightColor}-500`}
                            />
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
