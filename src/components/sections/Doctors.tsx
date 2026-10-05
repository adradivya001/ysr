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

  // Department filter categories
  const departments = [
    { id: 'all', label: 'All Doctors', count: doctors.length },
    { id: 'orthopaedics', label: 'Orthopaedics & Joint Replacement', count: doctors.filter(d => d.specialitySlug === 'orthopaedics').length },
    { id: 'general-medicine', label: 'General Medicine & Diabetology', count: doctors.filter(d => d.specialitySlug === 'general-medicine').length },
    { id: 'obstetrics-gynaecology', label: 'Obstetrics & Gynaecology', count: doctors.filter(d => d.specialitySlug === 'obstetrics-gynaecology').length },
  ];

  const filteredDoctors = selectedDept === 'all'
    ? doctors
    : doctors.filter((d) => d.specialitySlug === selectedDept);

  return (
    <section
      id="doctors"
      ref={ref}
      className="section doctors-section"
      aria-labelledby="doctors-heading"
      style={{
        padding: 'clamp(3.5rem, 6vw, 6rem) 0',
        background: '#FFF8F9',
        borderBottom: '1px solid #FCE7EC',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>

        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 2.75rem)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 14px', borderRadius: '100px', background: '#FFFFFF',
            border: '1px solid #F5C2CE', color: '#C0183E', fontSize: '0.78rem',
            fontWeight: 750, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem',
            boxShadow: '0 2px 6px rgba(192, 24, 62, 0.08)'
          }}>
            <ShieldCheck size={14} color="#C0183E" /> EXPERT SENIOR CONSULTANTS
          </div>

          <h2 id="doctors-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 800,
            lineHeight: 1.15, letterSpacing: '-0.02em', color: '#0F172A',
            maxWidth: 720, margin: '0 auto',
          }}>
            Meet Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C0183E 0%, #96122F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Doctors & Surgeons
            </span>
          </h2>
          <p style={{
            fontSize: '1.025rem', color: '#64748B', marginTop: '12px',
            maxWidth: 680, margin: '12px auto 0', lineHeight: 1.6
          }}>
            Dedicated senior consultants, joint replacement specialists, physicians, and surgeons offering trusted care at Dr. YSR Memorial Hospital.
          </p>
        </motion.div>

        {/* ── DEPARTMENT FILTER PILLS ─────────── */}
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {departments.map((dept) => {
              const active = selectedDept === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '100px',
                    fontSize: '0.85rem',
                    fontWeight: active ? 750 : 600,
                    color: active ? '#FFFFFF' : '#334155',
                    background: active ? '#C0183E' : '#FFFFFF',
                    border: active ? '1px solid #C0183E' : '1px solid #E2E8F0',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: active ? '0 4px 12px rgba(192, 24, 62, 0.25)' : '0 1px 3px rgba(0,0,0,0.02)',
                    transition: 'all 160ms ease',
                  }}
                >
                  {dept.label} ({dept.count})
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3-COLUMN DOCTOR CARDS GRID ─────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          {filteredDoctors.map((doctor: Doctor) => {
            return (
              <div
                key={doctor.slug}
                className="doctor-card-item"
              >
                {/* Doctor Portrait Image Header */}
                <div style={{
                  position: 'relative',
                  height: 240,
                  overflow: 'hidden',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                  background: 'linear-gradient(135deg, #0F172A 0%, #164E63 100%)',
                }}>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    width={380}
                    height={240}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    pointerEvents: 'none',
                  }}>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '100px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(6px)',
                      color: '#38BDF8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                    }}>
                      {doctor.speciality}
                    </span>
                  </div>
                </div>

                {/* Header Strip with Doctor Name & Qualifications */}
                <div style={{
                  padding: '14px 18px',
                  background: 'linear-gradient(135deg, #0F172A 0%, #164E63 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                }}>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {doctor.name}
                    </div>
                  </div>
                  {doctor.qualifications && (
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '3px 8px',
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
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 750, color: '#C0183E', marginBottom: '6px' }}>
                    {doctor.designation}
                  </div>

                  {doctor.opdTimings && (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      fontSize: '0.78rem', color: '#64748B', marginBottom: '12px',
                    }}>
                      <Clock size={13} color="#C0183E" style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doctor.opdTimings}</span>
                    </div>
                  )}

                  <p style={{
                    fontSize: '0.875rem',
                    color: '#475569',
                    lineHeight: 1.55,
                    marginBottom: '14px',
                  }}>
                    {doctor.bio}
                  </p>

                  {/* Focus Areas */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '18px', marginTop: 'auto' }}>
                    {doctor.focusAreas.slice(0, 3).map((area: string) => (
                      <span key={area} style={{
                        padding: '3px 8px', borderRadius: '6px',
                        fontSize: '0.7rem', fontWeight: 600,
                        background: '#FFF0F3', color: '#96122F',
                        border: '1px solid #FCE7EC',
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
                      padding: '11px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #C0183E 0%, #96122F 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: 750,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(192, 24, 62, 0.28)',
                    }}
                  >
                    <Calendar size={14} /> Book Doctor Visit
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Doctor Roster */}
        <div style={{
          textAlign: 'center',
          padding: '16px 20px',
          borderRadius: '16px',
          background: '#FFFFFF',
          border: '1px solid #FCE7EC',
          maxWidth: '780px',
          margin: '2.5rem auto 0',
          fontSize: '0.875rem',
          color: '#475569',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
        }}>
          💡 <strong>Hospital Consultation Note:</strong> Doctor checkups run Monday to Saturday (9:00 AM – 9:00 PM) and Sunday (9:00 AM – 2:00 PM). Emergency medical and surgical care is open 24/7. Call <strong>08554-272828</strong> or <strong>+91 98498 98698</strong> for immediate doctor availability.
        </div>
      </div>

      <style>{`
        .doctor-card-item {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
          overflow: hidden;
        }

        .doctor-card-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(192, 24, 62, 0.14);
          border-color: #F5C2CE;
        }
      `}</style>
    </section>
  );
}
