import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Phone } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';
import { useReducedMotion } from '@/hooks';

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9.5c.2-.5.5-.5.7-.5h.5c.2 0 .4.1.5.3l.9 1.9c.1.3.1.5 0 .7l-.4.6c-.1.2-.2.3 0 .5.4.6 1 1.2 1.6 1.6.2.2.3.1.5 0l.6-.4c.2-.1.4-.1.7 0l1.9.9c.2.1.3.3.3.5v.5c0 .2 0 .5-.5.7-.4.2-1.3.3-2.6-.4-1.6-.9-2.9-2.2-3.8-3.8-.7-1.3-.6-2.2-.4-2.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function scrollToAppointment() {
  const el = document.getElementById('appointment');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.href = '/#appointment';
  }
}

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const rm = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('home') || document.getElementById('hero');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        // Reveal FAB once the hero section scroll gets completed (hero bottom leaves top of viewport)
        setVisible(heroBottom <= 120);
      } else {
        setVisible(window.scrollY > 450);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Dr. YSR Memorial Hospital, I would like to inquire about appointments and healthcare services.'
  )}`;

  const tabs = [
    {
      id: 'whatsapp',
      label: 'WhatsApp Chat',
      bg: 'linear-gradient(135deg, #00C49F 0%, #00A884 100%)',
      shadow: '0 8px 24px rgba(0, 168, 132, 0.35)',
      icon: <WhatsAppIcon size={21} />,
      onClick: () => {
        trackEvent('fab_whatsapp_click');
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      },
    },
    {
      id: 'appointment',
      label: 'Book Appointment',
      bg: 'linear-gradient(135deg, #17324D 0%, #0E2135 100%)',
      shadow: '0 8px 24px rgba(14, 33, 53, 0.35)',
      icon: <CalendarDays size={20} color="#FFFFFF" />,
      onClick: () => {
        trackEvent('fab_appointment_click');
        scrollToAppointment();
      },
    },
    {
      id: 'emergency',
      label: 'Emergency: 24/7 Care',
      bg: 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)',
      shadow: '0 8px 24px rgba(225, 29, 72, 0.38)',
      icon: <Phone size={20} color="#FFFFFF" />,
      onClick: () => {
        trackEvent('fab_emergency_click');
        window.location.href = `tel:${siteConfig.contact.phone}`;
      },
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="floating-actions-container"
          initial={rm ? false : { x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={rm ? false : { x: 70, opacity: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 220 }}
          style={{
            position: 'fixed',
            right: 0,
            top: '52%',
            transform: 'translateY(-50%)',
            zIndex: 990,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            pointerEvents: 'auto',
          }}
          role="complementary"
          aria-label="Floating quick actions"
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {/* Tooltip Label on Hover */}
              <AnimatePresence>
                {hoveredTab === tab.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.95 }}
                    animate={{ opacity: 1, x: -8, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute',
                      right: '100%',
                      marginRight: '6px',
                      background: '#0E2135',
                      color: '#FFFFFF',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 750,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      pointerEvents: 'none',
                    }}
                  >
                    {tab.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tab Button Sticking from Right Edge */}
              <motion.button
                onClick={tab.onClick}
                whileHover={rm ? {} : { x: -8, scale: 1.04 }}
                whileTap={rm ? {} : { scale: 0.94 }}
                aria-label={tab.label}
                style={{
                  width: '56px',
                  height: '52px',
                  borderTopLeftRadius: '26px',
                  borderBottomLeftRadius: '26px',
                  borderTopRightRadius: '0px',
                  borderBottomRightRadius: '0px',
                  background: tab.bg,
                  boxShadow: tab.shadow,
                  border: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: '10px',
                  paddingRight: '6px',
                  outline: 'none',
                }}
              >
                {/* Frosted Glass Circle Inner Badge */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.22)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.25)',
                  }}
                >
                  {tab.icon}
                </div>
              </motion.button>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
