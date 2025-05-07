"use client"

import { Navbar } from "@/components/navbar"
import { ProjectDemoPage } from "@/components/project-demo-page"

export default function PoolRegistrationPortalDemo() {
  // Sample data - replace with your actual screenshots
  const projectData = {
    title: "Pool Registration Portal",
    description:
      "A sleek, user-friendly portal for pool facility registration, scheduling, and membership management with secure payment processing. Features real-time availability tracking, automated scheduling, and member management. Built with Laravel and MySQL for robust backend performance.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "PHP"],
    screenshots: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Login Screen",
        description: "Secure login interface for members and administrators",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Dashboard",
        description: "Member dashboard showing upcoming reservations and facility status",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Booking Calendar",
        description: "Interactive calendar for scheduling pool time and viewing availability",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Membership Management",
        description: "Administrative interface for managing memberships and access levels",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Payment Processing",
        description: "Secure payment gateway integration for membership fees",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Mobile View",
        description: "Responsive design optimized for mobile devices",
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
