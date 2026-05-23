/**
 * Brand-voice overrides for the Klaro consent UI.
 *
 * Friendlier, less technical wording than Klaro's defaults — no name-dropping
 * Cloudflare or Google Analytics in the top-level message. The user opens
 * Cookie settings if they want the per-tool detail.
 *
 * Voice rules apply (no em dashes, plain British English on EN).
 */

export interface KlaroBrandTranslation {
  consentNotice: {
    description: string;
    learnMore: string;
  };
  consentModal: {
    title: string;
    description: string;
  };
  acceptAll: string;
  acceptSelected: string;
  decline: string;
  ok: string;
  save: string;
  service: {
    'cloudflare-web-analytics': { description: string };
    'google-analytics': { description: string };
  };
  purposes: {
    analytics: string;
  };
}

const en: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "We use a couple of small tools to understand how the site is used. You decide what's comfortable.",
    learnMore: "Cookie settings",
  },
  consentModal: {
    title: "Cookies on this site",
    description:
      "Pick what you're happy with. You can change your mind any time from Cookie settings in the footer.",
  },
  acceptAll: "Accept all",
  acceptSelected: "Save selection",
  decline: "Decline all",
  ok: "Accept all",
  save: "Save",
  service: {
    'cloudflare-web-analytics': {
      description: "Counts visits without cookies. Always on.",
    },
    'google-analytics': {
      description: "Helps us see how the site is used. Uses cookies.",
    },
  },
  purposes: { analytics: "Analytics" },
};

const pt: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "Usamos algumas pequenas ferramentas para perceber como o site é utilizado. Decida o que lhe parece bem.",
    learnMore: "Definições de cookies",
  },
  consentModal: {
    title: "Cookies neste site",
    description:
      "Escolha o que lhe parece bem. Pode mudar de ideias a qualquer momento em Definições de cookies, no rodapé.",
  },
  acceptAll: "Aceitar tudo",
  acceptSelected: "Guardar seleção",
  decline: "Recusar tudo",
  ok: "Aceitar tudo",
  save: "Guardar",
  service: {
    'cloudflare-web-analytics': {
      description: "Conta as visitas sem cookies. Sempre ativa.",
    },
    'google-analytics': {
      description: "Ajuda-nos a ver como o site é utilizado. Usa cookies.",
    },
  },
  purposes: { analytics: "Análise" },
};

const es: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "Usamos algunas herramientas pequeñas para entender cómo se usa el sitio. Tú decides con qué te sientes cómodo.",
    learnMore: "Configuración de cookies",
  },
  consentModal: {
    title: "Cookies en este sitio",
    description:
      "Elige lo que te parezca bien. Puedes cambiar de opinión en cualquier momento desde Configuración de cookies, en el pie de página.",
  },
  acceptAll: "Aceptar todo",
  acceptSelected: "Guardar selección",
  decline: "Rechazar todo",
  ok: "Aceptar todo",
  save: "Guardar",
  service: {
    'cloudflare-web-analytics': {
      description: "Cuenta las visitas sin cookies. Siempre activa.",
    },
    'google-analytics': {
      description: "Nos ayuda a ver cómo se usa el sitio. Usa cookies.",
    },
  },
  purposes: { analytics: "Análisis" },
};

const it: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "Usiamo alcuni piccoli strumenti per capire come viene usato il sito. Decidi tu cosa ti va bene.",
    learnMore: "Impostazioni cookie",
  },
  consentModal: {
    title: "Cookie su questo sito",
    description:
      "Scegli quello che ti va bene. Puoi cambiare idea in qualsiasi momento dalle Impostazioni cookie nel piè di pagina.",
  },
  acceptAll: "Accetta tutto",
  acceptSelected: "Salva selezione",
  decline: "Rifiuta tutto",
  ok: "Accetta tutto",
  save: "Salva",
  service: {
    'cloudflare-web-analytics': {
      description: "Conta le visite senza cookie. Sempre attiva.",
    },
    'google-analytics': {
      description: "Ci aiuta a capire come viene usato il sito. Usa cookie.",
    },
  },
  purposes: { analytics: "Analisi" },
};

const de: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "Wir nutzen ein paar kleine Tools, um zu verstehen, wie die Seite genutzt wird. Du entscheidest, womit du dich wohl fühlst.",
    learnMore: "Cookie-Einstellungen",
  },
  consentModal: {
    title: "Cookies auf dieser Seite",
    description:
      "Wähle, was sich für dich gut anfühlt. Du kannst deine Entscheidung jederzeit über Cookie-Einstellungen im Footer ändern.",
  },
  acceptAll: "Alle akzeptieren",
  acceptSelected: "Auswahl speichern",
  decline: "Alle ablehnen",
  ok: "Alle akzeptieren",
  save: "Speichern",
  service: {
    'cloudflare-web-analytics': {
      description: "Zählt Besuche ohne Cookies. Immer aktiv.",
    },
    'google-analytics': {
      description: "Hilft uns zu sehen, wie die Seite genutzt wird. Nutzt Cookies.",
    },
  },
  purposes: { analytics: "Analyse" },
};

const nl: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "We gebruiken een paar kleine tools om te begrijpen hoe de site wordt gebruikt. Jij beslist wat goed voelt.",
    learnMore: "Cookie-instellingen",
  },
  consentModal: {
    title: "Cookies op deze site",
    description:
      "Kies wat goed voelt. Je kunt je keuze altijd wijzigen via Cookie-instellingen in de footer.",
  },
  acceptAll: "Alles accepteren",
  acceptSelected: "Selectie opslaan",
  decline: "Alles weigeren",
  ok: "Alles accepteren",
  save: "Opslaan",
  service: {
    'cloudflare-web-analytics': {
      description: "Telt bezoeken zonder cookies. Altijd aan.",
    },
    'google-analytics': {
      description: "Helpt ons zien hoe de site wordt gebruikt. Gebruikt cookies.",
    },
  },
  purposes: { analytics: "Analyse" },
};

const fr: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "Nous utilisons quelques petits outils pour comprendre comment le site est utilisé. Vous décidez de ce qui vous convient.",
    learnMore: "Réglages des cookies",
  },
  consentModal: {
    title: "Cookies sur ce site",
    description:
      "Choisissez ce qui vous convient. Vous pouvez changer d'avis à tout moment depuis Réglages des cookies dans le pied de page.",
  },
  acceptAll: "Tout accepter",
  acceptSelected: "Enregistrer la sélection",
  decline: "Tout refuser",
  ok: "Tout accepter",
  save: "Enregistrer",
  service: {
    'cloudflare-web-analytics': {
      description: "Compte les visites sans cookies. Toujours actif.",
    },
    'google-analytics': {
      description: "Nous aide à voir comment le site est utilisé. Utilise des cookies.",
    },
  },
  purposes: { analytics: "Analyse" },
};

const all: Record<string, KlaroBrandTranslation> = { en, pt, es, it, de, nl, fr };

export function getKlaroTranslations(lang: string | undefined): KlaroBrandTranslation {
  return all[lang || 'en'] || en;
}
