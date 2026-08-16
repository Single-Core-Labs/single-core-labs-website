import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { RevealText } from '@/components/RevealText'
import { HorizontalRule } from '@/components/HorizontalRule'
import { ArrowRight } from 'lucide-react'
import SEO from '@/components/SEO'
import { BLOG_POSTS } from '@/lib/blog-content.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

const viewport = { once: true, amount: 0.15, margin: '-40px' }

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog — Single Core Labs',
  description: 'Articles on AI infrastructure, sovereign AI, and enterprise AI engineering from Single Core Labs.',
  url: 'https://singlecorelabs.in/blog',
  publisher: { '@type': 'Organization', name: 'Single Core Labs' },
}

export default function BlogPage() {
  return (
    <div className="page-dark">
      <SEO
        title="Blog | Single Core Labs"
        description="Articles on AI infrastructure, sovereign AI, and enterprise AI engineering from Single Core Labs."
        keywords="AI blog, sovereign AI, enterprise AI, Indian AI market, LLM deployment"
        schema={schema}
      />
      <Navbar />

      <main style={{ minHeight: '100vh' }}>
        <section className="container-editorial" style={{ paddingTop: '80px', paddingBottom: '32px' }}>
          <div style={{ maxWidth: '720px' }}>
            <RevealText>
              <p className="text-eyebrow" style={{ marginBottom: '28px' }}>Resources</p>
            </RevealText>
            <RevealText delay={1}>
              <h1 className="text-display" style={{ marginBottom: '24px' }}>Blog</h1>
            </RevealText>
            <RevealText delay={2}>
              <p className="text-body" style={{ maxWidth: '520px', color: 'var(--color-text-muted)' }}>
                Articles on AI infrastructure, sovereign AI, and the engineering decisions that matter for Indian enterprises.
              </p>
            </RevealText>
          </div>
        </section>

        <section className="container-editorial">
          <HorizontalRule style={{ marginBottom: 'clamp(32px, 5vh, 56px)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {BLOG_POSTS.map((post) => (
              <motion.div key={post.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center',
                    gap: '24px',
                    padding: 'clamp(28px, 4vh, 40px) 0',
                    borderBottom: '1px solid var(--color-border)',
                    transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <div>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'var(--color-accent)',
                        }}>
                          {post.category}
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-dim)' }}>
                          {post.readTime}
                        </span>
                      </div>
                      <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        marginBottom: '12px',
                        color: 'var(--color-text)',
                      }}>
                        {post.title}
                      </h2>
                      <p className="text-body" style={{ maxWidth: '640px', color: 'var(--color-text-muted)', fontSize: '14px' }}>
                        {post.excerpt}
                      </p>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--color-text-dim)', flexShrink: 0 }} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
