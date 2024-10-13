import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from '../src/pages/Intro';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Projects from '../src/pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
