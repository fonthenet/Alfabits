export type Project = {
  id: string
  titleEn: string
  titleFr: string
  titleAr: string
  descEn: string
  descFr: string
  descAr: string
  longDescEn: string
  longDescFr: string
  longDescAr: string
  category: "web" | "mobile" | "ai" | "automation"
  color: string
  techStack: string[]
  year: string
  clientEn: string
  clientFr: string
  clientAr: string
  url?: string
}

export const projects: Project[] = [
  {
    id: "alfitrade-warehouse",
    titleEn: "Alfitrade Warehouse",
    titleFr: "Alfitrade Warehouse",
    titleAr: "\u0623\u0644\u0641\u0627\u062A\u0631\u064A\u062F \u0644\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A",
    descEn:
      "Web and mobile warehouse automation app for inventory, orders, and logistics.",
    descFr:
      "Application web et mobile d'automatisation d'entrepôt pour stocks, commandes et logistique.",
    descAr:
      "\u062A\u0637\u0628\u064A\u0642 \u0648\u064A\u0628 \u0648\u0645\u0648\u0628\u0627\u064A\u0644 \u0644\u062A\u0634\u063A\u064A\u0644 \u0622\u0644\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A \u0648\u0627\u0644\u0645\u062E\u0632\u0648\u062F \u0648\u0627\u0644\u0644\u0648\u062C\u0633\u062A\u064A\u0627\u062A.",
    longDescEn:
      "A full-stack warehouse automation platform delivered as both a web app and native mobile app. It streamlines inventory management, order processing, barcode scanning, and logistics tracking so teams can manage stock levels, fulfill orders, and coordinate shipments from a single system.",
    longDescFr:
      "Une plateforme d'automatisation d'entrepôt full-stack en web et mobile. Gestion des stocks, traitement des commandes, scan de codes-barres et suivi logistique pour une gestion unifiée.",
    longDescAr:
      "\u0645\u0646\u0635\u0629 \u062A\u0634\u063A\u064A\u0644 \u0622\u0644\u064A \u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0648\u064A\u0628 \u0648\u0645\u0648\u0628\u0627\u064A\u0644 \u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u0632\u0648\u062F \u0648\u0627\u0644\u0637\u0644\u0628\u064A\u0627\u062A \u0648\u0627\u0644\u0644\u0648\u062C\u0633\u062A\u064A\u0627\u062A.",
    category: "automation",
    color: "from-primary/20 to-primary/5",
    techStack: ["React", "React Native", "Node.js", "PostgreSQL"],
    year: "2018",
    clientEn: "Alfitrade",
    clientFr: "Alfitrade",
    clientAr: "\u0623\u0644\u0641\u0627\u062A\u0631\u064A\u062F",
  },
  {
    id: "bluebath",
    titleEn: "Bluebath.com",
    titleFr: "Bluebath.com",
    titleAr: "Bluebath.com",
    descEn:
      "Corporate website for Bluebath with modern design and responsive layout.",
    descFr:
      "Site web corporate pour Bluebath avec design moderne et mise en page responsive.",
    descAr:
      "\u0645\u0648\u0642\u0639 \u0634\u0631\u0643\u0629 \u0644\u0628\u0644\u0648\u0628\u0627\u062B \u0628\u062A\u0635\u0645\u064A\u0645 \u062D\u062F\u064A\u062B \u0648\u0627\u0633\u062A\u0627\u0639\u0627\u0628 \u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0639\u0631\u0636.",
    longDescEn:
      "A responsive, modern website for Bluebath built to showcase the brand and services. The site delivers a clean user experience across devices with fast loading, clear navigation, and a professional aesthetic tailored to the client's identity.",
    longDescFr:
      "Site web responsive et moderne pour Bluebath : identité de marque, présentation des services, navigation claire et expérience utilisateur optimale sur tous les appareils.",
    longDescAr:
      "\u0645\u0648\u0642\u0639 \u0648\u064A\u0628 \u0633\u0631\u064A\u0639 \u0648\u0645\u062A\u0639\u0627\u0645\u0644 \u0644\u0628\u0644\u0648\u0628\u0627\u062B \u0644\u0639\u0631\u0636 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0645\u0639 \u062a\u062c\u0631\u0628\u0629 \u0645\u0628\u0633\u0637\u0629.",
    category: "web",
    color: "from-blue-500/20 to-blue-500/5",
    techStack: ["HTML/CSS", "JavaScript", "Responsive Design"],
    year: "2019",
    clientEn: "Bluebath",
    clientFr: "Bluebath",
    clientAr: "Bluebath",
    url: "https://bluebath.com",
  },
  {
    id: "orange-coast-title",
    titleEn: "Orange Coast Title",
    titleFr: "Orange Coast Title",
    titleAr: "Orange Coast Title",
    descEn:
      "App and website for title and escrow services, streamlining real estate workflows.",
    descFr:
      "Application et site web pour services de titres et d'escrow, simplification des processus immobiliers.",
    descAr:
      "\u062A\u0637\u0628\u064A\u0642 \u0648\u0645\u0648\u0642\u0639 \u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646 \u0648\u0627\u0644\u0627\u0633\u0643\u0631\u0648 \u0644\u062A\u0633\u0647\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629.",
    longDescEn:
      "A combined web platform and mobile app for Orange Coast Title, supporting title search, escrow management, and document handling for real estate transactions. The solution helps agents and clients track deals and complete paperwork in one place.",
    longDescFr:
      "Plateforme web et application mobile pour Orange Coast Title : recherche de titres, gestion d'escrow et documents pour transactions immobilières. Suivi des dossiers et finalisation des actes en un seul endroit.",
    longDescAr:
      "\u0645\u0646\u0638\u0648\u0645\u0629 \u0648\u064A\u0628 \u0648\u062A\u0637\u0628\u064A\u0642 \u0645\u0648\u0628\u0627\u064A\u0644 \u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646 \u0648\u0627\u0644\u0627\u0633\u0643\u0631\u0648 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0641\u064A \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629.",
    category: "web",
    color: "from-amber-500/20 to-amber-500/5",
    techStack: ["React", "Node.js", "PostgreSQL", "REST API"],
    year: "2020",
    clientEn: "Orange Coast Title",
    clientFr: "Orange Coast Title",
    clientAr: "Orange Coast Title",
  },
  {
    id: "tendi",
    titleEn: "Tendi",
    titleFr: "Tendi",
    titleAr: "\u062A\u064A\u0646\u062F\u064A",
    descEn:
      "AI-powered personal financial advisor app and website. Plan, track, and achieve your money goals.",
    descFr:
      "Application et site web de conseiller financier personnel alimenté par l'IA. Planifiez et atteignez vos objectifs financiers.",
    descAr:
      "\u062A\u0637\u0628\u064A\u0642 \u0648\u0645\u0648\u0642\u0639 \u0645\u0633\u062A\u0634\u0627\u0631 \u0645\u0627\u0644\u064A \u0634\u062E\u0645\u064A \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A. \u0627\u0644\u062a\u062e\u0637\u064a\u0637 \u0648\u0627\u0644\u0645\u0624\u0627\u0634\u0631\u0627\u062a \u0648\u0627\u0644\u0623\u0647\u062F\u0627\u0641 \u0627\u0644\u0645\u0627\u0644\u064A\u0629.",
    longDescEn:
      "Tendi is an AI-powered personal financial advisor available as a web app and mobile app. It helps users understand, plan, and achieve their financial goals—from paying off debt to saving for the future. Tendi connects to over 12,000 financial institutions, offers a Financial Health Index (FHI), and delivers personalized advice. The AI model is trained on personal finance and performs at Certified Financial Planner® level.",
    longDescFr:
      "Tendi est un conseiller financier personnel alimenté par l'IA, disponible en web et mobile. Il aide à comprendre, planifier et atteindre ses objectifs financiers, avec connexion à plus de 12 000 institutions, un Indice de Santé Financière (FHI) et des conseils personnalisés. Le modèle IA est formé à la finance personnelle au niveau Certified Financial Planner®.",
    longDescAr:
      "\u062A\u064A\u0646\u062F\u064A \u0645\u0633\u062A\u0634\u0627\u0631 \u0645\u0627\u0644\u064A \u0634\u062E\u0645\u064A \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0645\u062A\u0648\u0641\u0631 \u0641\u064A \u0627\u0644\u0648\u064A\u0628 \u0648\u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644. \u064a\u0633\u0627\u0639\u062f \u0641\u064a \u0641\u0647\u0645 \u0627\u0644\u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0648\u062a\u062d\u0642\u064a\u0642\u0647\u0627 \u0645\u0639 \u0627\u062a\u0635\u0627\u0644 \u0628\u0623\u0643\u062b\u0631 \u0645\u0646 12 \u0623\u0644\u0641 \u0645\u0624\u0633\u0633\u0629 \u0645\u0627\u0644\u064a\u0629 \u0648\u0645\u0624\u0634\u0631 \u0627\u0644\u0635\u062d\u0629 \u0627\u0644\u0645\u0627\u0644\u064a\u0629.",
    category: "ai",
    color: "from-emerald-500/20 to-emerald-500/5",
    techStack: ["React", "Node.js", "AI/ML", "Plaid", "Cloud"],
    year: "2024",
    clientEn: "Tendi",
    clientFr: "Tendi",
    clientAr: "\u062A\u064A\u0646\u062F\u064A",
    url: "https://tendi.ai/",
  },
  {
    id: "bral-associates",
    titleEn: "Bral and Associates",
    titleFr: "Bral and Associates",
    titleAr: "\u0628\u0631\u0627\u0644 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A",
    descEn:
      "Custom law firm software for case management, billing, and client intake.",
    descFr:
      "Logiciel sur mesure pour cabinet d'avocats : gestion des dossiers, facturation et prise en charge clients.",
    descAr:
      "\u0628\u0631\u0645\u062C\u064A\u0627\u062A \u0645\u062E\u0635\u0635\u0629 \u0644\u0645\u0643\u062A\u0628 \u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0648\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u0621.",
    longDescEn:
      "Dedicated law firm software for Bral and Associates covering case and matter management, time tracking, billing and invoicing, client intake and communication, and document storage. The system streamlines daily operations so the team can focus on practice and client service.",
    longDescFr:
      "Logiciel dédié pour le cabinet Bral and Associates : gestion des dossiers et affaires, suivi du temps, facturation, prise en charge et communication clients, stockage de documents. Rationalisation des opérations au quotidien.",
    longDescAr:
      "\u0628\u0631\u0645\u062C\u064A\u0627\u062A \u0645\u062E\u0635\u0635\u0629 \u0644\u0645\u0643\u062A\u0628 \u0628\u0631\u0627\u0644 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A: \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0648\u0627\u0644\u0623\u0648\u0631\u0627\u0642\u060C \u0627\u0644\u0628\u0644\u064A\u063A \u0648\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631\u060C \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0648\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A.",
    category: "automation",
    color: "from-rose-500/20 to-rose-500/5",
    techStack: ["React", "Node.js", "PostgreSQL", "Document Management"],
    year: "2022",
    clientEn: "Bral and Associates",
    clientFr: "Bral and Associates",
    clientAr: "\u0628\u0631\u0627\u0644 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A",
  },
  {
    id: "siha-dz",
    titleEn: "Siha DZ",
    titleFr: "Siha DZ",
    titleAr: "\u0635\u062D\u0629 \u062F\u062C",
    descEn:
      "Web and mobile app for healthcare in Algeria. Coming soon.",
    descFr:
      "Application web et mobile pour la santé en Algérie. Bientôt disponible.",
    descAr:
      "\u062A\u0637\u0628\u064A\u0642 \u0648\u064A\u0628 \u0648\u0645\u0648\u0628\u0627\u064A\u0644 \u0644\u0644\u0635\u062D\u0629 \u0641\u064A \u0627\u0644\u062C\u0632\u0627\u0626\u0631. \u0642\u0631\u064A\u0628\u0627\u064b.",
    longDescEn:
      "Siha DZ is an upcoming web and mobile platform for healthcare services in Algeria. The project will connect users with health resources, information, and services to support wellness and access to care. Launch planned for 2026.",
    longDescFr:
      "Siha DZ est une future plateforme web et mobile pour les services de santé en Algérie. Elle mettra en relation les utilisateurs avec les ressources, informations et services de santé. Lancement prévu en 2026.",
    longDescAr:
      "\u0635\u062D\u0629 \u062F\u062C \u0645\u0646\u0635\u0629 \u0648\u064A\u0628 \u0648\u0645\u0648\u0628\u0627\u064A\u0644 \u0642\u0627\u062F\u0645\u0629 \u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0635\u062D\u0629 \u0641\u064A \u0627\u0644\u062C\u0632\u0627\u0626\u0631. \u0633\u062A\u0631\u0628\u0637 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0628\u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0648\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0635\u062D\u064A\u0629. \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0645\u062E\u0637\u0648\u0639 \u0644\u0639\u0627\u0645 2026.",
    category: "mobile",
    color: "from-teal-500/20 to-teal-500/5",
    techStack: ["React", "React Native", "Node.js", "Healthcare APIs"],
    year: "2026",
    clientEn: "Siha DZ",
    clientFr: "Siha DZ",
    clientAr: "\u0635\u062D\u0629 \u062F\u062C",
  },
]
