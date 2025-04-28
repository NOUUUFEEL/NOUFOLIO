"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  direction?: "left" | "right" | "up" | "down"
  delay?: number
}

export function AnimatedSection({ children, className, id, direction = "up", delay = 0 }: AnimatedSectionProps) {
  const { ref, directionClass } = useScrollAnimation({ direction })

  return (
    <section
      id={id}
      ref={ref}
      className={cn(directionClass, "transition-all duration-700 ease-out", delay && `delay-${delay}`, className)}
    >
      {children}
    </section>
  )
}
