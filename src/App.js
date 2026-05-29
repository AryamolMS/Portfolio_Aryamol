import React from 'react';
import {   Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Experience from './components/Experience/Experience';
import Skill from './components/Skills/Skill';
import Education from './components/education/Education';
import Projects from './components/Projects/Projects';
import './index.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About standalone />} />
        <Route path="/experience" element={<Experience standalone />} />
        <Route path="/skills" element={<Skill standalone />} />
        <Route path="/education" element={<Education standalone />} />
        <Route path="/projects" element={<Projects standalone />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;