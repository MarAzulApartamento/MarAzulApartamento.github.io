/**
 * Brand-voice overrides for the Klaro consent UI.
 *
 * Klaro ships built-in translations for all 7 locales we use. We only
 * override the strings where the default reads generic / corporate; Klaro
 * falls back to its built-in text for everything else.
 *
 * Voice rules apply (no em dashes, plain British English on EN, etc.).
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
      "Cloudflare counts visits without cookies; that runs by default. Google Analytics uses cookies and is only on if you accept it here.",
    learnMore: "Cookie settings",
  },
  consentModal: {
    title: "Cookies on this site",
    description:
      "Two analytics tools, one optional. Pick what you're comfortable with. You can change your mind any time from Cookie settings in the footer.",
  },
  acceptAll: "Accept all",
  acceptSelected: "Save selection",
  decline: "Decline all",
  ok: "Accept all",
  save: "Save",
  service: {
    'cloudflare-web-analytics': {
      description: "Cookieless. Counts visits without identifying you.",
    },
    'google-analytics': {
      description: "Cookies that help us see how the site is used.",
    },
  },
  purposes: { analytics: "Analytics" },
};

const pt: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "A Cloudflare conta as visitas sem cookies; está sempre ativa. O Google Analytics usa cookies e só se ativa se aceitar aqui.",
    learnMore: "Definições de cookies",
  },
  consentModal: {
    title: "Cookies neste site",
    description:
      "Duas ferramentas de análise, uma opcional. Escolha o que lhe parece bem. Pode mudar a sua decisão a qualquer momento em Definições de cookies, no rodapé.",
  },
  acceptAll: "Aceitar tudo",
  acceptSelected: "Guardar seleção",
  decline: "Recusar tudo",
  ok: "Aceitar tudo",
  save: "Guardar",
  service: {
    'cloudflare-web-analytics': {
      description: "Sem cookies. Conta as visitas sem o identificar.",
    },
    'google-analytics': {
      description: "Cookies que nos ajudam a ver como o site é utilizado.",
    },
  },
  purposes: { analytics: "Análise" },
};

const es: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "Cloudflare cuenta las visitas sin cookies; está siempre activa. Google Analytics usa cookies y solo se activa si lo aceptas aquí.",
    learnMore: "Configuración de cookies",
  },
  consentModal: {
    title: "Cookies en este sitio",
    description:
      "Dos herramientas de análisis, una opcional. Elige lo que te parezca bien. Puedes cambiar tu decisión en cualquier momento desde Configuración de cookies, en el pie de página.",
  },
  acceptAll: "Aceptar todo",
  acceptSelected: "Guardar selección",
  decline: "Rechazar todo",
  ok: "Aceptar todo",
  save: "Guardar",
  service: {
    'cloudflare-web-analytics': {
      description: "Sin cookies. Cuenta las visitas sin identificarte.",
    },
    'google-analytics': {
      description: "Cookies que nos ayudan a ver cómo se usa el sitio.",
    },
  },
  purposes: { analytics: "Análisis" },
};

const it: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "Cloudflare conta le visite senza cookie; è sempre attivo. Google Analytics usa i cookie e si attiva solo se lo accetti qui.",
    learnMore: "Impostazioni cookie",
  },
  consentModal: {
    title: "Cookie su questo sito",
    description:
      "Due strumenti di analisi, uno opzionale. Scegli quello con cui ti senti a tuo agio. Puoi cambiare idea in qualsiasi momento dalle Impostazioni cookie nel piè di pagina.",
  },
  acceptAll: "Accetta tutto",
  acceptSelected: "Salva selezione",
  decline: "Rifiuta tutto",
  ok: "Accetta tutto",
  save: "Salva",
  service: {
    'cloudflare-web-analytics': {
      description: "Senza cookie. Conta le visite senza identificarti.",
    },
    'google-analytics': {
      description: "Cookie che ci aiutano a vedere come viene usato il sito.",
    },
  },
  purposes: { analytics: "Analisi" },
};

const de: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "Cloudflare zählt Besuche ohne Cookies und ist immer aktiv. Google Analytics verwendet Cookies und ist nur aktiv, wenn du hier zustimmst.",
    learnMore: "Cookie-Einstellungen",
  },
  consentModal: {
    title: "Cookies auf dieser Seite",
    description:
      "Zwei Analyse-Tools, eines optional. Wähle, womit du dich wohl fühlst. Du kannst deine Entscheidung jederzeit über Cookie-Einstellungen im Footer ändern.",
  },
  acceptAll: "Alle akzeptieren",
  acceptSelected: "Auswahl speichern",
  decline: "Alle ablehnen",
  ok: "Alle akzeptieren",
  save: "Speichern",
  service: {
    'cloudflare-web-analytics': {
      description: "Ohne Cookies. Zählt Besuche, ohne dich zu identifizieren.",
    },
    'google-analytics': {
      description: "Cookies, die uns zeigen, wie die Seite genutzt wird.",
    },
  },
  purposes: { analytics: "Analyse" },
};

const nl: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "Cloudflare telt bezoeken zonder cookies en staat altijd aan. Google Analytics gebruikt cookies en is alleen actief als je dat hier accepteert.",
    learnMore: "Cookie-instellingen",
  },
  consentModal: {
    title: "Cookies op deze site",
    description:
      "Twee analysetools, één optioneel. Kies wat goed voelt. Je kunt je keuze altijd wijzigen via Cookie-instellingen in de footer.",
  },
  acceptAll: "Alles accepteren",
  acceptSelected: "Selectie opslaan",
  decline: "Alles weigeren",
  ok: "Alles accepteren",
  save: "Opslaan",
  service: {
    'cloudflare-web-analytics': {
      description: "Zonder cookies. Telt bezoeken zonder je te identificeren.",
    },
    'google-analytics': {
      description: "Cookies waarmee we zien hoe de site wordt gebruikt.",
    },
  },
  purposes: { analytics: "Analyse" },
};

const fr: KlaroBrandTranslation = {
  consentNotice: {
    description:
      "Cloudflare compte les visites sans cookies et est toujours actif. Google Analytics utilise des cookies et n'est activé que si vous l'acceptez ici.",
    learnMore: "Réglages des cookies",
  },
  consentModal: {
    title: "Cookies sur ce site",
    description:
      "Deux outils d'analyse, un optionnel. Choisissez ce qui vous convient. Vous pouvez changer d'avis à tout moment depuis Réglages des cookies dans le pied de page.",
  },
  acceptAll: "Tout accepter",
  acceptSelected: "Enregistrer la sélection",
  decline: "Tout refuser",
  ok: "Tout accepter",
  save: "Enregistrer",
  service: {
    'cloudflare-web-analytics': {
      description: "Sans cookies. Compte les visites sans vous identifier.",
    },
    'google-analytics': {
      description: "Cookies qui nous aident à voir comment le site est utilisé.",
    },
  },
  purposes: { analytics: "Analyse" },
};

const all: Record<string, KlaroBrandTranslation> = { en, pt, es, it, de, nl, fr };

export function getKlaroTranslations(lang: string | undefined): KlaroBrandTranslation {
  return all[lang || 'en'] || en;
}
