"use client";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import AvailableModels from "@/components/sections/AvailableModels";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className="min-h-screen bg-background text-foreground overflow-hidden">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <AvailableModels />
        <Footer />
      </main>
    </ThemeProvider>
  );
}