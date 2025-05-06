"use client"

import type React from "react"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
  target?: string
}

export function ScrollLink({ href, children, className, onClick, target }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an external link or has a target, don't handle the scroll behavior
    if (target === "_blank" || href.startsWith("http") || href.startsWith("mailto:")) {
      return
    }

    e.preventDefault()

    // Get the target element
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = 64 // 4rem or 64px
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight

      // Scroll to the target element
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      // Update URL hash without scrolling
      window.history.pushState(null, "", href)

      // Call the onClick handler if provided
      if (onClick) onClick()
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(className)}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  )
}
