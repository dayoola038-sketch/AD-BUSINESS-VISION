'use client'

import { useState } from 'react'

const services = [
  { number: '01', title: 'Brand direction', text: 'Find the sharpest expression of your business and make every touchpoint feel unmistakably yours.' },
  { number: '02', title: 'Growth systems', text: 'Turn scattered marketing into a repeatable system that compounds attention, trust, and revenue.' },
  { number: '03', title: 'AI advantage', text: 'Use emerging tools with intention—faster research, better creative, and more room for big thinking.' },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (email.trim()) setSent(true)
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="wordmark" href="#top" aria-label="A.D. Business Vision home"><span className="mark">A.D.</span><span>BUSINESS<br />VISION</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'}</button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Start a conversation</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span className="dot" /> Independent growth studio · Est. 2026</div>
        <div className="hero-grid">
          <h1>Make your<br /><em>next move</em><br />matter.</h1>
          <div className="hero-aside"><p>We help ambitious founders turn strong ideas into clear brands and businesses built to last.</p><a className="arrow-link" href="#contact">Let&apos;s talk <span>↗</span></a></div>
        </div>
        <div className="hero-bottom"><span>Scroll to explore</span><span className="line" /><span>01 — 04</span></div>
      </section>

      <section className="statement shell" id="approach"><p className="section-label">Our point of view</p><div className="statement-copy"><h2>Clarity is a <span>competitive</span> advantage.</h2><p>In a noisy market, the businesses that win are the ones that know exactly who they are, why they matter, and what to do next. That is where we come in.</p></div></section>

      <section className="services" id="services"><div className="shell"><div className="section-head"><p className="section-label">How we help</p><h2>Good thinking.<br /><span>Real momentum.</span></h2></div><div className="service-list">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><span className="service-arrow">↗</span></article>)}</div></div></section>

      <section className="manifesto shell"><div className="manifesto-stamp">A.D.<br />BV</div><div><p className="section-label">The ambition</p><h2>Build a business<br />you&apos;re <em>proud</em> to run.</h2></div></section>

      <section className="contact shell" id="contact"><div><p className="section-label">Have a big idea?</p><h2>Let&apos;s make<br /><em>it real.</em></h2></div><div className="contact-card"><p>Get occasional notes on building a better business. No noise, just useful ideas.</p>{sent ? <div className="success">You&apos;re on the list. See you soon.</div> : <form onSubmit={submit}><label htmlFor="email">Your email address</label><div className="input-row"><input id="email" type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} /><button type="submit" aria-label="Subscribe">↗</button></div></form>}</div></section>

      <footer className="footer shell"><a className="wordmark" href="#top"><span className="mark">A.D.</span><span>BUSINESS<br />VISION</span></a><p>For businesses with somewhere to go.</p><span>© 2026</span></footer>
    </main>
  )
}
