import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./skills.css"; // استيراد ملف CSS
import { 
  FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, 
  FaFigma, 
  FaPython,
  FaKaggle
} from "react-icons/fa";
import { 
  SiTailwindcss, SiTypescript, SiRedux, SiNextdotjs, SiMui, 
  SiJquery, SiSass, SiReactquery, SiReduxsaga, 
  SiAnaconda,
  SiJupyter,
  SiGooglecolab,
  SiNumpy,
  SiPytorch,
  SiPandas,
  SiStreamlit,
  SiTensorflow
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <FaPython />, color: "react" },
    { name: "Pandas", icon: <SiPandas />, color: "context" },
    { name: "Pytorch", icon: <SiPytorch />, color: "dom" },
    { name: "Tensorflow", icon: <SiTensorflow />, color: "tailwind" },
    { name: "Anaconda", icon: <SiAnaconda />, color: "next" },
    { name: "Jupyter", icon: <SiJupyter />, color: "redux" },
    { name: "Googlecolab", icon: <SiGooglecolab />, color: "redux-toolkit" },
    { name: "Numpy", icon: <SiNumpy />, color: "react-query" },
    { name: "Kaggle", icon: <FaKaggle />, color: "sass" },
    { name: "Streamlit", icon: <SiStreamlit />, color: "bom" },
    { name: "Git", icon: <FaGitAlt />, color: "git" },
    { name: "Figma", icon: <FaFigma />, color: "figma" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="skills-page flex">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-item ${skill.color}`}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
