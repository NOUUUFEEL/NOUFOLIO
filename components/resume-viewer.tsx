"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeViewerProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b dark:border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-400">Noufel Ouanoughi - Resume</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Noufel Ouanoughi</h1>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span>Toulouse, France</span>
              <span>•</span>
              <span>noufelouan@gmail.com</span>
              <span>•</span>
              <span>06 16 84 97 02</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-sm mt-1">
              <a href="https://linkedin.com/in/ouanoughi-noufel" className="text-blue-600 hover:underline">
                linkedin.com/in/ouanoughi-noufel
              </a>
              <span>•</span>
              <a href="https://nouf-portfolio.vercel.app" className="text-blue-600 hover:underline">
                nouf-portfolio.vercel.app
              </a>
              <span>•</span>
              <a href="https://github.com/NOUUUFEEL" className="text-blue-600 hover:underline">
                NOUUUFEEL
              </a>
            </div>
          </div>

          {/* About */}
          <section>
            <h2 className="text-xl font-bold border-b pb-1 mb-3 text-blue-900 dark:text-blue-400">À propos</h2>
            <p>
              Étudiant en Master's Degree in Computer Science (Data Science & IA) à CESI Toulouse, passionné par la data
              science. Recherche idéalement un stage dans la data ou l'intelligence artificielle, ou sinon en
              développement web ou logiciel, entre le 15 septembre 2025 et le 31 janvier 2026.
            </p>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-xl font-bold border-b pb-1 mb-3 text-blue-900 dark:text-blue-400">
              Expériences professionnelles
            </h2>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">Stagiaire Développeur Full Stack</h3>
                <div className="text-sm">
                  <span className="font-medium">Smart Drilling Ops</span>
                  <span className="mx-2">|</span>
                  <span>Mars 2025 – Avril 2025</span>
                </div>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Développement d'une plateforme web pour le CTH (contrôle technique hydraulique) avec Next.js et
                  FastAPI.
                </li>
                <li>Mise en place de l'authentification JWT, gestion des rôles et permissions.</li>
                <li>Génération de rapports PDF dynamiques, intégration frontend React.</li>
                <li>Structuration backend en architecture MVC, base de données PostgreSQL.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold">Stage Développeur Web Full Stack</h3>
                <div className="text-sm">
                  <span className="font-medium">Sonatrach, Hydra</span>
                  <span className="mx-2">|</span>
                  <span>Avril 2024 – Juillet 2024</span>
                </div>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Application web avec Laravel php pour soumission de dossier avec validation admin via SMTP.</li>
                <li>Sélection d'abonnement avec QR code généré.</li>
                <li>Génération automatique de PDF contenant les données utilisateur.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold border-b pb-1 mb-3 text-blue-900 dark:text-blue-400">Formation</h2>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">
                    Master's Degree in Computer Science (Data Science & IA) — Cycle Ingénieur
                  </h3>
                  <div className="text-sm font-medium">CESI Labège, France</div>
                </div>
                <div className="text-sm">Depuis Septembre 2024</div>
              </div>
              <ul className="list-disc pl-5 mt-2">
                <li>Mathématique appliquées, Algorithmique, Génie logiciel (C#), Big Data, Réseaux.</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Certification CCNA Introduction to Networks</h3>
                  <div className="text-sm font-medium">Cisco</div>
                </div>
                <div className="text-sm">Mars 2024 – Mars 2026</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Cycle Préparatoire Intégré (BTS)</h3>
                  <div className="text-sm font-medium">CESI-Exia</div>
                </div>
                <div className="text-sm">Sept 2022 – Juillet 2024</div>
              </div>
              <ul className="list-disc pl-5 mt-2">
                <li>Arduino, systèmes embarqués, développement web, traitement de signal.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Baccalauréat Mathématiques (Mention Bien)</h3>
                  <div className="text-sm font-medium">Lycée Privé Baya, Blida</div>
                </div>
                <div className="text-sm">Juillet 2022</div>
              </div>
            </div>
          </section>

          {/* Academic Projects */}
          <section>
            <h2 className="text-xl font-bold border-b pb-1 mb-3 text-blue-900 dark:text-blue-400">
              Projets académiques
            </h2>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">Employee Retention Predictor</h3>
                <div className="text-sm italic">Python, Scikit-learn, Jupyter Notebook</div>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Prédiction de l'attrition des employés dans une entreprise pharmaceutique en combinant plusieurs
                  sources de données RH.
                </li>
                <li>
                  Prétraitement avancé: fusion, encodage, imputation (KNN, Random Forest), sélection de caractéristiques
                  et mise à l'échelle.
                </li>
                <li>
                  Évaluation et comparaison de plusieurs modèles (SVM, RF, etc.) avec cross validation et hyperparameter
                  tuning.
                </li>
                <li>Interprétation des résultats pour fournir des recommandations stratégiques sur la rétention.</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">Traitement de Signal</h3>
                <div className="text-sm italic">Python, Jupyter Notebook</div>
              </div>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Communication simulée par modulations et encodages, traitement et visualisation avec NumPy et
                  Matplotlib.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">Système embarqué météo et sécurité</h3>
                <div className="text-sm italic">Arduino, Capteurs, Sécurité</div>
              </div>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Fusion d'une station météo et d'un coffre-fort sécurisé: collecte environnementale et contrôle d'accès
                  multi-niveaux.
                </li>
                <li>
                  Utilisation d'Arduino avec capteurs GPS, température, pression et interface clavier avec
                  authentification.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold">Plateforme de Postulation de Stages</h3>
                <div className="text-sm italic">Laravel, HTML/CSS/JS, SQL</div>
              </div>
              <ul className="list-disc pl-5 mt-2">
                <li>Plateforme pour candidatures et gestion de profils étudiants/entreprises.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold">Gestion de la Qualité de l'Air en France</h3>
                <div className="text-sm italic">MySQL, MCD/MLD/MPD</div>
              </div>
              <ul className="list-disc pl-5 mt-2">
                <li>Centralisation des données sur la qualité de l'air avec optimisation SQL.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-xl font-bold border-b pb-1 mb-3 text-blue-900 dark:text-blue-400">
              Compétences techniques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <span className="font-bold">Langages:</span> Python (pandas, numpy, matplotlib, scikit-learn), C/C++,
                  C#, .Net, Arduino
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Web:</span> HTML, CSS, JavaScript, Laravel (php), Next.js, React.js,
                  FastAPI
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">SGBD:</span> MySQL, Microsoft SQL Server, MongoDB
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Maths:</span> Statistiques, Probabilités, Étude de fonctions,
                  Arithmétique, Théorie des graphes
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Outils:</span> Git, GitHub, Azure DevOps
                </p>
              </div>
            </div>
          </section>

          {/* Soft Skills */}
          <section>
            <h2 className="text-xl font-bold border-b pb-1 mb-3 text-blue-900 dark:text-blue-400">Soft Skills</h2>
            <p>
              Ponctuel, résolution de problèmes, adaptabilité, travail en équipe, sens de l'organisation, autonomie,
              esprit critique, capacité d'apprentissage, gestion du temps
            </p>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xl font-bold border-b pb-1 mb-3 text-blue-900 dark:text-blue-400">Langues</h2>
            <p>Français, Anglais, Arabe</p>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-xl font-bold border-b pb-1 mb-3 text-blue-900 dark:text-blue-400">Centres d'intérêt</h2>
            <p>Sports collectifs (Football, Basketball), Voyages, Musique, Manga et Animés, Bénévolat.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
