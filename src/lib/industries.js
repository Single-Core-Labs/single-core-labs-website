import { Truck, Factory, SquarePlus, Zap, Shield } from 'lucide-react'

export const INDUSTRIES = [
  {
    id: 'logistics',
    icon: Truck,
    label: 'Logistics & Warehousing',
    tagline: 'Autonomous operations for the physical supply chain',
    description:
      'Warehouse robotics orchestration, autonomous picking and sorting, and vision-guided systems trained on your facility data.',
    href: '/solutions/logistics',
    color: 'rgba(184, 164, 120, 0.12)',
  },
  {
    id: 'manufacturing',
    icon: Factory,
    label: 'Manufacturing',
    tagline: 'Intelligent automation for Industry 4.0',
    description:
      'Predictive maintenance, computer vision quality assurance, robotic cell programming, and digital twin integration for smart manufacturing.',
    href: '/solutions/manufacturing',
    color: 'rgba(184, 164, 120, 0.12)',
  },
  {
    id: 'healthcare',
    icon: SquarePlus,
    label: 'Healthcare',
    tagline: 'AI that understands clinical complexity',
    description:
      'EHR-integrated clinical intelligence, medical imaging diagnostics, and surgical-assist robotics for the most regulated environments.',
    href: '/solutions/healthcare-intelligence',
    color: 'rgba(184, 164, 120, 0.12)',
  },
  {
    id: 'energy',
    icon: Zap,
    label: 'Energy & Infrastructure',
    tagline: 'Autonomous inspection at grid scale',
    description:
      'Vision-guided inspection of power lines, wind and solar assets, and subsea infrastructure — trained on years of your survey data.',
    href: '/solutions/energy',
    color: 'rgba(184, 164, 120, 0.12)',
  },
  {
    id: 'defense',
    icon: Shield,
    label: 'Defense & Government',
    tagline: 'Sovereign AI for national security',
    description:
      'Air-gapped deployment, autonomous surveillance and logistics, and secure multi-level classification systems for defense and public sector.',
    href: '/solutions/defense',
    color: 'rgba(184, 164, 120, 0.12)',
  },
]

export function getIndustry(slug) {
  return INDUSTRIES.find((i) => i.id === slug)
}
