import styles from "../styles/components/skillcard.module.css";
import React from "react";

// Icons
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaDocker, FaServer, FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiPostman,
  SiFigma, SiSocketdotio, SiJsonwebtokens, SiVercel, SiRedis, SiFirebase, SiMysql,
  SiPrisma, SiGraphql, SiSwagger, SiJest, SiNodedotjs, SiLinux
} from "react-icons/si";
import { FiGitBranch } from "react-icons/fi";
import { TbBrandCpp } from "react-icons/tb";

const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="black" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "Framer Motion", icon: "🎞️" },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express", icon: <SiExpress color="#000000" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "REST API", icon: <FaServer color="#4B5563" /> },
  { name: "Socket.IO", icon: <SiSocketdotio color="#010101" /> },
  { name: "JWT", icon: <SiJsonwebtokens color="#000000" /> },
 
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  
];

const toolSkills = [
  { name: "Git", icon: <FiGitBranch color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#181717" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
  { name: "Vercel", icon: <SiVercel color="black" /> },
  { name: "Docker", icon: <FaDocker color="#2496ED" /> },
  { name: "Linux", icon: <SiLinux color="#FCC624" /> },
  { name: "C++", icon: <TbBrandCpp color="#00599C" /> },
];

const SkillRow = ({ skills }) => (
  <div className={styles.row}>
    {skills.map((skill, index) => (
      <span key={index} className={styles.skillItem}>
        <span className={styles.icon}>{skill.icon}</span>
        {skill.name}
      </span>
    ))}
  </div>
);

const SkillShowcase = () => {
  return (
    <div className={styles.grid}>
      <SkillRow skills={frontendSkills} />
      <SkillRow skills={backendSkills} />
      <SkillRow skills={toolSkills} />
    </div>
  );
};

export default SkillShowcase;
