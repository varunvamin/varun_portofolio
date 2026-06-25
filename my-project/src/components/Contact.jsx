import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ paddingBottom: '6rem' }}>
      <div className="section-container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Contact Me</h2>
        
        <div className="contact-split">
          <div className="contact-image-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/contact-illustration.png" 
              alt="Contact Illustration" 
              style={{ width: '100%', maxWidth: '500px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }} 
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
      </div>
    </section>
  );
}
