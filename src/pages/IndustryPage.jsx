import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useParams, Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { ArrowRight } from 'lucide-react'
import { getIndustry } from '@/lib/industries'

export default function IndustryPage() {
  const { slug } = useParams()
  const industry = getIndustry(slug)

  const fallbackTitle = slug
    ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : 'Solutions'

  const title = industry ? industry.label : fallbackTitle
  const tagline = industry ? industry.tagline : null
  const description = industry
    ? industry.description
    : 'This page is currently under development. Check back soon.'

  return (
    <div className="page-dark">
      <SEO
        title={`${title} | Single Core Labs`}
        description={description}
        keywords={`${title}, embodied AI, data capturing, model training, deployment`}
      />
      <Navbar category="solutions" />
      <main
        id="main-content"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(120px, 18vh, 200px) 20px clamp(80px, 10vh, 120px)',
        }}
      >
        <p className="text-eyebrow" style={{ marginBottom: '24px', color: '#5A9E8F' }}>
          {industry ? 'Accelerating embodied AGI' : 'Coming Soon'}
        </p>
        <h1
          style={{
            fontFamily: "'Almarai', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: '#E1E0CC',
            marginBottom: '20px',
            maxWidth: '900px',
          }}
        >
          {title}
        </h1>
        {tagline && (
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2.4vw, 2rem)',
              color: 'rgba(225,224,204,0.6)',
              marginBottom: '28px',
            }}
          >
            {tagline}
          </p>
        )}
        <p className="text-body" style={{ maxWidth: '520px', marginBottom: '48px', color: 'rgba(225,224,204,0.55)' }}>
          {description}
        </p>
        <p className="text-eyebrow" style={{ marginBottom: '32px', color: 'rgba(225,224,204,0.35)' }}>
          Full page under development
        </p>
        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            to="/solutions"
            className="link-underline"
            style={{ fontSize: '14px', fontWeight: 500, color: '#5A9E8F' }}
          >
            All solutions
            <ArrowRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="link-underline"
            style={{ fontSize: '14px', fontWeight: 500, color: '#5A9E8F' }}
          >
            Talk to us
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
