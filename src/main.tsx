import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { openMarkdownUrl, productsUrl, studioUrl } from './components/ProductsMenu';

const legacyRoutes = new Map([
  ['#/openmarkdown', openMarkdownUrl],
  ['#/products', productsUrl],
  ['#/products/studio', studioUrl],
]);
const legacyDestination = legacyRoutes.get(window.location.hash);
const path = window.location.pathname.replace(/(?:index\.html)?$/, '').replace(/\/?$/, '/');
const root = document.getElementById('root')!;

if (path === import.meta.env.BASE_URL && legacyDestination) {
  window.location.replace(legacyDestination);
} else {
  const app = <StrictMode><App path={path} /></StrictMode>;
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
