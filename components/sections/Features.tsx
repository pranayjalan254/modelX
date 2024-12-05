"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Lock,
  Coins,
  Network,
  Cpu,
  Clock,
  Scale,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Transparent",
    description:
      "All transactions and model interactions are recorded on the Solana blockchain",
  },
  {
    icon: Network,
    title: "Decentralized Infrastructure",
    description:
      "Models run on a distributed network of validators, ensuring high availability",
  },
  {
    icon: Cpu,
    title: "Model Sovereignty",
    description:
      "Developers maintain full control over their AI models and pricing",
  },
  {
    icon: Clock,
    title: "Fast Settlement",
    description: "Instant payments and low fees powered by Solana's speed",
  },
  {
    icon: Scale,
    title: "Fair Economics",
    description:
      "Transparent revenue sharing between model providers and platform",
  },
  {
    icon: Coins,
    title: "Pay Per Prompt",
    description: "Only pay for the prompts you use, no subscriptions required",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
          <p className="text-muted-foreground">
            Built on Solana for maximum performance and scalability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
