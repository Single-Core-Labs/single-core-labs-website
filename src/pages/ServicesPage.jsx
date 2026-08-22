import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const GREEN = 'color-mix(in srgb, var(--color-accent) 90%, transparent)'

const SERVICES = [
  {
    id: 'data-curation',
    number: '01',
    title: 'Data Engineering & Curation',
    hook: 'The data foundation your models actually need.',
    bullets: [
      {
        text: 'Multimodal data capture (video, sensor, audio, text) for robotics and AI training',
        id: null,
      },
      {
        text: 'Rights-cleared, consent-first sourcing and annotation pipelines',
        id: 'rights-clearing',
      },
      {
        text: 'Quality, coverage, and bias evaluation before data ever reaches training',
        id: 'data-quality',
      },
    ],
    builtFor: 'robotics startups, AI labs, foundation model teams',
  },
  {
    id: 'sovereign-deployment',
    number: '02',
    title: 'Sovereign Deployment',
    hook: 'Your models, your infrastructure, your control.',
    bullets: [
      { text: 'On-premises and air-gapped deployment', id: null },
      { text: 'BYOC (Bring Your Own Cloud) setup and management', id: null },
      { text: 'SCL-managed, access-controlled "Model Vault" for isolated hosting', id: 'model-vault' },
    ],
    builtFor: 'enterprises with data-residency, compliance, or IP constraints',
  },
  {
    id: 'model-training',
    number: '03',
    title: 'Model Training & Fine-Tuning',
    hook: 'Model-agnostic. Tuned to your task, your data, your environment.',
    bullets: [
      { text: 'LLM and ML model training and fine-tuning', id: null },
      { text: 'Evaluation harnesses built per-vertical, not generic benchmarks', id: null },
      { text: "Not locked to one model or lab — your data works with whatever's strongest today", id: null },
    ],
    builtFor: 'teams that need production-grade, task-specific models',
  },
  {
    id: 'rl-research',
    number: '04',
    title: 'Applied Reinforcement Learning Research',
    hook: 'Research partnerships, not just services.',
    bullets: [
      { text: 'RLHF / RLAIF and reward modeling', id: null },
      { text: 'Policy optimization and sim-to-real for robotics', id: null },
      { text: 'Published, benchmarked research — not black-box consulting', id: null },
    ],
    builtFor: 'AI labs and robotics companies pushing past supervised fine-tuning',
  },
  {
    id: 'kernel-enablement',
    number: '05',
    title: 'Custom Kernel & Chip Enablement',
    hook: 'Making your models run fast on the silicon you actually have.',
    bullets: [
      { text: 'Kernel optimization for edge, GPU, and custom chip targets', id: null },
      { text: 'Benchmarked speedups vs. stock implementations', id: null },
      { text: 'Built for constrained, real-world deployment environments — not just data-center scale', id: null },
    ],
    builtFor: 'robotics companies and chip vendors with hardware-constrained inference',
  },
]

