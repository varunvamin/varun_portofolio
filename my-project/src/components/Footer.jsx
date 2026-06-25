import { useState } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('varunvamin@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Varun V Amin</h4>
          <p>Electronics Engineer | AI/ML Developer | Embedded Systems Enthusiast</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <ul className="footer-links">
            <li><a href="https://linkedin.com/in/varun-v-amin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#" onClick={handleCopyEmail}>{copied ? 'Copied!' : 'Email'}</a></li>
            <li><a href="tel:+919108315624">Phone</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Varun V Amin. All rights reserved.</p>
      </div>
    </footer>
  );
}
