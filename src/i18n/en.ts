/**
 * en.ts – alle englischen Texte der Website.
 *
 * Namen, Geschichte und Zeitleiste sind ERFUNDENE Beispieltexte und werden
 * später durch die echten ersetzt.
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
    heroSub: 'SOAZ started as a typo in our group chat. Now it is our name, our inside joke and our little corner of the internet.',
    ctaStory: 'Read the story',
    ctaUs: 'Meet us',
    storyTitle: 'The story behind the name',
    story: [
      'We met on the first day of school, stuck together in the back row and never really left it. Years later, one late-night message meant to say "so cool" arrived as "SOAZ" – and the name stuck.',
      'The HQ is wherever the three of us are: a kitchen table, a long train ride or a group chat that never sleeps. This website is its official address.',
    ],
    usTitle: 'The three of us',
    people: [
      { name: 'Alex', initial: 'A', line: 'Plans every trip down to the minute – and then misses the train.' },
      { name: 'Ben', initial: 'B', line: 'Can fix anything with a cable tie and a bit of patience.' },
      { name: 'Chris', initial: 'C', line: 'Brings the snacks, the playlist and the best bad jokes.' },
    ],
    timelineTitle: 'Timeline',
    timeline: [
      { year: '2012', text: 'First day of school, back row: the three of us meet.' },
      { year: '2019', text: 'A typo in the group chat gives us our name: SOAZ.' },
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
