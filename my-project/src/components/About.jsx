import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-split">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p>
              <strong>I am an Electronics and Communication Engineering student</strong> who builds software that lives at the intersection of bits and atoms. 
            </p>
            <p>
              My expertise lies in architecting intelligent systems—from fine-tuning LLMs on custom datasets to engineering highly optimized embedded C firmware for PSoC microcontrollers. I don't just write code; I design scalable infrastructure that solves complex, real-world problems.
            </p>
            <p>
              Currently, I am actively seeking 2026 software engineering and embedded systems internships where I can contribute to high-impact product teams.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-metrics"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="metric-card">
              <div className="metric-value">10+</div>
              <div className="metric-label">Engineering Projects</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">4</div>
              <div className="metric-label">AI Models Deployed</div>
            </div>
            <div className="metric-card" style={{ gridColumn: 'span 2' }}>
              <div className="metric-value">3.5</div>
              <div className="metric-label">Years of Core Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
