"use client";

import BlogPostCard from "@/components/blog-post-card";
import { motion } from "framer-motion";

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

export default function AnimatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16"
      >
        <h3 className="text-2xl font-medium mb-4">No posts found</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your filters or search query to find what you&apos;re
          looking for.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post, index) => (
        <motion.div
          key={post._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <BlogPostCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
}
