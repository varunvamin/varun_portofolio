import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Hero() {
  const roles = [
    "AI/ML Development",
    "Embedded Systems",
    "Backend Architecture",
    "Full-Stack Engineering"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-mesh-blob"></div>
      <div className="section-container" style={{ width: '100%' }}>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-split">
            <div className="hero-left">
              <div style={{ fontSize: '1.2rem', color: 'var(--text-h)', marginBottom: '1rem', fontWeight: '500' }}>
                👋 Hey
              </div>
              
              <h1 className="hero-title" style={{ textAlign: 'left', fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: '800', marginBottom: '0.5rem' }}>
                I'm Varun V Amin
              </h1>
              
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-h)', marginBottom: '1.5rem', fontWeight: '700', background: 'var(--text-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Engineering the future of intelligent systems.
              </h2>
              
              <div style={{ fontSize: '1.3rem', color: 'var(--text)', marginBottom: '1.5rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                I am into <span style={{ color: 'var(--accent)', fontWeight: '700', display: 'inline-block', position: 'relative', height: '1.5em', overflow: 'hidden', minWidth: '250px' }}>
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={roleIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      style={{ position: 'absolute', left: 0 }}
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
              
              <p className="hero-description" style={{ textAlign: 'left', maxWidth: '600px', marginTop: '1rem' }}>
                I focus on developing intelligent infrastructure and embedded hardware that meet strict performance requirements, with attention to detail, scalability, and robust architecture.
              </p>
              
              <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
                <a href="#about" className="btn btn-primary" style={{ background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)', borderRadius: '8px' }}>
                  About Me &gt;
                </a>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="hero-image-container">
                <img src="/varunamin.png" alt="Varun V Amin" className="hero-profile-image" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
