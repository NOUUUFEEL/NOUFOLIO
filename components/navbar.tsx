"use client"

import { useState } from "react"
import { Menu, X, Code, Braces } from "lucide-react"
import { cn } from "@/lib/utils"
import { useActiveSection } from "@/hooks/use-active-section"
import { ScrollLink } from "@/components/scroll-link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection()
  const { t } = useLanguage()

  const navItems = [
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed w-full bg-white dark:bg-gray-950 z-50 border-b dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <ScrollLink
              href="#hero"
              className="flex items-center text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <Braces className="h-7 w-7 mr-2" />
              <Code className="h-7 w-7" />
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-all duration-300 relative",
                    activeSection === item.href.substring(1)
                      ? "text-blue-900 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400",
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-blue-900 dark:bg-blue-400 rounded-full" />
                  )}
                </ScrollLink>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button and Controls */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-b dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-all duration-300 py-2",
                    activeSection === item.href.substring(1)
                      ? "text-blue-900 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400",
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
