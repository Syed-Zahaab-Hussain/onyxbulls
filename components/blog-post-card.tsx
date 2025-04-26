import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { DateFormat } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface Post {
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

interface BlogPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-black/50 rounded-xl shadow-md hover:shadow-lg flex flex-col h-full border border-neon-500/10 dark:border-neon-500/20"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={
            post?.mainImage && urlFor(post.mainImage).url()
              ? urlFor(post.mainImage).url()
              : "https://placehold.co/600x400?text=No+Image"
          }
          alt={post?.title ?? "Blog post image"}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          {post.publishedAt && (
            <Badge className="bg-neon-500 hover:bg-neon-500 shadow-black">
              {post.category.title}
            </Badge>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>{DateFormat(post.publishedAt)}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white line-clamp-2 group-hover:text-neon-600 dark:group-hover:text-neon-500 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post?.slug?.current}`}
          className="inline-flex items-center text-neon-600 dark:text-neon-500 font-medium hover:text-neon-700 dark:hover:text-neon-400 transition-colors mt-auto group"
        >
          Read more
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
