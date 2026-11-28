import { useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { koonjUrl, openMarkdownUrl, productsUrl, studioUrl } from '../products';

const home = import.meta.env.BASE_URL;
const entries = [
  { title: 'OpenMarkdown', url: openMarkdownUrl, description: 'Free Markdown editor built for AI agents and web browsers, with live preview, export and sharing.', keywords: 'formatting toolbar markdown pdf html download open source ai agent mcp claude code codex cursor file sync desktop' },
  { title: 'ATM Content Studio', url: studioUrl, description: 'An AI-powered studio for creating content.', keywords: 'artificial intelligence writing' },
  { title: 'Koonj', url: koonjUrl, description: 'Catalog, archive, tier, and recall files across local, shared, and cloud storage.', keywords: 'Amazon S3 NAS SMB file lifecycle storage' },
  { title: 'Products', url: productsUrl, description: 'Browse all Apps That Matter products.', keywords: 'software tools' },
  { title: 'What we do', url: home + '#capabilities', description: 'AI and automation, data engineering, websites, and custom applications.', keywords: 'services analytics cloud development' },
  { title: 'Selected work', url: home + '#projects', description: 'Explore our products and customer projects.', keywords: 'portfolio JazBooM Melabagan Banquets' },
  { title: 'About us', url: home + '#about', description: 'Meet the team behind Apps That Matter.', keywords: 'founder Rishu Shrivastava' },
  { title: 'Contact', url: home + '#contact', description: 'Book a call or email us about your project.', keywords: 'sales support meeting' },
];

export default function SiteSearch({ onOpen }: { onOpen: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const terms = query.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
  const results = entries.filter(({ title, description, keywords }) => {
    const text = `${title} ${description} ${keywords}`.toLocaleLowerCase();
    return terms.every(term => text.includes(term));
  });

  return (
    <>
      <button type="button" className="site-search-trigger" aria-haspopup="dialog" onClick={() => {
        onOpen();
        dialog.current?.showModal();
        input.current?.focus();
      }}>
        <Search size={19} aria-hidden="true" />
        <span>Search</span>
      </button>
      <dialog ref={dialog} className="site-search-dialog" aria-labelledby="site-search-title">
        <div className="site-search-heading">
          <h2 id="site-search-title">Search the site</h2>
          <button type="button" aria-label="Close search" onClick={() => dialog.current?.close()}><X size={21} /></button>
        </div>
        <input ref={input} type="search" aria-label="Search products and pages" placeholder="Search products and pages" value={query} onChange={event => setQuery(event.target.value)} />
        <p className="site-search-status" role="status">{terms.length ? `${results.length} ${results.length === 1 ? 'result' : 'results'}` : 'Browse products and pages'}</p>
        {results.length ? (
          <ul>
            {results.map(({ title, url, description }) => (
              <li key={url}><a href={url} onClick={() => dialog.current?.close()}><strong>{title}</strong><span>{description}</span></a></li>
            ))}
          </ul>
        ) : <p>Try a product name or a topic like Markdown, archiving, or contact.</p>}
      </dialog>
    </>
  );
}
