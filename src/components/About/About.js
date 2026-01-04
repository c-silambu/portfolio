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
            I'm <span className="highlight">Silambu</span>, a fresher with knowledge in full stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
          </p>
          <p>
            I also have basic knowledge of Java and C programming. I enjoy building web applications and want to improve my skills by working on real projects.
          </p>
          <p>
            I'm always learning and growing in the world of development.
          </p>

          {/* ✅ Resume Section */}
          <div className="resumeSection">
            <h3>Resume</h3>
            <div className="resumeButtons">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resumeBtn"
              >
                <FaEye className="icon" /> View
              </a>
              <a
                href="/resume.pdf"
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
