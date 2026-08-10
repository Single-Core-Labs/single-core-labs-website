import { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'

import HomePage from './pages/HomePage'
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const AIModernizationPage = lazy(() => import('./pages/AIModernizationPage'))
const HealthcareIntelligencePage = lazy(() => import('./pages/HealthcareIntelligencePage'))
const EnterprisePage = lazy(() => import('./pages/EnterprisePage'))
const GuidesPage = lazy(() => import('./pages/GuidesPage'))
const GuideDetailPage = lazy(() => import('./pages/GuideDetailPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const DeploymentPage = lazy(() => import('./pages/DeploymentPage'))
const SecurityPage = lazy(() => import('./pages/SecurityPage'))
const TechPage = lazy(() => import('./pages/TechPage'))
const IndustryPage = lazy(() => import('./pages/IndustryPage'))
const ResearchPage = lazy(() => import('./pages/ResearchPage'))
const ResearchCollectivePage = lazy(() => import('./pages/ResearchCollectivePage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))

function ScrollToHashAndTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      try {
        const element = document.querySelector(hash)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' })
          }, 120)
        }
      } catch {
        console.warn('Invalid hash selector:', hash)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  // Initialize Lenis for butter-smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <BrowserRouter>
      <ScrollToHashAndTop />
      <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/healthcare-intelligence" element={<HealthcareIntelligencePage />} />
          <Route path="/solutions/ai-modernization" element={<AIModernizationPage />} />
          <Route path="/solutions/tech" element={<TechPage />} />
          <Route path="/solutions/logistics" element={<IndustryPage />} />
          <Route path="/solutions/manufacturing" element={<IndustryPage />} />
          <Route path="/solutions/energy" element={<IndustryPage />} />
          <Route path="/solutions/defense" element={<IndustryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:guideSlug" element={<GuideDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postSlug" element={<BlogPostPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research-collective" element={<ResearchCollectivePage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/deployment" element={<DeploymentPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/:slug" element={<ComingSoonPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App