import { motion } from 'framer-motion';
import {
  Activity,
  Microscope,
  FileCheck2,
  HeartPulse,
  Syringe,
  CheckCircle2,
  Clock,
  Sparkles,
  Search,
  ScanLine,
} from 'lucide-react';

const E = [0.22, 1, 0.36, 1] as const;

export function DiagnosticsSection() {
  const diagnosticServices = [
    {
      title: 'Laboratory & Pathology',
      desc: 'Complete biochemistry, hematology, clinical pathology, and infectious disease testing with rapid turnaround.',
      icon: <Microscope size={22} />,
    },
    {
      title: 'Radiology & Imaging',
      desc: 'High-resolution digital X-rays, ultrasound scans, and specialized clinical imaging for detailed evaluation.',
      icon: <ScanLine size={22} />,
    },
    {
      title: 'Diagnostic Evaluation',
      desc: 'ECG, 2D Echocardiography, Spirometry, and non-invasive cardiovascular and pulmonary assessments.',
      icon: <Activity size={22} />,
    },
    {
      title: 'Pre-operative Investigations',
      desc: 'Comprehensive surgical fitness testing and anaesthetic safety profiles for planned interventions.',
      icon: <FileCheck2 size={22} />,
    },
    {
      title: 'Clinical Testing',
      desc: 'Diabetes profiling, lipid panels, renal and liver function tests, and hormonal screening assays.',
      icon: <Syringe size={22} />,
    },
    {
      title: 'Supporting Diagnostic Services',
      desc: '24/7 on-campus sample collection, rapid reporting, and direct integration with physician consultation suites.',
      icon: <HeartPulse size={22} />,
    },
  ];

  return (
    <section
      id="diagnostics"
      aria-label="Diagnostic Services"
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
            <Search size={15} />
            <span>Diagnostic Services</span>
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
            Diagnosis That Guides{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Better Treatment
            </span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>
            Comprehensive diagnostic and supporting services help clinicians evaluate conditions accurately and plan appropriate treatment.
          </p>
        </div>

        {/* Diagnostic Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          {diagnosticServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: E }}
              style={{
                borderRadius: 18,
                padding: '26px 22px',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                transition: 'all 200ms ease',
              }}
              className="hover:border-cyan-500 hover:shadow-lg hover:bg-white"
            >
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
                  marginBottom: 16,
                  border: '1px solid #CFFAFE',
                }}
              >
                {service.icon}
              </div>

              <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>
                {service.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
