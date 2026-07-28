import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SEO from '@/components/SEO'
import { BLOG_POSTS } from '@/lib/blog-content.jsx'
import { GUIDE_CONTENT } from '@/lib/guide-content.jsx'

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

export default function BlogPostPage() {
  const { postSlug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === postSlug)

  if (!post) {
    return (
      <div className="page-dark">
        <Navbar />
        <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
          <h1 className="text-display">Post not found</h1>
          <Link to="/blog" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>Browse all posts</Link>
        </main>
        <Footer />
      </div>
    )
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Single Core Labs' },
    datePublished: post.date,
    articleSection: post.category,
  }

  return (
    <div className="page-dark">
      <SEO title={`${post.title} | Single Core Labs Blog`} description={post.excerpt} schema={schema} />
      <Navbar />

      <main style={{ minHeight: '100vh' }}>
        <div style={containerStyle}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <Link to="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: 'var(--color-text-dim)', textDecoration: 'none',
              fontFamily: 'var(--font-sans)', fontSize: '13px',
              paddingTop: 'clamp(100px, 14vh, 140px)', marginBottom: '32px',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--color-text)'}
              onMouseLeave={e => e.target.style.color = 'var(--color-text-dim)'}
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}>{post.category}</span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-dim)' }}>{post.readTime}</span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-dim)' }}>·</span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-dim)' }}>{post.date}</span>
            </div>
            <h1 className="text-display" style={{ marginBottom: '36px' }}>{post.title}</h1>
          </motion.div>
        </div>

        <div style={{ ...containerStyle, paddingBottom: 'clamp(80px, 10vh, 120px)' }}>
          {post.content.map((block, i) => {
            switch (block.type) {
              case 'paragraph':
                return (
                  <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                    <p style={{
                      fontFamily: 'var(--font-sans)', fontSize: 'clamp(15px, 1.1vw, 17px)',
                      lineHeight: 1.8, letterSpacing: '-0.01em',
                      color: 'rgba(228, 222, 201, 0.75)', marginBottom: '20px',
                    }}>{block.text}</p>
                  </motion.div>
                )

              case 'callout':
                return (
                  <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                    <div style={{
                      background: 'rgba(184, 164, 120, 0.06)', border: '1px solid rgba(184, 164, 120, 0.15)',
                      borderRadius: '10px', padding: '20px 24px', marginBottom: '24px',
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 600,
                        color: 'var(--color-accent)', marginBottom: '6px',
                      }}>{block.title}</p>
                      <p style={{
                        fontFamily: 'var(--font-sans)', fontSize: '14px',
                        lineHeight: 1.6, color: 'rgba(228, 222, 201, 0.7)',
                      }}>{block.text}</p>
                    </div>
                  </motion.div>
                )

              case 'guide-link': {
                const guide = GUIDE_CONTENT[block.slug]
                if (!guide) return null
                return (
                  <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
                    <Link to={`/guides/${block.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <div style={{
                        background: 'rgba(184, 164, 120, 0.04)', border: '1px solid var(--color-border)',
                        borderRadius: '10px', padding: '16px 20px', marginBottom: '24px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        transition: 'border-color 0.2s',
                      }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(184, 164, 120, 0.3)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                      >
                        <div>
                          <p style={{
                            fontFamily: 'var(--font-display)', fontSize: '10px', fontWeight: 600,
                            letterSpacing: '0.14em', textTransform: 'uppercase',
                            color: 'var(--color-accent)', marginBottom: '4px',
                          }}>Related Guide</p>
                          <p style={{
                            fontFamily: 'var(--font-sans)', fontSize: '13px',
                            color: 'var(--color-text)', fontWeight: 500,
                          }}>{block.text}</p>
                        </div>
                        <ArrowRight size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      </div>
                    </Link>
                  </motion.div>
                )
              }

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
