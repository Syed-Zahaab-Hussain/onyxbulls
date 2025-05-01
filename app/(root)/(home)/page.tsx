import StatsBar from "@/app/(root)/(home)/components/stats-bar";
import PricingSection from "@/app/(root)/(home)/components/pricing-section";
import Hero from "./components/hero-section";
import BriefInfoSection from "./components/brief-info-section";
import LatestBlogPostsSection from "./components/latest-blog-posts-section";
import AchievementsCarousel from "./components/achievements-carousel";
import { client } from "@/sanity/lib/client";
import {
  ACHIEVEMENTS_QUERY,
  STATS_QUERY,
  TOP_THREE_POSTS_QUERY,
} from "@/sanity/lib/queries";

export const revalidate = 0;

export default async function Home() {
  const posts = await client.fetch(TOP_THREE_POSTS_QUERY);
  const stats = await client.fetch(STATS_QUERY);
  const achievements = await client.fetch(ACHIEVEMENTS_QUERY);

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar stats={stats} />

      {/* Achievements Carousel Section */}
      <AchievementsCarousel achievements={achievements} />

      {/* Trading Info Section */}
      <BriefInfoSection />

      {/* Pricing Plans Section */}
      <PricingSection />

      {/* Achievements Section */}

      {/* Latest Blog Posts Section */}
      <LatestBlogPostsSection posts={posts} />
    </main>
  );
}
