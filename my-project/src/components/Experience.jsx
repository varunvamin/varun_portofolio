import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export function Experience() {
  return (
    <section className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <motion.div 
          className="experience-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <div className="experience-header">
            <div className="experience-title-wrap">
              <Briefcase size={28} className="accent-icon" style={{ color: 'var(--accent)', marginRight: '15px' }} />
              <div>
                <h3 className="experience-title">Electrical Distribution Intern</h3>
                <span className="experience-company">MESCOM - Mangalore Electricity Supply Company Ltd.</span>
              </div>
            </div>
          </div>
          <div className="experience-duration" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={16} /> June – July 2025
          </div>
          <ul className="experience-highlights">
            {[
              "Gained practical exposure to power distribution networks, substations, transformers, and transmission systems",
              "Assisted engineers in load analysis, fault identification, and preventive maintenance of electrical infrastructure",
              "Observed grid monitoring operations, energy metering systems, and electrical safety protocols"
            ].map((text, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <ChevronRight size={18} className="highlight-icon" style={{ position: 'absolute', left: 0, color: 'var(--accent)' }} />
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
