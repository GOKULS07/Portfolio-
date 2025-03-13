import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Finance Dashboard",
      description:
        "A comprehensive React-based dashboard for managing personal finances, including features for tracking income, expenses, subscriptions, and visualizing financial data with charts.",
      image: "/images/dashboard.png", // Updated with the actual image path
      liveLink: "https://finance-dashboard-ashy.vercel.app/",
    },
    {
      title: "Grievance Portal",
      description:
        "An efficient platform for managing and resolving grievances, designed for educational institutions with separate roles for admins and faculty members.",
      image: "/images/portal.png", // Updated with the actual image path
      liveLink: "https://grievances-portal-gokuls07s-projects.vercel.app/",
    },
    {
      title: "Color Code Detection",
      description:
        "An intuitive tool that detects and identifies color codes from images or input, ideal for designers and developers looking for quick color references.",
      image: "/images/colorcode.png", // Updated with the actual image path
      liveLink: "https://color-detector-kappa.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Live Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
