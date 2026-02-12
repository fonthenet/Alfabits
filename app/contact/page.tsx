"use client"

import { useState, type FormEvent } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react"

function ContactContent() {
  const { t, dir } = useLocale()
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setTimeout(() => setStatus("sent"), 1500)
  }

  return (
    <div dir={dir}>
      {/* Header */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.contact.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      {t.contact.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      {t.contact.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      {t.contact.phone}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+213 555 123 456"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground"
                    >
                      {t.contact.company}
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status !== "idle"}
                  className="gap-2 self-start"
                >
                  {status === "sending" ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      {t.contact.sending}
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      {t.contact.sent}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t.contact.send}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {t.contact.address}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t.contact.addressValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {t.contact.email}
                    </h3>
                    <a
                      href="mailto:info@alfabits.net"
                      dir="ltr"
                      className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {t.contact.emailValue}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {t.contact.phone}
                    </h3>
                    <a
                      href="tel:+12135550123"
                      dir="ltr"
                      className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {t.contact.phoneValue}
                    </a>
                  </div>
                </div>

                {/* Map Embed Placeholder */}
                <div className="overflow-hidden rounded-xl border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2741!2d-118.6919!3d34.0207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Alfabits location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactContent />
    </PageWrapper>
  )
}
