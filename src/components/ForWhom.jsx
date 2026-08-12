const ITEMS = [
  {
    title: 'You run a support-agent product',
    body: 'Your margin depends on inference cost, and your churn depends on quality. Every frontier-to-cheaper swap is a bet on both at once.',
  },
  {
    title: 'You already suspect a smaller stack could work',
    body: 'Most teams do. What stops them shipping it isn\u2019t the model — it\u2019s not having a credible way to prove nothing broke.',
  },
  {
    title: 'You need something to show, not just tell',
    body: 'A signed certification report is something you can put in front of your own customers or your board when you make the switch.',
  },
]

export default function ForWhom() {
  return (
    <section id="for-whom" className="forwhom">
      <div className="container">
        <p className="eyebrow">Who this is for</p>
        <h2>Built for the teams between "it probably works" and knowing.</h2>

        <div className="forwhom__grid">
          {ITEMS.map((it) => (
            <div className="forwhom__item" key={it.title}>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .forwhom {
          padding: 110px 0;
          background: var(--ink);
        }
        .forwhom h2 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          line-height: 1.2;
          max-width: 22ch;
          margin: 20px 0 56px;
        }
        .forwhom__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .forwhom__item h3 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: 18px;
          line-height: 1.35;
          margin: 0 0 12px;
          color: var(--lab-green-bright);
        }
        .forwhom__item p {
          font-size: 14.5px;
          line-height: 1.68;
          color: var(--paper-dim);
          margin: 0;
        }
        @media (max-width: 800px) {
          .forwhom__grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  )
}
