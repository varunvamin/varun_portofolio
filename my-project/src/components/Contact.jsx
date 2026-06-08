import { motion } from 'framer-motion';
import { Mail, Smartphone, Globe, Code } from 'lucide-react';

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="contact-message">
            <p>I'm always interested in hearing about new projects, internships, and opportunities. Feel free to reach out!</p>
          </motion.div>
          
          <div className="contact-methods">
            <motion.a variants={itemVariants} href="mailto:varunvamin@gmail.com" className="contact-link">
              <span className="contact-icon"><Mail className="accent-icon" size={32} /></span>
              <div>
                <p className="contact-type">Email</p>
                <p className="contact-value">varunvamin@gmail.com</p>
              </div>
            </motion.a>
            <motion.a variants={itemVariants} href="tel:+919108315624" className="contact-link">
              <span className="contact-icon"><Smartphone className="accent-icon" size={32} /></span>
              <div>
                <p className="contact-type">Phone</p>
                <p className="contact-value">+91-9108315624</p>
              </div>
            </motion.a>
            <motion.a variants={itemVariants} href="https://linkedin.com/in/varunvamin" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon"><Globe className="accent-icon" size={32} /></span>
              <div>
                <p className="contact-type">LinkedIn</p>
                <p className="contact-value">linkedin.com/in/varunvamin</p>
              </div>
            </motion.a>
            <motion.a variants={itemVariants} href="https://github.com/varunvamin" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon"><Code className="accent-icon" size={32} /></span>
              <div>
                <p className="contact-type">GitHub</p>
                <p className="contact-value">github.com/varunvamin</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
