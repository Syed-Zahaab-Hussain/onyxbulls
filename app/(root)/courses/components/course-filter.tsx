"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface PricingPlan {
  _id: string;
  name: string;
  slug?: string;
}

interface CourseFilterProps {
  pricingPlans: PricingPlan[];
}

export function CourseFilter({ pricingPlans }: CourseFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedSearch = searchParams.get("search")?.toString();
  const selectedPlan = searchParams.get("plan")?.toString();

  function handleFilters(searchTerm?: string, planTerm?: string) {
    const params = new URLSearchParams(searchParams);

    if (searchTerm && searchTerm !== "") {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }

    if (planTerm && planTerm !== "All") {
      params.set("plan", planTerm);
    } else {
      params.delete("plan");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const handleSearch = (term: string) => {
    handleFilters(term, selectedPlan);
  };

  const handlePlanFilter = (plan: string) => {
    handleFilters(selectedSearch, plan);
  };

  // Determine if no plan is selected
  const isAllPlanSelected = !selectedPlan || selectedPlan === "All";

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">Browse Our Courses</h2>
        <div className="relative w-full md:w-1/4">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            type="text"
            placeholder="Search Courses..."
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={selectedSearch}
            className="w-full pl-10"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePlanFilter("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isAllPlanSelected
              ? "bg-neon-500 text-black shadow-[0_0_10px_rgba(0,255,170,0.3)]"
              : "bg-gray-100 dark:bg-black/50 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-neon-500/50 dark:hover:border-neon-500/50"
          }`}
        >
          All Plans
        </motion.button>

        {pricingPlans.map((plan) => (
          <motion.button
            key={plan._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePlanFilter(plan.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedPlan === plan.name
                ? "bg-neon-500 text-black shadow-[0_0_10px_rgba(0,255,170,0.3)]"
                : "bg-gray-100 dark:bg-black/50 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-neon-500/50 dark:hover:border-neon-500/50"
            }`}
          >
            {plan.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
