import { motion } from 'framer-motion';
import { useInView, useReducedMotion } from '@/hooks';
import { Calendar, Stethoscope, FlaskConical, HeartPulse, SmilePlus } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: '01',
    title: 'Book',
    emoji: '📅',
    icon: Calendar,
    desc: 'Schedule your appointment online or via helpline with the appropriate speciality department.',
    color: '#C0183E',
    bg: 'linear-gradient(135deg, #FFF1F4, #FFE4EA)',
    border: '#F9C0CC',
  },
  {
    number: '02',
    title: 'Consult',
    emoji: '👨‍⚕️',
    icon: Stethoscope,
    desc: 'Meet the clinical and surgical team for comprehensive evaluation and personalised health assessment.',
    color: '#1C3A6E',
    bg: 'linear-gradient(135deg, #EFF4FF, #DBE8FF)',
    border: '#C7D5F0',
  },
  {
    number: '03',
    title: 'Diagnose',
    emoji: '🔬',
    icon: FlaskConical,
    desc: 'Complete all recommended laboratory, imaging, and diagnostic tests on-site with fast results.',
    color: '#0891B2',
    bg: 'linear-gradient(135deg, #ECFEFF, #CFFAFE)',
    border: '#BAE6F7',
  },
  {
    number: '04',
    title: 'Treat',
    emoji: '💊',
    icon: HeartPulse,
    desc: 'Receive a personalised medical or surgical treatment plan tailored precisely to your condition.',
    color: '#7C3AED',
    bg: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)',
    border: '#DDD6FE',
  },
  {
    number: '05',
    title: 'Recover',
    emoji: '🌟',
    icon: SmilePlus,
    desc: 'Continue post-treatment follow-up, rehabilitation, and ongoing support until full recovery.',
    color: '#059669',
    bg: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
    border: '#A7F3D0',
  },
];

export function PatientJourney() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="patient-journey"
      ref={ref}
      className="section"
      aria-labelledby="journey-heading"
      style={{
        background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Subtle bg arc */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(28,58,110,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Your Care Journey</div>
          <h2 id="journey-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)', maxWidth: 640, margin: '0 auto 1rem',
          }}>
            What to Expect{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C0183E, #E11D48)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
            }}>Step by Step</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 600, marginInline: 'auto' }}>
            A structured, transparent patient pathway from initial consultation to complete recovery.
          </p>
        </motion.div>

        {/* Horizontal journey steps — desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'clamp(10px, 1.5vw, 18px)',
          position: 'relative',
        }}>
          {/* Connector line behind cards */}
          <div style={{
            position: 'absolute', top: 44, left: '10%', right: '10%', height: 2,
            background: 'linear-gradient(90deg, #F9C0CC, #C7D5F0, #BAE6F7, #DDD6FE, #A7F3D0)',
            zIndex: 0, borderRadius: 2,
          }} />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.11, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -6 }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                {/* Step circle */}
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: step.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontFamily: 'Fraunces, Georgia, serif',
                  fontWeight: 700, fontSize: '1.1rem',
                  boxShadow: `0 6px 20px ${step.color}40`,
                  margin: '0 auto 16px',
                  border: '4px solid white',
                }}>
                  {step.number}
                </div>

                {/* Step card */}
                <div style={{
                  padding: 'clamp(1rem, 2vw, 1.5rem)',
                  borderRadius: 22,
                  background: step.bg,
                  border: `1px solid ${step.border}`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  transition: 'box-shadow 280ms ease',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '10px' }}>{step.emoji}</div>
                  <h3 style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontSize: '1.15rem', fontWeight: 700,
                    color: '#0D1F3C', marginBottom: 8,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #patient-journey .journey-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
