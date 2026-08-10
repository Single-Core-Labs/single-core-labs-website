import {
  ArrowRight, Server, Shield, Cpu, Lock, Cloud,
  Monitor, Users, Workflow, Layers, Search,
  BookOpen, Database, Key, Zap
} from 'lucide-react'

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
      fontWeight: 400,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      color: 'var(--color-text)',
      marginBottom: '20px',
    }}>
      {children}
    </h2>
  )
}

function SectionBody({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--font-sans)',
      fontSize: 'clamp(15px, 1.1vw, 17px)',
      lineHeight: 1.8,
      letterSpacing: '-0.01em',
      color: 'rgba(228, 222, 201, 0.75)',
      marginBottom: '20px',
    }}>
      {children}
    </p>
  )
}

function Subheading({ children }) {
  return (
    <h3 style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--color-text)',
      marginBottom: '12px',
      marginTop: '32px',
    }}>
      {children}
    </h3>
  )
}

function DiagramBox({ children, caption, label }) {
  return (
    <div style={{ margin: '36px 0' }}>
      <div style={{
        background: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: 'clamp(20px, 3vw, 40px)',
        overflow: 'hidden',
      }}>
        {label && (
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '16px',
          }}>
            {label}
          </div>
        )}
        {children}
      </div>
      {caption && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          color: 'var(--color-text-dim)',
          marginTop: '10px',
          fontStyle: 'italic',
          textAlign: 'center',
        }}>
          {caption}
        </p>
      )}
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '20px',
    }}>
      {items.map((item, i) => (
        <li key={i} style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-start',
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(14px, 1vw, 15px)',
          lineHeight: 1.6,
          color: 'rgba(228, 222, 201, 0.75)',
        }}>
          <span style={{
            color: 'var(--color-accent)',
            marginTop: '6px',
            flexShrink: 0,
          }}>â€”</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function InfoCallout({ title, children, icon: Icon }) {
  return (
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
      {Icon && <Icon size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />}
      <div>
        {title && (
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--color-accent)',
            marginBottom: '6px',
          }}>
            {title}
          </p>
        )}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          lineHeight: 1.6,
          color: 'rgba(228, 222, 201, 0.7)',
        }}>
          {children}
        </p>
      </div>
    </div>
  )
}

function Table({ headers, rows }) {
  return (
    <div style={{ overflowX: 'auto', margin: '24px 0' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
      }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
            {headers.map((h, i) => (
              <th key={i} style={{
                textAlign: 'left',
                padding: '12px 16px',
                color: 'var(--color-accent)',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
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
    </div>
  )
}

function NumberedStep({ num, title, children }) {
  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      marginBottom: '24px',
      alignItems: 'flex-start',
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'rgba(184, 164, 120, 0.1)',
        border: '1px solid rgba(184, 164, 120, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--color-accent)',
        flexShrink: 0,
      }}>
        {num}
      </div>
      <div>
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--color-text)',
          marginBottom: '6px',
        }}>
          {title}
        </h4>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          lineHeight: 1.6,
          color: 'rgba(228, 222, 201, 0.7)',
        }}>
          {children}
        </p>
      </div>
    </div>
  )
}

function ArchitectureSVG({ layers }) {
  const boxH = 48
  const gap = 8
  const totalH = layers.length * boxH + (layers.length - 1) * gap
  return (
    <svg viewBox={`0 0 600 ${totalH}`} style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto' }}>
      {layers.map((layer, i) => {
        const y = i * (boxH + gap)
        return (
          <g key={i}>
            <rect x="60" y={y} width="480" height={boxH} rx="6" fill={layer.fill || 'rgba(184, 164, 120, 0.06)'} stroke={layer.stroke || 'rgba(255,255,255,0.08)'} strokeWidth="1" />
            <text x="72" y={y + boxH / 2 + 4} fill="var(--color-text)" fontFamily="var(--font-sans)" fontSize="13" fontWeight="500">{layer.label}</text>
            <text x="540" y={y + boxH / 2 + 4} fill="rgba(228, 222, 201, 0.5)" fontFamily="var(--font-sans)" fontSize="11" textAnchor="end">{layer.tech}</text>
          </g>
        )
      })}
    </svg>
  )
}

function FlowDiagram({ steps }) {
  const w = 600
  const boxW = 140
  const boxH = 48
  const gap = 40
  const totalW = steps.length * boxW + (steps.length - 1) * gap
  const startX = Math.max(0, (w - totalW) / 2)
  return (
    <svg viewBox={`0 0 ${w} 100`} style={{ width: '100%', maxWidth: `${w}px`, display: 'block', margin: '0 auto' }}>
      {steps.map((step, i) => {
        const x = startX + i * (boxW + gap)
        const arrowX = x + boxW + gap / 2
        return (
          <g key={i}>
            <rect x={x} y="26" width={boxW} height={boxH} rx="8" fill="rgba(184, 164, 120, 0.06)" stroke="rgba(184, 164, 120, 0.2)" strokeWidth="1" />
            <text x={x + boxW / 2} y={26 + boxH / 2 + 4} fill="var(--color-text)" fontFamily="var(--font-sans)" fontSize="12" textAnchor="middle" fontWeight="500">{step.label}</text>
            {i < steps.length - 1 && (
              <>
                <line x1={x + boxW + 2} y1="50" x2={arrowX - 4} y2="50" stroke="rgba(184, 164, 120, 0.3)" strokeWidth="1.5" />
                <polygon points={`${arrowX},46 ${arrowX + 6},50 ${arrowX},54`} fill="rgba(184, 164, 120, 0.3)" />
              </>
            )}
          </g>
        )
      })}
    </svg>
  )
}

function ComparisonChart({ items, width: w = 500, height: h = 200 }) {
  const maxVal = Math.max(...items.map(i => i.value))
  const barMaxW = w - 160
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', maxWidth: `${w}px`, display: 'block', margin: '0 auto' }}>
      {items.map((item, i) => {
        const barW = (item.value / maxVal) * barMaxW
        const y = i * (h / items.length) + 10
        return (
          <g key={i}>
            <text x="0" y={y + 16} fill="var(--color-text)" fontFamily="var(--font-sans)" fontSize="12" fontWeight="500">{item.label}</text>
            <rect x="150" y={y} width={Math.max(barW, 4)} height="22" rx="4" fill={item.color || 'rgba(184, 164, 120, 0.4)'} />
            <text x={155 + barW + 4} y={y + 16} fill="rgba(228, 222, 201, 0.6)" fontFamily="var(--font-sans)" fontSize="11">{item.value}</text>
          </g>
        )
      })}
    </svg>
  )
}

