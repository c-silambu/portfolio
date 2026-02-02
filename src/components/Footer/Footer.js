import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footerContent">
        <p>&copy; {new Date().getFullYear()} Silambu C. All rights reserved.</p>
        
        <div className="footerLinks">
          <a href="https://github.com/c-silambu" target="_blank" rel="noreferrer">
            <FaGithub className="footerIcon" />
          </a>
          <a href="https://www.instagram.com/silambu_tn_58/" target="_blank" rel="noreferrer">
            <FaInstagram className="footerIcon" />
          </a>
          <a href="https://www.linkedin.com/in/silambu-c-60496b358/" target="_blank" rel="noreferrer">
            <FaLinkedin className="footerIcon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
