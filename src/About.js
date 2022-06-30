import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div>
        <img src="cvpicture.jpg" className="rounded float-start" alt="" />
        <strong><p>
          Hello
          <span role="img" aria-label="hi">
            👋
          </span>{" "}
          I am
        </p></strong>
        <h1>Kateryna Komisarova</h1>
        <h4 className="mb-5">Front-end developer based in England</h4>
        <p>
          A determined Junior Front-End Developer with a passion for clean code
          and creative solutions.Proficient in React, ES6+, HTML5/CSS with a
          solid knowledge base of utilizing Bootstrap and Visual Code. In search
          of an Entry-level Front-End Developer position with the opportunity to
          work and grow within a fantastic team.
        </p>
        <button className="btn btn-primary">Contact me</button>
      </div>
    </div>
  );
}
