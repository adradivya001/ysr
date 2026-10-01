import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Doctors } from '@/components/sections/Doctors';
import { Specialities } from '@/components/sections/Specialities';
import { CareBeyondVisit } from '@/components/sections/CareBeyondVisit';
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
            'Orthopaedics & Joint Replacement',
            'General Medicine & Diabetology',
            'Obstetrics & Gynaecology',
          ],
        })}</script>
      </Helmet>

      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT THE HOSPITAL */}
      <About />

      {/* 3. EXPERT DOCTORS ROSTER */}
      <Doctors />

      {/* 4. OUR SPECIALITIES */}
      <Specialities />

      {/* 5. CARE BEYOND THE VISIT (CONTINUED POST-CARE) */}
      <CareBeyondVisit />

      {/* 6. APPOINTMENT BOOKING */}
      <Appointment />

      {/* 6. CONTACT & LOCATION */}
      <Contact />

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <FAQ />
    </>
  );
}
