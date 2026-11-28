// Google Tag Manager container ID. The Google Analytics tag itself is
// configured inside this container in Tag Manager. GTM loads only after the
// visitor accepts analytics cookies.
export const gtmContainerId = 'GTM-KVXVKW8D';

export const analyticsConfigured = /^GTM-[A-Z0-9]+$/.test(gtmContainerId);

export type Consent = 'granted' | 'denied';

const storageKey = 'atm-analytics-consent';

type GtmWindow = Window & { dataLayer?: unknown[] };

export function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(storageKey);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(storageKey, consent);
  } catch {
    // Storage can be unavailable (private modes); the choice then lasts for this page view.
  }
  if (consent === 'granted') loadAnalytics();
  else disableAnalytics();
}

let loaded = false;

export function loadAnalytics() {
  if (!analyticsConfigured || loaded || typeof window === 'undefined') return;
  loaded = true;

  const w = window as unknown as GtmWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmContainerId)}`;
  document.head.appendChild(script);
}

function disableAnalytics() {
  if (!analyticsConfigured) return;
  // Remove Google Analytics cookies (_ga, _ga_<id>) from this host and its parent domains.
  const parts = window.location.hostname.split('.');
  const domains = parts.map((_, i) => parts.slice(i).join('.'));
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!name.startsWith('_ga')) continue;
    const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = expired;
    for (const domain of domains) document.cookie = `${expired}; domain=.${domain}`;
  }
  // Tag Manager can't be unloaded from a running page, so reload to stop it.
  if (loaded) window.location.reload();
}
