import { useEffect } from 'react';
import { analyticsConfigured, loadAnalytics, readConsent, saveConsent } from '../analytics';

// Shows the analytics consent banner. `open` is controlled by the footer so
// "Cookie settings" can bring it back. Renders nothing during prerendering.
export default function CookieConsent({ open, setOpen, onPrivacy }: {
  open: boolean;
  setOpen: (open: boolean) => void;
  onPrivacy: () => void;
}) {
  useEffect(() => {
    if (!analyticsConfigured) return;
    const consent = readConsent();
    if (consent === 'granted') loadAnalytics();
    else if (consent === null) setOpen(true);
  }, [setOpen]);

  if (!analyticsConfigured || !open) return null;

  const choose = (consent: 'granted' | 'denied') => {
    saveConsent(consent);
    setOpen(false);
  };

  return (
    <section className="cookie-consent" role="region" aria-label="Analytics cookies">
      <p>
        We’d like to use Google Analytics cookies to understand how visitors use this site, so we can improve it.
        They’re only set if you accept. You can change your choice any time from “Cookie settings” in the footer.{' '}
        <button type="button" className="cookie-consent-link" onClick={onPrivacy}>Read the privacy notice</button>.
      </p>
      <div className="cookie-consent-actions">
        <button type="button" className="button cookie-consent-secondary" onClick={() => choose('denied')}>Decline</button>
        <button type="button" className="button" onClick={() => choose('granted')}>Accept</button>
      </div>
    </section>
  );
}
