import { openMarkdownUrl, products, productsUrl, statusLabels, studioUrl, workUrl, type Product } from './products';
import ProductIcon from './components/ProductIcon';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Database, Code2, Check, Layers, Workflow, Mail, CalendarDays, Bell } from 'lucide-react';
import { SiteFooter, SiteHeader } from './components/SiteChrome';
import OpenMarkdown from './OpenMarkdown';
import BookingDialog, { bookingUrl } from './components/BookingDialog';

const email = 'atmenterprise23@gmail.com';
const notifyUrl = (name: string) => `mailto:${email}?subject=${encodeURIComponent(`Notify me when ${name} launches`)}&body=${encodeURIComponent(`Hi Apps That Matter,\n\nPlease let me know when ${name} is available.\n\nThanks,\n`)}`;

const foundations = [
  { icon: Sparkles, title: 'AI that does the work.', text: 'We put AI where it removes effort, like the agent bridge in OpenMarkdown, and keep people in control of every change it makes.', tags: ['Generative AI', 'AI agents and MCP', 'Human in the loop'] },
  { icon: Database, title: 'Data with direction.', text: 'Know what you hold, move what you don’t need, and find it again when it matters. That thinking shapes Koonj and everything we build with data.', tags: ['Data engineering', 'Cloud storage', 'Analytics'] },
  { icon: Code2, title: 'Software made to last.', text: 'Clear interfaces, open formats, and practical infrastructure, so our products stay fast, understandable, and affordable to run.', tags: ['Web and desktop apps', 'Open source', 'Cloud deployment'] },
];

const openMarkdownHighlights = [
  'Claude Code, Codex and Cursor can edit alongside you',
  'Live preview, themes, and five export formats',
  'Free, open source, and no account required',
];

function StatusPill({ status }: { status: Product['status'] }) {
  return <span className={`atm-status atm-status-${status}`}>
    <span className="atm-status-dot" aria-hidden="true" />{statusLabels[status]}
  </span>;
}

function StudioPreview() {
  return <div className="project-visual studio-visual" aria-label="Illustrative ATM Content Studio interface"><div className="mini-window"><div className="window-top"><span className="window-dots">● ● ●</span><span>ATM Content Studio</span><Sparkles size={12} /></div><div className="studio-body"><aside><span className="mini-brand">a<span>✳</span></span><i /><i /><i /></aside><div className="studio-content"><span className="micro-label">YOUR NEXT GREAT IDEA STARTS HERE</span><strong>From a spark.<br />To something worth sharing.</strong><div className="prompt">What would you like to create?<Sparkles size={14} /></div><div className="mini-tiles"><span><Layers size={16} />Create</span><span><Workflow size={16} />Refine</span><span><ArrowUpRight size={16} />Share</span></div></div></div></div><span className="visual-caption">INTERFACE CONCEPT</span></div>;
}