function renderDiagram(guideSlug) {
  switch (guideSlug) {
    case 'sovereign-ai-infrastructure':
      return (
        <DiagramBox label="Figure 1: Air-Gapped LLM Deployment Architecture" caption="A three-tier air-gapped deployment with physical separation between the public internet and the inference cluster.">
          <ArchitectureSVG layers={[
            { label: 'Client Access Layer (VPN + Thin Client)', tech: 'OpenVPN / WireGuard', fill: 'rgba(184, 164, 120, 0.06)', stroke: 'rgba(184, 164, 120, 0.15)' },
            { label: 'API Gateway & Auth Proxy', tech: 'Envoy / OAuth2 Proxy', fill: 'rgba(184, 164, 120, 0.04)', stroke: 'rgba(255,255,255,0.06)' },
            { label: 'Model Inference Cluster (NVIDIA GPUs)', tech: 'vLLM / TensorRT-LLM', fill: 'rgba(184, 164, 120, 0.08)', stroke: 'rgba(184, 164, 120, 0.2)' },
            { label: 'Audit & Monitoring Layer', tech: 'Fluentd + OpenSearch', fill: 'rgba(184, 164, 120, 0.04)', stroke: 'rgba(255,255,255,0.06)' },
            { label: 'Physical Air Gap (No egress to internet)', tech: 'Hardware enforced', fill: 'rgba(200, 80, 80, 0.08)', stroke: 'rgba(200, 80, 80, 0.2)' },
          ]} />
        </DiagramBox>
      )

    case 'agentic-workflows':
      return (
        <DiagramBox label="Figure 1: Multi-Agent Orchestration Flow" caption="The orchestrator routes tasks to specialist agents, with optional human-in-the-loop approval gates at decision points.">
          <svg viewBox="0 0 600 320" style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto' }}>
            {/* Orchestrator */}
            <rect x="220" y="10" width="160" height="44" rx="22" fill="rgba(184, 164, 120, 0.1)" stroke="rgba(184, 164, 120, 0.3)" strokeWidth="1.5" />
            <text x="300" y="37" fill="var(--color-text)" fontFamily="var(--font-sans)" fontSize="13" textAnchor="middle" fontWeight="600">Orchestrator Agent</text>
            {/* Agents */}
            {[
              { label: 'Research Agent', x: 10, y: 100 },
              { label: 'Code Agent', x: 220, y: 100 },
              { label: 'Review Agent', x: 430, y: 100 },
            ].map((a, i) => (
              <g key={i}>
                <rect x={a.x} y={a.y} width={160} height={40} rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <text x={a.x + 80} y={a.y + 25} fill="var(--color-text)" fontFamily="var(--font-sans)" fontSize="12" textAnchor="middle">{a.label}</text>
                <line x1="300" y1="54" x2={a.x + 80} y2={a.y} stroke="rgba(184, 164, 120, 0.2)" strokeWidth="1" />
                <circle cx={300} cy="54" r="3" fill="rgba(184, 164, 120, 0.4)" />
                <circle cx={a.x + 80} cy={a.y} r="3" fill="rgba(184, 164, 120, 0.4)" />
              </g>
            ))}
            {/* Human Approval */}
            <rect x="200" y="180" width="200" height="40" rx="20" fill="rgba(184, 164, 120, 0.06)" stroke="rgba(184, 164, 120, 0.2)" strokeWidth="1" strokeDasharray="4,3" />
            <text x="300" y="205" fill="var(--color-accent)" fontFamily="var(--font-sans)" fontSize="12" textAnchor="middle">Human-in-the-Loop Gate</text>
            {[10, 220, 430].map((x, i) => (
              <g key={i}>
                <line x1={x + 80} y1="140" x2="300" y2="180" stroke="rgba(184, 164, 120, 0.15)" strokeWidth="1" />
                <circle cx={x + 80} cy="140" r="3" fill="rgba(184, 164, 120, 0.3)" />
              </g>
            ))}
            {/* Output */}
            <rect x="220" y="255" width="160" height="40" rx="8" fill="rgba(80, 200, 120, 0.08)" stroke="rgba(80, 200, 120, 0.2)" strokeWidth="1" />
            <text x="300" y="280" fill="rgba(80, 200, 120, 0.8)" fontFamily="var(--font-sans)" fontSize="12" textAnchor="middle">Final Output</text>
            <line x1="300" y1="220" x2="300" y2="255" stroke="rgba(80, 200, 120, 0.2)" strokeWidth="1.5" />
            <circle cx="300" cy="220" r="3" fill="rgba(80, 200, 120, 0.3)" />
          </svg>
        </DiagramBox>
      )

    case 'llm-fine-tuning':
      return (
        <DiagramBox label="Figure 1: Fine-Tuning Decision Framework" caption="A decision tree for choosing between prompting, RAG, fine-tuning, and pre-training based on task requirements.">
          <svg viewBox="0 0 600 340" style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto' }}>
            {/* Root */}
            <rect x="200" y="10" width="200" height="36" rx="18" fill="rgba(184, 164, 120, 0.1)" stroke="rgba(184, 164, 120, 0.3)" strokeWidth="1.5" />
            <text x="300" y="33" fill="var(--color-text)" fontFamily="var(--font-sans)" fontSize="12" textAnchor="middle" fontWeight="600">Task Requirements</text>
            {/* Branches */}
            {[
              { label: 'General knowledge task?', x: 10, y: 80 },
              { label: 'Needs proprietary knowledge?', x: 320, y: 80 },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={b.y} width={240} height={32} rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <text x={b.x + 120} y={b.y + 21} fill="var(--color-text)" fontFamily="var(--font-sans)" fontSize="11" textAnchor="middle">{b.label}</text>
                <line x1={i === 0 ? 250 : 350} y1="46" x2={i === 0 ? 130 : 440} y2="80" stroke="rgba(184, 164, 120, 0.2)" strokeWidth="1" />
              </g>
            ))}
            {/* Second level */}
            {[
              { label: 'Prompt Engineering', x: 10, y: 145 },
              { label: 'RAG Pipeline', x: 160, y: 145 },
              { label: 'Fine-Tuning (LoRA)', x: 380, y: 145 },
            ].map((b, i) => {
              const px = [130, 440]
              const ty = 80 + 32
              const bx = b.x + 80
              return (
                <g key={i}>
                  <rect x={b.x} y={b.y} width={160} height={32} rx="6" fill="rgba(184, 164, 120, 0.06)" stroke="rgba(184, 164, 120, 0.15)" strokeWidth="1" />
                  <text x={b.x + 80} y={b.y + 21} fill="var(--color-text)" fontFamily="var(--font-sans)" fontSize="11" textAnchor="middle">{b.label}</text>
                  <line x1={i < 2 ? 130 : 440} y1={ty} x2={bx} y2={b.y} stroke="rgba(184, 164, 120, 0.15)" strokeWidth="1" />
                </g>
              )
            })}
            {/* Third level */}
            {[
              { label: 'Needs new capabilities?', x: 10, y: 215 },
              { label: 'Full Pre-Training', x: 200, y: 215 },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={b.y} width={180} height={32} rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <text x={b.x + 90} y={b.y + 21} fill="var(--color-text)" fontFamily="var(--font-sans)" fontSize="11" textAnchor="middle">{b.label}</text>
                <line x1="460" y1="177" x2={b.x + 90} y2={b.y} stroke="rgba(184, 164, 120, 0.15)" strokeWidth="1" />
              </g>
            ))}
            {/* Bottom */}
            {[
              { label: 'Continue Fine-Tuning', x: 30, y: 285 },
              { label: 'Full Pre-Train from Scratch', x: 320, y: 285 },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={b.y} width={200} height={36} rx="18" fill="rgba(80, 200, 120, 0.08)" stroke="rgba(80, 200, 120, 0.2)" strokeWidth="1" />
                <text x={b.x + 100} y={b.y + 22} fill="rgba(80, 200, 120, 0.8)" fontFamily="var(--font-sans)" fontSize="11" textAnchor="middle">{b.label}</text>
                <line x1={i === 0 ? 100 : 290} y1="247" x2={b.x + 100} y2={b.y} stroke="rgba(80, 200, 120, 0.15)" strokeWidth="1" />
              </g>
            ))}
          </svg>
        </DiagramBox>
      )

    case 'semantic-caching':
      return (
        <DiagramBox label="Figure 1: Semantic Cache Architecture" caption="Incoming queries are embedded, compared against cached entries via cosine similarity, and served from cache if a match is found above the threshold.">
          <svg viewBox="0 0 600 200" style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto' }}>
            <FlowDiagram steps={[
              { label: 'User Query' },
              { label: 'Embedding Gen' },
              { label: 'Vector Search' },
              { label: 'LLM Inference' },
              { label: 'Cache Store' },
            ]} />
          </svg>
        </DiagramBox>
      )

    case 'healthcare-data-pipelines':
      return (
        <DiagramBox label="Figure 1: Healthcare Data Pipeline Architecture" caption="Data flows from clinical sources through de-identification and structuring layers before reaching the AI inference engine.">
          <ArchitectureSVG layers={[
            { label: 'Clinical Data Sources (EHR / PACS / HL7)', tech: 'FHIR / DICOM', fill: 'rgba(184, 164, 120, 0.06)', stroke: 'rgba(184, 164, 120, 0.15)' },
            { label: 'Ingestion & Normalization Layer', tech: 'Apache Kafka', fill: 'rgba(184, 164, 120, 0.04)', stroke: 'rgba(255,255,255,0.06)' },
            { label: 'De-identification Engine (PHI / PII)', tech: 'NER + Regex', fill: 'rgba(80, 200, 120, 0.06)', stroke: 'rgba(80, 200, 120, 0.15)' },
            { label: 'Structured Storage (Vector + Relational)', tech: 'PostgreSQL + Qdrant', fill: 'rgba(184, 164, 120, 0.04)', stroke: 'rgba(255,255,255,0.06)' },
            { label: 'Clinical AI Inference', tech: 'Fine-tuned LLM', fill: 'rgba(80, 200, 120, 0.08)', stroke: 'rgba(80, 200, 120, 0.2)' },
          ]} />
        </DiagramBox>
      )

    case 'llm-security-patterns':
      return (
        <DiagramBox label="Figure 1: Defense-in-Depth for LLM Deployments" caption="Security controls at every layer: input filtering, access control, inference sandboxing, output redaction, and audit logging.">
          <svg viewBox="0 0 600 300" style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto' }}>
            {/* Vertical layers */}
            {[
              { label: 'Input Guard', y: 10, color: 'rgba(200, 80, 80, 0.08)', stroke: 'rgba(200, 80, 80, 0.2)' },
              { label: 'Auth & Rate Limit', y: 65, color: 'rgba(184, 164, 120, 0.06)', stroke: 'rgba(184, 164, 120, 0.15)' },
              { label: 'Model Sandbox', y: 120, color: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.08)' },
              { label: 'Output Redaction', y: 175, color: 'rgba(184, 164, 120, 0.06)', stroke: 'rgba(184, 164, 120, 0.15)' },
              { label: 'Audit Log', y: 230, color: 'rgba(80, 200, 120, 0.06)', stroke: 'rgba(80, 200, 120, 0.15)' },
            ].map((l, i) => (
              <g key={i}>
                <rect x="150" y={l.y} width="300" height="40" rx="6" fill={l.color} stroke={l.stroke} strokeWidth="1" />
                <text x="300" y={l.y + 25} fill="var(--color-text)" fontFamily="var(--font-sans)" fontSize="13" textAnchor="middle" fontWeight="500">{l.label}</text>
                {i < 4 && <line x1="300" y1={l.y + 40} x2="300" y2={l.y + 65} stroke="rgba(184, 164, 120, 0.2)" strokeWidth="1" />}
              </g>
            ))}
            {/* Side labels */}
            <text x="50" y="30" fill="rgba(228, 222, 201, 0.4)" fontFamily="var(--font-sans)" fontSize="10" textAnchor="end">Prompt injection, jailbreak detection</text>
            <text x="50" y="85" fill="rgba(228, 222, 201, 0.4)" fontFamily="var(--font-sans)" fontSize="10" textAnchor="end">OAuth2, JWT, rate limiting</text>
            <text x="50" y="140" fill="rgba(228, 222, 201, 0.4)" fontFamily="var(--font-sans)" fontSize="10" textAnchor="end">Isolated process, no egress</text>
            <text x="50" y="195" fill="rgba(228, 222, 201, 0.4)" fontFamily="var(--font-sans)" fontSize="10" textAnchor="end">PII redaction, content filter</text>
            <text x="50" y="250" fill="rgba(228, 222, 201, 0.4)" fontFamily="var(--font-sans)" fontSize="10" textAnchor="end">Tamper-proof, immutable</text>
          </svg>
        </DiagramBox>
      )

    default:
      return null
  }
}

