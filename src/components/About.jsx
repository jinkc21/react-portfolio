// import React from "react";

function About() {
    return (
        <div id="about" className="flex items-center justify-center flex-col mt-40 mb-40">
        <div className="container mx-autotext-center">
        <img className="block mx-auto max-w-md"  src="./images/profile.jpg" alt='profile pic' />
            <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-sky-600 font-semibold">
            About Me
            </h1>
            <p className="text-sky-400 text-md md:text-xl max-w-md mb-3 mx-auto">
            I am a web developer with a passion for creating and building web applications. I have experience with JavaScript, React, Node.js, and Express. I am always looking to learn new technologies and improve my skills.
            </p>
        </div>
        </div>
    );
}

export default About;
