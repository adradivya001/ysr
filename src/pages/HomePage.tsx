import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Doctors } from '@/components/sections/Doctors';
import { Specialities } from '@/components/sections/Specialities';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { CareBeyondVisit } from '@/components/sections/CareBeyondVisit';
import { Appointment } from '@/components/sections/Appointment';
import { Contact } from '@/components/sections/Contact';
import { FAQ } from '@/components/sections/FAQ';
import { siteConfig } from '@/content/site.config';

export function HomePage() {
  const pageTitle = `${siteConfig.name} | Multispeciality Hospital in Anantapur`;
  const pageDesc = siteConfig.shortDescription;

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': ['Hospital', 'EmergencyService', 'MedicalOrganization'],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: 'Dr. YSR Memorial Multispeciality Hospital',
    url: siteConfig.seo.siteUrl,
    logo: `${siteConfig.seo.siteUrl}/assets/ysr_logo.png`,
    image: `${siteConfig.seo.siteUrl}/assets/ysr_hospital.png`,
    description: pageDesc,
    telephone: siteConfig.phone,
    emergencyTelephone: siteConfig.emergencyPhone,
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Insurance',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '14.6819',
      longitude: '77.6006',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Anantapur',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Andhra Pradesh',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    medicalSpecialty: [
      'Orthopaedics & Joint Replacement',
      'General Medicine & Diabetology',
      'Obstetrics & Gynaecology',
      'Emergency & Trauma Care',
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Total Knee & Hip Replacement',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Diabetology & Metabolic Care',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Maternity & Laparoscopic Gynaecology',
      },
      {
        '@type': 'MedicalProcedure',
        name: '24/7 Emergency & ICU Care',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={siteConfig.seo.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.seo.siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={`${siteConfig.seo.siteUrl}/assets/ysr_hospital.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={`${siteConfig.seo.siteUrl}/assets/ysr_hospital.png`} />
        <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      </Helmet>

      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT THE HOSPITAL */}
      <About />

      {/* 3. EXPERT DOCTORS ROSTER */}
      <Doctors />

      {/* 4. OUR SPECIALITIES */}
      <Specialities />

      {/* 5. WHY CHOOSE US */}
      <WhyChoose />

      {/* 6. CARE BEYOND THE VISIT (CONTINUED POST-CARE) */}
      <CareBeyondVisit />

      {/* 7. APPOINTMENT BOOKING */}
      <Appointment />

      {/* 8. CONTACT & LOCATION */}
      <Contact />

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <FAQ />
    </>
  );
}
