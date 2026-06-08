import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`header ${scrolled ? 'scrolled' : ''}`}
    >
      <nav className="nav-container">
        <div className="logo">
          <h1 className="name">Varun V Amin</h1>
          <p className="tagline">Electronics Engineer • AI/ML Developer</p>
        </div>
        <ul className="nav-links">
          {['About', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="nav-link"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
