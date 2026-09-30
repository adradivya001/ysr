export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  department: string;
  experience: string;
  qualifications: string;
  specialitySlug: string;
  bio: string;
  image: string;
  languages: string[];
  opdTimings: string;
}

export const doctors: Doctor[] = [
  {
    id: 'consultant-physician',
    slug: 'consultant-physician',
    name: 'Senior Consultant Physician',
    title: 'Senior Consultant - Internal Medicine',
    department: 'General Medicine',
    experience: '18+ Years',
    qualifications: 'MBBS, MD (General Medicine)',
    specialitySlug: 'general-medicine',
    bio: 'Dedicated physician specializing in chronic disease management, diabetes, hypertensive care, and comprehensive adult inpatient and outpatient medical evaluations.',
    image: '/assets/doctors/doctor-sivasankar.png',
    languages: ['English', 'Telugu', 'Hindi'],
    opdTimings: 'Mon - Sat: 9:00 AM - 2:00 PM, 5:00 PM - 8:30 PM',
  },
  {
    id: 'consultant-surgeon',
    slug: 'consultant-surgeon',
    name: 'Consultant General & Laparoscopic Surgeon',
    title: 'Senior Laparoscopic & General Surgeon',
    department: 'General Surgery',
    experience: '15+ Years',
    qualifications: 'MBBS, MS (General Surgery), FMAS',
    specialitySlug: 'general-surgery',
    bio: 'Expert laparoscopic surgeon specializing in minimally invasive abdominal surgeries, hernia repairs, gall bladder treatments, and emergency surgical interventions.',
    image: '/assets/doctors/doctor-specialist.png',
    languages: ['English', 'Telugu'],
    opdTimings: 'Mon - Sat: 10:00 AM - 3:00 PM, 6:00 PM - 9:00 PM',
  },
  {
    id: 'consultant-gynecologist',
    slug: 'consultant-gynecologist',
    name: 'Consultant Obstetrician & Gynaecologist',
    title: 'Senior Consultant - Obstetrics & Gynaecology',
    department: 'Obstetrics & Gynaecology',
    experience: '14+ Years',
    qualifications: 'MBBS, DGO, DNB (OBG)',
    specialitySlug: 'obstetrics-gynaecology',
    bio: 'Compassionate specialist providing holistic healthcare for women, including prenatal care, high-risk maternity care, and advanced gynecological procedures.',
    image: '/assets/doctors/doctor-swetha.png',
    languages: ['English', 'Telugu', 'Hindi'],
    opdTimings: 'Mon - Sat: 9:30 AM - 1:30 PM, 5:30 PM - 8:30 PM',
  },
  {
    id: 'consultant-pediatrician',
    slug: 'consultant-pediatrician',
    name: 'Consultant Paediatrician',
    title: 'Specialist Paediatrician & Neonatal Care',
    department: 'Paediatrics',
    experience: '12+ Years',
    qualifications: 'MBBS, MD (Paediatrics)',
    specialitySlug: 'paediatrics',
    bio: 'Experienced paediatrician focused on newborn care, child development, complete immunization programs, and childhood infection treatment.',
    image: '/assets/doctors/doctor-paediatrician.png',
    languages: ['English', 'Telugu', 'Kannada'],
    opdTimings: 'Mon - Sat: 10:00 AM - 2:00 PM, 6:00 PM - 9:00 PM',
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
