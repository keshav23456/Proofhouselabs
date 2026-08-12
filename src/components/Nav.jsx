import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const LINKS = [
  { href: '#method', label: 'Method' },
  { href: '#verifier', label: 'The Verifier' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" aria-label="Proofhouse Labs home">
          <Logo size={28} />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 22px 0;
          transition: background 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .nav--scrolled {
          background: rgba(18, 21, 26, 0.86);
          backdrop-filter: blur(10px);
          padding: 14px 0;
          border-bottom: 1px solid var(--ink-line);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .nav__links {
          display: flex;
          gap: 32px;
          font-size: 14px;
          color: var(--paper-dim);
        }
        .nav__links a { transition: color 0.2s; }
        .nav__links a:hover { color: var(--paper); }
        .nav__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 6px;
        }
        .nav__burger span {
          width: 20px; height: 1.5px; background: var(--paper);
        }
        .nav__mobile {
          display: none;
        }
        @media (max-width: 860px) {
          .nav__links { display: none; }
          .nav__burger { display: flex; }
          .nav__mobile {
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 24px 20px 28px;
            background: var(--ink-raised);
            border-top: 1px solid var(--ink-line);
            border-bottom: 1px solid var(--ink-line);
          }
          .nav__mobile a { font-size: 15px; }
        }
      `}</style>
    </header>
  )
}
