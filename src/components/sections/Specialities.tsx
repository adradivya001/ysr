import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Stethoscope,
  Scissors,
  HeartPulse,
  Bone,
  Baby,
  UserCheck,
  Brain,
  Wind,
  Headphones,
  Activity,
  ShieldAlert,
  Sparkles,
  Crosshair,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { specialities } from '@/content/specialities';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Specialities() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();
  const activeSpec = specialities[active] || specialities[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Scissors': return Scissors;
      case 'HeartPulse': return HeartPulse;
      case 'Bone': return Bone;
      case 'Baby': return Baby;
      case 'UserCheck': return UserCheck;
      case 'Brain': return Brain;
      case 'Wind': return Wind;
      case 'Headphones': return Headphones;
      case 'Activity': return Activity;
      case 'ShieldAlert': return ShieldAlert;
      case 'Sparkles': return Sparkles;
      case 'Crosshair': return Crosshair;
      default: return Stethoscope;
    }
  };

  const Icon = getIcon(activeSpec.iconName);

  return (
    <section id="specialities" ref={ref} className="section" aria-labelledby="spec-heading" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Specialities</div>
          <h2 id="spec-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 640, margin: '0 auto',
          }}>
            Specialist Care Across{' '}
            <span style={{ color: 'var(--navy)', fontStyle: 'italic' }}>13 Areas</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.75rem', maxWidth: 600, marginInline: 'auto' }}>
            Comprehensive clinical and surgical departments equipped with modern diagnostics and compassionate medical teams.
          </p>
        </motion.div>

        {/* Desktop Layout (List Left + Detail Right) */}
        <div className="spec-desktop" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28, alignItems: 'start' }}>
          
          {/* List panel */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
            style={{
              background: 'white',
              borderRadius: 22,
              padding: 10,
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
              maxHeight: '620px',
              overflowY: 'auto',
            }}
            role="listbox" aria-label="Select a speciality"
          >
            {specialities.map((spec, i) => (
              <div
                key={spec.slug}
                role="option" aria-selected={active === i}
                tabIndex={0}
                onClick={() => setActive(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActive(i); }}
                className={`spec-list-item ${active === i ? 'active' : ''}`}
                style={{
                  padding: '11px 14px',
                  borderRadius: 12,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 10,
                  marginBottom: 4,
                  background: active === i ? '#C0183E' : 'transparent',
                  color: active === i ? '#FFFFFF' : '#111827',
                  transition: 'all 150ms ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>{spec.emoji}</span>
                  <span className="spec-name" style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: active === i ? '#FFFFFF' : '#111827',
                  }}>
                    {spec.name}
                  </span>
                </div>
                <ChevronRight size={15} color={active === i ? 'white' : '#C0183E'} style={{ opacity: active === i ? 0.9 : 0.4, flexShrink: 0 }} />
              </div>
            ))}
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
            style={{ position: 'sticky', top: 90 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: EASE }}
                style={{
                  background: 'white', borderRadius: 28,
                  padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Top accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #C0183E, #1C3A6E, #0891B2)', borderRadius: '28px 28px 0 0' }} />

                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: 'linear-gradient(135deg, #C0183E, #96122F)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem', boxShadow: '0 8px 24px rgba(192,24,62,0.25)',
                  color: '#FFFFFF',
                }}>
                  <Icon size={28} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 700, color: 'var(--text)', margin: 0, lineHeight: 1.2 }}>
                    {activeSpec.name}
                  </h3>
                  <span style={{ fontSize: '1.8rem' }}>{activeSpec.emoji}</span>
                </div>

                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.98rem' }}>
                  {activeSpec.longDesc || activeSpec.shortDesc}
                </p>

                {/* Key Treatments */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                    Key Treatments & Procedures
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {activeSpec.keyTreatments.map((tr) => (
                      <span
                        key={tr}
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          padding: '6px 12px',
                          borderRadius: '8px',
                          background: '#FFF0F3',
                          border: '1px solid #F9C0CC',
                          color: '#C0183E',
                        }}
                      >
                        {tr}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conditions Treated */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                    Conditions Treated
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 8 }}>
                    {activeSpec.conditionsTreated.map((cd) => (
                      <div key={cd} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', color: '#4B5563' }}>
                        <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0 }} />
                        <span>{cd}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <a
                  href="/#appointment"
                  onClick={() => {
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    borderRadius: '12px',
                  }}
                >
                  <span>Book Consultation for {activeSpec.name}</span>
                  <ArrowRight size={15} />
                </a>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .spec-desktop { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
