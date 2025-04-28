"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recipient: "noufelouan@gmail.com", // The email address messages will be sent to
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: t("messageSent"),
          description: t("messageSentDescription"),
          variant: "default",
        })
        // Reset form
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error(data.error || "Failed to send message")
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
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-blue-900 dark:focus:border-blue-400 focus:ring-blue-900 dark:focus:ring-blue-400 focus:outline-none rounded min-h-[120px] transition-all duration-300"
          placeholder={t("yourMessage")}
        ></textarea>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-900 hover:bg-blue-800 text-white transition-all duration-300 hover:translate-y-[-2px]"
      >
        {isSubmitting ? t("sending") : t("sendMessage")}
      </Button>
    </form>
  )
}
