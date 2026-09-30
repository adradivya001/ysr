import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Phone, Stethoscope, Clock,
  HeartPulse, Activity, Calendar,
  CheckCircle2, ShieldCheck, MapPin, Star, ChevronRight
} from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { useReducedMotion } from '@/hooks';
import { trackEvent } from '@/lib/analytics';
import heroImg from '@/assets/hero/ysr_hospital.png';

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60, ease: EASE } },
};

const specialties = [
  'General Medicine', 'Cardiology', 'Neurosurgery',
  'Orthopaedics', 'Paediatrics', 'Gynaecology',
];

const highlights = [
  { icon: Stethoscope, text: '13+ Specialities' },
  { icon: Clock,       text: '24/7 Emergency' },
  { icon: ShieldCheck, text: 'Patient-First Care' },
];

export function Hero() {
  const rm = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const [specIdx, setSpecIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSpecIdx(p => (p + 1) % specialties.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F9FBFF 0%, #FFFFFF 50%, #FFF5F7 100%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '80px',
      }}
    >
      {/* ── BACKGROUND DECORATION ───────────────────────────────────────── */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Top accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: 'linear-gradient(90deg, #C0183E 0%, #E11D48 25%, #1C3A6E 65%, #0891B2 100%)',
        }} />
        {/* Faint dot grid */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <pattern id="d" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#CBD5E1" opacity="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#d)" />
        </svg>
        {/* White radial wash — keeps centre clean */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 90% 80% at 50% 45%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 70%, transparent 100%)',
        }} />
        {/* Soft crimson orb — bottom left */}
        <div style={{
          position: 'absolute', bottom: '0', left: '-10%',
          width: 560, height: 560, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,24,62,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
        {/* Soft navy orb — top right */}
        <div style={{
          position: 'absolute', top: '-5%', right: '-5%',
          width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(28,58,110,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
      </div>

      {/* ── MAIN GRID ────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'relative', zIndex: 2,
          maxWidth: 1340, margin: '0 auto', width: '100%',
          padding: 'clamp(2rem, 5vh, 5rem) clamp(1.5rem, 4vw, 3rem)',
          display: 'grid',
          gridTemplateColumns: '52% 1fr',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center',
        }}
        className="hero-main-grid"
      >
        {/* ══ LEFT — TEXT CONTENT ════════════════════════════════════════ */}
        <motion.div
          initial={rm ? false : 'hidden'}
          animate="visible"
          variants={containerVariants}
        >
          {/* Location + Live badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '6px 14px', borderRadius: 100,
              background: '#FFF1F4', border: '1.5px solid #F5C2CE',
              fontSize: '0.8rem', fontWeight: 700, color: '#C0183E',
            }}>
              <MapPin size={13} />
              Sai Nagar, Anantapur
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '6px 14px', borderRadius: 100,
              background: '#ECFDF5', border: '1.5px solid #A7F3D0',
              fontSize: '0.8rem', fontWeight: 700, color: '#059669',
            }}>
              <motion.span
                animate={rm ? {} : { opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }}
              />
              24/7 Emergency Active
            </div>
          </motion.div>

          {/* Rotating speciality micro-line */}
          <motion.div variants={itemVariants} style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', fontWeight: 600, color: '#64748B' }}>
              <span style={{ color: '#94A3B8' }}>Currently Serving:</span>
              <div style={{ height: 18, overflow: 'hidden', position: 'relative', minWidth: 160 }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={specIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28 }}
                    style={{ position: 'absolute', left: 0, top: 0, color: '#C0183E', fontWeight: 700, whiteSpace: 'nowrap' }}
                  >
                    {specialties[specIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* ── HEADLINE ─────────────────────────────────────────────────── */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2.4rem, 3.8vw, 3.6rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              color: '#0D1F3C',
              margin: '0 0 1.25rem',
            }}
          >
            Advanced Healthcare,<br />
            <span style={{
              background: 'linear-gradient(135deg, #C0183E 0%, #E11D48 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Compassionate Care.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
              color: '#475569',
              lineHeight: 1.80,
              maxWidth: 500,
              margin: '0 0 2rem',
            }}
          >
            <strong style={{ color: '#0D1F3C', fontWeight: 700 }}>Dr. YSR Memorial Hospital</strong> is a trusted multispeciality
            healthcare facility in Anantapur, delivering expert medical, surgical,
            diagnostic and round-the-clock emergency care for every patient and family.
          </motion.p>

          {/* Highlight pills */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2rem' }}
          >
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '8px 16px', borderRadius: 100,
                background: '#F8FAFC', border: '1.5px solid #E2E8F0',
                fontSize: '0.84rem', fontWeight: 600, color: '#334155',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              }}>
                <Icon size={14} color="#C0183E" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.25rem' }}
          >
            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => { trackEvent('appt_cta'); scrollTo('appointment'); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 28px', borderRadius: 13,
                background: 'linear-gradient(135deg, #C0183E 0%, #9F1239 100%)',
                color: '#fff', fontWeight: 700, fontSize: '0.96rem',
                border: 'none', cursor: 'pointer', letterSpacing: '0.01em',
                boxShadow: '0 6px 24px rgba(192,24,62,0.32), 0 2px 6px rgba(0,0,0,0.08)',
                transition: 'transform 200ms ease, box-shadow 200ms ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(192,24,62,0.42)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(192,24,62,0.32), 0 2px 6px rgba(0,0,0,0.08)';
              }}
            >
              <Calendar size={17} />
              Book Appointment
              <ArrowRight size={15} />
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={() => scrollTo('specialities')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 24px', borderRadius: 13,
                background: '#FFFFFF', color: '#1C3A6E',
                fontWeight: 600, fontSize: '0.94rem',
                border: '1.5px solid #D1DBF0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#1C3A6E';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 18px rgba(28,58,110,0.12)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#D1DBF0';
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
            >
              <Stethoscope size={16} />
              Our Specialities
              <ChevronRight size={15} />
            </button>

            {/* Emergency phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => trackEvent('emergency_hero')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 18px', borderRadius: 13,
                color: '#C0183E', fontWeight: 700, fontSize: '0.9rem',
                background: 'transparent', border: '1.5px solid #F5C2CE',
                textDecoration: 'none', transition: 'all 200ms ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FFF1F4'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <Phone size={15} />
              Emergency
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>
              Trusted by <strong style={{ color: '#0D1F3C' }}>5,000+</strong> patients
            </span>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '4px 12px', borderRadius: 100,
              background: '#ECFDF5', border: '1px solid #A7F3D0',
              fontSize: '0.76rem', fontWeight: 700, color: '#059669',
            }}>
              <ShieldCheck size={12} />
              Verified Facility
            </div>
          </motion.div>
        </motion.div>

        {/* ══ RIGHT — HOSPITAL IMAGE ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.80, delay: 0.30, ease: EASE }}
          style={{ position: 'relative' }}
        >
          {/* Soft decorative bg blob behind the card */}
          <div style={{
            position: 'absolute', inset: '-24px',
            background: 'linear-gradient(135deg, #EFF4FF 0%, #FFF1F4 60%, #ECFEFF 100%)',
            borderRadius: 40, zIndex: 0,
          }} />

          {/* Main image card */}
          <div style={{
            position: 'relative', zIndex: 1,
            borderRadius: 24,
            background: '#fff',
            border: '1px solid #E2E8F0',
            boxShadow: '0 20px 60px rgba(15,30,60,0.12), 0 4px 16px rgba(0,0,0,0.05)',
            overflow: 'hidden',
          }}>
            {/* Hospital photo */}
            <div style={{ position: 'relative', height: 340, overflow: 'hidden' }}>
              <img
                src={heroImg}
                alt="Dr. YSR Memorial Hospital building"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Subtle overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(10,22,40,0.08) 0%, rgba(10,22,40,0.05) 55%, rgba(10,22,40,0.62) 100%)',
              }} />

              {/* Top-left: Location pill */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.45, ease: EASE }}
                style={{
                  position: 'absolute', top: 14, left: 14,
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '7px 14px', borderRadius: 100,
                  background: 'rgba(255,255,255,0.94)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
                  fontSize: '0.78rem', fontWeight: 700, color: '#0D1F3C',
                }}
              >
                <MapPin size={12} color="#C0183E" />
                Sai Nagar, Anantapur
              </motion.div>

              {/* Top-right: Trust badge */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.45, ease: EASE }}
                style={{
                  position: 'absolute', top: 14, right: 14,
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '7px 14px', borderRadius: 100,
                  background: 'linear-gradient(135deg, #C0183E, #9F1239)',
                  boxShadow: '0 4px 14px rgba(192,24,62,0.32)',
                  fontSize: '0.74rem', fontWeight: 700, color: '#fff',
                }}
              >
                <ShieldCheck size={12} />
                Trusted Hospital
              </motion.div>

              {/* Bottom caption */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '28px 20px 16px',
                background: 'linear-gradient(0deg, rgba(10,22,40,0.88) 0%, transparent 100%)',
              }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: 3 }}>
                  Dr. YSR Memorial Hospital
                </div>
                <div style={{ fontSize: '0.79rem', color: 'rgba(255,255,255,0.75)' }}>
                  Comprehensive Healthcare · Advanced Diagnostics
                </div>
              </div>
            </div>

            {/* ── Stats row ─────────────────────────────────────────────── */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              background: '#fff',
              borderTop: '1px solid #F1F5F9',
            }}>
              {[
                { val: '13+', lbl: 'Specialities', color: '#C0183E' },
                { val: '24/7', lbl: 'Emergency', color: '#1C3A6E' },
                { val: '5K+', lbl: 'Patients Served', color: '#059669' },
              ].map(({ val, lbl, color }, i) => (
                <div
                  key={lbl}
                  style={{
                    padding: '14px 10px', textAlign: 'center',
                    borderRight: i < 2 ? '1px solid #F1F5F9' : 'none',
                  }}
                >
                  <div style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontSize: '1.6rem', fontWeight: 800, color,
                    lineHeight: 1,
                  }}>
                    {val}
                  </div>
                  <div style={{
                    fontSize: '0.70rem', fontWeight: 600, color: '#94A3B8',
                    marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Emergency helpline chip — bottom right, outside card ──── */}
          <motion.a
            href={`tel:${siteConfig.phone}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5, ease: EASE }}
            style={{
              position: 'absolute', bottom: -22, right: 20, zIndex: 10,
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '12px 18px', borderRadius: 16,
              background: 'linear-gradient(135deg, #C0183E, #9F1239)',
              boxShadow: '0 10px 30px rgba(192,24,62,0.36)',
              border: '2px solid rgba(255,255,255,0.22)',
              textDecoration: 'none',
            }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,255,255,0.20)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Phone size={14} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '0.64rem', color: 'rgba(255,255,255,0.72)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Emergency
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>
                {siteConfig.phoneDisplay}
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* ── BOTTOM STATS BAR ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.55, ease: EASE }}
        style={{
          position: 'relative', zIndex: 2,
          maxWidth: 1340, margin: '0 auto', width: '100%',
          padding: '0 clamp(1.5rem, 4vw, 3rem) clamp(2rem, 4vh, 3rem)',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 12,
        }}>
          {[
            { icon: Stethoscope, label: '13 Specialities',  sub: 'Comprehensive Multi-Care', color: '#C0183E', bg: '#FFF1F4', border: '#F5C2CE' },
            { icon: Activity,    label: '24/7 Diagnostics', sub: 'Lab · X-Ray · ECG · Echo',  color: '#1C3A6E', bg: '#EFF4FF', border: '#C7D5F0' },
            { icon: Clock,       label: 'Emergency Care',   sub: 'Rapid Medical Triage',      color: '#0891B2', bg: '#ECFEFF', border: '#BAE6F7' },
            { icon: HeartPulse,  label: 'Patient-Centred', sub: 'Empathy at Every Step',     color: '#D97706', bg: '#FFFBEB', border: '#FDE68A' },
          ].map(({ icon: Icon, label, sub, color, bg, border }) => (
            <div
              key={label}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 18px', borderRadius: 14,
                background: bg, border: `1.5px solid ${border}`,
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                transition: 'transform 200ms ease, box-shadow 200ms ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 22px rgba(0,0,0,0.09)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 11,
                background: '#FFFFFF', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${border}`,
                boxShadow: `0 3px 10px ${color}20`,
              }}>
                <Icon size={20} color={color} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0D1F3C', lineHeight: 1.2 }}>{label}</div>
                <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: 3 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 860px) {
          .hero-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
