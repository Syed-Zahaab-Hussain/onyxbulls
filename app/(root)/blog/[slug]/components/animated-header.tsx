// components/AnimatedHero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export default function AnimatedHeader({
  title,
  mainImage,
}: {
  title: string;
  mainImage: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-[40vh] md:h-[50vh] bg-black"
    >
      <Image
        src={
          mainImage && urlFor(mainImage).url()
            ? urlFor(mainImage).url()
            : "https://placehold.co/600x400?text=No+Image"
        }
        alt={title || "Blog post image"}
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-neon-400 dark:text-neon-500 mb-4 hover:underline transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
              {title}
            </h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
