import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

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
    <section id="home" className="hero-section">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="hero-text">
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Varun V Amin
          </motion.h2>
          <motion.h1 variants={itemVariants} className="hero-title">
            Architecting <br/><span style={{ color: 'var(--accent)' }}>Intelligence</span> & <br/>Embedded Systems.
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-description">
            I build systems that bridge the physical and digital worlds, leveraging AI/ML, signal processing, and low-level hardware design to solve complex engineering challenges.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FileText size={18} /> Resume
            </a>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants} className="hero-visuals">
          <div className="avatar-container">
            <div className="avatar-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" 
                alt="Profile Avatar" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '50%', 
                  objectFit: 'cover',
                  opacity: 0.8,
                  mixBlendMode: 'luminosity'
                }} 
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
