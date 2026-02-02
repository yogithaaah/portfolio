import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: '01_ABOUT', href: '#about' },
    { name: '02_CERTS', href: '#certs' },
    { name: '03_PROJ', href: '#projects' },
    { name: '04_SKILLS', href: '#skills' },
    { name: '05_CONTACT', href: '#contact' }
  ];

  return (
    <nav className="nav-container">
      <div className="nav-logo">YOGITHA_OS [v1.0]</div>
      <div className="nav-links">
        {navLinks.map((link, i) => (
          <a key={i} href={link.href} className="nav-item">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;