"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

interface BlogFilterProps {
  categories: Category[];
}

export default function BlogFilter({ categories }: BlogFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // const selectedCategory = searchParams.get("category")?.toString() || "All";
  const selectedSearch = searchParams.get("search")?.toString();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term && term !== "All") {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  // Determine if no category is selected (including when search is empty)
  const isAllSelected = !selectedSearch || selectedSearch === "All";

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">Latest Articles</h2>
        <div className="relative w-full md:w-1/4">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            type="text"
            placeholder="Search Articles..."
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
          onClick={() => handleSearch("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isAllSelected
              ? "bg-neon-500 text-black shadow-[0_0_10px_rgba(0,255,170,0.3)]"
              : "bg-gray-100 dark:bg-black/50 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-neon-500/50 dark:hover:border-neon-500/50"
          }`}
        >
          All
        </motion.button>

        {categories.map((category) => (
          <motion.button
            key={category._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSearch(category.slug?.current || "All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedSearch === category.slug?.current
                ? "bg-neon-500 text-black shadow-[0_0_10px_rgba(0,255,170,0.3)]"
                : "bg-gray-100 dark:bg-black/50 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-neon-500/50 dark:hover:border-neon-500/50"
            }`}
          >
            {category.title}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
