import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/content/faq';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="section"
      aria-labelledby="faq-heading"
      style={{
        background: '#ECFEFF',
        padding: 'clamp(3.5rem, 6vw, 6rem) 0',
        borderBottom: '1px solid #CFFAFE',
      }}
    >
      <div className="container" style={{ maxWidth: 880, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>

        {/* Section Heading */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 14px', borderRadius: '100px', background: '#ECFEFF',
            border: '1px solid #CFFAFE', color: '#0E7490', fontSize: '0.78rem',
            fontWeight: 750, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem'
          }}>
            <HelpCircle size={14} color="#0E7490" /> COMMON QUESTIONS
          </div>
          <h2 id="faq-heading" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 850,
            lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A',
          }}>
            Frequently Asked{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0E7490 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Questions
            </span>
          </h2>
          <p style={{
            marginTop: '10px', color: '#64748B', fontSize: '1rem',
            maxWidth: 600, margin: '10px auto 0', lineHeight: 1.6
          }}>
            Quick answers about our doctors, blood tests, X-rays, govt. recognition, and booking visits.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 16,
                  border: isOpen ? '1.5px solid #0E7490' : '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 4px 16px rgba(14, 116, 144, 0.08)' : '0 2px 6px rgba(0,0,0,0.02)',
                  transition: 'all 200ms ease',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.025rem',
                    fontWeight: 750,
                    color: isOpen ? '#0E7490' : '#0F172A',
                  }}
                >
                  <span>{faq.question}</span>
                  <div style={{
                    width: 30, height: 30, borderRadius: '50%',
                    background: isOpen ? '#0E7490' : '#ECFEFF',
                    color: isOpen ? '#FFFFFF' : '#0E7490',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 240ms',
                    flexShrink: 0,
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                    >
                      <div style={{
                        padding: '0 22px 20px', color: '#475569', fontSize: '0.935rem',
                        lineHeight: 1.75, borderTop: '1px solid #F1F5F9', paddingTop: '12px'
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
