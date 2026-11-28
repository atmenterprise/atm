import { useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { koonjUrl, openMarkdownUrl, productsUrl, studioUrl, workUrl } from '../products';

const home = import.meta.env.BASE_URL;
const entries = [
  { title: 'OpenMarkdown by Apps That Matter', url: openMarkdownUrl, description: 'Free Markdown editor built for AI agents and web browsers, with live preview, export and sharing.', keywords: 'formatting toolbar markdown pdf html download open source ai agent mcp claude code codex cursor file sync desktop' },
  { title: 'ATM Content Studio', url: studioUrl, description: 'Coming soon: an AI-powered studio for creating content.', keywords: 'artificial intelligence writing upcoming early access' },
  { title: 'Koonj', url: koonjUrl, description: 'Coming soon: catalog, archive, tier, and recall files across local, shared, and cloud storage.', keywords: 'Amazon S3 NAS SMB file lifecycle storage upcoming early access' },
  { title: 'Products', url: productsUrl, description: 'Browse all Apps That Matter products.', keywords: 'software tools' },
  { title: 'How we build', url: home + '#capabilities', description: 'The AI, data, and software foundations behind our products.', keywords: 'services analytics cloud development ai data engineering' },
  { title: 'Client work', url: workUrl, description: 'Websites and applications we have built for clients.', keywords: 'portfolio projects custom websites JazBooM Melabagan Banquets' },
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
