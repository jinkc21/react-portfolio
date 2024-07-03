// import React from "react";


function Projects({ title, description, image, github, deployed}) {
    return (
        <div className="text-sky-600 py-5">
            <h2 className="text-md md:text-xl max-w-md mb-3 mx-auto">{title}</h2>
            <p>{description}</p>
            <img className="block mx-auto" src={image} alt={title} />
            <a href={github}>Visit Github Page</a>
            <br />
            <a href={deployed}>Visit Deployed Page</a>
              </div>
    );
}

export default Projects; 