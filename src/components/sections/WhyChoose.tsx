import { motion } from 'framer-motion';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const whyItems = [
  {
    number: '01',
    title: 'Multispeciality Care',
    desc: 'Access 13 medical and surgical specialties in one comprehensive healthcare facility.',
    color: '#C0183E',
    gradient: 'linear-gradient(135deg, #FFF1F4, #FFE4EA)',
    border: '#F9C0CC',
    emoji: '🏥',
  },
  {
    number: '02',
    title: 'Comprehensive Services',
    desc: 'From routine consultation and lab diagnosis to complex surgery and post-operative recovery.',
    color: '#1C3A6E',
    gradient: 'linear-gradient(135deg, #EFF4FF, #DBE8FF)',
    border: '#C7D5F0',
    emoji: '⚕️',
  },
  {
    number: '03',
    title: '24/7 Emergency Support',
    desc: 'Round-the-clock emergency medical services with immediate triage and expert surgical coverage.',
    color: '#0891B2',
    gradient: 'linear-gradient(135deg, #ECFEFF, #CFFAFE)',
    border: '#BAE6F7',
    emoji: '🚑',
  },
  {
    number: '04',
    title: 'Patient-Focused Approach',
    desc: 'Designed around clear communication, accessible care, empathetic nursing and patient comfort.',
    color: '#D97706',
    gradient: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)',
    border: '#FDE68A',
    emoji: '💛',
  },
  {
    number: '05',
    title: 'Integrated Diagnostics',
    desc: 'Advanced diagnostic imaging helps our clinicians make prompt, accurate treatment decisions.',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
    border: '#A7F3D0',
    emoji: '🔬',
  },
];

export function WhyChoose() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="why-choose"
      ref={ref}
      className="section"
      aria-labelledby="why-heading"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Decorative background arcs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-8%',
          width: '480px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,24,62,0.05) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '-8%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(28,58,110,0.05) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />
      </div>

      <div className="container" style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4.5vw, 4rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
          <h2 id="why-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)',
            maxWidth: 620, margin: '0 auto 1rem',
          }}>
            Five Reasons to Trust{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C0183E, #E11D48)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Your Care to Us
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560, marginInline: 'auto' }}>
            Healthcare built around patients with reliable medical expertise and compassionate clinical attention.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(14px, 2vw, 22px)' }}>
          {whyItems.map((item, i) => (
            <motion.div
              key={item.number}
              initial={reducedMotion ? false : { opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.10, ease: EASE }}
              whileHover={reducedMotion ? {} : { y: -6 }}
              style={{ cursor: 'default' }}
            >
              <div style={{
                background: item.gradient,
                borderRadius: 24, padding: 'clamp(1.5rem, 3vw, 2rem)',
                border: `1px solid ${item.border}`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                height: '100%',
                transition: 'box-shadow 300ms ease',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>
                {/* Top accent stripe */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: item.color, borderRadius: '24px 24px 0 0',
                }} />

                {/* Emoji + Number chip */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, marginTop: 4 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: item.color, color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.88rem', fontWeight: 800, flexShrink: 0,
                    boxShadow: `0 5px 15px ${item.color}40`,
                  }}>
                    {item.number}
                  </div>
                  <span style={{ fontSize: '1.5rem' }}>{item.emoji}</span>
                </div>

                <h3 style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)',
                  fontWeight: 700, color: '#0D1F3C', marginBottom: 10, lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#4B5563', lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
