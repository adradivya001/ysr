import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Stethoscope,
  Bone,
  UserCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
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
      case 'Bone':
        return Bone;
      case 'UserCheck':
        return UserCheck;
      case 'Stethoscope':
      default:
        return Stethoscope;
    }
  };

  const Icon = getIcon(activeSpec.iconName);

  return (
    <section id="specialities" ref={ref} className="section" aria-labelledby="spec-heading" style={{ background: '#F8FAFC', padding: 'clamp(3.5rem, 6vw, 5.5rem) 0' }}>
      <div className="container" style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', color: '#C0183E' }}>Our Specialities</div>
          <h2
            id="spec-heading"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              maxWidth: 680,
              margin: '0 auto',
            }}
          >
            Specialist Care Across{' '}
            <span style={{ color: '#C0183E', fontStyle: 'italic' }}>3 Core Departments</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.75rem', maxWidth: 600, marginInline: 'auto' }}>
            Comprehensive clinical and surgical departments equipped with modern facilities and led by experienced senior specialists.
          </p>
        </motion.div>

        {/* Layout: Sidebar Tabs (Left) + Detail Card (Right) */}
        <div className="spec-desktop" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28, alignItems: 'start' }}>
          
          {/* List panel */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
            style={{
              background: '#FFFFFF',
              borderRadius: 20,
              padding: 12,
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
            }}
            role="listbox"
            aria-label="Select a speciality"
          >
            {specialities.map((spec, i) => {
              const SpecIcon = getIcon(spec.iconName);
              const isActive = active === i;
              return (
                <div
                  key={spec.slug}
                  role="option"
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActive(i);
                  }}
                  className={`spec-list-item ${isActive ? 'active' : ''}`}
                  style={{
                    padding: '14px 16px',
                    borderRadius: 14,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    marginBottom: 8,
                    background: isActive ? '#C0183E' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#1E293B',
                    boxShadow: isActive ? '0 4px 14px rgba(192,24,62,0.3)' : 'none',
                    transition: 'all 200ms ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: isActive ? 'rgba(255,255,255,0.18)' : '#F1F5F9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? '#FFFFFF' : '#C0183E',
                        flexShrink: 0,
                      }}
                    >
                      <SpecIcon size={18} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? '#FFFFFF' : '#1E293B',
                      }}
                    >
                      {spec.name}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    color={isActive ? '#FFFFFF' : '#94A3B8'}
                    style={{ opacity: isActive ? 1 : 0.6, flexShrink: 0 }}
                  />
                </div>
              );
            })}
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
                  background: '#FFFFFF',
                  borderRadius: 24,
                  padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #C0183E 0%, #1C3A6E 50%, #0891B2 100%)',
                    borderRadius: '24px 24px 0 0',
                  }}
                />

                {/* Icon Box */}
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, #C0183E, #96122F)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    boxShadow: '0 8px 20px rgba(192,24,62,0.25)',
                    color: '#FFFFFF',
                  }}
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.75rem' }}>
                  <h3
                    style={{
                      fontFamily: 'Fraunces, Georgia, serif',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                      fontWeight: 700,
                      color: '#0F172A',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {activeSpec.name}
                  </h3>
                  <span style={{ fontSize: '1.75rem' }}>{activeSpec.emoji}</span>
                </div>

                {/* Description */}
                <p style={{ color: '#475569', lineHeight: 1.75, marginBottom: '1.75rem', fontSize: '0.98rem' }}>
                  {activeSpec.longDesc || activeSpec.shortDesc}
                </p>

                {/* Key Treatments */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 750,
                      color: '#1E293B',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    KEY TREATMENTS & PROCEDURES
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
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 750,
                      color: '#1E293B',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    CONDITIONS TREATED
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
                    {activeSpec.conditionsTreated.map((cd) => (
                      <div key={cd} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', color: '#475569' }}>
                        <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0 }} />
                        <span>{cd}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <a
                  href="/#appointment"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    background: 'linear-gradient(135deg, #C0183E 0%, #96122F 100%)',
                    boxShadow: '0 6px 18px rgba(192,24,62,0.3)',
                  }}
                >
                  <span>Book Consultation for {activeSpec.name}</span>
                  <ArrowRight size={16} />
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
