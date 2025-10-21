import { CATEGORIES_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import AnimatedPosts from "./components/animated-posts";
import BlogHeader from "./components/blog-header";
import BlogFilter from "./components/blog-filter";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Forex Trading Blog - Insights & Strategies for Pakistani Traders",
  description: "Discover expert forex trading insights, market analysis, and proven strategies tailored for traders in Pakistan. Stay updated with the latest trends and tips from Onyxbulls experts.",
  keywords: ["forex blog pakistan", "trading insights", "market analysis", "trading strategies", "forex tips"],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  },
  openGraph: {
    title: "Forex Trading Blog - Insights & Strategies for Pakistani Traders",
    description: "Discover expert forex trading insights, market analysis, and proven strategies tailored for traders in Pakistan. Stay updated with the latest trends and tips from Onyxbulls experts.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  },
};

interface SearchParams {
  search?: string;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { search = "" } = searchParams;

  const categories = await client.fetch(CATEGORIES_QUERY);
  const posts = await client.fetch(POSTS_QUERY, { search });


  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <BlogHeader />

      <section className="container mx-auto px-4 py-12">
        <BlogFilter categories={categories} />

        <div className="mt-12">{<AnimatedPosts posts={posts} />}</div>
      </section>
    </main>
  );
}
