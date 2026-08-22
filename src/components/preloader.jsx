import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Preloader — local fallback for @reactbits-starter/preloader-tw (Pro)
 * Animated loading screens with multiple style variants.
 * Variants: minimal | words | counter | split
 * Adapted to Single Core Labs tokens ( --color-bg / --color-text / mono )
 *
 * Usage:
 * <Preloader variant="words" words={["Intelligence","Sovereign","Open"]} onDone={()=>setShow(false)} />
 */
export function Preloader({
  variant = 'words',
  words = ['Single', 'Core', 'Labs'],
  duration = 1600,
  onDone,
  theme = 'dark',
}) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (variant === 'counter') {
      let raf = 0
      let start = performance.now()
      const tick = (now) => {
        const p = Math.min(100, ((now - start) / duration) * 100)
        setProgress(p)
        if (p < 100) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(raf)
    }
  }, [variant, duration])

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(() => onDone?.(), 420)
    }, duration)
    return () => clearTimeout(t)
  }, [duration, onDone])

  const bg = theme === 'light' ? '#FFFFFF' : '#050505'
  const fg = theme === 'light' ? '#0A0A0A' : '#FAFAFA'
  const muted = theme === 'light' ? '#9CA3AF' : 'rgba(250,250,250,0.45)'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: bg,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            pointerEvents: 'auto',
          }}
          aria-hidden="true"
        >
          {/* subtle grid */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.04,
              backgroundImage:
                'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {variant === 'words' && (
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
                style={{ display: 'flex', gap: '0.18em', justifyContent: 'center', flexWrap: 'wrap' }}
              >
                {words.map((w, i) => (
                  <motion.span
                    key={w + i}
                    variants={{ hidden: { y: 24, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } } }}
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: 'clamp(28px, 6vw, 56px)',
                      fontWeight: 600,
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      color: i === words.length - 1 ? muted : fg,
                      display: 'inline-block',
                      overflow: 'hidden',
                    }}
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: duration / 1000, ease: EASE }}
                style={{
                  height: 1,
                  background: fg,
                  transformOrigin: 'left',
                  marginTop: 24,
                  opacity: 0.9,
                  width: 'min(320px, 68vw)',
                  marginInline: 'auto',
                }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginTop: 14 }}
              >
                Loading — Open
              </motion.p>
            </div>
          )}

          {variant === 'minimal' && (
            <div style={{ textAlign: 'center', zIndex: 1, width: 'min(380px, 82vw)' }}>
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: 16 }}>
                Single Core Labs
              </motion.p>
              <div style={{ height: 1, background: 'rgba(250,250,250,0.08)', overflow: 'hidden', borderRadius: 999 }}>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: duration / 1000, ease: EASE }} style={{ height: '100%', background: fg, transformOrigin: 'left' }} />
              </div>
            </div>
          )}

          {variant === 'counter' && (
            <div style={{ textAlign: 'center', zIndex: 1 }}>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(48px, 10vw, 84px)', fontWeight: 600, letterSpacing: '-0.05em', lineHeight: 1, color: fg, fontVariantNumeric: 'tabular-nums' }}>
                {Math.round(progress).toString().padStart(2, '0')}
                <span style={{ fontSize: '0.5em', fontWeight: 400, color: muted, marginLeft: 4 }}>%</span>
              </div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: muted, marginTop: 10 }}>Initializing open stack</div>
            </div>
          )}

          {variant === 'split' && (
            <div style={{ display: 'flex', width: '100%', height: '100%', position: 'relative', zIndex: 1 }}>
              {['Open', 'Core', 'Labs'].map((w, i) => (
                <motion.div
                  key={w}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: i < 2 ? '1px solid rgba(250,250,250,0.06)' : 'none' }}
                >
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 600, letterSpacing: '-0.02em', color: fg }}>{w}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
