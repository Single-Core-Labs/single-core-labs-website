import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import SEO from '@/components/SEO'
import { GUIDE_CONTENT, renderDiagram } from '@/lib/guide-content.jsx'

const containerStyle = {
  maxWidth: '800px',
  marginInline: 'auto',
  paddingInline: 'clamp(20px, 5vw, 40px)',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

const viewport = { once: true, amount: 0.15, margin: '-40px' }

export default function GuideDetailPage() {
  const { guideSlug } = useParams()

  const guide = GUIDE_CONTENT[guideSlug]

  if (!guide) {
    return (
      <div className="page-dark">
        <Navbar />
        <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
          <h1 className="text-display">Guide not found</h1>
          <Link to="/guides" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>Browse all guides</Link>
        </main>
        <Footer />
      </div>
    )
  }

  const { meta, sections } = guide

  return (
    <div className="page-dark">
      <SEO
        title={`${meta.title} | Single Core Labs Guides`}
        description={meta.description}
      />
      <Navbar />

      <main style={{ minHeight: '100vh' }}>
        <div style={containerStyle}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <Link to="/guides" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-text-dim)',
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              paddingTop: 'clamp(100px, 14vh, 140px)',
              marginBottom: '32px',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--color-text)'}
              onMouseLeave={e => e.target.style.color = 'var(--color-text-dim)'}
            >
              <ArrowLeft size={14} />
              Back to Guides
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}>
                {meta.category}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-dim)' }}>
                {meta.readTime}
              </span>
            </div>
            <h1 className="text-display" style={{ marginBottom: '24px' }}>
              {meta.title}
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-body" style={{ maxWidth: '640px', color: 'var(--color-text)', marginBottom: '48px', fontSize: 'clamp(16px, 1.2vw, 18px)' }}>
              {meta.description}
            </p>
          </motion.div>
        </div>

        <div style={{
          ...containerStyle,
          paddingBottom: 'clamp(80px, 10vh, 120px)',
        }}>
          {sections.map((section, index) => {
            switch (section.type) {
              case 'intro':
                return (
                  <motion.div key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)',
                      lineHeight: 1.7,
                      color: 'rgba(228, 222, 201, 0.85)',
                      marginBottom: '48px',
                      fontStyle: 'italic',
                    }}>
                      {section.content.map((p, i) => (
                        <p key={i} style={{ marginBottom: '16px' }}>{p}</p>
                      ))}
                    </div>
                    <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '48px' }} />
                  </motion.div>
                )

              case 'section':
                return (
                  <motion.div key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    <h2 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      color: 'var(--color-text)',
                      marginBottom: '20px',
                      marginTop: index > 0 ? '48px' : '0',
                    }}>
                      {section.title}
                    </h2>
                    {section.content.map((p, i) => (
                      <p key={i} style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(15px, 1.1vw, 17px)',
                        lineHeight: 1.8,
                        letterSpacing: '-0.01em',
                        color: 'rgba(228, 222, 201, 0.75)',
                        marginBottom: '20px',
                      }}>
                        {p}
                      </p>
                    ))}
                  </motion.div>
                )

              case 'diagram':
                return (
                  <motion.div key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    {renderDiagram(section.slug || realSlug)}
                  </motion.div>
                )

              case 'callout':
                return (
                  <motion.div key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    <div style={{
                      background: 'rgba(184, 164, 120, 0.06)',
                      border: '1px solid rgba(184, 164, 120, 0.15)',
                      borderRadius: '10px',
                      padding: '20px 24px',
                      marginBottom: '24px',
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                    }}>
                      {section.icon && <section.icon size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />}
                      <div>
                        {section.title && (
                          <p style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'var(--color-accent)',
                            marginBottom: '6px',
                          }}>
                            {section.title}
                          </p>
                        )}
                        <p style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '14px',
                          lineHeight: 1.6,
                          color: 'rgba(228, 222, 201, 0.7)',
                        }}>
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )

              case 'subheading':
                return (
                  <motion.div key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      color: 'var(--color-text)',
                      marginBottom: '12px',
                      marginTop: '32px',
                    }}>
                      {section.title}
                    </h3>
                    {section.content.map((p, i) => (
                      <p key={i} style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(15px, 1.1vw, 17px)',
                        lineHeight: 1.8,
                        letterSpacing: '-0.01em',
                        color: 'rgba(228, 222, 201, 0.75)',
                        marginBottom: '20px',
                      }}>
                        {p}
                      </p>
                    ))}
                  </motion.div>
                )

              case 'table':
                return (
                  <motion.div key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    style={{ overflowX: 'auto', margin: '32px 0' }}
                  >
                    <table style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                    }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                          {section.headers.map((h, i) => (
                            <th key={i} style={{
                              textAlign: 'left',
                              padding: '12px 16px',
                              color: 'var(--color-accent)',
                              fontWeight: 600,
                              fontSize: '12px',
                              letterSpacing: '0.06em',
                              textTransform: 'uppercase',
                              whiteSpace: 'nowrap',
                            }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, i) => (
                          <tr key={i} style={{
                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                          }}>
                            {row.map((cell, j) => (
                              <td key={j} style={{
                                padding: '14px 16px',
                                color: j === 0 ? 'var(--color-text)' : 'rgba(228, 222, 201, 0.7)',
                                fontWeight: j === 0 ? 500 : 400,
                                verticalAlign: 'top',
                              }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                )

              case 'outro':
                return (
                  <motion.div key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    <div style={{
                      marginTop: '48px',
                      padding: '24px',
                      borderLeft: '2px solid var(--color-accent)',
                      background: 'rgba(184, 164, 120, 0.04)',
                      borderRadius: '0 10px 10px 0',
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
                        lineHeight: 1.7,
                        color: 'rgba(228, 222, 201, 0.85)',
                        fontStyle: 'italic',
                      }}>
                        {section.content}
                      </p>
                    </div>
                  </motion.div>
                )

              default:
                return null
            }
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}
