import React from "react";
import Button from "../../components/button/Button";

import "./Project.css";


export default function Projects() {
 
  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <Button
        text={"More Projects"}
        className="project-button"
        href="https://github.com/ashutosh1919"
        newTab={true}
      />
    </div>
  );
}
