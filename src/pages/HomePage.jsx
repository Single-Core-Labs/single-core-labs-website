import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import SEO from '@/components/SEO'
import { ScaleWordsMarquee } from '@/components/Marquee'

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1]
const FONT = "'Manrope', ui-sans-serif, system-ui, sans-serif"

const DOMAIN_WORDS = [
  'Data',
  'Training',
  'Sovereignty',
  'Infrastructure',
  'Healthcare',
  'Finance',
  'Robotics',
  'Evaluation',
  'Deployment',
  'Agents',
]

const PLATFORM_PILLARS = [
  {
    id: 'data-foundry',
    label: 'Data Foundry',
    title: 'Create the learning signals.',
    description: 'Curate, label, and evaluate datasets for machines that learn — from demonstrations to production eval sets.',
    href: '/product/data-foundry',
    cta: 'Explore Data Foundry',
  },
  {
    id: 'training',
    label: 'Training',
    title: 'Turn base models into intelligence.',
    description: 'SFT, DPO, RL/RFT and custom training workflows on sovereign infrastructure. Train. Evaluate. Improve.',
    href: '/training',
    cta: 'Explore Training',
  },
  {
    id: 'rl-lab',
    label: 'RL Lab',
    title: 'Build agents that work.',
    description: 'Environments, rewards, data, and evaluation — post-train models into capable agents ready for production.',
    href: '/solutions/rl-lab',
    cta: 'Explore RL Lab',
  },
]

const ENGINEER_COMPANIES = ['Cognizant', 'Bank of America', 'Global Logic']

const STARTUP_PROGRAMS = [
  { src: '/anthropic-logo.png', alt: 'Anthropic', label: 'Claude for Startups', href: 'https://claude.com/programs/startups' },
  { src: '/zai-logo.png', alt: 'Z.ai', href: 'https://www.z.ai' },
]

const TRUST_PILLARS = [
  {
    title: 'Full-stack AI infrastructure',
    body: 'From Data Foundry to Training to RL Lab — one platform loop, not disconnected vendors. Your data, models, and deployment stay under your control.',
    href: '/product',
    cta: 'Explore the platform',
  },
  {
    title: 'Sovereign by design',
    body: 'VPC, on-premises, or dedicated Model Vault. Built for Indian enterprises that cannot send proprietary data to the public cloud.',
    href: '/deployment',
    cta: 'View deployment',
  },
  {
    title: 'Data is the moat',
    body: 'Models are shared. Your data infrastructure is not. We help you build the proprietary datasets that compound into durable advantage.',
    href: '/product/data-foundry',
    cta: 'Explore Data Foundry',
  },
]

// ─── SHARED ───────────────────────────────────────────────────────────────────

function ScaleLabel({ children, theme = 'dark' }) {
  return (
    <p style={{
      fontFamily: FONT,
      fontSize: '13px',
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: theme === 'light' ? '#6B7280' : 'rgba(255,255,255,0.5)',
      marginBottom: '20px',
    }}>
      {children}
    </p>
  )
}

function ScaleHeading({ children, theme = 'dark', size = 'lg' }) {
  const sizes = {
    xl: 'clamp(36px, 5vw, 72px)',
    lg: 'clamp(28px, 3.8vw, 52px)',
    md: 'clamp(22px, 2.8vw, 36px)',
  }
  return (
    <h2 style={{
      fontFamily: FONT,
      fontSize: sizes[size],
      fontWeight: 400,
      letterSpacing: '-0.04em',
      lineHeight: 1.05,
      color: theme === 'light' ? '#0A0A0A' : '#FFFFFF',
      margin: 0,
    }}>
      {children}
    </h2>
  )
}

function ScaleLink({ to, children, theme = 'dark' }) {
  return (
    <Link
      to={to}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: FONT,
        fontSize: '14px',
        fontWeight: 600,
        color: theme === 'light' ? '#0A0A0A' : '#FFFFFF',
        textDecoration: 'none',
        borderBottom: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.25)'}`,
        paddingBottom: '2px',
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7' }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
    >
      {children}
      <ArrowRight size={14} />
    </Link>
  )
}

