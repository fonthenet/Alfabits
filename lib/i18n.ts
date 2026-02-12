export type Locale = "en" | "fr" | "ar"

export const locales: Locale[] = ["en", "fr", "ar"]

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
}

export const localeFlags: Record<Locale, string> = {
  en: "US",
  fr: "FR",
  ar: "DZ",
}

export const isRTL = (locale: Locale) => locale === "ar"

export type TranslationKeys = {
  nav: {
    home: string
    services: string
    portfolio: string
    about: string
    contact: string
    getStarted: string
    webDev: string
    mobileApps: string
    aiSolutions: string
    automations: string
    uiux: string
    consulting: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    cta: string
    ctaSecondary: string
  }
  stats: {
    projects: string
    clients: string
    years: string
    projectsLabel: string
    clientsLabel: string
    yearsLabel: string
  }
  services: {
    title: string
    subtitle: string
    webDev: {
      title: string
      desc: string
    }
    mobileApps: {
      title: string
      desc: string
    }
    aiSolutions: {
      title: string
      desc: string
    }
    automations: {
      title: string
      desc: string
    }
    uiux: {
      title: string
      desc: string
    }
    consulting: {
      title: string
      desc: string
    }
    learnMore: string
  }
  portfolio: {
    title: string
    subtitle: string
    viewProject: string
    viewAll: string
    allCategory: string
    webCategory: string
    mobileCategory: string
    aiCategory: string
    automationCategory: string
  }
  about: {
    title: string
    subtitle: string
    mission: string
    missionText: string
    vision: string
    visionText: string
    story: string
    storyText: string
    values: string
    valuesText: string
    teamTitle: string
    teamSubtitle: string
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    phone: string
    company: string
    message: string
    messagePlaceholder: string
    send: string
    sending: string
    sent: string
    address: string
    addressValue: string
    emailValue: string
    phoneValue: string
    followUs: string
  }
  footer: {
    description: string
    quickLinks: string
    servicesTitle: string
    contactTitle: string
    rights: string
    privacy: string
    terms: string
  }
  chat: {
    title: string
    placeholder: string
    send: string
    greeting: string
    online: string
  }
  common: {
    learnMore: string
    getStarted: string
    contactUs: string
    viewAll: string
    backToHome: string
  }
  process: {
    title: string
    subtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    step4Title: string
    step4Desc: string
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  testimonials: {
    title: string
    subtitle: string
  }
  notFound: {
    title: string
    description: string
  }
  portfolioDetail: {
    projectNotFound: string
    overview: string
    techStack: string
    visitWebsite: string
  }
}

export const translations: Record<Locale, TranslationKeys> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
      webDev: "Web Development",
      mobileApps: "Mobile Apps",
      aiSolutions: "AI Solutions",
      automations: "Automations",
      uiux: "UI/UX Design",
      consulting: "Tech Consulting",
    },
    hero: {
      badge: "Full-Stack Digital Agency",
      title: "Ideas Are Easy.",
      titleHighlight: "We Do The Hard Part.",
      subtitle:
        "Web, mobile & AI \u2014 we build and ship so you can scale. Your vision, our craft, one outcome.",
      cta: "Start Your Project",
      ctaSecondary: "View Our Work",
    },
    stats: {
      projects: "120+",
      clients: "85+",
      years: "10+",
      projectsLabel: "Projects Delivered",
      clientsLabel: "Happy Clients",
      yearsLabel: "Years of Experience",
    },
    services: {
      title: "Our Services",
      subtitle:
        "End-to-end digital solutions tailored for businesses ready to scale in the Algerian market and beyond.",
      webDev: {
        title: "Web Development",
        desc: "Custom websites, web applications, and e-commerce platforms built with modern frameworks and scalable architecture.",
      },
      mobileApps: {
        title: "Mobile Applications",
        desc: "Native and cross-platform mobile apps for iOS and Android, designed for performance and user engagement.",
      },
      aiSolutions: {
        title: "AI Solutions",
        desc: "Intelligent automation, machine learning models, and AI-powered features that give your business a competitive edge.",
      },
      automations: {
        title: "Business Automations",
        desc: "Streamline your operations with custom workflow automations, integrations, and process optimization tools.",
      },
      uiux: {
        title: "UI/UX Design",
        desc: "User-centered design that converts. From wireframes to polished interfaces, we craft experiences users love.",
      },
      consulting: {
        title: "Tech Consulting",
        desc: "Strategic technology guidance to help you make the right decisions for your digital transformation journey.",
      },
      learnMore: "Learn More",
    },
    portfolio: {
      title: "Our Portfolio",
      subtitle:
        "A showcase of our best work across web, mobile, AI, and automation projects.",
      viewProject: "View Project",
      viewAll: "View All Projects",
      allCategory: "All",
      webCategory: "Web",
      mobileCategory: "Mobile",
      aiCategory: "AI",
      automationCategory: "Automation",
    },
    about: {
      title: "About Alfabits",
      subtitle:
        "We are a team of passionate engineers and designers building the digital future for generations to come.",
      mission: "Our Mission",
      missionText:
        "To empower Algerian businesses with world-class digital solutions that drive growth, efficiency, and innovation in an increasingly connected world.",
      vision: "Our Vision",
      visionText:
        "To be the leading digital transformation partner for businesses in Algeria and across North Africa, bridging the gap between local needs and global technology standards.",
      story: "Our Story",
      storyText:
        "Founded in Los Angeles, Alfabits was born from a vision to bring Silicon Valley-level technology expertise to the Algerian market. We combine global best practices with deep local market understanding to deliver solutions that truly resonate with businesses and their customers.",
      values: "Our Values",
      valuesText:
        "Innovation, quality, transparency, and client success drive everything we do. We believe in building long-term partnerships, not just delivering projects.",
      teamTitle: "Meet Our Team",
      teamSubtitle:
        "A diverse team of engineers, designers, and strategists dedicated to your success.",
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Ready to start your digital transformation? We would love to hear from you.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      message: "Your Message",
      messagePlaceholder: "Tell us about your project...",
      send: "Send Message",
      sending: "Sending...",
      sent: "Message Sent!",
      address: "Address",
      addressValue: "Los Angeles, CA, USA",
      emailValue: "info@alfabits.net",
      phoneValue: "+1 661 234 6622",
      followUs: "Follow Us",
    },
    footer: {
      description:
        "We build digital products that scale. Full-stack web, mobile & AI solutions for Algerian businesses.",
      quickLinks: "Quick Links",
      servicesTitle: "Services",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    chat: {
      title: "Chat with us",
      placeholder: "Type your message...",
      send: "Send",
      greeting:
        "Hello! Welcome to Alfabits. How can we help you today? We typically respond within a few minutes.",
      online: "Online",
    },
    common: {
      learnMore: "Learn More",
      getStarted: "Get Started",
      contactUs: "Contact Us",
      viewAll: "View All",
      backToHome: "Back to Home",
    },
    process: {
      title: "Our Process",
      subtitle: "A proven methodology that delivers results, every time.",
      step1Title: "Discovery",
      step1Desc:
        "We dive deep into your business needs, goals, and challenges to define the perfect solution.",
      step2Title: "Design",
      step2Desc:
        "Our designers craft intuitive, beautiful interfaces that align with your brand and delight users.",
      step3Title: "Development",
      step3Desc:
        "Our engineers build robust, scalable solutions using cutting-edge technologies and best practices.",
      step4Title: "Delivery",
      step4Desc:
        "We deploy, test, and iterate to ensure your product performs flawlessly in the real world.",
    },
    cta: {
      title: "Ready to Build Something Great?",
      subtitle:
        "Let us turn your vision into a digital reality. Get in touch and start your project today.",
      button: "Start Your Project",
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle:
        "Hear from businesses that have transformed their digital presence with Alfabits.",
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    },
    portfolioDetail: {
      projectNotFound: "Project not found",
      overview: "Project Overview",
      techStack: "Tech Stack",
      visitWebsite: "Visit website",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      portfolio: "Portfolio",
      about: "\u00C0 Propos",
      contact: "Contact",
      getStarted: "Commencer",
      webDev: "D\u00E9veloppement Web",
      mobileApps: "Applications Mobiles",
      aiSolutions: "Solutions IA",
      automations: "Automatisations",
      uiux: "Design UI/UX",
      consulting: "Conseil Tech",
    },
    hero: {
      badge: "Agence Digitale Full-Stack",
      title: "Les id\u00E9es, c'est facile.",
      titleHighlight: "Le difficile, c'est nous qui le faisons.",
      subtitle:
        "Web, mobile et IA \u2014 on construit et on livre pour que vous puissiez grandir. Votre vision, notre m\u00E9tier.",
      cta: "D\u00E9marrer Votre Projet",
      ctaSecondary: "Voir Nos R\u00E9alisations",
    },
    stats: {
      projects: "120+",
      clients: "85+",
      years: "10+",
      projectsLabel: "Projets Livr\u00E9s",
      clientsLabel: "Clients Satisfaits",
      yearsLabel: "Ans d\u2019Exp\u00E9rience",
    },
    services: {
      title: "Nos Services",
      subtitle:
        "Des solutions digitales compl\u00E8tes adapt\u00E9es aux entreprises pr\u00EAtes \u00E0 se d\u00E9velopper sur le march\u00E9 alg\u00E9rien et au-del\u00E0.",
      webDev: {
        title: "D\u00E9veloppement Web",
        desc: "Sites web, applications web et plateformes e-commerce construits avec des frameworks modernes et une architecture \u00E9volutive.",
      },
      mobileApps: {
        title: "Applications Mobiles",
        desc: "Applications mobiles natives et cross-platform pour iOS et Android, con\u00E7ues pour la performance.",
      },
      aiSolutions: {
        title: "Solutions IA",
        desc: "Automatisation intelligente, mod\u00E8les de machine learning et fonctionnalit\u00E9s aliment\u00E9es par l\u2019IA.",
      },
      automations: {
        title: "Automatisations",
        desc: "Optimisez vos op\u00E9rations avec des automatisations de workflow personnalis\u00E9es et des outils d\u2019optimisation.",
      },
      uiux: {
        title: "Design UI/UX",
        desc: "Un design centr\u00E9 sur l\u2019utilisateur qui convertit. Des wireframes aux interfaces polies.",
      },
      consulting: {
        title: "Conseil Technologique",
        desc: "Des conseils strat\u00E9giques en technologie pour vous aider dans votre transformation digitale.",
      },
      learnMore: "En Savoir Plus",
    },
    portfolio: {
      title: "Notre Portfolio",
      subtitle:
        "Une vitrine de nos meilleurs travaux en web, mobile, IA et automatisation.",
      viewProject: "Voir le Projet",
      viewAll: "Voir Tous les Projets",
      allCategory: "Tout",
      webCategory: "Web",
      mobileCategory: "Mobile",
      aiCategory: "IA",
      automationCategory: "Automatisation",
    },
    about: {
      title: "\u00C0 Propos d\u2019Alfabits",
      subtitle:
        "Nous sommes une \u00E9quipe passionn\u00E9e d\u2019ing\u00E9nieurs et de designers qui construisent l\u2019avenir num\u00E9rique pour les g\u00E9n\u00E9rations \u00E0 venir.",
      mission: "Notre Mission",
      missionText:
        "Donner aux entreprises alg\u00E9riennes les moyens d\u2019acc\u00E9der \u00E0 des solutions digitales de classe mondiale.",
      vision: "Notre Vision",
      visionText:
        "\u00CAtre le partenaire de transformation digitale de r\u00E9f\u00E9rence pour les entreprises en Alg\u00E9rie et en Afrique du Nord.",
      story: "Notre Histoire",
      storyText:
        "Fond\u00E9e \u00E0 Los Angeles, Alfabits est n\u00E9e d\u2019une vision de combiner l\u2019expertise technologique de la Silicon Valley avec le march\u00E9 alg\u00E9rien.",
      values: "Nos Valeurs",
      valuesText:
        "Innovation, qualit\u00E9, transparence et succ\u00E8s client guident tout ce que nous faisons.",
      teamTitle: "Notre \u00C9quipe",
      teamSubtitle:
        "Une \u00E9quipe diverse d\u2019ing\u00E9nieurs, designers et strat\u00E8ges d\u00E9di\u00E9s \u00E0 votre succ\u00E8s.",
    },
    contact: {
      title: "Contactez-Nous",
      subtitle:
        "Pr\u00EAt \u00E0 d\u00E9marrer votre transformation digitale ? Nous serions ravis de vous entendre.",
      name: "Nom Complet",
      email: "Adresse Email",
      phone: "Num\u00E9ro de T\u00E9l\u00E9phone",
      company: "Nom de l\u2019Entreprise",
      message: "Votre Message",
      messagePlaceholder: "Parlez-nous de votre projet...",
      send: "Envoyer",
      sending: "Envoi en cours...",
      sent: "Message envoy\u00E9 !",
      address: "Adresse",
      addressValue: "Los Angeles, CA, USA",
      emailValue: "info@alfabits.net",
      phoneValue: "+1 661 234 6622",
      followUs: "Suivez-nous",
    },
    footer: {
      description:
        "Nous construisons des produits digitaux qui scalent. Solutions web, mobile et IA pour les entreprises alg\u00E9riennes.",
      quickLinks: "Liens Rapides",
      servicesTitle: "Services",
      contactTitle: "Contact",
      rights: "Tous droits r\u00E9serv\u00E9s.",
      privacy: "Politique de Confidentialit\u00E9",
      terms: "Conditions d\u2019Utilisation",
    },
    chat: {
      title: "Discuter avec nous",
      placeholder: "Tapez votre message...",
      send: "Envoyer",
      greeting:
        "Bonjour ! Bienvenue chez Alfabits. Comment pouvons-nous vous aider ?",
      online: "En ligne",
    },
    common: {
      learnMore: "En Savoir Plus",
      getStarted: "Commencer",
      contactUs: "Contactez-Nous",
      viewAll: "Voir Tout",
      backToHome: "Retour \u00E0 l\u2019Accueil",
    },
    process: {
      title: "Notre Processus",
      subtitle:
        "Une m\u00E9thodologie \u00E9prouv\u00E9e qui produit des r\u00E9sultats, \u00E0 chaque fois.",
      step1Title: "D\u00E9couverte",
      step1Desc:
        "Nous analysons en profondeur vos besoins, objectifs et d\u00E9fis pour d\u00E9finir la solution parfaite.",
      step2Title: "Conception",
      step2Desc:
        "Nos designers cr\u00E9ent des interfaces intuitives et belles, align\u00E9es avec votre marque.",
      step3Title: "D\u00E9veloppement",
      step3Desc:
        "Nos ing\u00E9nieurs construisent des solutions robustes et \u00E9volutives avec les technologies de pointe.",
      step4Title: "Livraison",
      step4Desc:
        "Nous d\u00E9ployons, testons et it\u00E9rons pour assurer une performance parfaite.",
    },
    cta: {
      title: "Pr\u00EAt \u00E0 Construire Quelque Chose de Grand ?",
      subtitle:
        "Laissez-nous transformer votre vision en r\u00E9alit\u00E9 num\u00E9rique.",
      button: "D\u00E9marrer Votre Projet",
    },
    testimonials: {
      title: "Ce Que Disent Nos Clients",
      subtitle:
        "D\u00E9couvrez les entreprises qui ont transform\u00E9 leur pr\u00E9sence digitale avec Alfabits.",
    },
    notFound: {
      title: "Page introuvable",
      description: "La page que vous recherchez n'existe pas.",
    },
    portfolioDetail: {
      projectNotFound: "Projet introuvable",
      overview: "Vue d'ensemble",
      techStack: "Technologies",
      visitWebsite: "Visiter le site",
    },
  },
  ar: {
    nav: {
      home: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
      services: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
      portfolio: "\u0623\u0639\u0645\u0627\u0644\u0646\u0627",
      about: "\u0645\u0646 \u0646\u062D\u0646",
      contact: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
      getStarted: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646",
      webDev: "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628",
      mobileApps: "\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644",
      aiSolutions: "\u062D\u0644\u0648\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
      automations: "\u062A\u0634\u063A\u064A\u0644 \u0622\u0644\u064A",
      uiux: "\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A",
      consulting: "\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u062A\u0642\u0646\u064A\u0629",
    },
    hero: {
      badge: "\u0648\u0643\u0627\u0644\u0629 \u0631\u0642\u0645\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629",
      title: "\u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0633\u0647\u0644\u0629.",
      titleHighlight: "\u0627\u0644\u0644\u064A \u0635\u0639\u064A\u0628\n\u062D\u0646\u0627 \u0646\u062E\u062F\u0645\u0648\u0647.",
      subtitle:
        "\u0627\u0644\u0648\u064A\u0628\u060C \u0627\u0644\u0647\u0648\u0627\u062A\u0641 \u0627\u0644\u0645\u062D\u0645\u0648\u0644\u0629\u060C \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A - \u0646\u0642\u0648\u0645 \u0628\u0627\u0644\u0628\u0646\u0627\u0621 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0644\u062A\u0645\u0643\u064A\u0646\u0643 \u0645\u0646 \u0627\u0644\u062A\u0648\u0633\u0639. \u0631\u0624\u064A\u062A\u0643\u060C \u062E\u0628\u0631\u062A\u0646\u0627\u060C \u0646\u062A\u064A\u062C\u0629 \u0648\u0627\u062D\u062F\u0629.",
      cta: "\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643",
      ctaSecondary: "\u0634\u0627\u0647\u062F \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    },
    stats: {
      projects: "+120",
      clients: "+85",
      years: "+10",
      projectsLabel: "\u0645\u0634\u0631\u0648\u0639 \u0645\u0646\u062C\u0632",
      clientsLabel: "\u0639\u0645\u064A\u0644 \u0633\u0639\u064A\u062F",
      yearsLabel: "\u0633\u0646\u0648\u0627\u062A \u062E\u0628\u0631\u0629",
    },
    services: {
      title: "\u062E\u062F\u0645\u0627\u062A\u0646\u0627",
      subtitle:
        "\u062D\u0644\u0648\u0644 \u0631\u0642\u0645\u064A\u0629 \u0634\u0627\u0645\u0644\u0629 \u0645\u0635\u0645\u0645\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0639\u062F\u0629 \u0644\u0644\u0646\u0645\u0648 \u0641\u064A \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u062C\u0632\u0627\u0626\u0631\u064A \u0648\u0645\u0627 \u0628\u0639\u062F\u0647.",
      webDev: {
        title: "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628",
        desc: "\u0645\u0648\u0627\u0642\u0639 \u0648\u064A\u0628 \u0645\u062E\u0635\u0635\u0629 \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0648\u064A\u0628 \u0648\u0645\u0646\u0635\u0627\u062A \u062A\u062C\u0627\u0631\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0645\u0628\u0646\u064A\u0629 \u0628\u0623\u0637\u0631 \u062D\u062F\u064A\u062B\u0629.",
      },
      mobileApps: {
        title: "\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644",
        desc: "\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0623\u0635\u0644\u064A\u0629 \u0648\u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0645\u0646\u0635\u0627\u062A \u0644\u0646\u0638\u0627\u0645\u064A iOS \u0648Android.",
      },
      aiSolutions: {
        title: "\u062D\u0644\u0648\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
        desc: "\u0623\u062A\u0645\u062A\u0629 \u0630\u0643\u064A\u0629 \u0648\u0646\u0645\u0627\u0630\u062C \u062A\u0639\u0644\u0645 \u0622\u0644\u064A \u0648\u0645\u064A\u0632\u0627\u062A \u0645\u062F\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A.",
      },
      automations: {
        title: "\u062A\u0634\u063A\u064A\u0644 \u0622\u0644\u064A",
        desc: "\u062A\u0628\u0633\u064A\u0637 \u0639\u0645\u0644\u064A\u0627\u062A\u0643 \u0645\u0639 \u062A\u0634\u063A\u064A\u0644 \u0622\u0644\u064A \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u062E\u0635\u0635\u0629.",
      },
      uiux: {
        title: "\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A",
        desc: "\u062A\u0635\u0645\u064A\u0645 \u0645\u062A\u0645\u062D\u0648\u0631 \u062D\u0648\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u064A\u062D\u0642\u0642 \u0627\u0644\u062A\u062D\u0648\u064A\u0644\u0627\u062A.",
      },
      consulting: {
        title: "\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u062A\u0642\u0646\u064A\u0629",
        desc: "\u062A\u0648\u062C\u064A\u0647 \u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A \u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A.",
      },
      learnMore: "\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F",
    },
    portfolio: {
      title: "\u0623\u0639\u0645\u0627\u0644\u0646\u0627",
      subtitle:
        "\u0639\u0631\u0636 \u0644\u0623\u0641\u0636\u0644 \u0623\u0639\u0645\u0627\u0644\u0646\u0627 \u0641\u064A \u0627\u0644\u0648\u064A\u0628 \u0648\u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A.",
      viewProject: "\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
      viewAll: "\u0639\u0631\u0636 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
      allCategory: "\u0627\u0644\u0643\u0644",
      webCategory: "\u0648\u064A\u0628",
      mobileCategory: "\u0645\u0648\u0628\u0627\u064A\u0644",
      aiCategory: "\u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A",
      automationCategory: "\u062A\u0634\u063A\u064A\u0644 \u0622\u0644\u064A",
    },
    about: {
      title: "\u0639\u0646 Alfabits",
      subtitle:
        "\u0646\u062D\u0646 \u0641\u0631\u064A\u0642 \u0645\u0646 \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0648\u0627\u0644\u0645\u0635\u0645\u0645\u064A\u0646 \u0627\u0644\u0645\u062A\u062D\u0645\u0633\u064A\u0646 \u0627\u0644\u0630\u064A\u0646 \u064A\u0628\u0646\u0648\u0646 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u0631\u0642\u0645\u064A \u0644\u0644\u0623\u062C\u064A\u0627\u0644 \u0627\u0644\u0642\u0627\u062F\u0645\u0629.",
      mission: "\u0645\u0647\u0645\u062A\u0646\u0627",
      missionText:
        "\u062A\u0645\u0643\u064A\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062C\u0632\u0627\u0626\u0631\u064A\u0629 \u0628\u062D\u0644\u0648\u0644 \u0631\u0642\u0645\u064A\u0629 \u0639\u0627\u0644\u0645\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u0648\u0649.",
      vision: "\u0631\u0624\u064A\u062A\u0646\u0627",
      visionText:
        "\u0623\u0646 \u0646\u0643\u0648\u0646 \u0627\u0644\u0634\u0631\u064A\u0643 \u0627\u0644\u0631\u0627\u0626\u062F \u0641\u064A \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0641\u064A \u0627\u0644\u062C\u0632\u0627\u0626\u0631 \u0648\u0634\u0645\u0627\u0644 \u0623\u0641\u0631\u064A\u0642\u064A\u0627.",
      story: "\u0642\u0635\u062A\u0646\u0627",
      storyText:
        "\u062A\u0623\u0633\u0633\u062A \u0623\u0644\u0641\u0627\u0628\u064A\u062A\u0633 \u0641\u064A \u0644\u0648\u0633 \u0623\u0646\u062C\u0644\u0648\u0633 \u0628\u0631\u0624\u064A\u0629 \u0644\u062C\u0644\u0628 \u062E\u0628\u0631\u0629 \u0648\u0627\u062F\u064A \u0627\u0644\u0633\u064A\u0644\u064A\u0643\u0648\u0646 \u0625\u0644\u0649 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u062C\u0632\u0627\u0626\u0631\u064A.",
      values: "\u0642\u064A\u0645\u0646\u0627",
      valuesText:
        "\u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0648\u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u0634\u0641\u0627\u0641\u064A\u0629 \u0648\u0646\u062C\u0627\u062D \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u062A\u0642\u0648\u062F \u0643\u0644 \u0645\u0627 \u0646\u0642\u0648\u0645 \u0628\u0647.",
      teamTitle: "\u0641\u0631\u064A\u0642\u0646\u0627",
      teamSubtitle:
        "\u0641\u0631\u064A\u0642 \u0645\u062A\u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0648\u0627\u0644\u0645\u0635\u0645\u0645\u064A\u0646 \u0648\u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u064A\u0646.",
    },
    contact: {
      title: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
      subtitle:
        "\u0645\u0633\u062A\u0639\u062F \u0644\u0628\u062F\u0621 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u061F \u064A\u0633\u0639\u062F\u0646\u0627 \u0633\u0645\u0627\u0639 \u0645\u0646\u0643.",
      name: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
      email: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      phone: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
      company: "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629",
      message: "\u0631\u0633\u0627\u0644\u062A\u0643",
      messagePlaceholder: "\u062D\u062F\u062B\u0646\u0627 \u0639\u0646 \u0645\u0634\u0631\u0648\u0639\u0643...",
      send: "\u0625\u0631\u0633\u0627\u0644",
      sending: "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",
      sent: "\u062A\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644!",
      address: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646",
      addressValue: "\u0644\u0648\u0633 \u0623\u0646\u062C\u0644\u0648\u0633\u060C \u0643\u0627\u0644\u064A\u0641\u0648\u0631\u0646\u064A\u0627\u060C \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629",
      emailValue: "info@alfabits.net",
      phoneValue: "+1 661 234 6622",
      followUs: "\u062A\u0627\u0628\u0639\u0646\u0627",
    },
    footer: {
      description:
        "\u0646\u0628\u0646\u064A \u0645\u0646\u062A\u062C\u0627\u062A \u0631\u0642\u0645\u064A\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0648\u0633\u0639. \u062D\u0644\u0648\u0644 \u0648\u064A\u0628 \u0648\u0645\u0648\u0628\u0627\u064A\u0644 \u0648\u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062C\u0632\u0627\u0626\u0631\u064A\u0629.",
      quickLinks: "\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064A\u0639\u0629",
      servicesTitle: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
      contactTitle: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
      rights: "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.",
      privacy: "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
      terms: "\u0634\u0631\u0648\u0637 \u0627\u0644\u062E\u062F\u0645\u0629",
    },
    chat: {
      title: "\u062A\u062D\u062F\u062B \u0645\u0639\u0646\u0627",
      placeholder: "\u0627\u0643\u062A\u0628 \u0631\u0633\u0627\u0644\u062A\u0643...",
      send: "\u0625\u0631\u0633\u0627\u0644",
      greeting:
        "\u0645\u0631\u062D\u0628\u0627! \u0623\u0647\u0644\u0627 \u0628\u0643 \u0641\u064A \u0623\u0644\u0641\u0627\u0628\u064A\u062A\u0633. \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0646\u0627 \u0645\u0633\u0627\u0639\u062F\u062A\u0643\u061F",
      online: "\u0645\u062A\u0635\u0644",
    },
    common: {
      learnMore: "\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F",
      getStarted: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646",
      contactUs: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
      viewAll: "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644",
      backToHome: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
    },
    process: {
      title: "\u0645\u0646\u0647\u062C\u064A\u062A\u0646\u0627",
      subtitle: "\u0645\u0646\u0647\u062C\u064A\u0629 \u0645\u062B\u0628\u062A\u0629 \u062A\u062D\u0642\u0642 \u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0641\u064A \u0643\u0644 \u0645\u0631\u0629.",
      step1Title: "\u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641",
      step1Desc:
        "\u0646\u062A\u0639\u0645\u0642 \u0641\u064A \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A\u0643 \u0648\u0623\u0647\u062F\u0627\u0641\u0643 \u0648\u062A\u062D\u062F\u064A\u0627\u062A\u0643 \u0644\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u062D\u0644 \u0627\u0644\u0645\u062B\u0627\u0644\u064A.",
      step2Title: "\u0627\u0644\u062A\u0635\u0645\u064A\u0645",
      step2Desc:
        "\u064A\u0635\u0645\u0645 \u0641\u0631\u064A\u0642\u0646\u0627 \u0648\u0627\u062C\u0647\u0627\u062A \u0628\u062F\u064A\u0647\u064A\u0629 \u0648\u062C\u0645\u064A\u0644\u0629 \u062A\u062A\u0648\u0627\u0641\u0642 \u0645\u0639 \u0639\u0644\u0627\u0645\u062A\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629.",
      step3Title: "\u0627\u0644\u062A\u0637\u0648\u064A\u0631",
      step3Desc:
        "\u064A\u0628\u0646\u064A \u0645\u0647\u0646\u062F\u0633\u0648\u0646\u0627 \u062D\u0644\u0648\u0644\u0627\u064B \u0642\u0648\u064A\u0629 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0648\u0633\u0639 \u0628\u0623\u062D\u062F\u062B \u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A.",
      step4Title: "\u0627\u0644\u062A\u0633\u0644\u064A\u0645",
      step4Desc:
        "\u0646\u0646\u0634\u0631 \u0648\u0646\u062E\u062A\u0628\u0631 \u0648\u0646\u0637\u0648\u0631 \u0644\u0636\u0645\u0627\u0646 \u0623\u062F\u0627\u0621 \u0645\u062B\u0627\u0644\u064A.",
    },
    cta: {
      title: "\u0645\u0633\u062A\u0639\u062F \u0644\u0628\u0646\u0627\u0621 \u0634\u064A\u0621 \u0639\u0638\u064A\u0645\u061F",
      subtitle: "\u062F\u0639\u0646\u0627 \u0646\u062D\u0648\u0644 \u0631\u0624\u064A\u062A\u0643 \u0625\u0644\u0649 \u0648\u0627\u0642\u0639 \u0631\u0642\u0645\u064A.",
      button: "\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643",
    },
    testimonials: {
      title: "\u0645\u0627\u0630\u0627 \u064A\u0642\u0648\u0644 \u0639\u0645\u0644\u0627\u0624\u0646\u0627",
      subtitle:
        "\u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u064A \u062D\u0648\u0644\u062A \u062D\u0636\u0648\u0631\u0647\u0627 \u0627\u0644\u0631\u0642\u0645\u064A \u0645\u0639 \u0623\u0644\u0641\u0627\u0628\u064A\u062A\u0633.",
    },
    notFound: {
      title: "\u0627\u0644\u0635\u0641\u062D\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629",
      description: "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647\u0627 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629.",
    },
    portfolioDetail: {
      projectNotFound: "\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F",
      overview: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",
      techStack: "\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A",
      visitWebsite: "\u0632\u0648\u0631 \u0627\u0644\u0645\u0648\u0642\u0639",
    },
  },
}
