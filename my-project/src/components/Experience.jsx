import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <div className="timeline-icon-wrapper">
              <Briefcase size={24} />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Electrical Distribution Intern</h3>
              <h4 className="timeline-subtitle">MESCOM - Mangalore Electricity Supply Company Ltd.</h4>
              <div className="timeline-meta">
                <span><Calendar size={16} /> June – July 2025</span>
              </div>
              <ul className="experience-highlights" style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0 0 0' }}>
                {[
                  "Gained practical exposure to power distribution networks, substations, transformers, and transmission systems",
                  "Assisted engineers in load analysis, fault identification, and preventive maintenance of electrical infrastructure",
                  "Observed grid monitoring operations, energy metering systems, and electrical safety protocols"
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', color: 'var(--text)' }}
                  >
                    <ChevronRight size={16} style={{ position: 'absolute', left: 0, top: '4px', color: 'var(--accent)' }} />
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
