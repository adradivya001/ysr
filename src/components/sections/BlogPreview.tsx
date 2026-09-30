import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '@/content/blog';
import { useInView, useReducedMotion } from '@/hooks';

const EASE = [0.22, 1, 0.36, 1] as const;

export function BlogPreview() {
  const [ref, inView] = useInView<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <section id="blog-preview" ref={ref} className="section" aria-labelledby="blog-heading" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>PARENT HEALTH GUIDE</div>
          <h2 id="blog-heading" style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700,
            lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text)', maxWidth: 600, margin: '0 auto',
          }}>
            Helpful Information{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>For Growing Families</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              whileHover={reducedMotion ? {} : { y: -4 }}
              style={{
                background: 'white',
                borderRadius: 24,
                padding: '1.75rem 1.5rem',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 700, marginBottom: 10 }}>
                <BookOpen size={14} />
                <span>{post.category}</span>
              </div>

              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8, lineHeight: 1.3 }}>
                {post.title}
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 20, flexGrow: 1 }}>
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.slug}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)',
                  textDecoration: 'none', marginTop: 'auto',
                }}
              >
                <span>Read Article</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
