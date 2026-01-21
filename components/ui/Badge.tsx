"use client";

import { cn } from "@/lib/utils";
import type { BadgeProps } from "@/types";

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-[#27272a] text-[#a1a1aa] border-[#3f3f46]",
    primary: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    secondary: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    outline: "bg-transparent text-[#a1a1aa] border-[#27272a]",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
