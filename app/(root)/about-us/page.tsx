import AboutHero from "@/app/(root)/about-us/components/about-hero";
import AboutMission from "@/app/(root)/about-us/components/about-mission";
import AboutTeam from "@/app/(root)/about-us/components/about-team";
import AboutTestimonials from "@/app/(root)/about-us/components/about-testimonials";
import AboutStats from "@/app/(root)/about-us/components/about-stats";
import AboutApproach from "@/app/(root)/about-us/components/about-approach";
import AboutValues from "@/app/(root)/about-us/components/about-values";
import AboutCTA from "@/app/(root)/about-us/components/about-cta";
import { client } from "@/sanity/lib/client";
import { AUTHORS_QUERY } from "@/sanity/lib/queries";

export default async function AboutPage() {

    const teamMembers = await client.fetch(AUTHORS_QUERY);
  

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <AboutHero />

      <AboutMission />

      <AboutTeam teamMembers={teamMembers} />

      <AboutStats />

      <AboutTestimonials />

      <AboutApproach />

      <AboutValues />

      <AboutCTA />
    </main>
  );
}
