"use client"

import { useState, useRef, useEffect } from "react"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const botResponses: Record<string, string[]> = {
  en: [
    "Thank you for your message! Our team will get back to you shortly.",
    "Great question! One of our experts will follow up with you via email.",
    "We appreciate your interest! Could you share more details about your project?",
    "That sounds like an exciting project! We would love to schedule a call to discuss further.",
    "Thanks for reaching out! We typically respond within 24 hours during business days.",
  ],
  fr: [
    "Merci pour votre message ! Notre equipe vous repondra sous peu.",
    "Excellente question ! Un de nos experts vous contactera par email.",
    "Nous apprecions votre interet ! Pourriez-vous partager plus de details sur votre projet ?",
    "Ca a l'air d'un projet passionnant ! Nous aimerions planifier un appel.",
    "Merci de nous contacter ! Nous repondons generalement sous 24 heures.",
  ],
  ar: [
    "\u0634\u0643\u0631\u0627 \u0644\u0631\u0633\u0627\u0644\u062A\u0643! \u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0641\u0631\u064A\u0642\u0646\u0627 \u0642\u0631\u064A\u0628\u0627.",
    "\u0633\u0624\u0627\u0644 \u0631\u0627\u0626\u0639! \u0633\u064A\u062A\u0627\u0628\u0639 \u0645\u0639\u0643 \u0623\u062D\u062F \u062E\u0628\u0631\u0627\u0626\u0646\u0627.",
    "\u0646\u0642\u062F\u0631 \u0627\u0647\u062A\u0645\u0627\u0645\u0643! \u0647\u0644 \u064A\u0645\u0643\u0646\u0643 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644\u061F",
    "\u064A\u0628\u062F\u0648 \u0645\u0634\u0631\u0648\u0639\u0627 \u0645\u062B\u064A\u0631\u0627! \u0646\u0648\u062F \u062A\u062D\u062F\u064A\u062F \u0645\u0643\u0627\u0644\u0645\u0629 \u0644\u0644\u0646\u0642\u0627\u0634.",
    "\u0634\u0643\u0631\u0627 \u0644\u062A\u0648\u0627\u0635\u0644\u0643! \u0646\u0631\u062F \u0639\u0627\u062F\u0629 \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629.",
  ],
}

export function ChatWidget() {
  const { t, locale, dir } = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "greeting",
          text: t.chat.greeting,
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, messages.length, t.chat.greeting])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const sendMessage = () => {
    if (!input.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const responses = botResponses[locale] || botResponses.en
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <div
      className={cn("fixed bottom-6 z-50", dir === "rtl" ? "left-6" : "right-6")}
    >
      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="mb-4 flex h-[28rem] w-80 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:w-96">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20">
                <MessageCircle className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">
                  {t.chat.title}
                </p>
                <p className="text-xs text-primary-foreground/70">
                  {t.chat.online}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setIsMinimized(true)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4" dir={dir}>
            <div className="flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-muted px-4 py-3 rounded-bl-sm">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.chat.placeholder}
                className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                dir={dir}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim()}
                className="h-9 w-9 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">{t.chat.send}</span>
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Minimized bar */}
      {isOpen && isMinimized && (
        <button
          onClick={() => setIsMinimized(false)}
          className="mb-4 flex w-64 items-center gap-3 rounded-full bg-primary px-4 py-3 shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">
            {t.chat.title}
          </span>
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary-foreground/20 text-xs text-primary-foreground">
            {messages.filter((m) => m.sender === "bot").length}
          </span>
        </button>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          setIsMinimized(false)
        }}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl",
          isOpen && "rotate-0"
        )}
        aria-label={t.chat.title}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}
