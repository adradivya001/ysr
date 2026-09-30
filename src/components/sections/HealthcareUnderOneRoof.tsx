import { motion } from 'framer-motion';
import {
  Users, FlaskConical, HeartPulse, HeartHandshake,
  CheckCircle2, ArrowRight, ShieldCheck, Clock
} from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const pillars = [
  {
    title: 'Doctor Checkups',
    desc: 'Direct checkups with specialist doctors across 15 medical and surgical fields in one place.',
    icon: Users,
    color: '#0E7490',
    bg: '#ECFEFF',
    border: '#CFFAFE',
    points: ['Fever, BP & Diabetes Doctors', 'Maternity, Gynaecology & Child Care', 'Heart, Chest & Stomach Specialists', 'Brain, Spine, Bone & Urology Care'],
  },
  {
    title: 'Blood Tests & Scans',
    desc: 'In-house blood testing lab, ECG heart checks, and digital X-ray scans with fast reports.',
    icon: FlaskConical,
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#E0F2FE',
    points: ['Certified Blood Test Lab', 'Quick 12-Lead ECG Check', 'Clear Digital X-Rays', 'Fast & Accurate Reports'],
  },
  {
    title: 'Surgery & Operations',
    desc: 'Clean operation rooms, skilled surgeons, and safe recovery care for every patient.',
    icon: HeartPulse,
    color: '#E11D48',
    bg: '#FFF1F2',
    border: '#FFE4E6',
    points: ['General & Day Surgeries', 'Bone & Fracture Surgeries', 'ENT & Throat Procedures', 'Caring Post-Surgery Help'],
  },
  {
    title: 'Family Healthcare',
    desc: 'Complete everyday health care for babies, children, mothers, adults, and elderly family members.',
    icon: HeartHandshake,
    color: '#059669',
    bg: '#ECFDF5',
    border: '#D1FAE5',
    points: ['Baby & Child Health Support', 'Mother & Pregnancy Care', 'Adult & Elderly Checkups', 'Trusted Care for the Whole Family'],
  },
];

export function HealthcareUnderOneRoof() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      id="patient-care"
      className="section"
      aria-labelledby="roof-heading"
      style={{
        background: '#F0F9FF',
        padding: 'clamp(3.5rem, 6vw, 6rem) 0',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>

        {/* Section Heading */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 14px', borderRadius: '100px', background: '#ECFEFF',
            border: '1px solid #CFFAFE', color: '#0E7490', fontSize: '0.78rem',
            fontWeight: 750, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem'
          }}>
            <ShieldCheck size={14} color="#0E7490" /> PATIENT-FIRST CARE
          </div>
          <h2
            id="roof-heading"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 850,
              lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A',
              maxWidth: 760, margin: '0 auto',
            }}
          >
            All Medical Care Under{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              One Roof
            </span>
          </h2>
          <p style={{
            marginTop: '12px', color: '#64748B', fontSize: '1.025rem',
            maxWidth: 680, margin: '12px auto 0', lineHeight: 1.7
          }}>
            From blood tests and scans to doctor checkups, surgeries, and family health — all at Subash Road near Iron Bridge, Anantapur.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '3rem',
        }}>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={reducedMotion ? false : { opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08, ease: EASE }}
                whileHover={reducedMotion ? {} : { y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '22px',
                  padding: '28px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 240ms ease',
                }}
              >
                <div>
                  <div style={{
                    width: 50, height: 50, borderRadius: '14px',
                    background: pillar.bg, border: `1px solid ${pillar.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '18px',
                  }}>
                    <Icon size={24} color={pillar.color} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '0.885rem', color: '#64748B', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                    {pillar.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                    {pillar.points.map((pt) => (
                      <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={15} color={pillar.color} style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '0.825rem', color: '#334155', fontWeight: 550 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid #F8FAFC', marginTop: '16px' }}>
                  <button
                    onClick={() => scrollTo('appointment')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: pillar.color,
                      fontSize: '0.825rem',
                      fontWeight: 750,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0,
                    }}
                  >
                    Schedule Consultation <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Call Out Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0E7490 0%, #0369A1 100%)',
          borderRadius: '20px',
          padding: '24px 32px',
          color: '#FFFFFF',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>Need assistance finding the right medical department?</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9, marginTop: '2px' }}>
              Our hospital desk is available on <strong>08554-272828</strong> or <strong>+91 98498 98698</strong> for patient guidance.
            </div>
          </div>
          <button
            onClick={() => scrollTo('appointment')}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              background: '#FFFFFF',
              color: '#0E7490',
              fontWeight: 800,
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            }}
          >
            Book Appointment Now
          </button>
        </div>

      </div>
    </section>
  );
}
