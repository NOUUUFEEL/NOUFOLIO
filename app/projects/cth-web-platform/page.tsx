"use client"

import { Navbar } from "@/components/navbar"
import { ProjectDemoPage } from "@/components/project-demo-page"

export default function CTHWebPlatformDemo() {
  // Sample data - replace with your actual screenshots
  const projectData = {
    title: "CTH Web Platform",
    description:
      "Digital platform for managing preliminary site visits and technical inspections for construction hydraulics. Features JWT-based authentication, role-based access control, dynamic form management, PDF report generation, and secure file attachment handling.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "TypeScript", "Python"],
    screenshots: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Authentication Screen",
        description: "JWT-based authentication system with role selection",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Dashboard",
        description: "Main dashboard showing pending inspections and recent activities",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Inspection Form",
        description: "Dynamic form for recording technical inspection data",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Report Generation",
        description: "Automated PDF report generation with inspection findings",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "File Management",
        description: "Secure file attachment system for documentation",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Admin Panel",
        description: "Administrative interface for user management and system configuration",
      },
    ],
  }

  return (
    <>
      <Navbar />
      <ProjectDemoPage {...projectData} />
    </>
  )
}
