/* eslint-disable no-undef */
/* Components for the Apartamento Mar Azul marketing-site UI kit. */

const { useState, useEffect, useRef } = React;

/* ---------- TopBar: logo + language dropdown ---------- */
function TopBar({ lang, setLang, scrolled }) {
  const [open, setOpen] = useState(false);
  const langs = [
    { code: "en", label: "English" },
    { code: "pt", label: "Português" },
    { code: "es", label: "Español" },
    { code: "it", label: "Italiano" },
    { code: "de", label: "Deutsch" },
    { code: "nl", label: "Nederlands" },
    { code: "fr", label: "Français" },
  ];
  const current = langs.find((l) => l.code === lang) || langs[0];
  const ddRef = useRef(null);
  useEffect(() => {
    function onClickOutside(e) {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);
  return (
    <header className={"topbar" + (scrolled ? " is-scrolled" : "")}>
      <div className="topbar-inner">
        <a className="logo" href="#top" aria-label="Apartamento Mar Azul">
          <img src="../../assets/logo-primary.svg" alt="Apartamento Mar Azul" />
        </a>
        <div className="lang-dd" ref={ddRef}>
          <button
            className={"lang-toggle" + (open ? " is-open" : "")}
            onClick={() => setOpen(!open)}
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <span>{current.label}</span>
            <span className="lang-chev" aria-hidden="true" />
          </button>
          {open && (
            <ul className="lang-menu" role="listbox">
              {langs.map((l) => (
                <li key={l.code} role="option" aria-selected={lang === l.code}>
                  <button
                    className={"lang-opt" + (lang === l.code ? " is-active" : "")}
                    onClick={() => { setLang(l.code); setOpen(false); }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero with Ken Burns micro-pan ---------- */
function Hero({ onAvailability }) {
  return (
    <section className="hero" id="top">
      <div className="hero-photo" />
      <div className="hero-scrim" />
      <div className="hero-inner">
        <p className="eyebrow eyebrow-light">Lagos · Algarve</p>
        <h1 className="hero-title">A quiet apartment in Lagos for couples and small families.</h1>
        <p className="hero-sub">Walking distance from the centre and the beaches. Sleeps 2 to 4.</p>
        <p className="hero-price">From €100 per night <span className="hero-price-meta">· 3-night minimum</span></p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={onAvailability}>Check availability</button>
          <a className="btn btn-ghost-light" href="#whatsapp">
            <span>WhatsApp Stefy</span>
            <span className="micro">we may answer within 12 hours</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust strip ---------- */
function TrustStrip() {
  return (
    <section className="trust">
      <div className="trust-inner">
        <div className="trust-item">
          <div className="stars">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="#D8B98A">
                <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
              </svg>
            ))}
          </div>
          <span className="trust-label">5.0 from 5 Google reviews</span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <div className="host-photo" aria-hidden="true" />
          <span className="trust-label">Open since June 2025</span>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <span className="trust-label muted">Speaks PT · IT · EN · ES</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Facts grid ---------- */
function FactsGrid() {
  const items = [
    ["Sleeps", "2 to 4"],
    ["Bedrooms", "1 plus sofa bed"],
    ["Terrace", "East-facing"],
    ["Air conditioning", "In the bedroom"],
    ["Wi-Fi", "Fibre, 200 Mbps"],
    ["Parking", "Free, reserved"],
    ["Linens & towels", "Provided"],
    ["Crib & high chair", "On request"],
    ["Walking distance", "Centre & beaches"],
    ["Pets", "Not allowed", true],
  ];
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">At a glance</p>
        <h2 className="h2">What's in the apartment, plainly.</h2>
        <div className="facts">
          {items.map(([k, v, neg], i) => (
            <div key={i} className={"fact" + (neg ? " is-neg" : "")}>
              <span className="fact-label">{k}</span>
              <span className="fact-value">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About: host + place ---------- */
function About() {
  return (
    <section className="section section-tint">
      <div className="container about">
        <div className="about-photo" />
        <div className="about-text">
          <p className="eyebrow">About</p>
          <h2 className="h2">Walking distance from the centre and the beaches.</h2>
          <p>
            The apartment sits on a quiet residential street.
            Walk down to the city centre for breakfast, cut through the centre for a dive in
            the sea, and follow the coast path to Ponta da Piedade before the morning crowds
            arrive.
          </p>
          <p className="muted">Hosted by Stefania. We may answer within 12 hours.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery mosaic ---------- */
function Gallery({ onOpen }) {
  const tiles = [
    { src: "../../assets/marazul-01.jpg", cap: "Living, looking out", span: "wide tall" },
    { src: "../../assets/marazul-02.jpg", cap: "Sitting area" },
    { src: "../../assets/marazul-08.jpg", cap: "Bedroom" },
    { src: "../../assets/marazul-04.jpg", cap: "Kitchen and dining" },
    { src: "../../assets/marazul-05.jpg", cap: "Cooking" },
    { src: "../../assets/marazul-09.jpg", cap: "Bedroom corner" },
    { src: "../../assets/marazul-11.jpg", cap: "Bathroom" },
    { src: "../../assets/marazul-07.jpg", cap: "Living, second view" },
    { src: "../../assets/marazul-03.jpg", cap: "From the entrance" },
    { src: "../../assets/marazul-10.jpg", cap: "Looking through" },
    { src: "../../assets/marazul-06.jpg", cap: "Detail" },
  ];
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Inside</p>
        <h2 className="h2">Inside the apartment.</h2>
        <div className="mosaic">
          {tiles.map((t, i) => (
            <button
              key={i}
              className={"tile " + (t.span || "")}
              style={{ backgroundImage: `url(${t.src})` }}
              onClick={() => onOpen(tiles, i)}
              aria-label={"Open photo: " + t.cap}
            >
              <span className="cap">{t.cap}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Direct booking perks ---------- */
function Perks() {
  const perks = [
    "Free parking.",
    "Late checkout and early check-in when the calendar allows.",
    "Direct WhatsApp line with Stefania, before and during your stay.",
    "Best rate available, every time.",
    "A short walking guide of the host's favourite tasca, padaria, and quiet beach.",
  ];
  return (
    <section className="section">
      <div className="container perks">
        <div>
          <p className="eyebrow">Direct booking</p>
          <h2 className="h2">Booking direct gets you a few extra things.</h2>
          <p className="lede">Same dates, same calendar, same apartment. A few small additions.</p>
        </div>
        <ul className="perks-list">
          {perks.map((p, i) => (
            <li key={i}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1E5B73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Location ---------- */
function Location() {
  const places = [
    ["Tasca", "Prato Cheio", "Walking distance"],
    ["Groceries", "Intermarché Lagos", "10 min walk"],
    ["Beach", "Praia da Batata", "Walking distance"],
    ["Beach", "Praia Dona Ana", "Walking distance"],
    ["Marina", "Marina de Lagos", "Walking distance"],
    ["Bakery", "Padaria Central", "Walking distance"],
  ];
  return (
    <section className="section section-tint">
      <div className="container">
        <p className="eyebrow">Location</p>
        <h2 className="h2">Lagos, on foot.</h2>
        <div className="map" aria-label="Map of Lagos showing the apartment">
          <div className="map-grid" />
          <div className="map-pin" title="Apartamento Mar Azul">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="#1E5B73" stroke="#F8F6F1" strokeWidth="1.5">
              <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
          </div>
          <span className="map-watermark">Leaflet · OpenStreetMap</span>
        </div>
        <ul className="places">
          {places.map(([t, n, d], i) => (
            <li key={i} className="place">
              <span className="place-type">{t}</span>
              <span className="place-name">{n}</span>
              <span className="place-dist">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */
function Reviews() {
  // PLACEHOLDER reviews. Real Google Reviews from the property's GBP listing
  // populate these in Sprint 2. Do not invent. Do not paraphrase.
  const items = [
    { name: "[Real reviewer 1]", date: "[date]", quote: "[Pull verbatim from Google Business Profile review #1.]" },
    { name: "[Real reviewer 2]", date: "[date]", quote: "[Pull verbatim from Google Business Profile review #2.]" },
    { name: "[Real reviewer 3]", date: "[date]", quote: "[Pull verbatim from Google Business Profile review #3.]" },
    { name: "[Real reviewer 4]", date: "[date]", quote: "[Pull verbatim from Google Business Profile review #4.]" },
    { name: "[Real reviewer 5]", date: "[date]", quote: "[Pull verbatim from Google Business Profile review #5.]" },
  ];
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Reviews</p>
        <h2 className="h2">Five reviews. Five people.</h2>
        <div className="reviews">
          {items.map((r, i) => (
            <article key={i} className="review">
              <div className="review-head">
                <span className="review-name">{r.name}</span>
                <span className="review-date">{r.date}</span>
              </div>
              <div className="stars">
                {[0, 1, 2, 3, 4].map((j) => (
                  <svg key={j} viewBox="0 0 24 24" width="13" height="13" fill="#D8B98A">
                    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
                  </svg>
                ))}
              </div>
              <p className="review-quote">{r.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    ["Where do I get the keys?", "A self check-in lockbox by the front door. We send the code before the arrival."],
    ["Is parking included?", "There's a free parking spot near the house."],
    ["Is the apartment baby friendly?", "Yes. A travel cot and high chair are kept in the storage cupboard. The building is quiet at night and there's a small pharmacy two streets over."],
    ["What is the cancellation policy?", "Free cancellation up to 7 days before arrival. Within 7 days, 50% of the amount is non-refundable."],
    ["How is the Wi-Fi?", "Fibre, around 200 Mbps down. We've taken a video call from the terrace without trouble."],
    ["How far is the beach?", "Both Praia da Batata and Praia Dona Ana are within walking distance from the apartment, along quiet residential streets."],
    ["Are pets welcome?", "We're not set up for pets, sorry. Allergies in the family."],
    ["Which languages do you speak?", "Stefania speaks Portuguese, Italian and English."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2 className="h2">A few things people ask.</h2>
        <div className="faq">
          {items.map(([q, a], i) => (
            <div key={i} className={"faq-item" + (open === i ? " is-open" : "")}>
              <button className="faq-row" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="faq-q">{q}</span>
                <span className="faq-chev" aria-hidden="true" />
              </button>
              <div className="faq-panel">
                <div className="faq-panel-inner">
                  <p className="faq-a">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA full-bleed ---------- */
function FinalCTA({ onAvailability }) {
  return (
    <section className="final" id="whatsapp">
      <div className="container final-inner">
        <div>
          <p className="eyebrow eyebrow-light">Direct booking</p>
          <h2 className="h2 h2-light">Ready when you are.</h2>
        </div>
        <div className="final-cta">
          <button className="btn btn-primary-light" onClick={onAvailability}>Check availability</button>
          <a className="btn btn-ghost-light" href="#">
            <span>WhatsApp Stefy</span>
            <span className="micro">we may answer within 12 hours</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Availability preview (homepage bridge to /book) ---------- */
function Availability({ onContinue }) {
  // Visual-only mini-calendar for the design preview.
  // Sprint 2 wires this to live Lodgify availability data.
  return (
    <section className="section" id="availability">
      <div className="container">
        <p className="eyebrow">Your dates</p>
        <h2 className="h2">Pick your dates.</h2>
        <p className="lede">Real-time availability. Prices update from €100 per night. Three-night minimum.</p>
        <div className="avail-cal">
          <div className="cal-month">
            <p className="cal-name">June 2026</p>
            <div className="cal-grid">
              {Array.from({ length: 30 }).map((_, i) => {
                const d = i + 1;
                const blocked = [3, 4, 5, 24, 25, 26, 27].includes(d);
                const sel = d >= 14 && d <= 20;
                const start = d === 14, end = d === 20;
                return (
                  <span
                    key={i}
                    className={
                      "cal-d" +
                      (blocked ? " is-blocked" : "") +
                      (sel && !start && !end ? " is-sel" : "") +
                      (start ? " is-start" : "") +
                      (end ? " is-end" : "")
                    }
                  >
                    {d}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="cal-month">
            <p className="cal-name">July 2026</p>
            <div className="cal-grid">
              {Array.from({ length: 31 }).map((_, i) => {
                const d = i + 1;
                const blocked = [10, 11, 12, 13, 14, 22, 23].includes(d);
                return <span key={i} className={"cal-d" + (blocked ? " is-blocked" : "")}>{d}</span>;
              })}
            </div>
          </div>
        </div>
        <div className="avail-cta">
          <button className="btn btn-primary" onClick={onContinue}>Continue to booking →</button>
          <a className="btn btn-ghost" href="#whatsapp">
            <span>Or message us on WhatsApp</span>
            <span className="micro">we may answer within 12 hours</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <img className="footer-logo" src="../../assets/logo-monocrome.svg" alt="Apartamento Mar Azul" />
          <p className="muted small">Rua Dom Luís da Silveira lote V 44 B · 8600-575 Lagos · Algarve, Portugal</p>
        </div>
        <div className="footer-cols">
          <div>
            <p className="footer-h">Languages</p>
            <p className="muted small">English · Português · Deutsch · Nederlands · Français</p>
          </div>
          <div>
            <p className="footer-h">Legal</p>
            <p className="muted small"><a href="#">Privacy</a> · <a href="#">Cookies</a> · <a href="#">Terms</a></p>
          </div>
          <div>
            <p className="footer-h">© 2026</p>
            <p className="muted small">Apartamento Mar Azul, Lda.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Sticky bottom CTA bar ---------- */
function StickyCTA({ visible, onBook }) {
  return (
    <div className={"sticky-cta" + (visible ? " is-visible" : "")} role="complementary">
      <div className="sticky-cta-inner">
        <div>
          <span className="sticky-price">From €100 per night</span>
          <span className="sticky-meta">Best rate available, every time.</span>
        </div>
        <button className="btn btn-primary" onClick={onBook}>Book direct</button>
      </div>
    </div>
  );
}

/* ---------- Lightbox ---------- */
function Lightbox({ tile, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const touchStartX = useRef(null);
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && hasPrev) onPrev();
      else if (e.key === "ArrowRight" && hasNext) onNext();
    }
    if (tile) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tile, onClose, onPrev, onNext, hasPrev, hasNext]);
  if (!tile) return null;
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx > 0 && hasPrev) onPrev();
    else if (dx < 0 && hasNext) onNext();
  };
  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <img src={tile.src} alt={tile.cap} />
        <p className="lightbox-cap">{tile.cap}</p>
      </div>
      {hasPrev && (
        <button
          className="lightbox-nav lightbox-prev"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous photo"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      {hasNext && (
        <button
          className="lightbox-nav lightbox-next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next photo"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}

/* ---------- /book page (Lodgify shell) ---------- */
function BookPage({ onBack }) {
  return (
    <div className="book-page">
      <div className="container book-inner">
        <button className="back" onClick={onBack}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          <span>Back to the apartment</span>
        </button>
        <p className="eyebrow">Booking</p>
        <h2 className="h2">Pick your dates.</h2>
        <p className="lede">Best rate available, every time. Booking direct includes a welcome bottle of vinho verde, free parking, and a direct WhatsApp line with Stefania.</p>
        <div className="lodgify-shell">
          <div className="lodgify-head">
            <span className="eyebrow">Powered by Lodgify</span>
            <span className="muted small">Secure checkout · we may answer within 12 hours</span>
          </div>
          <div className="lodgify-body">
            <div className="ldgy-row">
              <div className="ldgy-field"><span>Check-in</span><strong>Sat, 14 Jun 2026</strong></div>
              <div className="ldgy-field"><span>Check-out</span><strong>Sat, 21 Jun 2026</strong></div>
              <div className="ldgy-field"><span>Guests</span><strong>2 adults</strong></div>
            </div>
            <div className="ldgy-cal">
              <div className="cal-month">
                <p className="cal-name">June 2026</p>
                <div className="cal-grid">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const d = i + 1;
                    const sel = d >= 14 && d <= 20;
                    const start = d === 14, end = d === 21;
                    return <span key={i} className={"cal-d" + (sel ? " is-sel" : "") + (start ? " is-start" : "") + (end ? " is-end" : "")}>{d}</span>;
                  })}
                </div>
              </div>
              <div className="cal-month">
                <p className="cal-name">July 2026</p>
                <div className="cal-grid">
                  {Array.from({ length: 31 }).map((_, i) => <span key={i} className="cal-d">{i + 1}</span>)}
                </div>
              </div>
            </div>
            <div className="ldgy-summary">
              <div className="ldgy-line"><span>€95 × 7 nights</span><span>€665</span></div>
              <div className="ldgy-line"><span>Cleaning fee</span><span>€55</span></div>
              <div className="ldgy-line"><span>Tourist tax</span><span>€14</span></div>
              <div className="ldgy-line ldgy-total"><span>Total</span><span>€734</span></div>
              <button className="btn btn-primary btn-block">Continue to payment</button>
              <p className="muted small">Free cancellation up to 14 days before arrival.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  TopBar, Hero, TrustStrip, FactsGrid, About, Gallery, Perks, Location, Reviews, FAQ,
  Availability, FinalCTA, Footer, StickyCTA, Lightbox, BookPage,
});
