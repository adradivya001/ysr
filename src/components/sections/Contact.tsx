import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ExternalLink, Map, Clock, Navigation, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useInView, useReducedMotion } from '@/hooks';
import { trackEvent } from '@/lib/analytics';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  const mapsUrl = siteConfig.address.mapUrl;

  return (
    <section
      id="contact"
      ref={ref}
      className="section"
      aria-labelledby="contact-heading"
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className="container" style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Contact & Location</div>
          <h2 id="contact-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 640, margin: '0 auto',
          }}>
            Find Us in{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Anantapur</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.75rem', maxWidth: 600, marginInline: 'auto' }}>
            Conveniently located in Sai Nagar with 24/7 emergency access and dedicated parking facilities.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
          alignItems: 'start',
        }}>
          {/* Contact details card */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              background: 'white',
              borderRadius: 24,
              padding: '2.25rem 2rem',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem' }}>
              Hospital Details
            </h3>

            {/* Address */}
            <div style={{ display: 'flex', gap: 14, marginBottom: '1.25rem' }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'var(--primary-bg)', border: '1px solid var(--primary-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <MapPin size={20} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 750, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>
                  Address
                </div>
                <address style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontStyle: 'normal', lineHeight: 1.6 }}>
                  <strong>Dr. YSR Memorial Hospital</strong><br />
                  {siteConfig.address.street}<br />
                  {siteConfig.address.area}, {siteConfig.address.city}<br />
                  {siteConfig.address.state} – {siteConfig.address.pincode}
                </address>
              </div>
            </div>

            <hr className="hairline" style={{ margin: '1.25rem 0' }} />

            {/* Phone */}
            <div style={{ display: 'flex', gap: 14, marginBottom: '1.25rem' }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'var(--primary-bg)', border: '1px solid var(--primary-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Phone size={20} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 750, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>
                  Helpline & Emergency
                </div>
                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={() => trackEvent('cta_call_click')}
                  style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)', textDecoration: 'none', display: 'block' }}
                >
                  {siteConfig.phoneDisplay}
                </a>
                <div style={{ fontSize: '0.78rem', color: '#16A34A', fontWeight: 600, marginTop: 2 }}>
                  Emergency services active 24/7
                </div>
              </div>
            </div>

            <hr className="hairline" style={{ margin: '1.25rem 0' }} />

            {/* Timings */}
            <div style={{ display: 'flex', gap: 14, marginBottom: '2rem' }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'var(--primary-bg)', border: '1px solid var(--primary-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Clock size={20} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 750, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>
                  Working Hours
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  OPD: {siteConfig.timings.opd}<br />
                  Emergency & Trauma: 24 Hours Open
                </div>
              </div>
            </div>

            <a
              href={`tel:${siteConfig.phone}`}
              className="btn btn-primary"
              style={{ width: '100%', borderRadius: '12px' }}
            >
              <Phone size={16} /> Call Hospital Desk
            </a>
          </motion.div>

          {/* Map Facade / Embed */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div style={{
              background: 'white',
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
              height: '100%',
              minHeight: '420px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {mapLoaded ? (
                <iframe
                  title="Dr. YSR Memorial Hospital Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent('Dr. YSR Memorial Hospital Sai Nagar Anantapur')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, flex: 1, minHeight: 360 }}
                  loading="lazy"
                />
              ) : (
                <div
                  className="map-facade"
                  style={{ flex: 1, minHeight: 360, padding: 24, textAlign: 'center' }}
                  onClick={() => setMapLoaded(true)}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'var(--primary-bg)', color: 'var(--primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 10,
                  }}>
                    <MapPin size={28} />
                  </div>
                  <h4 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', margin: 0 }}>
                    Dr. YSR Memorial Hospital
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                    12-2-878, 1st Cross Road, Ashok Nagar, Sai Nagar, Anantapur
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    style={{ marginTop: 10, borderRadius: 10 }}
                  >
                    <Map size={15} /> Load Interactive Map
                  </button>
                </div>
              )}

              <div style={{ padding: '14px 20px', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontWeight: 600 }}>Sai Nagar, Anantapur – 515001</span>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.84rem', fontWeight: 700, color: 'var(--primary)',
                    display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none',
                  }}
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
