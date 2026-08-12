import type { Locale } from "./config";

const en = {
  nav: {
    manifesto: "Manifesto",
    rules: "Rules",
    festival: "Festival",
    partners: "Partners",
    register: "Register",
  },
  common: {
    comingSoon: "Coming soon",
    tba: "TBA",
    est: "EST. 2026 · BULGARIA",
    byDevids: "A Devids production",
  },
  footer: {
    tagline: "The best project wins. For real.",
    navTitle: "Site",
    contactTitle: "Contact",
    legalTitle: "Boring stuff",
    privacy: "Privacy",
    terms: "Rules & Terms",
    rights: "Nothing on this page is rigged.",
  },
};

const bg: typeof en = {
  nav: {
    manifesto: "Манифест",
    rules: "Правила",
    festival: "Фестивал",
    partners: "Партньори",
    register: "Регистрация",
  },
  common: {
    comingSoon: "Очаквайте скоро",
    tba: "Очаквайте",
    est: "ОСН. 2026 · БЪЛГАРИЯ",
    byDevids: "Продукция на Devids",
  },
  footer: {
    tagline: "Печели най-добрият проект. Наистина.",
    navTitle: "Сайт",
    contactTitle: "Контакт",
    legalTitle: "Скучните неща",
    privacy: "Поверителност",
    terms: "Правила и условия",
    rights: "Нищо на тази страница не е нагласено.",
  },
};

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, bg };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
