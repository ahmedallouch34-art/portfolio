import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Ahmed Allouch</h3>
        <p>Frontend Developer | React Developer | Internship Seeker</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#featured">Featured</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Ahmed Allouch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;