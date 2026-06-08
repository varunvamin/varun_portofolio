import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export function Hero() {
  return (
    <section id="about" className="hero-section">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="hero-text">
          <motion.h1 variants={itemVariants} className="hero-title">
            Varun V Amin
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-subtitle">
            Electronics & Communication Engineering Student
          </motion.p>
          <motion.p variants={itemVariants} className="hero-description">
            Passionate about embedded systems, AI/ML applications, and building innovative solutions. 
            Experienced in PSoC microcontrollers, signal processing, and full-stack development.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Tech Domains</span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="mailto:varunvamin@gmail.com" className="btn btn-primary">
              Get in Touch <ArrowRight size={18} />
            </a>
            <a href="https://linkedin.com/in/varunvamin" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Globe size={18} /> LinkedIn
            </a>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants} className="hero-contact">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label"><MapPin size={16} /> Location</span>
              <p>Mangalore, Karnataka</p>
            </div>
            <div className="contact-item">
              <span className="contact-label"><Phone size={16} /> Phone</span>
              <p>+91-9108315624</p>
            </div>
            <div className="contact-item">
              <span className="contact-label"><Mail size={16} /> Email</span>
              <p>varunvamin@gmail.com</p>
            </div>
            <div className="contact-item">
              <span className="contact-label"><Globe size={16} /> LinkedIn</span>
              <p>linkedin.com/in/varunvamin</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
