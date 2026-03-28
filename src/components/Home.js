import React from "react";
import { ReactTyped } from "react-typed";

function Home() {
  const cvFile = process.env.PUBLIC_URL + "/cv.pdf";
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hi, I&apos;m Ahmed Allouch 👋</h1>

          <div className="typing-text">
            <ReactTyped
              strings={[
                "I am a junior Web Developer",
                "handball national reefree",
                "leader in the tunisien scouts",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>

          <p>
          Computer Science student crafting
          modern web experiences and intelligent 
          solutions with machine learning — focused on building, 
          learning, and growing through real-world projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

<a href={cvFile} download className="btn secondary-btn">
  Download CV
</a>

<a
  href={cvFile}
  target="_blank"
  rel="noreferrer"
  className="btn secondary-btn"
>
  Preview Resume
</a>
          </div>

          <div className="social-buttons">
            <a
              href="https://github.com/ahmedallouch34-art"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ahmed-allouch-827252257/"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + "/me.jpeg"} alt="Ahmed" />
        </div>
      </div>
    </section>
  );
}

export default Home;