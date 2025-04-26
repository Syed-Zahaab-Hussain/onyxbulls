"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

export default function AchievementsCarousel() {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Advanced Forex Trading Certification",
      description:
        "Certified by the International Trading Association for advanced forex trading strategies and risk management.",
      date: "Issued 2023",
      image: "/images/certificate-1.jpg",
    },
    {
      id: 2,
      title: "Consistent Trading Performance",
      description:
        "Our trading strategies have consistently outperformed the market, with an average monthly return of 12.5% over the past year.",
      date: "2023 Performance",
      image: "/images/trading-result.jpg",
    },
    {
      id: 3,
      title: "Blockchain & Cryptocurrency Expert",
      description:
        "Certified by the Blockchain Council for expertise in cryptocurrency trading, blockchain technology, and DeFi strategies.",
      date: "Issued 2022",
      image: "/images/crypto-certification.jpg",
    },
    {
      id: 4,
      title: "Master Trader Award",
      description:
        "Recognized for exceptional trading performance and strategy development in volatile market conditions.",
      date: "Awarded 2023",
      image: "/images/master-trader.jpg",
    },
    {
      id: 5,
      title: "Technical Analysis Proficiency",
      description:
        "Certified expert in advanced chart patterns, indicators, and technical analysis methodologies for market prediction.",
      date: "Issued 2022",
      image: "/images/technical-analysis.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  const updateVisibleItems = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    }
  }, []);

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [updateVisibleItems]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems >= achievements.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0
        ? Math.max(0, achievements.length - visibleItems)
        : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, achievements.length - visibleItems));
  };

  return (
    <div className="relative w-full px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-neon-500/30 hover:bg-neon-900/20 hover:text-neon-400 dark:hover:bg-neon-900/30 dark:hover:text-neon-500 transition-all duration-300"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <div className="flex space-x-2">
          {achievements
            .slice(0, achievements.length - visibleItems + 1)
            .map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-neon-500"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                onClick={() => goToSlide(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-neon-500/30 hover:bg-neon-900/20 hover:text-neon-400 dark:hover:bg-neon-900/30 dark:hover:text-neon-500 transition-all duration-300"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex-none w-full md:w-1/2 lg:w-1/3 px-4"
              style={{ flex: `0 0 ${100 / visibleItems}%` }}
            >
              <div className="bg-white dark:bg-black/50 rounded-xl overflow-hidden shadow-lg border border-neon-500/20 dark:border-neon-500/30 h-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,170,0.2)] dark:hover:shadow-[0_0_20px_rgba(0,255,170,0.3)]">
                <div className="relative h-64">
                  <Image
                    src={
                      achievement.image ||
                      "https://placehold.co/600x400?text=No+Image"
                    }
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center text-neon-600 dark:text-neon-500">
                    <span className="text-sm font-medium">
                      {achievement.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button className="bg-neon-500 hover:bg-neon-600 text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,255,170,0.3)] hover:shadow-[0_0_20px_rgba(0,255,170,0.5)]">
          View All Achievements
        </Button>
      </div>
    </div>
  );
}
