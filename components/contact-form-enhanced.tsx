"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

declare global {
  interface Window {
    emailjs: any
  }
}

export function ContactFormEnhanced() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  })
  const [emailJSLoaded, setEmailJSLoaded] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  // EmailJS configuration
  const SERVICE_ID = "service_zi9viub"
  const TEMPLATE_ID = "template_x1ppcvq" // ✅ your working template
  const PUBLIC_KEY = "TV1AsGl1EMIPf4aeo"


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
    script.onerror = () => {
      console.error("Failed to load EmailJS script")
    }
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    if (formStatus === "success" || formStatus === "error") {
      const timer = setTimeout(() => setFormStatus("idle"), 5000)
      return () => clearTimeout(timer)
    }
  }, [formStatus])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateEmail = (email: string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.honeypot) {
      console.log("Bot detected")
      setFormData({ name: "", email: "", message: "", honeypot: "" })
      return
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: t("messageError"),
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    if (!emailJSLoaded) {
      toast({
        title: t("messageError"),
        description: "Email service is still loading. Please try again in a moment.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    setFormStatus("idle")

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Noufel",
        reply_to: formData.email,
      }

      const result = await window.emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

      if (result.text === "OK") {
        setFormStatus("success")
        toast({
          title: t("messageSent"),
          description: t("messageSentDescription"),
          variant: "default",
        })
        setFormData({ name: "", email: "", message: "", honeypot: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setFormStatus("error")
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
    <form onSubmit={handleSubmit} className="space-y-4 relative">
      <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          id="honeypot"
          name="honeypot"
          type="text"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

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
          minLength={2}
          maxLength={100}
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
            minLength={10}
            maxLength={1000}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-blue-900 dark:focus:border-blue-400 focus:ring-blue-900 dark:focus:ring-blue-400 focus:outline-none rounded min-h-[120px] transition-all duration-300"
            placeholder={t("yourMessage")}
          ></textarea>
          <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400">
            {formData.message.length}/1000
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <Button
          type="submit"
          disabled={isSubmitting || !emailJSLoaded}
          className={`flex-1 bg-blue-900 hover:bg-blue-800 text-white transition-all duration-300 hover:translate-y-[-2px] ${
            formStatus === "success" ? "bg-green-600 hover:bg-green-700" : ""
          } ${formStatus === "error" ? "bg-red-600 hover:bg-red-700" : ""}`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("sending")}
            </>
          ) : formStatus === "success" ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              {t("messageSent")}
            </>
          ) : formStatus === "error" ? (
            <>
              <AlertCircle className="mr-2 h-4 w-4" />
              {t("messageError")}
            </>
          ) : (
            t("sendMessage")
          )}
        </Button>
      </div>
    </form>
  )
}
