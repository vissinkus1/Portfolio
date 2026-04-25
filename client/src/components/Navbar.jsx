import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header" id="top">
      <nav className="nav">
        <a href="#top" className="logo" onClick={handleLinkClick}>
          VSK
        </a>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#experience" onClick={handleLinkClick}>Experience</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>

        <a className="nav-cta" href="#contact">Hire Me</a>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}
