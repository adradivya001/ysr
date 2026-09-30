import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Stethoscope, ArrowRight, Clock,
  Calendar, Award, ChevronLeft, ChevronRight, Pause, Play
} from 'lucide-react';
import { doctors, Doctor } from '@/content/doctors';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Doctors() {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [isPausedByUser, setIsPausedByUser] = useState<boolean>(false);
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const leadershipDoctor = doctors.find((d) => d.isLeadership);
  const specialistDoctors = doctors.filter((d) => !d.isLeadership);

  // Department filter categories
  const departments = [
    { id: 'all', label: 'All Doctors', count: specialistDoctors.length },
    { id: 'general-medicine', label: 'General Medicine', count: 2 },
    { id: 'obstetrics-gynaecology', label: 'Obst & Gynaecology', count: 2 },
    { id: 'cardiology', label: 'Cardiology', count: 1 },
    { id: 'pulmonology', label: 'Pulmonology (Lungs)', count: 2 },
    { id: 'gastroenterology', label: 'Gastroenterology', count: 2 },
    { id: 'general-surgery', label: 'General Surgery', count: 1 },
    { id: 'orthopaedics', label: 'Ortho & Joints', count: 2 },
    { id: 'paediatric-surgery', label: 'Paediatric Surgery', count: 1 },
    { id: 'maxillofacial-surgery', label: 'Maxillofacial', count: 2 },
    { id: 'ent', label: 'ENT', count: 2 },
    { id: 'neurology', label: 'Neurology', count: 2 },
    { id: 'plastic-surgery', label: 'Plastic Surgery', count: 1 },
    { id: 'anaesthesia-icu', label: 'Anaesthesia & ICU', count: 2 },
    { id: 'urology', label: 'Urology', count: 2 },
    { id: 'neurosurgery', label: 'Neurosurgery', count: 1 },
  ];

  const filteredDoctors = selectedDept === 'all'
    ? specialistDoctors
    : specialistDoctors.filter((d) => d.specialitySlug === selectedDept);

  // Double the list for seamless infinite marquee loop when 3+ doctors
  const displayDoctors = filteredDoctors.length >= 3
    ? [...filteredDoctors, ...filteredDoctors]
    : filteredDoctors;

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="doctors"
      ref={ref}
      className="section doctors-section"
      aria-labelledby="doctors-heading"
      style={{
        padding: 'clamp(3.5rem, 6vw, 6rem) 0',
        background: '#ECFEFF',
        borderBottom: '1px solid #CFFAFE',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>

        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 14px', borderRadius: '100px', background: '#FFFFFF',
            border: '1px solid #BAE6FD', color: '#0E7490', fontSize: '0.78rem',
            fontWeight: 750, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem',
            boxShadow: '0 2px 6px rgba(14, 116, 144, 0.06)'
          }}>
            <ShieldCheck size={14} color="#0E7490" /> 20+ SPECIALIST DOCTORS
          </div>

          <h2 id="doctors-heading" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 850,
            lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A',
            maxWidth: 720, margin: '0 auto',
          }}>
            Meet Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Doctors
            </span>
          </h2>
          <p style={{
            fontSize: '1.025rem', color: '#64748B', marginTop: '12px',
            maxWidth: 680, margin: '12px auto 0', lineHeight: 1.6
          }}>
            Experienced specialist doctors and surgeons providing trusted medical care across 15 hospital departments.
          </p>
        </motion.div>

        {/* ── DEPARTMENT FILTER PILLS & MOVING STATUS BAR ─────────── */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: '0 0 2px 0' }}>
                Specialist Doctors Roster ({filteredDoctors.length})
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#0E7490', fontWeight: 650 }}>
                <span className="live-flow-dot" />
                <span>Continuous Flow Active · <strong>Hover mouse or touch to pause</strong></span>
              </div>
            </div>

            {/* Controls: Left / Right Scroll & Pause Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setIsPausedByUser(!isPausedByUser)}
                title={isPausedByUser ? 'Resume moving' : 'Pause moving'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '100px',
                  background: isPausedByUser ? '#0E7490' : '#FFFFFF',
                  color: isPausedByUser ? '#FFFFFF' : '#0E7490',
                  border: '1px solid #BAE6FD',
                  fontSize: '0.78rem',
                  fontWeight: 750,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(14, 116, 144, 0.08)',
                }}
              >
                {isPausedByUser ? <Play size={13} fill="currentColor" /> : <Pause size={13} fill="currentColor" />}
                <span>{isPausedByUser ? 'Resume Flow' : 'Pause Flow'}</span>
              </button>

              <button
                onClick={() => handleManualScroll('left')}
                aria-label="Scroll left"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #BAE6FD',
                  color: '#0E7490',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(14, 116, 144, 0.08)',
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleManualScroll('right')}
                aria-label="Scroll right"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #BAE6FD',
                  color: '#0E7490',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(14, 116, 144, 0.08)',
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '8px',
            scrollbarWidth: 'none',
          }}>
            {departments.map((dept) => {
              const active = selectedDept === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  style={{
                    padding: '7px 14px',
                    borderRadius: '100px',
                    fontSize: '0.8125rem',
                    fontWeight: active ? 750 : 600,
                    color: active ? '#FFFFFF' : '#334155',
                    background: active ? '#0E7490' : '#FFFFFF',
                    border: active ? '1px solid #0E7490' : '1px solid #E2E8F0',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: active ? '0 4px 12px rgba(14, 116, 144, 0.2)' : '0 1px 3px rgba(0,0,0,0.02)',
                    transition: 'all 160ms ease',
                  }}
                >
                  {dept.label} ({dept.count})
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* ── 3. CONTINUOUS MOVING MARQUEE STRIP (PAUSES ON CURSOR HOVER) ─────────── */}
      <div
        className={`doctor-marquee-wrapper ${isPausedByUser ? 'force-paused' : ''}`}
        ref={scrollContainerRef}
      >
        <div className="doctor-marquee-track">
          {displayDoctors.map((doctor: Doctor, i: number) => {
            return (
              <div
                key={`${doctor.slug}-${i}`}
                className="doctor-card-item"
              >
                {/* Header Strip with Speciality & Qualification Badge */}
                <div style={{
                  padding: '16px 20px',
                  background: 'linear-gradient(135deg, #0F172A 0%, #164E63 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                }}>
                  <div style={{ minWidth: 0, paddingRight: '6px' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 750,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: '#38BDF8',
                      display: 'block',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {doctor.speciality}
                    </span>
                    <div style={{
                      fontSize: '1.025rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginTop: '2px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {doctor.name}
                    </div>
                  </div>
                  {doctor.qualifications && (
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '4px 8px',
                      borderRadius: '6px',
                      background: 'rgba(56, 189, 248, 0.2)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      color: '#BAE6FD',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}>
                      {doctor.qualifications}
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0E7490', marginBottom: '6px' }}>
                    {doctor.designation}
                  </div>

                  {doctor.opdTimings && (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      fontSize: '0.75rem', color: '#64748B', marginBottom: '12px',
                    }}>
                      <Clock size={13} color="#0E7490" style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doctor.opdTimings}</span>
                    </div>
                  )}

                  <p style={{
                    fontSize: '0.85rem',
                    color: '#475569',
                    lineHeight: 1.5,
                    marginBottom: '14px',
                  }}>
                    {doctor.bio}
                  </p>

                  {/* Focus Areas */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px', marginTop: 'auto' }}>
                    {doctor.focusAreas.slice(0, 3).map((area: string) => (
                      <span key={area} style={{
                        padding: '3px 8px', borderRadius: '6px',
                        fontSize: '0.7rem', fontWeight: 600,
                        background: '#F1F5F9', color: '#334155',
                        border: '1px solid #E2E8F0',
                        whiteSpace: 'nowrap',
                      }}>
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => scrollTo('appointment')}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '10px',
                      background: '#0E7490',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: 750,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(14, 116, 144, 0.2)',
                    }}
                  >
                    <Calendar size={14} /> Book Doctor Visit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Note on Doctor Roster */}
      <div className="container" style={{ maxWidth: 1340, margin: '2.5rem auto 0', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        <div style={{
          textAlign: 'center',
          padding: '16px 20px',
          borderRadius: '16px',
          background: '#FFFFFF',
          border: '1px solid #CFFAFE',
          maxWidth: '780px',
          margin: '0 auto',
          fontSize: '0.875rem',
          color: '#475569',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
        }}>
          💡 <strong>Hospital Consultation Note:</strong> Doctor checkups run Monday to Saturday (9:00 AM – 9:00 PM) and Sunday (9:00 AM – 2:00 PM). Emergency medical and surgical care is open 24/7. Call <strong>08554-272828</strong> or <strong>+91 98498 98698</strong> for immediate doctor availability.
        </div>
      </div>

      {/* ── CSS STYLING FOR SMOOTH MOVING FLOW & PAUSE ON HOVER ── */}
      <style>{`
        .doctor-marquee-wrapper {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 12px 0 24px 0;
          cursor: grab;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .doctor-marquee-wrapper::-webkit-scrollbar {
          display: none;
        }
        .doctor-marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: moveDoctors 60s linear infinite;
          will-change: transform;
        }

        /* PAUSE MOVING EFFECT WHEN CURSOR IS PLACED / HOVERED */
        .doctor-marquee-wrapper:hover .doctor-marquee-track {
          animation-play-state: paused !important;
        }

        .doctor-marquee-wrapper.force-paused .doctor-marquee-track {
          animation-play-state: paused !important;
        }

        @keyframes moveDoctors {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .doctor-card-item {
          width: 320px;
          flex-shrink: 0;
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .doctor-card-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(14, 116, 144, 0.14);
          border-color: #0E7490;
        }

        .live-flow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          display: inline-block;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulseGreen 1.8s infinite cubic-bezier(0.66, 0, 0, 1);
        }

        @keyframes pulseGreen {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        @media (max-width: 992px) {
          .lead-doc-left { grid-column: span 12 !important; }
          .lead-doc-right { grid-column: span 12 !important; margin-top: 1rem; }
          .doctor-card-item { width: 295px; }
        }
      `}</style>
    </section>
  );
}
