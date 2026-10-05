import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';

const E = [0.22, 1, 0.36, 1] as const;

type NavItem = { label: string; href: string; sectionId?: string };

const navLinks: NavItem[] = [
  { label: 'Home',          href: '/',               sectionId: 'home' },
  { label: 'About',         href: '/#about',         sectionId: 'about' },
  { label: 'Doctors',       href: '/#doctors',       sectionId: 'doctors' },
  { label: 'Specialities',  href: '/#specialities',  sectionId: 'specialities' },
  { label: 'Why Choose Us', href: '/#why-choose',    sectionId: 'why-choose' },
  { label: 'Contact',       href: '/#contact',       sectionId: 'contact' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sectionIds = navLinks.map(n => n.sectionId).filter(Boolean) as string[];
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('home');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = useCallback((item: NavItem) => {
    setMobileOpen(false);
    if (item.sectionId && location.pathname === '/') scrollTo(item.sectionId);
  }, [location.pathname]);

  const isItemActive = (item: NavItem) =>
    item.sectionId ? activeSection === item.sectionId : location.pathname === item.href;

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9999, height: 3,
          background: 'linear-gradient(90deg, #C0183E, #0891B2)',
          transformOrigin: 'left',
          width: '100%',
          scaleX: 0,
        }}
        id="scroll-bar"
      />

      <header
        role="banner"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.94)',
          borderBottom: scrolled ? '1px solid #E3E8F0' : '1px solid rgba(227,232,240,0.7)',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.08)' : 'none',
          backdropFilter: 'blur(20px) saturate(180%)',
          transition: 'box-shadow 300ms, border-color 300ms',
        }}
      >
        <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1.25rem, 3vw, 2.5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 74, gap: 8, justifyContent: 'space-between' }}>

            {/* Brand Logo */}
            <Link
              to="/"
              onClick={() => scrollTo('home')}
              aria-label={siteConfig.name}
              style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, textDecoration: 'none' }}
            >
              <img
                src="/assets/ysr_logo.png"
                alt={siteConfig.name}
                width={200}
                height={58}
                style={{
                  height: 58,
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex" style={{ alignItems: 'center', gap: 2 }}>
              {navLinks.map((item) => {
                const active = isItemActive(item);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={(e) => {
                      if (item.sectionId && location.pathname === '/') {
                        e.preventDefault();
                        handleClick(item);
                      }
                    }}
                    style={{
                      display: 'inline-block',
                      padding: '6px 13px', borderRadius: 8,
                      fontSize: '0.875rem', fontWeight: active ? 700 : 500,
                      textDecoration: 'none',
                      color: active ? '#C0183E' : '#374151',
                      background: active ? '#FFF0F3' : 'transparent',
                      transition: 'all 150ms ease',
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions: Phone & Book CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => trackEvent('nav_phone_click')}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '7px 14px', borderRadius: 10,
                  fontSize: '0.8125rem', fontWeight: 700,
                  color: '#C0183E', background: '#FFF0F3',
                  border: '1px solid #F5C2CE', textDecoration: 'none',
                  transition: 'all 200ms ease',
                }}
                className="hidden sm:flex"
              >
                <Phone size={14} />
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              <a
                href="/#appointment"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    scrollTo('appointment');
                  }
                  trackEvent('nav_book_click');
                }}
                className="btn btn-primary btn-sm"
                style={{ borderRadius: '10px' }}
              >
                <span>Book Appointment</span>
                <ArrowRight size={14} />
              </a>

              {/* Mobile hamburger */}
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 38, height: 38, borderRadius: 8,
                  border: '1px solid #E3E8F0', background: 'white',
                  cursor: 'pointer', color: '#374151',
                }}
                className="lg:hidden"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 1001,
                background: 'rgba(13,31,60,0.5)', backdropFilter: 'blur(4px)',
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: E }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '84%', maxWidth: 340, zIndex: 1002,
                background: 'white', padding: '24px 20px',
                display: 'flex', flexDirection: 'column',
                boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                <Link to="/" onClick={() => setMobileOpen(false)} aria-label={siteConfig.name} style={{ display: 'inline-block' }}>
                  <img
                    src="/assets/ysr_logo.png"
                    alt={siteConfig.name}
                    width={200}
                    height={48}
                    style={{
                      height: 48,
                      width: 'auto',
                      maxWidth: 200,
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  style={{ padding: 6, background: '#F1F5F9', border: 'none', borderRadius: 8, cursor: 'pointer' }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1, overflowY: 'auto' }}>
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => handleClick(item)}
                    style={{
                      padding: '12px 14px', borderRadius: 10,
                      fontWeight: 600, fontSize: '0.95rem',
                      color: isItemActive(item) ? '#C0183E' : '#334155',
                      background: isItemActive(item) ? '#FFF0F3' : 'transparent',
                      textDecoration: 'none', display: 'flex',
                      alignItems: 'center', justifyContent: 'space-between',
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={14} style={{ opacity: isItemActive(item) ? 1 : 0.4 }} />
                  </Link>
                ))}
              </div>

              <div style={{ paddingTop: 20, borderTop: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a
                  href={`tel:${siteConfig.phone}`}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: 8, padding: '12px', borderRadius: 10,
                    background: '#FFF0F3', color: '#C0183E',
                    fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem',
                  }}
                >
                  <Phone size={16} />
                  <span>Call Us: {siteConfig.phoneDisplay}</span>
                </a>
                <a
                  href="/#appointment"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-primary"
                  style={{ width: '100%', borderRadius: 10 }}
                >
                  <span>Book Appointment</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
