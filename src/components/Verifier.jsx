const SPECS = [
  { k: 'Verifier base', v: 'Open-weight, full logprob access' },
  { k: 'Calibration set', v: 'Stratified sample of your production tasks' },
  { k: 'Scoring', v: 'Task-level pass/fail + confidence interval' },
  { k: 'Agreement target', v: 'κ ≥ 0.85 vs. human-labeled holdout' },
  { k: 'Report format', v: 'Signed report + raw scored transcript export' },
  { k: 'Refresh cadence', v: 'Re-calibrated as your traffic shifts' },
]

export default function Verifier() {
  return (
    <section id="verifier" className="verifier">
      <div className="container verifier__grid">
        <div>
          <p className="eyebrow">Why open-weight</p>
          <h2>Frontier APIs won't show you their logprobs.<br/>So we don't verify with them.</h2>
          <p>
            A verifier that can't see calibrated confidence is just another LLM guessing.
            Closed frontier APIs strip that signal out. We calibrate on open-weight models
            specifically because we need the full probability distribution — not just the
            top token — to score agreement reliably against a human-labeled holdout.
          </p>
          <p>
            The output isn't a leaderboard position. It's a report scoped to your traffic,
            with the failure cases named, so your team knows exactly what to watch if you ship it.
          </p>
        </div>

        <div className="verifier__spec">
          <div className="verifier__spec-head mono-tag">VERIFIER SPECIFICATION</div>
          {SPECS.map((s) => (
            <div className="verifier__spec-row" key={s.k}>
              <span className="mono-tag">{s.k}</span>
              <span className="verifier__spec-val">{s.v}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .verifier {
          padding: 110px 0;
          background: var(--ink-raised);
          border-top: 1px solid var(--ink-line);
          border-bottom: 1px solid var(--ink-line);
        }
        .verifier__grid {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 70px;
          align-items: start;
        }
        .verifier h2 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: clamp(1.7rem, 2.8vw, 2.3rem);
          line-height: 1.22;
          margin: 20px 0 26px;
        }
        .verifier p {
          font-size: 15.5px;
          line-height: 1.72;
          color: var(--paper-dim);
          max-width: 54ch;
          margin: 0 0 20px;
        }
        .verifier__spec {
          background: var(--ink);
          border: 1px solid var(--ink-line);
          border-radius: 6px;
          padding: 24px 26px;
        }
        .verifier__spec-head {
          padding-bottom: 16px;
          border-bottom: 1px solid var(--ink-line);
          margin-bottom: 16px;
          letter-spacing: 0.12em;
        }
        .verifier__spec-row {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 11px 0;
          border-bottom: 1px solid var(--ink-line);
          font-size: 13.5px;
        }
        .verifier__spec-row:last-child { border-bottom: none; }
        .verifier__spec-val {
          font-family: var(--font-mono);
          text-align: right;
          color: var(--paper);
        }
        @media (max-width: 900px) {
          .verifier__grid { grid-template-columns: 1fr; gap: 44px; }
        }
      `}</style>
    </section>
  )
}
