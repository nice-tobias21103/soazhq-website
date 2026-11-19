/**
 * site.ts – Angaben, die an mehreren Stellen der Website vorkommen.
 *
 * C#-Vergleich: wie eine statische Klasse mit Konstanten
 * (public static class Site { public const string Owner = "..."; }).
 * Hier ändern → überall geändert.
 */
export const SITE = {
  name: 'SOAZ HQ',
  domain: 'soazhq.com',
  /** Medieninhaber laut Offenlegung (§ 25 MedienG) */
  owner: 'Tobias Ingerle',
  /** Wohnort des Medieninhabers */
  city: 'Wien',
  cityEn: 'Vienna',
  country: 'Österreich',
  countryEn: 'Austria',
  since: 2026,
} as const;
