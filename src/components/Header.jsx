// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './UI/Navigation';

const Header = () => {
  return (
    <header>
      <h1 className="text-6xl md:text-8xl mb-1 md:mb-3 text-sky-600 font-bold">Jin Choe</h1>
      <nav>
      <a
          href="#about"
          className="bg-sky-500 hover:bg-sky-600 text-gray-800 font-bold py-2 px-4 rounded-full md:text-md"
        >About Me</a>
        <a
          href="#portfolio"
          className="bg-sky-500 hover:bg-sky-600 text-gray-800 font-bold py-2 px-4 rounded-full md:text-md"
        >My Projects</a>
        <a
          href="#contact"
          className="bg-sky-500 hover:bg-sky-600 text-gray-800 font-bold py-2 px-4 rounded-full md:text-md"
        >Contact Info</a>
        
      </nav>
    </header>
  );
}

export default Header;