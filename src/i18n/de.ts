/**
 * de.ts – alle deutschen Texte der Website.
 * Muss genau dieselbe Struktur wie en.ts haben (": Dictionary" erzwingt das).
 */
import type { Dictionary } from './en';

export const de: Dictionary = {
  langName: 'Deutsch',
  skip: 'Zum Inhalt springen',
  nav: { story: 'Geschichte', us: 'Wir', timeline: 'Zeitleiste' },
  langSwitchLabel: 'Sprache',
  themeLabel: 'Zwischen hellem und dunklem Modus wechseln',
  home: {
    title: 'SOAZ HQ – drei Freunde, ein HQ',
    description: 'SOAZ HQ: drei Freunde und ihre Ecke im Internet.',
    since: 'seit',
    heroTitle: 'Drei Freunde. Ein HQ.',
    heroSub: 'SOAZ begann als Tippfehler in unserem Gruppenchat. Heute ist es unser Name, unser Insider und unsere kleine Ecke im Internet.',
    ctaStory: 'Zur Geschichte',
    ctaUs: 'Wer wir sind',
    storyTitle: 'Die Geschichte hinter dem Namen',
    story: [
      'Wir haben uns am ersten Schultag in der letzten Reihe kennengelernt und sind seitdem nicht mehr auseinandergekommen. Jahre später sollte eine Nachricht spät in der Nacht „so cool“ heißen, kam aber als „SOAZ“ an – und der Name blieb.',
      'Das HQ ist überall, wo wir drei sind: ein Küchentisch, eine lange Zugfahrt oder ein Gruppenchat, der nie schläft. Diese Website ist seine offizielle Adresse.',
    ],
    usTitle: 'Wir drei',
    people: [
      { name: 'Alex', initial: 'A', line: 'Plant jede Reise auf die Minute – und verpasst dann den Zug.' },
      { name: 'Ben', initial: 'B', line: 'Repariert alles mit Kabelbinder und etwas Geduld.' },
      { name: 'Chris', initial: 'C', line: 'Bringt die Snacks, die Playlist und die besten schlechten Witze.' },
    ],
    timelineTitle: 'Zeitleiste',
    timeline: [
      { year: '2012', text: 'Erster Schultag, letzte Reihe: Wir drei lernen uns kennen.' },
      { year: '2019', text: 'Ein Tippfehler im Gruppenchat gibt uns unseren Namen: SOAZ.' },
      { year: '2026', text: 'Gemeinsam die Domain soazhq.com gekauft.' },
    ],
  },
  footer: { legal: 'Offenlegung', privacy: 'Datenschutz' },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Diese Seite gibt es nicht.',
    back: 'Zur Startseite',
  },
};
