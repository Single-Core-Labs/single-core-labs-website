import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function RLEnvironmentsPage() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <SEO
        title="RL Lab — Post-training for models that need to do more | Single Core Labs"
        description="RL Lab helps AI companies and startups train, post-train, and improve models and agents for real-world tasks — environments, data, rewards, training, evaluation."
        keywords="rl lab, post-training, reinforcement learning, single core labs"
      />
      <Navbar />

      {/* Hero */}
      <section data-theme="dark" style={{ position: 'relative', background: '#050505', padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 40px) clamp(72px, 9vw, 110px)', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-40px', background: 'var(--gradient-muted)', filter: 'blur(28px)', opacity: 0.42, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>SingleCore Labs • RL Lab</p>
          <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(36px, 5.5vw, 62px)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#fff', marginBottom: '20px' }}>
            Make models<br />
            <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>do more.</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.62)', maxWidth: '760px', margin: '0 auto 16px' }}>
            RL Lab helps AI companies and startups <strong style={{ color: '#fff', fontWeight: 600 }}>train, post-train, and improve models and agents</strong> for real-world tasks.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', maxWidth: '760px', margin: '0 auto 12px' }}>
            We build the environments, data, reward systems, training pipelines, and evaluations required to turn capable base models into systems that perform reliably on the tasks they were built for.
          </p>
          <p style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.04em', color: '#fff', marginBottom: '28px' }}>Train better. Evaluate harder. Deploy with confidence.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#FFFFFF', color: '#0A0A0A', padding: '14px 24px', borderRadius: '999px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Build with RL Lab →</Link>
            <a href="#capable" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.14)', padding: '14px 24px', borderRadius: '999px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>Explore capabilities ↓</a>
          </div>
        </div>
      </section>

      {/* From capable models to capable agents */}
      <section id="capable" data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(64px, 8vw, 96px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto 36px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(28px, 3.8vw, 42px)', fontWeight: 400, letterSpacing: '-0.03em', color: '#0A0A0A', marginBottom: '12px' }}>From capable models to capable agents</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#6B7280' }}>Pre-trained models already know a lot.</p>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#0A0A0A', fontWeight: 500, marginTop: '8px' }}>The challenge is teaching them how to perform a specific task, use tools, follow complex objectives, and improve from experience.</p>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: '#6B7280', marginTop: '8px' }}>That's where post-training comes in. RL Lab helps teams build the learning layer around their models and agents.</p>
          </div>

          <div style={{ background: '#0A0A0A', borderRadius: '16px', padding: 'clamp(20px, 3vw, 28px)', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(520px circle at 50% 0%, rgba(90,90,108,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', maxWidth: '420px', margin: '0 auto' }}>
              <div style={{ width: '100%', background: '#FFFFFF', borderRadius: '12px', padding: '14px', textAlign: 'center', border: '1px solid #E8E8E8' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0A0A0A', letterSpacing: '0.04em' }}>BASE MODEL</div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>↓</span>
              <div style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px', textAlign: 'center', backdropFilter: 'blur(12px)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff', marginBottom: '8px', letterSpacing: '0.04em' }}>POST-TRAINING</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                  {['Data', 'Demonstrations', 'Rewards', 'RL', 'Preferences'].map((t) => (
                    <span key={t} style={{ fontSize: '11px', padding: '4px 8px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)' }}>{t}</span>
                  ))}
                </div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>↓</span>
              <div style={{ width: '100%', background: '#FFFFFF', borderRadius: '12px', padding: '14px', textAlign: 'center', border: '1px solid #E8E8E8' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0A0A0A' }}>TRAINED AGENT</div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>↓</span>
              <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>EVALUATION</div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>FEEDBACK</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '999px' }}>IMPROVEMENT → POST-TRAINING</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we help you train */}
      <section data-theme="dark" style={{ background: '#050505', padding: 'clamp(64px, 8vw, 96px) clamp(20px, 4vw, 40px)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-20px', background: 'var(--gradient-muted)', filter: 'blur(24px)', opacity: 0.18, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(26px, 3.6vw, 40px)', fontWeight: 400, letterSpacing: '-0.03em', color: '#fff', textAlign: 'center', marginBottom: '32px' }}>What we help you train</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {[
              { t: 'Agentic Models', d: 'Improve models that need to reason over multiple steps, use tools, plan, and complete complex objectives.' },
              { t: 'Computer-Use Agents', d: 'Train agents to operate websites, applications, desktop environments, and digital workflows.' },
              { t: 'Tool-Using Models', d: 'Improve models that interact with APIs, databases, MCP tools, and enterprise systems.' },
              { t: 'Domain-Specific Models', d: 'Post-train models for specialized knowledge, behavior, workflows, and operational requirements.' },
              { t: 'Reasoning Systems', d: 'Train systems to improve their ability to plan, verify, solve complex problems, and work through long-horizon tasks.' },
              { t: 'Physical AI', d: 'Develop post-training and learning systems for agents operating in simulations and physical environments.' },
            ].map((c) => (
              <div key={c.t} style={{ background: '#FFFFFF', border: '1px solid #E8E8E8', borderRadius: '16px', padding: '20px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#0A0A0A', marginBottom: '8px' }}>{c.t}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6B7280' }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Post-Training Stack */}
      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(64px, 8vw, 96px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(26px, 3.6vw, 40px)', fontWeight: 400, letterSpacing: '-0.03em', color: '#0A0A0A', textAlign: 'center', marginBottom: '12px' }}>Our Post-Training Stack</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '32px' }}>
            {[
              { n: '01', t: 'Data', d: 'We create the training signals required for post-training:', tags: ['Demonstrations', 'Trajectories', 'Preferences', 'Synthetic Data', 'Interaction Data', 'Evaluation Data'] },
              { n: '02', t: 'Environments', d: 'We create controlled environments where agents can repeatedly perform tasks and learn from outcomes.', tags: ['Web', 'Desktop', 'APIs', 'MCP', 'Simulations', 'Robotics'] },
              { n: '03', t: 'Rewards', d: 'We turn objectives into measurable learning signals.', tags: ['Reward Models', 'Programmatic Rewards', 'Verifiers', 'Human Feedback', 'AI Feedback'] },
              { n: '04', t: 'Reinforcement Learning', d: 'We apply reinforcement learning and related post-training methods to improve model and agent behavior.', tags: [] },
              { n: '05', t: 'Evaluation', d: 'We continuously measure whether the model actually improved.', tags: ['Task Success', 'Reliability', 'Generalization', 'Tool Use', 'Reasoning', 'Long-Horizon'] },
            ].map((s) => (
              <div key={s.n} style={{ background: '#F9FAFB', border: '1px solid #E8E8E8', borderRadius: '16px', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: '#9CA3AF', marginBottom: '8px' }}>{s.n}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#0A0A0A', marginBottom: '8px' }}>{s.t}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6B7280', marginBottom: s.tags.length ? '12px' : 0 }}>{s.d}</p>
                {s.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {s.tags.map((t) => (
                      <span key={t} style={{ fontSize: '11px', padding: '4px 8px', borderRadius: '999px', background: '#FFFFFF', border: '1px solid #E8E8E8', color: '#374151' }}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The post-training loop */}
      <section data-theme="dark" style={{ background: '#050505', padding: 'clamp(64px, 8vw, 96px) clamp(20px, 4vw, 40px)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-20px', background: 'var(--gradient-muted)', filter: 'blur(24px)', opacity: 0.2, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#fff', marginBottom: '24px' }}>The post-training loop</h2>
          <div style={{ background: '#0A0A0A', borderRadius: '16px', padding: 'clamp(20px, 3vw, 28px)', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(480px circle at 50% 0%, rgba(90,90,108,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', maxWidth: '360px', margin: '0 auto' }}>
              {['BASE MODEL', 'DATA', 'ENVIRONMENT', 'AGENT', 'REWARD + FEEDBACK', 'RL / POST-TRAIN', 'EVALUATION'].map((label, i) => (
                <div key={label} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '100%', background: i === 0 || i === 3 ? '#FFFFFF' : 'rgba(255,255,255,0.06)', border: `1px solid ${i === 0 || i === 3 ? '#E8E8E8' : 'rgba(255,255,255,0.08)'}`, borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: i === 0 || i === 3 ? '#0A0A0A' : '#fff', letterSpacing: '0.04em' }}>{label}</div>
                    {label === 'AGENT' && <div style={{ fontSize: '11px', color: i === 3 ? '#6B7280' : 'rgba(255,255,255,0.5)', marginTop: '2px' }}>ACTION ↓</div>}
                  </div>
                  {i < 6 && <span style={{ color: 'rgba(255,255,255,0.25)' }}>↓</span>}
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '999px' }}>IMPROVE →</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              </div>
            </div>
          </div>
          <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>The model enters the loop. The learning system makes it better.</p>
        </div>
      </section>

      {/* Built around your model */}
      <section data-theme="light" style={{ background: '#F9FAFB', padding: 'clamp(64px, 8vw, 96px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#0A0A0A', marginBottom: '12px' }}>Built around your model</h2>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#6B7280', maxWidth: '640px', margin: '0 auto 8px' }}>Every model has different strengths, weaknesses, and objectives.</p>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#6B7280', maxWidth: '640px', margin: '0 auto 20px' }}>We don't assume the same post-training recipe works for every system.</p>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#0A0A0A', marginBottom: '20px' }}>We design the learning setup around:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', maxWidth: '560px', margin: '0 auto 20px' }}>
            {['Your model', 'Your task', 'Your data', 'Your environment', 'Your success criteria'].map((t) => (
              <span key={t} style={{ fontSize: '13px', fontWeight: 600, padding: '8px 14px', borderRadius: '999px', background: '#0A0A0A', color: '#fff' }}>{t}</span>
            ))}
          </div>
          <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#6B7280', maxWidth: '560px', margin: '0 auto' }}>This allows teams to focus on their product while RL Lab builds the learning infrastructure required to improve it.</p>
        </div>
      </section>

      {/* From workflow to training environment */}
      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(64px, 8vw, 96px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#0A0A0A', marginBottom: '24px' }}>From workflow to training environment</h2>
          <p style={{ fontSize: '13.5px', color: '#6B7280', marginBottom: '20px' }}>A company's most valuable AI training data often comes from the tasks it wants its agents to perform. We can transform those workflows into structured training and evaluation environments.</p>
          <div style={{ background: '#0A0A0A', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(480px circle at 50% 0%, rgba(90,90,108,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', maxWidth: '320px', margin: '0 auto' }}>
              {['YOUR PRODUCT / WORKFLOW', 'TASK DEFINITION', 'DATA + DEMOS', 'RL ENVIRONMENT', 'AI AGENT', 'ACTION + OUTCOME', 'REWARD + FEEDBACK', 'POST-TRAINING', 'EVALUATION'].map((label, i) => (
                <div key={label} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '100%', background: i === 0 ? '#FFFFFF' : i === 4 ? '#FFFFFF' : 'rgba(255,255,255,0.06)', border: `1px solid ${i === 0 || i === 4 ? '#E8E8E8' : 'rgba(255,255,255,0.08)'}`, borderRadius: '10px', padding: '10px', textAlign: 'center', fontSize: '11px', fontWeight: 700, color: i === 0 || i === 4 ? '#0A0A0A' : '#fff', letterSpacing: '0.03em' }}>{label}</div>
                  {i < 8 && <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>↓</span>}
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '999px' }}>IMPROVEMENT →</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section data-theme="dark" style={{ background: '#050505', padding: 'clamp(64px, 8vw, 96px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-20px', background: 'var(--gradient-muted)', filter: 'blur(24px)', opacity: 0.18, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(26px, 3.6vw, 40px)', fontWeight: 400, letterSpacing: '-0.03em', color: '#fff', textAlign: 'center', marginBottom: '32px' }}>Who we work with</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {[
              { t: 'AI Startups', d: 'You have a strong model or agent but need the infrastructure and expertise to push its performance further.' },
              { t: 'Model Builders', d: 'You need post-training, preference optimization, reinforcement learning, or evaluation systems around your models.' },
              { t: 'Enterprise AI Teams', d: 'You want AI agents to reliably perform proprietary workflows and operate within your systems.' },
              { t: 'Robotics & Physical AI Companies', d: 'You need environments, behavioral data, simulation, and learning systems for embodied agents.' },
              { t: 'Research Teams', d: 'You are exploring new approaches to reasoning, agentic learning, reinforcement learning, or model post-training.' },
            ].map((c) => (
              <div key={c.t} style={{ background: '#FFFFFF', border: '1px solid #E8E8E8', borderRadius: '16px', padding: '20px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#0A0A0A', marginBottom: '8px' }}>{c.t}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6B7280' }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What RL Lab can provide */}
      <section data-theme="light" style={{ background: '#FFFFFF', padding: 'clamp(64px, 8vw, 96px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 400, letterSpacing: '-0.02em', color: '#0A0A0A', textAlign: 'center', marginBottom: '24px' }}>What RL Lab can provide</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            {[
              { t: 'Post-training pipelines', d: 'Custom training workflows for improving model and agent behavior.' },
              { t: 'RL environments', d: 'Controlled environments for repeated interaction and learning.' },
              { t: 'Training data', d: 'Demonstrations, trajectories, synthetic experiences, preferences, and task data.' },
              { t: 'Reward systems', d: 'Programmatic verifiers, reward models, human feedback, and AI feedback.' },
              { t: 'Evaluation', d: 'Benchmarks and continuous testing to measure whether training actually works.' },
              { t: 'Training infrastructure', d: 'The systems required to run experiments and scale post-training workloads.' },
            ].map((c) => (
              <div key={c.t} style={{ background: '#F9FAFB', border: '1px solid #E8E8E8', borderRadius: '12px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0A0A0A', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#0A0A0A' }}>{c.t}</div>
                  <div style={{ fontSize: '12.5px', color: '#6B7280' }}>{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section data-theme="dark" style={{ background: '#0A0A0A', padding: 'clamp(64px, 8vw, 96px) clamp(20px, 4vw, 40px)', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto 8px', lineHeight: 1.6 }}>Better models are not always the answer.</p>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)', maxWidth: '560px', margin: '0 auto 12px', lineHeight: 1.6 }}>Sometimes the model already has the capability. It simply hasn't learned <strong style={{ color: '#fff' }}>how to use it.</strong></p>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>RL Lab helps close that gap.</p>
        <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, letterSpacing: '-0.03em', color: '#fff', margin: '24px 0 28px' }}>Train the behavior. Improve the agent.</h2>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{ background: '#FFFFFF', color: '#0A0A0A', padding: '14px 24px', borderRadius: '999px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', gap: '8px' }}>Talk to RL Lab →</Link>
          <Link to="/contact" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.14)', padding: '14px 24px', borderRadius: '999px', fontWeight: 500, textDecoration: 'none' }}>Start a Post-Training Project →</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
