"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";
import { personalInfo } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-indigo-500/10 to-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Animated blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">{personalInfo.availability}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-[#a1a1aa] mb-10 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;m always excited to
            discuss new opportunities, interesting projects, or potential
            collaborations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Get in Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
