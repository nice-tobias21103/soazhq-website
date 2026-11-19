// astro.config.mjs – Konfiguration von Astro (dem Static-Site-Generator)
//
// C#-Vergleich: wie Program.cs/Startup in ASP.NET – hier wird eingestellt,
// WIE gebaut wird. Ergebnis von `npm run build` ist der Ordner ./dist mit
// reinem HTML/CSS, den Cloudflare ausliefert.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://soazhq.com',
  output: 'static',

  // Mehrsprachigkeit: Englisch ist Standard und liegt direkt unter "/",
  // Deutsch unter "/de/".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },

  build: {
    // /de/offenlegung/index.html statt /de/offenlegung.html
    format: 'directory',
    // CSS immer als eigene Datei, nie inline im HTML – sonst würde unsere
    // strenge Content-Security-Policy (public/_headers) das CSS blockieren.
    inlineStylesheets: 'never',
  },

  // Keine Entwickler-Leiste im lokalen Vorschau-Modus
  devToolbar: { enabled: false },
});
