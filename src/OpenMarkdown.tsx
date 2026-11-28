import { SiteFooter } from './components/SiteChrome';
import { useId, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Bot, Check, Coffee, Copy, Download, Eye, FilePlus2, FolderOpen, Github, Laptop, Lock, Menu, Moon,
  Navigation, Palette, Play, Plug, RefreshCw, Replace, ScanText, Share2, ShieldCheck, Sparkles, Sun, SunDim,
  Terminal, Type, Undo2, X, Zap,
} from 'lucide-react';
import './openmarkdown.css';

const app = 'https://openmarkdown.appsthatmatter.uk/';
const desktopSetup = app + '#open-local-files';
const repo = 'https://github.com/atmenterprise/openMarkdown';
const mcpPackage = '@appsthatmatter/openmarkdown-mcp';
const supportUrl = 'https://buymeacoffee.com/atmenterpr4';
const npmUrl = 'https://www.npmjs.com/package/' + mcpPackage;
const assets = `${import.meta.env.BASE_URL}openmarkdown/`;

const navLinks = [
  ['#om-agents', 'AI agents'],
  ['#om-file-sync', 'File sync'],
  ['#om-setup', 'Get started'],
  ['#om-privacy', 'Privacy'],
  ['#om-features', 'Features'],
] as const;

const agents = ['Claude Code', 'Codex CLI', 'Cursor', 'Any MCP client'];

const tools = [
  {
    id: 'get_active_document',
    icon: ScanText,
    label: 'Read',
    ask: 'What does the section I highlighted say about pricing?',
    result: 'Your agent reads the open tab, your selection and your cursor line. No more copying text into a chat window.',
    log: ['get_active_document', '“Launch plan.md” · 214 words selected · line 42'],
  },
  {
    id: 'replace_selection',
    icon: Replace,
    label: 'Rewrite',
    ask: 'Make the paragraph I highlighted friendlier.',
    result: 'Only the highlighted text changes. The edit is undoable with ⌘Z and the tab stays unsaved until you have reviewed it.',
    log: ['replace_selection', 'Rewrote 1 paragraph · undoable · tab left unsaved'],
  },
  {
    id: 'update_editor_content',
    icon: Sparkles,
    label: 'Restructure',
    ask: 'Turn these meeting notes into a release document.',
    result: 'Your agent rewrites the whole document, changing only what needs to change. Turn on highlighting to see exactly what moved.',
    log: ['update_editor_content', 'Changed 6 spans · new text highlighted'],
  },
  {
    id: 'scroll_to_heading',
    icon: Navigation,
    label: 'Navigate',
    ask: 'Take me to “Rollout risks”.',
    result: 'The editor and preview scroll to that heading. Matching ignores case and formatting, so close enough is good enough.',
    log: ['scroll_to_heading', 'Found “## Rollout *risks*” · scrolled both panes'],
  },
  {
    id: 'open_in_editor',
    icon: FilePlus2,
    label: 'Open',
    ask: 'Open the README in openMarkdown so I can read it.',
    result: 'New Markdown, or a copy of any local file, opens in a new tab. If OpenMarkdown isn’t running, your agent opens it for you.',
    log: ['open_in_editor', 'Launched OpenMarkdown · opened README.md'],
  },
] as const;

const clients = [
  { id: 'claude', name: 'Claude Code', code: `claude mcp add --transport stdio openmarkdown -- npx -y ${mcpPackage}` },
  { id: 'codex', name: 'Codex CLI', code: `codex mcp add openmarkdown -- npx -y ${mcpPackage}` },
  { id: 'cursor', name: 'Cursor & others', code: `{ "mcpServers": { "openmarkdown": { "command": "npx", "args": ["-y", "${mcpPackage}"] } } }` },
] as const;

