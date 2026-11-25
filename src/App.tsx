import { openMarkdownUrl, products, productsUrl, studioUrl } from './products';
import ProductIcon from './components/ProductIcon';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Database, Code2, Check, Layers, Workflow, Mail, CalendarDays } from 'lucide-react';
import { SiteFooter, SiteHeader } from './components/SiteChrome';
import OpenMarkdown from './OpenMarkdown';
import BookingDialog, { bookingUrl } from './components/BookingDialog';

const email = 'atmenterprise23@gmail.com';
const services = [
  { icon: Sparkles, title: 'AI that does the work.', text: 'Turn repetitive tasks into intelligent workflows. We build AI-powered tools and integrations around the way your business actually operates.', tags: ['Generative AI', 'Workflow automation', 'Custom AI tools'] },
  { icon: Database, title: 'Data with direction.', text: 'Connect your data, bring clarity to your reporting, and build a dependable foundation for better business decisions.', tags: ['Data engineering', 'Analytics', 'Cloud platforms'] },
  { icon: Code2, title: 'Digital, made for you.', text: 'From a focused business website to a custom application, we create thoughtful digital experiences with practical infrastructure costs.', tags: ['Custom applications', 'Business websites', 'Cloud deployment'] },
];

function StudioPreview() {
  return <div className="project-visual studio-visual" aria-label="Illustrative ATM Content Studio interface"><div className="mini-window"><div className="window-top"><span className="window-dots">● ● ●</span><span>ATM Content Studio</span><Sparkles size={12} /></div><div className="studio-body"><aside><span className="mini-brand">a<span>✳</span></span><i /><i /><i /></aside><div className="studio-content"><span className="micro-label">YOUR NEXT GREAT IDEA STARTS HERE</span><strong>From a spark.<br />To something worth sharing.</strong><div className="prompt">What would you like to create?<Sparkles size={14} /></div><div className="mini-tiles"><span><Layers size={16} />Create</span><span><Workflow size={16} />Refine</span><span><ArrowUpRight size={16} />Share</span></div></div></div></div><span className="visual-caption">INTERFACE CONCEPT</span></div>;

}

