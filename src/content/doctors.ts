export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  department: string;
  speciality: string;
  designation: string;
  experience: string;
  qualifications: string;
  specialitySlug: string;
  bio: string;
  image: string;
  languages: string[];
  opdTimings: string;
  focusAreas: string[];
  isLeadership?: boolean;
}

export const doctors: Doctor[] = [
  {
    id: 'dr-kethireddy-venkata-mohan-reddy',
    slug: 'dr-kethireddy-venkata-mohan-reddy',
    name: 'Dr. Kethi Reddy Venkata Mohan Reddy',
    title: 'Chief Joint Replacement & Orthopaedic Surgeon',
    department: 'Orthopaedics & Joint Replacement',
    speciality: 'Joint Replacement & Orthopaedics',
    designation: 'Joint Replacement Surgeon | M.S (Ortho)',
    experience: '20+ Years',
    qualifications: 'MBBS, M.S (Ortho)',
    specialitySlug: 'orthopaedics',
    bio: 'Renowned Chief Orthopaedic & Joint Replacement Surgeon with extensive expertise in primary & revision total knee and hip replacements, arthroscopic sports injury treatments, complex fracture fixation, and deformity corrections.',
    image: '/assets/ysr_doctor.png',
    languages: ['English', 'Telugu', 'Hindi', 'Kannada'],
    opdTimings: 'Mon - Sat: 9:30 AM - 2:00 PM, 5:30 PM - 9:00 PM',
    focusAreas: ['Total Knee Replacement', 'Total Hip Replacement', 'Arthroscopic Surgery', 'Complex Trauma & Fractures', 'Spine & Bone Care'],
    isLeadership: true,
  },
  {
    id: 'dr-r-umesh-naik',
    slug: 'dr-r-umesh-naik',
    name: 'Dr. R. Umesh Naik',
    title: 'Consultant Physician & Diabetologist',
    department: 'General Medicine',
    speciality: 'Diabetology & Internal Medicine',
    designation: 'Consultant Physician | Diabetologist',
    experience: '15+ Years',
    qualifications: 'MBBS, MD (General Medicine)',
    specialitySlug: 'general-medicine',
    bio: 'Dedicated Consultant Physician and Diabetologist specializing in comprehensive diabetes care, metabolic disorders, hypertension, seasonal fevers, infectious diseases, and adult inpatient and outpatient care.',
    image: '/assets/ysr_d1.png',
    languages: ['English', 'Telugu', 'Hindi', 'Kannada'],
    opdTimings: 'Mon - Sat: 9:00 AM - 2:00 PM, 5:00 PM - 8:30 PM',
    focusAreas: ['Diabetes Management', 'Hypertension & BP Care', 'Infectious Diseases', 'Metabolic Health', 'General Physician Care'],
    isLeadership: true,
  },
  {
    id: 'dr-p-suguna',
    slug: 'dr-p-suguna',
    name: 'Dr. P. Suguna',
    title: 'Consultant Obstetrician & Gynaecologist',
    department: 'Obstetrics & Gynaecology',
    speciality: 'Obstetrics & Gynaecology (FMAS)',
    designation: 'Obstetrician & Gynaecologist | FMAS',
    experience: '14+ Years',
    qualifications: 'MBBS, DNB, FMAS',
    specialitySlug: 'obstetrics-gynaecology',
    bio: 'Highly skilled Consultant Obstetrician, Gynaecologist & Laparoscopic Surgeon (FMAS) providing comprehensive care for women, including prenatal and antenatal care, high-risk maternity, painless delivery, caesarean sections, advanced laparoscopic gynaecological procedures, and infertility evaluation.',
    image: '/assets/ysr_d2.png',
    languages: ['English', 'Telugu', 'Hindi'],
    opdTimings: 'Mon - Sat: 9:30 AM - 1:30 PM, 5:30 PM - 8:30 PM',
    focusAreas: ['High-Risk Pregnancy', 'Normal & C-Section Delivery', 'Laparoscopic Gynaecology (FMAS)', 'Infertility & PCOS', 'Women Health & Wellness'],
    isLeadership: true,
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
