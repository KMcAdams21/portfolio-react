
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <main className="bg-web-700 body-font overflow-y-auto w-screen">
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}