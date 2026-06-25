import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('varunvamin@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ paddingBottom: '6rem' }}>
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Me</h2>
        
        <div className="contact-split">
          <div className="contact-image-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/contact-illustration.png" 
              alt="Contact Illustration" 
              style={{ width: '100%', maxWidth: '400px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }} 
            />
          </div>
          
          <div className="contact-form-container">
            <h3 style={{ fontSize: '2.2rem', color: 'var(--text-h)', marginBottom: '1rem', fontWeight: '700' }}>Get in touch</h3>
            <p style={{ color: 'var(--text)', marginBottom: '2.5rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
              My inbox is always open! 💌 Whether you've got a burning question or want to drop a friendly "hello", I'm all ears! 👋 Let's chat! 🎉
            </p>
            
            <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <input 
                type="text" 
                placeholder="Full Name *" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="contact-input"
              />
              <input 
                type="email" 
                placeholder="Email *" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="contact-input"
              />
              <textarea 
                placeholder="Message *" 
                required 
                rows="5" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="contact-input"
                style={{ resize: 'vertical' }}
              ></textarea>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-end', marginTop: '0.5rem', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '8px', padding: '1rem 2.5rem', fontWeight: '700', fontSize: '1.1rem' }}>
                Say Hello 👋
              </button>
            </form>
          </div>
        </div>

        <div className="contact-grid" style={{ marginTop: '6rem' }}>
          <button onClick={handleCopyEmail} className="contact-card" style={{ border: 'none', background: 'var(--bg-secondary)', cursor: 'pointer', fontFamily: 'inherit', color: 'inherit' }}>
            <div className="contact-icon-box">
              {copied ? <CheckCircle2 size={24} color="#10b981" /> : <Mail size={24} />}
            </div>
            <span>{copied ? 'Email Copied!' : 'varunvamin@gmail.com'}</span>
          </button>
          
          <a href="https://github.com/varunvamin" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon-box">
              <GithubIcon size={24} />
            </div>
            <span>GitHub</span>
          </a>
          
          <a href="https://linkedin.com/in/varun-v-amin" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon-box">
              <LinkedinIcon size={24} />
            </div>
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
}
