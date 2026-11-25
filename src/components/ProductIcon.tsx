import type { Product } from '../products';

export default function ProductIcon({ product }: { product: Product }) {
  return product.icon
    ? <img className="product-icon" src={product.icon} alt="" width="48" height="48" />
    : <span className="product-icon studio-menu-icon" aria-hidden="true">✳</span>;
}
