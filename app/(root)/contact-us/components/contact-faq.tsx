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
  // const faqs: FAQ[] = [
  //   {
  //     question: "How do I enroll in a trading course?",
  //     answer:
  //       "You can enroll in our trading courses by visiting the Courses page, selecting your desired course, and clicking the 'Enroll Now' button. You'll be guided through our secure checkout process, and once payment is confirmed, you'll receive immediate access to the course materials.",
  //   },
  //   {
  //     question: "What payment methods do you accept?",
  //     answer:
  //       "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and cryptocurrency payments (Bitcoin, Ethereum, and USDT). For corporate training or group enrollments, we also offer wire transfer options.",
  //   },
  //   {
  //     question: "Do you offer refunds if I'm not satisfied with the course?",
  //     answer:
  //       "Yes, we offer a 14-day money-back guarantee for all our courses. If you're not satisfied with the content, you can request a full refund within 14 days of purchase, provided you haven't completed more than 30% of the course material.",
  //   },
  //   {
  //     question: "How long do I have access to the course materials?",
  //     answer:
  //       "Once enrolled, you have lifetime access to the course materials, including any future updates. This allows you to learn at your own pace and revisit the content whenever you need a refresher.",
  //   },
  //   {
  //     question: "Do you offer one-on-one mentoring?",
  //     answer:
  //       "Yes, we offer personalized mentoring sessions with our expert traders. These can be booked separately from our courses through the Mentoring page. We recommend completing at least one of our foundational courses before booking a mentoring session to maximize the value of your one-on-one time.",
  //   },
  //   {
  //     question: "Are your courses suitable for complete beginners?",
  //     answer:
  //       "We have courses designed specifically for beginners with no prior trading experience. Our 'Trading Fundamentals' course is the perfect starting point, covering all the basics you need to understand the financial markets and begin your trading journey.",
  //   },
  // ];

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
              {process.env.EMAIL!}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