function ProductGrid({ onHome = false }: { onHome?: boolean }) {
  const Heading = onHome ? 'h3' : 'h2';

  return (
    <div className="services-grid product-grid">
      {products.map(product => (
        <article className="service product-tile" key={product.id}>
          <div className="service-top product-tile-top">
            <div className="service-icon"><ProductIcon product={product} /></div>
            <p className="product-tile-category">{product.category}</p>
          </div>
          <Heading><a className="product-tile-link" href={product.url}>{product.name}</a></Heading>
          <p className="product-tile-summary">{product.summary}</p>
          <div className="product-tile-footer">
            <span className="text-link" aria-hidden="true">Explore product</span>
          </div>
        </article>
      ))}
    </div>
  );
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
            <h3><a className="product-tile-link" href={project.url} aria-label={`${project.linkLabel} for ${project.name}`}>{project.name}</a></h3>
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

function SitePage({ isProducts, isStudio }: { isProducts: boolean; isStudio: boolean }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [active, setActive] = useState('');
  const [interest, setInterest] = useState('AI & automation');
  useEffect(() => {
    if (isProducts) return;
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-20% 0px -50% 0px' });
    ['hero', 'capabilities', 'projects', 'about', 'contact'].forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [isProducts]);
  const mailto = `mailto:${email}?subject=${encodeURIComponent(`Let's build: ${interest}`)}&body=${encodeURIComponent(`Hi Apps That Matter,\n\nI'd like to discuss a project in ${interest}.\n\nHere's what I have in mind:\n\nBest,\n`)}`;
  return <div className="site-shell">
    <a className="skip-link" href="#main" onClick={event => {
      event.preventDefault();
      document.getElementById('main')?.focus();
    }}>Skip to content</a>
    <SiteHeader homePath={isProducts ? import.meta.env.BASE_URL : ''} active={active} onBook={() => setBookingOpen(true)} />
    <main id="main" tabIndex={-1} className={isProducts ? 'products-page' : undefined}>
      {isProducts ? (
        <div className="container section">
          <h1>{isStudio ? 'ATM Content Studio' : 'Products'}</h1>
          {isStudio ? (
            <div className="studio-detail">
              <StudioPreview />
              <p>An AI-powered studio for creating content.</p>
            </div>
          ) : <ProductGrid />}
        </div>
      ) : <>
      <section id="hero" className="hero container"><div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> INDEPENDENT THINKING. INTELLIGENT SOLUTIONS.</div><h1>Big ideas.<br />Real intelligence.<br /><span>Built to matter.</span></h1><p>We turn AI, data, and thoughtful engineering into practical solutions for your business. From your first idea to the tools you use every day.</p><div className="hero-actions"><a className="button" href={bookingUrl} aria-haspopup="dialog" onClick={event => { event.preventDefault(); setBookingOpen(true); }}>Book a 30-minute call <CalendarDays size={18} /></a><a className="text-link" href="#projects">Explore our work <ArrowRight size={17} /></a></div><div className="hero-note"><span className="small-line" /> AI & DATA SOLUTIONS, WITH PURPOSE.</div></div><div className="hero-art" role="img" aria-label="Connected AI, data, and application layers forming one intelligent solution"><div className="art-grid" /><div className="art-topline"><span>THE ATM APPROACH</span><span>01 — ∞</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="art-core"><div className="core-top"><Sparkles size={45} strokeWidth={1.2} /><span>INTELLIGENCE</span></div><div className="core-middle"><Database size={31} strokeWidth={1.3} /><span>DATA</span></div><div className="core-bottom"><Code2 size={26} strokeWidth={1.3} /><span>ENGINEERING</span></div></div><div className="art-label label-ai"><span /> Ideas into intelligence</div><div className="art-label label-data"><span /> Connected by data</div><div className="art-bottomline"><span><span className="status-dot" /> BUILT AROUND YOUR BUSINESS</span><ArrowUpRight size={20} /></div></div></section>
      <div className="focus-strip"><div className="container"><span>SMALL STUDIO. BIG POSSIBILITIES.</span><div><Sparkles size={17} /> Artificial intelligence</div><span className="strip-plus">+</span><div><Database size={17} /> Data engineering</div><span className="strip-plus">+</span><div><Code2 size={17} /> Digital experiences</div></div></div>
      <section id="capabilities" className="section container"><div className="section-heading"><div><div className="eyebrow">01 / WHAT WE DO</div><h2>Technology is the tool.<br /><span>Your business is the point.</span></h2></div><p>Clear thinking, purposeful design, and engineering that solves the right problem.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, text, tags }, i) => <article className="service" key={title}><div className="service-top"><div className="service-icon"><Icon size={25} strokeWidth={1.5} /></div><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p><ul>{tags.map(tag => <li key={tag}><Check size={13} />{tag}</li>)}</ul></article>)}</div></section>
      <section id="projects" className="projects-section">
        <div className="container section">
          <div className="section-heading">
            <h2>Our products</h2>
          </div>
          <ProductGrid onHome />
          <div className="client-work">
            <h2>Selected client work</h2>
            <ClientWork />
            <div className="work-bottom">
              <span>Have a challenge we could help with?</span>
              <a className="text-link" href="#contact">Tell us about it <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="section container about-section"><div className="about-copy"><div className="eyebrow">03 / THE PEOPLE BEHIND THE BUILD</div><h2>A small studio.<br /><span>A personal commitment.</span></h2><p>ATM stands for Apps That Matter. That’s also how we approach every project: make technology useful, keep it understandable, and build around the people who use it.</p><p>Led by Rishu Shrivastava, Apps That Matter brings together AI, data engineering, and custom software to help businesses move from possibility to something practical.</p><a className="text-link" href="https://www.linkedin.com/in/rishushrivastava/" target="_blank" rel="noreferrer">Meet the founder <ArrowUpRight size={17} /></a></div><div className="approach-panel"><div className="eyebrow">GOOD WORK STARTS WITH A GOOD CONVERSATION.</div>{[['01', 'Understand first.', 'Your goals, your users, your constraints. We start by listening.'], ['02', 'Build with purpose.', 'A clear scope, thoughtful choices, and room for your feedback.'], ['03', 'Make it yours.', 'A practical handover, so you can use and grow what we build.']].map(([n, title, text]) => <div className="approach-step" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
      <section id="contact" className="container contact-wrap"><div className="contact-section"><div><div className="eyebrow"><span className="status-dot" /> LET’S MAKE SOMETHING MATTER</div><h2>Your next big idea<br />starts with a <span>hello.</span></h2><p>Have a project in mind? Or a business problem worth solving?<br />Let’s explore what we can build together.</p></div><div className="contact-action"><a className="button contact-booking" href={bookingUrl} aria-haspopup="dialog" onClick={event => { event.preventDefault(); setBookingOpen(true); }}>Book a 30-minute call <CalendarDays size={18} /></a><div className="contact-divider"><span>or tell us about your project by email</span></div><fieldset><legend>I’M INTERESTED IN</legend><div className="interest-options">{['AI & automation', 'Data solutions', 'A website or app', 'Something else'].map(item => <button key={item} aria-pressed={interest === item} onClick={() => setInterest(item)}>{item}</button>)}</div></fieldset><a className="button" href={mailto}>Start a conversation <ArrowUpRight size={18} /></a><a className="email-link" href={`mailto:${email}`}><Mail size={15} />{email}</a></div></div></section>
      </>}
    </main>
    <SiteFooter homePath={isProducts ? import.meta.env.BASE_URL : ''} />
    {bookingOpen && <BookingDialog onClose={() => setBookingOpen(false)} />}
  </div>;
}

export default function App({ path }: { path: string }) {
  const isStudio = path === studioUrl;
  const isProducts = path === productsUrl || isStudio;

  useLayoutEffect(() => {
    const anchor = document.getElementById(window.location.hash.slice(1));
    anchor?.scrollIntoView({ behavior: 'instant' });
  }, [path]);

  return path === openMarkdownUrl ? <OpenMarkdown /> : <SitePage isProducts={isProducts} isStudio={isStudio} />;
}
