import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Calendar, Star } from 'lucide-react';

export function Education() {
  const education = [
    {
      institution: 'NMAM Institute of Technology, Nitte',
      degree: 'B.Tech in Electronics and Communication Engineering',
      duration: '2023 – 2027',
      icon: <GraduationCap size={24} />,
      highlights: [
        'Specializing in embedded systems and artificial intelligence.',
        'Relevant Coursework: Microcontrollers, Data Structures, Digital Signal Processing.'
      ]
    },
    {
      institution: 'St. Aloysius PU College, Mangalore',
      degree: 'Pre-University',
      duration: '2021 – 2023',
      icon: <BookOpen size={24} />,
      gpa: '91.6%',
      highlights: ['Focus on Physics, Chemistry, and Mathematics.']
    },
    {
      institution: 'Holy Family English Medium High School, Surathkal',
      degree: 'SSLC',
      duration: '2021',
      icon: <School size={24} />,
      gpa: '89.9%',
      highlights: []
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <motion.div 
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="timeline-item">
              <div className="timeline-icon-wrapper">
                {edu.icon}
              </div>
              <div className="timeline-card">
                <h3 className="timeline-title">{edu.degree}</h3>
                <h4 className="timeline-subtitle">{edu.institution}</h4>
                <div className="timeline-meta">
                  <span><Calendar size={16} /> {edu.duration}</span>
                  {edu.gpa && <span><Star size={16} /> {edu.gpa}</span>}
                </div>
                {edu.highlights.length > 0 && (
                  <ul className="timeline-highlights">
                    {edu.highlights.map((text, i) => (
                      <li key={i}>{text}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
