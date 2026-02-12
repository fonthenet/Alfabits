export type LegalSection = { title: string; body: string }

export type TermsContent = {
  title: string
  updated: string
  sections: LegalSection[]
}

export const termsContent: Record<"en" | "fr" | "ar", TermsContent> = {
  en: {
    title: "Terms of Service",
    updated: "Last Updated: January 1, 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        body: 'By accessing and using the services provided by Alfabits ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
      },
      {
        title: "2. Services Provided",
        body: "Alfabits provides digital product development services including web development, mobile applications, AI solutions, business automations, UI/UX design, and technology consulting. The specific scope of services will be outlined in individual project agreements.",
      },
      {
        title: "3. Intellectual Property",
        body: "Upon full payment, clients receive ownership of the deliverables as specified in the project agreement. Alfabits retains the right to showcase completed projects in our portfolio unless otherwise agreed in writing.",
      },
      {
        title: "4. Payment Terms",
        body: "Payment terms are specified in individual project proposals. Standard terms require a deposit before work begins and milestone payments throughout the project. Late payments may result in work suspension.",
      },
      {
        title: "5. Limitation of Liability",
        body: "Alfabits shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.",
      },
      {
        title: "6. Governing Law",
        body: "These terms shall be governed by the laws of the State of California, United States. Any disputes shall be resolved in the courts of Los Angeles County, California.",
      },
      {
        title: "7. Contact",
        body: 'For questions about these terms, please contact us at <a href="mailto:legal@alfabits.net" class="text-primary hover:underline">legal@alfabits.net</a>.',
      },
    ],
  },
  fr: {
    title: "Conditions d'Utilisation",
    updated: "Dernière mise à jour : 1er janvier 2026",
    sections: [
      {
        title: "1. Acceptation des conditions",
        body: "En accédant aux services fournis par Alfabits (« nous », « notre » ou « nos »), vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.",
      },
      {
        title: "2. Services fournis",
        body: "Alfabits fournit des services de développement de produits numériques : développement web, applications mobiles, solutions IA, automatisations métier, design UI/UX et conseil en technologie. Le périmètre précis des services est défini dans les accords de projet individuels.",
      },
      {
        title: "3. Propriété intellectuelle",
        body: "Après paiement intégral, le client acquiert la propriété des livrables tels que spécifiés dans l'accord de projet. Alfabits se réserve le droit de présenter les projets réalisés dans son portfolio sauf accord écrit contraire.",
      },
      {
        title: "4. Conditions de paiement",
        body: "Les conditions de paiement sont précisées dans les propositions de projet. Les conditions types prévoient un acompte avant le début des travaux et des paiements à chaque jalon. Les retards de paiement peuvent entraîner la suspension des travaux.",
      },
      {
        title: "5. Limitation de responsabilité",
        body: "Alfabits ne pourra être tenu responsable des dommages indirects, accessoires ou consécutifs résultant de l'utilisation de nos services. Notre responsabilité globale ne pourra excéder le montant payé pour le service concerné.",
      },
      {
        title: "6. Droit applicable",
        body: "Les présentes conditions sont régies par le droit de l'État de Californie (États-Unis). Tout litige sera porté devant les tribunaux du comté de Los Angeles, Californie.",
      },
      {
        title: "7. Contact",
        body: 'Pour toute question concernant ces conditions, contactez-nous à <a href="mailto:legal@alfabits.net" class="text-primary hover:underline">legal@alfabits.net</a>.',
      },
    ],
  },
  ar: {
    title: "\u0634\u0631\u0648\u0637 \u0627\u0644\u062E\u062F\u0645\u0629",
    updated: "\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B: 1 \u064A\u0646\u0627\u064A\u0631 2026",
    sections: [
      {
        title: "1. \u0642\u0628\u0648\u0644 \u0627\u0644\u0634\u0631\u0648\u0637",
        body: "\u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0643 \u0644\u062E\u062F\u0645\u0627\u062A \u0623\u0644\u0641\u0627\u0628\u064A\u062A\u0633 (\u00AB\u0646\u062D\u0646\u00BB\u060C \u00AB\u0646\u0627\u00BB \u0623\u0648 \u00AB\u0644\u0646\u0627\u00BB) \u062A\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645 \u0628\u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0648\u0637. \u0625\u0630\u0627 \u0644\u0645 \u062A\u0648\u0627\u0641\u0642 \u0641\u0644\u0627 \u062A\u0633\u062A\u062E\u062F\u0645 \u062E\u062F\u0645\u0627\u062A\u0646\u0627.",
      },
      {
        title: "2. \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0642\u062F\u0645\u0629",
        body: "\u062A\u0642\u062F\u0645 \u0623\u0644\u0641\u0627\u0628\u064A\u062A\u0633 \u062E\u062F\u0645\u0627\u062A \u062A\u0637\u0648\u064A\u0631 \u0645\u0646\u062A\u062C\u0627\u062A \u0631\u0642\u0645\u064A\u0629 \u062A\u0634\u0645\u0644 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 \u0648\u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644 \u0648\u062D\u0644\u0648\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u062A\u0634\u063A\u064A\u0644 \u0622\u0644\u064A \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0648\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0642\u0646\u064A\u0629. \u064a\u062d\u062f\u062f \u0646\u0637\u0627\u0642 \u0627\u0644\u062E\u062F\u0645\u0627\u062a \u0641\u064A \u0627\u062a\u0641\u0627\u0642\u0627\u062a \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0641\u0631\u062F\u064A\u0629.",
      },
      {
        title: "3. \u0627\u0644\u0645\u0644\u0643\u064A\u0629 \u0627\u0644\u0641\u0643\u0631\u064A\u0629",
        body: "\u0628\u0639\u062F \u0627\u0644\u0633\u062F\u0627\u062F \u0627\u0644\u0643\u0627\u0645\u0644 \u064a\u062d\u0635\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0639\u0644\u0649 \u0645\u0644\u0643\u064A\u0629 \u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0643\u0645\u0627 \u0641\u064A \u0627\u062a\u0641\u0627\u0642 \u0627\u0644\u0645\u0634\u0631\u0648\u0639. \u062a\u062d\u062a\u0641\u0638 \u0623\u0644\u0641\u0627\u0628\u064A\u062A\u0633 \u0628\u062d\u0642 \u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629 \u0641\u064A \u0627\u0644\u0645\u0639\u0631\u0648\u0636 \u0625\u0644\u0627 \u0628\u0645\u0648\u0627\u0641\u0642\u0629 \u0643\u062a\u0627\u0628\u064A\u0629.",
      },
      {
        title: "4. \u0627\u0644\u062F\u0641\u0639",
        body: "\u062a\u062d\u062f\u062f \u0634\u0631\u0648\u0637 \u0627\u0644\u062F\u0641\u0639 \u0641\u064A \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u0641\u0631\u062F\u064A\u0629. \u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0639\u0627\u062F\u064A\u0629 \u062a\u062a\u0637\u0644\u0628 \u0623\u0642\u0633\u0627\u0637\u0627\u064b \u0642\u0628\u0644 \u0628\u062F\u0621 \u0627\u0644\u0639\u0645\u0644 \u0648\u062f\u0641\u0639\u0627\u062a \u0645\u0631\u062d\u0644\u064A\u0629. \u0642\u062f \u064a\u0624\u062f\u064a \u062a\u0623\u062e\u0631 \u0627\u0644\u062F\u0641\u0639 \u0625\u0644\u0649 \u0625\u064a\u0642\u0627\u0641 \u0627\u0644\u0639\u0645\u0644.",
      },
      {
        title: "5. \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629",
        body: "\u0644\u0627 \u062a\u062a\u062d\u0645\u0644 \u0623\u0644\u0641\u0627\u0628\u064A\u062A\u0633 \u0623\u064a \u0623\u0636\u0631\u0627\u0631 \u063a\u064a\u0631 \u0645\u0628\u0627\u0634\u0631\u0629 \u0623\u0648 \u0639\u0631\u0636\u064A\u0629 \u0623\u0648 \u062a\u0628\u0639\u064A\u0629 \u0646\u0627\u062a\u062c\u0629 \u0639\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062e\u062f\u0645\u0627\u062a\u0646\u0627. \u0644\u0627 \u062a\u062a\u062c\u0627\u0648\u0632 \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0646\u0627 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0645\u0628\u0644\u063a \u0627\u0644\u0645\u062f\u0641\u0648\u0639 \u0644\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0639\u0646\u064A\u0629.",
      },
      {
        title: "6. \u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u062C\u0627\u0631\u064A",
        body: "\u062a\u062e\u0636\u0649 \u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0648\u0637 \u0644\u0642\u0648\u0627\u0646\u064a\u0646 \u0648\u0644\u0627\u064A\u0629 \u0643\u0627\u0644\u064A\u0641\u0648\u0631\u0646\u064A\u0627 \u0628\u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629. \u062a\u062d\u0644 \u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062a \u0623\u0645\u0627\u0645 \u0645\u062D\u0627\u0643\u0645 \u0645\u0642\u0627\u0637\u0639\u0629 \u0644\u0648\u0633 \u0623\u0646\u062C\u0644\u0648\u0633.",
      },
      {
        title: "7. \u0627\u0644\u0627\u062A\u0635\u0627\u0644",
        body: '\u0644\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u062a\u0635\u0644 \u0628\u0646\u0627 \u0639\u0644\u0649 <a href="mailto:legal@alfabits.net" class="text-primary hover:underline">legal@alfabits.net</a>.',
      },
    ],
  },
}
