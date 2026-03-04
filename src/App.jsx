import React, { useState, useRef } from 'react';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';  
import RecentWork from './components/sections/RecentWork';
import Technologies from './components/sections/Technologies';
import Contact from './components/sections/Contact';

export default function App() {
 


 
  return (
    <div className="w-screen overflow-x-hidden bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 ">
       <Navbar />

      {/* --- Center all items --- */}
      <div className='max-w-6xl mx-auto px-6 flex flex-col items-center'>

      <main>
        {/* --- HERO SECTION --- */}
       <Hero />
        
        {/* --- ABOUT ME SECTION --- */}
        <About />

        {/* --- RECENT WORK SECTION --- */}
        <RecentWork />

        {/* --- TECHNOLOGIES SECTION --- */}
        <Technologies />
       
        {/* --- CONTACT SECTION --- */}
        <Contact />
      </main>
</div>
      <Footer />

    </div>
  );
}