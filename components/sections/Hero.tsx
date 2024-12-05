"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Decentralized Models at Your Fingertips
            <br />
            <TypeAnimation
              sequence={[
                'GPT-4, Claude, and Gemini on-demand',
                2000,
                'Pay-per-prompt. No subscriptions',
                2000,
                'Advanced AI/ML models',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary block mt-4 text-3xl md:text-5xl"
            />
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access premium AI models through our decentralized marketplace.
            Host your own models, earn rewards, and pay only for what you use.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group">
              Start Using AI
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Host Your Models
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}