const features = [
  { icon: Type, title: 'Format as you write', description: 'Add headings, emphasis, checklists, links and tables from the toolbar. Split view shows the result as you type.' },
  { icon: Download, title: 'Five export formats', description: 'Download Markdown, plain text, PDF, Word (.docx) or HTML, with headings, lists and tables kept intact.' },
  { icon: Share2, title: 'Read-only share links', description: 'The whole document is compressed into the link itself. Anyone can open it without an account, and it never touches our servers.' },
  { icon: FolderOpen, title: 'Tabs, drag and drop', description: 'Work on several documents side by side. Drop .md or .txt files onto the window to open them.' },
  { icon: Palette, title: 'Light, Dark and Sepia', description: 'Three themes and adjustable text size, so long documents stay easy to read.' },
  { icon: Lock, title: 'Private by design', description: 'Everything runs in your browser. Your drafts are saved on your device, not in someone else’s cloud.' },
];

const themes = [
  { id: 'light', name: 'Light', image: 'editor.png', icon: Sun },
  { id: 'dark', name: 'Dark', image: 'dark.png', icon: Moon },
  { id: 'sepia', name: 'Sepia', image: 'sepia.png', icon: SunDim },
] as const;

function OpenMarkdownHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return <header className="om-nav">
    <div className="container om-nav-inner">
      <a className="om-nav-brand" href="#om-content" onClick={close} aria-label="OpenMarkdown by Apps That Matter">
        <img src={`${assets}images/openmarkdown-logo.svg`} width="36" height="36" alt=""/>
        <span>open<span className="om-nav-light">Markdown</span><small>BY APPS THAT MATTER</small></span>
      </a>
      <nav className="om-nav-links" aria-label="OpenMarkdown">
        {navLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="om-nav-actions">
        <a className="om-nav-icon" href={repo} aria-label="OpenMarkdown on GitHub" title="GitHub"><Github size={18}/></a>
        <a className="om-support" href={supportUrl} target="_blank" rel="noreferrer"><Coffee size={17} aria-hidden="true"/> Support the project <span aria-hidden="true">↗</span></a>
        <a className="button om-nav-cta" href={app}>Open editor <ArrowUpRight size={16}/></a>
        <button type="button" className="om-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="om-mobile-nav" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
    </div>
    {menuOpen && <nav id="om-mobile-nav" className="om-mobile-nav" aria-label="OpenMarkdown mobile">
      {navLinks.map(([href, label]) => <a key={href} href={href} onClick={close}>{label}</a>)}
      <a href={supportUrl} target="_blank" rel="noreferrer" onClick={close}><Coffee size={17} aria-hidden="true"/> Support the project ↗</a>
      <a href={repo} onClick={close}><Github size={17} aria-hidden="true"/> GitHub</a>
    </nav>}
  </header>;
}

function AgentTerminal() {
  return <div className="om-terminal" role="img" aria-label="Example: Claude Code rewriting highlighted text in OpenMarkdown">
    <div className="om-terminal-top"><span aria-hidden="true">● ● ●</span><span>~/launch-plan · claude</span></div>
    <ol aria-hidden="true">
      <li className="om-t-user">&gt; Tighten the intro I’ve highlighted in openMarkdown</li>
      <li><b>⏺</b> openmarkdown · get_active_document</li>
      <li className="om-t-dim">⎿ “Launch plan.md” · 214 words selected</li>
      <li><b>⏺</b> openmarkdown · replace_selection</li>
      <li className="om-t-dim">⎿ Rewrote 3 paragraphs · undo with ⌘Z</li>
      <li className="om-t-done">✓ Done. Your edit is ready to review.</li>
    </ol>
  </div>;
}

function ToolExplorer() {
  const [toolId, setToolId] = useState<(typeof tools)[number]['id']>(tools[0].id);
  const tool = tools.find(item => item.id === toolId) ?? tools[0];
  const Icon = tool.icon;

  return <div className="om-explorer">
    <div className="om-explorer-tabs" role="group" aria-label="Agent tools">
      {tools.map(({ id, label, icon: TabIcon }) => <button type="button" key={id} aria-pressed={id === toolId} onClick={() => setToolId(id)}>
        <TabIcon size={17} aria-hidden="true"/> {label}
      </button>)}
    </div>
    <div className="om-explorer-panel" aria-live="polite">
      <div className="om-explorer-say">
        <span className="om-kicker">You ask your agent</span>
        <p className="om-quote">“{tool.ask}”</p>
        <span className="om-kicker">OpenMarkdown responds</span>
        <p className="om-explorer-result"><Icon size={18} aria-hidden="true"/> <span>{tool.result}</span></p>
      </div>
      <div className="om-explorer-log" key={tool.id}>
        <span className="om-kicker">MCP tool call</span>
        <code><b>⏺</b> openmarkdown · {tool.log[0]}</code>
        <code className="om-t-dim">⎿ {tool.log[1]}</code>
      </div>
    </div>
  </div>;
}

