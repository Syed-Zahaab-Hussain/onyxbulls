"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

export default function ContactFAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find quick answers to common questions about our courses, payment
            options, and support services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 dark:border-gray-800"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:text-neon-600 dark:hover:text-neon-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Still have questions? Don&apos;t hesitate to reach out to our
              support team.
            </p>
            <a
              href="mailto:support@dominionmarkets.com"
              className="text-neon-600 dark:text-neon-500 font-medium hover:text-neon-700 dark:hover:text-neon-400 transition-colors"
            >
              {process.env.NEXT_PUBLIC_EMAIL!}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
