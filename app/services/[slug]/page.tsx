"use client"

import { use } from "react"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Smartphone,
  Brain,
  Zap,
  Palette,
  BarChart3,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ServiceData = {
  slug: string
  icon: LucideIcon
  titleEn: string
  titleFr: string
  titleAr: string
  descEn: string
  descFr: string
  descAr: string
  features: string[]
  benefits: string[]
  techStack: string[]
}

const servicesData: ServiceData[] = [
  {
    slug: "web-development",
    icon: Globe,
    titleEn: "Web Development",
    titleFr: "Développement Web",
    titleAr: "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628",
    descEn:
      "We build custom websites, web applications, and e-commerce platforms using modern frameworks and scalable architecture. From single-page apps to complex enterprise solutions, we deliver performant, accessible, and SEO-optimized web experiences.",
    descFr:
      "Nous construisons des sites web, applications web et plateformes e-commerce avec des frameworks modernes et une architecture évolutive.",
    descAr:
      "\u0646\u0628\u0646\u064A \u0645\u0648\u0627\u0642\u0639 \u0648\u064A\u0628 \u0645\u062E\u0635\u0635\u0629 \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0648\u064A\u0628 \u0648\u0645\u0646\u0635\u0627\u062A \u062A\u062C\u0627\u0631\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0628\u0623\u0637\u0631 \u062D\u062F\u064A\u062B\u0629.",
    features: [
      "Custom Web Applications",
      "E-Commerce Platforms",
      "Progressive Web Apps (PWA)",
      "CMS Development (WordPress, Strapi)",
      "REST & GraphQL APIs",
      "Cloud Deployment & DevOps",
      "Performance Optimization",
      "SEO & Accessibility",
    ],
    benefits: [
      "Fast load times under 2 seconds",
      "Mobile-responsive by default",
      "99.9% uptime guarantee",
      "Built-in analytics & tracking",
    ],
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Vercel",
      "Tailwind CSS",
    ],
  },
  {
    slug: "mobile-apps",
    icon: Smartphone,
    titleEn: "Mobile Applications",
    titleFr: "Applications Mobiles",
    titleAr: "\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644",
    descEn:
      "Native and cross-platform mobile apps for iOS and Android. We design and develop mobile experiences that engage users, drive retention, and scale with your business.",
    descFr:
      "Applications mobiles natives et cross-platform pour iOS et Android, conçues pour la performance et l'engagement.",
    descAr:
      "\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0623\u0635\u0644\u064A\u0629 \u0648\u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0645\u0646\u0635\u0627\u062A \u0644\u0646\u0638\u0627\u0645\u064A iOS \u0648Android.",
    features: [
      "iOS Native Development",
      "Android Native Development",
      "Cross-Platform (React Native, Flutter)",
      "App Store Submission & Optimization",
      "Push Notifications & Real-time",
      "Offline-First Architecture",
      "In-App Purchases & Subscriptions",
      "Analytics & Crash Reporting",
    ],
    benefits: [
      "Single codebase, multiple platforms",
      "Native performance & UX",
      "App Store optimization included",
      "Ongoing maintenance & updates",
    ],
    techStack: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Expo",
      "Redux",
      "GraphQL",
    ],
  },
  {
    slug: "ai-solutions",
    icon: Brain,
    titleEn: "AI Solutions",
    titleFr: "Solutions IA",
    titleAr: "\u062D\u0644\u0648\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
    descEn:
      "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent features. From chatbots to predictive analytics, we build AI that delivers real business value.",
    descFr:
      "Exploitez la puissance de l'IA pour automatiser, obtenir des insights et creer des fonctionnalites intelligentes.",
    descAr:
      "\u0627\u0633\u062A\u063A\u0644 \u0642\u0648\u0629 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u0623\u062A\u0645\u062A\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0631\u0624\u0649.",
    features: [
      "Custom ML Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "AI-Powered Chatbots",
      "Recommendation Engines",
      "Data Pipeline Engineering",
      "Model Training & Fine-tuning",
    ],
    benefits: [
      "40% average efficiency increase",
      "Real-time intelligent insights",
      "Scalable AI infrastructure",
      "Continuous model improvement",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "LangChain",
      "Hugging Face",
      "AWS SageMaker",
      "Pinecone",
    ],
  },
  {
    slug: "automations",
    icon: Zap,
    titleEn: "Business Automations",
    titleFr: "Automatisations",
    titleAr: "\u062A\u0634\u063A\u064A\u0644 \u0622\u0644\u064A",
    descEn:
      "Streamline your operations with custom workflow automations, integrations, and process optimization. We connect your tools, eliminate repetitive tasks, and free your team to focus on growth.",
    descFr:
      "Optimisez vos operations avec des automatisations de workflow, integrations et optimisation de processus.",
    descAr:
      "\u0628\u0633\u0637 \u0639\u0645\u0644\u064A\u0627\u062A\u0643 \u0645\u0639 \u0623\u062A\u0645\u062A\u0629 \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u062E\u0635\u0635\u0629 \u0648\u0627\u0644\u062A\u0643\u0627\u0645\u0644\u0627\u062A.",
    features: [
      "Workflow Automation",
      "CRM & ERP Integration",
      "Email & Marketing Automation",
      "Data Synchronization",
      "Custom API Integrations",
      "Document Processing",
      "Invoice & Payment Automation",
      "Reporting Dashboards",
    ],
    benefits: [
      "60% reduction in manual tasks",
      "Zero data entry errors",
      "Real-time sync across tools",
      "Custom workflows for your business",
    ],
    techStack: [
      "Zapier",
      "Make",
      "n8n",
      "Node.js",
      "Python",
      "REST APIs",
      "Webhooks",
      "PostgreSQL",
    ],
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    titleEn: "UI/UX Design",
    titleFr: "Design UI/UX",
    titleAr: "\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A",
    descEn:
      "User-centered design that converts. We craft beautiful, intuitive interfaces backed by research, tested with real users, and optimized for engagement and conversion.",
    descFr:
      "Design centré sur l'utilisateur qui convertit. Nous créons des interfaces belles et intuitives.",
    descAr:
      "\u062A\u0635\u0645\u064A\u0645 \u0645\u062A\u0645\u062D\u0648\u0631 \u062D\u0648\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u064A\u062D\u0642\u0642 \u0627\u0644\u062A\u062D\u0648\u064A\u0644\u0627\u062A.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Design System Creation",
      "Usability Testing",
      "Interaction Design",
      "Responsive Design",
      "Accessibility Compliance",
    ],
    benefits: [
      "3x improvement in conversion rates",
      "Consistent brand experience",
      "Reduced development time",
      "Data-driven design decisions",
    ],
    techStack: [
      "Figma",
      "Adobe XD",
      "Framer",
      "Storybook",
      "Tailwind CSS",
      "Motion",
      "Lottie",
      "Principle",
    ],
  },
  {
    slug: "consulting",
    icon: BarChart3,
    titleEn: "Tech Consulting",
    titleFr: "Conseil Technologique",
    titleAr: "\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u062A\u0642\u0646\u064A\u0629",
    descEn:
      "Strategic technology guidance for your digital transformation. We audit your systems, plan your architecture, and guide your team through every step of the journey.",
    descFr:
      "Accompagnement strategique en technologie pour votre transformation digitale.",
    descAr:
      "\u062A\u0648\u062C\u064A\u0647 \u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A \u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A.",
    features: [
      "Digital Strategy Planning",
      "Technology Audit & Assessment",
      "Architecture Design",
      "Team Augmentation",
      "Technical Training",
      "Vendor Selection",
      "Security Assessment",
      "Growth Strategy",
    ],
    benefits: [
      "Clear technology roadmap",
      "Reduced technical debt",
      "Optimized tech spending",
      "Knowledge transfer to your team",
    ],
    techStack: [
      "Jira",
      "Confluence",
      "Miro",
      "Notion",
      "GitHub",
      "AWS",
      "GCP",
      "Azure",
    ],
  },
]

