import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
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
        stroke="rgba(184, 164, 120, 0.15)"
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
            background: 'rgba(184, 164, 120, 0.08)',
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
  const treeRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: treeRef,
    offset: ['start 55%', 'end 30%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="page-dark">
      <SEO
        title="AI Solutions by Industry | Single Core Labs"
        description="Single Core Labs delivers embodied AI across Logistics, Manufacturing, Healthcare, Energy, and Defense — from perception to action in the physical world."
        keywords="embodied AI, logistics AI, manufacturing AI, healthcare AI, energy AI, defense AI, sovereign AI"
      />
      <Navbar />

      <main style={{ minHeight: '100vh' }}>

        {/* ──────── Hero ──────── */}
        <section
          style={{
            position: 'relative',
            paddingTop: 'clamp(140px, 20vh, 220px)',
            paddingBottom: 'clamp(60px, 10vh, 100px)',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(184, 164, 120, 0.08), transparent 70%), var(--color-bg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div className="container-editorial" style={{ position: 'relative', zIndex: 1 }}>
            <RevealText>
              <p className="text-eyebrow" style={{ marginBottom: '24px' }}>Accelerating embodied AGI</p>
            </RevealText>
            <RevealText delay={0.15}>
              <h1 className="solutions-hero__title" style={{ marginBottom: '28px', maxWidth: '1000px', marginInline: 'auto' }}>
                Purpose-built AI for <br />
                <em>every industry.</em>
              </h1>
            </RevealText>
            <RevealText delay={0.3}>
              <p className="text-body" style={{ maxWidth: '640px', marginInline: 'auto', fontSize: 'clamp(16px, 1.2vw, 20px)', color: 'var(--color-text)', marginBottom: '40px' }}>
                From logistics to defense, we train embodied systems that respect your data,
                understand your physical world, and deploy on your terms.
              </p>
            </RevealText>
          </div>
        </section>

        {/* ──────── Industry Tree ──────── */}
        <section ref={treeRef} style={{ position: 'relative', paddingBottom: '100px' }}>
          <div className="container-editorial" style={{ position: 'relative' }}>

            {/* Root node */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: 'center',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 32px',
                borderRadius: '100px',
                border: '1px solid var(--color-accent)',
                background: 'rgba(184, 164, 120, 0.06)',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)' }} />
                <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-text)', letterSpacing: '0.02em' }}>
                  Single Core Labs
                </span>
              </div>
            </motion.div>

            {/* Spine (vertical trunk) */}
            <div style={{ position: 'relative', minHeight: '800px' }}>
              <motion.div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  width: '1px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, transparent, rgba(225,224,204,0.2) 8%, rgba(225,224,204,0.2) 92%, transparent)',
                  transform: 'translateX(-50%)',
                  scaleY,
                  originY: 0,
                }}
              />

              {/* Branch nodes alternating left/right */}
              <div style={{ position: 'relative' }}>
                {INDUSTRIES.map((industry, i) => (
                  <IndustryNode
                    key={industry.id}
                    industry={industry}
                    index={i}
                    isLeft={i % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </div>

          <style>{`
            .industry-card:hover {
              border-color: var(--color-accent) !important;
              background: var(--color-bg-elevated) !important;
            }
            .industry-card:hover .industry-cta {
              gap: 10px !important;
            }
          `}</style>
        </section>

        {/* ──────── Related Guides ──────── */}
        <section className="container-editorial" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-eyebrow" style={{ marginBottom: '24px' }}>Read the guides</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'Deploying Sovereign AI', href: '/guides/sovereign-ai-infrastructure' },
              ].map((g) => (
                <Link key={g.href} to={g.href} style={{
                  fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500,
                  color: 'rgba(228, 222, 201, 0.6)', textDecoration: 'none',
                  padding: '8px 16px', border: '1px solid var(--color-border)',
                  borderRadius: '100px', transition: 'color 0.2s, border-color 0.2s',
                }}
                  onMouseEnter={e => { e.target.style.color = 'var(--color-text)'; e.target.style.borderColor = 'rgba(184, 164, 120, 0.3)' }}
                  onMouseLeave={e => { e.target.style.color = 'rgba(228, 222, 201, 0.6)'; e.target.style.borderColor = 'var(--color-border)' }}
                >
                  {g.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ──────── Talk to sales ──────── */}
        <section className="container-editorial" style={{ marginBottom: '120px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 6vw, 96px)',
              alignItems: 'center',
            }}
            className="contact-grid"
          >
            <div>
              <p className="text-eyebrow" style={{ marginBottom: '20px' }}>Talk to sales</p>
              <h2 className="text-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: 'var(--color-text)', marginBottom: '16px' }}>
                Not sure where to start?
              </h2>
              <p className="text-body" style={{ color: 'var(--color-text-muted)', maxWidth: '460px', marginBottom: '40px', fontSize: '15px' }}>
                Tell us about your industry and goals. We'll map out the right embodied AI
                architecture for your infrastructure, data, and compliance requirements.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {INDUSTRIES.map((industry, i) => (
                  <Link
                    key={industry.id}
                    to={industry.href}
                    style={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'baseline',
                      padding: '18px 0',
                      textDecoration: 'none',
                      borderBottom: '1px solid var(--color-border)',
                      transition: 'background 0.25s',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      letterSpacing: '0.06em',
                      flexShrink: 0,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span style={{
                        display: 'block',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: 'var(--color-text)',
                        marginBottom: '4px',
                      }}>
                        {industry.label}
                      </span>
                      <span style={{
                        display: 'block',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        color: 'var(--color-text-muted)',
                      }}>
                        {industry.tagline}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      style={{ marginLeft: 'auto', alignSelf: 'center', color: 'rgba(228, 222, 201, 0.4)', flexShrink: 0 }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <TalkToSalesForm />
          </motion.div>
        </section>

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
    name: '', email: '', company: '', industry: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
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