function BookDemoButton({ theme = 'dark', large = false }) {
  const isLight = theme === 'light'
  return (
    <Link
      to="/contact"
      className={isLight ? 'btn-primary' : undefined}
      style={isLight ? undefined : {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        color: '#0A0A0A',
        fontFamily: FONT,
        fontSize: large ? '15px' : '14px',
        fontWeight: 600,
        padding: large ? '14px 28px' : '10px 22px',
        borderRadius: '8px',
        textDecoration: 'none',
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={(e) => { if (!isLight) e.currentTarget.style.opacity = '0.88' }}
      onMouseLeave={(e) => { if (!isLight) e.currentTarget.style.opacity = '1' }}
    >
      Book a demo
    </Link>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const videoRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    const wrap = wrapRef.current
    if (!v || !wrap) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause()
      v.removeAttribute('autoplay')
      return
    }
    v.muted = true
    v.defaultMuted = true
    v.playsInline = true

    let visible = true
    const tryPlay = () => {
      if (!visible || document.hidden) return
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }

    // Pause video when off-screen to save GPU/decoder
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible) tryPlay(); else v.pause()
    }, { threshold: 0.1 })
    io.observe(wrap)

    // Only attempt play once when enough data, not on every loadeddata
    const onCanPlay = () => tryPlay()
    v.addEventListener('canplay', onCanPlay, { once: true })

    const resume = () => {
      if (document.visibilityState === 'visible' && visible && v.paused) tryPlay()
    }
    document.addEventListener('visibilitychange', resume)

    // kick once
    tryPlay()

    return () => {
      io.disconnect()
      v.removeEventListener('canplay', onCanPlay)
      document.removeEventListener('visibilitychange', resume)
    }
  }, [])

  return (
    <section
      className="home-hero"
      style={{
        background: '#000',
        padding: 'clamp(12px, 1.5vw, 24px)',
        height: '100dvh',
        minHeight: '600px',
        fontFamily: FONT,
      }}
    >
      <div
        ref={wrapRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: 'clamp(16px, 2vw, 32px)',
          overflow: 'hidden',
          background: '#050505',
          isolation: 'isolate',
          contain: 'layout paint',
        }}
      >
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_084718_72a17915-4964-4059-afcd-22d59399b72e.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            transform: 'translateZ(0)',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            pointerEvents: 'none',
          }}
        />
        <div
          className="noise-overlay"
          style={{ zIndex: 1, opacity: 0.18, mixBlendMode: 'overlay', pointerEvents: 'none', willChange: 'auto', transform: 'translateZ(0)' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.7) 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Navbar overlay />

          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 'clamp(24px, 4vw, 48px) clamp(24px, 4vw, 48px) clamp(48px, 6vh, 80px)',
              maxWidth: '960px',
              margin: '0 auto',
              width: '100%',
            }}
          >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{
              fontFamily: FONT,
              fontSize: 'clamp(36px, 5.5vw, 72px)',
              fontWeight: 400,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#FFFFFF',
              marginBottom: 'clamp(24px, 3vw, 40px)',
            }}
          >
            India's critical AI decisions need reliable infrastructure.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            style={{
              fontFamily: FONT,
              fontSize: 'clamp(16px, 1.6vw, 20px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.5,
              maxWidth: '640px',
              marginBottom: '12px',
            }}
          >
            Sovereign AI infrastructure has no shortcuts.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            style={{
              fontFamily: FONT,
              fontSize: 'clamp(14px, 1.2vw, 17px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.65,
              maxWidth: '580px',
              marginBottom: 'clamp(32px, 4vw, 48px)',
            }}
          >
            Single Core Labs works across the AI stack — from the data that trains your models, to the systems that put them into production. Humans stay in the loop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <BookDemoButton large />
            <Link
              to="/product"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.25)',
                fontFamily: FONT,
                fontSize: '15px',
                fontWeight: 500,
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
            >
              Explore the platform
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', paddingBottom: '32px', color: 'rgba(255,255,255,0.4)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Scroll to explore
          <ChevronDown size={18} style={{ animation: 'home-bounce 2s ease infinite' }} />
        </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── PLATFORM SECTION (Scale "Applications") ───────────────────────────────────

function PlatformSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="home-section-below-fold"
      data-theme="light"
      style={{ background: '#FFFFFF', padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 48px)' }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ maxWidth: '680px', marginBottom: 'clamp(48px, 6vw, 80px)' }}
        >
          <ScaleLabel theme="light">Platform</ScaleLabel>
          <ScaleHeading theme="light" size="lg">AI systems that actually work.</ScaleHeading>
          <p style={{
            fontFamily: FONT,
            fontSize: 'clamp(15px, 1.2vw, 18px)',
            lineHeight: 1.65,
            color: '#6B7280',
            marginTop: '24px',
            maxWidth: '540px',
          }}>
            Most AI deployments in enterprise fail. We find the right use case, build the data and training stack, and own the outcome — on infrastructure you control.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: '20px',
        }}>
          {PLATFORM_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: EASE }}
            >
              <PillarCard pillar={pillar} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarCard({ pillar, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={pillar.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        background: '#FFFFFF',
        border: `1px solid ${hovered ? '#D1D5DB' : '#E8E8E8'}`,
        borderRadius: '16px',
        padding: 'clamp(28px, 3vw, 36px)',
        textDecoration: 'none',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.08)' : '0 2px 12px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px) translateZ(0)' : 'translateZ(0)',
        willChange: 'transform',
        transition: 'transform 0.28s cubic-bezier(0.16,1,0.3,1), border-color 0.28s ease',
      }}
    >
      <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: index === 0 ? '#5A9E8F' : index === 1 ? '#0A0A0A' : '#9CA3AF' }} />
      <span style={{
        fontFamily: FONT,
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#9CA3AF',
      }}>
        {pillar.label}
      </span>
      <h3 style={{
        fontFamily: FONT,
        fontSize: 'clamp(20px, 1.8vw, 26px)',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        color: '#0A0A0A',
        lineHeight: 1.2,
        margin: 0,
      }}>
        {pillar.title}
      </h3>
      <p style={{
        fontFamily: FONT,
        fontSize: '14px',
        lineHeight: 1.65,
        color: '#6B7280',
        flex: 1,
        margin: 0,
      }}>
        {pillar.description}
      </p>
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: FONT,
        fontSize: '14px',
        fontWeight: 600,
        color: '#0A0A0A',
        marginTop: 'auto',
        paddingTop: '16px',
        borderTop: '1px solid #F0F0F0',
      }}>
        {pillar.cta}
        <span style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: '#0A0A0A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <ArrowRight size={12} color="#fff" style={{ transform: 'rotate(-45deg)' }} />
        </span>
      </span>
    </Link>
  )
}

// ─── DATA SECTION (Scale "Data") ───────────────────────────────────────────────

function DataSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="home-section-below-fold"
      style={{
        background: '#050505',
        padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 48px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: 'clamp(40px, 5vw, 80px)',
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <ScaleLabel>Data</ScaleLabel>
            <ScaleHeading size="lg">The data powering your models.</ScaleHeading>
            <p style={{
              fontFamily: FONT,
              fontSize: 'clamp(15px, 1.2vw, 18px)',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.55)',
              marginTop: '24px',
              marginBottom: '32px',
              maxWidth: '480px',
            }}>
              Production models run on proprietary data. We source, curate, and evaluate datasets with precision — and deliver at the bar enterprise AI demands.
            </p>
            <ScaleLink to="/product/data-foundry">Explore Data Foundry</ScaleLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            style={{
              background: '#0E0E0E',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: 'clamp(32px, 4vw, 48px)',
            }}
          >
            <p style={{
              fontFamily: FONT,
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '16px',
            }}>
              Data → Train → Deploy
            </p>
            <p style={{
              fontFamily: FONT,
              fontSize: '14px',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.5)',
              margin: 0,
            }}>
              Three pillars, one loop. Data Foundry creates the learning signals, Training turns base models into specialized intelligence, RL Lab turns them into capable agents.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '28px' }}>
              {['Data Foundry', 'Training', 'RL Lab', 'Model Vault'].map((tag) => (
                <span key={tag} style={{
                  fontFamily: FONT,
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '6px 12px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          style={{
            fontFamily: FONT,
            fontSize: 'clamp(14px, 1.1vw, 16px)',
            color: 'rgba(255,255,255,0.4)',
            textAlign: 'center',
            marginTop: 'clamp(56px, 6vw, 80px)',
            letterSpacing: '-0.01em',
          }}
        >
          Built for enterprises that cannot send proprietary data to the public cloud.
        </motion.p>
      </div>
    </section>
  )
}

// ─── OPEN TEASER ( → /open ) ──────────────────────────────────────────────────
function OpenTeaser() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section
      ref={ref}
      className="home-section-below-fold"
      data-theme="light"
      style={{ background: '#FFFFFF', padding: 'clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px)', borderTop: '1px solid #E8E8E8' }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: EASE }} style={{ maxWidth: 720, marginBottom: 28 }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 12 }}>Open</p>
          <h2 style={{ fontFamily: FONT, fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#0A0A0A' }}>
            Open models <span style={{ color: '#9CA3AF' }}>you control.</span>
          </h2>
          <p style={{ fontFamily: FONT, fontSize: 14, lineHeight: 1.65, color: '#6B7280', marginTop: 12, maxWidth: 560 }}>
            Model weights, science, and software — open. A full AI stack from open models to the AI factory to outcomes. Own your intelligence, shape the future.
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 20 }}>
          {[
            { n: '01', t: 'Model Weights', d: 'Permissive open weights, reproducible.' },
            { n: '02', t: 'Science', d: 'Papers + technical reports published.' },
            { n: '03', t: 'Software', d: 'RL tools, envs, recipes — open source.' },
          ].map((c, i) => (
            <motion.div key={c.n} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease: EASE }} style={{ background: '#FFFFFF', border: '1px solid #E8E8E8', borderRadius: 16, padding: '18px 18px 16px', transform: 'translateZ(0)' }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#9CA3AF', marginBottom: 6 }}>{c.n}</div>
              <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, color: '#0A0A0A', marginBottom: 4 }}>{c.t}</div>
              <div style={{ fontFamily: FONT, fontSize: 12, color: '#6B7280', lineHeight: 1.5 }}>{c.d}</div>
            </motion.div>
          ))}
        </div>
        <Link to="/open" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: FONT, fontSize: 14, fontWeight: 600, color: '#0A0A0A', textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', paddingBottom: 2 }}>
          Explore our open stack <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}

// ─── DOMAIN MARQUEE ────────────────────────────────────────────────────────────

function DomainMarqueeSection() {
  return (
    <section className="home-section-below-fold" style={{ background: '#050505', padding: 'clamp(40px, 5vw, 64px) 0', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <ScaleWordsMarquee words={DOMAIN_WORDS} theme="dark" />
    </section>
  )
}

// ─── TRUST PILLARS (Scale "Proven") ────────────────────────────────────────────

function TrustSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="home-section-below-fold"
      data-theme="light"
      style={{ background: '#FFFFFF', padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 48px)' }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ marginBottom: 'clamp(48px, 5vw, 72px)' }}
        >
          <ScaleLabel theme="light">Why Single Core Labs</ScaleLabel>
          <ScaleHeading theme="light" size="lg">We set the benchmark for sovereign AI.</ScaleHeading>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: '20px',
        }}>
          {TRUST_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
            >
              <TrustCard pillar={pillar} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustCard({ pillar }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#F9FAFB',
        border: `1px solid ${hovered ? '#D1D5DB' : '#E8E8E8'}`,
        borderRadius: '16px',
        padding: 'clamp(28px, 3vw, 36px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transform: 'translateZ(0)',
        transition: 'border-color 0.28s ease',
      }}
    >
      <h3 style={{
        fontFamily: FONT,
        fontSize: 'clamp(18px, 1.5vw, 22px)',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        color: '#0A0A0A',
        lineHeight: 1.3,
        marginBottom: '14px',
      }}>
        {pillar.title}
      </h3>
      <p style={{
        fontFamily: FONT,
        fontSize: '14px',
        lineHeight: 1.65,
        color: '#6B7280',
        flex: 1,
        margin: '0 0 24px',
      }}>
        {pillar.body}
      </p>
      <ScaleLink to={pillar.href} theme="light">{pillar.cta}</ScaleLink>
    </div>
  )
}

