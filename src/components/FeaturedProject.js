import React from "react";

function FeaturedProject() {
  return (
    <section id="featured" className="featured section">
      <div className="section-header">
        <h2>Featured Project</h2>
        <p>My strongest project that best reflects my frontend skills.</p>
      </div>

      <div className="featured-card">
        <div className="featured-image">
          <img src="/project1.png" alt="Featured project preview" />
        </div>

        <div className="featured-content">
          <span className="featured-badge">Best Work</span>
          <h3>Modern Portfolio Website</h3>
          <p>
            A responsive developer portfolio built with React, smooth scrolling,
            dark mode, animated sections, project showcases, and a recruiter-focused layout.
          </p>

          <div className="featured-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Responsive Design</span>
          </div>

          <ul className="featured-highlights">
            <li>Built a clean modern UI with pastel design and dark mode</li>
            <li>Improved navigation and project presentation for recruiters</li>
            <li>Added responsive layout, animations, and portfolio actions</li>
          </ul>

          <div className="featured-buttons">
            <a
              href="https://your-live-demo-link.com"
              target="_blank"
              rel="noreferrer"
              className="btn primary-btn"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/yourusername/your-repo"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;