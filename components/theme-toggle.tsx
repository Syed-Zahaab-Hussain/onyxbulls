"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until client-side hydration is complete
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full transition-colors duration-300 hover:bg-neon-900/20 dark:hover:bg-neon-400/20"
    >
      {theme === "light" ? <Sun className="text-white" /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
