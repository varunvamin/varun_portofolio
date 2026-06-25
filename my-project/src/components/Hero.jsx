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
          <div className="social-sidebar">
            <a href="https://linkedin.com/in/varunvamin" target="_blank" rel="noreferrer" className="social-btn"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="20" style={{ filter: 'brightness(0) invert(1)' }}/></a>
            <a href="https://github.com/varunvamin" target="_blank" rel="noreferrer" className="social-btn"><img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub" width="20" style={{ filter: 'brightness(0) invert(1)' }}/></a>
            <a href="#" target="_blank" rel="noreferrer" className="social-btn"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" width="20" style={{ filter: 'brightness(0) invert(1)' }}/></a>
            <a href="#" target="_blank" rel="noreferrer" className="social-btn"><img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="Twitter" width="20" style={{ filter: 'brightness(0) invert(1)' }}/></a>
          </div>

          <div className="hero-split">
            <div className="hero-left">
              <div style={{ fontSize: '1.2rem', color: 'var(--text-h)', marginBottom: '1rem', fontWeight: '500' }}>
                👋 Hey
              </div>
              
              <h1 className="hero-title" style={{ textAlign: 'left', fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: '800' }}>
                I'm Varun V Amin
              </h1>
              
              <div style={{ fontSize: '1.5rem', color: 'var(--text-h)', marginBottom: '1.5rem', fontWeight: '500' }}>
                I am into <span style={{ color: 'var(--accent)', fontWeight: '700' }}>AI/ML & Embedded Systems</span>
              </div>
              
              <p className="hero-description" style={{ textAlign: 'left', maxWidth: '600px' }}>
                I focus on developing intelligent infrastructure and embedded hardware that meet strict performance requirements, with attention to detail, scalability, and robust architecture.
              </p>
              
              <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
                <a href="#about" className="btn btn-primary" style={{ background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)', borderRadius: '8px' }}>
                  About Me &gt;
                </a>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="hero-image-container" style={{ borderRadius: '50%', border: '8px solid #ffb800', background: '#ffb800', maxWidth: '380px' }}>
                <img src="/varunamin.png" alt="Varun V Amin" className="hero-profile-image" style={{ borderRadius: '50%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
