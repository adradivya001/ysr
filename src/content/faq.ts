export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'emergency' | 'appointment' | 'insurance';
}

export const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'Where is Dr. YSR Memorial Hospital located in Anantapur?',
    answer:
      'Dr. YSR Memorial Hospital is located at 12-2-878, 1st Cross Road, Ashok Nagar, Sai Nagar, Anantapur, Andhra Pradesh – 515001. It is easily accessible from all parts of the city with dedicated parking and emergency ambulance access.',
    category: 'general',
  },
  {
    id: '2',
    question: 'Is 24/7 Emergency and Trauma care available at the hospital?',
    answer:
      'Yes, our Emergency Department operates 24 hours a day, 7 days a week, 365 days a year with on-call emergency medical doctors, surgical teams, diagnostic imaging, and pharmacy support. Direct Emergency line: +91 8554 247365.',
    category: 'emergency',
  },
  {
    id: '3',
    question: 'How do I book an appointment with a specialist doctor?',
    answer:
      'You can easily book an appointment online via our interactive appointment form on this website, or by calling our desk at +91 8554 247365. Walk-in consultations are also welcomed for outpatient clinics.',
    category: 'appointment',
  },
  {
    id: '4',
    question: 'What diagnostic and laboratory facilities are available on-campus?',
    answer:
      'We offer fully integrated diagnostic support including a 24/7 Clinical Pathology Lab, Digital X-Ray, Ultrasound Imaging, ECG, 2D Echo, Spirometry, and pre-operative evaluation packages with rapid report turnaround.',
    category: 'general',
  },
  {
    id: '5',
    question: 'Do you provide cashless insurance and TPA claim support?',
    answer:
      'Yes, we support major health insurance policies, TPAs, and corporate health plans. Our dedicated insurance helpdesk assists you with pre-authorization and claims processing.',
    category: 'insurance',
  },
];
