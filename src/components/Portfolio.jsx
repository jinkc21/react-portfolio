// import React from "react";
import Projects from "./Projects";
import projects from "../data/projects";
import Collaborations from "./Collaborations";
import collaborations from "../data/collaborations";

function Portfolio() {
  return (
    <div id="portfolio" className="flex items-center justify-center flex-col py-20">
      <div className="container mx-auto text-center py-8 px-4">
  <h1 className="text-2xl md:text-4xl mb-4 md:mb-6 text-sky-600 font-semibold">
    Portfolio
  </h1>
  <p className="text-sky-400 text-md md:text-xl max-w-2xl mb-6 mx-auto">
    Here are some of my projects
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {collaborations.map((collaboration) => (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img src={collaboration.image} alt={collaboration.title} className="w-full h-48 object-cover object-center"/>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-400">{collaboration.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{collaboration.description}</p>
          <div className="mt-4">
            <a href={collaboration.github} className="text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 text-sm font-medium">GitHub</a>
            {collaboration.deployed && <a href={collaboration.deployed} className="ml-4 text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 text-sm font-medium">Live Demo</a>}
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    {projects.map((project) => (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center"/>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-400">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{project.description}</p>
          <div className="mt-4">
            <a href={project.github} className="text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 text-sm font-medium">GitHub</a>
            {project.deployed && <a href={project.deployed} className="ml-4 text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 text-sm font-medium">Live Demo</a>}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default Portfolio;
