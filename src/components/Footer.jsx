import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <Logo size={24} />
          <p className="footer__tag">Certified cost reduction for AI agents.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#method">Method</a>
          <a href="#verifier">The Verifier</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer__copy mono-tag">© {new Date().getFullYear()} Proofhouse Labs</p>
      </div>

      <style>{`
        .footer {
          padding: 48px 0;
          border-top: 1px solid var(--ink-line);
          background: var(--ink);
        }
        .footer__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }
        .footer__tag {
          font-size: 13px;
          color: var(--paper-dim);
          margin: 10px 0 0;
        }
        .footer__links {
          display: flex;
          gap: 24px;
          font-size: 13.5px;
          color: var(--paper-dim);
        }
        .footer__links a:hover { color: var(--paper); }
        .footer__copy { color: var(--paper-dim); }
      `}</style>
    </footer>
  )
}
