import React, { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ahmedallouch34@gmail.com";
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-header">
        <h2>Contact</h2>
        <p>I’m available for internship opportunities and collaborations.</p>
        <p>Feel free to cantact me at anytime.</p>
      </div>

      <div className="contact-card">
        <h3>Let’s connect</h3>
        <p>Email: {email}</p>
        <div className="contact-buttons">
          <a href={`mailto:${email}`} className="btn primary-btn">
            Send Email
          </a>

          <button onClick={handleCopyEmail} className="btn secondary-btn">
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/ahmedallouch34-art"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ahmed-allouch-827252257/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;