import React from "react";


function Projects({ title, description, image, github, deployed}) {
    return (
        <div className="text-sky-600">
            <h3>{title}</h3>
            <p>{description}</p>
            <img className="block mx-auto" src={image} alt={title} />
            <a href={github}>Github</a>
            <br />
            <a href={deployed}>Deployed</a>
        </div>
    );
}

export default Projects; 