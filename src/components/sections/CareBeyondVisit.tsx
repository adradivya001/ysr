import { motion } from 'framer-motion';
import {
  BellRing,
  Pill,
  HeartHandshake,
  MessageCircle,
  CheckCheck,
  CalendarCheck,
  ShieldCheck,
  Send,
  Sparkles,
  Phone,
  Heart,
  Stethoscope
} from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks';
import { siteConfig } from '@/content/site.config';

const EASE = [0.22, 1, 0.36, 1] as const;

interface JourneyStage {
  step: string;
  title: string;
  desc: string;
  icon: typeof BellRing;
  badge: string;
}

const stages: JourneyStage[] = [
  {
    step: '01',
    title: 'CHECKUP REMINDERS',
    desc: 'Never miss an important follow-up appointment with your doctor.',
    icon: CalendarCheck,
    badge: 'Doctor Reviews',
  },
  {
    step: '02',
    title: 'MEDICINE REMINDERS',
    desc: 'Stay on track with simple reminders for your prescribed medicines.',
    icon: Pill,
    badge: 'Daily Dosage',
  },
  {
    step: '03',
    title: 'RECOVERY TIPS',
    desc: 'Receive easy post-visit care tips and instructions to heal quickly.',
    icon: HeartHandshake,
    badge: 'Health Advice',
  },
  {
    step: '04',
    title: 'WHATSAPP UPDATES',
    desc: 'Get your lab reports and ask questions directly on WhatsApp.',
    icon: MessageCircle,
    badge: 'WhatsApp Help',
  },
];

const chatMessages = [
  {
    id: 1,
    type: 'incoming',
    text: '👋 Hello! We hope you are feeling better after today’s doctor visit at Surya Hospital.',
    time: '04:30 PM',
    tag: null,
  },
  {
    id: 2,
    type: 'incoming',
    title: '🗓️ Doctor Visit Reminder',
    text: 'Your next checkup with our doctor is scheduled for tomorrow at 10:30 AM.',
    time: '04:31 PM',
    tag: 'Visit Confirmed',
    accent: '#0E7490',
  },
  {
    id: 3,
    type: 'incoming',
    title: '💊 Medicine Reminder',
    text: 'Please take your medicines on time as advised by your doctor. Drink plenty of water and take good rest.',
    time: '04:32 PM',
    tag: 'Medicine Tips',
    accent: '#059669',
  },
  {
    id: 4,
    type: 'outgoing',
    text: 'Thank you so much! The medicine reminders and lab test updates are very helpful for us. 🙏',
    time: '04:35 PM',
    tag: null,
  },
  {
    id: 5,
    type: 'incoming',
    text: '💙 Surya Hospital — We are always here for you. If you need any help, message us anytime.',
    time: '04:36 PM',
    tag: null,
  },
];

