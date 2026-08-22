import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function ProductPage() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <SEO title="Product — Training, RL Lab & Data Foundry | Single Core Labs" description="SingleCore Labs Product: Training, RL Lab and Data Foundry — building learning systems for AI." />
      <Navbar />
      <section data-theme="dark" style={{ position: 'relative', background: '#050505', padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 40px) clamp(72px, 9vw, 110px)', textAlign: 'center', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)', contain: 'paint' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-40px', background: 'var(--gradient-muted)', filter: 'blur(16px)', opacity: 0.28, pointerEvents: 'none', transform: 'translateZ(0)' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>SingleCore Labs • Product</p>
          <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(36px, 5.5vw, 62px)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#fff', marginBottom: '20px' }}>
            Build intelligence<br />
            <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>that learns.</span>
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.62)', maxWidth: '640px', margin: '0 auto 32px' }}>Three pillars, one loop: Data Foundry creates the learning signals, Training turns base models into specialized intelligence, RL Lab turns them into capable agents.</p>
        </div>
      </section>

      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(48px, 8vw, 80px) clamp(20px, 4vw, 40px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {[
            { title: 'Training', desc: 'Adapt open models to your capabilities — SFT, DPO, RL / RFT and custom training workflows. Train. Evaluate. Improve.', href: '/training', cta: 'Explore Training →', accent: '#111111' },
            { title: 'RL Lab', desc: 'Train, post-train, and improve models and agents with environments, rewards, data, and evaluation.', href: '/solutions/rl-lab', cta: 'Explore RL Lab →', accent: '#0A0A0A' },
            { title: 'Data Foundry', desc: 'Create, curate, and evaluate data for machines that learn — from demonstrations to evaluation.', href: '/product/data-foundry', cta: 'Explore Data Foundry →', accent: '#6B7280' },
          ].map((c) => (
            <Link key={c.title} to={c.href} style={{ background: '#FFFFFF', border: '1px solid #E8E8E8', borderRadius: '20px', padding: '32px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden' }}>
              <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: c.accent }} />
              <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#0A0A0A', letterSpacing: '-0.02em' }}>{c.title}</h2>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#6B7280', flex: 1 }}>{c.desc}</p>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#0A0A0A', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>{c.cta}</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
