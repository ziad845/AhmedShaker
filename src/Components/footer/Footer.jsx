import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="flex">
      <div className="social-links">
        <a
          href="https://github.com/A7madShaker"
          target="_blank"
          rel="noopener noreferrer"
          className="icon icon-github"
        ></a>
        <a
          href="https://www.linkedin.com/in/ahmed-shakerr"
          target="_blank"
          rel="noopener noreferrer"
          className="icon icon-linkedin"
        ></a>
      </div>
      <p className="dom">Ahmed Mohamed Shaker</p>
    </footer>
  );
}
