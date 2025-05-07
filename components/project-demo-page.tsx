"use client"

import { useState } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollLink } from "@/components/scroll-link"
import { useLanguage } from "@/contexts/language-context"

interface ProjectDemoPageProps {
  title: string
  description: string
  technologies: string[]
  screenshots: {
    src: string
    alt: string
    description: string
  }[]
}

export function ProjectDemoPage({ title, description, technologies, screenshots }: ProjectDemoPageProps) {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <ScrollLink
            href="/#projects"
            className="inline-flex items-center text-blue-900 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("backToProjects")}
          </ScrollLink>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-400 mb-4">{title}</h1>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 text-blue-900 dark:text-blue-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-400 mb-4">{t("projectScreenshots")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="border dark:border-gray-700 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={screenshot.src || "/placeholder.svg"}
                    alt={screenshot.alt}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm text-gray-700 dark:text-gray-300">{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative">
              <img
                src={screenshots[currentImageIndex].src || "/placeholder.svg"}
                alt={screenshots[currentImageIndex].alt}
                className="max-h-[80vh] mx-auto object-contain"
              />

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>

            <div className="text-center mt-4 text-white">
              <p className="text-lg font-medium">{screenshots[currentImageIndex].description}</p>
              <p className="text-sm text-gray-300 mt-1">
                {currentImageIndex + 1} / {screenshots.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
