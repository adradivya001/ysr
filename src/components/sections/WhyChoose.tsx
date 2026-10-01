import { motion } from 'framer-motion';
import {
  Award,
  Stethoscope,
  Clock,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

const whyItems = [
  {
    number: '01',
    title: 'Experienced Senior Specialists',
    desc: 'Expert care led by renowned Joint Replacement & Orthopaedic Surgeons, Diabetologists, and Laparoscopic Gynaecologists.',
    color: '#C0183E',
    gradient: 'linear-gradient(135deg, #FFF1F4 0%, #FFE4EA 100%)',
    border: '#F9C0CC',
    icon: Award,
    badge: 'Senior Doctors',
  },
  {
    number: '02',
    title: '24/7 Emergency & Critical Care',
    desc: 'Round-the-clock emergency medical triage, dedicated trauma management, and immediate surgical coverage.',
    color: '#1C3A6E',
    gradient: 'linear-gradient(135deg, #EFF4FF 0%, #DBE8FF 100%)',
    border: '#C7D5F0',
    icon: Clock,
    badge: 'Always Open',
  },
  {
    number: '03',
    title: 'Advanced Modular Operation Theatres',
    desc: 'Equipped with sterile laminar airflow and precision surgical equipment for joint replacements and laparoscopic procedures.',
    color: '#0891B2',
    gradient: 'linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)',
    border: '#BAE6F7',
    icon: Stethoscope,
    badge: 'Modern Theatres',
  },
  {
    number: '04',
    title: 'Integrated Diagnostic Lab & Imaging',
    desc: 'On-premise digital X-Ray, diagnostic pathology, and fast turnaround testing to guide timely medical decisions.',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
    border: '#A7F3D0',
    icon: Microscope,
    badge: 'Rapid Reports',
  },
  {
    number: '05',
    title: 'Patient-First Care & Continued Support',
    desc: 'Compassionate medical attention, clear consultations, transparent care plans, and post-visit WhatsApp support.',
    color: '#D97706',
    gradient: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
    border: '#FDE68A',
    icon: HeartHandshake,
    badge: 'Dedicated Care',
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
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem, 6vw, 6rem) 0',
      }}
    >
      {/* Decorative background ambient orbs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-8%',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(192,24,62,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '-8%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(28,58,110,0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div
        className="container"
        style={{
          maxWidth: 1340,
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 2.5rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4.5vw, 4rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', color: '#C0183E' }}>
            Why Choose Us
          </div>
          <h2
            id="why-heading"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              maxWidth: 680,
              margin: '0 auto 1rem',
            }}
          >
            Reasons to Trust{' '}
            <span style={{ color: '#C0183E', fontStyle: 'italic' }}>
              Your Care with Us
            </span>
          </h2>
          <p
            style={{
              color: '#64748B',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: 600,
              marginInline: 'auto',
            }}
          >
            High standards of clinical excellence, senior doctor leadership, and patient-centered hospitality in Anantapur.
          </p>
        </motion.div>

        {/* 5 Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(14px, 2vw, 22px)',
          }}
        >
          {whyItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={reducedMotion ? false : { opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -6 }}
                style={{ cursor: 'default' }}
              >
                <div
                  style={{
                    background: item.gradient,
                    borderRadius: 24,
                    padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                    border: `1px solid ${item.border}`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    height: '100%',
                    transition: 'all 300ms ease',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: item.color,
                      borderRadius: '24px 24px 0 0',
                    }}
                  />

                  {/* Header Row: Icon/Number + Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 16,
                      marginTop: 4,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: item.color,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: `0 6px 16px ${item.color}35`,
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: 100,
                        background: '#FFFFFF',
                        color: item.color,
                        border: `1px solid ${item.border}`,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Fraunces, Georgia, serif',
                      fontSize: 'clamp(1.1rem, 1.6vw, 1.25rem)',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#475569',
                      lineHeight: 1.65,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {item.desc}
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
