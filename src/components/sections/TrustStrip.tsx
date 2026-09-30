import { motion } from 'framer-motion';
import { Stethoscope, Activity, Clock, MapPin, Award, Users, HeartPulse, ShieldCheck } from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  {
    icon: Stethoscope,
    number: '13+',
    label: 'Medical Specialities',
    sub: 'Medicine, Surgery, OBG, Cardio & more',
    color: '#C0183E',
    bg: 'linear-gradient(135deg, #FFF1F4 0%, #FFE4EA 100%)',
    border: '#F9C0CC',
    iconBg: '#C0183E',
    targetId: 'specialities',
  },
  {
    icon: Activity,
    number: '24/7',
    label: 'Emergency & Diagnostics',
    sub: 'Lab, Digital X-Ray, ECG & 2D Echo on site',
    color: '#1C3A6E',
    bg: 'linear-gradient(135deg, #EFF4FF 0%, #DBE8FF 100%)',
    border: '#C7D5F0',
    iconBg: '#1C3A6E',
    targetId: 'diagnostics',
  },
  {
    icon: HeartPulse,
    number: '5000+',
    label: 'Patients Served',
    sub: 'Trusted by families across Anantapur district',
    color: '#0891B2',
    bg: 'linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)',
    border: '#BAE6F7',
    iconBg: '#0891B2',
    targetId: 'about',
  },
  {
    icon: MapPin,
    number: 'A+',
    label: 'Sai Nagar Facility',
    sub: '1st Cross Road, Ashok Nagar, Anantapur',
    color: '#059669',
    bg: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
    border: '#A7F3D0',
    iconBg: '#059669',
    targetId: 'contact',
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function TrustStrip() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      id="trust-strip"
      aria-label="Hospital key statistics"
      style={{
        padding: 'clamp(2.5rem, 4vw, 4rem) 0',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)',
        borderBottom: '1px solid #E3E8F0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background decoration */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-40%', right: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(192,24,62,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-40%', left: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(28,58,110,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
      </div>

      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>At a Glance</div>
          <h2 style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700, lineHeight: 1.2, color: 'var(--text)',
            letterSpacing: '-0.02em',
          }}>
            Why Patients Choose{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C0183E, #E11D48)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Dr. YSR Memorial</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(14px, 2vw, 20px)',
        }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09, ease: EASE }}
                onClick={() => scrollTo(stat.targetId)}
                whileHover={reducedMotion ? {} : { y: -5, scale: 1.015 }}
                style={{ cursor: 'pointer' }}
              >
                <div style={{
                  padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  borderRadius: 22,
                  background: stat.bg,
                  border: `1px solid ${stat.border}`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  transition: 'box-shadow 300ms ease',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Decorative corner arc */}
                  <div style={{
                    position: 'absolute', top: -20, right: -20,
                    width: 80, height: 80, borderRadius: '50%',
                    background: `${stat.color}10`,
                    border: `1.5px solid ${stat.color}20`,
                  }} />

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    {/* Icon */}
                    <div style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: stat.iconBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      boxShadow: `0 6px 18px ${stat.color}33`,
                    }}>
                      <Icon size={22} color="white" />
                    </div>

                    <div>
                      {/* Large stat number */}
                      <div style={{
                        fontFamily: 'Fraunces, Georgia, serif',
                        fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                        fontWeight: 700, lineHeight: 1,
                        color: stat.color,
                        marginBottom: '4px',
                        letterSpacing: '-0.03em',
                      }}>
                        {stat.number}
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0D1F3C', lineHeight: 1.3 }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.79rem', color: '#4B5563', margin: '12px 0 0 0', lineHeight: 1.45 }}>
                    {stat.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
