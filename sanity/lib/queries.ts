import { defineQuery } from "next-sanity";

export const TOP_THREE_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
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
