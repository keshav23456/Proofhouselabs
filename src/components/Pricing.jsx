const TIERS = [
  {
    name: 'Single certification',
    price: 'Custom',
    desc: 'One production task distribution, one candidate stack, one signed report.',
    features: [
      'Task distribution built from your logs',
      'Calibrated verifier for your domain',
      'Signed certification report',
      'Scored transcript export',
    ],
    cta: 'Request a quote',
    highlight: false,
  },
  {
    name: 'Continuous certification',
    price: 'Custom',
    desc: 'Re-calibrated verifier that tracks your traffic as it shifts, with certification on demand.',
    features: [
      'Everything in Single certification',
      'Verifier re-calibrated on a schedule',
      'Certify new stacks anytime',
      'Direct line to the verification team',
    ],
    cta: 'Talk to us',
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <p className="eyebrow">Pricing</p>
        <h2>Priced like an audit, not a subscription.</h2>
        <p className="pricing__intro">
          We're working with a small number of design partners right now. Pricing is
          scoped to your traffic volume and the number of stacks you want certified —
          talk to us and we'll put a number to it within a week.
        </p>

        <div className="pricing__grid">
          {TIERS.map((t) => (
            <div className={`pricing__card ${t.highlight ? 'pricing__card--highlight' : ''}`} key={t.name}>
              {t.highlight && <span className="pricing__badge mono-tag">Most requested</span>}
              <h3>{t.name}</h3>
              <div className="pricing__price">{t.price}</div>
              <p className="pricing__desc">{t.desc}</p>
              <ul>
                {t.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className={`btn ${t.highlight ? 'btn--solid' : 'btn--ghost'}`} style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing {
          padding: 110px 0;
          background: var(--ink-raised);
          border-top: 1px solid var(--ink-line);
        }
        .pricing h2 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          margin: 20px 0 18px;
        }
        .pricing__intro {
          font-size: 15.5px;
          line-height: 1.7;
          color: var(--paper-dim);
          max-width: 56ch;
          margin: 0 0 56px;
        }
        .pricing__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .pricing__card {
          display: flex;
          flex-direction: column;
          background: var(--ink);
          border: 1px solid var(--ink-line);
          border-radius: 8px;
          padding: 34px 32px;
          position: relative;
        }
        .pricing__card--highlight {
          border-color: var(--lab-green);
        }
        .pricing__badge {
          position: absolute;
          top: -12px;
          left: 32px;
          background: var(--lab-green);
          color: var(--ink);
          padding: 4px 10px;
          border-radius: 3px;
          font-weight: 600;
          letter-spacing: 0.08em;
        }
        .pricing__card h3 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: 20px;
          margin: 6px 0 8px;
        }
        .pricing__price {
          font-family: var(--font-mono);
          font-size: 15px;
          color: var(--lab-green-bright);
          margin-bottom: 16px;
        }
        .pricing__desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--paper-dim);
          margin: 0 0 24px;
        }
        .pricing__card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pricing__card li {
          font-size: 13.5px;
          color: var(--paper);
          padding-left: 20px;
          position: relative;
          line-height: 1.5;
        }
        .pricing__card li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          width: 8px;
          height: 8px;
          border: 1.5px solid var(--lab-green-bright);
          transform: rotate(45deg);
        }
        @media (max-width: 720px) {
          .pricing__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
