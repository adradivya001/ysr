import { motion } from 'framer-motion';
import {
  Building2,
  Ambulance,
  FlaskConical,
  ScanLine,
  Syringe,
  Stethoscope,
  HeartHandshake,
  Dumbbell,
  ShieldCheck,
} from 'lucide-react';

const E = [0.22, 1, 0.36, 1] as const;

export function FacilitiesSection() {
  const facilities = [
    {
      emoji: '🏥',
      title: 'Multispeciality Hospital',
      desc: 'Modern healthcare infrastructure equipped with comprehensive outpatient, daycare, and inpatient medical wards in Sai Nagar.',
      icon: <Building2 size={24} />,
    },
    {
      emoji: '🚑',
      title: 'Emergency Care',
      desc: '24/7 round-the-clock emergency triage, trauma resuscitation unit, and rapid on-call medical response.',
      icon: <Ambulance size={24} />,
    },
    {
      emoji: '🧪',
      title: 'Laboratory Services',
      desc: 'Fully automated biochemistry, hematology, and clinical pathology laboratories offering fast, accurate results.',
      icon: <FlaskConical size={24} />,
    },
    {
      emoji: '🩻',
      title: 'Diagnostic & Imaging Support',
      desc: 'High-resolution digital radiography, ultrasonography, 2D Echo, and bedside diagnostic capabilities.',
      icon: <ScanLine size={24} />,
    },
    {
      emoji: '💉',
      title: 'Surgical Facilities',
      desc: 'Laminar flow sterile modular operating suites equipped for complex laparoscopic and open surgical interventions.',
      icon: <Syringe size={24} />,
    },
    {
      emoji: '🩺',
      title: 'Specialist Consultations',
      desc: 'Dedicated private consultation chambers for physicians and surgeons across 13+ medical disciplines.',
      icon: <Stethoscope size={24} />,
    },
    {
      emoji: '🧑⚕️',
      title: 'Nursing & Clinical Support',
      desc: 'Trained, empathetic nursing staff providing round-the-clock inpatient bedside assistance and post-operative monitoring.',
      icon: <HeartHandshake size={24} />,
    },
    {
      emoji: '💪',
      title: 'Physiotherapy & Rehabilitation',
      desc: 'Customized therapeutic physical therapy, mobility training, and post-surgical rehabilitation regimens.',
      icon: <Dumbbell size={24} />,
    },
  ];

  return (
    <section
      id="facilities"
      aria-label="Facilities & Support"
      style={{
        padding: 'clamp(3.5rem, 7vw, 6rem) 0',
        background: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 14px',
              borderRadius: 9999,
              background: '#ECFEFF',
              color: '#0E7490',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: 12,
            }}
          >
            <ShieldCheck size={15} />
            <span>Infrastructure & Capabilities</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
              fontWeight: 900,
              color: '#0F172A',
              letterSpacing: '-0.02em',
              marginBottom: 14,
            }}
          >
            Facilities & Support
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>
            Modern infrastructure, certified surgical facilities, and round-the-clock clinical services built for safety and patient recovery.
          </p>
        </div>

        {/* 8 Facilities Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {facilities.map((fac, idx) => (
            <motion.div
              key={fac.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.06, ease: E }}
              style={{
                borderRadius: 18,
                padding: '24px 20px',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                transition: 'all 200ms ease',
              }}
              className="hover:border-cyan-400 hover:bg-white hover:shadow-lg group"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: '#ECFEFF',
                    color: '#0E7490',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="group-hover:scale-105 transition-transform"
                >
                  {fac.icon}
                </div>
                <span style={{ fontSize: '1.6rem' }}>{fac.emoji}</span>
              </div>

              <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>
                {fac.title}
              </h3>

              <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.55, margin: 0 }}>
                {fac.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
