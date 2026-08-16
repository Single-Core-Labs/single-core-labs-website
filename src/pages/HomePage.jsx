import { useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Shield, Cloud, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import SEO from '@/components/SEO'
import WordsPullUp from '@/components/WordsPullUp'
import WordsPullUpMultiStyle from '@/components/WordsPullUpMultiStyle'

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const CREAM = '#E1E0CC'
const CREAM_70 = 'rgba(225,224,204,0.7)'

const FEATURE_CARDS = [
  {
    id: 'security',
    title: 'Security',
    icon: Shield,
    description: 'Your data stays under your control with multi-layered protection and industry-certified security standards.',
    href: '/security',
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: Cloud,
    description: 'Secure within your virtual private cloud (VPC), on-premises, or dedicated, Single Core Labs-managed Model Vault.',
    href: '/deployment',
  },
  {
    id: 'customization',
    title: 'Customization',
    icon: Settings,
    description: 'Train on your proprietary data and build unique AI solutions made for your use cases, needs, and infrastructure.',
    href: '/solutions',
  },
]

// ─── SECTION 1: HERO ─────────────────────────────────────────────────────────

function HeroSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
    const resume = () => { if (v.paused) v.play().catch(() => {}) }
    document.addEventListener('visibilitychange', resume)
    return () => document.removeEventListener('visibilitychange', resume)
  }, [])

  const easeCustom = [0.16, 1, 0.3, 1]

  return (
    <section
      style={{
        background: '#000',
        padding: 'clamp(12px, 1.5vw, 24px)',
        height: '100dvh',
        minHeight: '600px',
        fontFamily: "'Almarai', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Inset rounded container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: 'clamp(16px, 2vw, 32px)',
          overflow: 'hidden',
          background: '#050505',
        }}
      >
        {/* Background video */}
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />

        {/* Noise overlay */}
        <div
          className="noise-overlay"
          style={{ zIndex: 1, opacity: 0.7, mixBlendMode: 'overlay' }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 45%, rgba(0,0,0,0.65) 100%)',
            zIndex: 2,
          }}
        />

        <Navbar />

        {/* ── HERO CONTENT (bottom-aligned) ── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            display: 'grid',
            gridTemplateColumns: '8fr 4fr',
            alignItems: 'flex-end',
            padding: 'clamp(20px, 3vw, 48px)',
            paddingBottom: 'clamp(24px, 3.5vw, 52px)',
            gap: 'clamp(16px, 2vw, 32px)',
          }}
          className="home-hero-grid"
        >
          {/* Left: Giant SCL wordmark */}
          <div style={{ overflow: 'hidden', lineHeight: 0 }}>
            <h1
              style={{
                fontSize: 'clamp(18vw, 20vw, 22vw)',
                fontWeight: 500,
                lineHeight: 0.85,
                letterSpacing: '-0.07em',
                color: CREAM,
                fontFamily: "'Almarai', sans-serif",
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <WordsPullUp
                text="SCL"
                showAsterisk
                stagger={0.08}
              />
            </h1>
          </div>

          {/* Right: description + CTA */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(16px, 2vw, 28px)',
              paddingBottom: 'clamp(8px, 1.5vw, 20px)',
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: easeCustom }}
              style={{
                color: CREAM_70,
                fontSize: 'clamp(11px, 1.1vw, 16px)',
                lineHeight: 1.2,
                fontWeight: 300,
                fontFamily: "'Almarai', sans-serif",
              }}
            >
              We design and deploy production AI systems for Indian enterprises —
              sovereign infrastructure, fine-tuned models, and agentic workflows
              that ship securely and scale on your terms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: easeCustom }}
            >
              <Link
                to="/research"
                className="group"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: CREAM,
                  borderRadius: '9999px',
                  padding: 'clamp(6px, 0.7vw, 10px) clamp(6px, 0.7vw, 10px) clamp(6px, 0.7vw, 10px) clamp(16px, 1.8vw, 24px)',
                  textDecoration: 'none',
                  transition: 'gap 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '16px')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '12px')}
              >
                <span
                  style={{
                    color: '#000',
                    fontWeight: 500,
                    fontSize: 'clamp(12px, 1.1vw, 16px)',
                    fontFamily: "'Almarai', sans-serif",
                    whiteSpace: 'nowrap',
                  }}
                >
                  See our research
                </span>
                <span
                  style={{
                    background: '#000',
                    borderRadius: '50%',
                    width: 'clamp(32px, 3vw, 40px)',
                    height: 'clamp(32px, 3vw, 40px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <ArrowRight size={16} color={CREAM} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 2: ABOUT ────────────────────────────────────────────────────────

function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: '#000',
        padding: 'clamp(64px, 8vw, 120px) clamp(20px, 4vw, 60px)',
        fontFamily: "'Almarai', sans-serif",
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          color: 'rgba(225,224,204,0.45)',
          fontSize: 'clamp(10px, 0.85vw, 12px)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 400,
          textAlign: 'center',
          marginBottom: 'clamp(20px, 2.5vw, 32px)',
          fontFamily: "'Almarai', sans-serif",
        }}
      >
        Accelerating embodied AGI
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          color: CREAM,
          fontSize: 'clamp(22px, 3.5vw, 48px)',
          lineHeight: 1.2,
          fontWeight: 300,
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        We design original architectures and ship them into production — from perception to action, across healthcare, infrastructure, and developer tooling.
      </motion.p>
    </section>
  )
}

