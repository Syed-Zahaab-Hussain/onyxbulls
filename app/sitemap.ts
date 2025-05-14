import { Course, Post } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { COURSES_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: Post[] = await client.fetch(POSTS_QUERY, { search: "" });

  // console.log(posts);
  const courses: Course[] = await client.fetch(COURSES_QUERY, { search: "" });

  const courseEntries: MetadataRoute.Sitemap = courses.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/course/${slug}`,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug.current}`,
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
    },
    ...postEntries,
    ...courseEntries,
  ];
}