export const GUIDES_META = {
  'deploying-sovereign-ai-infrastructure-in-regulated-markets': {
    ...null,
    title: 'Deploying Sovereign AI Infrastructure in Regulated Markets',
    description: 'A technical walkthrough of deploying air-gapped, on-premise LLM infrastructure for defense, healthcare, and government clients â€” covering GPU orchestration, model hardening, and audit compliance.',
    category: 'Infrastructure',
    readTime: '14 min read',
    slug: 'sovereign-ai-infrastructure',
  },
  'building-agentic-workflows-from-prototype-to-production': {
    ...null,
    title: 'Building Agentic Workflows: From Prototype to Production',
    description: 'How to design, evaluate, and scale multi-agent systems that combine retrieval-augmented generation, tool use, and human-in-the-loop oversight for enterprise use cases.',
    category: 'Engineering',
    readTime: '18 min read',
    slug: 'agentic-workflows',
  },
  'llm-fine-tuning-strategy-for-domain-specific-applications': {
    ...null,
    title: 'LLM Fine-Tuning Strategy for Domain-Specific Applications',
    description: 'A practical framework for deciding when to fine-tune vs. prompt-engineer, how to curate high-signal training data, and which parameter-efficient methods deliver the best ROI for Indian enterprises.',
    category: 'Models',
    readTime: '12 min read',
    slug: 'llm-fine-tuning',
  },
  'semantic-caching-for-production-llm-apis': {
    ...null,
    title: 'Semantic Caching for Production LLM APIs',
    description: 'Architecture patterns for reducing latency and cost by caching semantically similar queries â€” covering embedding selection, similarity thresholds, cache invalidation, and hybrid strategies.',
    category: 'Infrastructure',
    readTime: '10 min read',
    slug: 'semantic-caching',
  },
  'designing-ai-ready-data-pipelines-for-healthcare': {
    ...null,
    title: 'Designing AI-Ready Data Pipelines for Healthcare',
    description: 'End-to-end guidance on ingesting, de-identifying, and structuring EHR, PACS, and clinical notes for downstream AI inference â€” with emphasis on HIPAA compliance and Indian data protection law.',
    category: 'Healthcare',
    readTime: '13 min read',
    slug: 'healthcare-data-pipelines',
  },
  'enterprise-security-patterns-for-llm-deployments': {
    ...null,
    title: 'Enterprise Security Patterns for LLM Deployments',
    description: 'Threat modeling for production AI systems: prompt injection defenses, PII redaction in real-time streams, access control for model endpoints, and audit logging for regulated environments.',
    category: 'Security',
    readTime: '11 min read',
    slug: 'llm-security-patterns',
  },
}

