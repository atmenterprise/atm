import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CalendarDays, X } from 'lucide-react';

export const bookingUrl = 'https://calendly.com/atmenterprise23/30min';

export default function BookingDialog({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [loading, setLoading] = useState(true);
  const embedUrl = new URL(bookingUrl);
  embedUrl.searchParams.set('embed_domain', window.location.host);
  embedUrl.searchParams.set('embed_type', 'PopupText');
  embedUrl.searchParams.set('primary_color', '746000');
  embedUrl.searchParams.set('background_color', 'faf9f6');
  embedUrl.searchParams.set('text_color', '252620');

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
      className="legal-dialog booking-dialog"
      aria-labelledby="booking-title"
      aria-describedby="booking-description"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
    >
      <div className="legal-header">
        <div><div className="eyebrow"><CalendarDays size={16} /> LET’S TALK ABOUT YOUR IDEA</div><h2 id="booking-title">Book a 30-minute call</h2></div>
        <button type="button" className="legal-close" onClick={onClose} aria-label="Close booking calendar" autoFocus><X size={21} /></button>
      </div>
      <p id="booking-description" className="booking-description">Choose a time that works for you. Scheduling is provided by Calendly.</p>
      <div className="booking-calendar">
        {loading && <p className="booking-loading" role="status">Loading available times…</p>}
        <iframe src={embedUrl.toString()} title="Schedule a 30-minute meeting with Apps That Matter" onLoad={() => setLoading(false)} />
      </div>
      <div className="legal-bottom"><span>Calendar not loading?</span><a className="text-link" href={bookingUrl} target="_blank" rel="noopener noreferrer">Open Calendly in a new tab <ArrowUpRight size={16} /></a></div>
    </dialog>
  );
}
