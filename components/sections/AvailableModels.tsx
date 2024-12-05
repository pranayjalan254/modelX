"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const models = [
  {
    name: "GPT-4",
    description: "Advanced language model for complex tasks",
    pricePerPrompt: "0.001",
    features: ["Text Generation", "Code Analysis"],
  },
  {
    name: "Claude",
    description: "Specialized in detailed analysis and reasoning",
    pricePerPrompt: "0.0008",
    features: ["Long Context", "Technical Writing", "Research"],
  },
  {
    name: "Gemini Pro",
    description: "Multi-modal AI with advanced capabilities",
    pricePerPrompt: "0.0012",
    features: ["Image Analysis", "Code Generation"],
  },
];

export default function AvailableModels() {
  return (
    <section id="models" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Available Models</h2>
          <p className="text-muted-foreground">
            Choose from our selection of premium AI models
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle>{model.name}</CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <span className="text-2xl font-bold">
                        {model.pricePerPrompt}
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        tokens/prompt
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {model.features.map((feature, i) => (
                        <Badge key={i} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Try {model.name}</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
