const base = import.meta.env.BASE_URL;
export const productsUrl = `${base}products/`;
export const studioUrl = `${productsUrl}atm-content-studio/`;
export const openMarkdownUrl = `${base}openmarkdown/`;
export const koonjUrl = `${base}koonj/`;

export const products = [
  {
    id: 'koonj',
    name: 'Koonj',
    url: koonjUrl,
    icon: `${koonjUrl}koonj-mark.svg`,
    category: 'File lifecycle management',
    summary: 'Catalog files, archive inactive data to Amazon S3, and recall it when your team needs it.',
  },
  {
    id: 'markdown',
    name: 'OpenMarkdown',
    url: openMarkdownUrl,
    icon: `${openMarkdownUrl}images/openmarkdown-logo.svg`,
    category: 'Markdown editing',
    summary: 'Write and preview Markdown in a free editor with five export formats and read-only sharing links.',
  },
  {
    id: 'studio',
    name: 'ATM Content Studio',
    url: studioUrl,
    icon: null,
    category: 'AI content creation',
    summary: 'An AI-powered studio that brings artificial intelligence into the creative process.',
  },
] as const;

export type Product = (typeof products)[number];
