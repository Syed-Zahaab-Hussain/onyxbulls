import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { DateFormat } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Post } from "@/lib/types";

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post?.slug?.current}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-white dark:bg-black/50 rounded-xl shadow-md hover:shadow-lg flex flex-col h-full border border-neon-500/10 dark:border-neon-500/20 transition-transform"
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
            className="object-cover transition-transform duration-500 group-hover:scale-105"
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

          <div className="text-neon-600 dark:text-neon-500 font-medium mt-auto group-hover:text-neon-700 dark:group-hover:text-neon-400 transition-colors">
            Read more →
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
