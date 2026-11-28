import { useEffect, useRef, type ReactNode } from 'react';
import { ShieldCheck, FileText, LifeBuoy, X } from 'lucide-react';

export type LegalSection = 'disclaimer' | 'privacy' | 'support';

const supportEmail = 'atmenterprise23@gmail.com';
const external = (href: string, label: string) => <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>;

const notices: Record<LegalSection, { title: string; summary: string; reviewed: string; sections: [string, ReactNode][] }> = {
  disclaimer: {
    title: 'Disclaimer',
    summary: 'A little clarity about our work, our website, and what to expect.',
    reviewed: '15 November 2026',
    sections: [
      ['About this website', 'This website introduces Apps That Matter, our services, and selected projects. Its content is general information, rather than professional advice or a binding offer. A project begins with a separate written agreement covering scope, pricing, delivery, ownership, and support.'],
      ['Projects and previews', 'Project names describe work created by Apps That Matter. Graphics marked as interface or design concepts are illustrative previews, rather than screenshots or promises of currently available features. Product capabilities and availability may change. Customer and third-party names belong to their respective owners; mentioning a platform does not imply its endorsement.'],
      ['AI and business outcomes', 'AI-generated material can be inaccurate or incomplete and should be reviewed before use. Results depend on the inputs, the application, and your business context. Descriptions of our services do not guarantee particular savings, revenue, performance, or other outcomes.'],
      ['What zero-cost hosting means', 'References to zero-cost hosting describe using eligible free hosting tiers on platforms such as GitHub Pages and Vercel. They do not mean that design, development, domain registration, paid features, or ongoing support are free. Provider eligibility, usage limits, commercial-use terms, and pricing apply and can change.'],
      ['Availability and external links', 'We aim to keep the site useful and accurate, but information can become outdated and uninterrupted access cannot be guaranteed. External websites and services operate independently under their own terms. Check their current information before relying on them. Nothing in this notice excludes rights or responsibilities that cannot be excluded under applicable law.'],
    ],
  },
  privacy: {
    title: 'Privacy',
    summary: 'What happens to your information when you visit or get in touch.',
    reviewed: '15 November 2026',
    sections: [
      ['Who this notice covers', 'Apps That Matter is responsible for the enquiries it receives through the contact details on this website. This notice describes this public company website. Separate products, including ATM Content Studio, OpenMarkdown by Apps That Matter, and customer websites, may have their own privacy notices and data practices.'],
      ['Browsing and your choices', 'This website does not include advertising trackers, analytics scripts, account registration, or its own data-submission form. The booking pop-up contains a third-party Calendly form. The ATM website code itself does not set cookies or use browser storage. Choosing a service interest stays in the page’s temporary memory and is added to an email draft only when you select “Start a conversation.” For email enquiries, your draft is not sent until you send it yourself.'],
      ['Email enquiries', 'If you email us, we receive your email address, your message, and any name, business details, or attachments you choose to include. We use these to respond, understand your requirements, prepare proposals, and manage any resulting work. Where applicable, this supports steps towards a contract or our legitimate interest in handling business enquiries. Please avoid sending passwords, financial details, or sensitive personal information in an initial enquiry.'],
      ['Booking a call', 'Selecting a booking link loads Calendly inside a pop-up, connecting your browser to Calendly only when you open it. Calendly may process technical information and use cookies under its own policies. If you submit a booking, Calendly processes the information you provide, such as your name, email address, selected time, and any answers requested by the booking form. Apps That Matter receives the booking details to arrange and manage your meeting. Calendly and any connected calendar provider may process this information in other countries. You can also open the booking page directly in a new tab.'],
      ['Hosting, fonts, and other providers', 'Your browser connects to our hosting provider to load this site and to Google Fonts to load its typefaces. Those providers may process technical information such as your IP address and request details under their own policies. Email passes through your email provider and our Gmail service. Following a social or external link takes you to that provider’s service and privacy practices. Providers may process information in other countries.'],
      ['Retention and sharing', 'Booking records and enquiry correspondence are kept for as long as needed to address the enquiry, manage any resulting customer relationship, and meet applicable record-keeping or legal requirements. The period depends on the nature of the enquiry and any agreed work. Access should be limited to people and service providers needed to handle those purposes, or disclosure required by law.'],
      ['Your privacy choices', 'You can contact us to ask about information you have provided, request a correction or deletion, or raise a privacy concern. Depending on applicable law, you may also have rights to access, restrict or object to processing, request portability, or complain to your local data protection authority. Requests are considered in light of applicable obligations and any records we must retain.'],
      ['Updates to this notice', 'We will update this notice when the website’s data practices change. The review date below identifies this version. For questions about a specific product or project, contact us before sharing personal or confidential information.'],
    ],
  },
  support: {
    title: 'Support',
    summary: 'Where to get help with Apps That Matter, our products, and our open-source projects.',
    reviewed: '28 November 2026',
    sections: [
      ['General enquiries', <>For questions about our services, client projects, partnerships, or anything not specific to a product, email <a href={`mailto:${supportEmail}?subject=${encodeURIComponent('Support request')}`}>{supportEmail}</a>. Email is our main support channel.</>],
      ['Product bugs and feature requests', <>OpenMarkdown and Koonj are open source, and their public GitHub issue trackers are the best place to report a bug or suggest an improvement: {external('https://github.com/atmenterprise/openMarkdown/issues', 'OpenMarkdown issues')} and {external('https://github.com/atmenterprise/koonj/issues', 'Koonj issues')}. Before opening a new issue, please search existing ones and add to a matching report rather than creating a duplicate.</>],
      ['Writing a helpful report', 'Include the product version, your browser and operating system, the steps to reproduce the problem, what you expected, and what happened instead. Screenshots, logs, or a small sample file make issues much easier to investigate. Please keep each issue to a single topic and follow the project’s contributing guidelines and code of conduct.'],
      ['Keep sensitive information private', <>GitHub issues are public. Do not include passwords, API keys, personal data, or confidential files. If you believe you have found a security vulnerability, please do not open a public issue; report it privately to <a href={`mailto:${supportEmail}?subject=${encodeURIComponent('Security report')}`}>{supportEmail}</a> so it can be addressed before details are disclosed.</>],
      ['Response times and scope', 'Our open-source projects are maintained by a small team, and support is provided on a best-effort basis without a guaranteed response time or service level. When many requests arrive at once, replies may be delayed. Issues are prioritised by impact and project direction, so not every report, question, or feature request can be addressed or resolved. Pull requests and community help on existing issues are always welcome.'],
      ['Client and contracted work', 'If you have a written agreement with Apps That Matter, the support terms in that agreement apply and take precedence over this page. Please contact us by email and mention your project name.'],
    ],
  },
};

