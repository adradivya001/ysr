import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ChevronRight, CheckCircle2, Calendar, Stethoscope } from 'lucide-react';
import { getSpecialityBySlug } from '@/content/specialities';
import { doctors } from '@/content/doctors';
import { siteConfig } from '@/content/site.config';
import { NotFoundPage } from './NotFoundPage';

export function SpecialityPage() {
  const { slug } = useParams<{ slug: string }>();
  const spec = slug ? getSpecialityBySlug(slug) : undefined;

  if (!spec) return <NotFoundPage />;

  const relatedDoctors = doctors.filter((d) => d.specialitySlug === spec.slug);

  return (
    <>
      <Helmet>
        <title>{spec.name} | {siteConfig.name}</title>
        <meta name="description" content={`${spec.name} at ${siteConfig.name}, Sai Nagar, Anantapur. ${spec.shortDesc}`} />
        <link rel="canonical" href={`${siteConfig.seo.siteUrl}/specialities/${spec.slug}`} />
      </Helmet>

      <div style={{ paddingTop: 80, minHeight: '100vh', background: '#F8FAFC' }}>
        <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem', maxWidth: 960, margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', alignItems: 'center', gap: 8, listStyle: 'none', padding: 0, fontSize: '0.875rem', color: '#64748B' }}>
              <li><Link to="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link to="/#specialities" style={{ color: '#64748B', textDecoration: 'none' }}>Specialities</Link></li>
              <li><ChevronRight size={14} /></li>
              <li aria-current="page" style={{ color: '#0F172A', fontWeight: 600 }}>{spec.name}</li>
            </ol>
          </nav>

          <Link
            to="/#specialities"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', borderRadius: 10, background: '#FFFFFF', border: '1px solid #E2E8F0',
              fontSize: '0.875rem', fontWeight: 600, color: '#334155', textDecoration: 'none',
              marginBottom: '2rem', boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            }}
          >
            <ArrowLeft size={14} /> All Specialities
          </Link>

          <div style={{ background: '#FFFFFF', borderRadius: 24, padding: '2.5rem', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>{spec.emoji}</span>
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                {spec.name}
              </h1>
            </div>

            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
              {spec.longDesc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: '2.5rem' }}>
              <div style={{ padding: '20px', borderRadius: 16, background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Key Treatments
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {spec.keyTreatments.map((tr) => (
                    <div key={tr} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: '#334155' }}>
                      <CheckCircle2 size={16} color="#0E7490" style={{ flexShrink: 0 }} />
                      <span>{tr}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: '20px', borderRadius: 16, background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Conditions Treated
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {spec.conditionsTreated.map((cd) => (
                    <div key={cd} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: '#334155' }}>
                      <CheckCircle2 size={16} color="#0369A1" style={{ flexShrink: 0 }} />
                      <span>{cd}</span>
                    </div>
                  ))}
                </div>
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
              <span>Book Appointment for {spec.name}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
