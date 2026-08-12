import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Method from './components/Method.jsx'
import Verifier from './components/Verifier.jsx'
import ForWhom from './components/ForWhom.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Method />
        <Verifier />
        <ForWhom />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <style>{`
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          padding: 12px 22px;
          border-radius: 4px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }
        .btn--solid {
          background: var(--lab-green);
          color: var(--ink);
        }
        .btn--solid:hover {
          background: var(--lab-green-bright);
        }
        .btn--ghost {
          border-color: var(--ink-line);
          color: var(--paper);
        }
        .btn--ghost:hover {
          border-color: var(--lab-green-bright);
          color: var(--lab-green-bright);
        }
        .btn--text {
          color: var(--paper-dim);
          padding: 12px 0;
        }
        .btn--text:hover { color: var(--paper); }
      `}</style>
    </>
  )
}
