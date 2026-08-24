'use client';

import { FormEvent, useState } from 'react';

const PHONE = '770-458-2510';

const services = [
  { number: '01', title: 'Residential moving', detail: 'Careful handling. On-time arrivals. A smooth move for you and your family.', image: '/images/residential-hd.jpg', alt: 'Georgia Pack and Load residential moving truck' },
  { number: '02', title: 'Commercial moving', detail: 'Minimize downtime. Maximize productivity. We move your business.', image: '/images/commercial-hd.jpg', alt: 'Georgia Pack and Load commercial moving team' },
  { number: '03', title: 'Professional packing', detail: 'Our expert packers protect what matters most using quality materials.', image: '/images/packing-hd.jpg', alt: 'Professional packing service' },
  { number: '04', title: 'Secure storage', detail: 'Clean. Secure. Monitored. Short-term or long-term storage solutions.', image: '/images/storage-hd.jpg', alt: 'Secure storage warehouse' },
];

const serviceAreas = ['Atlanta', 'Suwanee', 'Alpharetta', 'Roswell', 'Marietta', 'Decatur', 'Valdosta', 'Waycross'];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function EstimateCard() {
  const [sent, setSent] = useState(false);

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setSent(true);
    form.reset();
  }

  return (
    <div className="estimate-card" id="estimate">
      <div className="ticket-stub" aria-hidden="true"><span>Est. 1995</span></div>
      <h2>Ready to move?</h2>
      <p className="estimate-subhead">Fastest way to get started</p>
      <a className="estimate-call" href={`tel:${PHONE.replaceAll('-', '')}`}>☎ <span>Call {PHONE}</span></a>
      {sent ? (
        <div className="estimate-success" role="status">
          <span>✓</span>
          <div><strong>You&apos;re on the list.</strong><p>A move coordinator will call you shortly.</p></div>
          <button type="button" onClick={() => setSent(false)}>Start another estimate</button>
        </div>
      ) : (
        <form onSubmit={submitEstimate}>
          <div className="form-divider"><span>Or request a free estimate</span></div>
          <div className="form-row form-row--three">
            <label><span>Name</span><input aria-label="Name" name="name" autoComplete="name" required /></label>
            <label><span>Phone</span><input aria-label="Phone" name="phone" type="tel" autoComplete="tel" required /></label>
            <label><span>Moving from ZIP</span><input aria-label="Moving from ZIP" name="from" autoComplete="postal-code" required /></label>
          </div>
          <button className="estimate-submit" type="submit">Get my free estimate</button>
          <p className="fine-print">No pressure. No hidden fees.</p>
        </form>
      )}
    </div>
  );
}

function DetailedEstimateForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div className="final-success" role="status">
        <span>✓</span>
        <h3>Estimate request received.</h3>
        <p>A move coordinator will call to learn the details and give you a straightforward estimate.</p>
        <button type="button" onClick={() => setSent(false)}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="final-form" onSubmit={submit}>
      <div className="field-pair">
        <label>Your name<input name="name" autoComplete="name" required /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label>
      </div>
      <div className="field-pair">
        <label>Moving from<input name="from" autoComplete="postal-code" placeholder="City or ZIP" required /></label>
        <label>Moving to<input name="to" autoComplete="postal-code" placeholder="City or ZIP" required /></label>
      </div>
      <div className="field-pair">
        <label>Move date<input name="date" type="date" required /></label>
        <label>Move type<select name="type" defaultValue="Residential"><option>Residential</option><option>Commercial</option><option>Packing only</option><option>Storage</option></select></label>
      </div>
      <label>Anything we should know?<textarea name="details" rows={3} placeholder="Bedrooms, stairs, special items…" /></label>
      <button className="dark-button" type="submit">Start my estimate <Arrow /></button>
      <p>By submitting, you agree that our move team may contact you about this request.</p>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const phoneHref = `tel:${PHONE.replaceAll('-', '')}`;

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Georgia Pack and Load home"><img src="/images/logo.webp" alt="Georgia Pack & Load" /></a>
        <nav className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Moving</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Storage</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Packing</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <a className="header-call" href={phoneHref}>☎ &nbsp; Call {PHONE}</a>
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-service-strip" aria-label="Moving services">
          <span>Local</span><span>Long-distance</span><span>Commercial</span><span>Packing</span><span>Storage</span>
        </div>
        <div className="route-line route-line--hero" aria-hidden="true"><span className="route-dot route-dot--one" /><span className="route-dot route-dot--two" /></div>
        <div className="hero-copy">
          <p className="kicker">Atlanta&apos;s moving team since 1995</p>
          <h1><span>Move the</span><span>Smart</span></h1>
        </div>
        <EstimateCard />
      </section>

      <section className="story-teaser" id="story">
        <div className="story-photo"><img src="/images/story-movers-hd.jpg" alt="Georgia Pack and Load movers handing off a box" /></div>
        <div className="story-copy">
          <div className="story-stat"><strong>30+</strong><h2>Years<br />moving<br />Georgia<br />forward.</h2></div>
          <div className="trust-row"><span>Local<br />people</span><span>Licensed &amp;<br />insured</span><span>One team<br />start to finish</span></div>
          <a className="story-call" href={phoneHref}>☎ &nbsp; Talk to a mover</a>
        </div>
        <div className="story-side"><figure><img src="/images/packing-hd.jpg" alt="Professional packing" /></figure><figure><img src="/images/storage-hd.jpg" alt="Secure storage warehouse" /></figure></div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <p className="kicker">One team for the whole move</p>
          <h2>Everything<br />your move<br /><em>needs.</em></h2>
          <p>Pick what you need. We&apos;ll make it feel like one seamless plan.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <a className="service-row" href="#final-estimate" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-name"><h3>{service.title}</h3><p>{service.detail}</p></div>
              <div className="service-image"><img src={service.image} alt={service.alt} /></div>
              <span className="service-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-heading section-heading--center">
          <p className="kicker">No guesswork. No handoffs.</p>
          <h2>One call.<br />One plan.<br />One smooth<br />move.</h2>
        </div>
        <div className="process-route" aria-hidden="true"><span /><span /><span /></div>
        <div className="process-grid">
          <article><strong>01</strong><h3>Call</h3><p>Talk with a real Georgia move coordinator who listens before they estimate.</p></article>
          <article><strong>02</strong><h3>Plan</h3><p>Get a clear scope, honest timing and a crew that knows what move day requires.</p></article>
          <article><strong>03</strong><h3>Move</h3><p>We pack, protect, load and deliver—without passing you from team to team.</p></article>
        </div>
        <a className="primary-button process-button" href={`tel:${PHONE.replaceAll('-', '')}`}>Start with a call <Arrow /></a>
      </section>

      <section className="testimonial">
        <p className="kicker kicker--light">From a Georgia Pack &amp; Load customer</p>
        <blockquote>“From initial contact to finish, I was extremely impressed by the professionalism, courtesy and hard work.”</blockquote>
        <div className="testimonial-meta"><span className="stars" aria-label="Five star review">★★★★★</span><span>100% positive experience</span><a href="https://g.co/kgs/NSddJr" target="_blank" rel="noreferrer">Read Google reviews <Arrow /></a></div>
      </section>

      <section className="areas" id="areas">
        <div className="areas-copy">
          <p className="kicker">Georgia is home</p>
          <h2>Across the state.<br />Around the corner.</h2>
          <p>From metro Atlanta to South Georgia—and wherever your next chapter takes you.</p>
          <div className="area-pills">{serviceAreas.map((area) => <span key={area}>{area}</span>)}</div>
          <a className="text-link" href="#final-estimate">Check your route <Arrow /></a>
        </div>
        <div className="georgia-map">
          <img src="/images/georgia-map.svg" alt="Georgia service area map with connected location markers" />
        </div>
      </section>

      <section className="final-contact" id="final-estimate">
        <div className="call-panel">
          <p className="kicker kicker--light">Prefer to talk?</p>
          <h2>Ready when<br />you are.</h2>
          <p>Real answers from a real move coordinator. No phone maze.</p>
          <a href={`tel:${PHONE.replaceAll('-', '')}`}>{PHONE}</a>
          <span>Mon–Fri · 8:00 AM–5:00 PM</span>
        </div>
        <div className="form-panel">
          <p className="kicker">Want an estimate online?</p>
          <h2>Tell us about your move.</h2>
          <DetailedEstimateForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><img src="/images/logo.webp" alt="Georgia Pack & Load" /><p>Georgia moving, packing and storage—handled by one team from start to finish.</p><a href={`tel:${PHONE.replaceAll('-', '')}`}>{PHONE}</a></div>
        <div><h3>Moving</h3><a href="#services">Residential</a><a href="#services">Long distance</a><a href="#services">Commercial</a><a href="#services">Packing</a></div>
        <div><h3>Company</h3><a href="#story">Why us</a><a href="#areas">Service areas</a><a href="#final-estimate">Free estimate</a><a href="https://gapackandload.com/blog/">Moving advice</a></div>
        <div><h3>Locations</h3><p>Suwanee · 4103 Tench Rd #100</p><p>Waycross · 315 Plant Ave Ste C</p><p>Valdosta · 304 Janet St Ste B</p></div>
        <div className="footer-bottom"><span>© 2026 Georgia Pack &amp; Load Moving &amp; Storage</span><span>Licensed · Insured · Third-party verified</span></div>
      </footer>

      <a className="mobile-call" href={`tel:${PHONE.replaceAll('-', '')}`}>Call now · {PHONE}</a>
    </main>
  );
}
