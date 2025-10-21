import AboutHero from "@/app/(root)/about-us/components/about-hero";
import AboutMission from "@/app/(root)/about-us/components/about-mission";
import AboutTeam from "@/app/(root)/about-us/components/about-team";
import AboutReviews from "@/app/(root)/about-us/components/about-reviews";
import AboutStats from "@/app/(root)/about-us/components/about-stats";
import AboutApproach from "@/app/(root)/about-us/components/about-approach";
import AboutValues from "@/app/(root)/about-us/components/about-values";
import AboutCTA from "@/app/(root)/about-us/components/about-cta";
import { client } from "@/sanity/lib/client";
import { AUTHORS_QUERY, REVIEWS_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "About Us - Our Mission to Empower Traders in Pakistan",
  description: "Learn about Onyxbulls' mission to provide quality forex trading education in Pakistan. Meet our expert team and discover our approach to helping traders achieve financial freedom.",
  keywords: ["about onyxbulls", "forex education pakistan", "trading team", "trading mission"],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
  },
  openGraph: {
    title: "About Us - Our Mission to Empower Traders in Pakistan",
    description: "Learn about Onyxbulls' mission to provide quality forex trading education in Pakistan. Meet our expert team and discover our approach to helping traders achieve financial freedom.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
  },
};

export default async function AboutPage() {
  const teamMembers = await client.fetch(AUTHORS_QUERY);
  const reviews = await client.fetch(REVIEWS_QUERY);

  return (
    <main id="main-content" className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <AboutHero />

      <AboutMission />

      <AboutTeam teamMembers={teamMembers} />

      <AboutStats />

      <AboutReviews reviews={reviews} />

      <AboutApproach />

      <AboutValues />

      <AboutCTA />
    </main>
  );
}
