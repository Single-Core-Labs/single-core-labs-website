import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const METHODS = [
  {
    id: 'sft',
    plainTitle: 'Show examples',
    techTitle: 'Supervised Fine-Tuning (SFT)',
    plain: 'Show the model hundreds of great examples of what “good” looks like — it learns to copy that quality and format.',
    tech: 'Train on curated prompt → completion pairs. Controls output format, domain knowledge, and tool schemas. Usually the first post-training step before DPO/RL.',
    outcome: '→ More consistent answers in your voice, less copy-pasting fixes.',
    tag: 'SFT',
  },
  {
    id: 'dpo',
    plainTitle: 'Pick the better answer',
    techTitle: 'Preference Optimization (DPO)',
    plain: 'Show two answers and tell the model which you prefer — it learns your taste without you writing rules.',
    tech: 'Direct Preference Optimization on chosen / rejected pairs. No separate reward model needed. Aligns model to human judgment.',
    outcome: '→ Fewer “technically correct but unhelpful” replies.',
    tag: 'DPO',
  },
  {
    id: 'rl',
    plainTitle: 'Let it practice and get scored',
    techTitle: 'Reinforcement Fine-Tuning (RFT / RL)',
    plain: 'For tasks where you can check the answer (math, code, tool use), let the model try, get a score, and improve automatically.',
    tech: 'Train against verifiers / reward functions and evaluators. Best for reasoning, structured outputs, and agentic workflows where success is measurable.',
    outcome: '→ Jumps in accuracy where correctness matters.',
    tag: 'RL / RFT',
  },
  {
    id: 'custom',
    plainTitle: 'Build your own way',
    techTitle: 'Custom Training',
    plain: 'Have a research idea? We can plug your own objective, loss, or learning loop into the stack.',
    tech: 'Custom objectives, losses, optimizers, and RL loops. For teams that need control beyond SFT/DPO/RL.',
    outcome: '→ For research teams pushing beyond off-the-shelf.',
    tag: 'Custom',
  },
]

