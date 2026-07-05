import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profile from "../assets/ayushi.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import "./CSS/Hero.css";


const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        "MERN Stack Developer",
        "UI/UX Designer",
        "Full Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="firstSection" id="home">
      <div className="leftSection">
        Hi, I'm <span className="purple">Ayushi Srivastava</span>

        <div>and I am a passionate</div>

        <span ref={typedRef}></span>

        <div className="btns">
          <a href="/Ayushi Resume pdf.pdf" download className="btn">
          <FaDownload />  Download Resume
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      
        <div className="hero-social-icons">
  <a
    href="https://github.com/ayushisri2912"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/ayushi29sri"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
  </a>

  <a href="mailto:srivastavaayushi384@gmail.com">
    <FaEnvelope />
  </a>
</div>


      </div>

      <div className="rightSection">
        <div className="image-wrapper">
          <div className="gradient-border"></div>

          <img src={profile} alt="Ayushi" />
        </div>

       

      </div>
    </section>
  );
};

export default Hero;