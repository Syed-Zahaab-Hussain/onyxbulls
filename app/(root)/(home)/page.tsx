import StatsBar from "@/app/(root)/(home)/components/stats-bar";
import PricingSection from "@/app/(root)/(home)/components/pricing-section";
import Hero from "./components/hero-section";
import BriefInfoSection from "./components/brief-info-section";
import LatestBlogPostsSection from "./components/latest-blog-posts-section";
import AchievementsCarousel from "./components/achievements-carousel";
import { client } from "@/sanity/lib/client";
import {
  ACHIEVEMENTS_QUERY,
  PRICING_PLANS_QUERY,
  STATS_QUERY,
  TOP_THREE_POSTS_QUERY,
} from "@/sanity/lib/queries";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Home - Forex Trading Education in Pakistan",
  description: "Start your forex trading journey with Onyxbulls in Pakistan. Professional courses, expert guidance, and proven strategies to help you achieve financial freedom through trading.",
  keywords: ["forex trading pakistan", "trading courses", "financial freedom", "forex education"],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  },
  openGraph: {
    title: "Home - Forex Trading Education in Pakistan",
    description: "Start your forex trading journey with Onyxbulls in Pakistan. Professional courses, expert guidance, and proven strategies to help you achieve financial freedom through trading.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  },
};

export default async function Home() {
  const posts = await client.fetch(TOP_THREE_POSTS_QUERY);
  const stats = await client.fetch(STATS_QUERY);
  const achievements = await client.fetch(ACHIEVEMENTS_QUERY);
  const pricingPlans = await client.fetch(PRICING_PLANS_QUERY);

  return (
    <main id="main-content" className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar stats={stats} />

      {/* Achievements Carousel Section */}
      <AchievementsCarousel achievements={achievements} />

      {/* Trading Info Section */}
      <BriefInfoSection />

      {/* Pricing Plans Section */}
      <PricingSection plans={pricingPlans} />

      {/* Achievements Section */}

      {/* Latest Blog Posts Section */}
      <LatestBlogPostsSection posts={posts} />
    </main>
  );
}
