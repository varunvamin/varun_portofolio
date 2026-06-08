import { motion } from 'framer-motion';

export function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="minimal-timeline">
          <motion.div 
            className="timeline-row"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-date">Jun 2025 – Jul 2025</div>
            <div className="timeline-details">
              <h3>Electrical Distribution Intern</h3>
              <h4>MESCOM - Mangalore Electricity Supply Company Ltd.</h4>
              <p>
                Gained practical exposure to power distribution networks, substations, transformers, and transmission systems. Assisted engineers in load analysis, fault identification, and preventive maintenance of electrical infrastructure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
