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

          <h1 className="hero-title">
            Engineering the future of intelligent systems.
          </h1>
          
          <p className="hero-description">
            I'm Varun V Amin, an Electronics Engineer and AI Developer specializing in embedded systems, machine learning, and bridging the gap between hardware and intelligent software.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
