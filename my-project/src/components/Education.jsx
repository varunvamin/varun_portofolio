import { motion } from 'framer-motion';

export function Education() {
  const education = [
    {
      institution: 'NMAM Institute of Technology, Nitte',
      degree: 'B.Tech in Electronics and Communication Engineering',
      duration: '2023 – 2027',
      details: 'Relevant Coursework: Microcontrollers, Data Structures, Digital Signal Processing, AI/ML Applications.'
    },
    {
      institution: 'St. Aloysius PU College, Mangalore',
      degree: 'Pre-University',
      duration: '2021 – 2023',
      details: 'Graduated with 91.6% aggregate. Focus on Physics, Chemistry, and Mathematics.'
    },
    {
      institution: 'Holy Family English Medium High School, Surathkal',
      degree: 'SSLC',
      duration: '2021',
      details: 'Graduated with 89.9% aggregate.'
    }
  ];

  return (
    <section id="education" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="minimal-timeline">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="timeline-row"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-date">{edu.duration}</div>
              <div className="timeline-details">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
