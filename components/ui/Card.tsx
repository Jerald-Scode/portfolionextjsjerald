"use client";

import { cn } from "@/lib/utils";
import type { CardProps } from "@/types";

export default function Card({
  className,
  children,
  hover = true,
  gradient = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-[#27272a] bg-[#111118] p-6 overflow-hidden",
        hover && "card-hover",
        gradient && "bg-gradient-to-br from-[#111118] to-[#16161d]",
        className
      )}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
