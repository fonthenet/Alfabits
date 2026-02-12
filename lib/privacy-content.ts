import type { LegalSection } from "./terms-content"

export type PrivacyContent = {
  title: string
  updated: string
  sections: LegalSection[]
}

export const privacyContent: Record<"en" | "fr" | "ar", PrivacyContent> = {
  en: {
    title: "Privacy Policy",
    updated: "Last Updated: January 1, 2026",
    sections: [
      {
        title: "1. Information We Collect",
        body: "We collect information you provide directly, such as your name, email address, phone number, and company name when you fill out contact forms or communicate with us. We also automatically collect certain technical information when you visit our website, including IP addresses, browser type, and pages visited.",
      },
      {
        title: "2. How We Use Your Information",
        body: "We use your information to respond to inquiries, provide our services, improve our website, send relevant communications, and comply with legal obligations. We never sell your personal information to third parties.",
      },
      {
        title: "3. Data Security",
        body: "We implement industry-standard security measures to protect your data, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.",
      },
      {
        title: "4. Cookies",
        body: "Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings.",
      },
      {
        title: "5. Your Rights",
        body: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. Contact us at privacy@alfabits.net to exercise these rights.",
      },
      {
        title: "6. Contact",
        body: 'For questions about this privacy policy, please contact us at <a href="mailto:privacy@alfabits.net" class="text-primary hover:underline">privacy@alfabits.net</a>.',
      },
    ],
  },
  fr: {
    title: "Politique de Confidentialité",
    updated: "Dernière mise à jour : 1er janvier 2026",
    sections: [
      {
        title: "1. Informations que nous collectons",
        body: "Nous collectons les informations que vous fournissez directement (nom, adresse e-mail, numéro de téléphone, nom de l'entreprise) lorsque vous remplissez des formulaires de contact ou communiquez avec nous. Nous collectons également automatiquement certaines données techniques lors de votre visite (adresses IP, type de navigateur, pages consultées).",
      },
      {
        title: "2. Utilisation de vos informations",
        body: "Nous utilisons vos informations pour répondre à vos demandes, fournir nos services, améliorer notre site, envoyer des communications pertinentes et respecter nos obligations légales. Nous ne vendons jamais vos données personnelles à des tiers.",
      },
      {
        title: "3. Sécurité des données",
        body: "Nous mettons en œuvre des mesures de sécurité conformes aux standards du secteur (chiffrement, serveurs sécurisés, contrôles d'accès). Aucune transmission sur Internet n'est toutefois totalement sécurisée.",
      },
      {
        title: "4. Cookies",
        body: "Notre site utilise des cookies et des technologies de suivi similaires pour améliorer votre expérience. Vous pouvez gérer les cookies dans les paramètres de votre navigateur.",
      },
      {
        title: "5. Vos droits",
        body: "Vous avez le droit d'accéder, de rectifier ou de supprimer vos données personnelles, et de vous désinscrire des communications commerciales à tout moment. Contactez-nous à privacy@alfabits.net pour exercer ces droits.",
      },
      {
        title: "6. Contact",
        body: 'Pour toute question sur cette politique de confidentialité, contactez-nous à <a href="mailto:privacy@alfabits.net" class="text-primary hover:underline">privacy@alfabits.net</a>.',
      },
    ],
  },
  ar: {
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: 1 يناير 2026",
    sections: [
      {
        title: "1. المعلومات التي نجمعها",
        body: "نجمع المعلومات التي تقدمها مباشرة (الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة) عند ملء نماذج الاتصال أو التواصل معنا. كما نجمع تلقائياً بعض البيانات التقنية عند زيارة موقعنا (عناوين IP، نوع المتصفح، الصفحات المُزارة).",
      },
      {
        title: "2. كيف نستخدم معلوماتك",
        body: "نستخدم معلوماتك للرد على الاستفسارات، وتقديم خدماتنا، وتحسين موقعنا، وإرسال اتصالات ذات صلة، والامتثال للالتزامات القانونية. لا نبيع أبداً بياناتك الشخصية لأطراف ثالثة.",
      },
      {
        title: "3. أمان البيانات",
        body: "نطبق إجراءات أمان وفق معايير القطاع (التشفير، خوادم آمنة، ضوابط الوصول). مع ذلك، لا توجد وسيلة نقل عبر الإنترنت آمنة بنسبة 100٪.",
      },
      {
        title: "4. ملفات تعريف الارتباط",
        body: "يستخدم موقعنا ملفات تعريف الارتباط وتقنيات تتبع مماثلة لتحسين تجربة التصفح. يمكنك التحكم في ملفات الارتباط من إعدادات المتصفح.",
      },
      {
        title: "5. حقوقك",
        body: "لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها، والانسحاب من الرسائل التسويقية في أي وقت. تواصل معنا على privacy@alfabits.net لممارسة هذه الحقوق.",
      },
      {
        title: "6. الاتصال",
        body: 'للاستفسار عن سياسة الخصوصية، تواصل معنا على <a href="mailto:privacy@alfabits.net" class="text-primary hover:underline">privacy@alfabits.net</a>.',
      },
    ],
  },
}
