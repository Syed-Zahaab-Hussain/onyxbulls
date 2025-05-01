import CourseHero  from "@/app/(root)/courses/components/course-hero";
import { CourseFilter } from "@/app/(root)/courses/components/course-filter";
// import { courses } from "@/lib/types";
import AnimatedCourseCards from "./components/animated-course-cards";
import { COURSES_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

interface SearchParams {
  search?: string;
}

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { search = "" } = searchParams;

  const courses = await client.fetch(COURSES_QUERY, { search });

  console.log("DANGER: ", courses.instructor);

  return (
    <>
      <CourseHero />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Browse Our Courses</h2>

          <CourseFilter />

          <div className="mt-12">
            {<AnimatedCourseCards courses={courses} />}
          </div>
        </div>
      </section>
    </>
  );
}
