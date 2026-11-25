import { koonjIcon, koonjUrl, openMarkdownUrl, productsUrl, studioUrl } from './components/ProductsMenu';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Database, Code2, Check, Layers, Workflow, Globe, Mail, CalendarDays } from 'lucide-react';
import { SiteFooter, SiteHeader } from './components/SiteChrome';
import OpenMarkdown from './OpenMarkdown';
import BookingDialog, { bookingUrl } from './components/BookingDialog';

const email = 'atmenterprise23@gmail.com';
const services = [
  { icon: Sparkles, title: 'AI that does the work.', text: 'Turn repetitive tasks into intelligent workflows. We build AI-powered tools and integrations around the way your business actually operates.', tags: ['Generative AI', 'Workflow automation', 'Custom AI tools'] },
  { icon: Database, title: 'Data with direction.', text: 'Connect your data, bring clarity to your reporting, and build a dependable foundation for better business decisions.', tags: ['Data engineering', 'Analytics', 'Cloud platforms'] },
  { icon: Code2, title: 'Digital, made for you.', text: 'From a focused business website to a custom application, we create thoughtful digital experiences with practical infrastructure costs.', tags: ['Custom applications', 'Business websites', 'Cloud deployment'] },
];

function ProjectPreview({ type }: { type: 'studio' | 'web' }) {
  if (type === 'studio') return <div className="project-visual studio-visual" aria-label="Illustrative ATM Content Studio interface"><div className="mini-window"><div className="window-top"><span className="window-dots">● ● ●</span><span>ATM Content Studio</span><Sparkles size={12} /></div><div className="studio-body"><aside><span className="mini-brand">a<span>✳</span></span><i /><i /><i /></aside><div className="studio-content"><span className="micro-label">YOUR NEXT GREAT IDEA STARTS HERE</span><strong>From a spark.<br />To something worth sharing.</strong><div className="prompt">What would you like to create?<Sparkles size={14} /></div><div className="mini-tiles"><span><Layers size={16} />Create</span><span><Workflow size={16} />Refine</span><span><ArrowUpRight size={16} />Share</span></div></div></div></div><span className="visual-caption">INTERFACE CONCEPT</span></div>;
  return <div className="project-visual web-visual" aria-label="Illustrative banquet website design"><div className="banquet-window"><div className="banquet-nav"><span>MELABAGAN</span><span>THE VENUE &nbsp; CELEBRATIONS</span></div><div className="banquet-art"><div className="arch arch-one" /><div className="arch arch-two" /><div className="arch arch-three" /><span className="banquet-kicker">A SETTING FOR YOUR SPECIAL MOMENTS</span><strong>Beautiful beginnings.<br />Unforgettable celebrations.</strong><span className="banquet-button">EXPLORE THE VENUE ↗</span></div></div><div className="hosting-badge"><Globe size={14} /> $0 hosting infrastructure</div><span className="visual-caption">DESIGN CONCEPT</span></div>;
}

function ProductCard({ product, position }: { product: 'markdown' | 'studio'; position?: string }) {
  const isMarkdown = product === 'markdown';
  const name = isMarkdown ? 'OpenMarkdown' : 'ATM Content Studio';
  const Heading = position ? 'h3' : 'h2';

  return (
    <article className="project-card">
      {isMarkdown ? (
        <a href={openMarkdownUrl} className="project-image-link" aria-label="Explore OpenMarkdown">
          <img
            className="om-project-image"
            src={`${import.meta.env.BASE_URL}openmarkdown/images/editor.png`}
            alt="OpenMarkdown live editor and preview"
            width="1440"
            height="900"
            loading="lazy"
          />
        </a>
      ) : (
        <ProjectPreview type="studio" />
      )}
      <div className="project-info">
        {position && (
          <div className="project-meta">
            <span>{isMarkdown ? 'FREE ONLINE TOOL' : 'AI PRODUCT'}</span>
            <span>{position}</span>
          </div>
        )}
        <Heading><a href={isMarkdown ? openMarkdownUrl : studioUrl}>{name}</a></Heading>
        <p>{isMarkdown
          ? 'A free Markdown editor with a formatting toolbar, five export formats, and read-only sharing links.'
          : 'An AI-powered studio for creating content.'}</p>
        <div className="tags">
          {isMarkdown ? (
            <><span>Markdown editor</span><span>Free to use</span></>
          ) : (
            <><span>Artificial intelligence</span><span>Content creation</span></>
          )}
        </div>
        {isMarkdown && (
          <a className="text-link om-project-link" href={openMarkdownUrl}>Explore the product &amp; demo</a>
        )}
      </div>
    </article>
  );
}

