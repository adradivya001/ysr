import { Link } from 'react-router-dom';
import { Phone, MapPin, Heart, HeartPulse } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { specialities } from '@/content/specialities';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--dark-bg)',
        color: 'var(--dark-text)',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}
    >
      <div className="container" style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--dark-border)',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 16px',
              borderRadius: '16px',
              background: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
              marginBottom: '1.25rem',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'linear-gradient(135deg, #C0183E, #96122F)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white',
              }}>
                <HeartPulse size={18} />
              </div>
              <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '1.05rem', color: '#0F172A' }}>
                Dr. YSR Memorial
              </div>
            </div>

            <p style={{ color: 'var(--dark-text-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 280 }}>
              {siteConfig.subTagline}
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a
                href={`tel:${siteConfig.phone}`}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--dark-text-muted)', fontSize: '0.875rem', textDecoration: 'none' }}
              >
                <Phone size={14} color="#C0183E" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'var(--dark-text-muted)', fontSize: '0.875rem' }}>
                <MapPin size={14} color="#C0183E" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>Sai Nagar, Anantapur, Andhra Pradesh</span>
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--dark-text)' }}>
              Navigation
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/#about' },
                { label: 'Specialities', href: '/#specialities' },
                { label: 'Medical Services', href: '/#services' },
                { label: 'Why Choose Us', href: '/#why-choose' },
                { label: 'Patient Journey', href: '/#patient-journey' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--dark-text)' }}>
              Specialities
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
              {specialities.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/specialities/${s.slug}`}
                    style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', textDecoration: 'none' }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Emergency */}
          <div>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--dark-text)' }}>
              Emergency Care
            </h3>
            <p style={{ color: 'var(--dark-text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Round-the-clock emergency medical and surgical triage available 24/7.
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn btn-primary btn-sm"
              style={{ width: 'fit-content', borderRadius: '10px' }}
            >
              <Phone size={14} /> Call Helpline
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          fontSize: '0.8125rem',
          color: 'var(--dark-text-muted)',
        }}>
          <div>
            © {year} <strong>Dr. YSR Memorial Hospital</strong>. All rights reserved. Sai Nagar, Anantapur.
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link to="/privacy" style={{ color: 'var(--dark-text-muted)' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'var(--dark-text-muted)' }}>Terms of Care</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
