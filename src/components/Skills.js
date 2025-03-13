import React from "react";
import {
  Code,
  Coffee,
  Database,
  Atom,
  Globe,
  Palette,
  FileCode,
  PenTool,
  GitBranch,
  Monitor,
  Brush,
  Flame,
} from "lucide-react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "C", icon: <Code /> },
    { name: "Java (Intmd)", icon: <Coffee /> },
    { name: "SQL", icon: <Database /> },
    { name: "React", icon: <Atom /> }, // Replaced ReactLogo with Atom
    { name: "HTML", icon: <Globe /> },
    { name: "CSS", icon: <Palette /> },
    { name: "JavaScript (Basic)", icon: <FileCode /> },
    { name: "Figma", icon: <PenTool /> },
    { name: "Git", icon: <GitBranch /> },
    { name: "VS Code", icon: <Monitor /> }, // Changed to Monitor for VS Code
    { name: "Canva", icon: <Brush /> },
    { name: "Firebase", icon: <Flame /> }, // Added Firebase with Fire icon
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
