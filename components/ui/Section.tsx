"use client";

import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types";

export default function Section({
  id,
  className,
  children,
  title,
  subtitle,
  centered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section relative", className)}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <div className={cn("mb-12", centered && "text-center")}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
