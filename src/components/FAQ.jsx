import { useState } from 'react'

const FAQS = [
  {
    q: 'How is this different from a public benchmark?',
    a: 'Public benchmarks measure general capability on tasks nobody in particular asked for. We build a scoreable distribution from your own production traffic, so the certification answers the only question that matters: does the cheaper stack hold up on the tasks you actually get.',
  },
  {
    q: 'Why do you need our production data?',
    a: 'The verifier is only as good as the distribution it\u2019s calibrated against. We work with you to define what data leaves your environment and how it\u2019s handled — for most teams that means a stratified, anonymized sample rather than raw logs.',
  },
  {
    q: 'Why open-weight models for the verifier?',
    a: 'Frontier APIs don\u2019t expose full logprobs, and a verifier without calibrated confidence is just another model guessing. Open-weight models give us the probability distribution we need to measure agreement reliably against a human-labeled holdout.',
  },
  {
    q: 'What do we actually get at the end?',
    a: 'A signed certification report with a quality delta, a cost delta, and the specific failure cases the candidate stack still gets wrong — plus the raw scored transcripts, so your team can verify the verifier.',
  },
  {
    q: 'What if the candidate stack fails certification?',
    a: 'Then you\u2019ve avoided a quiet regression in production. The report tells you exactly where it broke down, which is usually enough to know whether it\u2019s a prompting fix, a routing fix, or the wrong model for that task.',
  },
  {
    q: 'Do you support agents outside customer support?',
    a: 'Customer support is where we\u2019re starting, because the task distributions are well-defined and the cost pressure is immediate. If your agent has a scoreable production task distribution, talk to us.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container">
        <p className="eyebrow">Questions</p>
        <h2>Answers, plainly.</h2>

        <div className="faq__list">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i
            return (
              <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`} key={f.q}>
                <button
                  className="faq__q"
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="faq__icon" aria-hidden="true">{isOpen ? '\u2212' : '+'}</span>
                </button>
                {isOpen && <p className="faq__a">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .faq {
          padding: 110px 0;
          background: var(--ink);
        }
        .faq h2 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          margin: 20px 0 48px;
        }
        .faq__list {
          max-width: 760px;
          border-top: 1px solid var(--ink-line);
        }
        .faq__item {
          border-bottom: 1px solid var(--ink-line);
        }
        .faq__q {
          width: 100%;
          background: none;
          border: none;
          color: var(--paper);
          text-align: left;
          padding: 22px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          font-size: 15.5px;
          font-family: var(--font-body);
        }
        .faq__item--open .faq__q { color: var(--lab-green-bright); }
        .faq__icon {
          font-family: var(--font-mono);
          font-size: 18px;
          flex-shrink: 0;
          color: var(--lab-green-bright);
        }
        .faq__a {
          font-size: 14.5px;
          line-height: 1.7;
          color: var(--paper-dim);
          max-width: 60ch;
          margin: 0 0 26px;
        }
      `}</style>
    </section>
  )
}