// ─── LOGO MARQUEE ──────────────────────────────────────────────────────────────

function BackedBySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        background: '#050505',
        padding: 'clamp(56px, 7vw, 96px) clamp(20px, 4vw, 48px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        fontFamily: FONT,
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            fontSize: 'clamp(11px, 0.9vw, 13px)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: 'clamp(32px, 4vw, 48px)',
          }}
        >
          Backed by engineers and startup programs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(24px, 4vw, 56px)',
            flexWrap: 'wrap',
            marginBottom: 'clamp(40px, 5vw, 64px)',
          }}
        >
          {ENGINEER_COMPANIES.map((name) => (
            <span
              key={name}
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(17px, 1.7vw, 24px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          style={{
            paddingTop: 'clamp(32px, 4vw, 48px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 'clamp(24px, 3vw, 32px)',
          }}>
            Startup programs
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(40px, 6vw, 80px)',
            flexWrap: 'wrap',
          }}>
            {STARTUP_PROGRAMS.map((program) => (
              <a
                key={program.alt}
                href={program.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  opacity: 0.85,
                  transition: 'opacity 0.25s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = 1 }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.85 }}
              >
                <img
                  src={program.src}
                  alt={program.alt}
                  loading="lazy"
                  style={{ height: 'clamp(28px, 2.6vw, 40px)', width: 'auto', display: 'block' }}
                />
                {program.label && (
                  <span style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 'clamp(10px, 0.8vw, 12px)',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    whiteSpace: 'nowrap',
                  }}>
                    {program.label}
                  </span>
                )}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── FINAL CTA (Scale "Our legacy, your success") ──────────────────────────────

function FinalCTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      data-theme="light"
      style={{
        background: '#FFFFFF',
        padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 48px)',
        borderTop: '1px solid #E8E8E8',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE }}
        style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}
      >
        <ScaleHeading theme="light" size="lg">Our stack, your success.</ScaleHeading>
        <p style={{
          fontFamily: FONT,
          fontSize: 'clamp(15px, 1.2vw, 18px)',
          lineHeight: 1.65,
          color: '#6B7280',
          margin: '24px auto clamp(32px, 4vw, 48px)',
          maxWidth: '520px',
        }}>
          Book a demo today and see how Single Core Labs builds reliable AI infrastructure for your organization.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <BookDemoButton theme="light" large />
          <Link
            to="/product"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              color: '#0A0A0A',
              border: '1px solid #E8E8E8',
              fontFamily: FONT,
              fontSize: '15px',
              fontWeight: 500,
              padding: '14px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Explore the platform
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="home-page" style={{ background: '#050505', minHeight: '100vh' }}>
      <SEO
        title="Single Core Labs — AI Infrastructure & Data Platform"
        description="Sovereign AI infrastructure and data platform for Indian enterprises. Data Foundry, training pipelines, RL Lab, and production deployment on your terms."
        keywords="AI infrastructure, data platform, Data Foundry, model training, sovereign AI, enterprise ML, Indian enterprises"
      />
      <HeroSection />
      <PlatformSection />
      <DataSection />
      <OpenTeaser />
      <DomainMarqueeSection />
      <TrustSection />
      <BackedBySection />
      <FinalCTASection />
      <Footer />
      <style>{`
        @keyframes home-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .home-page .home-section-below-fold {
          content-visibility: auto;
          contain-intrinsic-size: auto 600px;
          contain: layout paint;
        }
        .home-hero video, .home-page .home-section-below-fold {
          backface-visibility: hidden;
        }
        @media (prefers-reduced-motion: reduce) {
          .home-hero .noise-overlay { display: none; }
          .home-hero [style*="animation: home-bounce"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
