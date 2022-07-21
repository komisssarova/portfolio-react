import React from "react";
import About from "./About";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="d-flex justify-content-beetween">
          <div className="container-container container">
            {" "}
            <span>
              <a href="./App.js" title="Homepage">
                Home
              </a>{" "}
              {""}
              <a href="./About" title="About">
                About
              </a>{" "}
              {""}
              <a href="/" title="Work">
                Work
              </a>{" "}
              {""}
              <a href="/" title="Contact">
                Contact
              </a>{" "}
            </span>
          </div>
        </nav>
      </header>
      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
