"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

// EmailJS will be loaded from CDN
declare global {
  interface Window {
    emailjs: any
  }
}

export function ContactForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [emailJSLoaded, setEmailJSLoaded] = useState(false)

  // EmailJS configuration
  const SERVICE_ID = "service_zi9viub"
  const TEMPLATE_ID = "template_jt5j7b3"
  const PUBLIC_KEY = "TV1AsGl1EMIPf4aeo"

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
    script.async = true
    script.onload = () => {
      setEmailJSLoaded(true)

      try {
        window.emailjs.init(PUBLIC_KEY)
      } catch (error) {
        console.error("Error initializing EmailJS:", error)
      }
    }

    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!emailJSLoaded) {
      toast({
        title: t("messageError"),
        description: "Email service is still loading. Please try again in a moment.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare email parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Noufel",
        reply_to: formData.email,
      }

      // Send email using EmailJS direct method
      const result = await window.emailjs.send(SERVICE_ID, templateParams, PUBLIC_KEY)

      if (result.text === "OK") {
        toast({
          title: t("messageSent"),
          description: t("messageSentDescription"),
          variant: "default",
        })
        // Reset form
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: t("messageError"),
        description: t("messageErrorDescription"),
        variant: "destructive",
      })
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-blue-900 dark:focus:border-blue-400 focus:ring-blue-900 dark:focus:ring-blue-400 focus:outline-none rounded transition-all duration-300"
          placeholder={t("yourName")}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-blue-900 dark:focus:border-blue-400 focus:ring-blue-900 dark:focus:ring-blue-400 focus:outline-none rounded transition-all duration-300"
          placeholder={t("yourEmail")}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t("message")}
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-blue-900 dark:focus:border-blue-400 focus:ring-blue-900 dark:focus:ring-blue-400 focus:outline-none rounded min-h-[120px] transition-all duration-300"
            placeholder={t("yourMessage")}
          ></textarea>
          <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400">
            {formData.message.length}/1000
          </div>
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || !emailJSLoaded}
        className="w-full bg-blue-900 hover:bg-blue-800 text-white transition-all duration-300 hover:translate-y-[-2px]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t("sending")}
          </>
        ) : (
          t("sendMessage")
        )}
      </Button>
    </form>
  )
}
