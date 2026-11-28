const base = import.meta.env.BASE_URL;
export const productsUrl = `${base}products/`;
export const studioUrl = `${productsUrl}atm-content-studio/`;
export const openMarkdownUrl = `${base}openmarkdown/`;
export const koonjUrl = `${base}koonj/`;
export const workUrl = `${base}work/`;

export const statusLabels = { available: 'Available now', soon: 'Coming soon' } as const;

export const products = [
  {
    id: 'markdown',
    name: 'OpenMarkdown',
    url: openMarkdownUrl,
    icon: `${openMarkdownUrl}images/openmarkdown-logo.svg`,
    status: 'available',
    category: 'Markdown for AI agents',
    summary: 'A free browser Markdown editor that Claude Code, Codex and Cursor can work in, with live file sync and five export formats.',
  },
  {
    id: 'koonj',
    name: 'Koonj',
    url: koonjUrl,
    icon: `${koonjUrl}koonj-mark.svg`,
    status: 'soon',
    category: 'File lifecycle management',
    summary: 'Catalog files, archive inactive data to Amazon S3, and recall it when your team needs it.',
  },
  {
    id: 'studio',
    name: 'ATM Content Studio',
    url: studioUrl,
    icon: null,
    status: 'soon',
    category: 'AI content creation',
    summary: 'An AI-powered studio that brings artificial intelligence into the creative process.',
  },
] as const;

export type Product = (typeof products)[number];
