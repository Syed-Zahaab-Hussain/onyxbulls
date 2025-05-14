"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface Review {
  _id: string;
  name: string;
  role: string;
  location?: string;
  image?: {
    asset: {
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
  };
  comment: string;
  rating: number;
  order?: number;
}

interface AboutReviewsProps {
  reviews: Review[];
}

export default function AboutReviews({ reviews }: AboutReviewsProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Hear from our students who have transformed their trading journey
            through our education and mentorship.
          </motion.p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-end gap-4 mb-6">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>

          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                key={review._id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full border-neon-500/20 dark:border-neon-500/30 hover:shadow-[0_0_15px_rgba(0,255,170,0.2)] dark:hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {review.image?.asset?.url && (
                        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={review.image.asset.url}
                            alt={review.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-lg">{review.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {review.role}
                        </p>
                        {review.location && (
                          <p className="text-gray-500 dark:text-gray-500 text-xs">
                            {review.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="absolute top-0 left-0 h-6 w-6 text-neon-500/20 -translate-x-2 -translate-y-2" />
                      <p className="text-gray-700 dark:text-gray-300 italic mb-4 relative z-10">
                        &quot;{review.comment}&quot;
                      </p>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < (review.rating || 0)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
