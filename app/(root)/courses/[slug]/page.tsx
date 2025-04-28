import CourseHeader from "./components/course-header";
import CourseContent from "./components/course-content";
import CourseSidebar from "./components/course-sidebar";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { COURSE_QUERY } from "@/sanity/lib/queries";

export default async function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug = "" } = params;
  const course = await client.fetch(COURSE_QUERY, { slug });

  if (!course) {
    return notFound();
  }

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
