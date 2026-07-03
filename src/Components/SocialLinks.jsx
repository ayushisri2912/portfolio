import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    title: "Explore My Code",
    desc: "20+ Repositories",
    link: "https://github.com/ayushisri2912",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    title: "View My Profile",
    desc: "500+ Problems Solved",
    link: "https://leetcode.com/u/YourUsername/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    title: "Let's Connect",
    desc: "Professional Profile",
    link: "https://www.linkedin.com/in/ayushi",
  },
];

const SocialLinks = () => {
  return (
    <section className="socialSection">

      <div className="section-title">
        <span className="text-gray">Connect With Me</span>
        <h1>Find Me Online</h1>
        <div className="title-line"></div>
      </div>

      <div className="social-container">

        {socialLinks.map((item, index) => (

          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >

            <div className="social-icon">
              {item.icon}
            </div>

            <div className="social-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span>{item.title}</span>
            </div>

            <FaArrowRight className="arrow"/>

          </a>

        ))}

      </div>

    </section>
  );
};

export default SocialLinks;