
import React from "react";
import aboutImg from "../assets/my-photo.jpeg";

const About = () => {
  return (
    <section className="aboutSection" id="about">
      <span className="text-gray">Know More About Me</span>

      <h1>About Me</h1>

      <div className="about-container">
        {/* Left Side */}
        <div className="about-img">
          <img src={aboutImg} alt="Ayushi Srivastava" />
        </div>

        {/* Right Side */}
        <div className="about-content">

          <div className="status-badge">
            🟢 Open to Internship Opportunities
          </div>

          <h2>Hello, I'm Ayushi.. </h2>

          <p className="about-text">
            I am a passionate <strong>MERN Stack Developer</strong> and
            <strong> B.Tech Computer Science</strong> student from Lucknow,
            India.
          </p>
          <p className="about-text">
            I enjoy building responsive, scalable and user-friendly web
            applications using
            <strong> MongoDB, Express.js, React.js and Node.js.</strong>
            I'm continuously improving my Full Stack Development and Data
            Structures & Algorithms skills by building real-world projects.
          </p>

          {/* Information Cards */}

          <div className="about-details">

            <div className="detail-card">
              <strong>👤 Name</strong>
              <p>Ayushi Srivastava</p>
            </div>

            <div className="detail-card">
              <strong>🎓 Education</strong>
              <p>B.Tech in Computer Science & Engineering </p>
            </div>

            <div className="detail-card">
              <strong>📍 Location</strong>
              <p>Lucknow, India</p>
              
            </div>

            <div className="detail-card">
              <strong>📧 Email</strong>
              <p>srivastavaayushi384@gmail.com</p>
             
            </div>

          </div>

          {/* Tech Stack */}

          <div className="tech-stack">
  
    <span>React</span>
    <span>Node.js</span>
    <span>Express</span>
    <span>MongoDB</span>
    <span>JavaScript</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>Git</span>

    
  </div>
          {/* Buttons */}

          <div className="about-buttons">

            <a
              href="/Ayushi Resume pdf.pdf"
              download
              className="btn"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Let's Talk
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;