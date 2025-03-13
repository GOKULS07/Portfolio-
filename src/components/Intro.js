import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <section id="home" className="intro">
      <div className="intro-content">
        <div className="intro-left">
          <img
            src="20250110_093424.jpg"
            alt="Gokul S"
            className="profile-photo"
          />
        </div>
        <div className="intro-right">
          <h1>
            <span className="greeting">Hello, I'm</span>
            <span className="name">GOKUL S</span>
          </h1>
          <h2 className="title">STUDENT</h2>
          <div className="about-me">
            <p>
              I am a passionate student with an interest in software development and problem-solving.
              I love working on projects that challenge my creativity and technical skills.
            </p>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/GOKULS07"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gokuls07/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/gokuls_05/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LeetCode
            </a>
            <a
              href="/images/GOKUL CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link cv-link"
            >
              My CV
            </a>
          </div>
          <div className="cta-container">
            <a href="#contact" className="cta-button primary">
              Get in Touch
            </a>
            <a href="#projects" className="cta-button secondary">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
