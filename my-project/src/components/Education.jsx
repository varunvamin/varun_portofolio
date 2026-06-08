import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Calendar, Star } from 'lucide-react';

export function Education() {
  const education = [
    {
      institution: 'NMAM Institute of Technology, Nitte',
      degree: 'B.Tech in Electronics and Communication Engineering',
      duration: '2023 – 2027',
      icon: <GraduationCap size={24} />
    },
    {
      institution: 'St. Aloysius PU College, Mangalore',
      degree: 'Pre-University',
      duration: '2021 – 2023',
      gpa: '91.6%',
      icon: <BookOpen size={24} />
    },
    {
      institution: 'Holy Family English Medium High School, Surathkal',
      degree: 'SSLC',
      duration: '2021',
      gpa: '89.9%',
      icon: <School size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 60 } }
  };

  return (
    <section id="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <motion.div 
          className="timeline"
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
              <div className="timeline-content">
                <h3 className="timeline-title">{edu.institution}</h3>
                <h4 className="timeline-subtitle">{edu.degree}</h4>
                <div className="timeline-meta">
                  <span><Calendar size={16} /> {edu.duration}</span>
                  {edu.gpa && <span><Star size={16} /> {edu.gpa}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
