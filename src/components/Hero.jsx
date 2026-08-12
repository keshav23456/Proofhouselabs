export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Certified cost reduction, not benchmarks</p>
          <h1>
            Prove the cheaper model stack<br />
            <span className="hero__accent">before</span> you ship it.
          </h1>
          <p className="hero__lede">
            Proofhouse builds a scoreable task distribution from your own production
            traffic and a calibrated verifier to certify it — so you can swap frontier
            calls for a cheaper stack without gambling on quality regressions.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--solid">Request a certification run</a>
            <a href="#method" className="btn btn--text">See how it works ↓</a>
          </div>
          <div className="hero__proof-line">
            <span className="mono-tag">Built for support-agent teams running production LLM traffic</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <CertificateCard />
        </div>
      </div>

      <style>{`
        .hero {
          padding: 168px 0 96px;
          background:
            radial-gradient(ellipse 900px 500px at 15% -10%, rgba(91,140,123,0.16), transparent 60%),
            var(--ink);
        }
        .hero__grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .hero__copy h1 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: clamp(2.4rem, 4.4vw, 3.6rem);
          line-height: 1.08;
          letter-spacing: -0.015em;
          margin: 22px 0 24px;
        }
        .hero__accent {
          font-style: italic;
          color: var(--lab-green-bright);
        }
        .hero__lede {
          font-size: 17px;
          line-height: 1.6;
          color: var(--paper-dim);
          max-width: 46ch;
          margin: 0 0 34px;
        }
        .hero__actions {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .hero__proof-line {
          padding-top: 20px;
          border-top: 1px solid var(--ink-line);
        }
        .hero__visual {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .hero { padding: 128px 0 64px; }
          .hero__grid { grid-template-columns: 1fr; }
          .hero__visual { order: -1; margin-bottom: 12px; }
        }
      `}</style>
    </section>
  )
}

function CertificateCard() {
  return (
    <div className="cert">
      <div className="cert__head">
        <span className="mono-tag">CERTIFICATION REPORT</span>
        <span className="cert__id mono-tag">PH-0091-A</span>
      </div>
      <div className="cert__seal">
        <svg width="46" height="46" viewBox="0 0 64 64">
          <path d="M32 6 L56 19.5 V46.5 L32 60 L8 46.5 V19.5 Z" fill="none" stroke="#5B8C7B" strokeWidth="2.5"/>
          <path d="M20 32.5 L28.5 41 L46 21" fill="none" stroke="#F2EFE9" strokeWidth="4.2" strokeLinecap="square"/>
        </svg>
        <div>
          <div className="cert__seal-title">Stack certified</div>
          <div className="cert__seal-sub mono-tag">within tolerance on 3,142 tasks</div>
        </div>
      </div>

      <div className="cert__rows">
        <CertRow label="Task distribution" value="Prod-derived · 3,142 traces" />
        <CertRow label="Baseline" value="GPT-4.1 / Claude Opus" />
        <CertRow label="Candidate stack" value="Mixed 8B–70B open-weight" />
        <CertRow label="Verifier agreement" value="κ = 0.91" strong />
        <CertRow label="Quality delta" value="−0.4% (n.s.)" strong good />
        <CertRow label="Cost delta" value="−71.2%" strong good />
      </div>

      <div className="cert__foot">
        <span className="mono-tag">Verified against production task distribution — not a public benchmark</span>
      </div>

      <style>{`
        .cert {
          width: 100%;
          max-width: 420px;
          background: var(--ink-raised);
          border: 1px solid var(--ink-line);
          border-radius: 6px;
          padding: 26px 26px 22px;
        }
        .cert__head {
          display: flex;
          justify-content: space-between;
          padding-bottom: 18px;
          border-bottom: 1px dashed var(--ink-line);
          margin-bottom: 20px;
        }
        .cert__seal {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }
        .cert__seal-title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 560;
        }
        .cert__seal-sub { margin-top: 2px; }
        .cert__rows {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
        .cert__foot {
          padding-top: 16px;
          border-top: 1px dashed var(--ink-line);
        }
      `}</style>
    </div>
  )
}

function CertRow({ label, value, strong, good }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <span className="mono-tag">{label}</span>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          fontWeight: strong ? 600 : 400,
          color: good ? 'var(--lab-green-bright)' : 'var(--paper)',
        }}
      >
        {value}
      </span>
    </div>
  )
}
