import { motion } from 'framer-motion';
import { BedDouble, MapPin, Stethoscope, Users, CheckCircle2, HeartPulse, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';
import { siteConfig } from '@/content/site.config';

const EASE = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    icon: Stethoscope,
    label: '13 Specialities',
    desc: 'Medical & surgical departments under one roof',
    color: '#C0183E',
    bg: 'linear-gradient(135deg, #FFF1F4, #FFE4EA)',
    border: '#F9C0CC',
  },
  {
    icon: ShieldCheck,
    label: 'Safe & Trusted',
    desc: 'Rigorous protocols for patient safety & hygiene',
    color: '#1C3A6E',
    bg: 'linear-gradient(135deg, #EFF4FF, #DBE8FF)',
    border: '#C7D5F0',
  },
  {
    icon: MapPin,
    label: 'Sai Nagar Location',
    desc: '1st Cross Road, Ashok Nagar, Anantapur',
    color: '#059669',
    bg: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
    border: '#A7F3D0',
  },
  {
    icon: Award,
    label: 'Quality Healthcare',
    desc: 'Modern diagnostic and treatment infrastructure',
    color: '#D97706',
    bg: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)',
    border: '#FDE68A',
  },
];

const highlights = [
  'Multispeciality Medical Care',
  'Surgical & Critical Care Support',
  '24/7 Emergency Services',
  'Advanced Diagnostic Services',
  'Patient-Centred Care',
  'Comprehensive Treatment Facilities',
];

export function About() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      ref={ref}
      className="section"
      aria-labelledby="about-heading"
      style={{
        background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Subtle background blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-15%', left: '-8%',
          width: '550px', height: '550px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,24,62,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
      </div>

      <div className="container" style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)', position: 'relative', zIndex: 1 }}>
        <div className="grid-2">
          {/* ── Left Column ─────────────────────────────────────────── */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="section-label">About the Hospital</div>
            <h2 id="about-heading" style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700,
              lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: '1.25rem',
            }}>
              Healthcare Built{' '}
              <span style={{
                background: 'linear-gradient(135deg, #C0183E, #E11D48)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Around People</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text)' }}>Dr. YSR Memorial Hospital</strong> is a multispeciality healthcare facility located in Sai Nagar, Anantapur, offering a broad range of medical and surgical services under one roof.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              Our approach combines experienced clinical care, modern medical facilities and patient-focused services to support individuals through diagnosis, treatment and recovery.
            </p>

            {/* Highlights Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '2rem' }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05, ease: EASE }}
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10B981, #059669)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(16,185,129,0.25)',
                  }}>
                    <CheckCircle2 size={12} color="white" />
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>{h}</span>
                </motion.div>
              ))}
            </div>

            {/* 4 Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {pillars.map(({ icon: Icon, label, desc, color, bg, border }, i) => (
                <motion.div
                  key={label}
                  initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.4 + i * 0.08, ease: EASE }}
                  whileHover={reducedMotion ? {} : { y: -3 }}
                  style={{
                    padding: '14px 16px', borderRadius: 18,
                    background: bg, border: `1px solid ${border}`,
                    boxShadow: '0 3px 12px rgba(0,0,0,0.04)',
                    transition: 'box-shadow 280ms, transform 280ms',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 10,
                      background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      boxShadow: `0 4px 12px ${color}33`,
                    }}>
                      <Icon size={15} color="white" />
                    </div>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text)' }}>{label}</span>
                  </div>
                  <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column: Premium Navy Quote Card ─────────────── */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ position: 'relative' }}
          >
            {/* Main navy quote card */}
            <div style={{
              borderRadius: 32, overflow: 'hidden',
              background: 'linear-gradient(155deg, #1C3A6E 0%, #142C54 55%, #0A1E3D 100%)',
              color: 'white',
              padding: 'clamp(2rem, 4.5vw, 3.5rem)',
              boxShadow: '0 20px 60px rgba(28,58,110,0.30), 0 4px 16px rgba(0,0,0,0.10)',
              position: 'relative',
            }}>
              {/* Internal glow */}
              <div style={{
                position: 'absolute', top: 0, right: 0, width: '60%', height: '50%',
                background: 'radial-gradient(circle, rgba(192,24,62,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Icon chip */}
              <div style={{
                width: 50, height: 50, borderRadius: 14,
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.75rem',
              }}>
                <HeartPulse size={26} color="#F9C0CC" />
              </div>

              {/* Quote */}
              <blockquote style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                fontWeight: 600, lineHeight: 1.55,
                color: '#EEF4FF', marginBottom: '2rem',
                fontStyle: 'italic',
              }}>
                "Our commitment is to provide compassionate healthcare, advanced surgical treatments, and reliable patient outcomes for every family in Anantapur."
              </blockquote>

              {/* Stats strip inside card */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: '2rem',
              }}>
                {[
                  { label: 'Specialities', value: '13+' },
                  { label: 'Departments', value: '8+' },
                  { label: 'Emergency', value: '24/7' },
                  { label: 'Location', value: 'Anantapur' },
                ].map(({ label, value }) => (
                  <div key={label} style={{
                    padding: '12px 14px', borderRadius: 14,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(8px)',
                  }}>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.4rem', fontWeight: 700, color: '#F9C0CC', lineHeight: 1 }}>
                      {value}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#8DAACB', marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom action row */}
              <div style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
              }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#8DAACB', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Helpline & Appointments
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', marginTop: '3px' }}>
                    {siteConfig.phoneDisplay}
                  </div>
                </div>

                <a
                  href="/#appointment"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    padding: '11px 20px', borderRadius: 14,
                    background: 'linear-gradient(135deg, #C0183E, #96122F)',
                    color: 'white', fontWeight: 700, fontSize: '0.9rem',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(192,24,62,0.35)',
                    transition: 'transform 200ms, box-shadow 200ms',
                  }}
                >
                  <span>Consult Now</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Floating accent card below */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              style={{
                marginTop: 16,
                padding: '16px 20px',
                borderRadius: 18,
                background: 'white',
                border: '1px solid #E3E8F0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                display: 'flex', alignItems: 'center', gap: 14,
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'linear-gradient(135deg, #FFF1F4, #FFE4EA)',
                border: '1px solid #F9C0CC',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Users size={20} color="#C0183E" />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0D1F3C' }}>
                  Patient-First Philosophy
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>
                  Every treatment decision is made with care, empathy & expertise
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
