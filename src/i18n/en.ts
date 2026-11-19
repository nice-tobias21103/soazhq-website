/**
 * en.ts – alle englischen Texte der Website.
 *
 * Texte in [eckigen Klammern] sind Platzhalter, die noch ersetzt werden.
 * de.ts muss dieselben Schlüssel haben – TypeScript prüft das beim Build
 * (wie ein Interface in C#, das beide Klassen implementieren müssen).
 */
export const en = {
  langName: 'English',
  skip: 'Skip to content',
  nav: { story: 'Story', us: 'Us', timeline: 'Timeline' },
  langSwitchLabel: 'Language',
  themeLabel: 'Switch between light and dark mode',
  home: {
    title: 'SOAZ HQ – three friends, one HQ',
    description: 'SOAZ HQ: three friends and their corner of the internet.',
    since: 'since',
    heroTitle: 'Three friends. One HQ.',
    heroSub: '[One sentence: what SOAZ stands for and why this corner of the internet is ours.]',
    ctaStory: 'Read the story',
    ctaUs: 'Meet us',
    storyTitle: 'The story behind the name',
    story: [
      '[How the three of you met and how the name SOAZ came about.]',
      '[What the HQ means to you – a place, a group chat, a running joke?]',
    ],
    usTitle: 'The three of us',
    people: [
      { name: '[Name 1]', initial: '1', line: '[One sentence about this person.]' },
      { name: '[Name 2]', initial: '2', line: '[One sentence about this person.]' },
      { name: '[Name 3]', initial: '3', line: '[One sentence about this person.]' },
    ],
    timelineTitle: 'Timeline',
    timeline: [
      { year: '[Year]', text: '[When the three of you met.]' },
      { year: '[Year]', text: '[A moment you all remember.]' },
      { year: '2026', text: 'Bought the domain soazhq.com together.' },
    ],
  },
  footer: { legal: 'Legal notice', privacy: 'Privacy' },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist.',
    back: 'Back to the homepage',
  },
};

export type Dictionary = typeof en;