export const GUIDE_CONTENT = {
  'sovereign-ai-infrastructure': {
    meta: {
      title: 'Deploying Sovereign AI Infrastructure in Regulated Markets',
      description: 'A technical walkthrough of deploying air-gapped, on-premise LLM infrastructure for defense, healthcare, and government clients â€” covering GPU orchestration, model hardening, and audit compliance.',
      category: 'Infrastructure',
      readTime: '14 min read',
    },
    sections: [
      {
        type: 'intro',
        content: [
          'When a defense contractor or a hospital chain wants to run LLMs internally, the standard cloud API model doesnt work. Not because the models arent capable, but because the data cannot leave the premises. Sovereign AI infrastructure is the set of hardware, software, and operational practices that let organizations run state-of-the-art language models entirely within their own trust boundary.',
          'Over the last two years, we have built and deployed sovereign AI stacks for clients in defense, healthcare, and government. This guide covers the architecture decisions, tooling, and operational patterns that separate a working deployment from one that stalls in procurement.',
        ],
      },
      {
        type: 'section',
        title: 'The Core Architecture',
        content: [
          'A sovereign AI stack has five layers. Each layer must function without any dependency on external internet connectivity. No API calls to OpenAI. No telemetry pinging home. No model downloads at inference time.',
          'Layer one is the client access layer. Users connect through a VPN-terminated thin client or a local web interface. There is no public DNS resolution for the inference endpoint. In practice, we deploy OpenVPN or WireGuard with certificate-based authentication, and terminate TLS at an internal Envoy proxy.',
          'Layer two is the API gateway and auth proxy. This is where you enforce authentication, rate limiting, and request auditing. We use OAuth2 Proxy backed by the organizations existing IdP (Okta, Azure AD, or Keycloak) with a local fallback for air-gapped environments.',
          'Layer three is the model inference cluster. This is the GPU node pool. The standard configuration today is NVIDIA A100 or H100 nodes with NVLink, running vLLM or TensorRT-LLM as the inference engine. For smaller deployments, A6000 or L40S cards work well for models up to 13B parameters.',
          'Layer four is the audit and monitoring layer. Every request and response is logged to an append-only store. We use Fluentd for log shipping and OpenSearch for storage and querying. This is non-negotiable for regulated clients.',
          'Layer five is the physical air gap. There is no network path from the inference cluster to the public internet. Software updates are delivered via signed USB drives or a private, physically isolated update server.',
        ],
      },
      {
        type: 'diagram',
        slug: 'sovereign-ai-infrastructure',
      },
      {
        type: 'section',
        title: 'GPU Orchestration Without Internet',
        content: [
          'Orchestrating GPU nodes in an air-gapped environment is harder than it sounds. Standard ML tooling assumes internet access for package installation, model downloads, and container registries.',
          'The approach we have settled on involves three steps. First, you build a private container registry on a portable SSD. NVIDIA GPU Operator, vLLM, and all dependencies are containerized and signed on a build machine that has temporary internet access. The SSD is then physically carried to the data center.',
          'Second, you pre-download and validate all model weights. Hugging Face model snapshots are downloaded, checksummed, and transferred via the same physical media. We maintain a manifest of allowed models, each with a SHA-256 hash, and the inference engine refuses to load unregistered weights.',
          'Third, you use a local package mirror. We run a private PyPI and apt repository inside the cluster, seeded with all required packages. The GPU nodes are configured to point exclusively at these mirrors. If a package isnt in the mirror, the installation fails.',
        ],
      },
      {
        type: 'callout',
        icon: Server,
        title: 'Hardware Note',
        content: 'For defense clients, we typically spec 8x NVIDIA H100 SXM nodes with NVSwitch. For healthcare, 4x A100 nodes suffice for most clinical workloads. The key constraint is not just VRAM but memory bandwidth â€” LLM inference is bandwidth-bound, and you want at least 2 TB/s aggregate per node.',
      },
      {
        type: 'section',
        title: 'Model Hardening for Regulated Environments',
        content: [
          'Running a model in an air-gapped environment does not automatically make it compliant. You still need to harden the model against the specific threats that regulators care about.',
          'Model hardening in this context means three things. First, output controls. The model is wrapped in a guard layer that filters responses against a configurable policy. For healthcare clients, this means redacting any generated PHI that was not present in the input. For defense clients, it means enforcing classification labels on output.',
          'Second, prompt injection resistance. In a sovereign deployment, the attack surface is smaller, but the consequences of a successful injection are higher. We use a combination of input sanitization, perplexity-based anomaly detection, and a secondary smaller model (usually a fine-tuned DeBERTa) that classifies incoming prompts as benign or malicious.',
          'Third, model attestation. Before loading, the inference engine verifies a cryptographic signature on the model weights. This ensures that the weights have not been tampered with since they were signed by the organizations AI governance team.',
        ],
      },
      {
        type: 'subheading',
        title: 'Audit Compliance and Certification',
        content: [
          'Regulated clients require audit trails that can withstand scrutiny from MeitY, DCGI, or the CISO office. Every inference request is logged with a request ID, user identity, input hash, output hash, model version, and timestamp. Logs are written to a WORM (Write Once Read Many) store, typically using OpenSearch with the immutable indices plugin or a dedicated hardware appliance.',
          'For clients pursuing ISO 27001 or SOC-2 certification on their AI infrastructure, we also implement drift detection on the model outputs. A statistical monitor tracks the distribution of output tokens per request and alerts when the distribution shifts beyond a threshold, indicating potential model degradation or data drift.',
          'The most frequently overlooked requirement is key management. In an air-gapped environment, you cannot rely on cloud HSM services. We deploy a local HashiCorp Vault cluster in sealed mode, with master keys split across five smart cards held by different team members. This is cumbersome, but it passes audits.',
        ],
      },
      {
        type: 'section',
        title: 'Operational Patterns',
        content: [
          'Sovereign AI deployments fail most often not on the technology but on operations. Teams underestimate the overhead of maintaining GPU drivers, CUDA versions, and inference engine compatibility without internet access.',
          'We recommend treating the GPU cluster as a stateless pool. Model updates are handled by swapping out container images, not by patching running instances. Each model version gets its own deployment manifest, and rollbacks are tested as part of the pre-deployment drill.',
          'Monitoring in an air-gapped environment means running your own Prometheus stack with Thanos for long-term retention. Alertmanager routes alerts to internal email or an on-prem PagerDuty equivalent. There is no SaaS monitoring tool involved.',
          'The bottom line: sovereign AI is achievable today with off-the-shelf hardware and open-source tooling. The hard part is not the GPUs or the models. It is the operational discipline of running a data center workload without the safety net of cloud APIs.',
        ],
      },
      {
        type: 'outro',
        content: 'For teams evaluating sovereign AI, start with a single GPU node and one model. Get the audit pipeline working before scaling to multiple nodes. The hardware is expensive, but the operational patterns are what determine success.',
      },
    ],
  },

  'agentic-workflows': {
    meta: {
      title: 'Building Agentic Workflows: From Prototype to Production',
      description: 'How to design, evaluate, and scale multi-agent systems that combine retrieval-augmented generation, tool use, and human-in-the-loop oversight for enterprise use cases.',
      category: 'Engineering',
      readTime: '18 min read',
    },
    sections: [
      {
        type: 'intro',
        content: [
          'Agentic workflows are the first architectural pattern where LLMs dont just respond to prompts but execute multi-step tasks, call external tools, and coordinate with other agents. The shift from stateless chat to stateful execution is the most important change in production AI this year.',
          'The term agent gets thrown around loosely. In this guide, an agent is a system where an LLM has access to tools and can make decisions about which tool to call, in what order, and whether the result satisfies the original objective. A workflow is a directed graph of such decisions.',
        ],
      },
      {
        type: 'section',
        title: 'The Orchestrator Pattern',
        content: [
          'Every production agentic system we have built uses an orchestrator pattern. A single orchestrator agent receives the user request and decomposes it into subtasks. Each subtask is dispatched to a specialist agent. The specialist agent has access to a limited set of tools relevant to its domain.',
          'The orchestrator maintains a shared state object that tracks what has been done, what remains, and what decisions are pending. This state object is the source of truth. If the orchestrator crashes, the workflow resumes from the last persisted state, not from the beginning.',
          'We use LangGraph for most Python-based deployments and a custom Rust runtime for latency-sensitive workloads. The key requirement is that the orchestrator supports cycles â€” loops where an agent can retry a tool call with modified parameters or backtrack to a previous step.',
        ],
      },
      {
        type: 'diagram',
        slug: 'agentic-workflows',
      },
      {
        type: 'section',
        title: 'Tool Use and Function Calling',
        content: [
          'Tools are where agents create value. A code generation agent that cannot run tests is guessing. A research agent that cannot search a database is just reciting training data.',
          'We define tools as typed functions with a JSON Schema specification. The LLM receives the tool definitions in the system prompt and returns a structured tool call request. Our runtime validates the arguments against the schema before execution.',
          'The most common failure mode in tool use is hallucinated arguments. An agent might call search_documents with a made-up document ID. The fix is to have tools return clear error messages and to give the agent a fixed number of retries before escalating to a human.',
          'For sensitive tools database write operations, for example, we require explicit human approval. The workflow pauses, sends a notification to a Slack channel or email, and waits for a confirm or reject response before proceeding.',
        ],
      },
      {
        type: 'callout',
        icon: Workflow,
        title: 'Production Reality',
        content: 'Agents are not reliable in the way that traditional software is reliable. They produce different outputs for the same input. The key metric is not correctness on a single run but success rate over 100 runs. We target 95%+ success for production workflows and use retry logic and human escalation to handle the tail.',
      },
      {
        type: 'section',
        title: 'Human-in-the-Loop Design',
        content: [
          'Determining where to insert human oversight is the most consequential design decision in an agentic system. Too many gates and the workflow is slower than a human doing it manually. Too few and the agent makes expensive mistakes.',
          'We use a decision confidence model. The agent assigns a confidence score to each decision. If the score is above a threshold (typically 0.85), the action proceeds automatically. Below the threshold, the action is queued for human review. The threshold is configurable per workflow and can be adjusted based on the cost of a wrong decision.',
          'The human review interface is critical. You cannot just show the agent raw output and expect a human to evaluate it quickly. We render a diff view that highlights what the agent changed, why it made the change, and what alternatives it considered. A human can approve, reject, or modify in seconds.',
        ],
      },
      {
        type: 'subheading',
        title: 'From Prototype to Production',
        content: [
          'Most agent prototypes fail in production because they dont handle the long tail of edge cases. A prototype that works on 10 examples will fail on 10,000. The step from prototype to production requires three things: evaluation, observability, and gradual deployment.',
          'For evaluation, we maintain a benchmark suite of 500+ test cases per workflow, covering happy paths, edge cases, and known failure modes. Every change to the agent prompt, tool definition, or orchestrator logic is evaluated against this suite.',
          'For observability, every agent decision is logged. We use LangSmith for tracing and OpenTelemetry for metrics. The most useful metric is tool call success rate: if tools are failing more than 5% of the time, something is wrong.',
          'For gradual deployment, we use a canary pattern. The new agent version serves 5% of traffic for 24 hours. If all metrics are green, it graduates to 25%, then 50%, then 100%. Rollback is automatic if any metric crosses the alert threshold.',
        ],
      },
      {
        type: 'outro',
        content: 'Agentic workflows are the most promising pattern in applied AI right now. They are also the most dangerous to deploy without rigor. Invest in evaluation, observability, and human-in-the-loop design from day one. The agents will fail in surprising ways. Your system should make those failures safe.',
      },
    ],
  },

  'llm-fine-tuning': {
    meta: {
      title: 'LLM Fine-Tuning Strategy for Domain-Specific Applications',
      description: 'A practical framework for deciding when to fine-tune vs. prompt-engineer, how to curate high-signal training data, and which parameter-efficient methods deliver the best ROI for Indian enterprises.',
      category: 'Models',
      readTime: '12 min read',
    },
    sections: [
      {
        type: 'intro',
        content: [
          'Fine-tuning is the most misunderstood technique in applied LLM engineering. Teams either fine-tune everything because they heard it makes models better, or they avoid it entirely because they think it is too expensive or complicated. Both extremes are wrong.',
          'The decision to fine-tune should be driven by a single question: does the base model know the task but struggle with the format, or does it not know the domain at all? The answer determines whether you need fine-tuning, retrieval-augmented generation, or both.',
        ],
      },
      {
        type: 'diagram',
        slug: 'llm-fine-tuning',
      },
      {
        type: 'section',
        title: 'Fine-Tune vs. Prompt-Engineer vs. RAG',
        content: [
          'Prompt engineering works when the task is well-understood by the model and the required knowledge fits in the context window. If your task is summarization, classification, or extraction from text that the model already handles well on the first try, you do not need fine-tuning.',
          'RAG works when the model understands the task but needs access to information it was not trained on. Company policies, product catalogs, recent research papers â€” these are retrieval problems, not fine-tuning problems. A good RAG pipeline with chunking, embedding, and hybrid search replaces 80 percent of fine-tuning use cases.',
          'Fine-tuning is for when the model does not understand the task or the domain deeply enough. Three scenarios: the output format is highly specific and structured (legal documents, medical reports), the domain has terminology and conventions the model was not trained on (Indian regulatory filings, Ayushman Bharat codes), or you need to suppress certain behaviors and reinforce others.',
        ],
      },
      {
        type: 'callout',
        icon: BookOpen,
        title: 'The Indian Enterprise Angle',
        content: 'Indian enterprises face a unique challenge. Most LLMs are pre-trained on English-dominant, US-centric data. Fine-tuning on Indian business documents, legal formats, and multilingual data (Hindi, Tamil, Telugu, Marathi mixed with English) can close the performance gap significantly. We have seen accuracy improve from 62% to 91% on GST invoice extraction after fine-tuning on 500 examples.',
      },
      {
        type: 'subheading',
        title: 'Data Curation: The Actual Work of Fine-Tuning',
        content: [
          'Fine-tuning quality is determined almost entirely by data quality. The model architecture and hyperparameters matter, but the difference between a good fine-tune and a bad one is the training data.',
          'We follow a three-step curation process. Step one is sourcing. For enterprise clients, this means extracting examples from their own historical data. Customer support tickets, approved loan applications, correctly formatted medical reports. You need at least 200 high-quality examples to see improvement, and 1000+ for reliable performance.',
          'Step two is cleaning. Every example is reviewed for errors, inconsistencies, and formatting issues. We use a combination of automated checks (schema validation, regex patterns) and manual review. A single incorrect example in the training set reduces accuracy measurably.',
          'Step three is augmentation. We generate synthetic variations of each example using a larger model (GPT-4 or Claude). The variations change surface details but preserve the underlying structure. This expands the effective dataset size and improves generalization.',
        ],
      },
      {
        type: 'section',
        title: 'Parameter-Efficient Methods for Indian Enterprises',
        content: [
          'Full fine-tuning of a 70B parameter model costs around 40,000 INR per run in compute. For most Indian enterprises, that is prohibitive. Parameter-efficient fine-tuning (PEFT) methods reduce this to under 2,000 INR per run.',
          'LoRA (Low-Rank Adaptation) is our default recommendation. It trains a small set of adapter weights while keeping the base model frozen. A LoRA adapter for a 7B model requires roughly 2 GB of VRAM during training, compared to 56 GB for full fine-tuning. The quality loss is negligible for most tasks.',
          'QLoRA goes further by quantizing the base model to 4-bit during training. This lets you fine-tune a 70B model on a single 48 GB GPU. The tradeoff is slightly slower training and a marginal quality decrease, but for most enterprise tasks, the results are within 1-2 percent of full fine-tuning.',
          'For very small datasets (under 500 examples), we recommend prompt-tuning instead of LoRA. Prompt-tuning learns a small set of soft prompt tokens rather than weight adapters. It trains in minutes and achieves 90 percent of LoRA quality on narrow tasks.',
        ],
      },
      {
        type: 'table',
        headers: ['Method', 'VRAM (7B)', 'Training Time', 'Cost (INR)', 'Quality vs FT'],
        rows: [
          ['Full Fine-Tune', '56 GB', '6 hours', '40,000', 'Baseline'],
          ['LoRA', '14 GB', '2 hours', '4,000', '~98%'],
          ['QLoRA (4-bit)', '6 GB', '3 hours', '2,500', '~96%'],
          ['Prompt-Tuning', '8 GB', '20 min', '800', '~90%'],
        ],
      },
      {
        type: 'section',
        title: 'Evaluation Before Deployment',
        content: [
          'Never deploy a fine-tuned model without a structured evaluation. The risk is regressive behavior: the model gets better at your target task but loses general capability. We have seen fine-tuned models that ace medical summarization but cannot answer basic arithmetic questions.',
          'Your evaluation suite should include three categories. Task-specific tests measure performance on the target task using held-out examples. General capability benchmarks measure whether the model retained its reasoning, coding, and language abilities. Safety tests check for harmful outputs, bias, and prompt injection vulnerability.',
          'We use a holdout set of 20 percent of the curated data for task evaluation. For Indian enterprises, we add a multilingual safety check: the model is probed with prompts in Hindi, Tamil, and Telugu to ensure it has not developed biased behavior on code-switched inputs.',
        ],
      },
      {
        type: 'outro',
        content: 'Fine-tuning is a sharp tool. Used correctly, it turns a general-purpose model into a domain expert. Used incorrectly, it wastes compute and degrades model quality. The framework is simple: prompt-engineer first, add RAG second, fine-tune third. Most teams should stop at step two.',
      },
    ],
  },

  'semantic-caching': {
    meta: {
      title: 'Semantic Caching for Production LLM APIs',
      description: 'Architecture patterns for reducing latency and cost by caching semantically similar queries â€” covering embedding selection, similarity thresholds, cache invalidation, and hybrid strategies.',
      category: 'Infrastructure',
      readTime: '10 min read',
    },
    sections: [
      {
        type: 'intro',
        content: [
          'LLM inference costs add up fast. At scale, a single production deployment can burn through 50,000 USD a month in API costs, with the majority spent on repeated queries that differ only in surface wording. Semantic caching addresses this by recognizing when a new query is effectively the same as one already answered.',
          'Unlike traditional key-value caching, which requires an exact match, semantic caching uses vector embeddings and similarity search to detect queries that mean the same thing. This guide covers the practical architecture decisions we have made building semantic caches for production systems.',
        ],
      },
      {
        type: 'section',
        title: 'How Semantic Caching Works',
        content: [
          'The flow has four steps. Incoming query text is passed through an embedding model to produce a vector. That vector is searched against a vector database containing embeddings of previously cached queries. If the most similar cached query exceeds a similarity threshold, the cached response is returned immediately, bypassing the LLM entirely.',
          'If no match is found above the threshold, the query is sent to the LLM. The response is stored alongside the query embedding in the vector database for future matches. Over time, the cache accumulates coverage of the query space.',
          'The critical parameter is the similarity threshold. Set it too high, and you miss valid matches. Set it too low, and you return wrong answers. In practice, the right threshold depends on the embedding model and the domain. We typically start with 0.92 (cosine similarity) and tune based on a held-out evaluation set.',
        ],
      },
      {
        type: 'diagram',
        slug: 'semantic-caching',
      },
      {
        type: 'section',
        title: 'Embedding Model Selection',
        content: [
          'The embedding model determines what similar means. Different embedding models produce different similarity spaces, and choosing the wrong one leads to poor cache hit rates.',
          'For English-dominant workloads, we use sentence-transformers/all-MiniLM-L6-v2 for its speed (384-dimensional vectors, ~5ms per query on CPU) and good retrieval quality. For multilingual workloads common in Indian enterprises, we use intfloat/multilingual-e5-large-instruct, which handles code-switched Hindi-English text well.',
          'The throughput and latency requirements of the cache matter. If the embedding generation itself takes 50ms, you have saved nothing by skipping a 200ms LLM call. We run embedding models on GPU when the cache is handling more than 100 queries per second, and on CPU with ONNX Runtime optimization for lower throughput.',
        ],
      },
      {
        type: 'callout',
        icon: Zap,
        title: 'Latency Budget',
        content: 'Every cache lookup costs time. Embedding (5-50ms) + vector search (2-20ms). If your LLM call is 200ms, the cache saves 130-193ms per hit. At a 50% hit rate, effective latency drops by roughly 35%. At 80% hit rate, by 55%. The key is optimizing the embedding step, which is the bottleneck.',
      },
      {
        type: 'subheading',
        title: 'Cache Invalidation and Freshness',
        content: [
          'Cached responses grow stale. In domains where information changes frequently news, stock prices, regulatory guidelines the cache needs invalidation strategies.',
          'We use a time-to-live (TTL) approach with tiered durations. Static content (how-to guides, product descriptions) gets a 24-hour TTL. Dynamic content (pricing, availability) gets a 5-minute TTL. The TTL is attached to each cache entry and can be overridden by the application based on the query category.',
          'For write-through scenarios, where the underlying data changes explicitly, we support tag-based invalidation. Each cache entry is tagged with one or more topics. When a data source updates, all entries with matching tags are evicted. This prevents stale responses without flushing the entire cache.',
        ],
      },
      {
        type: 'section',
        title: 'Hybrid Caching Strategy',
        content: [
          'Semantic caching alone misses many opportunities. We pair it with an exact-match cache that catches repeated queries verbatim. The exact-match cache is checked first (O(1) lookup), and only on miss does the semantic cache run.',
          'The combined approach yields 60-80 percent cache hit rates for customer support bots, 40-60 percent for code generation assistants, and 30-50 percent for general Q&A systems. The variation depends on how repetitive the query patterns are.',
          'For vector storage, we use Qdrant for production deployments (fast filtering, good HNSW index performance) and Chroma for prototyping. Both support the filtering and tag-based invalidation needed for tiered caching.',
        ],
      },
      {
        type: 'outro',
        content: 'Semantic caching is the single highest-ROI optimization for production LLM deployments. It cuts costs, reduces latency, and improves user experience simultaneously. Start with a simple embedding model and a cosine threshold, measure your hit rate, and iterate from there.',
      },
    ],
  },

  'healthcare-data-pipelines': {
    meta: {
      title: 'Designing AI-Ready Data Pipelines for Healthcare',
      description: 'End-to-end guidance on ingesting, de-identifying, and structuring EHR, PACS, and clinical notes for downstream AI inference â€” with emphasis on HIPAA compliance and Indian data protection law.',
      category: 'Healthcare',
      readTime: '13 min read',
    },
    sections: [
      {
        type: 'intro',
        content: [
          'Healthcare AI fails most often not because the models are inaccurate, but because the data pipeline cannot deliver clean, timely, and compliant data to the inference engine. Every hospital system we have worked with has the same story: months of data engineering followed by a model that works on the first try.',
          'The pipeline is the product. This guide covers the practical architecture for ingesting, de-identifying, and structuring healthcare data from electronic health records (EHR), picture archiving systems (PACS), and clinical notes. The emphasis is on systems that work under Indian data protection law while meeting global HIPAA standards.',
        ],
      },
      {
        type: 'section',
        title: 'The Data Sources',
        content: [
          'Healthcare data comes in three fundamentally different formats. EHR data is structured and semi-structured: patient demographics, lab results, medication lists, diagnosis codes (ICD-10, SNOMED). PACS data is medical imaging: X-rays, CT scans, MRIs in DICOM format. Clinical notes are unstructured free text: discharge summaries, progress notes, operative reports.',
          'Each source requires a different ingestion strategy. EHR data is typically accessed via FHIR APIs or HL7 v2 messages. PACS data requires a DICOM listener that accepts C-STORE requests from modalities. Clinical notes are usually extracted via HL7 v2 or direct database queries.',
          'The challenge is not accessing these sources, but normalizing them into a unified schema. We use a canonical data model that maps all three source types into a common observation format: patient ID, timestamp, data type, data value, and provenance. This model lets the downstream AI engine work with any data source without source-specific logic.',
        ],
      },
      {
        type: 'diagram',
        slug: 'healthcare-data-pipelines',
      },
      {
        type: 'section',
        title: 'De-identification Under Indian Law',
        content: [
          'The Digital Personal Data Protection Act 2023 requires that personal data be de-identified before use in AI training or inference. Healthcare data has 18 HIPAA identifiers plus additional identifiers under Indian law: Aadhaar number, passport number, and insurance identifiers.',
          'Our de-identification pipeline runs in three passes. Pass one uses a named entity recognition model fine-tuned on Indian healthcare documents. It identifies patient names, doctor names, hospital names, dates, and numerical identifiers. We use a fine-tuned BioBERT model that achieves 0.97 F1 on Indian clinical text.',
          'Pass two applies regex patterns for structured identifiers. Aadhaar numbers, mobile numbers, email addresses, and PAN card numbers follow predictable patterns and are caught by regex with near-100 percent accuracy.',
          'Pass three is a secondary LLM review. A small model (GPT-4o-mini or a fine-tuned Llama 3 8B) reviews the de-identified output and flags any remaining PHI. This catch-all step catches edge cases that the NER model and regex miss, typically 0.5 percent of documents.',
        ],
      },
      {
        type: 'callout',
        icon: Lock,
        title: 'A Note on Aadhaar Handling',
        content: 'Aadhaar numbers are the highest-risk identifier under Indian law. Our pipeline not only redacts them but also stores a salted hash for data linkage purposes without retaining the plaintext. The salt is stored in a hardware security module, separate from the data store. This pattern passes both DPDPA 2023 and HIPAA audits.',
      },
      {
        type: 'subheading',
        title: 'Structuring for Inference',
        content: [
          'Once data is de-identified, it needs to be structured so that the AI inference engine can use it. Raw text and DICOM files are not directly useful to an LLM or vision model.',
          'Clinical notes are chunked into segments: history of present illness, physical examination, assessment and plan, medication list. Each segment is labeled with its section header. The chunking uses a combination of regex section detection and a classifier that identifies section boundaries.',
          'Imaging data goes through a preprocessing pipeline: DICOM to PNG conversion, normalization to standard pixel spacing, and optional annotation overlay. The pipeline extracts DICOM metadata (modality, body part, study description) and attaches it as structured context for the vision model.',
          'Structured EHR data is stored in a hybrid store. Relational data lab results, medications goes into PostgreSQL. Unstructured text goes into a vector store (Qdrant) with embeddings from a medical-domain model. This lets the AI engine retrieve relevant patient context using either structured queries or semantic search.',
        ],
      },
      {
        type: 'section',
        title: 'Compliance and Audit',
        content: [
          'Every operation on healthcare data must be logged and auditable. Our pipeline logs every data access, de-identification operation, and inference request with a chain of custody that links each output back to the original source data.',
          'For HIPAA compliance, we maintain a business associate agreement (BAA) with each healthcare client. For DPDPA 2023 compliance, we maintain a data processing agreement that specifies the purpose, scope, and duration of data processing.',
          'The audit log is tamper-evident. Log entries are written to an append-only store with cryptographic chaining. Any attempt to modify or delete a log entry breaks the chain and triggers an alert. This satisfies the most stringent audit requirements we have encountered from both US and Indian regulators.',
        ],
      },
      {
        type: 'outro',
        content: 'Healthcare AI is a data engineering problem with an AI solution. Invest in the pipeline. The de-identification, normalization, and structuring work accounts for 80 percent of the implementation effort but determines 100 percent of the outcome. Get the data right, and the models will follow.',
      },
    ],
  },

  'llm-security-patterns': {
    meta: {
      title: 'Enterprise Security Patterns for LLM Deployments',
      description: 'Threat modeling for production AI systems: prompt injection defenses, PII redaction in real-time streams, access control for model endpoints, and audit logging for regulated environments.',
      category: 'Security',
      readTime: '11 min read',
    },
    sections: [
      {
        type: 'intro',
        content: [
          'LLMs introduce a new attack surface that traditional security tooling was not designed for. The model is not just processing data; it is executing instructions embedded in that data. A prompt injection attack does not exploit a buffer overflow or a misconfigured firewall. It exploits the models instruction-following capability, which is a feature, not a bug.',
          'This guide covers the security patterns we use to protect production LLM deployments. The approach is defense in depth: no single layer is assumed to be sufficient. We layer input guards, access controls, model sandboxing, output redaction, and audit logging to create a system that survives the failure of any one layer.',
        ],
      },
      {
        type: 'diagram',
        slug: 'llm-security-patterns',
      },
      {
        type: 'section',
        title: 'Threat Model for LLM Deployments',
        content: [
          'Before applying controls, you need to know what you are protecting against. We identify four threat categories for production LLM systems.',
          'The first is prompt injection, where an attacker embeds instructions in the input that override the system prompt. This can be direct (I am the system administrator, ignore all previous instructions) or indirect, where the injection is hidden in a document or web page that the LLM reads as part of its task.',
          'The second is data extraction, where an attacker crafts queries designed to make the model reveal information from its training data or context window. This includes membership inference and training data extraction.',
          'The third is denial of service, where an attacker sends computationally expensive queries to exhaust GPU resources. Queries that trigger long generations or extremely long context processing can be weaponized.',
          'The fourth is output manipulation, where the attacker influences the model to produce content that violates policy, generates harmful code, or leaks information through seemingly benign outputs.',
        ],
      },
      {
        type: 'section',
        title: 'Input Guards',
        content: [
          'The first line of defense is the input guard, which inspects every prompt before it reaches the model. We use a tiered approach.',
          'Tier one is a fast regex and pattern-based filter that catches obvious injection attempts: base64-encoded instructions, known attack patterns, and attempts to override the system prompt. This runs in under 1ms and blocks about 60 percent of attacks.',
          'Tier two is a classifier model, typically a fine-tuned DeBERTa or a small LLM, that scores each input for injection likelihood. The classifier is trained on a dataset of known injection techniques and benign variations. It runs in 10-20ms and catches an additional 30 percent of attacks.',
          'Tier three is perplexity analysis. Prompt injections often have unusual token distributions that differ from normal user queries. We compute the perplexity of the input using a small language model. If the perplexity is above a threshold, the input is flagged for human review.',
        ],
      },
      {
        type: 'callout',
        icon: Shield,
        title: 'The Cat and Mouse Problem',
        content: 'Prompt injection is an active research area, and new techniques bypass existing defenses regularly. The key is not to build a perfect filter but to build a system that detects and responds to failures. We monitor blocked-to-allowed ratios and investigate sudden drops, which usually indicate a new bypass technique.',
      },
      {
        type: 'subheading',
        title: 'Access Control and Authentication',
        content: [
          'Every request to the LLM endpoint must be authenticated and authorized. We use OAuth 2.0 with short-lived access tokens. The token carries claims about the users identity, role, and permitted actions. The API gateway validates the token before the request reaches any other layer.',
          'Authorization is fine-grained. A customer support agent might have access to the summarization endpoint but not the code generation endpoint. A developer might have access to both but with a higher rate limit. The authorization policy is defined in a centralized policy engine (OPA) and evaluated at the gateway.',
          'Rate limiting is applied per user, per endpoint, and per model. We use a token bucket algorithm with Redis as the backing store. The rate limits are configured to prevent DoS attacks while allowing legitimate burst traffic. Limits are higher for internal users than for external API consumers.',
        ],
      },
      {
        type: 'section',
        title: 'Model Sandboxing',
        content: [
          'The model itself runs in a sandboxed environment with no network access except to authorized services. The sandbox has three properties: no egress to the internet, no access to internal services that are not explicitly allowlisted, and a read-only filesystem except for a temporary scratch directory.',
          'We use gVisor for container sandboxing and Seccomp profiles to restrict system calls. The model process runs as a non-root user with the minimum capabilities required for GPU access. Any system call outside the allowed list terminates the process.',
          'For multi-tenant deployments, each tenant gets a separate model instance or a separate container. Tenants are isolated at the process level, not just the request level. If one tenant manages to escape the sandbox, they cannot access another tenants data or model.',
        ],
      },
      {
        type: 'section',
        title: 'Output Redaction and Audit',
        content: [
          'The output guard inspects model responses before they reach the user. Its primary job is PII redaction: if the model generates a phone number, email address, or Aadhaar number, the output guard redacts it regardless of whether the input contained it.',
          'We also run a content safety classifier on the output. The classifier checks for hate speech, violence, self-harm, and sexually explicit content. If the output fails the safety check, it is blocked and the incident is logged with the full request and response for investigation.',
          'Every request and response pair is logged to an immutable audit store. The log includes the user identity, timestamp, input text, output text, model version, latency, and any guard actions taken. This log is used for incident investigation, compliance reporting, and model improvement.',
        ],
      },
      {
        type: 'outro',
        content: 'LLM security is not fundamentally different from traditional security. The principles are the same: authenticate, authorize, audit, isolate. What changes is the attack surface and the tools you use to protect it. Invest in input guards, output redaction, and audit logging. Everything else follows from standard security practices.',
      },
    ],
  },

}

export {
  SectionTitle,
  SectionBody,
  Subheading,
  DiagramBox,
  BulletList,
  InfoCallout,
  Table as InfoTable,
  NumberedStep,
  renderDiagram,
}
