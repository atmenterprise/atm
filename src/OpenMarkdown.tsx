import { useEffect, useId, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Download, Github, Monitor, Moon, Play, Share2, Sun, SunDim, Type } from 'lucide-react';
import Logo from './components/Logo';
import './openmarkdown.css';

const app = 'https://atmenterprise.github.io/openMarkdown/';
const desktopSetup = app + '#open-local-files';
const assets = `${import.meta.env.BASE_URL}openmarkdown/`;

const features = [
  {
    icon: Type,
    title: 'Format as you write',
    description: 'Add headings, emphasis, checklists, links, and tables from the toolbar in Editor and Split views. Split view shows the formatted result as you edit.',
  },
  {
    icon: Download,
    title: 'Download in five formats',
    description: 'Save your work as Markdown, plain text, PDF, Word (.docx), or HTML. Formatted exports carry over document structure such as headings, lists, and tables.',
  },
  {
    icon: Share2,
    title: 'Share a read-only link',
    description: 'Send a snapshot anyone with the link can open without an account. The share dialog warns against sharing confidential information because links can be forwarded.',
  },
  {
    icon: Monitor,
    title: 'Open Markdown from your desktop',
    description: 'Install OpenMarkdown in desktop Chrome or Edge, then open .md and .markdown files from your file manager on Windows, macOS, or supported Linux desktops.',
  },
];

const themes = [
  { id: 'light', name: 'Light', image: 'editor.png', icon: Sun },
  { id: 'dark', name: 'Dark', image: 'dark.png', icon: Moon },
  { id: 'sepia', name: 'Sepia', image: 'sepia.png', icon: SunDim },
] as const;

function ThemePreview() {
  const groupName = useId();
  const [themeId, setThemeId] = useState<(typeof themes)[number]['id']>('light');
  const selected = themes.find(theme => theme.id === themeId) ?? themes[0];

  return <section className="container section om-theme-section" aria-labelledby="om-theme-heading">
    <div>
      <h2 id="om-theme-heading">Try a theme</h2>
      <p>See the same document in Light, Dark, or Sepia. Choose a theme to change the preview.</p>
      <fieldset className="om-theme-selector">
        <legend>Preview theme</legend>
        <div className="om-theme-choices">
          {themes.map(({ id, name, icon: Icon }) => <label className="om-theme-choice" data-theme={id} key={id}>
            <input type="radio" name={groupName} value={id} checked={themeId === id} onChange={() => setThemeId(id)}/>
            <span className="om-theme-tile">
              <span className="om-theme-swatch" aria-hidden="true"><Icon size={19}/></span>
              <span className="om-theme-name">{name}</span>
            </span>
          </label>)}
        </div>
      </fieldset>
    </div>

    <figure className="om-theme-preview" data-theme={themeId}>
      <div className="om-theme-window">
        <img key={themeId} loading="lazy" src={`${assets}images/${selected.image}`} alt={`A launch checklist in OpenMarkdown’s ${selected.name} theme`} width="1440" height="900"/>
      </div>
      <figcaption aria-live="polite"><span aria-hidden="true"/>{selected.name} theme preview</figcaption>
    </figure>
  </section>;
}

export default function OpenMarkdown() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'openMarkdown — Markdown editor, exports and sharing | ATM Enterprise';
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => { document.title = previous; };
  }, []);

  return <div className="om-page">
    <a className="skip-link" href="#om-content" onClick={(event) => {
      event.preventDefault();
      document.getElementById('om-content')?.focus();
    }}>Skip to content</a>
    <header className="site-header">
      <div className="container om-nav">
        <a href="#hero" aria-label="ATM Enterprise home"><Logo variant="inline" size="md"/></a>
        <a className="text-link" href="#projects">← All projects</a>
        <a className="button" href={app}>Open the editor <ArrowUpRight size={16}/></a>
      </div>
    </header>
    <main id="om-content" tabIndex={-1}>
      <section className="container om-hero">
        <div className="om-hero-grid">
          <div>
            <div className="om-wordmark"><img src={`${assets}images/openmarkdown-logo.svg`} width="38" height="38" alt=""/> openMarkdown</div>
            <h1>Write, format, and <em>share Markdown.</em></h1>
            <p>Use the formatting toolbar to style your document, see it update live, then download a copy or share it with a link.</p>
            <div className="om-actions">
              <a className="button" href={app}>Open the editor <ArrowUpRight size={18}/></a>
              <a className="text-link" href={desktopSetup}><Monitor size={17}/> Desktop setup</a>
            </div>
            <div className="om-assurances"><span><Check size={14}/> Free and open source</span><span><Check size={14}/> No account required</span></div>
          </div>
          <figure className="om-hero-image">
            <img src={`${assets}images/editor.png`} alt="openMarkdown with the formatting toolbar, Markdown source, and live preview in Split view" width="1440" height="900"/>
            <figcaption>Formatting toolbar and live preview in Split view</figcaption>
          </figure>
        </div>
      </section>

      <section className="om-features">
        <div className="container section">
          <div className="section-heading"><h2>From draft to delivery</h2></div>
          <div className="om-feature-grid">
            {features.map(({ icon: Icon, title, description }) => <article key={title}>
              <Icon className="om-feature-icon" size={22} aria-hidden="true"/>
              <h3>{title}</h3><p>{description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="container section om-desktop">
        <div>
          <h2>Open a file from Finder or File Explorer</h2>
          <p>After installing the web app, right-click a Markdown file and choose <strong>Open with → OpenMarkdown</strong>. The file opens locally in Preview, with Editor and Split available when you want to make changes.</p>
          <p>Use desktop Chrome or Microsoft Edge for file associations. In Safari, you can drag the file into the editor or use <strong>Upload files</strong>.</p>
          <a className="text-link" href={desktopSetup}>View the desktop setup guide <ArrowUpRight size={17}/></a>
        </div>
        <figure>
          <img loading="lazy" src={`${assets}images/desktop-preview.png`} alt="Project notes.md opened directly in OpenMarkdown’s Preview view" width="1280" height="648"/>
          <figcaption>A local Markdown file opened in Preview</figcaption>
        </figure>
      </section>

      <ThemePreview/>

      <section className="container section" id="om-demo">
        <div className="section-heading"><h2>Watch the editor walkthrough</h2><p>A 30-second introduction to writing, previewing, and switching themes.</p></div>
        <div className="om-video">
          <video controls playsInline preload="metadata" poster={`${assets}images/editor.png`} aria-label="openMarkdown editor walkthrough">
            <source src={`${assets}videos/openmarkdown-demo.mp4`} type="video/mp4"/>
            <a href={`${assets}videos/openmarkdown-demo.mp4`}><Play size={16}/> Download the walkthrough</a>
          </video>
        </div>
        <p className="om-video-note">On-screen captions. No audio required.</p>
      </section>

      <section className="container om-final">
        <h2>Try openMarkdown</h2>
        <div className="om-actions">
          <a className="button" href={app}>Open the editor <ArrowRight size={18}/></a>
          <a className="text-link" href="https://github.com/atmenterprise/openMarkdown"><Github size={17}/> View the source</a>
        </div>
      </section>
    </main>
    <footer className="container om-footer"><a href="#hero">← ATM Enterprise</a><span>Apps That Matter.</span><a href={app}>Open the editor <ArrowUpRight size={14}/></a></footer>
  </div>;
}
