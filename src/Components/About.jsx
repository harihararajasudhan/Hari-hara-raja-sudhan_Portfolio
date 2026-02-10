import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container">
      <section className="header">
        <h1>About Me</h1>
        <p className="role">Learn more about who I am</p>
      </section>

      <main>
        <section className="card">
          <h2>Overview</h2>
          <p>
            Passionate React developer dedicated to building clean, efficient, and user-friendly web applications. 
            Experienced in MERN stack development with a focus on performance optimization.
          </p>
        </section>

        <section className="card">
          <h2>Goal</h2>
          <p>
            To grow as a full-stack developer and contribute to innovative projects that solve real-world problems.
            Always eager to learn new technologies and best practices.
          </p>
        </section>

        <section className="card">
          <h2>Strengths</h2>
          <ul>
            <li>Quick learner</li>
            <li>Problem-solving mindset</li>
            <li>Strong communication</li>
            <li>Team collaboration</li>
          </ul>
        </section>

        <section className="card">
          <h2>Interests</h2>
          <ul>
            <li>React & Frontend Development</li>
            <li>Full-Stack Web Apps</li>
            <li>UI/UX Design</li>
            <li>Open Source Contribution</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
