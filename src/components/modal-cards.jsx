import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Shield, Cloud, Settings } from 'lucide-react'

const ICON_MAP = { Shield, Cloud, Settings }

export function ModalCards({
  cards = [],
  className = '',
  gradientColor = '#0A0A0A',
  animationSpeed = 'normal',
  animationVariant = 'scale',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  backdropGradientPosition = '50% 12%',
  ariaLabel = 'Card details modal',
}) {
  const [activeId, setActiveId] = useState(null)
  const active = cards.find((c) => c.id === activeId) || null

  const speedMap = { slow: 0.7, normal: 0.5, fast: 0.32, none: 0 }
  const duration = speedMap[animationSpeed] ?? 0.5

  useEffect(() => {
    if (!closeOnEscape) return
    const onKey = (e) => { if (e.key === 'Escape') setActiveId(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeOnEscape])

  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = 'hidden'
      window.lenis?.stop()
    } else {
      document.body.style.overflow = ''
      window.lenis?.start()
    }
    return () => { document.body.style.overflow = ''; window.lenis?.start() }
  }, [activeId])

  return (
    <>
      <div
        className={className}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: 'clamp(16px, 2vw, 24px)',
        }}
      >
        {cards.map((card, idx) => {
          const Icon = card.icon || ICON_MAP[card.iconName] || Shield
          return (
            <motion.div
              key={card.id}
              layoutId={animationVariant === 'scale' ? `card-${card.id}` : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveId(card.id)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${card.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveId(card.id) }}
              whileHover={{ y: -4 }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E8E8E8',
                borderRadius: '16px',
                padding: 'clamp(28px, 3vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
            >
              <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: idx === 1 ? '#0A0A0A' : idx === 0 ? '#E5E7EB' : '#F0F0F0' }} />
              <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: idx === 0 ? 'radial-gradient(420px circle at 14% 20%, rgba(90,90,108,0.08) 0%, transparent 66%)' : idx === 1 ? 'radial-gradient(420px circle at 86% 18%, rgba(70,70,84,0.09) 0%, transparent 66%)' : 'radial-gradient(420px circle at 50% 8%, rgba(80,80,96,0.07) 0%, transparent 68%)', pointerEvents: 'none' }} />
              <span style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F5F5F5', border: '1px solid #EFEFEF', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <Icon size={22} strokeWidth={1.7} style={{ color: '#0A0A0A' }} />
              </span>
              <h3 style={{ color: '#0A0A0A', fontSize: 'clamp(18px, 1.5vw, 22px)', fontWeight: 600, fontFamily: "'Manrope', sans-serif", letterSpacing: '-0.02em', lineHeight: 1.25, position: 'relative' }}>{card.title}</h3>
              <p style={{ color: '#6B7280', fontSize: '14.5px', lineHeight: 1.65, flex: 1, position: 'relative' }}>{card.description}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0A0A0A', fontSize: '13px', fontWeight: 600, marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #F0F0F0', position: 'relative' }}>
                Learn more <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowRight size={11} style={{ color: '#fff', transform: 'rotate(-45deg)' }} /></span>
              </span>
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: duration * 0.6 }}
              onClick={() => closeOnBackdropClick && setActiveId(null)}
              aria-hidden="true"
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 80,
                background: 'rgba(5,5,5,0.72)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: '-40px',
                  background: `radial-gradient(720px circle at ${backdropGradientPosition}, ${active.gradientColor || gradientColor}18 0%, transparent 68%)`,
                  filter: 'blur(28px)',
                  opacity: 0.9,
                }}
              />
            </motion.div>

            <motion.div
              key="modal"
              layoutId={animationVariant === 'scale' ? `card-${active.id}` : undefined}
              initial={animationVariant === 'fade' ? { opacity: 0 } : animationVariant === 'slide' ? { y: 40, opacity: 0 } : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={animationVariant === 'fade' ? { opacity: 0 } : animationVariant === 'slide' ? { y: 20, opacity: 0 } : { scale: 0.98, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30, duration }}
              role="dialog"
              aria-modal="true"
              aria-label={ariaLabel}
              style={{
                position: 'fixed',
                inset: 'clamp(16px, 3vw, 32px)',
                maxWidth: '960px',
                maxHeight: '86vh',
                margin: 'auto',
                zIndex: 81,
                background: '#0A0A0A',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 24px 80px rgba(0,0,0,0.55)',
              }}
            >
              <div style={{ position: 'relative', height: '220px', flexShrink: 0, overflow: 'hidden', background: '#0E0E0E' }}>
                {active.imageUrl && (
                  <img src={active.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                )}
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 32%, rgba(10,10,10,0.68) 100%), radial-gradient(640px circle at ${backdropGradientPosition}, ${active.gradientColor || gradientColor}22 0%, transparent 70%)` }} />
                {showCloseButton && (
                  <button
                    onClick={() => setActiveId(null)}
                    aria-label="Close"
                    style={{ position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  >
                    <X size={16} />
                  </button>
                )}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px clamp(20px, 3vw, 32px)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {(() => { const I = active.icon || Shield; return <I size={20} style={{ color: '#fff' }} /> })()}
                  </span>
                  <h2 style={{ color: '#fff', fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 600, letterSpacing: '-0.02em', fontFamily: "'Manrope', sans-serif" }}>{active.title}</h2>
                </div>
              </div>

              <div style={{ padding: 'clamp(20px, 3vw, 32px)', overflowY: 'auto', flex: 1, background: '#0A0A0A' }}>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>{active.description}</p>
                {active.details && <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '14.5px', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{active.details}</p>}
                {active.bullets && (
                  <ul style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                    {active.bullets.map((b, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6 }}>
                        <span aria-hidden="true" style={{ width: '5px', height: '5px', borderRadius: '50%', background: active.gradientColor || gradientColor, marginTop: '9px', flexShrink: 0 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href={active.href || '/contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', color: '#0A0A0A', padding: '12px 20px', borderRadius: '999px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                    Explore <ArrowRight size={14} />
                  </a>
                  <button onClick={() => setActiveId(null)} style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.14)', padding: '12px 20px', borderRadius: '999px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Close</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ModalCards
