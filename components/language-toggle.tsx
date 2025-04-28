"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-blue-900 text-blue-900 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-20 transition-all duration-300 font-medium"
      aria-label={language === "en" ? "Switch to French" : "Switch to English"}
    >
      <Globe className="h-4 w-4 mr-1.5" />
      {language === "en" ? "FR" : "EN"}
    </Button>
  )
}
