import { motion } from 'framer-motion';

export function Hero() {
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
              <div className="hero-badge">AI/ML Developer • Embedded Systems Engineer • Full-Stack Builder</div>
              
              <h1 className="hero-title" style={{ textAlign: 'left' }}>
                Engineering the future of intelligent systems.
              </h1>
              
              <p className="hero-description" style={{ textAlign: 'left', margin: '0 0 2rem 0', maxWidth: '600px' }}>
                I'm Varun V Amin, an Electronics Engineer and AI Developer specializing in embedded systems, machine learning, and bridging the gap between hardware and intelligent software.
              </p>
              
              <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
                <a href="#projects" className="btn btn-primary">
                  Explore Work
                </a>
                <a href="/varun_v_amin_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }}>
                  Download Resume
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Get in touch
                </a>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="hero-image-container">
                <img src="/profile.png" alt="Varun V Amin" className="hero-profile-image" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
