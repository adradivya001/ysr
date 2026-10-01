export interface Speciality {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  emoji: string;
  keyTreatments: string[];
  conditionsTreated: string[];
  features: string[];
}

export const specialities: Speciality[] = [
  {
    id: 'orthopaedics',
    slug: 'orthopaedics',
    name: 'Orthopaedics',
    shortDesc: 'Specialized orthopaedic care addressing bone fractures, joint pain, sports injuries, spine disorders, and comprehensive rehabilitation.',
    longDesc: 'Specialized orthopaedic care addressing bone fractures, joint pain, sports injuries, spine disorders, and comprehensive rehabilitation for enhanced patient mobility.',
    iconName: 'Bone',
    emoji: '🦴',
    keyTreatments: [
      'Complex Fracture Fixation & Trauma Care',
      'Joint Pain & Arthritis Management',
      'Spine & Back Pain Evaluation',
      'Casting, Splinting & Orthotic Support',
      'Post-Surgical Physiotherapy',
      'Total Knee & Hip Replacement',
      'Arthroscopic Sports Surgery',
    ],
    conditionsTreated: [
      'Bone Fractures & Dislocations',
      'Osteoarthritis & Rheumatoid Arthritis',
      'Lumbar & Cervical Spondylosis',
      'Ligament & Tendon Injuries',
      'Osteoporosis & Bone Density Loss',
    ],
    features: ['Modular Orthopaedic OTs', 'Digital X-Ray & Diagnostics', 'Integrated Physiotherapy & Rehab'],
  },
  {
    id: 'general-medicine',
    slug: 'general-medicine',
    name: 'General Medicine & Diabetology',
    shortDesc: 'Comprehensive physician care specializing in diabetes, hypertension, infectious fevers, and adult internal medicine.',
    longDesc: 'Dedicated physician department specializing in comprehensive diabetes care, metabolic disorders, hypertension, seasonal fevers, infectious diseases, and adult inpatient and outpatient care.',
    iconName: 'Stethoscope',
    emoji: '🩺',
    keyTreatments: [
      'Diabetes Management & Insulin Protocols',
      'Hypertension & Blood Pressure Care',
      'Infectious Diseases & Seasonal Fevers',
      'Metabolic Syndrome Evaluation',
      'Preventive Adult Health Screenings',
      'Adult Inpatient & Outpatient Care',
    ],
    conditionsTreated: [
      'Type 1 & Type 2 Diabetes',
      'Hypertension & BP Complications',
      'Acute Viral & Bacterial Fevers',
      'Thyroid & Endocrine Imbalances',
      'Cardiometabolic & Lifestyle Disorders',
    ],
    features: ['Dedicated Diabetology Clinic', '24/7 Inpatient Medical Care', 'Rapid Pathology & Lab Diagnostics'],
  },
  {
    id: 'obstetrics-gynaecology',
    slug: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    shortDesc: 'Comprehensive women\'s healthcare, prenatal & antenatal maternity, high-risk pregnancy, and advanced laparoscopy.',
    longDesc: 'Highly skilled care for women across all stages of life, providing prenatal and antenatal care, high-risk maternity, painless delivery, caesarean sections, advanced laparoscopic gynaecological procedures (FMAS), and infertility evaluation.',
    iconName: 'UserCheck',
    emoji: '🤰',
    keyTreatments: [
      'High-Risk Pregnancy & Antenatal Care',
      'Normal & C-Section Delivery',
      'Laparoscopic Gynaecology (FMAS)',
      'Infertility Evaluation & Counseling',
      'Painless Labour & Maternity Care',
      'Gynecological Screenings & Ultrasounds',
    ],
    conditionsTreated: [
      'High-Risk Pregnancies',
      'PCOD / PCOS & Hormonal Imbalances',
      'Uterine Fibroids & Ovarian Cysts',
      'Pelvic Pain & Gynecological Infections',
      'Menstrual & Menopausal Health Disorders',
    ],
    features: ['Private Labor & Delivery Suites', 'Advanced Laparoscopic OT', 'Compassionate Female Medical Team'],
  },
];

export function getSpecialityBySlug(slug: string): Speciality | undefined {
  return specialities.find((s) => s.slug === slug);
}
