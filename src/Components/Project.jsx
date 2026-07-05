import ecommerce from "../assets/Screenshot (23).png";
import portfolio from "../assets/Screenshot (31).png";
import weather from "../assets/Screenshot (37).png";
import todo from "../assets/e-com.jpg";
import apple from "../assets/apple.png";
// import razorpay from "../assets/razorpay.png";
import nike from "../assets/nike.png";
import "./CSS/Project.css";
const projects = [
  {
  image: ecommerce,
  title: "ThirtysixStudio Clone",
  description: "A complete React + GSAP Animation website.",
  tech: ["React", "Tailwind", "GSAP", "JavaScript"],
  live: "https://thirtysixstudio-clone-bay.vercel.app", // apna actual link
  github: "https://github.com/ayushisri2912/thirtysixstudio-clone",
},

  {
    image:portfolio ,
    title: "E-commerce Admin Dashboard",
    description:
      "Full Stack MERN Dashboard with Authentication, Products, Categories and Orders.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio",
  },

  {
    image: weather,
    title: "Shopping Website",
    description:
      "Responsive website built using React",
    tech: ["React", "CSS"],
    live: "https://weather-demo.com",
    github: "https://github.com/yourusername/weather",
  },

  {
    image: todo,
    title: "Shopify",
    description:
      "Task management app with CRUD operations.",
    tech: ["React", "Node", "MongoDB"],
    live: "https://todo-demo.com",
    github: "https://github.com/yourusername/todo",
  },

  {
  image: apple,
  title: "Apple Website Clone",
  description:
    "A pixel-perfect Apple landing page clone featuring smooth GSAP animations, responsive layouts, and modern UI design.",
  tech: ["React", "GSAP", "CSS", "JavaScript"],
  live: "https://apple-clone.vercel.app",
  github: "https://github.com/ayushisri2912/apple-clone",
},
// 

{
  image: nike,
  title: "Nike Landing Page",
  description:
    "A modern Nike-inspired landing page with responsive design, smooth animations and interactive product showcase.",
  tech: ["React", "CSS", "JavaScript"],
  live: "https://nike-clone.vercel.app",
  github: "https://github.com/ayushisri2912/nike-clone",
},
];

const Projects = () => {
  return (
    <section className="projectSection" id="projects">

      <div className="section-title">

        <span className="text-gray">
          My Recent Work
        </span>

        <h1>Featured Projects</h1>

        <div className="title-line"></div>

      </div>

      <div className="project-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
            />

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="tech">

                {project.tech.map((item, i) => (

                  <span key={i}>
                    {item}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;
