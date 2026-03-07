import React from "react";

      export default function Navbar() {
        return (

   
     <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-center gap-30 p-4 shadow-md border-b border-white/5 backdrop-blur-md bg-slate-950/80">
        <h4 className="text-2xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Shelomith Anyango
          </span>
        </h4>
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-blue-500 ">
          <li><a href="#home" className='hover:text-[#FFD700] transition-colors'>Home</a></li>
          <li><a href="#about" className='hover:text-[#FFD700] transition-colors'>About Me</a></li>
          <li><a href="#projects" className='hover:text-[#FFD700] transition-colors'>Recent work</a></li>
          <li><a href="#technologies" className='hover:text-[#FFD700] transition-colors'>Technologies</a></li>
          <li><a href="#contact" className='hover:text-[#FFD700] transition-colors'>Get In Touch</a></li>
        </ul>
        <div>
          <a 
            href="#contact" 
            className="inline-block px-5 py-2  rounded-full text-sm font-bold bg-gradient-to-r from-blue-200 to-purple-200 text-slate-900 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all cursor-pointer "
          >
            Lets Connect
          </a>
        </div>
      </nav>
        );
      }