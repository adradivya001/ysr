import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { About } from '@/components/sections/About';
import { Specialities } from '@/components/sections/Specialities';
import { EmergencySection } from '@/components/sections/EmergencySection';
import { MedicalServicesSection } from '@/components/sections/MedicalServicesSection';
import { FacilitiesSection } from '@/components/sections/FacilitiesSection';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { CareBand } from '@/components/sections/CareBand';
import { PatientJourney } from '@/components/sections/PatientJourney';
import { Appointment } from '@/components/sections/Appointment';
import { Contact } from '@/components/sections/Contact';
import { FAQ } from '@/components/sections/FAQ';
import { siteConfig } from '@/content/site.config';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>{siteConfig.name}, Anantapur | {siteConfig.tagline}</title>
        <meta name="description" content={siteConfig.shortDescription} />
        <link rel="canonical" href={siteConfig.seo.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.seo.siteUrl} />
        <meta property="og:title" content={`${siteConfig.name} | ${siteConfig.tagline}`} />
        <meta property="og:description" content={siteConfig.shortDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Hospital',
          name: siteConfig.name,
          url: siteConfig.seo.siteUrl,
          telephone: siteConfig.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.locality,
            addressRegion: siteConfig.address.state,
            postalCode: siteConfig.address.pincode,
            addressCountry: 'India',
          },
          areaServed: 'Anantapur',
          medicalSpecialty: [
            'General Medicine',
            'General Surgery',
            'Cardiology',
            'Orthopaedics',
            'Paediatrics',
            'Obstetrics & Gynaecology',
            'Neurosurgery',
            'Pulmonology',
            'ENT',
            'Urology',
            'Nephrology',
            'Plastic Surgery',
            'Surgical Gastroenterology',
          ],
        })}</script>
      </Helmet>

      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. TRUST STATS STRIP */}
      <TrustStrip />

      {/* 3. ABOUT THE HOSPITAL */}
      <About />

      {/* 4. OUR SPECIALITIES (VERTICAL TABS + DETAIL PANEL) */}
      <Specialities />

      {/* 5. 24/7 EMERGENCY CARE SECTION */}
      <EmergencySection />

      {/* 6. OUR MEDICAL SERVICES (8-CARD GRID) */}
      <MedicalServicesSection />

      {/* 7. FACILITIES & SUPPORT (8 CAPABILITY CARDS) */}
      <FacilitiesSection />

      {/* 8. WHY CHOOSE US (5 COLORFUL REASON CARDS) */}
      <WhyChoose />

      {/* 9. CARE BAND QUOTE BANNER */}
      <CareBand />

      {/* 10. PATIENT CARE JOURNEY TIMELINE */}
      <PatientJourney />

      {/* 11. APPOINTMENT BOOKING FORM */}
      <Appointment />

      {/* 12. CONTACT & LOCATION MAP */}
      <Contact />

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <FAQ />
    </>
  );
}
