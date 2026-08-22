import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function DataFoundryPage() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <SEO title="Data Foundry — Data for models that learn | SingleCore Labs" description="High-quality generative and post-training data for language, multimodal, agentic and physical AI — synthetic, instruction, preference, demonstrations, trajectories and evaluation, connected to Training and RL Lab in one loop." />
      <Navbar />

      {/* Hero */}
      <section data-theme="dark" style={{ position: 'relative', background: '#050505', padding: 'clamp(80px, 10vw, 110px) clamp(20px, 4vw, 40px) clamp(64px, 9vw, 96px)', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-40px', background: 'var(--gradient-muted)', filter: 'blur(28px)', opacity: 0.38, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>SingleCore Labs • Data Foundry</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5.5vw, 60px)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#fff', marginBottom: '14px' }}>
            Data for models<br /><span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>that learn.</span>
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', maxWidth: '640px', margin: '0 auto 22px' }}>
            Build the training data your models need to get better at the work that matters.
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#fff', color: '#0A0A0A', padding: '12px 20px', borderRadius: '999px', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>Build your dataset →</Link>
            <Link to="/contact" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', padding: '12px 20px', borderRadius: '999px', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>Get Started →</Link>
          </div>
        </div>
      </section>

      {/* Generate the data your model is missing */}
      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(48px, 7vw, 72px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto 28px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.4vw, 34px)', fontWeight: 500, letterSpacing: '-0.02em', color: '#0A0A0A' }}>Generate the data your model is missing</h2>
            <p style={{ fontSize: '14px', color: '#6B7280', marginTop: '8px' }}>The hardest training data is often the data that doesn’t exist yet. We create targeted datasets around the capability you want to improve.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {[
              { t: 'Synthetic Data', d: 'Large volumes of targeted examples for specific tasks, domains and edge cases.' },
              { t: 'Instruction Data', d: 'High-quality instructions and responses for SFT and instruction following.' },
              { t: 'Preference Data', d: 'Ranked responses and comparisons to teach which outputs are better.' },
              { t: 'Expert Demonstrations', d: 'High-quality examples from domain experts for specialized, high-stakes tasks.' },
              { t: 'Agent Trajectories', d: 'Sequences of observations, tool calls, actions and outcomes for agentic systems.' },
              { t: 'Evaluation Data', d: 'Difficult examples designed to expose weaknesses and measure improvement.' },
            ].map(c => (
              <div key={c.t} style={{ background: '#F9FAFB', border: '1px solid #E8E8E8', borderRadius: '14px', padding: '18px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0A0A0A', marginBottom: '6px' }}>{c.t}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6B7280' }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From generation to learning */}
      <section data-theme="dark" style={{ background: '#050505', padding: 'clamp(48px, 7vw, 72px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-20px', background: 'var(--gradient-muted)', filter: 'blur(24px)', opacity: 0.18, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: '#fff', marginBottom: '10px' }}>From generation to learning</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '22px' }}>Data is most valuable when it connects directly to training.</p>
          <div style={{ background: '#0A0A0A', borderRadius: '16px', padding: '20px', border: '1px solid rgba(255,255,255,0.08)', maxWidth: '420px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <div style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.8)', textAlign: 'center' }}>YOUR OBJECTIVE</div>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>↓</span>
            <div style={{ width: '100%', background: '#fff', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#0A0A0A' }}>DATA FOUNDRY</div>
              <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '4px', display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap' }}><span>Generate</span>•<span>Curate</span>•<span>Annotate</span>•<span>Verify</span></div>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>↓</span>
            <div style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px', fontSize: '11px', fontWeight: 700, color: '#fff', textAlign: 'center' }}>TRAINING DATA</div>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>↓</span>
            <div style={{ width: '100%', background: '#fff', borderRadius: '12px', padding: '10px', fontSize: '11px', fontWeight: 800, color: '#0A0A0A', textAlign: 'center' }}>TRAINING • SFT • DPO • RL</div>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>↓</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', width: '100%' }}>
              <div style={{ background: '#fff', borderRadius: '10px', padding: '10px', textAlign: 'center', fontSize: '11px', fontWeight: 800, color: '#16A34A', border: '1px solid #22C55E' }}>BETTER</div>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px', textAlign: 'center', fontSize: '11px', fontWeight: 800, color: '#F87171' }}>FAILURE</div>
            </div>
            <div style={{ width: '100%', display: 'flex', gap: '8px', marginTop: '4px' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)', alignSelf: 'center' }} />
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: '999px' }}>NEW DATA → TRAIN AGAIN</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)', alignSelf: 'center' }} />
            </div>
          </div>
          <p style={{ marginTop: '14px', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)' }}>Generate → Train → Evaluate → Improve</p>
        </div>
      </section>

      {/* Data built around your model */}
      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(48px, 7vw, 72px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: '#0A0A0A', textAlign: 'center', marginBottom: '8px' }}>Data built around your model</h2>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#6B7280', marginBottom: '22px' }}>Generic datasets teach generic behavior. We build around the capability you care about.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {[
              { t: 'Reasoning', d: 'Complex problems, structured solutions and difficult edge cases.' },
              { t: 'Coding', d: 'Code gen, debugging and repo-level software workflows.' },
              { t: 'Agents', d: 'Planning, tool calling and multi-step task completion.' },
              { t: 'Multimodal', d: 'Text, images, video, audio and cross-modal reasoning.' },
              { t: 'Domain Intelligence', d: 'Healthcare, finance and enterprise-specific workflows.' },
              { t: 'Physical AI', d: 'Human demos, visual observations and interaction data for robotics.' },
            ].map(c => (
              <div key={c.t} style={{ background: '#F9FAFB', border: '1px solid #E8E8E8', borderRadius: '14px', padding: '18px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0A0A0A', marginBottom: '6px' }}>{c.t}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6B7280' }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synthetic doesn't mean unchecked */}
      <section data-theme="dark" style={{ background: '#050505', padding: 'clamp(48px, 7vw, 72px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: '#fff', marginBottom: '8px' }}>Synthetic doesn’t mean unchecked</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '22px' }}>Generated data is only useful when it is reliable. Every batch is verified before it becomes training data.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '18px' }}>
            {['Generate', 'Validate', 'Filter', 'Verify', 'Score', 'Package', 'Train'].map((s, i) => (
              <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: i===6 ? '#0A0A0A' : 'rgba(255,255,255,0.75)', background: i===6 ? '#fff' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: '7px 12px', borderRadius: '999px' }}>{s} {i<6 && '→'}</span>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {['Correctness', 'Diversity', 'Difficulty', 'Consistency', 'Safety', 'Task Success'].map(t => (
              <span key={t} style={{ fontSize: '11px', padding: '5px 10px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Human intelligence where it matters */}
      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(48px, 7vw, 72px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: '#0A0A0A', marginBottom: '10px' }}>Human intelligence where it matters</h2>
          <p style={{ fontSize: '14px', color: '#6B7280', maxWidth: '640px', margin: '0 auto 20px' }}>Some capabilities can’t be generated reliably. For those, human experts provide demonstrations, rankings, corrections and failure analysis — then we turn that feedback into structured training signals.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {['Demonstrations', 'Preference rankings', 'Corrections', 'Domain judgments', 'Task verification', 'Failure analysis'].map(t => (
              <span key={t} style={{ fontSize: '12px', padding: '7px 12px', borderRadius: '999px', background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#374151' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Data for the post-training era */}
      <section data-theme="dark" style={{ background: '#0A0A0A', padding: 'clamp(48px, 7vw, 72px) clamp(20px, 4vw, 40px)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: '#fff', marginBottom: '12px' }}>Data for the post-training era</h2>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', marginBottom: '12px' }}>The next generation won’t improve on more generic tokens alone. Models need data that shows <strong style={{ color: '#fff' }}>what to do, how to do it, what good looks like, what went wrong, and how to recover.</strong></p>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>Data Foundry produces more than static datasets. It produces <strong style={{ color: '#fff' }}>learning signals.</strong></p>
        </div>
      </section>

      {/* Built for AI teams + What you receive */}
      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(48px, 7vw, 72px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: '#0A0A0A', textAlign: 'center', marginBottom: '22px' }}>Built for AI teams</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '36px' }}>
            {[
              { t: 'AI Startups', d: 'Create specialized datasets without building an internal data operation.' },
              { t: 'Model Developers', d: 'Generate training and preference data to improve open models.' },
              { t: 'Agent Companies', d: 'Build trajectories, tool-use examples and evaluation sets.' },
              { t: 'Enterprise Teams', d: 'Turn proprietary workflows into structured training data.' },
              { t: 'Robotics Companies', d: 'Create behavioral and multimodal data for physical AI.' },
            ].map(c => (
              <div key={c.t} style={{ background: '#F9FAFB', border: '1px solid #E8E8E8', borderRadius: '14px', padding: '18px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0A0A0A', marginBottom: '6px' }}>{c.t}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6B7280' }}>{c.d}</p>
              </div>
            ))}
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: '#0A0A0A', textAlign: 'center', marginBottom: '16px' }}>What you receive</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {[
              ['Training datasets', 'Ready for fine-tuning and post-training'],
              ['Synthetic datasets', 'Targeted generated examples with QC'],
              ['Preference datasets', 'Chosen/rejected pairs and rankings'],
              ['Demonstration datasets', 'Human task trajectories'],
              ['Agent trajectories', 'Observation → action → outcome'],
              ['Evaluation sets', 'Benchmarks and failure-focused tests'],
              ['Dataset documentation', 'Schema, provenance, metrics, splits'],
            ].map(([t, d]) => (
              <div key={t} style={{ background: '#F9FAFB', border: '1px solid #E8E8E8', borderRadius: '12px', padding: '14px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0A0A0A', flexShrink: 0 }} />
                <div><div style={{ fontSize: '13px', fontWeight: 600, color: '#0A0A0A' }}>{t}</div><div style={{ fontSize: '12px', color: '#6B7280' }}>{d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Foundry → Training → RL Lab */}
      <section data-theme="dark" style={{ background: '#050505', padding: 'clamp(48px, 7vw, 72px) clamp(20px, 4vw, 40px)', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-20px', background: 'var(--gradient-muted)', filter: 'blur(24px)', opacity: 0.18, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: '#fff', marginBottom: '18px' }}>Data Foundry → Training → RL Lab</h2>
          <div style={{ background: '#0A0A0A', borderRadius: '16px', padding: '20px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', maxWidth: '420px', margin: '0 auto' }}>
            <div style={{ width: '100%', background: '#fff', borderRadius: '10px', padding: '10px', fontSize: '12px', fontWeight: 800, color: '#0A0A0A', textAlign: 'center' }}>DATA FOUNDRY</div>
            <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px', fontSize: '11px', fontWeight: 700, color: '#fff', textAlign: 'center' }}>TRAINING DATA</div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px', fontSize: '11px', fontWeight: 700, color: '#fff', textAlign: 'center' }}>RL EXPERIENCE</div>
            </div>
            <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
              <div style={{ flex: 1, background: '#fff', borderRadius: '10px', padding: '10px', fontSize: '11px', fontWeight: 800, color: '#0A0A0A', textAlign: 'center' }}>TRAINING</div>
              <div style={{ flex: 1, background: '#fff', borderRadius: '10px', padding: '10px', fontSize: '11px', fontWeight: 800, color: '#0A0A0A', textAlign: 'center' }}>RL LAB</div>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>↓</span>
            <div style={{ width: '100%', background: '#fff', borderRadius: '10px', padding: '10px', fontSize: '12px', fontWeight: 800, color: '#0A0A0A', textAlign: 'center' }}>MODEL → EVALUATION → NEW SIGNALS → DATA FOUNDRY</div>
          </div>
          <p style={{ marginTop: '14px', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Data creates the signal. Training changes the model. RL creates experience. Evaluation tells you what to improve next.</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3.2vw, 32px)', fontWeight: 500, color: '#fff', margin: '20px 0 18px' }}>Build the data your model needs.</h3>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#fff', color: '#0A0A0A', padding: '12px 20px', borderRadius: '999px', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>Start a Data Foundry project →</Link>
            <Link to="/contact" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', padding: '12px 20px', borderRadius: '999px', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>Get Started →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
