import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Silambu</div>
      <nav className="navLinks">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#silambuskill">Skills</a>
        <a href="#projects">Projects</a>
         <a href="#Education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
