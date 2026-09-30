import { motion } from 'framer-motion';
import { Phone, ArrowRight, Heart, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useInView, useReducedMotion } from '@/hooks';
import { trackEvent } from '@/lib/analytics';

const EASE = [0.22, 1, 0.36, 1] as const;

const badges = [
  { icon: ShieldCheck, label: 'NABH Standards' },
  { icon: Clock, label: '24/7 Emergency' },
  { icon: Sparkles, label: 'Expert Specialists' },
];

export function CareBand() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      aria-labelledby="care-band-heading"
      style={{
        background: 'linear-gradient(145deg, #090F1E 0%, #142C54 40%, #1C3A6E 70%, #0C2244 100%)',
        padding: 'clamp(4.5rem, 8vw, 7.5rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px', pointerEvents: 'none',
      }} />

      {/* Crimson glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -55%)',
        width: 700, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(192,24,62,0.18), transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Top-right accent */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-20%', right: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(28,58,110,0.4) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      {/* Animated floating dots */}
      {!reducedMotion && [
        { w: 5, h: 5, top: '20%', left: '8%', d: 4 },
        { w: 4, h: 4, top: '70%', right: '10%', d: 6 },
        { w: 3, h: 3, top: '40%', left: '85%', d: 8 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: dot.d, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
          style={{
            position: 'absolute',
            top: dot.top, left: (dot as any).left, right: (dot as any).right,
            width: dot.w, height: dot.h,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
            pointerEvents: 'none',
          }}
        />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}
        >
          {/* Top badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 100,
            background: 'rgba(192,24,62,0.18)',
            border: '1px solid rgba(192,24,62,0.30)',
            marginBottom: '1.75rem',
          }}>
            <Heart size={13} color="#FCA5A5" fill="#FCA5A5" />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FCA5A5' }}>
              Our Philosophy
            </span>
          </div>

          <h2 id="care-band-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 600,
            color: 'rgba(238,244,255,0.95)', lineHeight: 1.45, fontStyle: 'italic',
            letterSpacing: '-0.02em', marginBottom: '2rem',
          }}>
            "We focus on providing{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FCA5A5, #F87171, #EF4444)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              accessible, compassionate healthcare
            </span>{' '}
            for patients and families across Anantapur — every single day."
          </h2>

          {/* Trust badges row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: '2.5rem' }}>
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '7px 16px', borderRadius: 100,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                color: 'rgba(238,244,255,0.85)',
                fontSize: '0.82rem', fontWeight: 600,
              }}>
                <Icon size={14} color="#FCA5A5" />
                {label}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => trackEvent('cta_call_click')}
              id="care-band-call"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '15px 32px', borderRadius: 16,
                background: 'white', color: '#0D1F3C',
                fontWeight: 700, fontSize: '1rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.20)',
                textDecoration: 'none',
                transition: 'transform 220ms, box-shadow 220ms',
              }}
            >
              <Phone size={18} color="#C0183E" />
              Call Helpline: {siteConfig.phoneDisplay}
            </a>
            <a
              href="/#appointment"
              onClick={() => {
                trackEvent('cta_book_click');
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="care-band-book"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '15px 32px', borderRadius: 16,
                background: 'rgba(255,255,255,0.10)',
                color: 'rgba(255,255,255,0.92)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(8px)',
                fontWeight: 700, fontSize: '1rem',
                textDecoration: 'none',
                transition: 'background 220ms, transform 220ms',
              }}
            >
              Book Appointment
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
