import React from "react";


export default function Hero() {
  return (
     <section id="home" className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20 gap-10 border-b border-white/5">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Available for New Projects
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-200 bg-clip-text text-transparent">
                Shelomith Anyango
              </span>
            </h1>
            
            <h3 className="text-2xl font-medium text-slate-400">Software Developer</h3>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              I find interest in building efficient software systems, solving real-world problems using technology and continuously improving my programming skills.
            </p>

            <div className="flex gap-10 pt-10 border-t border-slate-800">
                <div><span className="block text-2xl font-bold text-white">12+</span><span className="text-xs uppercase tracking-widest text-slate-500">Months of Exp.</span></div>
                <div><span className="block text-2xl font-bold text-white">2+</span><span className="text-xs uppercase tracking-widest text-slate-500">Projects</span></div>
                <div><span className="block text-2xl font-bold text-white">24/7</span><span className="text-xs uppercase tracking-widest text-slate-500">Support</span></div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 shadow-2xl">
                <div className="bg-[#0B0E14] rounded-[40px] overflow-hidden">
                    <img 
                        src="/images/profile.jpeg"
                        alt="Shelomith" 
                        className="w-80 h-96 object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>
          </div>
        </section>

  );
}