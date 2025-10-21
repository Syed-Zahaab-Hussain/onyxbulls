import CourseHero from "@/app/(root)/courses/components/course-hero";
import { CourseFilter } from "@/app/(root)/courses/components/course-filter";
import AnimatedCourseCards from "./components/animated-course-cards";
import { COURSES_QUERY, PRICING_PLANS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Forex Trading Courses - Professional Education in Pakistan",
  description: "Explore comprehensive forex trading courses designed for Pakistani traders. From beginner to advanced levels, learn proven strategies and gain practical trading experience with Onyxbulls.",
  keywords: ["forex courses pakistan", "trading education", "forex training", "professional trading courses", "trading strategies"],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/courses`,
  },
  openGraph: {
    title: "Forex Trading Courses - Professional Education in Pakistan",
    description: "Explore comprehensive forex trading courses designed for Pakistani traders. From beginner to advanced levels, learn proven strategies and gain practical trading experience with Onyxbulls.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses`,
  },
};

interface SearchParams {
  search?: string;
  plan?: string;
}

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { search = "", plan = "" } = searchParams;

  const courses = await client.fetch(COURSES_QUERY, { search, plan });
  const pricingPlans = await client.fetch(PRICING_PLANS_QUERY);

  return (
    <>
      <CourseHero />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <CourseFilter pricingPlans={pricingPlans} />

          <div className="mt-12">
            {<AnimatedCourseCards courses={courses} />}
          </div>
        </div>
      </section>
    </>
  );
}
