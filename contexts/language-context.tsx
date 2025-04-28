"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fr"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navigation and UI
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    contactMe: "Contact Me",
    viewProjects: "View Projects",
    aboutMe: "About Me",
    skillsExpertise: "Skills & Expertise",
    programmingLanguages: "Programming Languages",
    webTechnologies: "Web Technologies",
    toolsPlatforms: "Tools & Platforms",
    featuredProjects: "Featured Projects",
    viewAllProjects: "View All Projects",
    getInTouch: "Get In Touch",
    contactInformation: "Contact Information",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    downloadResume: "Download Resume",
    yourName: "Your name",
    yourEmail: "Your email",
    yourMessage: "Your message",
    code: "Code",
    demo: "Demo",
    terms: "Terms",
    privacy: "Privacy",
    allRightsReserved: "All rights reserved.",
    messageSent: "Message Sent!",
    messageSentDescription: "Thank you for your message. I'll get back to you soon.",
    messageError: "Message Failed",
    messageErrorDescription: "There was an error sending your message. Please try again.",

    // Personal Info
    fullName: "OUANOUGHI Noufel",
    jobTitle: "Computer Science Engineering Student at CESI École d'Ingénieurs, Toulouse",

    // About Section
    aboutParagraph1:
      "I'm a third-year Computer Science Engineering student at CESI École d'Ingénieurs in Toulouse. With a passion for software development, algorithm design, and system architecture, I'm building a strong foundation in computer science principles while gaining practical experience through academic projects and internships.",
    aboutParagraph2:
      "My goal is to create innovative solutions that solve real-world problems using cutting-edge technologies. I'm particularly interested in web development, artificial intelligence, and cloud computing.",

    // Contact Section
    availableFor: "I'm currently available for freelance work, internships, and collaboration opportunities.",
    location: "Toulouse, France",

    // Projects
    project1Title: "E-Commerce Platform",
    project1Description:
      "A full-stack e-commerce solution with product management, cart functionality, and payment processing.",

    project2Title: "AI Image Generator",
    project2Description: "An application that uses machine learning to generate unique images based on text prompts.",

    project3Title: "Real-time Chat Application",
    project3Description: "A scalable chat platform with real-time messaging, user authentication, and file sharing.",
  },
  fr: {
    // Navigation and UI
    about: "À Propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    contactMe: "Me Contacter",
    viewProjects: "Voir les Projets",
    aboutMe: "À Propos de Moi",
    skillsExpertise: "Compétences & Expertise",
    programmingLanguages: "Langages de Programmation",
    webTechnologies: "Technologies Web",
    toolsPlatforms: "Outils & Plateformes",
    featuredProjects: "Projets en Vedette",
    viewAllProjects: "Voir Tous les Projets",
    getInTouch: "Contactez Moi", // Changed from "Entrer en Contact" to "Contactez Moi"
    contactInformation: "Informations de Contact",
    name: "Nom",
    email: "Email",
    message: "Message",
    sendMessage: "Envoyer le Message",
    sending: "Envoi en cours...",
    downloadResume: "Télécharger CV",
    yourName: "Votre nom",
    yourEmail: "Votre email",
    yourMessage: "Votre message",
    code: "Code",
    demo: "Démo",
    terms: "Conditions",
    privacy: "Confidentialité",
    allRightsReserved: "Tous droits réservés.",
    messageSent: "Message Envoyé !",
    messageSentDescription: "Merci pour votre message. Je vous répondrai bientôt.",
    messageError: "Échec du Message",
    messageErrorDescription: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",

    // Personal Info
    fullName: "OUANOUGHI Noufel",
    jobTitle: "Étudiant en Ingénierie Informatique à CESI École d'Ingénieurs, Toulouse",

    // About Section
    aboutParagraph1:
      "Je suis étudiant en troisième année d'ingénierie informatique à CESI École d'Ingénieurs à Toulouse. Passionné par le développement logiciel, la conception d'algorithmes et l'architecture système, je construis une solide base dans les principes de l'informatique tout en acquérant une expérience pratique grâce à des projets académiques et des stages.",
    aboutParagraph2:
      "Mon objectif est de créer des solutions innovantes qui résolvent des problèmes concrets en utilisant des technologies de pointe. Je m'intéresse particulièrement au développement web, à l'intelligence artificielle et au cloud computing.",

    // Contact Section
    availableFor:
      "Je suis actuellement disponible pour des missions freelance, des stages et des opportunités de collaboration.",
    location: "Toulouse, France",

    // Projects
    project1Title: "Plateforme E-Commerce",
    project1Description:
      "Une solution e-commerce complète avec gestion des produits, fonctionnalité de panier et traitement des paiements.",

    project2Title: "Générateur d'Images IA",
    project2Description:
      "Une application qui utilise l'apprentissage automatique pour générer des images uniques basées sur des descriptions textuelles.",

    project3Title: "Application de Chat en Temps Réel",
    project3Description:
      "Une plateforme de chat évolutive avec messagerie en temps réel, authentification des utilisateurs et partage de fichiers.",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
