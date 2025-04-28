"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-black text-white border-t border-neon-500/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of successful students who have taken control of
            their financial future through our comprehensive trading education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              size="lg"
              className="bg-neon-500 hover:bg-neon-600 text-black px-8 py-6 text-lg rounded-md border border-neon-400/50 shadow-[0_0_15px_rgba(0,255,170,0.3)] hover:shadow-[0_0_25px_rgba(0,255,170,0.5)] transition-all duration-300"
            >
              Explore Courses
            </Button> */}
            <Link href="/contact-us" passHref>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg bg-neon-500 hover:bg-neon-600 border-neon-500 text-black transition-all duration-300"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