// ─── SECTION 3: HOW WE WORK ──────────────────────────────────────────────────

const HOW_WE_WORK_STEPS = [
  {
    number: '01',
    layer: 'Layer / 01',
    title: 'Data Capturing',
    image: '/workflow-data-capture.png',
    description:
      "We embed capture and integration tooling into your environment and record the workflows that run your operation — the real tasks, the edge cases and the expertise that lives in your teams. There is no interruption — your operations keep running while we capture.",
  },
  {
    number: '02',
    layer: 'Layer / 02',
    title: 'Model Training',
    image: '/workflow-model-training.png',
    description:
      'We train foundation models on your captured data and tune them to your tasks, your objects and your environment. We are not locked to a single model or lab, so whenever a stronger model appears, your data works with it.',
  },
  {
    number: '03',
    layer: 'Layer / 03',
    title: 'Deployment',
    image: '/workflow-deployment.png',
    description:
      'We deploy the system that fits your task — a copilot, an agent, or an autonomous workflow — from whichever stack does the job best. Our team ships it into your infrastructure, handles security and handover, and stays until it runs reliably in production.',
  },
]

function WorkflowImage({ src, alt, flipped = false }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -18])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [flipped ? 10 : -10, 0, flipped ? -10 : 10])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.94])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [48, 0, -48])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.35, 1, 1, 0.35])

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          y,
          opacity,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <motion.img
          ref={ref}
          src={src}
          alt={alt}
          loading="lazy"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </motion.div>
    </div>
  )
}

function HowWeWorkSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: '#000',
        padding: 'clamp(80px, 10vw, 160px) clamp(20px, 4vw, 60px)',
        fontFamily: "'Almarai', sans-serif",
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: 'clamp(16px, 2vw, 24px)' }}>
        <WordsPullUpMultiStyle
          segments={[
            {
              text: 'How we work',
              style: {
                color: CREAM,
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              },
            },
          ]}
          stagger={0.08}
        />
      </h2>
      <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto clamp(56px, 6vw, 96px)' }}>
        <WordsPullUpMultiStyle
          segments={[
            {
              text: 'We capture the workflows that run your operation and turn them into the data foundation for intelligence — from documentation to autonomous workflows.',
              style: {
                color: CREAM_70,
                fontSize: 'clamp(13px, 1.1vw, 16px)',
                fontWeight: 300,
                lineHeight: 1.6,
              },
            },
          ]}
          stagger={0.03}
        />
      </div>

      <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(48px, 6vw, 96px)' }}>
        {HOW_WE_WORK_STEPS.map((step, i) => {
          const flipped = i % 2 === 1
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(24px, 4vw, 64px)',
                flexDirection: flipped ? 'row-reverse' : 'row',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '1 1 380px', minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(12px, 1.5vw, 20px)', marginBottom: '12px' }}>
                  <span style={{
                    color: 'rgba(225,224,204,0.5)',
                    fontSize: 'clamp(44px, 6vw, 84px)',
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}>
                    {step.number}
                  </span>
                  <span style={{
                    color: 'rgba(90,158,143,0.8)',
                    fontSize: 'clamp(10px, 0.9vw, 12px)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontWeight: 400,
                  }}>
                    {step.layer}
                  </span>
                </div>
                <h3 style={{ marginBottom: '14px' }}>
                  <WordsPullUpMultiStyle
                    segments={[
                      {
                        text: step.title,
                        style: {
                          color: CREAM,
                          fontSize: 'clamp(20px, 2.2vw, 32px)',
                          fontWeight: 600,
                          lineHeight: 1.2,
                        },
                      },
                    ]}
                    stagger={0.06}
                  />
                </h3>
                <p style={{ maxWidth: '460px' }}>
                  <WordsPullUpMultiStyle
                    segments={[
                      {
                        text: step.description,
                        style: {
                          color: '#9CA3AF',
                          fontSize: 'clamp(13px, 1vw, 15px)',
                          fontWeight: 300,
                          lineHeight: 1.7,
                        },
                      },
                    ]}
                    stagger={0.015}
                  />
                </p>
              </div>
              <div style={{ flex: '1 1 380px', minWidth: 0 }}>
                <WorkflowImage src={step.image} alt={`${step.title} — Single Core Labs`} flipped={flipped} />
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

// ─── SECTION 4: THE DATA ADVANTAGE ───────────────────────────────────────────

const WITH_US = [
  'Project scoping',
  'Data capturing',
  'Model training',
  'Deployment and operations',
  'Competition outpaced',
]

const WITHOUT_US = [
  'No data collected',
  'No data collected',
  'Problem realized',
  'Starting from scratch',
  'Outpaced by competition',
]

function DataAdvantageSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: '#000',
        padding: 'clamp(80px, 10vw, 160px) clamp(20px, 4vw, 60px)',
        fontFamily: "'Almarai', sans-serif",
        borderTop: '1px solid rgba(225,224,204,0.06)',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          color: CREAM,
          fontSize: 'clamp(26px, 3.6vw, 48px)',
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          textAlign: 'center',
          maxWidth: '860px',
          margin: '0 auto clamp(56px, 6vw, 96px)',
        }}
      >
        The models will be ready for everyone at the same time.{' '}
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}>The data won't.</span>
      </motion.h2>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
        gap: 'clamp(16px, 2vw, 28px)',
      }}>
        {[
          {
            title: 'With us',
            steps: WITH_US,
            tone: 'green',
          },
          {
            title: 'Without us',
            steps: WITHOUT_US,
            tone: 'dim',
          },
        ].map((col, colIdx) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: colIdx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: col.tone === 'green' ? 'rgba(90,158,143,0.05)' : '#0E0E0D',
              border: col.tone === 'green'
                ? '1px solid rgba(90,158,143,0.3)'
                : '1px solid rgba(225,224,204,0.08)',
              borderRadius: 'clamp(14px, 1.5vw, 20px)',
              padding: 'clamp(24px, 3vw, 40px)',
              opacity: col.tone === 'dim' ? 0.6 : 1,
            }}
          >
            <p style={{
              color: col.tone === 'green' ? 'rgba(90,158,143,0.9)' : 'rgba(225,224,204,0.5)',
              fontSize: 'clamp(10px, 0.85vw, 12px)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              marginBottom: 'clamp(20px, 2.5vw, 32px)',
            }}>
              {col.title}
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {col.steps.map((step, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: colIdx === 0 ? -16 : 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: 'clamp(12px, 1.5vw, 16px) 0',
                    borderBottom: i < col.steps.length - 1 ? '1px solid rgba(225,224,204,0.07)' : 'none',
                  }}
                >
                  <span style={{
                    flexShrink: 0,
                    width: 'clamp(26px, 2vw, 32px)',
                    height: 'clamp(26px, 2vw, 32px)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(11px, 0.9vw, 13px)',
                    fontWeight: 600,
                    background: col.tone === 'green' ? 'rgba(90,158,143,0.15)' : 'rgba(225,224,204,0.06)',
                    border: col.tone === 'green' ? '1px solid rgba(90,158,143,0.5)' : '1px solid rgba(225,224,204,0.15)',
                    color: col.tone === 'green' ? 'rgba(90,158,143,0.9)' : 'rgba(225,224,204,0.45)',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    color: col.tone === 'green' ? CREAM : 'rgba(225,224,204,0.7)',
                    fontSize: 'clamp(14px, 1.2vw, 17px)',
                    fontWeight: col.tone === 'green' ? 500 : 300,
                    textDecoration: col.tone === 'dim' ? 'line-through rgba(225,224,204,0.25)' : 'none',
                  }}>
                    {step}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── SECTION 5: BACKED BY ────────────────────────────────────────────────────

function BackedBySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const companies = ['Cognizant', 'Bank of America', 'Global Logic']
  const supportLogos = [
    {
      src: '/scl-logo-light.png',
      alt: 'Single Core Labs',
      href: '/',
    },
    {
      src: '/anthropic-logo.png',
      alt: 'Anthropic',
      label: 'Claude for Startups',
      href: 'https://claude.com/programs/startups',
    },
    {
      src: '/zai-logo.png',
      alt: 'Z.ai',
      href: 'https://www.z.ai',
    },
  ]

  return (
    <section
      ref={ref}
      style={{
        background: '#000',
        padding: 'clamp(40px, 5vw, 80px) clamp(20px, 4vw, 60px)',
        fontFamily: "'Almarai', sans-serif",
      }}
    >
      <div style={{
        textAlign: 'center',
      }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: 'rgba(225,224,204,0.5)',
            fontSize: 'clamp(10px, 0.85vw, 12px)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 400,
            marginBottom: 'clamp(24px, 3vw, 40px)',
          }}
        >
          Backed by engineers from
        </motion.p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'clamp(24px, 4vw, 56px)',
          flexWrap: 'wrap',
        }}>
          {companies.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                color: CREAM,
                fontSize: 'clamp(18px, 1.8vw, 26px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              {c}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: 'clamp(32px, 4vw, 56px)',
            paddingTop: 'clamp(24px, 3vw, 40px)',
            borderTop: '1px solid rgba(225,224,204,0.08)',
          }}
        >
          <p style={{
            color: 'rgba(225,224,204,0.35)',
            fontSize: 'clamp(9px, 0.7vw, 11px)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 400,
            marginBottom: 'clamp(20px, 2.5vw, 32px)',
          }}>
            Supported by the startup ecosystem
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(32px, 5vw, 72px)',
            flexWrap: 'wrap',
          }}>
            {supportLogos.map((logo, i) => (
              <motion.a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.9 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  opacity: 0.85,
                  transition: 'opacity 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.85)}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  style={{
                    height: 'clamp(28px, 2.6vw, 40px)',
                    width: 'auto',
                    display: 'block',
                  }}
                />
                {logo.label && (
                  <span style={{
                    color: 'rgba(225,224,204,0.5)',
                    fontSize: 'clamp(10px, 0.8vw, 12px)',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    whiteSpace: 'nowrap',
                  }}>
                    {logo.label}
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── SECTION 4: FEATURES ─────────────────────────────────────────────────────

function FeatureCard({ card, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = card.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        background: '#111',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 'clamp(14px, 1.5vw, 20px)',
        padding: 'clamp(28px, 3vw, 44px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(16px, 1.5vw, 24px)',
        height: '100%',
      }}
    >
      <Icon size={32} strokeWidth={1.5} style={{ color: CREAM }} />

      <h3 style={{
        color: CREAM,
        fontSize: 'clamp(18px, 1.6vw, 24px)',
        fontWeight: 600,
        fontFamily: "'Almarai', sans-serif",
        lineHeight: 1.2,
      }}>
        {card.title}
      </h3>

      <p style={{
        color: '#9CA3AF',
        fontSize: 'clamp(13px, 1vw, 15px)',
        fontFamily: "'Almarai', sans-serif",
        fontWeight: 300,
        lineHeight: 1.6,
        flex: 1,
      }}>
        {card.description}
      </p>

      <Link
        to={card.href}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: CREAM,
          textDecoration: 'none',
          fontSize: 'clamp(12px, 1vw, 14px)',
          fontWeight: 500,
          fontFamily: "'Almarai', sans-serif",
          opacity: 0.8,
          transition: 'opacity 0.2s',
          marginTop: 'auto',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
      >
        Learn more
        <ArrowRight size={13} style={{ transform: 'rotate(-45deg)' }} />
      </Link>
    </motion.div>
  )
}

function FeaturesSection() {
  const titleRef = useRef(null)

  return (
    <section
      style={{
        background: '#000',
        position: 'relative',
        padding: 'clamp(80px, 10vw, 160px) clamp(20px, 4vw, 48px)',
        fontFamily: "'Almarai', sans-serif",
      }}
    >
      <div className="bg-noise" style={{ zIndex: 0, opacity: 0.15 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        <div
          ref={titleRef}
          style={{ marginBottom: 'clamp(48px, 5vw, 80px)', textAlign: 'center' }}
        >
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Secure. Adaptable. Sovereign.',
                style: { color: CREAM, display: 'block' },
              },
            ]}
            stagger={0.04}
            defaultStyle={{ color: CREAM, fontFamily: "'Almarai', sans-serif", fontSize: 'clamp(28px, 3.5vw, 52px)', fontWeight: 400, lineHeight: 1.15 }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(16px, 2vw, 24px)',
          }}
        >
          {FEATURE_CARDS.map((card, i) => (
            <FeatureCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <SEO
        title="Single Core Labs — Applied AI Research"
        description="Enterprise AI infrastructure, fine-tuned LLMs, and sovereign deployment for Indian enterprises. From agentic workflows to air-gapped inference."
        keywords="applied AI research, foundation models, AI products, BioFormer, machine learning, enterprise AI"
      />
      <HeroSection />
      <BackedBySection />
      <AboutSection />
      <HowWeWorkSection />
      <DataAdvantageSection />
      <FeaturesSection />
      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .home-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  )
}
