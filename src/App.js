import './App.css';
import React from 'react';
import Header from './component/Header';
import Animroutes from './component/Animroutes';
import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from 'framer-motion'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Animroutes />
      </Router>
    </>
  );
}

export default App;
