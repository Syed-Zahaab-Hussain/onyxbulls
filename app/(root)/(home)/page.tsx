import StatsBar from "@/app/(root)/(home)/components/stats-bar";

import PricingSection from "@/app/(root)/(home)/components/pricing-section";
import Hero from "./components/hero-section";
import TradingAssetsSection from "./components/trading-assets-section";
import TradingEducationSection from "./components/trading-education-section";
import LatestBlogPostsSection from "./components/latest-blog-posts-section";
import { client } from "@/sanity/lib/client";
import { STATS_QUERY, TOP_THREE_POSTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 0;

export default async function Home() {
  const posts = await client.fetch(TOP_THREE_POSTS_QUERY);
  const stats = await client.fetch(STATS_QUERY);

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar stats={stats} />

      {/* Trading Assets Section */}
      <TradingAssetsSection />

      {/* Trading Education Section */}
      <TradingEducationSection />

      {/* Pricing Plans Section */}
      <PricingSection />

      {/* Achievements Section */}

      {/* Latest Blog Posts Section */}
      <LatestBlogPostsSection posts={posts} />
    </main>
  );
}
