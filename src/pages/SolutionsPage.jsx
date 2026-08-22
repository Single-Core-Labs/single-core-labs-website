import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '@/components/SEO'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { RevealText } from '@/components/RevealText'
import { ArrowRight, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { INDUSTRIES } from '@/lib/industries'
import { supabase } from '@/lib/supabase'

function TreeBranch({ left, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <svg
      ref={ref}
      className="tree-branch"
      style={{
        position: 'absolute',
        top: 0,
        [left ? 'right' : 'left']: '50%',
        width: '50%',
        height: '100%',
        overflow: 'visible',
      }}
      viewBox={left ? '0 0 200 100' : '0 0 200 100'}
      preserveAspectRatio="none"
    >
      <motion.path
        d={left ? 'M 200 0 L 200 50 L 0 50 L 0 100' : 'M 0 0 L 0 50 L 200 50 L 200 100'}
        fill="none"
        stroke="color-mix(in srgb, var(--color-accent) 15%, transparent)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  )
}

function IndustryNode({ industry, index, isLeft }) {
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef, { once: true, margin: '-40px' })

  const branchDelay = 0.3 + index * 0.15
  const nodeDelay = 0.5 + index * 0.15

  return (
    <div
      ref={nodeRef}
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        padding: '24px 0',
      }}
    >
      {/* Branch lines */}
      <TreeBranch left={isLeft} delay={branchDelay} />

      {/* Connector dot */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: 'var(--color-accent)',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: [0, 1.3, 1] } : {}}
        transition={{ duration: 0.5, delay: nodeDelay - 0.15, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Card */}
      <motion.div
        style={{
          width: 'calc(50% - 40px)',
          marginLeft: isLeft ? '0' : '40px',
          marginRight: isLeft ? '40px' : '0',
          padding: '32px',
          borderRadius: '16px',
          border: '1px solid var(--color-border)',
          background: 'var(--color-bg-card)',
          transition: 'all 0.35s ease',
        }}
        className="industry-card"
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: nodeDelay, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'color-mix(in srgb, var(--color-accent) 8%, transparent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-accent)',
            flexShrink: 0,
          }}>
            <industry.icon size={22} strokeWidth={1.5} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.2 }}>
                {industry.label}
              </h3>
              <span className="text-eyebrow" style={{ fontSize: '11px' }}>
                {industry.tagline}
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
              {industry.description}
            </p>
            <Link
              to={industry.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--color-accent)',
                textDecoration: 'none',
                transition: 'gap 0.3s ease',
              }}
              className="industry-cta"
            >
              Explore solutions
              <ArrowRight size={13} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function SolutionsPage() {

  return (
    <div className="page-dark">
      <SEO
        title="AI Solutions by Industry | Single Core Labs"
        description="Single Core Labs delivers embodied AI across Logistics, Manufacturing, Healthcare, Energy, and Defense — from perception to action in the physical world."
        keywords="embodied AI, logistics AI, manufacturing AI, healthcare AI, energy AI, defense AI, sovereign AI"
      />
      <Navbar />

      <main style={{ minHeight: '60vh' }}>

        {/* Overview removed — blank as requested */}
        <section style={{ padding: 'clamp(120px, 18vh, 200px) 20px clamp(80px, 12vh, 140px)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-text-dim)' }}>
            Solutions
          </p>
        </section>

        <style>{`
          @media (max-width: 860px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
            }
            .tree-branch {
              display: none !important;
            }
            .industry-card {
              width: calc(100% - 24px) !important;
              margin: 0 auto !important;
              padding: 24px !important;
            }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>

      </main>
      <Footer />
    </div>
  )
}

// ─── TALK TO SALES FORM ───────────────────────────────────────────────────────

const baseInput = {
  width: '100%',
  padding: '10px 0',
  fontFamily: 'var(--font-sans)',
  fontSize: '14px',
  color: 'var(--color-text)',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--color-border)',
  outline: 'none',
  borderRadius: 0,
  appearance: 'none',
  WebkitAppearance: 'none',
  transition: 'border-color 0.2s',
}

function SalesField({ label, id, type = 'text', required, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <label htmlFor={id} style={{
        fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500,
        color: 'var(--color-text-muted)', letterSpacing: '0.01em',
      }}>
        {label}{required && <span style={{ color: 'var(--color-accent)' }}> *</span>}
      </label>
      <input
        id={id} type={type} required={required}
        placeholder={placeholder} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ ...baseInput, borderBottomColor: focused ? 'var(--color-accent)' : 'var(--color-border)' }}
      />
    </div>
  )
}

function SalesSelect({ label, id, required, value, onChange, children }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <label htmlFor={id} style={{
        fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500,
        color: 'var(--color-text-muted)', letterSpacing: '0.01em',
      }}>
        {label}{required && <span style={{ color: 'var(--color-accent)' }}> *</span>}
      </label>
      <div style={{ position: 'relative' }}>
        <select
          id={id} required={required} value={value} onChange={onChange}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            ...baseInput,
            borderBottomColor: focused ? 'var(--color-accent)' : 'var(--color-border)',
            paddingRight: '24px', cursor: 'pointer',
          }}
        >
          {children}
        </select>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
          style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--color-text-dim)' }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  )
}

function TalkToSalesForm() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', industry: '', message: '', website: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.website) return
    setLoading(true)
    setError(null)
    try {
      const { error: err } = await supabase.from('contact_submissions').insert([{
        first_name: form.name,
        last_name:  '',
        email:      form.email,
        phone:      '',
        company:    form.company,
        role:       form.industry,
        country:    '—',
        message:    form.message,
      }])
      if (err) throw err
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="card card--rounded card--pad" style={{ background: 'var(--color-bg-elevated)' }}>
        <p className="text-eyebrow" style={{ marginBottom: '16px' }}>Message sent</p>
        <h3 className="text-display" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', color: 'var(--color-text)', marginBottom: '14px' }}>
          We'll be in touch{' '}
          <span className="text-italic-serif">shortly.</span>
        </h3>
        <p className="text-body" style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>
          Thanks for reaching out. Someone from our team will review your enquiry
          and get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <div className="card card--rounded card--pad" style={{ background: 'var(--color-bg-elevated)' }}>
      <h3 className="text-display" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', color: 'var(--color-text)', marginBottom: '28px' }}>
        Request a <span className="text-italic-serif">call</span>
      </h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        <input
          type="text"
          value={form.website}
          onChange={set('website')}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
        />
        <SalesField label="Full name" id="sales-name" required placeholder="Jane Doe" value={form.name} onChange={set('name')} />
        <SalesField label="Work email" id="sales-email" type="email" required placeholder="jane@company.com" value={form.email} onChange={set('email')} />
        <SalesField label="Company" id="sales-company" placeholder="Company Ltd." value={form.company} onChange={set('company')} />
        <SalesSelect label="Industry" id="sales-industry" required value={form.industry} onChange={set('industry')}>
          <option value="" disabled>Select your industry</option>
          {INDUSTRIES.map((i) => (
            <option key={i.id} value={i.label}>{i.label}</option>
          ))}
          <option value="Other">Other</option>
        </SalesSelect>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <label htmlFor="sales-message" style={{
            fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500,
            color: 'var(--color-text-muted)', letterSpacing: '0.01em',
          }}>
            Project details
          </label>
          <textarea
            id="sales-message" rows={4} placeholder="What are you trying to build?" value={form.message} onChange={set('message')}
            style={{ ...baseInput, resize: 'vertical', paddingTop: '8px' }}
          />
        </div>
        {error && (
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#E07A5F' }}>{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
          style={{ marginTop: '6px', justifyContent: 'center', cursor: loading ? 'wait' : 'pointer' }}
        >
          {loading ? (
            <>
              <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
              Sending…
            </>
          ) : (
            <>
              Request a call
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
