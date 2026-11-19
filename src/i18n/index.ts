/**
 * i18n/index.ts – Hilfsfunktionen für die zwei Sprachen.
 *
 * C#-Vergleich: ungefähr wie Ressourcen-Dateien (.resx) plus eine kleine
 * Hilfsklasse, die zur gewählten Sprache die passenden Texte und Adressen liefert.
 */
import { en } from './en';
import { de } from './de';

export type Lang = 'en' | 'de';
export const LANGS: Lang[] = ['en', 'de'];

const dictionaries = { en, de };

/** Alle Texte einer Sprache */
export function t(lang: Lang) {
  return dictionaries[lang];
}

/**
 * Jede Seite hat pro Sprache eine eigene Adresse.
 * Englisch liegt direkt unter "/", Deutsch unter "/de/".
 */
export const ROUTES = {
  home: { en: '/', de: '/de/' },
  legal: { en: '/legal-notice/', de: '/de/offenlegung/' },
  privacy: { en: '/privacy/', de: '/de/datenschutz/' },
} as const;

export type PageKey = keyof typeof ROUTES;
