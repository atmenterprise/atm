// Google Analytics 4 Measurement ID (Admin → Data streams → Web stream).
// Google Analytics loads only after the visitor accepts analytics cookies.
export const gaMeasurementId = 'G-TZ6GLGY8FG';

export const analyticsConfigured = /^G-[A-Z0-9]+$/.test(gaMeasurementId);

export type Consent = 'granted' | 'denied';

const storageKey = 'atm-analytics-consent';
const disableKey = `ga-disable-${gaMeasurementId}`;

type GtagWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; [key: string]: unknown };

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
  if (!analyticsConfigured || typeof window === 'undefined') return;
  const w = window as unknown as GtagWindow;
  w[disableKey] = false;
  if (loaded) return;
  loaded = true;

  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag('js', new Date());
  w.gtag('config', gaMeasurementId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`;
  document.head.appendChild(script);
}

function disableAnalytics() {
  if (!analyticsConfigured) return;
  // Stops a running gtag.js from sending further hits on this page.
  (window as unknown as GtagWindow)[disableKey] = true;
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
}
