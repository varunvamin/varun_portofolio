import { motion } from 'framer-motion';
import { Mail, Code, Globe } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: '2rem' }}>
      <div className="section-container" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>Let's Build Something.</h2>
        <p style={{ color: 'var(--text)', marginBottom: '4rem', fontSize: '1.1rem' }}>
          Currently exploring opportunities for 2026. My inbox is always open.
        </p>
        
        <div className="contact-grid">
          <a href="mailto:varunvamin2005@gmail.com" className="contact-tile">
            <Mail size={24} />
            <span>Email</span>
          </a>
          <a href="https://github.com/varunvamin" target="_blank" rel="noopener noreferrer" className="contact-tile">
            <Code size={24} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/varun-v-amin" target="_blank" rel="noopener noreferrer" className="contact-tile">
            <Globe size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
