import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">
        <FaEnvelope className="contact-icon" /> Contact Me
      </h2>

      <div className="contact-card">
        <div className="icon-circle">
          <FaEnvelope />
        </div>
        <div>
          <h3>Email</h3>
          <a href="mailto:silambu0414@gmail.com" target="_blank" rel="noopener noreferrer">
            silambu0414@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-card">
        <div className="icon-circle">
          <FaPhone />
        </div>
        <div>
          <h3>Phone</h3>
          <a href="tel:+918270341319" target="_blank" rel="noopener noreferrer">
            +91 8270341319
          </a>
        </div>
      </div>

      <div className="contact-card">
        <div className="icon-circle">
          <FaLinkedin />
        </div>
        <div>
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/silambu-c-60496b358/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/c-silambu-26128828b
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
