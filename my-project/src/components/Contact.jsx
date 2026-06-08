export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-message">
            <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
          </div>
          <div className="contact-methods">
            <a href="mailto:varunvamin@gmail.com" className="contact-link">
              <span className="contact-icon">✉️</span>
              <div>
                <p className="contact-type">Email</p>
                <p className="contact-value">varunvamin@gmail.com</p>
              </div>
            </a>
            <a href="tel:+919108315624" className="contact-link">
              <span className="contact-icon">📱</span>
              <div>
                <p className="contact-type">Phone</p>
                <p className="contact-value">+91-9108315624</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/varunvamin" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">🔗</span>
              <div>
                <p className="contact-type">LinkedIn</p>
                <p className="contact-value">linkedin.com/in/varunvamin</p>
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">💻</span>
              <div>
                <p className="contact-type">GitHub</p>
                <p className="contact-value">github.com/varunvamin</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
