import { motion } from 'framer-motion';
import { Mail, Code, Globe } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: '6rem' }}>
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Let's Build Something.</h2>
        <p style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '4rem', fontSize: '1.25rem' }}>
          Currently exploring opportunities for 2026. My inbox is always open.
        </p>
        
        <div className="contact-grid">
          <a href="mailto:varunvamin2005@gmail.com" className="contact-card">
            <div className="contact-icon-box">
              <Mail size={24} />
            </div>
            <span>Email Me</span>
          </a>
          <a href="https://github.com/varunvamin" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon-box">
              <Code size={24} />
            </div>
            <span>View GitHub</span>
          </a>
          <a href="https://linkedin.com/in/varun-v-amin" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon-box">
              <Globe size={24} />
            </div>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
