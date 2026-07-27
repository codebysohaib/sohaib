export interface BlogPost {
  slug: string;
  title: string;
  category: 'Projects' | 'Development' | 'Tutorials' | 'Tools';
  date: string;
  readTime: string;
  author: string;
  description: string;
  featured?: boolean;
  coverIcon: string;
  visualClass: string;
}

export const blogCategories = [
  'All',
  'Projects',
  'Development',
  'Tutorials',
  'Tools',
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogPosts: BlogPost[] = [
  {
    slug: 'introducing-cbs-devtools',
    title: 'Introducing CBS DevTools, My All in One Developer Utility CLI',
    category: 'Projects',
    date: 'July 2026',
    readTime: '5 min read',
    author: 'Muhammad Sohaib Asif',
    description:
      'CBS DevTools is an open source developer utility CLI built with Node.js and TypeScript. It brings useful developer, network, system, file, and web utilities together in one simple terminal toolkit.',
    featured: true,
    coverIcon: 'fas fa-terminal',
    visualClass: 'pv-6',
  },
];
