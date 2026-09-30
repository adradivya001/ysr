// ============================================================
// SURYA HOSPITAL — HEALTH ARTICLES & GUIDES
// Informative Healthcare Guides for Patients
// ============================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  imageAlt: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'managing-seasonal-fevers-anantapur',
    title: 'Managing Seasonal Fevers and Viral Illnesses',
    excerpt: 'Guidance by Dr. Surya Prakash on identifying common seasonal viral fevers, warning signs, when to see a doctor, and timely blood tests.',
    category: 'General Health',
    readTime: '4 min read',
    publishedDate: 'September 2026',
    author: 'Dr. Surya Prakash',
    imageAlt: 'Physician consulting a patient with seasonal fever',
    tags: ['Fever', 'Monsoon Health', 'General Medicine', 'Blood Tests'],
    content: `
# Managing Seasonal Fevers and Viral Illnesses

Seasonal variations frequently bring rises in viral fevers and infections. Early diagnosis through clinical evaluation and blood testing prevents complications.

### When to Seek Medical Attention:
- Persistent high body temperature lasting more than 48 hours.
- Severe fatigue, joint pain, or inability to keep fluids down.
- Persistent headache or respiratory symptoms.

Visit Surya Hospital's General Medicine OPD at 9th Cross Road, Sai Nagar for timely medical evaluation.
    `,
  },
  {
    slug: 'laparoscopic-surgery-benefits',
    title: 'Why Minimally Invasive Laparoscopic Surgery Accelerates Recovery',
    excerpt: 'Discover how modern keyhole surgery simplifies surgical procedures with smaller incisions and faster healing.',
    category: 'Surgical Care',
    readTime: '4 min read',
    publishedDate: 'September 2026',
    author: 'Surya Hospital Surgical Team',
    imageAlt: 'Modern sterile surgical equipment',
    tags: ['Laparoscopy', 'Surgery', 'Minimally Invasive', 'Recovery'],
    content: `
# Why Minimally Invasive Laparoscopic Surgery Accelerates Recovery

Laparoscopic surgery uses high-precision instruments and visual guidance through small keyhole incisions.

### Key Benefits:
- Significantly less post-operative discomfort.
- Smaller surgical incisions that heal neatly.
- Quicker return to daily activities and work.
    `,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
