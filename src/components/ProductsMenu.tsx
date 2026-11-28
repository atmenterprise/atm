import { useRef } from 'react';

import { products, statusLabels } from '../products';
import ProductIcon from './ProductIcon';

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
      <a className="products-nav-label" href={`${homePath}#products`} onClick={select}>Products</a>
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
          {products.map(product => (
            <li key={product.id}>
              <a href={product.url} onClick={select}>
                <ProductIcon product={product} />
                <span><strong>{product.name}</strong><small>{product.category}{product.status === 'soon' && <em className="products-menu-soon"> · {statusLabels.soon}</em>}</small></span>
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