function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ServiceRow({ service, index }) {
  return (
    <RevealSection delay={index * 0.08}>
      <article
        id={service.id}
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 'clamp(20px, 3vw, 48px)',
          paddingBlock: 'clamp(40px, 5vw, 72px)',
          borderTop: '1px solid color-mix(in srgb, var(--color-text) 8%, transparent)',
          scrollMarginTop: '120px',
        }}
      >
        <span style={{
          color: 'color-mix(in srgb, var(--color-text) 35%, transparent)',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          fontFamily: "var(--font-sans)",
        }}>
          {service.number}
        </span>

        <div>
          <h2 style={{
            color: 'var(--color-text)',
            fontSize: 'clamp(24px, 3vw, 40px)',
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            fontFamily: "var(--font-sans)",
            marginBottom: '10px',
          }}>
            {service.title}
          </h2>
          <p style={{
            color: GREEN,
            fontSize: 'clamp(14px, 1.2vw, 18px)',
            fontStyle: 'italic',
            fontFamily: "var(--font-serif)",
            marginBottom: 'clamp(20px, 2.5vw, 32px)',
          }}>
            {service.hook}
          </p>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0, maxWidth: '620px' }}>
            {service.bullets.map((bullet) => (
              <li
                key={bullet.text}
                id={bullet.id || undefined}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '12px',
                  padding: '10px 0',
                  borderBottom: '1px solid color-mix(in srgb, var(--color-text) 6%, transparent)',
                  scrollMarginTop: '120px',
                  color: 'var(--color-text-muted)',
                  fontSize: 'clamp(13px, 1vw, 15px)',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  fontFamily: "var(--font-sans)",
                }}
              >
                <span style={{
                  flexShrink: 0,
                  width: '6px',
                  height: '6px',
                  transform: 'rotate(45deg)',
                  background: 'rgba(90,158,143,0.8)',
                  alignSelf: 'center',
                }} />
                {bullet.text}
              </li>
            ))}
          </ul>

          <p style={{
            marginTop: 'clamp(16px, 2vw, 24px)',
            color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
            fontSize: 'clamp(12px, 0.95vw, 14px)',
            letterSpacing: '0.04em',
            fontFamily: "var(--font-sans)",
          }}>
            <span style={{ textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.16em', color: 'color-mix(in srgb, var(--color-text) 35%, transparent)' }}>
              Built for
            </span>{' '}
            {service.builtFor}
          </p>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: 'clamp(20px, 2.5vw, 28px)',
              color: 'var(--color-text)',
              textDecoration: 'none',
              fontSize: 'clamp(13px, 1vw, 15px)',
              fontWeight: 500,
              fontFamily: "var(--font-sans)",
              borderBottom: '1px solid color-mix(in srgb, var(--color-text) 25%, transparent)',
              paddingBottom: '4px',
              transition: 'border-color 0.2s, gap 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = GREEN; e.currentTarget.style.gap = '12px' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--color-text) 25%, transparent)'; e.currentTarget.style.gap = '8px' }}
          >
            Discuss this service
            <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    </RevealSection>
  )
}

export default function ServicesPage() {
  return (
    <div className="page-dark">
      <SEO
        title="What We Build — Products & Services | Single Core Labs"
        description="Five ways we help AI and robotics companies go from raw data to production models — data engineering, sovereign deployment, model training, applied RL research, and custom kernel enablement."
        keywords="AI services, sovereign deployment, data engineering, fine-tuning, reinforcement learning, kernel optimization"
      />
      <Navbar />
      <main id="main-content">
        <section style={{
          paddingTop: 'clamp(120px, 16vh, 170px)',
          paddingBottom: 'clamp(48px, 6vh, 80px)',
        }}>
          <div className="container-editorial">
            <RevealSection>
              <p className="text-eyebrow" style={{ marginBottom: '16px', color: GREEN }}>
                What We Build
              </p>
            </RevealSection>
            <RevealSection delay={1}>
              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                maxWidth: '900px',
              }}>
                Five ways we help AI and robotics companies go from raw data to{' '}
                <span className="text-italic-serif">production models</span> — without handing your data to someone else's cloud.
              </h1>
            </RevealSection>
            <RevealSection delay={2}>
              <p className="text-body" style={{ maxWidth: '480px', marginTop: 'clamp(24px, 3vw, 40px)' }}>
                Every engagement is offered standalone or as part of an end-to-end pipeline.
                Pick the line that fits your bottleneck today.
              </p>
            </RevealSection>
          </div>
        </section>

        <section style={{ paddingBottom: 'clamp(40px, 5vw, 72px)' }}>
          <div className="container-editorial">
            {SERVICES.map((service, index) => (
              <ServiceRow key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        <section style={{
          padding: 'clamp(48px, 7vh, 96px) 0',
          background: 'var(--color-bg-elevated)',
          borderTop: '1px solid var(--color-border)',
        }}>
          <div className="container-editorial">
            <RevealSection>
              <p className="text-eyebrow" style={{ marginBottom: '16px' }}>Work with us</p>
            </RevealSection>
            <RevealSection delay={1}>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: '20px',
                maxWidth: '700px',
              }}>
                Not sure which line you need?{' '}
                <span className="text-italic-serif">Start with a conversation.</span>
              </h2>
            </RevealSection>
            <RevealSection delay={2}>
              <p className="text-body" style={{ maxWidth: '440px', marginBottom: '28px' }}>
                Tell us about your data, your infrastructure, and your deployment target —
                we'll map it to the shortest path to production.
              </p>
            </RevealSection>
            <RevealSection delay={3}>
              <Link to="/contact" className="btn-primary">
                Talk to the team
                <ArrowRight size={15} />
              </Link>
            </RevealSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}