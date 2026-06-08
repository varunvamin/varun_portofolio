import { motion } from 'framer-motion';
import { Cpu, Brain, Zap } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <p>
              I am an Electronics and Communication Engineering student with a deep passion for <strong>Architecting Intelligence</strong>. My journey bridges the gap between hardware and software, focusing on building systems that don't just compute, but comprehend.
            </p>
            <p>
              With extensive hands-on experience in PSoC microcontrollers, digital signal processing, and full-stack development, I thrive at the intersection of embedded systems and modern Artificial Intelligence.
            </p>
            <p>
              Whether it's fine-tuning LLMs for specialized tasks, developing robust IoT anomaly detection networks, or mapping complex clinical data, my goal is to engineer elegant, scalable solutions to complex problems.
            </p>
          </motion.div>
          
          <motion.div variants={containerVariants} className="about-stats">
            <motion.div variants={itemVariants} className="about-stat-card">
              <Cpu size={32} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />
              <div className="stat-number">10+</div>
              <div className="stat-label">Hardware & Software Projects</div>
            </motion.div>
            <motion.div variants={itemVariants} className="about-stat-card">
              <Brain size={32} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />
              <div className="stat-number">4</div>
              <div className="stat-label">AI & ML Models Deployed</div>
            </motion.div>
            <motion.div variants={itemVariants} className="about-stat-card">
              <Zap size={32} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />
              <div className="stat-number">3</div>
              <div className="stat-label">Years of Core Experience</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
