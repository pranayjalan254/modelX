"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="ModelX Logo"
              width={32}
              height={32}
              className="text-primary"
            />
            <span className="text-xl font-bold">ModelX</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#benefits"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Benefits
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              How it Works
            </a>
            <a
              href="#models"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Models
            </a>
            <Button
              variant="outline"
              className="border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