function SetupCommands() {
  const [clientId, setClientId] = useState<(typeof clients)[number]['id']>('claude');
  const [copied, setCopied] = useState(false);
  const client = clients.find(item => item.id === clientId) ?? clients[0];

  return <div className="om-code">
    <div className="om-code-tabs" role="group" aria-label="Choose your agent">
      {clients.map(({ id, name }) => <button type="button" key={id} aria-pressed={id === clientId} onClick={() => { setClientId(id); setCopied(false); }}>{name}</button>)}
    </div>
    <div className="om-code-body">
      <pre><code>{client.code}</code></pre>
      <button type="button" className="om-copy" aria-label={`Copy the ${client.name} setup command`} onClick={() => {
        void navigator.clipboard?.writeText(client.code).then(() => setCopied(true), () => setCopied(false));
      }}>{copied ? <Check size={15} aria-hidden="true"/> : <Copy size={15} aria-hidden="true"/>}<span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span></button>
    </div>
    {clientId === 'cursor' && <p className="om-code-note">Add this to your client’s <code>mcp.json</code>.</p>}
  </div>;
}

function ThemePreview() {
  const groupName = useId();
  const [themeId, setThemeId] = useState<(typeof themes)[number]['id']>('light');
  const selected = themes.find(theme => theme.id === themeId) ?? themes[0];

  return <section className="container section om-theme-section" aria-labelledby="om-theme-heading">
    <div>
      <span className="om-eyebrow">Made for reading too</span>
      <h2 id="om-theme-heading">Pick the mood. Keep the focus.</h2>
      <p>See the same document in Light, Dark or Sepia. Choose a theme to change the preview.</p>
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
  return <div className="om-page">
    <a className="skip-link" href="#om-content" onClick={(event) => {
      event.preventDefault();
      document.getElementById('om-content')?.focus();
    }}>Skip to content</a>
    <OpenMarkdownHeader/>
    <main id="om-content" tabIndex={-1}>
      <section className="container om-hero">
        <div className="om-hero-grid">
          <div>
            <span className="om-badge"><Sparkles size={13} aria-hidden="true"/> New: agent bridge and live file sync</span>
            <h1>The Markdown editor <em>your AI agent can work in.</em></h1>
            <p>OpenMarkdown by Apps That Matter runs in your browser. Claude Code, Codex and Cursor can work in it too. Highlight a paragraph, ask your agent to improve it, and watch the change appear. Every edit can be undone and nothing is saved until you have checked it.</p>
            <div className="om-actions">
              <a className="button" href={app}>Open the editor <ArrowUpRight size={18}/></a>
              <a className="text-link" href="#om-setup"><Plug size={17}/> Connect your agent in 2 minutes</a>
            </div>
            <div className="om-assurances"><span><Check size={14}/> Free and open source</span><span><Check size={14}/> No account required</span><span><Check size={14}/> Your documents stay on your device</span></div>
          </div>
          <div className="om-hero-visual">
            <figure className="om-hero-image">
              <img src={`${assets}images/editor.png`} alt="OpenMarkdown with the formatting toolbar, Markdown source and live preview in Split view" width="1440" height="900"/>
            </figure>
            <AgentTerminal/>
            <span className="om-status-pill" aria-hidden="true"><i/> MCP Connected</span>
          </div>
        </div>
      </section>

      <section className="om-agent-strip" aria-label="Works with">
        <div className="container">
          <span>Works with</span>
          <ul>{agents.map(agent => <li key={agent}><Bot size={15} aria-hidden="true"/>{agent}</li>)}</ul>
        </div>
      </section>

      <section className="container section om-pillars" aria-labelledby="om-why">
        <div className="section-heading">
          <div><span className="om-eyebrow">Why it’s different</span><h2 id="om-why">Most editors were built for people.<br/><span>This one is built for agents too.</span></h2></div>
          <p>Your agent works on the document you’re looking at, and you can see every change it makes.</p>
        </div>
        <div className="om-pillar-grid">
          <article><Eye className="om-feature-icon" size={22} aria-hidden="true"/><h3>It sees your selection</h3><p>Highlight something and say “fix this”. Your agent knows which file, which words and which line you mean.</p></article>
          <article><Undo2 className="om-feature-icon" size={22} aria-hidden="true"/><h3>Every edit can be undone</h3><p>Agent changes go into the normal undo history. Press ⌘Z or Ctrl+Z, just as you would for your own typing.</p></article>
          <article><ShieldCheck className="om-feature-icon" size={22} aria-hidden="true"/><h3>You have the final say</h3><p>Agent edits leave the tab unsaved until you have reviewed them. The bridge stays off until you turn it on.</p></article>
        </div>
      </section>

      <section className="om-dark-band" id="om-agents" aria-labelledby="om-tools">
        <div className="container section">
          <div className="section-heading">
            <div><span className="om-eyebrow">Five tools, one conversation</span><h2 id="om-tools">Just ask. Your agent does the rest.</h2></div>
            <p>Pick a tool to see what you’d say and what happens in the editor.</p>
          </div>
          <ToolExplorer/>
        </div>
      </section>

      <section className="container section om-desktop" id="om-file-sync" aria-labelledby="om-sync">
        <div>
          <span className="om-eyebrow"><RefreshCw size={13} aria-hidden="true"/> Live file sync</span>
          <h2 id="om-sync">Your agent edits the file. You watch it change.</h2>
          <p>Open a local file in Chrome or Edge and it stays linked to the copy on your computer. When an agent or a terminal command changes that file, the editor updates <strong>within half a second</strong>. Your cursor, scroll position and undo history stay where they were.</p>
          <ul className="om-checks">
            <li><Check size={15} aria-hidden="true"/> <span>Have unsaved changes? You choose whether to reload or keep your version.</span></li>
            <li><Check size={15} aria-hidden="true"/> <span>Press ⌘S or Ctrl+S to save straight back to the file.</span></li>
            <li><Check size={15} aria-hidden="true"/> <span>Open files with the file picker, by dragging them in, or with <strong>Open with → OpenMarkdown</strong>.</span></li>
          </ul>
        </div>
        <figure>
          <img loading="lazy" src={`${assets}images/desktop-preview.png`} alt="Project notes.md opened directly in OpenMarkdown’s Preview view" width="1280" height="648"/>
          <figcaption>A local Markdown file, opened from the desktop and kept in sync</figcaption>
        </figure>
      </section>

      <section className="om-setup" id="om-setup" aria-labelledby="om-setup-heading">
        <div className="container section">
          <div className="section-heading">
            <div><span className="om-eyebrow">Get started</span><h2 id="om-setup-heading">Three steps to an agent-ready editor.</h2></div>
            <p>You need desktop Chrome or Edge and Node.js 20.19 or newer. It’s free and you don’t need an account.</p>
          </div>
          <ol className="om-steps">
            <li>
              <span className="om-step-number" aria-hidden="true">1</span>
              <Laptop className="om-feature-icon" size={22} aria-hidden="true"/>
              <h3>Install it on your desktop</h3>
              <p>Open the editor in Chrome or Edge and click the <strong>install icon</strong> in the address bar (or <strong>Menu → Install OpenMarkdown</strong>). It opens in its own window and appears under <strong>Open with</strong> for .md files in Finder, File Explorer and Linux file managers.</p>
              <a className="text-link" href={desktopSetup}>Desktop setup guide <ArrowUpRight size={16}/></a>
            </li>
            <li>
              <span className="om-step-number" aria-hidden="true">2</span>
              <Terminal className="om-feature-icon" size={22} aria-hidden="true"/>
              <h3>Add the MCP server</h3>
              <p>Run one command. Your agent then starts <a className="om-inline-link" href={npmUrl}>{mcpPackage}</a> with <code>npx</code> when it needs it.</p>
              <SetupCommands/>
            </li>
            <li>
              <span className="om-step-number" aria-hidden="true">3</span>
              <Zap className="om-feature-icon" size={22} aria-hidden="true"/>
              <h3>Connect and go</h3>
              <p>Ask your agent to <strong>“open this in openMarkdown”</strong> and it opens a connected window for you. Or click <strong>Agent bridge</strong> in the editor’s top bar or footer, then <strong>Turn on</strong>.</p>
              <p>When the status bar shows <strong>MCP Connected</strong>, you’re ready. If your browser asks to allow access to apps on this device, choose Allow.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="container section om-trust" id="om-privacy" aria-labelledby="om-trust-heading">
        <div>
          <span className="om-eyebrow"><Lock size={13} aria-hidden="true"/> Private by default</span>
          <h2 id="om-trust-heading">Your agent connects to your editor. Nothing else can.</h2>
        </div>
        <div>
          <ul>
            <li><strong>Stays on your computer.</strong> The bridge only accepts connections from your own machine (127.0.0.1), so nothing on your network or the internet can reach it.</li>
            <li><strong>Only OpenMarkdown can connect.</strong> Connections from any other website are refused.</li>
            <li><strong>Off until you turn it on.</strong> The editor makes no connection attempts until you enable the bridge or your agent opens it for you.</li>
            <li><strong>Open source.</strong> Licensed under Apache 2.0, so you can read every line on GitHub.</li>
          </ul>
          <p className="om-trust-note">When the bridge is on, your document is shared with the agent you run, which may send it to its AI provider under that provider’s terms.</p>
        </div>
      </section>

      <section className="om-features" id="om-features">
        <div className="container section">
          <div className="section-heading"><div><span className="om-eyebrow">Everything else you’d expect</span><h2>A great editor, even without an agent.</h2></div></div>
          <div className="om-feature-grid">
            {features.map(({ icon: Icon, title, description }) => <article key={title}>
              <Icon className="om-feature-icon" size={22} aria-hidden="true"/>
              <h3>{title}</h3><p>{description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <ThemePreview/>

      <section className="container section" id="om-demo">
        <div className="section-heading"><div><span className="om-eyebrow"><Play size={13} aria-hidden="true"/> 49-second walkthrough</span><h2>See your agent edit alongside you.</h2></div><p>Write with a live preview, add the MCP server, turn on Agent bridge, and watch Claude Code rewrite a highlighted paragraph, then open and navigate a new document.</p></div>
        <div className="om-video">
          <video controls playsInline preload="metadata" poster={`${assets}images/walkthrough-poster.jpg`} aria-label="OpenMarkdown walkthrough: writing, connecting the MCP server and editing with an AI agent">
            <source src={`${assets}videos/openmarkdown-demo.mp4`} type="video/mp4"/>
            <a href={`${assets}videos/openmarkdown-demo.mp4`}><Play size={16}/> Download the walkthrough</a>
          </video>
        </div>
        <p className="om-video-note">On-screen captions. No audio required. Recorded with the real editor and the real openmarkdown-mcp server.</p>
      </section>

      <section className="container om-final">
        <h2>Stop pasting into chat. Let your agent write where you do.</h2>
        <p>Start writing in your browser now, and connect your agent whenever you’re ready.</p>
        <div className="om-actions">
          <a className="button" href={app}>Open the editor <ArrowRight size={18}/></a>
          <a className="text-link" href="#om-setup"><Plug size={17}/> Set up the agent bridge</a>
          <a className="text-link" href={repo}><Github size={17}/> Star on GitHub</a>
        </div>
        <p className="om-affiliation">OpenMarkdown by Apps That Matter is an independent product. It is not affiliated with, endorsed by or connected to any other product or company using a similar name.</p>
      </section>
    </main>
    <SiteFooter homePath={import.meta.env.BASE_URL} />
  </div>;
}
