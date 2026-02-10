import React from "react";
import "./Home.css";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

export default function Home() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <div className="profile-circle">👨‍💻</div>
        <h1>Hari Hara Raja Sudhan</h1>
        <p className="role">React • MERN Stack Developer</p>

        <div className="hero-buttons">
          <a href="/Asset/hari.pdf" className="btn primary">Resume</a>
          <a href="https://github.com" className="btn secondary">GitHub</a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="card">
        <h2>⚡ Tech Stack</h2>
        <div className="skills">
          <span><FaReact/> React</span>
          <span><SiJavascript/> JavaScript</span>
          <span><FaNodeJs/> Node</span>
          <span><SiExpress/> Express</span>
          <span><SiMongodb/> MongoDB</span>
          <span><FaGithub/> GitHub</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="card">
        <h2>🚀 Featured Projects</h2>

        <div className="project">
          <h4>E-Commerce Platform</h4>
          <p>Full-stack MERN application with payment integration.</p>
        </div>

        <div className="project">
          <h4>Task Management App</h4>
          <p>Real-time task tracker with React and Firebase.</p>
        </div>

        <div className="project">
          <h4>Weather Dashboard</h4>
          <p>Interactive weather app using REST API and React.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="hire">
        <h2>Ready to collaborate?</h2>
        <p>Let's build something amazing together.</p>
        <a href="/contact" className="btn primary">Get In Touch</a>
      </section>

    </div>
  );
}
