import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics/react';

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
              <div style={{ fontSize: '1.2rem', color: 'var(--text-h)', marginBottom: '1rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <motion.div
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
                >
                  👋
                </motion.div>
                Hey
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
              
              <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                <a href="#about" className="btn btn-primary" style={{ background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)', borderRadius: '8px' }}>
                  About Me &gt;
                </a>
                <a 
                  href="/varun_v_amin_resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary" 
                  style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  onClick={() => track('Resume_Downloaded')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Resume
                </a>
              </div>
            </div>
            
            <div className="hero-right" style={{ position: 'relative' }}>
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '-5%', left: '-10%', zIndex: 2 }}
              >
                <div style={{ background: 'var(--bg-tertiary)', padding: '0.8rem', borderRadius: '50%', boxShadow: 'var(--shadow-strong)', border: '1px solid var(--border)', backdropFilter: 'blur(10px)' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" style={{ width: '35px', height: '35px' }} />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ position: 'absolute', top: '10%', right: '-10%', zIndex: 2 }}
              >
                <div style={{ background: 'var(--bg-tertiary)', padding: '0.8rem', borderRadius: '50%', boxShadow: 'var(--shadow-strong)', border: '1px solid var(--border)', backdropFilter: 'blur(10px)' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" style={{ width: '35px', height: '35px' }} />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{ position: 'absolute', bottom: '5%', right: '-5%', zIndex: 2 }}
              >
                <div style={{ background: 'var(--bg-tertiary)', padding: '0.8rem', borderRadius: '50%', boxShadow: 'var(--shadow-strong)', border: '1px solid var(--border)', backdropFilter: 'blur(10px)' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" style={{ width: '35px', height: '35px' }} />
                </div>
              </motion.div>

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