function PlainTechCard({ m, audience, expanded, toggle }) {
  const showPlain = audience !== 'technical'
  const showTech = audience !== 'business'
  const isOpen = expanded[m.id]
  return (
    <div style={{ background: '#FFFFFF', border: '1px solid #E8E8E8', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', padding: '4px 8px', borderRadius: '999px', background: '#0A0A0A', color: '#fff', fontWeight: 700 }}>{m.tag}</span>
        {audience === 'both' && <span style={{ fontSize: '11px', color: '#9CA3AF' }}>•</span>}
        {audience === 'both' && <span style={{ fontSize: '11px', color: '#6B7280', fontStyle: 'italic' }}>tap for technical</span>}
      </div>
      {showPlain && (
        <>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>{m.plainTitle}</h3>
          <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#374151' }}>{m.plain}</p>
          <p style={{ fontSize: '12.5px', color: '#16A34A', fontWeight: 600 }}>{m.outcome}</p>
        </>
      )}
      {showTech && (
        <>
          {showPlain && <div style={{ height: '1px', background: '#F3F4F6', margin: '4px 0' }} />}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0A0A0A' }}>{m.techTitle}</h4>
            {audience === 'both' && (
              <button onClick={() => toggle(m.id)} style={{ marginLeft: 'auto', fontSize: '11px', padding: '4px 8px', borderRadius: '999px', border: '1px solid #E5E7EB', background: isOpen ? '#0A0A0A' : '#FFFFFF', color: isOpen ? '#fff' : '#374151', cursor: 'pointer' }}>{isOpen ? 'Hide' : 'Show'}</button>
            )}
          </div>
          {(audience !== 'both' || isOpen) && <p style={{ fontSize: '12.5px', lineHeight: 1.6, color: '#6B7280' }}>{m.tech}</p>}
        </>
      )}
    </div>
  )
}

export default function TrainingPage() {
  const [audience] = useState('both') // locked to both — switcher removed per request
  const [expanded, setExpanded] = useState({ sft: false, dpo: false, rl: false, custom: false })
  const toggle = (id) => setExpanded((e) => ({ ...e, [id]: !e[id] }))
  const [stackOpen, setStackOpen] = useState(false)

  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <SEO title="Training — Model Lab — Train models for what comes next | SingleCore Labs" description="For business and ML teams: we turn general open models into specialized AI. Plain-English outcomes with technical depth when you want it — SFT, DPO, RL/RFT and custom training." />
      <Navbar />

      {/* Hero */}
      <section data-theme="dark" style={{ position: 'relative', background: '#050505', padding: 'clamp(80px, 10vw, 110px) clamp(20px, 4vw, 40px) clamp(56px, 8vw, 80px)', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-40px', background: 'var(--gradient-muted)', filter: 'blur(28px)', opacity: 0.42, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '14px' }}>SingleCore Labs • Training — Model Lab</p>
          <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(34px, 5.2vw, 60px)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#fff', marginBottom: '14px' }}>
            Train models<br /><span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>for what comes next.</span>
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', maxWidth: '720px', margin: '0 auto 18px' }}>
            We take a general AI model and teach it your job — your data, your rules, your quality bar — so it’s useful on day one, not just impressive in a demo.
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#FFFFFF', color: '#0A0A0A', padding: '13px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Start training →</Link>
            <a href="#how" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.14)', padding: '13px 22px', borderRadius: '999px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>See how it works ↓</a>
          </div>
        </div>
      </section>

      {/* At a glance — business TL;DR */}
      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(40px, 6vw, 64px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: '#9CA3AF', marginBottom: '8px' }}>FOR BUSINESS</p>
              <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 500, letterSpacing: '-0.02em', color: '#0A0A0A', lineHeight: 1.15 }}>You define success.<br />We teach the model.</h2>
              <p style={{ marginTop: '12px', fontSize: '14px', lineHeight: 1.7, color: '#6B7280' }}>No need to know SFT vs DPO. Tell us what “good” looks like — examples, preferences, or a score — and we pick the training method that fits.</p>
              <div style={{ marginTop: '14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Fewer edits', 'Faster to deploy', 'Measurable improvement'].map(t => (
                  <span key={t} style={{ fontSize: '12px', padding: '6px 10px', borderRadius: '999px', background: '#F3F4F6', border: '1px solid #E5E7EB', color: '#374151' }}>✓ {t}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: '#9CA3AF', marginBottom: '8px' }}>FOR ENGINEERS</p>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0A0A0A', marginBottom: '10px' }}>Full stack, your control level</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                  ['SFT', 'LoRA / full-param'],
                  ['DPO', 'No reward model'],
                  ['RL / RFT', 'Verifiers & rewards'],
                  ['Eval', 'Benchmarks + regression'],
                ].map(([k,v]) => (
                  <div key={k} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '12px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#0A0A0A' }}>{k}</div>
                    <div style={{ fontSize: '11px', color: '#6B7280' }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '10px', fontSize: '12px', color: '#9CA3AF' }}>Data Foundry → Training → RL Lab → Evaluation in one loop. Managed or custom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works — one visual, two languages */}
      <section id="how" data-theme="light" style={{ background: '#F9FAFB', padding: 'clamp(48px, 7vw, 80px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(24px, 3.4vw, 36px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#0A0A0A', marginBottom: '8px' }}>From base model to your model</h2>
          <p style={{ fontSize: '14px', color: '#6B7280', maxWidth: '640px', margin: '0 auto 24px' }}>
            Start with a general model → give it your best examples and feedback → test if it got better → ship it → learn from real use and teach again.
            {audience !== 'business' && <><br /><span style={{ fontSize: '12px', color: '#9CA3AF' }}>Technical: Data Foundry (SFT data, preferences, trajectories) → Training (SFT/DPO/RL) → Evaluation → Deployed checkpoint → New experience → Retrain</span></>}
          </p>
          <div style={{ background: '#0A0A0A', borderRadius: '16px', padding: 'clamp(18px, 3vw, 24px)', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(520px circle at 50% 0%, rgba(90,90,108,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', maxWidth: '360px', margin: '0 auto' }}>
              <div style={{ width: '100%', background: '#fff', borderRadius: '12px', padding: '10px', textAlign: 'center', fontSize: '12px', fontWeight: 800, color: '#0A0A0A' }}>BASE MODEL <span style={{ fontWeight: 400, color: '#6B7280' }}> — general purpose</span></div>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>↓</span>
              <div style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#fff' }}>YOUR DATA</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Examples • Preferences • Past work</div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>↓</span>
              <div style={{ width: '100%', background: '#fff', borderRadius: '12px', padding: '10px', textAlign: 'center', fontSize: '12px', fontWeight: 800, color: '#0A0A0A' }}>TRAINING <span style={{ fontWeight: 400, color: '#6B7280' }}>— teaches your way</span></div>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>↓</span>
              <div style={{ width: '100%', background: '#fff', borderRadius: '12px', padding: '10px', textAlign: 'center', fontSize: '12px', fontWeight: 800, color: '#0A0A0A' }}>TEST IT <span style={{ fontWeight: 400, color: '#6B7280' }}>— did it improve?</span></div>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>↓</span>
              <div style={{ width: '100%', background: '#fff', border: '2px solid #22C55E', borderRadius: '12px', padding: '10px', textAlign: 'center', fontSize: '12px', fontWeight: 800, color: '#0A0A0A' }}>YOUR MODEL — shipped</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center', marginTop: '6px' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '999px' }}>Use → Learn → Train again</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods — plain first, tech on demand */}
      <section data-theme="dark" style={{ background: '#050505', padding: 'clamp(48px, 7vw, 80px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-20px', background: 'var(--gradient-muted)', filter: 'blur(24px)', opacity: 0.15, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto 28px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#fff', marginBottom: '8px' }}>Pick your teaching style</h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.62)' }}>Non-technical: read the big title. Technical: expand for ML details. We’ll choose the right mix for you.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {METHODS.map(m => (
              <PlainTechCard key={m.id} m={m} audience={audience} expanded={expanded} toggle={toggle} />
            ))}
          </div>
        </div>
      </section>

      {/* Stack — collapsible for business */}
      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(48px, 7vw, 80px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#0A0A0A' }}>The stack — simple view</h2>
          <p style={{ fontSize: '14px', color: '#6B7280', marginTop: '6px' }}>Data gives direction. Training changes behavior. Evaluation proves it.</p>
          <div style={{ marginTop: '18px', display: 'inline-flex', gap: '8px', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '999px', padding: '4px' }}>
            <button onClick={() => setStackOpen(false)} style={{ padding: '8px 16px', borderRadius: '999px', border: 'none', background: !stackOpen ? '#0A0A0A' : 'transparent', color: !stackOpen ? '#fff' : '#6B7280', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Simple</button>
            <button onClick={() => setStackOpen(true)} style={{ padding: '8px 16px', borderRadius: '999px', border: 'none', background: stackOpen ? '#0A0A0A' : 'transparent', color: stackOpen ? '#fff' : '#6B7280', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Detailed</button>
          </div>

          {!stackOpen ? (
            <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { k: '1. Give data', v: 'Examples, comparisons, past work' },
                { k: '2. Teach', v: 'Model learns your patterns' },
                { k: '3. Prove it', v: 'We measure before/after' },
              ].map(s => (
                <div key={s.k} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '18px', textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#0A0A0A' }}>{s.k}</div>
                  <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '6px' }}>{s.v}</div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ marginTop: '24px', background: '#0A0A0A', borderRadius: '16px', padding: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {[
                  { h: 'DATA', items: ['SFT Data', 'Preferences', 'Trajectories', 'Synthetic'] },
                  { h: 'TRAINING', items: ['SFT', 'DPO', 'RL / RFT', 'Custom'] },
                  { h: 'EVALUATION', items: ['Benchmarks', 'Verifiers', 'Reward', 'Regression'] },
                ].map(col => (
                  <div key={col.h} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#fff', textAlign: 'center', marginBottom: '8px' }}>{col.h}</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {col.items.map(i => (
                        <li key={i} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '6px', alignItems: 'center' }}><span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>SINGLECORE TRAINING • Full-param or LoRA — benchmarked, versioned checkpoints</p>
            </div>
          )}
        </div>
      </section>

      {/* Control level — plain language first */}
      <section data-theme="dark" style={{ background: '#050505', padding: 'clamp(48px, 7vw, 80px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#fff', textAlign: 'center', marginBottom: '22px' }}>How hands-on do you want to be?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            <div style={{ background: '#fff', borderRadius: '16px', padding: '20px', border: '1px solid #E5E7EB' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0A0A0A' }}>We run it for you</h3>
              <p style={{ fontSize: '13px', color: '#374151', marginTop: '6px', lineHeight: 1.6 }}>You set the goal and provide examples. We handle data prep, training, and testing.</p>
              <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '8px' }}><strong>Best for:</strong> business teams who want results, not infra.</p>
              {audience !== 'business' && <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '8px' }}>Technical: managed pipeline — you define model, dataset, objective, eval.</p>}
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>You steer, we support</h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '6px', lineHeight: 1.6 }}>Want to tweak the learning process? Bring your own ideas — we plug them in.</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}><strong style={{ color: '#fff' }}>Best for:</strong> ML teams with research ideas.</p>
              {audience !== 'business' && <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>Technical: custom losses, optimizers, RL loops.</p>}
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Learn by doing (RL)</h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '6px', lineHeight: 1.6 }}>For tasks with a right answer — the model practices in a sandbox, gets scored, and improves.</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}><strong style={{ color: '#fff' }}>Best for:</strong> agents, tools, reasoning.</p>
              {audience !== 'business' && <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>Technical: RL Lab + verifiers + rollouts.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases — plain */}
      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(48px, 7vw, 80px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#0A0A0A', textAlign: 'center', marginBottom: '8px' }}>What teams build with it</h2>
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#6B7280', marginBottom: '22px' }}>Same stack, different goals — in plain English.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {[
              ['More reliable assistant', 'Answers stay on-brand and follow your format, not the internet’s.'],
              ['Agents that do work', 'From “draft an email” to “book, pay, and confirm” — multi-step jobs.'],
              ['Your expert, cloned', 'Knows your products, rules, and language like your best person does.'],
              ['Code that ships', 'Fewer bugs, better reviews — trained on your codebase.'],
              ['Works with images/video', 'Understands what it sees and hears, not just text.'],
              ['Real-world actions', 'Connect training to robots, sensors, and physical tasks.'],
            ].map(([t, d]) => (
              <div key={t} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0A0A0A' }}>{t}</div>
                <div style={{ fontSize: '12.5px', color: '#6B7280', marginTop: '6px', lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation — simple promise */}
      <section data-theme="dark" style={{ background: '#0A0A0A', padding: 'clamp(48px, 7vw, 80px) clamp(20px, 4vw, 40px)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#fff', marginBottom: '10px' }}>If it didn’t get better, we don’t ship it.</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Every training run is tested before/after on your real tasks. we grade the homework. <span style={{ color: 'rgba(255,255,255,0.5)' }}>Technical: benchmarks, verifiers, regression suites — Task Success · Tool Use · Safety · Cost · Latency.</span></p>
          <div style={{ marginTop: '18px', display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Before', 'Train', 'Checkpoint', 'Test', 'Ship or Retry'].map((s, i) => (
              <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: i===3 ? '#0A0A0A' : 'rgba(255,255,255,0.7)', background: i===3 ? '#fff' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: '7px 12px', borderRadius: '999px', fontWeight: i===3?700:500 }}>{s} {i<4 && '→'}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for — two columns */}
      <section data-theme="light" style={{ background: '#F9FAFB', padding: 'clamp(48px, 7vw, 80px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#0A0A0A', textAlign: 'center', marginBottom: '22px' }}>Who it’s for</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {[
              { t: 'Founders & Product Teams', plain: 'You have a product idea — we make the model good enough to power it without you hiring a research lab.', tech: 'Focus on product, we own post-training infra.' },
              { t: 'Enterprise Teams', plain: 'Turn your private docs, workflows, and past decisions into a model that works like your best employee.', tech: 'Adapt open models to proprietary workflows & evals.' },
              { t: 'ML Engineers & Researchers', plain: 'Need control? Plug in your own training code — we provide data, envs, and scale.', tech: 'Custom objectives, LRs, optimizers, RL loops. Full-param or LoRA.' },
            ].map(c => (
              <div key={c.t} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '18px' }}>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#0A0A0A' }}>{c.t}</div>
                <div style={{ fontSize: '13px', color: '#374151', marginTop: '6px', lineHeight: 1.6 }}>{c.plain}</div>
                <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '8px', borderTop: '1px solid #F3F4F6', paddingTop: '8px' }}>{c.tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section data-theme="dark" style={{ background: '#0A0A0A', padding: 'clamp(56px, 8vw, 80px) clamp(20px, 4vw, 40px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)' }}>Data Foundry → Training → RL Lab → Evaluation → Deployment</p>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 400, letterSpacing: '-0.03em', color: '#fff', margin: '14px 0 18px' }}>Build the model your users will trust.</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '22px' }}>Business view: tell us what “better” means — we handle how to get there. <span style={{ color: 'rgba(255,255,255,0.85)' }}>Technical view: bring your model, we bring the loop.</span></p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#fff', color: '#0A0A0A', padding: '14px 24px', borderRadius: '999px', fontWeight: 700, textDecoration: 'none' }}>Start a training project →</Link>
            <Link to="/contact" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.14)', padding: '14px 24px', borderRadius: '999px', fontWeight: 500, textDecoration: 'none' }}>Get Started →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
