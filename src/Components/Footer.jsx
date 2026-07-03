// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaArrowUp,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="footer">

//       <div className="footer-line"></div>

//       <div className="footer-content">

//         <h2>Ayushi Srivastava</h2>

//         <p className="footer-role">
//           MERN Stack Developer
//         </p>

//         <p className="footer-text">
//           Let's build something amazing together.
//         </p>

//         <div className="footer-social">

//           <a
//             href="https://github.com/ayushisri2912"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaGithub />
//           </a>

//           <a
//             href="https://linkedin.com/in/your-linkedin"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaLinkedin />
//           </a>

//           <a href="mailto:yourmail@gmail.com">
//             <FaEnvelope />
//           </a>

//         </div>

//         <a href="#home" className="top-btn">
//           <FaArrowUp />
//         </a>

//       </div>

//       <div className="footer-bottom">
//         © {new Date().getFullYear()} Ayushi Srivastava • All Rights Reserved.
//       </div>

//     </footer>


//    );
// };



// export default Footer;


import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowUp } from "react-icons/fa";



const Footer = () => {
  const footerRef = useRef(null);

useGSAP(() => {
  gsap.from(footerRef.current, {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
});
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Side */}
        <div className="footer-content">

          <div className="footer-badge">
            ✦ Available for Opportunities
          </div>

          <h2>Ayushi Srivastava</h2>

          <p className="footer-role">
            MERN Stack Developer
          </p>

          <p className="footer-text">
            Let's build something amazing together.
          </p>

          <div className="footer-social">

            <a
              href="https://github.com/ayushisri2912"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom">

       <a href="#home" className="footer-top" aria-label="Back to Top">
  <FaArrowUp />
</a>

        <p>
          © {new Date().getFullYear()} Ayushi Srivastava • All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;