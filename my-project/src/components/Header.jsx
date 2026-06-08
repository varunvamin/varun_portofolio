export function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <h1 className="name">Varun V Amin</h1>
          <p className="tagline">Electronics Engineer • AI/ML Developer</p>
        </div>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('about')} className="nav-link">About</a></li>
          <li><a onClick={() => scrollToSection('education')} className="nav-link">Education</a></li>
          <li><a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a></li>
          <li><a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a></li>
          <li><a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
