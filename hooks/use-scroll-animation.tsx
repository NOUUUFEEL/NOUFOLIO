"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationProps {
  threshold?: number
  rootMargin?: string
  direction?: "left" | "right" | "up" | "down"
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  direction = "up",
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on intersection
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin])

  const getDirectionClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "left":
          return "opacity-0 -translate-x-10"
        case "right":
          return "opacity-0 translate-x-10"
        case "up":
          return "opacity-0 translate-y-10"
        case "down":
          return "opacity-0 -translate-y-10"
        default:
          return "opacity-0"
      }
    }

    return "opacity-100 translate-x-0 translate-y-0"
  }

  return { ref, isVisible, directionClass: getDirectionClass() }
}
