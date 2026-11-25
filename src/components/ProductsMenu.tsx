import { useRef } from 'react';

const base = import.meta.env.BASE_URL;
export const koonjUrl = `${base}koonj/`;
export const koonjIcon = `${koonjUrl}koonj-mark.svg`;
export const studioUrl = `${base}products/atm-content-studio/`;
export const openMarkdownUrl = `${base}openmarkdown/`;
export const productsUrl = `${base}products/`;

export default function ProductsMenu({ homePath = '', onSelect }: { homePath?: string; onSelect?: () => void }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (menu.current) menu.current.open = false;
  };

  // Keep the link visible until the browser activates its destination.
  const select = () => window.setTimeout(() => {
    close();
    onSelect?.();
  }, 0);

  return (
    <div className="products-nav">
      <a className="products-nav-label" href={`${homePath}#projects`} onClick={select}>Products</a>
      <details className="products-menu" ref={menu} onBlur={event => {
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) close();
    }} onKeyDown={event => {
      if (event.key === 'Escape' && event.currentTarget.open) {
        close();
        event.currentTarget.querySelector('summary')?.focus();
      }
    }}>
      <summary aria-label="Show product links"></summary>
      <ul>
        <li><a href={openMarkdownUrl} onClick={select}>
          <img src={`${base}openmarkdown/images/openmarkdown-logo.svg`} alt="" /><span><strong>OpenMarkdown</strong><small>Write, preview, and share Markdown</small></span>
        </a></li>
        <li><a href={studioUrl} onClick={select}>
          <span className="studio-menu-icon" aria-hidden="true">✳</span><span><strong>ATM Content Studio</strong><small>AI-powered content creation</small></span>
        </a></li>
        <li><a href={koonjUrl} onClick={select}>
          <img src={koonjIcon} alt="" /><span><strong>Koonj</strong><small>File archiving, tiering, and recall</small></span>
        </a></li>
      </ul>
      </details>
    </div>
  );
}
