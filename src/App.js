import React from "react";
import About from "./About";
import Projects from "./Projects";
import "./App.css";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid"> <span>
           <a href="/" title="Homepage">Home</a> {""}
           <a href="/" title="About">About</a> {""}
           <a href="/" title="Work" >Work</a> {""}
           <a href="/" title="Contact">Contact</a> </span>
          </div>
        </nav>
      </header>
        <div><About /></div>
        <div><Projects /></div>
    </div>
  );
}

export default App;
