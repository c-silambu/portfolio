import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="heroSection" id="home">
      <div className="heroText">
        <h1>
          Hi, I'm <span className="gradientText">Silambu</span>
        </h1>
        <h2 className="gradientText">Full Stack MERN Developer</h2>
        <p className="heroDesc">
          I create clean, fast, and responsive web applications using the latest technologies.
        </p>
        <div className="heroButtons">
          <a href="#projects" className="btnPrimary">View My Work</a>
          <a href="#contact" className="btnOutline">Contact Me</a>
        </div>
      </div>

      <div className="heroImage">
        <img src="silambuimg.jpg" alt="Silambu" />
      </div>
    </section>
  );
};

export default Hero;