export function CareBeyondVisit() {
  const [ref, inView] = useInView<HTMLElement>();
  const rm = useReducedMotion();

  return (
    <section
      id="care-beyond-visit"
      ref={ref}
      className="section"
      aria-labelledby="care-beyond-heading"
      style={{
        background: '#ECFEFF',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem, 6vw, 6rem) 0',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      {/* Background Decorative Ambient Glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(14, 116, 144, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ maxWidth: 1340, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <motion.div
          initial={rm ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 16px',
              borderRadius: 100,
              background: '#FFFFFF',
              border: '1px solid #BAE6FD',
              fontSize: '0.8125rem',
              fontWeight: 800,
              color: '#0E7490',
              letterSpacing: '0.06em',
              marginBottom: 14,
            }}
          >
            <Sparkles size={14} color="#0E7490" />
            <span>CARE BEYOND THE VISIT</span>
          </div>

          <h2
            id="care-beyond-heading"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.8vw, 3.25rem)',
              fontWeight: 750,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#0F172A',
              marginBottom: '1rem',
            }}
          >
            Care that continues{' '}
            <span style={{ color: '#0E7490', fontStyle: 'italic' }}>after you leave.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.15vw, 1.125rem)',
              color: '#475569',
              lineHeight: 1.65,
              maxWidth: 680,
              margin: '0 auto',
            }}
          >
            We help you and your family stay on track with doctor reviews, medicine reminders, and fast lab reports on WhatsApp.
          </p>
        </motion.div>

        {/* Main 2-Column Showcase */}
        <div
          className="care-beyond-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.75rem)',
            alignItems: 'center',
          }}
        >
          {/* ══ LEFT COLUMN: Vertical Connected Care Journey (7 Cols) ════════════ */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
            className="care-journey-col"
          >
            <div style={{ position: 'relative', paddingLeft: '8px' }}>
              {/* Vertical Connecting Line */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '29px',
                  top: '28px',
                  bottom: '36px',
                  width: '2px',
                  background: 'linear-gradient(180deg, #0E7490 0%, #0284C7 50%, #25D366 100%)',
                  opacity: 0.35,
                  zIndex: 0,
                }}
              />

              {stages.map((st, i) => {
                const Icon = st.icon;
                return (
                  <motion.div
                    key={st.step}
                    initial={rm ? false : { opacity: 0, x: -28 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: EASE }}
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.25rem',
                      marginBottom: i === stages.length - 1 ? 0 : '1.35rem',
                    }}
                  >
                    {/* Numbered Icon Node */}
                    <div
                      style={{
                        position: 'relative',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        border: '2px solid #0E7490',
                        boxShadow: '0 4px 14px rgba(14, 116, 144, 0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: '#0E7490',
                        marginTop: '2px',
                      }}
                    >
                      <Icon size={20} color="#0E7490" />
                      <span
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          right: '-6px',
                          background: '#0F172A',
                          color: '#FFFFFF',
                          fontSize: '0.625rem',
                          fontWeight: 800,
                          padding: '1px 5px',
                          borderRadius: '100px',
                          lineHeight: 1.2,
                          border: '1.5px solid #FFFFFF',
                        }}
                      >
                        {st.step}
                      </span>
                    </div>

                    {/* Stage Card */}
                    <div
                      style={{
                        flex: 1,
                        background: '#FFFFFF',
                        borderRadius: '18px',
                        padding: '1.15rem 1.4rem',
                        border: '1px solid #CFFAFE',
                        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '10px',
                          marginBottom: '4px',
                          flexWrap: 'wrap',
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: '0.9375rem',
                            fontWeight: 800,
                            letterSpacing: '0.04em',
                            color: '#0F172A',
                            margin: 0,
                          }}
                        >
                          {st.title}
                        </h3>

                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            padding: '3px 10px',
                            borderRadius: '100px',
                            background: '#ECFEFF',
                            color: '#0E7490',
                            border: '1px solid #A5F3FC',
                          }}
                        >
                          {st.badge}
                        </span>
                      </div>

                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: '#64748B',
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        {st.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Quote Banner Pill */}
            <motion.div
              initial={rm ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
              style={{
                marginTop: '0.75rem',
                padding: '14px 22px',
                borderRadius: '16px',
                background: '#FFFFFF',
                border: '1px solid #BAE6FD',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 2px 10px rgba(14, 116, 144, 0.06)',
              }}
            >
              <Heart size={18} color="#0E7490" fill="#0E7490" style={{ flexShrink: 0 }} />
              <p
                style={{
                  fontSize: '0.9125rem',
                  fontWeight: 650,
                  fontStyle: 'italic',
                  color: '#0E7490',
                  margin: 0,
                  lineHeight: 1.45,
                }}
              >
                “Because caring for you doesn’t end at the hospital door.”
              </p>
            </motion.div>
          </div>

          {/* ══ RIGHT COLUMN: Interactive Smartphone WhatsApp Chat Mockup (5 Cols) ══ */}
          <motion.div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              justifyContent: 'center',
            }}
            initial={rm ? false : { opacity: 0, scale: 0.95, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="care-chat-col"
          >
            {/* Outer Smartphone Shell */}
            <div
              style={{
                position: 'relative',
                borderRadius: '32px',
                padding: '10px',
                background: '#FFFFFF',
                boxShadow:
                  '0 25px 60px -15px rgba(15, 23, 42, 0.18), 0 10px 25px rgba(14, 116, 144, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.9)',
                maxWidth: '440px',
                width: '100%',
                margin: '0 auto',
              }}
            >
              {/* Inner Screen */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#ECE5DD',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #D1D5DB',
                }}
              >
                {/* WhatsApp Chat Header */}
                <div
                  style={{
                    background: '#075E54',
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#FFFFFF',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Hospital Avatar */}
                    <div
                      style={{
                        position: 'relative',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        padding: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        flexShrink: 0,
                        color: '#0E7490',
                      }}
                    >
                      <Stethoscope size={22} />
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: '#25D366',
                          border: '2px solid #075E54',
                        }}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
                          Surya Hospital
                        </span>
                        <ShieldCheck size={14} color="#4ADE80" />
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#D1FAE5', opacity: 0.9 }}>
                        Official Continued Care Support
                      </div>
                    </div>
                  </div>

                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    aria-label="Call Hospital"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                    }}
                  >
                    <Phone size={16} />
                  </a>
                </div>

                {/* Sub-header Date / Security Pill */}
                <div
                  style={{
                    textAlign: 'center',
                    padding: '8px 12px 4px 12px',
                    background: 'transparent',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#4B5563',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(4px)',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    🔒 Verified Hospital Post-Care Channel
                  </span>
                </div>

                {/* WhatsApp Messages Scrollable Area */}
                <div
                  style={{
                    padding: '12px 14px 16px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    background: 'radial-gradient(circle at center, #F5F1EB 0%, #E8E0D7 100%)',
                  }}
                >
                  {chatMessages.map((msg, idx) => {
                    const isIncoming = msg.type === 'incoming';
                    return (
                      <motion.div
                        key={msg.id}
                        initial={rm ? false : { opacity: 0, y: 12, scale: 0.96 }}
                        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.35 + idx * 0.12, ease: EASE }}
                        style={{
                          alignSelf: isIncoming ? 'flex-start' : 'flex-end',
                          maxWidth: '88%',
                          background: isIncoming ? '#FFFFFF' : '#DCF8C6',
                          borderRadius: isIncoming ? '14px 14px 14px 2px' : '14px 14px 2px 14px',
                          padding: '11px 13px 7px 13px',
                          boxShadow: '0 1.5px 4px rgba(0, 0, 0, 0.08)',
                          position: 'relative',
                        }}
                      >
                        {/* Optional Card Title & Tag */}
                        {msg.title && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '6px',
                              marginBottom: '5px',
                              borderBottom: '1px solid rgba(0,0,0,0.06)',
                              paddingBottom: '4px',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '0.82rem',
                                fontWeight: 800,
                                color: msg.accent || '#0E7490',
                              }}
                            >
                              {msg.title}
                            </span>
                            {msg.tag && (
                              <span
                                style={{
                                  fontSize: '0.625rem',
                                  fontWeight: 700,
                                  color: '#0369A1',
                                  background: '#F0F9FF',
                                  padding: '1px 6px',
                                  borderRadius: '100px',
                                  border: '1px solid #BAE6FD',
                                }}
                              >
                                {msg.tag}
                              </span>
                            )}
                          </div>
                        )}

                        <div style={{ fontSize: '0.8125rem', color: '#1E293B', lineHeight: 1.48 }}>
                          {msg.text}
                        </div>

                        <div
                          style={{
                            fontSize: '0.65rem',
                            color: '#64748B',
                            textAlign: 'right',
                            marginTop: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: '3px',
                          }}
                        >
                          <span>{msg.time}</span>
                          {!isIncoming && <CheckCheck size={13} color="#34B7F1" />}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* WhatsApp Chat Bottom Input Bar */}
                <div
                  style={{
                    background: '#F0F2F5',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    borderTop: '1px solid #E5E7EB',
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      background: '#FFFFFF',
                      borderRadius: '24px',
                      padding: '9px 16px',
                      fontSize: '0.8125rem',
                      color: '#94A3B8',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    Reply to Surya Care...
                  </div>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#075E54',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 2px 6px rgba(7, 94, 84, 0.3)',
                    }}
                  >
                    <Send size={15} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .care-journey-col { grid-column: span 12 !important; }
          .care-chat-col { grid-column: span 12 !important; margin-top: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
