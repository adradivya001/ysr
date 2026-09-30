import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, ArrowRight, AlertCircle, Calendar, Clock, User, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { specialities } from '@/content/specialities';
import { siteConfig } from '@/content/site.config';
import { useInView, useReducedMotion } from '@/hooks';
import { trackEvent } from '@/lib/analytics';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^(?:\+91)?[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  speciality: z.string().min(1, 'Please select a speciality'),
  preferredDate: z.string().min(1, 'Please choose a date'),
  preferredTime: z.string().min(1, 'Please select a time preference'),
  message: z.string().max(500, 'Max 500 characters').optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please confirm your consent' }) }),
});

type FormValues = z.infer<typeof schema>;

const EASE = [0.22, 1, 0.36, 1] as const;

export function Appointment() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema) as Parameters<typeof useForm<FormValues>>[0]['resolver'],
    defaultValues: {
      speciality: 'General Medicine',
      preferredTime: 'Morning (09:00 AM - 01:00 PM)',
      consent: true,
    },
  });

  const onSubmit = (data: FormValues) => {
    setStatus('submitting');
    trackEvent('appointment_submit_success', { speciality: data.speciality });

    const message = `*Dr. YSR Memorial Hospital - Appointment Request*%0A%0A*Patient Name:* ${data.fullName}%0A*Phone:* ${data.phone}%0A*Speciality:* ${data.speciality}%0A*Date:* ${data.preferredDate}%0A*Time:* ${data.preferredTime}%0A*Reason:* ${data.message || 'Consultation'}`;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

    setTimeout(() => {
      setStatus('success');
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section
      id="appointment"
      ref={ref}
      className="section"
      aria-labelledby="appt-heading"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container" style={{ maxWidth: 1380, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 2.5rem)' }}>
        <div className="grid-2" style={{ alignItems: 'start' }}>
          
          {/* Left info column */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div className="section-label">Appointments</div>
            <h2 id="appt-heading" style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', fontWeight: 700,
              lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '1.25rem',
            }}>
              Your Health Deserves{' '}
              <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Timely Care</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              Find the right speciality and schedule a consultation with our hospital in Sai Nagar, Anantapur. Fill out the request form and our reception team will contact you to confirm your slot.
            </p>

            <div style={{
              background: 'var(--bg-alt)', borderRadius: 20, padding: '1.5rem',
              border: '1px solid var(--border)', marginBottom: '2rem',
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 750, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 6 }}>
                Need Immediate Help?
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: 14 }}>
                For emergencies, urgent surgical evaluation or direct questions, call our 24/7 hospital desk.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn btn-primary"
                style={{ width: '100%', borderRadius: '12px' }}
              >
                <Phone size={16} /> Call Us: {siteConfig.phoneDisplay}
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} color="var(--primary)" />
                <span>OPD Hours: {siteConfig.timings.opd}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} color="var(--primary)" />
                <span>24/7 Emergency & Surgical Support Available</span>
              </div>
            </div>
          </motion.div>

          {/* Right form card */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div style={{
              background: 'white', borderRadius: 28,
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, var(--primary), var(--navy))' }} />

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--primary-bg)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
                    Appointment Request Received!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you! Our hospital reception team at Dr. YSR Memorial Hospital will confirm your slot shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setStatus('idle'); reset(); }}
                    className="btn btn-primary"
                    style={{ borderRadius: '12px' }}
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    
                    {/* Patient Name */}
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Patient Name <span className="required">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Enter full name"
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                        {...register('fullName')}
                      />
                      {errors.fullName && <div className="form-error"><AlertCircle size={13} /> {errors.fullName.message}</div>}
                    </div>

                    {/* Mobile Number */}
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Mobile Number <span className="required">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        {...register('phone')}
                      />
                      {errors.phone && <div className="form-error"><AlertCircle size={13} /> {errors.phone.message}</div>}
                    </div>

                    {/* Select Speciality */}
                    <div className="form-group">
                      <label htmlFor="speciality" className="form-label">
                        Select Speciality <span className="required">*</span>
                      </label>
                      <select
                        id="speciality"
                        className={`form-select ${errors.speciality ? 'error' : ''}`}
                        {...register('speciality')}
                      >
                        {specialities.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.emoji} {s.name}
                          </option>
                        ))}
                      </select>
                      {errors.speciality && <div className="form-error"><AlertCircle size={13} /> {errors.speciality.message}</div>}
                    </div>

                    {/* Date & Time Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      <div className="form-group">
                        <label htmlFor="preferredDate" className="form-label">
                          Preferred Date <span className="required">*</span>
                        </label>
                        <input
                          id="preferredDate"
                          type="date"
                          min={todayStr}
                          className={`form-input ${errors.preferredDate ? 'error' : ''}`}
                          {...register('preferredDate')}
                        />
                        {errors.preferredDate && <div className="form-error"><AlertCircle size={13} /> {errors.preferredDate.message}</div>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="preferredTime" className="form-label">
                          Preferred Time <span className="required">*</span>
                        </label>
                        <select
                          id="preferredTime"
                          className="form-select"
                          {...register('preferredTime')}
                        >
                          <option value="Morning (09:00 AM - 01:00 PM)">Morning (9 AM - 1 PM)</option>
                          <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (2 PM - 5 PM)</option>
                          <option value="Evening (05:00 PM - 09:00 PM)">Evening (5 PM - 9 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Reason */}
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Reason for Consultation (Optional)
                      </label>
                      <input
                        id="message"
                        type="text"
                        placeholder="e.g. Regular checkup, abdominal pain, fever"
                        className="form-input"
                        {...register('message')}
                      />
                    </div>

                    {/* Consent */}
                    <div className="checkbox-group">
                      <input
                        id="consent"
                        type="checkbox"
                        {...register('consent')}
                      />
                      <label htmlFor="consent" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                        I confirm that the details provided are accurate and agree to be contacted for appointment confirmation.
                      </label>
                    </div>
                    {errors.consent && <div className="form-error"><AlertCircle size={13} /> {errors.consent.message}</div>}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%', marginTop: 6, borderRadius: '14px' }}
                    >
                      {status === 'submitting' ? 'Submitting...' : 'BOOK APPOINTMENT'} <ArrowRight size={17} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
