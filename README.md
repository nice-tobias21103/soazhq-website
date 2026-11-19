# soazhq-website

Quellcode der Website [soazhq.com](https://soazhq.com): ein paar schlichte, statische Seiten,
ausgeliefert über Cloudflare Workers (Static Assets).

Reines HTML + CSS, kein JavaScript, kein Build-Schritt, keine Cookies, keine externen Ressourcen.

## Aufbau

```text
public/               ← alles hier drin wird 1:1 ausgeliefert
├── index.html        Startseite
├── offenlegung.html  Offenlegung nach § 25 Mediengesetz
├── datenschutz.html  Datenschutzerklärung
├── 404.html          Seite für unbekannte Adressen
├── styles.css        einziges Stylesheet (inkl. Dark Mode)
├── favicon.svg       Logo
├── robots.txt        Hinweis für Suchmaschinen
└── _headers          Sicherheits-Header (wird gelesen, nicht ausgeliefert)
wrangler.jsonc        Wrangler-Konfiguration
package.json          legt die Wrangler-Version fest (wie eine NuGet-Referenz)
package-lock.json     exakte Versionen aller Abhängigkeiten
```

## Seiten bearbeiten

Die passende HTML-Datei in `public/` ändern. Jede Seite enthält Kopf- und Fußzeile selbst,
weil es keinen Build-Schritt gibt. Für eine neue Seite am besten `offenlegung.html` kopieren.

## Branches

- `main` – veröffentlichter Stand
- `develop` – Teststand
- Änderungen nur per Pull Request von einem eigenen Branch (`feature/…`, `fix/…`, `docs/…`) nach `develop`, Release per Pull Request `develop` → `main`.

## Lokal ausprobieren (optional, Node.js 20+)

```bash
npm ci          # Abhängigkeiten laut package-lock.json installieren
npm run dev     # http://localhost:8787
npm run check   # Konfiguration prüfen, ohne zu deployen
```
