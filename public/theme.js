/*
 * theme.js – Hell/Dunkel-Umschalter.
 *
 * Wird im <head> geladen, damit die Seite sofort in der richtigen Farbe
 * erscheint (kein kurzes "Aufblitzen" der falschen Farbe).
 * Die Wahl wird im localStorage des Browsers gespeichert (kein Cookie,
 * wird nie an einen Server geschickt). Ohne gespeicherte Wahl folgt die
 * Seite der Einstellung des Geräts.
 *
 * Bewusst eine eigene Datei statt Inline-Skript: Die Content-Security-Policy
 * erlaubt nur Skripte von soazhq.com selbst.
 */
(function () {
  var KEY = 'theme';
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function systemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function current() {
    var s = stored();
    if (s === 'dark' || s === 'light') return s;
    return systemDark() ? 'dark' : 'light';
  }
  function apply(theme) {
    root.setAttribute('data-theme', theme);
  }

  // 1. Sofort beim Laden anwenden
  apply(current());

  // 2. Sobald die Seite da ist: Knopf sichtbar machen und verdrahten
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    btn.hidden = false;
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* privates Fenster o. Ä. */ }
    });
  });
})();
