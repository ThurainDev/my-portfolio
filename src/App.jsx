import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollArrow from './components/ScrollArrow'

function App() {
  return (
    <>
    
    <Navbar />
    
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
      <ScrollArrow />
    </>

  );
}

export default App;