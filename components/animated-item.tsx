"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedItemProps {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right" | "up" | "down"
  delay?: string
}

export function AnimatedItem({ children, className, direction = "up", delay = "0ms" }: AnimatedItemProps) {
  const { ref, directionClass } = useScrollAnimation({ direction })

  return (
    <div
      ref={ref}
      className={cn(directionClass, "transition-all duration-700 ease-out", className)}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  )
}
