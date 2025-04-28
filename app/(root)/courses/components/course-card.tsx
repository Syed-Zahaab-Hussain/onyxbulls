import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen } from "lucide-react";
import { Course } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import { CurrencyFormat } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative">
        <Link href={`/courses/${course.slug}`}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={
                course.image && urlFor(course.image).url()
                  ? urlFor(course.image).url()
                  : "https://placehold.co/600x400?text=No+Image"
              }
              alt={course.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>

      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-xs ml-auto">
            {course.level}
          </Badge>
        </div>
        <CardTitle className="group-hover:text-neon-500 transition-colors duration-300">
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-neon-500">
            <Image
              src={
                course.instructor?.image &&
                urlFor(course.instructor.image).url()
                  ? urlFor(course.instructor.image).url()
                  : "https://placehold.co/600x400?text=No+Image"
              }
              alt={course.instructor?.name || "Instructor"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-sm">{course.instructor?.name}</p>
            <p className="text-xs text-muted-foreground">
              {course.instructor?.title}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{course.lessons} lessons</span>
          </div>
        </div>

        <div className="flex w-full items-center justify-between pt-4 border-t">
          <div>
            {course.salePrice ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-neon-500">
                  {CurrencyFormat(course.salePrice)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {CurrencyFormat(course.price)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-neon-500">
                ${course.price}
              </span>
            )}
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="px-4 py-2 bg-neon-900 text-neon-100 rounded-md hover:bg-neon-800 transition-colors duration-300 text-sm font-medium"
          >
            View Course
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
