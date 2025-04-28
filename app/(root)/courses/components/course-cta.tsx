import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CourseCTA() {
  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-900 to-black opacity-70 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful traders who have elevated their skills
            with our expert-led courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-neon-500 hover:bg-neon-600 text-black"
            >
              <Link href="/courses#featured">
                Explore Featured Courses
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-neon-500 text-neon-400 hover:bg-neon-900"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Contact an Advisor <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
