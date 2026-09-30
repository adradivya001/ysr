export interface HospitalConfig {
  name: string;
  legalName: string;
  tagline: string;
  subTagline: string;
  description: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string;
  phoneDisplay: string;
  emergencyPhone: string;
  emergencyPhoneDisplay: string;
  whatsappNumber: string;
  email: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    emergency: string;
    emergencyDisplay: string;
    whatsapp: string;
    email: string;
    address: {
      street: string;
      locality: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
      postalCode: string;
      country: string;
      fullAddress: string;
      mapUrl: string;
    };
  };
  address: {
    street: string;
    locality: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    postalCode: string;
    full: string;
    fullAddress: string;
    mapUrl: string;
  };
  timings: {
    opd: string;
    emergency: string;
    pharmacy: string;
    diagnostics: string;
  };
  features: {
    multispeciality: boolean;
    icuAvailable: boolean;
    nicuAvailable: boolean;
    pharmacy24x7: boolean;
    lab24x7: boolean;
    ambulance24x7: boolean;
    cashlessInsurance: boolean;
    operationTheaters: number;
    bedCapacity: number;
    showFAQ: boolean;
  };
  seo: {
    siteUrl: string;
    ogImage: string;
  };
  accreditations: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    navy: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
}

export const siteConfig: HospitalConfig = {
  name: 'Dr. YSR Memorial Hospital',
  legalName: 'Dr. YSR Memorial Multispeciality Hospital',
  tagline: 'Compassionate Care. Advanced Treatment. Better Health.',
  subTagline: 'Comprehensive Healthcare. Compassionate Service. Better Outcomes.',
  description:
    'Dr. YSR Memorial Hospital is a trusted multispeciality healthcare destination in Sai Nagar, Anantapur, providing comprehensive medical, surgical, diagnostic and 24/7 emergency care for patients and families.',
  shortDescription:
    'Dr. YSR Memorial Hospital is a trusted multispeciality healthcare destination in Sai Nagar, Anantapur, providing comprehensive medical, surgical, diagnostic and 24/7 emergency care for patients and families.',
  heroHeadline: 'Compassionate Care. Advanced Treatment. Better Health.',
  heroSubheadline:
    'A trusted multispeciality healthcare destination in Sai Nagar, Anantapur, providing comprehensive medical, surgical, diagnostic and emergency care for patients and families.',
  phone: '+918554247365',
  phoneDisplay: '+91 8554 247365',
  emergencyPhone: '+918554247365',
  emergencyPhoneDisplay: '+91 8554 247365 (24/7 Emergency)',
  whatsappNumber: '918554247365',
  email: 'care@drysmemorialhospital.com',
  contact: {
    phone: '+918554247365',
    phoneDisplay: '+91 8554 247365',
    emergency: '+918554247365',
    emergencyDisplay: '+91 8554 247365',
    whatsapp: '918554247365',
    email: 'care@drysmemorialhospital.com',
    address: {
      street: '12-2-878, 1st Cross Road, Ashok Nagar',
      locality: 'Ashok Nagar',
      area: 'Sai Nagar',
      city: 'Anantapur',
      state: 'Andhra Pradesh',
      pincode: '515001',
      postalCode: '515001',
      country: 'India',
      fullAddress: '12-2-878, 1st Cross Road, Ashok Nagar, Sai Nagar, Anantapur, Andhra Pradesh – 515001',
      mapUrl: 'https://maps.google.com/?q=Dr.+YSR+Memorial+Hospital+Sai+Nagar+Anantapur',
    },
  },
  address: {
    street: '12-2-878, 1st Cross Road, Ashok Nagar',
    locality: 'Ashok Nagar',
    area: 'Sai Nagar',
    city: 'Anantapur',
    state: 'Andhra Pradesh',
    pincode: '515001',
    postalCode: '515001',
    full: '12-2-878, 1st Cross Road, Ashok Nagar, Sai Nagar, Anantapur, Andhra Pradesh – 515001',
    fullAddress: '12-2-878, 1st Cross Road, Ashok Nagar, Sai Nagar, Anantapur, Andhra Pradesh – 515001',
    mapUrl: 'https://maps.google.com/?q=Dr.+YSR+Memorial+Hospital+Sai+Nagar+Anantapur',
  },
  timings: {
    opd: 'Mon - Sun: 8:00 AM - 9:00 PM',
    emergency: '24 Hours / 7 Days Open',
    pharmacy: '24/7 Open On-Campus',
    diagnostics: '24/7 Diagnostic & Imaging Lab',
  },
  features: {
    multispeciality: true,
    icuAvailable: true,
    nicuAvailable: true,
    pharmacy24x7: true,
    lab24x7: true,
    ambulance24x7: true,
    cashlessInsurance: true,
    operationTheaters: 4,
    bedCapacity: 100,
    showFAQ: true,
  },
  seo: {
    siteUrl: 'https://drysmemorialhospital.com',
    ogImage: '/assets/hero-paediatric.jpg',
  },
  accreditations: [
    '24/7 Emergency Response',
    'Advanced Surgical Theatres',
    'NABH Quality Standards Compliant',
    'Comprehensive Diagnostics & Pharmacy',
  ],
  colors: {
    primary: '#0e7490',
    secondary: '#0369a1',
    accent: '#f59e0b',
    navy: '#0f172a',
  },
  navigation: [
    { label: 'Home', href: '/#hero' },
    { label: 'About Us', href: '/#about' },
    { label: 'Specialities', href: '/#specialities' },
    { label: 'Services', href: '/#services' },
    { label: 'Facilities', href: '/#facilities' },
    { label: 'Patient Journey', href: '/#journey' },
    { label: 'Why Choose Us', href: '/#why-choose' },
    { label: 'Emergency', href: '/#emergency' },
    { label: 'Contact', href: '/#contact' },
  ],
};
