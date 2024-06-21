import React, { useEffect, useState } from 'react'
import './App.css'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import Resume from './components/Resume';


function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  const handleThemeChange = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
    <button
    type='button'
    onClick={handleThemeChange}
    className='fixed z-10 right-10 top-10 bg-gray-800 text-white rounded-full'
    >{theme === 'dark' ? '☀️' : '🌙'}</button>
    <div className='font-permanent-marker-regular bg:white dark:bg-gray-800'>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <div>
  
      </div>
  </div>
    </>
  )
}

export default App
