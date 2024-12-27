"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Laptop, Menu } from "lucide-react"; // Added Menu icon
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <a className="flex items-center space-x-2" href="/">
            <span className="font-bold sm:inline-block">Mansi Sharma</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-primary" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-primary" href="#skills">
              Skills
            </a>
            <a
              className="transition-colors hover:text-primary"
              href="#experience"
            >
              Experience
            </a>
            <a className="transition-colors hover:text-primary" href="#contact">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm" asChild>
            <a href="/Mansi_Sharma.pdf" download>
              Download Resume
            </a>
          </Button>
          {/* Hamburger menu for small screens */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 text-sm font-medium space-y-4 p-4">
          <a className="block transition-colors hover:text-primary" href="#projects">
            Projects
          </a>
          <a className="block transition-colors hover:text-primary" href="#skills">
            Skills
          </a>
          <a className="block transition-colors hover:text-primary" href="#experience">
            Experience
          </a>
          <a className="block transition-colors hover:text-primary" href="#contact">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
