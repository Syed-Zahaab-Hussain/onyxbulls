import CourseHeader from "./components/course-header";
import CourseContent from "./components/course-content";
import CourseSidebar from "./components/course-sidebar";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { COURSE_QUERY } from "@/sanity/lib/queries";
import { cache } from "react";
import { Metadata } from "next";

export const revalidate = 0;

interface ParamsProps {
  slug?: string;
}

const getCourse = cache(async (slug: string) => {
  return await client.fetch(COURSE_QUERY, { slug });
});

export async function generateMetadata({
  params,
}: {
  params: ParamsProps;
}): Promise<Metadata> {
  const course = await getCourse(params.slug || "");
  const courseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${course.slug}`;
  
  return {
    title: `${course.title} - Professional Forex Trading Course`,
    description: course.longDescription,
    keywords: [course.title, "forex course", "trading education", "pakistan", "trading strategies"],
    alternates: {
      canonical: courseUrl,
    },
    openGraph: {
      title: `${course.title} - Professional Forex Trading Course`,
      description: course.longDescription,
      url: courseUrl,
      type: "article",
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: ParamsProps;
}) {
  const course = await getCourse(params.slug || "");

  if (!course) {
    return notFound();
  }

  // console.log(course);

  return (
    <main>
      {/* Course Header */}
      <CourseHeader course={course} />

      {/* Course Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <CourseContent course={course} />
            </div>

            <div className="space-y-8">
              <CourseSidebar course={course} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
