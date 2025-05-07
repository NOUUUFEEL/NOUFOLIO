"use client"

import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"
import { ResumeViewer } from "@/components/resume-viewer"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedItem } from "@/components/animated-item"
import { Navbar } from "@/components/navbar"
import { ScrollLink } from "@/components/scroll-link"
import { ContactFormEnhanced } from "@/components/contact-form-enhanced"
import Image from "next/image"

export default function Home() {
  const { t } = useLanguage()
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  // Make each section take full screen height
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      section.classList.add("min-h-screen", "flex", "flex-col", "justify-center")
    })
  }, [])

  const projects = [
    {
      title: "Pool Registration Portal",
      description:
        "A sleek, user-friendly portal for pool facility registration, scheduling, and membership management with secure payment processing. Features real-time availability tracking, automated scheduling, and member management. Built with Laravel and MySQL for robust backend performance.",
      image:
        "https://images.pexels.com/photos/260598/pexels-photo-260598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      codeLink: "#",
      demoLink: "/projects/pool-registration-portal",
    },
    {
      title: "Employee Retention Predictor",
      description:
        "ML-powered tool analyzing employee attrition in pharmaceutical companies. Uses classification models to predict turnover and provide actionable retention insights. Features KNN imputation for missing data, robust feature scaling, and comprehensive model evaluation.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      codeLink: "https://github.com/NOUUUFEEL/Employee-Retention-Predictor",
      demoLink:
        "https://hub.2i2c.mybinder.org/user/nouuufeel-emplo-ntion-predictor-7hf09zip/lab/tree/AI%20DELIVERABLE%20FINAL.ipynb",
    },
    {
      title: "CTH Web Platform",
      description:
        "Digital platform for managing preliminary site visits and technical inspections for construction hydraulics. Features JWT-based authentication, role-based access control, dynamic form management, PDF report generation, and secure file attachment handling.",
      image:
        "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Next.js", "FastAPI", "PostgreSQL"],
      codeLink: "#",
      demoLink: "/projects/cth-web-platform",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        <AnimatedSection id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedItem direction="left" className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-blue-400 leading-tight">
                  {t("fullName")}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">{t("jobTitle")}</p>
                <div className="flex flex-wrap gap-4">
                  <ScrollLink href="#contact">
                    <Button className="bg-blue-900 hover:bg-blue-800 text-white transition-colors duration-300">
                      {t("contactMe")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </ScrollLink>
                  <ScrollLink href="#projects">
                    <Button
                      variant="outline"
                      className="border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-20 transition-colors duration-300"
                    >
                      {t("viewProjects")}
                    </Button>
                  </ScrollLink>
                </div>
              </AnimatedItem>
              <AnimatedItem direction="right" className="flex justify-end">
                <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/profile-image.png"
                    alt="Profile Image"
                    width={320}
                    height={320}
                    className="object-cover"
                    priority
                  />
                </div>
              </AnimatedItem>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="about"
          className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center"
          direction="right"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-8">{t("aboutMe")}</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="transition-all duration-300 hover:translate-x-1">{t("aboutParagraph1")}</p>
                <p className="transition-all duration-300 hover:translate-x-1">{t("aboutParagraph2")}</p>
                <div className="pt-6">
                  <Button
                    variant="outline"
                    className="border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-20 transition-all duration-300 hover:translate-y-[-2px]"
                    onClick={() => setIsResumeOpen(true)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t("downloadResume")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="py-16 md:py-24 min-h-screen flex items-center" direction="left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-8">{t("skillsExpertise")}</h2>

              <div className="space-y-8">
                <AnimatedItem delay="100ms">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">
                    {t("programmingLanguages")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      JavaScript
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      Python
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      C
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      C++
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      C#
                    </Badge>
                  </div>
                </AnimatedItem>

                <AnimatedItem delay="200ms">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">{t("webTechnologies")}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      React
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      Next.js
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      Node.js
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      FastAPI
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      Laravel PHP
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      HTML/CSS
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      Tailwind CSS
                    </Badge>
                  </div>
                </AnimatedItem>

                <AnimatedItem delay="300ms">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">{t("toolsPlatforms")}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      Git
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      Azure
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 dark:hover:bg-opacity-40 transition-colors duration-300">
                      CI/CD
                    </Badge>
                  </div>
                </AnimatedItem>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="projects"
          className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center"
          direction="right"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-8 text-center">
              {t("featuredProjects")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedItem key={index} delay={`${(index + 1) * 100}ms`}>
                  <Card className="flex flex-col h-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <ScrollLink href={project.codeLink} target="_blank">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-20 transition-all duration-300 hover:translate-y-[-2px]"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            {t("code")}
                          </Button>
                        </ScrollLink>
                        <ScrollLink href={project.demoLink} target="_blank">
                          <Button
                            size="sm"
                            className="bg-blue-900 hover:bg-blue-800 text-white transition-all duration-300 hover:translate-y-[-2px]"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {t("demo")}
                          </Button>
                        </ScrollLink>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedItem>
              ))}
            </div>

            <div className="text-center mt-12">
              <ScrollLink href="#">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white transition-all duration-300 hover:translate-y-[-2px]">
                  {t("viewAllProjects")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ScrollLink>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="py-16 md:py-24 min-h-screen flex items-center" direction="up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-8 text-center">
                {t("getInTouch")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <AnimatedItem direction="left">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">{t("contactInformation")}</h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>{t("availableFor")}</p>
                    <div className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
                      <Mail className="h-5 w-5 text-blue-900 dark:text-blue-400" />
                      <span>noufelouan@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 transition-transform duration-300 hover:translate-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-900 dark:text-blue-400"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{t("location")}</span>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-6">
                    <ScrollLink href="https://github.com/NOUUUFEEL" target="_blank">
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="GitHub"
                        className="border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </ScrollLink>
                    <ScrollLink href="www.linkedin.com/in/ouanoughi-noufel09" target="_blank">
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="LinkedIn"
                        className="border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </ScrollLink>
                    <ScrollLink href="mailto:noufelouan@gmail.com">
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Email"
                        className="border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
                      >
                        <Mail className="h-5 w-5" />
                      </Button>
                    </ScrollLink>
                  </div>
                </AnimatedItem>

                <AnimatedItem direction="right">
                  <ContactFormEnhanced />
                </AnimatedItem>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900 py-8 border-t dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">OUANOUGHI Noufel © 2025</p>
          </div>
        </div>
      </footer>
      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  )
}
