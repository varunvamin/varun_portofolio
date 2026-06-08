export function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Varun V Amin</h1>
          <p className="hero-subtitle">Electronics & Communication Engineering Student</p>
          <p className="hero-description">
            Passionate about embedded systems, AI/ML applications, and building innovative solutions. 
            Experienced in PSoC microcontrollers, signal processing, and full-stack development.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Tech Domains</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="mailto:varunvamin@gmail.com" className="btn btn-primary">Get in Touch</a>
            <a href="https://linkedin.com/in/varunvamin" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          </div>
        </div>
        <div className="hero-contact">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">📍 Location</span>
              <p>Mangalore, Karnataka</p>
            </div>
            <div className="contact-item">
              <span className="contact-label">📞 Phone</span>
              <p>+91-9108315624</p>
            </div>
            <div className="contact-item">
              <span className="contact-label">✉️ Email</span>
              <p>varunvamin@gmail.com</p>
            </div>
            <div className="contact-item">
              <span className="contact-label">🔗 LinkedIn</span>
              <p>linkedin.com/in/varunvamin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
