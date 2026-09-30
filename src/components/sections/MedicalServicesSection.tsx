import { motion } from 'framer-motion';
import {
  Stethoscope,
  Scissors,
  UserCheck,
  Baby,
  Bone,
  ShieldAlert,
  Dumbbell,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const E = [0.22, 1, 0.36, 1] as const;

export function MedicalServicesSection() {
  const services = [
    {
      title: 'Medical Care',
      desc: 'Comprehensive consultation and treatment for various medical conditions.',
      icon: <Stethoscope size={24} />,
      color: '#0E7490',
      bg: '#ECFEFF',
    },
    {
      title: 'Surgical Care',
      desc: 'Planned and emergency surgical support across multiple specialties.',
      icon: <Scissors size={24} />,
      color: '#0284C7',
      bg: '#E0F2FE',
    },
    {
      title: "Women's Healthcare",
      desc: 'Obstetric and gynaecological care for women at different stages of life.',
      icon: <UserCheck size={24} />,
      color: '#D946EF',
      bg: '#FDF4FF',
    },
    {
      title: 'Child Healthcare',
      desc: 'Dedicated medical care for children and adolescents.',
      icon: <Baby size={24} />,
      color: '#F59E0B',
      bg: '#FEF3C7',
    },
    {
      title: 'Orthopaedic Care',
      desc: 'Treatment and management of musculoskeletal conditions.',
      icon: <Bone size={24} />,
      color: '#475569',
      bg: '#F1F5F9',
    },
    {
      title: 'Kidney Care',
      desc: 'Specialised nephrology and dialysis-related services.',
      icon: <ShieldAlert size={24} />,
      color: '#DC2626',
      bg: '#FEF2F2',
    },
    {
      title: 'Physiotherapy',
      desc: 'Rehabilitation and supportive physical therapy services.',
      icon: <Dumbbell size={24} />,
      color: '#16A34A',
      bg: '#F0FDF4',
    },
    {
      title: 'Emergency Care',
      desc: 'Round-the-clock support for urgent medical conditions.',
      icon: <Clock size={24} />,
      color: '#E11D48',
      bg: '#FFE4E6',
    },
  ];

  return (
    <section
      id="services"
      aria-label="Our Medical Services"
      style={{
        padding: 'clamp(3.5rem, 7vw, 6rem) 0',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
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
            <Sparkles size={15} />
            <span>Integrated Healthcare Spectrum</span>
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
            Our Medical Services
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>
            Structured around patient comfort, rapid diagnosis, multidisciplinary clinical support, and effective therapeutic outcomes.
          </p>
        </div>

        {/* 8-Card Visually Attractive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.07, ease: E }}
              style={{
                borderRadius: 18,
                padding: '26px 22px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(15,23,42,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 200ms ease',
              }}
              className="hover:shadow-xl hover:-translate-y-1 hover:border-cyan-400 group"
            >
              <div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: item.bg,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18,
                  }}
                  className="group-hover:scale-110 transition-transform"
                >
                  {item.icon}
                </div>

                <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid #F1F5F9' }}>
                <a
                  href="/#appointment"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: '#0E7490',
                    textDecoration: 'none',
                  }}
                >
                  <span>Book for this service</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