export default function LegalDialog({ section, onClose }: { section: LegalSection; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const notice = notices[section];

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="legal-dialog"
      aria-labelledby="legal-title"
      aria-describedby="legal-summary"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
    >
      <div className="legal-header">
        <div className="eyebrow">{section === 'privacy' ? <ShieldCheck size={16} /> : section === 'support' ? <LifeBuoy size={16} /> : <FileText size={16} />} Apps That Matter / INFORMATION</div>
        <button type="button" className="legal-close" onClick={onClose} aria-label={`Close ${notice.title.toLowerCase()}`} autoFocus><X size={21} /></button>
      </div>
      <div className="legal-content">
        <h2 id="legal-title">{notice.title}</h2>
        <p id="legal-summary" className="legal-summary">{notice.summary}</p>
        <p className="legal-date">Last reviewed: {notice.reviewed}</p>
        {notice.sections.map(([title, text]) => (
          <section key={title} className="legal-section"><h3>{title}</h3><p>{text}</p></section>
        ))}
        <section className="legal-section legal-contact">
          <h3>{section === 'privacy' ? 'Privacy questions or requests?' : section === 'support' ? 'Still need help?' : 'Something you’d like to clarify?'}</h3>
          {section === 'privacy' && <p>For scheduling-provider details, read <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Calendly’s privacy notice</a>.</p>}
          <p>Email <a href={`mailto:atmenterprise23@gmail.com?subject=${encodeURIComponent(section === 'privacy' ? 'Privacy enquiry' : section === 'support' ? 'Support request' : 'Website disclaimer enquiry')}`}>{supportEmail}</a>.</p>
        </section>
      </div>
      <div className="legal-bottom"><span>APPS THAT MATTER. CLARITY THAT COUNTS.</span><button type="button" className="button" onClick={onClose}>Close {notice.title.toLowerCase()}</button></div>
    </dialog>
  );
}
