import { createRoot } from 'react-dom/client';
import { SiteFooter, SiteHeader } from './components/SiteChrome';
import './index.css';

const homePath = import.meta.env.BASE_URL;

createRoot(document.getElementById('site-header')!).render(<SiteHeader homePath={homePath} />);
createRoot(document.getElementById('site-footer')!).render(<SiteFooter homePath={homePath} />);
