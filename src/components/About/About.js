import React from 'react';
import './About.css';
import { FaEye, FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutContainer">
        
        <div className="textArea">
          <h2>About Me</h2>

          <p>
            I'm <span className="highlight">Silambu</span>, a passionate MERN Stack Developer who enjoys building modern,
            user-friendly web applications from scratch.
          </p>

          <p>
            I specialize in developing full-stack applications using MongoDB, Express.js, React.js, and Node.js.
            I focus on writing clean, maintainable code and creating responsive interfaces backed by reliable server-side logic.
          </p>

          <p>
            Through my MERN Stack internship, I gained hands-on experience working on real-world projects,
            including a Billing & Invoice Management System and a professional company portfolio website.
          </p>

          <p>
            Along with web development, I have a basic foundation in  C programming.
            I’m always learning new technologies, improving my skills, and growing as a developer with every project I build.
          </p>

          <div className="resumeSection">
            <h3>Resume</h3>
            <div className="resumeButtons">
              <a
                href="/SILAMBU_RES.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resumeBtn"
              >
                <FaEye className="icon" /> View
              </a>

              <a
                href="/SILAMBU_RES.pdf"
                download
                className="resumeBtn"
              >
                <FaDownload className="icon" /> Download
              </a>
            </div>
          </div>
        </div>

        <div className="imageArea">
          <img src="silambuimg2.jpg" alt="Silambu" />
        </div>

      </div>
    </section>
  );
};

export default About;
