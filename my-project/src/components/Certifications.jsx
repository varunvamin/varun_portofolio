import { motion } from 'framer-motion';
import { Trophy, Cloud, Bot, Activity } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'Microsoft AI Innovation 2025',
      provider: 'Microsoft',
      focus: 'Applied AI',
      icon: <Trophy size={32} />
    },
    {
      title: 'Microsoft Azure Learning',
      provider: 'Microsoft',
      focus: 'Cloud Computing',
      icon: <Cloud size={32} />
    },
    {
      title: 'MATLAB Signal Processing',
      provider: 'MathWorks',
      focus: 'On-Ramp Program',
      icon: <Activity size={32} />
    },
    {
      title: 'Microsoft AI Learning',
      provider: 'Microsoft',
      focus: 'Artificial Intelligence',
      icon: <Bot size={32} />
    }
  ];

  return (
    <section id="certifications">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="cert-grid">
          {certifications.map((cert, index) => {
            // Index 0 and 3 will be featured (span 8), index 1 and 2 will be standard (span 4)
            const isFeatured = index === 0 || index === 3;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bento-card ${isFeatured ? 'featured' : 'standard'}`}
                style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '3rem' }}
              >
                <div style={{ color: 'var(--accent)', marginBottom: '2rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '16px', display: 'inline-block' }}>
                  {cert.icon}
                </div>
                <div className="bento-content" style={{ padding: 0 }}>
                  <h3 className="bento-title" style={{ fontSize: isFeatured ? '2.5rem' : '1.8rem' }}>{cert.title}</h3>
                  <p className="bento-desc" style={{ color: '#fff', fontWeight: 500, margin: '0.5rem 0' }}>{cert.provider}</p>
                  <p className="bento-desc" style={{ flex: 0 }}>{cert.focus}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
