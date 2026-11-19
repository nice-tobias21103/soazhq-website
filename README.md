# soazhq-website

Quellcode der Website [soazhq.com](https://soazhq.com). Gebaut mit [Astro](https://astro.build)
als statische Seite, ausgeliefert über Cloudflare Workers (Static Assets).

- Englisch unter `/`, Deutsch unter `/de/`
- Hell/Dunkel-Modus (folgt dem Gerät, mit Umschalter)
- Responsiv für Handy, Tablet und Desktop
- Kein Tracking, keine Cookies, keine externen Ressourcen

## Aufbau

```text
src/
├── site.ts              Name, Ort usw. – an einer Stelle für alle Seiten
├── i18n/
│   ├── en.ts            alle englischen Texte
│   ├── de.ts            alle deutschen Texte (gleiche Struktur wie en.ts)
│   └── index.ts         Sprach-Hilfen und Seitenadressen pro Sprache
├── layouts/Base.astro   gemeinsames Gerüst: <head>, Kopfzeile, Fußzeile
├── components/          Bausteine (Startseiten-Inhalt, Logo)
├── pages/               jede Datei = eine Adresse
│   ├── index.astro          /            (EN)
│   ├── legal-notice.astro   /legal-notice/
│   ├── privacy.astro        /privacy/
│   ├── 404.astro            unbekannte Adressen
│   └── de/                  /de/, /de/offenlegung/, /de/datenschutz/
└── styles/global.css    Farben, Layout, Hell/Dunkel
public/                  wird 1:1 übernommen (Favicon, _headers, theme.js, robots.txt)
astro.config.mjs         Astro-Einstellungen (Sprachen, Build)
wrangler.jsonc           Cloudflare-Konfiguration (liefert ./dist aus)
```

## Texte ändern

Fast alle Texte stehen in `src/i18n/en.ts` und `src/i18n/de.ts`. Beide Dateien müssen dieselben
Schlüssel haben – fehlt einer, schlägt der Build fehl. Rechtstexte stehen direkt in den
jeweiligen Seiten unter `src/pages/`.

## Build und Deploy

`npm run build` erzeugt den Ordner `dist/` mit reinem HTML/CSS. Cloudflare baut und deployt
automatisch bei jedem Merge (`develop` → Testumgebung, `main` → soazhq.com).

## Branches

- `main` – veröffentlichter Stand
- `develop` – Teststand
- Änderungen nur per Pull Request von einem eigenen Branch nach `develop`, Release per Pull Request `develop` → `main`.

## Lokal ausprobieren (optional, Node.js 22+)

```bash
npm ci           # Abhängigkeiten installieren
npm run dev      # Astro-Vorschau mit automatischem Neuladen
npm run check    # bauen und Cloudflare-Konfiguration prüfen
```
