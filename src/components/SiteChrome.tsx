import { useState } from 'react';
import { ArrowUpRight, CalendarDays, Facebook, Github, Linkedin, Menu, Twitter, X } from 'lucide-react';
import BookingDialog, { bookingUrl } from './BookingDialog';
import LegalDialog, { type LegalSection } from './LegalDialog';
import Logo from './Logo';
import ProductsMenu from './ProductsMenu';
import { productsUrl, workUrl } from '../products';
import SiteSearch from './SiteSearch';

const links = [
  ['#/products', 'Products'],
  ['#capabilities', 'How we build'],
  ['#about', 'About us'],
  [workUrl, 'Client work'],
] as const;

const linkHref = (homePath: string, href: string) => href.startsWith('#') ? homePath + href : href;
const isCurrent = (href: string, active: string) => href === workUrl
  ? (active === 'work' ? 'page' : undefined)
  : (href === `#${active}` ? 'location' : undefined);

export function SiteHeader({ homePath = '', active = '', onBook }: {
  homePath?: string;
  active?: string;
  onBook?: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return <>
    <header className="site-header">
      <div className="container nav-inner">
        <a href={`${homePath}#hero`} aria-label="Apps That Matter home" onClick={() => setMenuOpen(false)}>
          <Logo variant="inline" size="md" />
        </a>
        <nav aria-label="Main navigation" className="main-nav">
          {links.map(([href, label]) => href === '#/products' ? (
            <ProductsMenu key={href} homePath={homePath} />
          ) : (
            <a
              key={href}
              href={linkHref(homePath, href)}
              aria-current={isCurrent(href, active)}
            >{label}</a>
          ))}
        </nav>
        <div className="site-nav-actions">
        <SiteSearch onOpen={() => setMenuOpen(false)} />
        <a href={bookingUrl} className="button nav-cta" aria-haspopup="dialog" onClick={event => {
          event.preventDefault();
          setMenuOpen(false);
          if (onBook) onBook();
          else setBookingOpen(true);
        }}>Book a call <CalendarDays size={16} /></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([href, label]) => href === '#/products' ? (
            <ProductsMenu key={href} homePath={homePath} onSelect={() => setMenuOpen(false)} />
          ) : (
            <a key={href} href={linkHref(homePath, href)} aria-current={isCurrent(href, active)} onClick={() => setMenuOpen(false)}>
              {label}<ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
    {bookingOpen && <BookingDialog onClose={() => setBookingOpen(false)} />}
  </>;
}

export function SiteFooter({ homePath = '' }: { homePath?: string }) {
  const [legalSection, setLegalSection] = useState<LegalSection | null>(null);

  return <>
    <footer className="container"><div className="footer-top"><a href={`${homePath}#hero`} aria-label="Apps That Matter home"><Logo variant="inline" size="md" /></a><p>Thoughtful technology.<br />For the things that matter.</p><div className="footer-social" role="navigation" aria-label="Social media"><a href="https://github.com/atmenterprise" target="_blank" rel="noreferrer" aria-label="Apps That Matter on GitHub" title="GitHub"><Github size={19} /></a><a href="https://www.linkedin.com/in/rishushrivastava/" target="_blank" rel="noreferrer" aria-label="Connect on LinkedIn" title="LinkedIn"><Linkedin size={19} /></a><a href="https://www.facebook.com/atmenterprisepvtltd/" target="_blank" rel="noreferrer" aria-label="Apps That Matter on Facebook" title="Facebook"><Facebook size={19} /></a><a href="https://www.twitter.com/EnterpriseAtm" target="_blank" rel="noreferrer" aria-label="Apps That Matter on X (Twitter)" title="X (Twitter)"><Twitter size={19} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Apps That Matter. All rights reserved.</span><div className="footer-legal" role="navigation" aria-label="Website information"><a href={productsUrl}>Products</a><span aria-hidden="true">·</span><a href={workUrl}>Client work</a><span aria-hidden="true">·</span><button type="button" aria-haspopup="dialog" onClick={() => setLegalSection('support')}>Support</button><span aria-hidden="true">·</span><button type="button" aria-haspopup="dialog" onClick={() => setLegalSection('disclaimer')}>Disclaimer</button><span aria-hidden="true">·</span><button type="button" aria-haspopup="dialog" onClick={() => setLegalSection('privacy')}>Privacy</button></div><a href="#main" onClick={event => {
      event.preventDefault();
      window.scrollTo({ top: 0 });
    }}>Back to top ↑</a></div></footer>
    {legalSection && <LegalDialog section={legalSection} onClose={() => setLegalSection(null)} />}
  </>;
}
