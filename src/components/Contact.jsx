import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Bring us your traffic. We'll tell you what a cheaper stack would cost you — before it costs you anything.</h2>
          <p className="contact__note">
            We're taking on a limited number of design partners for early certification runs.
            Tell us about your agent and your current stack.
          </p>
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <span className="mono-tag">REQUEST RECEIVED</span>
              <p>We'll get back to you within two business days.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <label>
                <span className="mono-tag">Work email</span>
                <input type="email" required placeholder="you@company.com" />
              </label>
              <label>
                <span className="mono-tag">Company</span>
                <input type="text" required placeholder="Company name" />
              </label>
              <label>
                <span className="mono-tag">Current model stack</span>
                <input type="text" placeholder="e.g. GPT-4.1 for all agent turns" />
              </label>
              <label>
                <span className="mono-tag">Monthly agent volume</span>
                <input type="text" placeholder="e.g. ~40k conversations / month" />
              </label>
              <button type="submit" className="btn btn--solid" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                Send request
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact {
          padding: 120px 0 100px;
          background: var(--ink-raised);
          border-top: 1px solid var(--ink-line);
        }
        .contact__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: start;
        }
        .contact h2 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: clamp(1.7rem, 2.8vw, 2.3rem);
          line-height: 1.28;
          margin: 20px 0 22px;
          max-width: 22ch;
        }
        .contact__note {
          font-size: 15px;
          line-height: 1.7;
          color: var(--paper-dim);
          max-width: 48ch;
        }
        .contact__form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: var(--ink);
          border: 1px solid var(--ink-line);
          border-radius: 8px;
          padding: 30px;
        }
        .contact__form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .contact__form input {
          background: var(--ink-raised);
          border: 1px solid var(--ink-line);
          border-radius: 4px;
          padding: 11px 12px;
          color: var(--paper);
          font-size: 14px;
          font-family: var(--font-body);
        }
        .contact__form input:focus {
          outline: 2px solid var(--lab-green-bright);
          outline-offset: 1px;
        }
        .contact__form input::placeholder { color: var(--paper-dim); opacity: 0.6; }
        .contact__success {
          background: var(--ink);
          border: 1px solid var(--lab-green);
          border-radius: 8px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .contact__success .mono-tag { color: var(--lab-green-bright); letter-spacing: 0.1em; }
        .contact__success p { margin: 0; color: var(--paper-dim); font-size: 14.5px; }
        @media (max-width: 860px) {
          .contact__grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}