function ServiceDetailContent({ slug }: { slug: string }) {
  const { locale, dir, t } = useLocale()
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center" dir={dir}>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">
            Service not found
          </h1>
          <Link href="/services">
            <Button className="mt-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t.common.backToHome}
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const title =
    locale === "fr"
      ? service.titleFr
      : locale === "ar"
        ? service.titleAr
        : service.titleEn
  const desc =
    locale === "fr"
      ? service.descFr
      : locale === "ar"
        ? service.descAr
        : service.descEn
  const Icon = service.icon

  return (
    <div dir={dir}>
      {/* Header */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.nav.services}
          </Link>
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold text-foreground">
                {locale === "ar" ? "\u0627\u0644\u0645\u064A\u0632\u0627\u062A" : locale === "fr" ? "Fonctionnalites" : "What We Deliver"}
              </h2>
              <ul className="flex flex-col gap-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-8 text-2xl font-bold text-foreground">
                {locale === "ar" ? "\u0627\u0644\u0641\u0648\u0627\u0626\u062F" : locale === "fr" ? "Avantages" : "Key Benefits"}
              </h2>
              <ul className="mb-12 flex flex-col gap-4">
                {service.benefits.map((b) => (
                  <li
                    key={b}
                    className="rounded-xl border border-border bg-card p-4 text-foreground"
                  >
                    {b}
                  </li>
                ))}
              </ul>

              <h2 className="mb-6 text-2xl font-bold text-foreground">
                {locale === "ar" ? "\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A" : locale === "fr" ? "Technologies" : "Tech Stack"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold text-foreground">
            {t.cta.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.cta.subtitle}</p>
          <div className="mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="gap-2 px-8"
              >
                {t.cta.button}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  return (
    <PageWrapper>
      <ServiceDetailContent slug={slug} />
    </PageWrapper>
  )
}
