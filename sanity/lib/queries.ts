import { defineQuery } from "next-sanity";

export const TOP_THREE_POSTS_QUERY = `*[_type == "post"][0..2] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "author": author->name,
  "category": category->{
    _id,
    title,
    slug
  },
  mainImage{
    asset->{url},
    alt
  }
}`;

export const STATS_QUERY =
  defineQuery(`*[_type == "stat"] | order(_createdAt asc) {
  _id,
  label,
  value,
  description
}`);

export const FAQS_QUERY =
  defineQuery(`*[_type == "faq"] | order(_createdAt asc) {
  _id,
  question,
  answer
}`);

export const CATEGORIES_QUERY =
  defineQuery(`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug {
    current
  },
}`);

export const AUTHORS_QUERY =
  defineQuery(`*[_type == "author"] | order(title asc) {
  _id,
  name,
  role,
  bio,
  slug {
    current
  },
   image{
    asset->{url},
    alt
  }
}`);

export const POSTS_QUERY = `*[_type == "post" && 
  (lower(title) match lower($search + "*") || 
   lower(category->title) match lower($search + "*"))] | order(publishedAt desc) {
   _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "author": author->name,
  "category": category->{
    _id,
    title,
    slug
  },
  mainImage{
    asset->{url},
    alt
  }
}`;

export const POST_QUERY = `*[_type == "post" && 
  slug.current == $slug]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "author": author->{name, bio, image},
  "category": category->{
    _id,
    title,
    slug
  },
  mainImage{
    asset->{url},
    alt
  },
  body
}[0]`;

export const COURSES_QUERY = `*[_type == "course" && 
  lower(title) match lower($search + "*") ] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  _createdAt,
  level,
  description,
  duration,
  lessons,
  salePrice,
  price,
  "instructor": instructor->{name, role, image},
  image{
    asset->{url},
    alt
  }
}`;

export const COURSE_QUERY = `*[_type == "course" && slug.current == $slug]  {
  _id,
  title,
  "slug": slug.current,
  longDescription,
  _createdAt,
  level,
  description,
  duration,
  lessons,
  salePrice,
  price,
  "instructor": instructor->{
    name,
    title,
    "image": image.asset->url
  },
 "image": image.asset->url,
 "backgroundImage": backgroundImage.asset->url,
 syllabus[]{
    title,
    lessons[]{
      title,
      duration
    }
  },
  requirements,
  includes
}[0]`;

export const ACHIEVEMENTS_QUERY = `*[_type == "achievement"] | order(_createdAt desc) {
  _id,
  title,
  _createdAt,
  year,
  image{
    asset->{url},
    alt
  }
}`;
