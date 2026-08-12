const STEPS = [
  {
    n: '01',
    title: 'We derive your task distribution',
    body: 'Not a public benchmark. We pull a stratified, scoreable sample of tasks from your own production logs — the actual tickets, conversations, and edge cases your agent handles every day.',
  },
  {
    n: '02',
    title: 'We calibrate a verifier',
    body: 'A verifier trained on open-weight models with full access to logprobs — something frontier APIs won\u2019t give you. It learns what "correct" looks like for your domain, not a generic rubric.',
  },
  {
    n: '03',
    title: 'We certify the swap',
    body: 'Run your candidate stack against the same distribution. Get a signed report: quality delta, cost delta, and where — precisely — the cheaper stack still fails.',
  },
]

export default function Method() {
  return (
    <section id="method" className="method">
      <div className="container">
        <p className="eyebrow">The method</p>
        <h2>Benchmarks don't transfer to production. Your traffic does.</h2>
        <p className="method__intro">
          Every model provider publishes benchmark scores. None of them tell you whether
          a cheaper model will hold up on <em>your</em> support tickets, in <em>your</em> tone,
          against <em>your</em> edge cases. We built Proofhouse because that gap is where
          cost-reduction decisions actually get made — or get abandoned out of fear.
        </p>

        <div className="method__steps">
          {STEPS.map((s) => (
            <div className="method__step" key={s.n}>
              <span className="method__num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .method {
          padding: 110px 0;
          background: var(--ink);
          border-top: 1px solid var(--ink-line);
        }
        .method h2 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          line-height: 1.18;
          max-width: 20ch;
          margin: 20px 0 22px;
        }
        .method__intro {
          font-size: 16px;
          line-height: 1.7;
          color: var(--paper-dim);
          max-width: 62ch;
          margin: 0 0 64px;
        }
        .method__intro em { color: var(--paper); font-style: normal; border-bottom: 1px solid var(--lab-green); }
        .method__steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid var(--ink-line);
        }
        .method__step {
          padding: 34px 32px 0 0;
          border-right: 1px solid var(--ink-line);
        }
        .method__step:last-child { border-right: none; padding-right: 0; }
        .method__num {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--lab-green-bright);
          display: block;
          margin-bottom: 18px;
          padding-top: 18px;
        }
        .method__step h3 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: 19px;
          margin: 0 0 12px;
          line-height: 1.3;
        }
        .method__step p {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--paper-dim);
          margin: 0;
        }
        @media (max-width: 800px) {
          .method__steps { grid-template-columns: 1fr; }
          .method__step {
            border-right: none;
            border-bottom: 1px solid var(--ink-line);
            padding: 28px 0;
          }
          .method__num { padding-top: 0; }
          .method__step:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
