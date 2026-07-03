
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
   FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_grb97bq",
        "template_b9pqz09",
        form.current,
        "Qu8MAAkqDFOWP6-BV"
      )
      .then(() => {
        alert("Message Sent Successfully ✅");
        form.current.reset();
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  };

  return (
    <section className="contactSection" id="contact">
      <div className="section-title">
        <span className="text-gray">GET IN TOUCH</span>

        <h1>Contact Me</h1>

        <p>
          Have a project in mind or want to collaborate?
          Feel free to send me a message.
        </p>
      </div>

      <div className="contact-wrapper">
        {/* LEFT SIDE */}

        <div className="contact-left">
          <span className="contact-tag">
            AVAILABLE FOR WORK
          </span>

          <h2>
            Let's Build Something
            <br />
            Amazing Together.
          </h2>

          <p className="contact-desc">
            I'm a MERN Stack Developer passionate about building
            modern, responsive and scalable web applications.
            Feel free to reach out for internships,
            freelance projects or collaborations.
          </p>
             <div className="quick-info">

  <div className="info-item">
    <FaMapMarkerAlt className="info-icon" />
    <div>
      <h4>Location</h4>
      <p>Lucknow, India</p>
    </div>
  </div>

  <div className="info-item">
    <FaClock className="info-icon" />
    <div>
      <h4>Response Time</h4>
      <p>Within 24 Hours</p>
    </div>
  </div>

  <div className="info-item">
    <FaBriefcase className="info-icon" />
    <div>
      <h4>Availability</h4>
      <p>Open to Work</p>
    </div>
  </div>

</div>
          
          

          <div className="status-card">
            <span className="status-dot"></span>

            <div>
              <h4>Open to Opportunities</h4>

              <p>
                Available for internships, freelance projects
                and full-time MERN Stack roles.
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="contact-buttons">
            <a
              href="/Ayushi Resume pdf.pdf"
              download
              className="resume-btn"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>

          {/* Social */}

          <div className="social-links">
            <a
              href="https://github.com/ayushisri2912/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ayushi"
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

        {/* RIGHT SIDE */}

        <div className="contact-card">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />

            <textarea
              rows="7"
              name="message"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;