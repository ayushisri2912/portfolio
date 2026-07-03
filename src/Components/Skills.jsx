import React from "react";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "./AnimatedCounter";
import CircularProgress from "./CircularProgress";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";

const frontend = [
  { name: "HTML", icon: <FaHtml5 />, level: "95%" },
  { name: "CSS", icon: <FaCss3Alt />, level: "90%" },
  { name: "JavaScript", icon: <FaJs />, level: "85%" },
  { name: "React", icon: <FaReact />, level: "90%" },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs />, level: "85%" },
  { name: "Express.js", icon: <SiExpress />, level: "80%" },
  { name: "MongoDB", icon: <SiMongodb />, level: "85%" },
];

const tools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "VS Code", icon: "💻" },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const professionalSkills = [
  {
    title: "Creativity",
    percent: 90,
  },
  {
    title: "Communication",
    percent: 85,
  },
  {
    title: "Problem Solving",
    percent: 80,
  },
  {
    title: "Team Work",
    percent: 90,
  },
];

  return (
    <section
      ref={ref}
      className="skillsSection"
      id="skills"
    >

       <div className="section-title">
    <span className="text-gray">What I Know</span>

    <h1>Skills & Technologies</h1>

    </div>

      {/* <span className="text-gray">What I Know</span>
      <h1>My Skills</h1> */}

      <div className="skills-container">

        {/* Frontend */}

        <div className="skill-card">

          <h2>Frontend Development</h2>

          {frontend.map((skill, index) => (
            <div className="skill" key={index}>

              <div className="skill-info">
                <span className="icon">{skill.icon}</span>
                <span>{skill.name}</span>
                <AnimatedCounter
                  value={skill.level}
                  start={inView}
                />
                {/* <span>{skill.level}</span> */}
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: inView ? skill.level : "0%" }}
                ></div>
              </div>

            </div>
          ))}

        </div>

        {/* Backend */}

        <div className="skill-card">

          <h2>Backend Development</h2>

          {backend.map((skill, index) => (
            <div className="skill" key={index}>

              <div className="skill-info">
                <span className="icon">{skill.icon}</span>
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: inView ? skill.level : "0%" }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>

{/* professional skill */}

      <div className="professional">

<h2>Professional Skills</h2>

<div className="circle-container">

{professionalSkills.map((skill,index)=>(

<CircularProgress

key={index}

title={skill.title}

percent={skill.percent}

start={inView}

/>

))}

</div>

</div>


      {/* Tools */}

      <div className="tools">

        <h2>Tools & Technologies</h2>

        <div className="tool-list">

          {tools.map((tool, index) => (
            <div className="tool" key={index}>
              <span>{tool.icon}</span>
              <p>{tool.name}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;