"use client";

import { motion } from "framer-motion";
import { Wallet, Key, MessageSquare, Upload, Code, Coins } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Link your Solana wallet to access the marketplace"
  },
  {
    icon: Key,
    title: "Get Tokens",
    description: "Purchase AIMarket tokens using SOL"
  },
  {
    icon: MessageSquare,
    title: "Start Using",
    description: "Access AI models with pay-per-prompt pricing"
  }
];

const devSteps = [
  {
    icon: Code,
    title: "Build Your Model",
    description: "Create and test your AI model"
  },
  {
    icon: Upload,
    title: "Deploy Model",
    description: "Upload to our decentralized network"
  },
  {
    icon: Coins,
    title: "Earn Rewards",
    description: "Get paid in tokens for model usage"
  }
];

export default function HowItWorks() {
  const [activeView, setActiveView] = useState<'users' | 'developers'>('users');

  return (
    <section id="how-it-works" className="py-24 bg-accent/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">Choose your path in the AI marketplace</p>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="flex justify-center mb-8 lg:hidden">
          <div className="inline-flex rounded-lg border p-1 bg-muted">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveView('users')}
              className={cn(
                "relative",
                activeView === 'users' && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              For Users
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveView('developers')}
              className={cn(
                "relative",
                activeView === 'developers' && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              For Developers
            </Button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, x: activeView === 'users' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeView === 'users' ? 20 : -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeView === 'users' ? (
              <div className="relative">
                {steps.map((step, index) => (
                  <div key={index} className="relative mb-12 last:mb-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-12 bg-primary/20" />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative">
                {devSteps.map((step, index) => (
                  <div key={index} className="relative mb-12 last:mb-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    {index < devSteps.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-12 bg-primary/20" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-2 gap-16">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 text-center"
            >
              For Users
            </motion.h3>
            <div className="relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-primary/20" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 text-center"
            >
              For Developers
            </motion.h3>
            <div className="relative">
              {devSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  {index < devSteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-primary/20" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}