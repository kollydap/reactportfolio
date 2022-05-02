import React from 'react';
import Header from './components/Header';
import './App.css';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';

import Contact from './components/Contact'

function App() {
  return (
    <div className="app" >
      <Header />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      {/* <Blogs /> */}

    </div>
  );
}

export default App;
