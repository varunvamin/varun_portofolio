import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="section-container" style={{ width: '100%' }}>
        <motion.div 
          className="hero-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-content">
            <div className="hero-badge">
              ✨ Available for 2026 Engineering Internships
            </div>
            
            <h1 className="hero-title">
              Engineering the future of intelligent systems.
            </h1>
            
            <p className="hero-description">
              I'm Varun V Amin, a software engineer and AI architect specializing in high-performance embedded systems, LLM fine-tuning, and scalable data pipelines.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
              alt="Profile Graphic" 
              className="hero-visual-image" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
