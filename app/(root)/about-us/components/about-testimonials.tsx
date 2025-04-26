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

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
}

export default function AboutTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "James Wilson",
      role: "Full-time Trader",
      location: "London, UK",
      image: "https://placehold.co/600x400?text=No+Image",
      quote:
        "The forex course completely transformed my trading. I went from consistently losing money to achieving a 67% win rate within three months. The risk management section alone was worth the investment.",
      rating: 3,
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Part-time Crypto Investor",
      location: "Madrid, Spain",
      image: "https://placehold.co/600x400?text=No+Image",
      quote:
        "As someone new to cryptocurrency, I was overwhelmed by all the information online. This course broke everything down in a way that was easy to understand, and the community support is incredible.",
      rating: 5,
    },
    {
      id: 3,
      name: "Robert Chen",
      role: "Investment Analyst",
      location: "Singapore",
      image: "https://placehold.co/600x400?text=No+Image",
      quote:
        "Even with my finance background, I learned so much from the advanced technical analysis course. The instructors don't just teach theory—they show you how to apply it in real market conditions.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sophia Johnson",
      role: "Retail Trader",
      location: "Toronto, Canada",
      image: "https://placehold.co/600x400?text=No+Image",
      quote:
        "The mentorship program was exactly what I needed to break through my trading plateau. Having a professional trader review my trades and provide feedback accelerated my learning curve dramatically.",
      rating: 5,
    },
  ];

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
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full border-neon-500/20 dark:border-neon-500/30 hover:shadow-[0_0_15px_rgba(0,255,170,0.2)] dark:hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="absolute top-0 left-0 h-6 w-6 text-neon-500/20 -translate-x-2 -translate-y-2" />
                      <p className="text-gray-700 dark:text-gray-300 italic mb-4 relative z-10">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
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
