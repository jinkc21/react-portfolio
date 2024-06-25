// import React from "react";
import Projects from "./Projects";
import projects from "../data/projects";
import Collaborations from "./Collaborations";
import collaborations from "../data/collaborations";

function Portfolio() {
  return (
    <div id="portfolio" className="flex items-center justify-center flex-col py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-sky-600 font-semibold">
          Portfolio
        </h1>
        <p className="text-sky-400 text-md md:text-2xl max-w-md mb-3 mx-auto">
          Here are some of my projects
        </p>
        <div>
          {projects.map((project) => (
            <Projects 
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            deployed={project.deployed}
            
            />
          ))}
        </div>
        <div>
          {collaborations.map((collaboration) => (
            <Collaborations 
            key={collaboration.title}
            title={collaboration.title}
            description={collaboration.description}
            image={collaboration.image}
            github={collaboration.github}
            deployed={collaboration.deployed}
            
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
