import { motion } from 'framer-motion';
import { Trophy, Cloud, Bot, Activity } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'Microsoft AI Innovation 2025',
      provider: 'Microsoft',
      focus: 'Applied AI',
      icon: <Trophy size={32} className="accent-icon" />
    },
    {
      title: 'Microsoft Azure Learning',
      provider: 'Microsoft',
      focus: 'Cloud Computing',
      icon: <Cloud size={32} className="accent-icon" />
    },
    {
      title: 'Microsoft AI Learning',
      provider: 'Microsoft',
      focus: 'Artificial Intelligence',
      icon: <Bot size={32} className="accent-icon" />
    },
    {
      title: 'MATLAB Signal Processing',
      provider: 'MathWorks',
      focus: 'On-Ramp Program',
      icon: <Activity size={32} className="accent-icon" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section className="certifications-section">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        <motion.div 
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} className="certification-card">
              <div className="certification-icon">{cert.icon}</div>
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-provider">{cert.provider}</p>
              <p className="certification-focus">{cert.focus}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
