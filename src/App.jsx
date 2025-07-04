import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/Services';
import Works from './components/works';
import What from './components/what';
import Expertise from './components/Expertise';
import Project from './components/project';
import Footer from './components/Footer';

function App() {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Works/>
      <What/>
      <Expertise/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App;