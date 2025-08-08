"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 dark:border-gray-600"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === "light"
              ? "rotate-0 scale-100 text-yellow-500"
              : "rotate-90 scale-0 text-gray-400"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === "dark"
              ? "rotate-0 scale-100 text-blue-400"
              : "-rotate-90 scale-0 text-gray-400"
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
} 