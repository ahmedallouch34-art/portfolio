import React from "react";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hi, I&apos;m Ahmed 👋</h1>

          <div className="typing-text">
            <ReactTyped
              strings={[
                "I am a Web Developer",
                "I build React Applications",
                "I love creating modern UI",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>

          <p>
            I build responsive and modern web interfaces with React, clean UI,
            and smooth user experiences. I am currently looking for an
            internship opportunity to grow as a developer and contribute to real
            projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="/cv.pdf" download className="btn secondary-btn">
              Download CV
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              Preview Resume
            </a>
          </div>

          <div className="social-buttons">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/me.jpeg" alt="Ahmed" />
        </div>
      </div>
    </section>
  );
}

export default Home;