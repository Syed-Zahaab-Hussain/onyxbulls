import { POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { Calendar, Tag } from "lucide-react";
import AnimatedContent from "./components/animated-content";
import AnimatedHeader from "./components/animated-header";
import { DateFormat } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { cache } from "react";
import { ShareButtons } from "./components/ShareButtons";
import { notFound } from "next/navigation";

interface ParamsProps {
  slug?: string;
}

const getPost = cache(async (slug: string) => {
  const post = await client.fetch(POST_QUERY, { slug });
  // if (!post) throw new Error("Post not found");
  return post;
});

export async function generateMetadata({
  params,
}: {
  params: ParamsProps;
}): Promise<Metadata> {
  const post = await getPost(params.slug || "");
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [{ url: urlFor(post.mainImage).url() }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: ParamsProps;
}) {
  const post = await getPost(params.slug || "");

  // console.log("DANGER: ", post);

  if (!post) {
    return notFound();
  }
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <article>
        {/* Hero Section */}
        <AnimatedHeader title={post?.title} mainImage={post?.mainImage} />

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Meta Information */}
              <AnimatedContent>
                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {DateFormat(post?.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {post?.category.title}
                  </div>
                </div>
              </AnimatedContent>

              {/* Article Content */}
              <AnimatedContent delay={0.5}>
                <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
                  <PortableText value={post?.body} />
                </div>
              </AnimatedContent>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Info */}
              <AnimatedContent delay={0.6}>
                <div className="bg-gray-50 dark:bg-black/50 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-bold mb-4">About the Author</h3>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Avatar>
                        <AvatarImage
                          src={urlFor(post?.author.image).url()}
                          alt={post?.author.name}
                        />
                        <AvatarFallback>
                          {post?.author?.name?.charAt(0)?.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div>
                      <h4 className="font-bold">{post?.author.name}</h4>

                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <PortableText value={post?.author.bio} />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              {/* Share */}
              <AnimatedContent delay={0.7}>
                <div className="bg-gray-50 dark:bg-black/50 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-bold mb-4">Share this article</h3>
                  <ShareButtons title={post?.title} />
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
