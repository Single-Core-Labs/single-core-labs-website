import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="page-dark page-callosum">
      <SEO
        title="About | Single Core Labs"
        description="The future of enterprise intelligence is sovereign. We are building it — a team of engineers designing original architectures and shipping them into production across healthcare, infrastructure, and developer tooling."
        keywords="Single Core Labs, sovereign AI, enterprise AI, applied AI, AI infrastructure"
      />

      <style>{`
        .page-callosum .cl-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 10px;
          padding-inline: 20px;
        }
        @media (min-width: 768px) {
          .page-callosum .cl-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
            column-gap: 16px;
            padding-inline: 24px;
          }
        }
        @media (min-width: 1200px) {
          .page-callosum .cl-grid {
            grid-template-columns: repeat(12, minmax(0, 1fr));
            column-gap: 20px;
            padding-inline: 40px;
          }
        }
        .cl-span-full { grid-column: 1 / -1; }
        .cl-span-6 { grid-column: span 6 / span 6; }
        @media (min-width: 768px) { .cl-span-6 { grid-column: span 4 / span 4; } }
        @media (min-width: 1200px) { .cl-span-6 { grid-column: span 6 / span 6; } }

        .cl-lrg {
          font-size: 2rem;
          line-height: 1.1;
          font-weight: 400;
          letter-spacing: -0.01em;
        }
        @media (min-width: 768px) { .cl-lrg { font-size: 2.5rem; line-height: 1; } }

        .cl-body {
          font-size: 0.875rem;
          line-height: 1.7;
          color: var(--color-text-muted);
        }
        @media (min-width: 1200px) { .cl-body { font-size: 1rem; } }

        .cl-cta {
          min-width: 258px;
          border-radius: 4px;
          background: var(--color-text);
          padding: 8px 24px;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.875rem;
          line-height: 1;
          color: var(--color-bg);
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .cl-cta:hover { background: var(--color-text-dim); color: var(--color-bg); }

        @keyframes cl-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cl-reveal { animation: cl-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .cl-reveal-2 { animation: cl-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both; }
      `}</style>

      <Navbar />

      <main className="cl-grid" style={{ paddingTop: 'clamp(120px, 16vh, 200px)' }}>
        {/* HERO STATEMENT */}
        <section
          className="cl-span-full cl-reveal"
          style={{ display: 'grid', rowGap: '96px', paddingBottom: 'clamp(120px, 16vh, 200px)' }}
        >
          <div className="cl-grid" style={{ padding: 0 }}>
            <h1 className="cl-span-6 cl-lrg" style={{ color: 'var(--color-text)' }}>
              The future of intelligence will be built on different data, different models, and
              different ways of learning.
            </h1>
          </div>

          <div className="cl-grid" style={{ padding: 0 }}>
            <p className="cl-span-6 cl-body" style={{ maxWidth: 560 }}>
              AI is becoming a fundamental layer of how the world operates. But intelligence
              cannot be built from a single model, a single dataset, or a single way of learning.
            </p>
          </div>

          <div className="cl-grid" style={{ padding: 0 }}>
            <p className="cl-span-6" style={{ maxWidth: 560 }}>
              <strong style={{ fontWeight: 500, color: 'var(--color-text)' }}>
                SingleCore Labs exists to build the systems that make intelligence more adaptable.
              </strong>
            </p>
          </div>

          <div className="cl-grid" style={{ padding: 0 }}>
            <p className="cl-span-6 cl-body" style={{ maxWidth: 560 }}>
              We build across <strong style={{ fontWeight: 500, color: 'var(--color-text)' }}>AI, data, reinforcement learning, and infrastructure</strong> —
              developing the models, learning systems, and data foundations that allow machines
              to understand environments, learn from experience, and improve over time.
            </p>
          </div>

          <div className="cl-grid" style={{ padding: 0 }}>
            <p className="cl-span-6 cl-body" style={{ maxWidth: 560 }}>
              Our work is grounded in a simple belief:
            </p>
          </div>

          <div className="cl-grid" style={{ padding: 0 }}>
            <p className="cl-span-6" style={{ maxWidth: 560 }}>
              <strong style={{ fontWeight: 500, color: 'var(--color-text)' }}>
                The next generation of AI will not come from doing more of the same. It will come
                from building systems that can learn differently.
              </strong>
            </p>
          </div>

          <div className="cl-grid" style={{ padding: 0 }}>
            <p className="cl-span-6 cl-body" style={{ maxWidth: 560 }}>
              We are building toward that future.
            </p>
          </div>

          <div className="cl-grid" style={{ padding: 0 }}>
            <p
              className="cl-span-6"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-text-dim)',
              }}
            >
              Backed by engineers from Bank of America, Global Logic, and Cognizant
            </p>
          </div>

          <div className="cl-grid" style={{ padding: 0 }}>
            <p
              className="cl-span-6"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-text-dim)',
              }}
            >
              Part of Claude for Startups by Anthropic, Neo4j for Startups, and Z.AI
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="cl-span-full cl-reveal-2"
          style={{ display: 'flex', justifyContent: 'center', paddingBottom: 'clamp(120px, 16vh, 200px)' }}
        >
          <Link to="/contact" className="cl-cta">
            Join Us
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}