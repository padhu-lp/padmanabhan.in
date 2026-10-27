export const SITE = {
  title: 'Joy of Traveling',
  author: 'Padmanabhan',
  tagline: 'Live to Learn, Learn to Live',
  description: 'Travel stories, adventures around the world, and technology writing by Padmanabhan.',
  email: 'admin@padmanabhan.in',
  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/padmanabhanl/' },
    { name: 'X', url: 'https://x.com/padhu_lp' },
    { name: 'Instagram', url: 'https://www.instagram.com/padhu_lp/' },
    { name: 'Facebook', url: 'https://www.facebook.com/padhu.lp' },
  ],
};

export const CATEGORIES = {
  travel: { label: 'Travel', blurb: 'Places, cultures and the stories behind them.' },
  adventure: { label: 'Adventure', blurb: 'Skydives, fjords, caves and anything with an adrenaline kick.' },
  tech: { label: 'Tech', blurb: 'AI, software and the tools changing how things get built.' },
} as const;

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
