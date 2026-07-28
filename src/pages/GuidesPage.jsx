import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { RevealText } from '@/components/RevealText'
import { HorizontalRule } from '@/components/HorizontalRule'
import { ArrowRight } from 'lucide-react'
import SEO from '@/components/SEO'

const GUIDES = [
  {
    title: 'Deploying Sovereign AI Infrastructure in Regulated Markets',
    description: 'A technical walkthrough of deploying air-gapped, on-premise LLM infrastructure for defense, healthcare, and government clients — covering GPU orchestration, model hardening, and audit compliance.',
    category: 'Infrastructure',
    readTime: '14 min read',
    href: '/guides/sovereign-ai-infrastructure',
  },
  {
    title: 'Building Agentic Workflows: From Prototype to Production',
    description: 'How to design, evaluate, and scale multi-agent systems that combine retrieval-augmented generation, tool use, and human-in-the-loop oversight for enterprise use cases.',
    category: 'Engineering',
    readTime: '18 min read',
    href: '/guides/agentic-workflows',
  },
  {
    title: 'LLM Fine-Tuning Strategy for Domain-Specific Applications',
    description: 'A practical framework for deciding when to fine-tune vs. prompt-engineer, how to curate high-signal training data, and which parameter-efficient methods deliver the best ROI for Indian enterprises.',
    category: 'Models',
    readTime: '12 min read',
    href: '/guides/llm-fine-tuning',
  },
  {
    title: 'Semantic Caching for Production LLM APIs',
    description: 'Architecture patterns for reducing latency and cost by caching semantically similar queries — covering embedding selection, similarity thresholds, cache invalidation, and hybrid strategies.',
    category: 'Infrastructure',
    readTime: '10 min read',
    href: '/guides/semantic-caching',
  },
  {
    title: 'Evaluating LLM Providers for the Indian Enterprise',
    description: 'A comparison of OpenAI, Anthropic, Google, Groq, Together, and open-weight models across latency, pricing in INR, multilingual capability, and data residency requirements for the Indian market.',
    category: 'Strategy',
    readTime: '16 min read',
    href: '/guides/llm-providers-india',
  },
  {
    title: 'Designing AI-Ready Data Pipelines for Healthcare',
    description: 'End-to-end guidance on ingesting, de-identifying, and structuring EHR, PACS, and clinical notes for downstream AI inference — with emphasis on HIPAA compliance and Indian data protection law.',
    category: 'Healthcare',
    readTime: '13 min read',
    href: '/guides/healthcare-data-pipelines',
  },
  {
    title: 'Enterprise Security Patterns for LLM Deployments',
    description: 'Threat modeling for production AI systems: prompt injection defenses, PII redaction in real-time streams, access control for model endpoints, and audit logging for regulated environments.',
    category: 'Security',
    readTime: '11 min read',
    href: '/guides/llm-security-patterns',
  },
  {
    title: 'Cost Optimization for Large-Scale Model Inference',
    description: 'Strategies for reducing per-token costs through model quantization, speculative decoding, batching strategies, fallback routing, and multi-provider arbitration without sacrificing quality.',
    category: 'Engineering',
    readTime: '15 min read',
    href: '/guides/inference-cost-optimization',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Guides — Single Core Labs',
  description: 'In-depth guides on AI infrastructure, sovereign AI, and enterprise AI engineering from Single Core Labs.',
  url: 'https://singlecorelabs.com/guides',
  publisher: { '@type': 'Organization', name: 'Single Core Labs' },
}

export default function GuidesPage() {
  return (
    <div className="page-dark">
      <SEO
        title="Guides | Single Core Labs"
        description="In-depth guides on AI infrastructure, sovereign AI, and enterprise AI engineering from Single Core Labs."
        keywords="AI infrastructure guides, sovereign AI guide, enterprise AI engineering, Indian AI market"
        schema={schema}
      />
      <Navbar />

      <main style={{ minHeight: '100vh' }}>
        <section
          className="container-editorial"
          style={{ paddingTop: '80px', paddingBottom: '32px' }}
        >
          <div style={{ maxWidth: '720px' }}>
            <RevealText>
              <p className="text-eyebrow" style={{ marginBottom: '28px' }}>Resources</p>
            </RevealText>
            <RevealText delay={1}>
              <h1 className="text-display" style={{ marginBottom: '24px' }}>
                Guides
              </h1>
            </RevealText>
            <RevealText delay={2}>
              <p className="text-body" style={{ maxWidth: '520px', color: 'var(--color-text-muted)' }}>
                In-depth explainers on AI infrastructure, sovereign AI, and the decisions that matter for enterprise AI engineering.
              </p>
            </RevealText>
          </div>
        </section>

        {/* Guide Cards */}
        <section className="container-editorial">
          <HorizontalRule style={{ marginBottom: 'clamp(32px, 5vh, 56px)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {GUIDES.map((guide, i) => (
              <RevealText key={guide.href} delay={i + 1}>
                <Link
                  to={guide.href}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <div
                    style={{
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
                          {guide.category}
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-dim)' }}>
                          {guide.readTime}
                        </span>
                      </div>
                      <h2
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                          fontWeight: 400,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.2,
                          marginBottom: '12px',
                          color: 'var(--color-text)',
                        }}
                      >
                        {guide.title}
                      </h2>
                      <p className="text-body" style={{ maxWidth: '640px', color: 'var(--color-text-muted)', fontSize: '14px' }}>
                        {guide.description}
                      </p>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--color-text-dim)', flexShrink: 0 }} />
                  </div>
                </Link>
              </RevealText>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
