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
    heroSub: '[Ein Satz: wofür SOAZ steht und warum diese Ecke im Internet uns gehört.]',
    ctaStory: 'Zur Geschichte',
    ctaUs: 'Wer wir sind',
    storyTitle: 'Die Geschichte hinter dem Namen',
    story: [
      '[Wie ihr drei euch kennengelernt habt und wie der Name SOAZ entstanden ist.]',
      '[Was das HQ für euch ist – ein Ort, ein Gruppenchat, ein Running Gag?]',
    ],
    usTitle: 'Wir drei',
    people: [
      { name: '[Name 1]', initial: '1', line: '[Ein Satz über diese Person.]' },
      { name: '[Name 2]', initial: '2', line: '[Ein Satz über diese Person.]' },
      { name: '[Name 3]', initial: '3', line: '[Ein Satz über diese Person.]' },
    ],
    timelineTitle: 'Zeitleiste',
    timeline: [
      { year: '[Jahr]', text: '[Wann ihr euch kennengelernt habt.]' },
      { year: '[Jahr]', text: '[Ein Moment, an den ihr euch alle erinnert.]' },
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
