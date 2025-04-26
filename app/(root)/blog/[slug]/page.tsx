import { POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import {
  LucideFacebook,
  LucideTwitter,
  LucideLinkedin,
  LucidePencil,
  Calendar,
  Tag,
} from "lucide-react";
import AnimatedContent from "./components/animated-content";
import AnimatedHeader from "./components/animated-header";
import { DateFormat } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ParamsProps {
  slug?: string;
}

export default async function BlogPostPage({
  params,
}: {
  params: ParamsProps;
}) {
  const { slug = "" } = params;

  // console.log("SLUG: ", slug);
  const post = await client.fetch(POST_QUERY, { slug });
  console.log("DANGER: ", post?.author);

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
                          src={post?.author.avatar}
                          alt={post?.author.name}
                        />
                        <AvatarFallback>
                          {post?.author?.name?.charAt(0)?.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div>
                      <h4 className="font-bold">{post?.author.name}</h4>

                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <PortableText value={post?.author.bio} />
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              {/* Share */}
              <AnimatedContent delay={0.7}>
                <div className="bg-gray-50 dark:bg-black/50 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-bold mb-4">Share this article</h3>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                      <LucideFacebook className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                      <LucideTwitter className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                      <LucideLinkedin className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                      <LucidePencil className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
