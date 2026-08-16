import { useParams, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import SEO from '@/components/SEO'
import { GUIDE_CONTENT, renderDiagram } from '@/lib/guide-content.jsx'
import { BLOG_POSTS } from '@/lib/blog-content.jsx'

const containerStyle = {
  maxWidth: '1200px',
  marginInline: 'auto',
  paddingInline: 'clamp(20px, 5vw, 40px)',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

const viewport = { once: true, amount: 0.15, margin: '-40px' }

function slugify(text) {
  return text.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '')
}

function ShareButton({ platform, color }) {
  const loc = useLocation()
  const url = typeof window !== 'undefined' ? window.location.href : 'https://singlecorelabs.in' + loc.pathname
  const text = 'Check out this guide from Single Core Labs'

  const href = platform === 'linkedin'
    ? `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    : `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`

  const path = platform === 'linkedin'
    ? 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.851-3.037-1.853 0-2.135 1.445-2.135 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.225 0z'
    : 'M18.244 2.25h3.308l-7.227 8.26 8.504 11.24h-6.66l-5.214-6.82-5.967 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.713 6.23 5.451-6.23zm-1.16 17.52h1.833L7.13 4.126H5.163l11.92 15.644z'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Share on ${platform}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        color,
        textDecoration: 'none',
        fontFamily: 'var(--font-sans)',
        fontSize: '12px',
        fontWeight: 500,
        padding: '6px 0',
        transition: 'color 0.2s, opacity 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
      </svg>
      {platform === 'linkedin' ? 'LinkedIn' : 'X'}
    </a>
  )
}

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

  const tocItems = sections.filter(s => s.type === 'section' || s.type === 'subheading')

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    author: { '@type': 'Organization', name: 'Single Core Labs' },
    publisher: { '@type': 'Organization', name: 'Single Core Labs' },
    datePublished: '2026-07-28',
    articleSection: meta.category,
    url: typeof window !== 'undefined' ? window.location.href : `https://singlecorelabs.in/guides/${guideSlug}`,
  }

  const otherGuides = Object.values(GUIDE_CONTENT).filter(g => g.meta.title !== meta.title)
  const relatedPosts = BLOG_POSTS.filter(p => p.relatedGuides?.includes(guideSlug))

  return (
    <div className="page-dark">
      <SEO
        title={`${meta.title} | Single Core Labs Guides`}
        description={meta.description}
        schema={articleSchema}
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

        <div style={containerStyle}>
          <div className="guide-layout" style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '60px',
            alignItems: 'start',
            paddingBottom: 'clamp(80px, 10vh, 120px)',
          }}>
          <style>{`
            @media (max-width: 860px) {
              .guide-layout {
                grid-template-columns: 1fr !important;
              }
              .guide-sidebar {
                display: none !important;
              }
            }
          `}</style>
            {/* Left Sidebar */}
            <div className="guide-sidebar" style={{
              position: 'sticky',
              top: '100px',
            }}>
              <div style={{
                borderLeft: '1px solid var(--color-border)',
                paddingLeft: '20px',
              }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '16px',
                }}>
                  Contents
                </p>
                <nav>
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0',
                  }}>
                    {tocItems.map((item, i) => (
                      <li key={i}>
                        <a
                          href={`#${slugify(item.title || '')}`}
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '12px',
                            color: 'rgba(228, 222, 201, 0.45)',
                            textDecoration: 'none',
                            display: 'block',
                            padding: '5px 0',
                            paddingLeft: item.type === 'subheading' ? '14px' : '0',
                            transition: 'color 0.2s',
                            lineHeight: 1.3,
                            borderLeft: item.type === 'subheading' ? 'none' : 'none',
                            position: 'relative',
                          }}
                          onMouseEnter={e => e.target.style.color = 'var(--color-text)'}
                          onMouseLeave={e => e.target.style.color = 'rgba(228, 222, 201, 0.45)'}
                        >
                          {item.type === 'subheading' && (
                            <span style={{
                              display: 'inline-block',
                              width: '3px',
                              height: '3px',
                              borderRadius: '50%',
                              background: 'rgba(184, 164, 120, 0.3)',
                              marginRight: '8px',
                              verticalAlign: 'middle',
                            }} />
                          )}
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div style={{
                  marginTop: '28px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--color-border)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    marginBottom: '12px',
                  }}>
                    Share
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <ShareButton platform="linkedin" color="rgba(228, 222, 201, 0.5)" />
                    <ShareButton platform="x" color="rgba(228, 222, 201, 0.5)" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div style={{ minWidth: 0 }}>
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
                        <h2 id={slugify(section.title)}
                          style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                          fontWeight: 400,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.2,
                          color: 'var(--color-text)',
                          marginBottom: '20px',
                          marginTop: '48px',
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
                        {renderDiagram(section.slug || guideSlug)}
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
                        <h3 id={slugify(section.title)}
                          style={{
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

                        {(otherGuides.length > 0 || relatedPosts.length > 0) && (
                          <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--color-border)' }}>
                            {otherGuides.length > 0 && (
                              <>
                                <p style={{
                                  fontFamily: 'var(--font-display)', fontSize: '10px', fontWeight: 600,
                                  letterSpacing: '0.14em', textTransform: 'uppercase',
                                  color: 'var(--color-accent)', marginBottom: '16px',
                                }}>More guides</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '32px' }}>
                                  {otherGuides.slice(0, 3).map((g) => (
                                    <Link key={g.meta.title} to={`/guides/${g.meta.slug || g.meta.title.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '')}`} style={{
                                      textDecoration: 'none', color: 'inherit', display: 'block',
                                      padding: '16px 0', borderBottom: '1px solid var(--color-border)',
                                      transition: 'opacity 0.2s',
                                    }}
                                      onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                    >
                                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-text)', marginBottom: '4px' }}>{g.meta.title}</div>
                                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--color-text-dim)' }}>{g.meta.category} · {g.meta.readTime}</div>
                                    </Link>
                                  ))}
                                </div>
                              </>
                            )}

                            {relatedPosts.length > 0 && (
                              <>
                                <p style={{
                                  fontFamily: 'var(--font-display)', fontSize: '10px', fontWeight: 600,
                                  letterSpacing: '0.14em', textTransform: 'uppercase',
                                  color: 'var(--color-accent)', marginBottom: '16px',
                                }}>Related blog posts</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                  {relatedPosts.slice(0, 2).map((p) => (
                                    <Link key={p.slug} to={`/blog/${p.slug}`} style={{
                                      textDecoration: 'none', color: 'inherit', display: 'block',
                                      padding: '16px 0', borderBottom: '1px solid var(--color-border)',
                                      transition: 'opacity 0.2s',
                                    }}
                                      onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                    >
                                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--color-text)', marginBottom: '4px' }}>{p.title}</div>
                                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--color-text-dim)' }}>{p.category} · {p.readTime}</div>
                                    </Link>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </motion.div>
                    )

                  default:
                    return null
                }
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
