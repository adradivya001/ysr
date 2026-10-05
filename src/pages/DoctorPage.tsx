import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Award, ChevronRight, ShieldCheck, Stethoscope, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { getDoctorBySlug } from '@/content/doctors';
import { siteConfig } from '@/content/site.config';
import { NotFoundPage } from './NotFoundPage';

export function DoctorPage() {
  const { slug } = useParams<{ slug: string }>();
  const doctor = slug ? getDoctorBySlug(slug) : undefined;

  if (!doctor) return <NotFoundPage />;

  return (
    <>
      <Helmet>
        <title>{`${doctor.name} – ${doctor.title} | ${siteConfig.name}`}</title>
        <meta name="description" content={`${doctor.name}, ${doctor.title} at ${siteConfig.name}, Sai Nagar, Anantapur. ${doctor.qualifications}. Experience: ${doctor.experience}.`} />
        <link rel="canonical" href={`${siteConfig.seo.siteUrl}/doctors/${doctor.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Physician',
          name: doctor.name,
          medicalSpecialty: doctor.department,
          alumniOf: doctor.qualifications,
          worksFor: {
            '@type': 'Hospital',
            name: siteConfig.name,
          },
        })}</script>
      </Helmet>

      <div style={{ paddingTop: 80, minHeight: '100vh', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', paddingTop: '3rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 8, listStyle: 'none', padding: 0, fontSize: '0.875rem', color: '#64748B' }}>
              <li><Link to="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link to="/#specialities" style={{ color: '#64748B', textDecoration: 'none' }}>Specialities</Link></li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: '#0F172A', fontWeight: 600 }}>{doctor.name}</li>
            </ol>
          </nav>

          <Link to="/#specialities" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', borderRadius: 10, background: '#FFFFFF', border: '1px solid #E2E8F0',
            fontSize: '0.875rem', fontWeight: 600, color: '#334155', textDecoration: 'none',
            marginBottom: '2rem', boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
          }}>
            <ArrowLeft size={15} /> Back to Specialities
          </Link>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start',
            background: '#FFFFFF', padding: '2.5rem', borderRadius: '24px',
            border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          }}>
            {/* Left Column: Doctor Photo & Quick Info Card */}
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              background: '#F8FAFC', padding: '2rem', borderRadius: '20px',
              border: '1px solid #E2E8F0', textAlign: 'center',
            }}>
              <img
                src={doctor.image}
                alt={doctor.name}
                width={240}
                height={240}
                loading="lazy"
                decoding="async"
                style={{
                  width: 240, height: 240, borderRadius: '20px', objectFit: 'cover',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.1)', marginBottom: '1.25rem',
                  border: '3px solid #FFFFFF',
                }}
              />
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>{doctor.name}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0E7490', marginTop: 4 }}>{doctor.designation}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: 4 }}>{doctor.qualifications}</div>

              {doctor.languages && doctor.languages.length > 0 && (
                <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
                  {doctor.languages.map((lang) => (
                    <span key={lang} style={{
                      padding: '3px 8px', borderRadius: 6, fontSize: '0.75rem',
                      background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#475569', fontWeight: 600,
                    }}>
                      🗣️ {lang}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Detailed Bio & Consultation Booking */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 12px', borderRadius: 9999, background: '#ECFEFF', color: '#0E7490',
                fontSize: '0.82rem', fontWeight: 700, marginBottom: '1rem',
              }}>
                <Stethoscope size={14} /> {doctor.department}
              </div>

              <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                {doctor.name}
              </h1>

              <div style={{ fontSize: '1.1rem', color: '#0E7490', fontWeight: 600, marginBottom: '1rem' }}>
                {doctor.title}
              </div>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {doctor.bio}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: '2rem' }}>
                <div style={{ padding: '14px', borderRadius: 12, background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Qualifications</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginTop: 4 }}>{doctor.qualifications}</div>
                </div>
                <div style={{ padding: '14px', borderRadius: 12, background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Clinical Experience</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0E7490', marginTop: 4 }}>{doctor.experience}</div>
                </div>
              </div>

              {doctor.focusAreas && doctor.focusAreas.length > 0 && (
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 750, color: '#0F172A', marginBottom: 8 }}>Special Focus Areas:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {doctor.focusAreas.map((area) => (
                      <span key={area} style={{
                        padding: '4px 10px', borderRadius: 8, fontSize: '0.78rem', fontWeight: 600,
                        background: '#ECFEFF', border: '1px solid #CFFAFE', color: '#0E7490',
                      }}>
                        ✓ {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px', borderRadius: 12, background: '#ECFEFF', color: '#0E7490', marginBottom: '2rem' }}>
                <Clock size={20} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>OPD Consultation Hours</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{doctor.opdTimings}</div>
                </div>
              </div>

              <Link
                to="/#appointment"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 12,
                  background: 'linear-gradient(135deg, #0E7490 0%, #0369A1 100%)',
                  color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(14,116,144,0.3)',
                }}
              >
                <Calendar size={18} />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
