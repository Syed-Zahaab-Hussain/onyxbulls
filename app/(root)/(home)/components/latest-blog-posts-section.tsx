"use client";

import BlogPostCard from "@/components/blog-post-card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Post {
  _id: string;
  mainImage: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  slug: {
    current: string;
  };
  category: {
    title: string;
  };
}

// const blogPosts = [
//   {
//     id: 1,
//     title: "Understanding Cryptocurrency Market Cycles",
//     excerpt:
//       "Learn how to identify and navigate the four main phases of cryptocurrency market cycles to optimize your trading strategy.",
//     image: "/images/blog/crypto-cycles.jpg",
//     category: "Cryptocurrency",
//     date: "April 5, 2023",
//     author: "Michael Chen",
//     slug: "understanding-cryptocurrency-market-cycles",
//   },
//   {
//     id: 2,
//     title: "Essential Forex Risk Management Strategies",
//     excerpt:
//       "Discover the key risk management techniques that professional forex traders use to protect their capital and maximize returns.",
//     image: "/images/blog/forex-risk.jpg",
//     category: "Forex",
//     date: "March 22, 2023",
//     author: "Sarah Johnson",
//     slug: "essential-forex-risk-management-strategies",
//   },
//   {
//     id: 3,
//     title: "Technical Analysis: Moving Averages Explained",
//     excerpt:
//       "A comprehensive guide to understanding and using moving averages to identify trends and generate trading signals.",
//     image: "/images/blog/technical-analysis.jpg",
//     category: "Technical Analysis",
//     date: "March 15, 2023",
//     author: "David Williams",
//     slug: "technical-analysis-moving-averages-explained",
//   },
// ];

export default function LatestBlogPostsSection({ posts }: { posts: Post[] }) {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, strategies, and market
            analysis from our expert traders and analysts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-neon-600 dark:text-neon-500 font-medium hover:text-neon-700 dark:hover:text-neon-400 transition-colors"
          >
            View all blog posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
