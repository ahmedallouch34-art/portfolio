import React from "react";

const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    image: process.env.PUBLIC_URL + "/project1.png",
    description:
      "A responsive personal portfolio built with React, smooth scrolling, animations, and dark mode.",
    tech: ["React", "CSS", "JavaScript"],
    demo: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/portfolio-repo",
  },
  {
    id: 2,
    title: "Quiz Android App",
    image: process.env.PUBLIC_URL + "/project2.png",
    description:
      "A quiz application with score tracking, difficulty levels, timer, and results screen.",
    tech: ["Java", "Android Studio", "XML"],
    demo: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/quiz-repo",
  },
  {
    id: 3,
    title: "Stock Manager App",
    image: process.env.PUBLIC_URL + "/project3.png",
    description:
      "A desktop inventory manager with product handling, file persistence, filters, and export features.",
    tech: ["C#", ".NET", "Windows Forms"],
    demo: "https://your-live-demo-link.com",
    github: "https://github.com/yourusername/stock-manager-repo",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Some of the projects I built and improved.</p>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn secondary-btn"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;