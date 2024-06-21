import React from "react";

function Hero() {
  return (
    <div className="flex items-center justify-center flex-col py-20">
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-sky-600 font-semibold">
          Welcome to my Portfolio
        </h1>
        <p className="text-sky-400 text-md md:text-xl max-w-md mb-3 mx-auto">
          I am a full stack developer
        </p>
        <a
          href="#"
          className="bg-sky-500 hover:bg-sky-600 text-gray-800 font-bold py-2 px-4 rounded-full md:text-md"
        >Portfolio</a>
      </div>
    </div>
  );
}

export default Hero;