function ProductGrid() {
  return (
    <div className="services-grid product-grid">
      {products.map(product => (
        <article className="service product-tile" key={product.id}>
          <div className="service-top product-tile-top">
            <div className="service-icon"><ProductIcon product={product} /></div>
            <p className="product-tile-category">{product.category}</p>
          </div>
          <StatusPill status={product.status} />
          <h2><a className="product-tile-link" href={product.url}>{product.name}</a></h2>
          <p className="product-tile-summary">{product.summary}</p>
          <div className="product-tile-footer">
            <span className="text-link" aria-hidden="true">{product.status === 'available' ? 'Explore product' : 'Preview product'}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProductShowcase() {
  const featured = products.find(product => product.status === 'available')!;
  const upcoming = products.filter(product => product.status === 'soon');

  return <>
    <article className="featured-product">
      <div className="featured-product-copy">
        <StatusPill status={featured.status} />
        <div className="featured-product-name">
          <ProductIcon product={featured} />
          <div>
            <h3><a href={featured.url}>{featured.name}</a></h3>
            <p>{featured.category}</p>
          </div>
        </div>
        <p className="featured-product-summary">{featured.summary}</p>
        <ul>
          {openMarkdownHighlights.map(item => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}
        </ul>
        <div className="featured-product-actions">
          <a className="button" href={featured.url}>Explore {featured.name} <ArrowRight size={17} /></a>
        </div>
      </div>
      <a className="featured-product-visual" href={featured.url} tabIndex={-1} aria-hidden="true">
        <img src={`${openMarkdownUrl}images/editor.png`} width="1440" height="900" alt="" loading="lazy" />
      </a>
    </article>
    <div className="upcoming-products">
      {upcoming.map(product => (
        <article className="upcoming-product" key={product.id}>
          <div className="upcoming-product-top">
            <div className="service-icon"><ProductIcon product={product} /></div>
            <StatusPill status={product.status} />
          </div>
          <p className="product-tile-category">{product.category}</p>
          <h3>{product.name}</h3>
          <p className="upcoming-product-summary">{product.summary}</p>
          <div className="upcoming-product-actions">
            <a className="text-link" href={product.url}>Preview {product.name} <ArrowRight size={15} /></a>
            <a className="text-link" href={notifyUrl(product.name)}><Bell size={15} /> Get notified</a>
          </div>
        </article>
      ))}
    </div>
  </>;
}

const clientProjects = [
  {
    name: 'Melabagan Banquets',
    category: 'Event venue · Dum Dum, Kolkata',
    url: 'https://www.melabaganbanquets.com/',
    linkLabel: 'Visit website',
    image: 'melabagan-banquets.jpg',
    imageHeight: 803,
    imageAlt: 'Wedding couple with henna, rings, and gold bangles',
    summary: 'A venue website for weddings, celebrations, and corporate events. Guests can explore the indoor hall and lawn, browse the gallery, and arrange a visit.',
  },
  {
    name: 'Jaz BooM Personal Training',
    category: 'Fitness coaching · Ilford, UK',
    url: 'https://project-jazboom-git-refresheddesign-jatayu5.vercel.app/',
    linkLabel: 'View Vercel preview',
    image: 'jaz-boom.jpg',
    imageHeight: 675,
    imageAlt: 'Jaz Singh coaching a client through a kettlebell squat',
    summary: 'A fitness coaching website where clients can compare one-to-one training, partner sessions, and online coaching, then book an introductory consultation.',
  },
] as const;

function ClientWork() {
  return (
    <div className="services-grid client-projects">
      {clientProjects.map(project => (
        <article className="service product-tile" key={project.url}>
          <div className="client-project-visual">
            <img
              src={`${import.meta.env.BASE_URL}client-work/${project.image}`}
              width="1200"
              height={project.imageHeight}
              alt={project.imageAlt}
              loading="lazy"
            />
          </div>
          <div className="client-project-heading">
            <p className="product-tile-category">{project.category}</p>
            <h2><a className="product-tile-link" href={project.url} aria-label={`${project.linkLabel} for ${project.name}`}>{project.name}</a></h2>
          </div>
          <p className="product-tile-summary">{project.summary}</p>
          <div className="product-tile-footer">
            <span className="text-link" aria-hidden="true">{project.linkLabel}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

type Page = 'home' | 'products' | 'studio' | 'work';

function SitePage({ page }: { page: Page }) {
  const isHome = page === 'home';
  const [bookingOpen, setBookingOpen] = useState(false);
  const [active, setActive] = useState(page === 'work' ? 'work' : '');
  const [interest, setInterest] = useState('Our products');
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-20% 0px -50% 0px' });
    ['hero', 'products', 'capabilities', 'about', 'contact'].forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [isHome]);
  const mailto = `mailto:${email}?subject=${encodeURIComponent(`Hello Apps That Matter: ${interest}`)}&body=${encodeURIComponent(`Hi Apps That Matter,\n\nI'd like to talk about ${interest.toLocaleLowerCase()}.\n\nHere's what I have in mind:\n\nBest,\n`)}`;
  const openBooking = (event: React.MouseEvent) => { event.preventDefault(); setBookingOpen(true); };
  const homePath = isHome ? '' : import.meta.env.BASE_URL;

  return <div className="site-shell">
    <a className="skip-link" href="#main" onClick={event => {
      event.preventDefault();
      document.getElementById('main')?.focus();
    }}>Skip to content</a>
    <SiteHeader homePath={homePath} active={active} onBook={() => setBookingOpen(true)} />
    <main id="main" tabIndex={-1} className={isHome ? undefined : 'products-page'}>
      {page === 'products' && (
        <div className="container section">
          <h1>Products</h1>
          <p className="page-intro">One product you can use today, and two more on the way.</p>
          <ProductGrid />
        </div>
      )}
      {page === 'studio' && (
        <div className="container section">
          <StatusPill status="soon" />
          <h1>ATM Content Studio</h1>
          <div className="studio-detail">
            <StudioPreview />
            <p>An AI-powered studio for creating content. We’re still building it.</p>
            <a className="button" href={notifyUrl('ATM Content Studio')}>Get notified at launch <Bell size={17} /></a>
          </div>
        </div>
      )}
      {page === 'work' && (
        <div className="container section work-page">
          <div className="eyebrow"><span className="status-dot" /> BUILT FOR OUR CLIENTS</div>
          <h1>Client work</h1>
          <p className="page-intro">Alongside our own products, we take on a small number of client projects, from AI tools to business websites. Here are a few we’ve designed and built.</p>
          <ClientWork />
          <div className="work-cta">
            <div>
              <h2>Have a project in mind?</h2>
              <p>Tell us what you’re trying to solve. We’ll tell you honestly whether we’re the right fit.</p>
            </div>
            <div className="work-cta-actions">
              <a className="button" href={bookingUrl} aria-haspopup="dialog" onClick={openBooking}>Book a 30-minute call <CalendarDays size={18} /></a>
              <a className="email-link" href={`mailto:${email}?subject=${encodeURIComponent('A client project')}`}><Mail size={15} />{email}</a>
            </div>
          </div>
        </div>
      )}
      {isHome && <>
      <section id="hero" className="hero container"><div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> AN INDEPENDENT PRODUCT STUDIO</div><h1>Big ideas.<br />Real intelligence.<br /><span>Built to matter.</span></h1><p>Apps That Matter builds AI-powered software for the way people actually work. Use OpenMarkdown today, with Koonj and ATM Content Studio on the way.</p><div className="hero-actions"><a className="button" href="#products">Explore our products <ArrowRight size={18} /></a><a className="text-link" href={openMarkdownUrl}>Try OpenMarkdown free <ArrowUpRight size={17} /></a></div><div className="hero-note"><span className="small-line" /> 1 PRODUCT AVAILABLE · 2 COMING SOON</div></div><div className="hero-art" role="img" aria-label="Connected AI, data, and engineering layers that power every Apps That Matter product"><div className="art-grid" /><div className="art-topline"><span>HOW OUR PRODUCTS ARE MADE</span><span>01 — ∞</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="art-core"><div className="core-top"><Sparkles size={45} strokeWidth={1.2} /><span>INTELLIGENCE</span></div><div className="core-middle"><Database size={31} strokeWidth={1.3} /><span>DATA</span></div><div className="core-bottom"><Code2 size={26} strokeWidth={1.3} /><span>ENGINEERING</span></div></div><div className="art-label label-ai"><span /> Ideas into intelligence</div><div className="art-label label-data"><span /> Connected by data</div><div className="art-bottomline"><span><span className="status-dot" /> BUILT FOR REAL WORK</span><ArrowUpRight size={20} /></div></div></section>
      <div className="focus-strip"><div className="container"><span>WHAT EVERY PRODUCT IS BUILT ON</span><div><Sparkles size={17} /> Artificial intelligence</div><span className="strip-plus">+</span><div><Database size={17} /> Data engineering</div><span className="strip-plus">+</span><div><Code2 size={17} /> Thoughtful software</div></div></div>
      <section id="products" className="projects-section">
        <div className="container section">
          <div className="section-heading">
            <div><div className="eyebrow">01 / OUR PRODUCTS</div><h2>Software for the work<br /><span>that matters most.</span></h2></div>
            <p>One product you can use today, and two more on the way. Every one is built to save time without taking control away from you.</p>
          </div>
          <ProductShowcase />
        </div>
      </section>
      <section id="capabilities" className="section container"><div className="section-heading"><div><div className="eyebrow">02 / HOW WE BUILD</div><h2>Technology is the tool.<br /><span>People are the point.</span></h2></div><p>Every product we make stands on the same three foundations.</p></div><div className="services-grid">{foundations.map(({ icon: Icon, title, text, tags }, i) => <article className="service" key={title}><div className="service-top"><div className="service-icon"><Icon size={25} strokeWidth={1.5} /></div><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p><ul>{tags.map(tag => <li key={tag}><Check size={13} />{tag}</li>)}</ul></article>)}</div></section>
      <section id="about" className="section container about-section"><div className="about-copy"><div className="eyebrow">03 / THE PEOPLE BEHIND THE PRODUCTS</div><h2>A small studio.<br /><span>A personal commitment.</span></h2><p>ATM stands for Apps That Matter. That’s how we approach every product: make technology useful, keep it understandable, and build around the people who use it.</p><p>Led by Rishu Shrivastava, Apps That Matter brings together AI, data engineering, and software craft to turn real problems into products people can rely on.</p><a className="text-link" href="https://www.linkedin.com/in/rishushrivastava/" target="_blank" rel="noreferrer">Meet the founder <ArrowUpRight size={17} /></a></div><div className="approach-panel"><div className="eyebrow">HOW A PRODUCT TAKES SHAPE</div>{[['01', 'Start with a real problem.', 'Every product begins with work that is slower or harder than it should be.'], ['02', 'Build with purpose.', 'Clear choices, honest trade-offs, and early feedback from the people who will use it.'], ['03', 'Keep improving.', 'We ship, listen, and refine, so each release is more useful than the last.']].map(([n, title, text]) => <div className="approach-step" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
      <div className="container"><div className="custom-work-band"><div><span className="eyebrow">ALSO FROM APPS THAT MATTER</span><p><strong>Need something built for your business?</strong> We take on a small number of client projects, from AI tools to business websites.</p></div><a className="text-link" href={workUrl}>See our client work <ArrowRight size={17} /></a></div></div>
      <section id="contact" className="container contact-wrap"><div className="contact-section"><div><div className="eyebrow"><span className="status-dot" /> LET’S MAKE SOMETHING MATTER</div><h2>Questions, ideas,<br />or early access? Say <span>hello.</span></h2><p>Ask about a product, join the early-access list for Koonj or ATM Content Studio,<br />or tell us about a problem worth solving.</p></div><div className="contact-action"><a className="button contact-booking" href={bookingUrl} aria-haspopup="dialog" onClick={openBooking}>Book a 30-minute call <CalendarDays size={18} /></a><div className="contact-divider"><span>or send us an email</span></div><fieldset><legend>I’D LIKE TO TALK ABOUT</legend><div className="interest-options">{['Our products', 'Early access', 'A client project', 'Something else'].map(item => <button key={item} aria-pressed={interest === item} onClick={() => setInterest(item)}>{item}</button>)}</div></fieldset><a className="button" href={mailto}>Start a conversation <ArrowUpRight size={18} /></a><a className="email-link" href={`mailto:${email}`}><Mail size={15} />{email}</a></div></div></section>
      </>}
    </main>
    <SiteFooter homePath={homePath} />
    {bookingOpen && <BookingDialog onClose={() => setBookingOpen(false)} />}
  </div>;
}

export default function App({ path }: { path: string }) {
  const page: Page = path === studioUrl ? 'studio' : path === productsUrl ? 'products' : path === workUrl ? 'work' : 'home';

  useLayoutEffect(() => {
    const id = window.location.hash.slice(1) === 'projects' ? 'products' : window.location.hash.slice(1);
    const anchor = id ? document.getElementById(id) : null;
    anchor?.scrollIntoView({ behavior: 'instant' });
  }, [path]);

  return path === openMarkdownUrl ? <OpenMarkdown /> : <SitePage page={page} />;
}
