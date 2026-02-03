import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="heroSection" id="home">
      <div className="heroText">
        <h1>
          Hi, I'm <span className="gradientText">Silambu</span>
        </h1>

        <h2 className="gradientText">MERN Stack Developer</h2>

        <p className="heroDesc">
          MERN Stack Developer focused on building reliable, scalable, and user-centric web applications
          using React, Node.js, Express, and MongoDB.
        </p>

        <div className="heroButtons">
          <a href="#projects" className="btnPrimary">View My Work</a>
          <a href="#contact" className="btnOutline">Contact Me</a>
        </div>
      </div>

      <div className="heroImage">
        <img src="/silambuimg.jpg" alt="Silambu" />
      </div>
    </section>
  );
};

export default Hero;
