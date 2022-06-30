import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <h4>Check out some of my featured projects below</h4>
      <div className="DictionaryImg">
        <a href="https://taupe-stardust-dd3019.netlify.app/">Dictionary App</a>
        
        <br />
        <img src="dictionary.png" className="rounded float-start" alt="" />
        <button className="btn btn-outline-primary">Learn more</button>
      </div>
      <div className="WeatherImg">
        <a href="https://endearing-churros-ff3e12.netlify.app/">Weather App</a>
        
        <br />
        <img src="weather.png" className="rounded float-end" alt="" />
        <button className="btn btn-outline-primary">Learn more</button>
      </div>
    </div>
  );
}