function KoonjSummary({ featured = false }: { featured?: boolean }) {
  const Heading = featured ? 'h3' : 'h2';

  return (
    <article className={featured ? 'project-card project-wide' : 'project-card'}>
      <a className="project-visual koonj-product-mark project-image-link" href={koonjUrl} aria-label="Explore Koonj">
        <img src={koonjIcon} width="132" height="132" alt="" loading="lazy" />
      </a>
      <div className="project-info">
        <Heading><a href={koonjUrl}>Koonj</a></Heading>
        <p>Catalog files across local and shared storage, archive inactive files to Amazon S3, and recall them when your team needs them again.</p>
        <div className="tags"><span>File catalog</span><span>Storage tiering</span><span>File recall</span></div>
        <a className="text-link om-project-link" href={koonjUrl}>Explore Koonj</a>
      </div>
    </article>
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
              <ProjectPreview type="studio" />
              <p>An AI-powered studio for creating content.</p>
            </div>
          ) : <div className="projects-grid">
            <ProductCard product="markdown" />
            <ProductCard product="studio" />
            <KoonjSummary />
          </div>}
        </div>
      ) : <>
      <section id="hero" className="hero container"><div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> INDEPENDENT THINKING. INTELLIGENT SOLUTIONS.</div><h1>Big ideas.<br />Real intelligence.<br /><span>Built to matter.</span></h1><p>We turn AI, data, and thoughtful engineering into practical solutions for your business. From your first idea to the tools you use every day.</p><div className="hero-actions"><a className="button" href={bookingUrl} aria-haspopup="dialog" onClick={event => { event.preventDefault(); setBookingOpen(true); }}>Book a 30-minute call <CalendarDays size={18} /></a><a className="text-link" href="#projects">Explore our work <ArrowRight size={17} /></a></div><div className="hero-note"><span className="small-line" /> AI & DATA SOLUTIONS, WITH PURPOSE.</div></div><div className="hero-art" role="img" aria-label="Connected AI, data, and application layers forming one intelligent solution"><div className="art-grid" /><div className="art-topline"><span>THE ATM APPROACH</span><span>01 — ∞</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="art-core"><div className="core-top"><Sparkles size={45} strokeWidth={1.2} /><span>INTELLIGENCE</span></div><div className="core-middle"><Database size={31} strokeWidth={1.3} /><span>DATA</span></div><div className="core-bottom"><Code2 size={26} strokeWidth={1.3} /><span>ENGINEERING</span></div></div><div className="art-label label-ai"><span /> Ideas into intelligence</div><div className="art-label label-data"><span /> Connected by data</div><div className="art-bottomline"><span><span className="status-dot" /> BUILT AROUND YOUR BUSINESS</span><ArrowUpRight size={20} /></div></div></section>
      <div className="focus-strip"><div className="container"><span>SMALL STUDIO. BIG POSSIBILITIES.</span><div><Sparkles size={17} /> Artificial intelligence</div><span className="strip-plus">+</span><div><Database size={17} /> Data engineering</div><span className="strip-plus">+</span><div><Code2 size={17} /> Digital experiences</div></div></div>
      <section id="capabilities" className="section container"><div className="section-heading"><div><div className="eyebrow">01 / WHAT WE DO</div><h2>Technology is the tool.<br /><span>Your business is the point.</span></h2></div><p>Clear thinking, purposeful design, and engineering that solves the right problem.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, text, tags }, i) => <article className="service" key={title}><div className="service-top"><div className="service-icon"><Icon size={25} strokeWidth={1.5} /></div><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p><ul>{tags.map(tag => <li key={tag}><Check size={13} />{tag}</li>)}</ul></article>)}</div></section>
      <section id="projects" className="projects-section"><div className="container section"><div className="section-heading"><div><div className="eyebrow">02 / SELECTED WORK</div><h2>Less talk.<br /><span>More things built.</span></h2></div><p>Our own products and customer projects.<br />Different challenges. The same care.</p></div><div className="projects-grid"><ProductCard product="studio" position="01" /><ProductCard product="markdown" position="02" /><KoonjSummary featured /><article className="project-card project-wide"><ProjectPreview type="web" /><div className="project-info"><div className="project-meta"><span>CUSTOMER WEBSITES</span><span>03</span></div><h3>JazBooM &amp;<br />Melabagan Banquets</h3><p>Custom websites that give local businesses a distinct digital presence, with zero-cost hosting infrastructure using GitHub Pages and Vercel.</p><div className="tags"><span>Web design & development</span><span>GitHub Pages</span><span>Vercel</span></div><div className="project-footnote">Thoughtful websites. Practical running costs.</div></div></article></div><div className="work-bottom"><span>Have a challenge we could help with?</span><a className="text-link" href="#contact">Tell us about it <ArrowUpRight size={17} /></a></div></div></section>
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
