import { motion } from 'framer-motion';
import { Phone, AlertCircle, ShieldAlert, HeartPulse, Clock, ArrowRight, Ambulance } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';

const E = [0.22, 1, 0.36, 1] as const;

export function EmergencySection() {
  const services = [
    'Immediate medical assessment',
    'Emergency medical care',
    'Surgical support',
    'Critical-care coordination',
    'Diagnostic support',
  ];

  return (
    <section
      id="emergency"
      aria-label="24/7 Emergency Care"
      style={{
        padding: 'clamp(3rem, 6vw, 5rem) 0',
        background: 'linear-gradient(135deg, #991B1B 0%, #7F1D1D 50%, #450A0A 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Side */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 9999,
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.25)',
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: 16,
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444', animation: 'ping 1.2s infinite' }} />
              <span>Here When You Need Us</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: 14,
              }}
            >
              24/7 Emergency Support
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#FECACA', lineHeight: 1.65, maxWidth: 580, marginBottom: 24 }}>
              Our emergency care services are designed to provide timely medical attention for urgent health conditions, acute trauma, and critical medical emergencies.
            </p>

            {/* Bullet points */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 30 }}>
              {services.map((srv) => (
                <div key={srv} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.92rem', fontWeight: 600, color: '#FEE2E2' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <HeartPulse size={13} color="#FFFFFF" />
                  </div>
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Emergency CTA Card */}
          <div>
            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 24,
                padding: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ambulance size={24} color="#FFFFFF" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>Need Urgent Medical Attention?</h3>
                  <p style={{ fontSize: '0.84rem', color: '#FECACA', margin: 0 }}>Immediate medical team ready 24 Hours / 7 Days</p>
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(0,0,0,0.25)',
                  borderRadius: 16,
                  padding: '20px',
                  marginBottom: 20,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: '#FCA5A5', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Emergency Helpline
                </div>
                <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.02em', marginTop: 4 }}>
                  {siteConfig.phoneDisplay}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#FECACA', marginTop: 4 }}>
                  Sai Nagar, Anantapur
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={() => trackEvent('emergency_call_clicked', { source: 'emergency_section_cta' })}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    padding: '15px 24px',
                    borderRadius: 12,
                    background: '#FFFFFF',
                    color: '#991B1B',
                    fontWeight: 800,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    transition: 'all 150ms ease',
                  }}
                  className="hover:bg-red-50 hover:scale-[1.02]"
                >
                  <Phone size={20} />
                  <span>Call Emergency Services Now</span>
                </a>

                <a
                  href="/#appointment"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '12px',
                    borderRadius: 12,
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                  }}
                >
                  <span>Or Book Regular Outpatient Consultation</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
