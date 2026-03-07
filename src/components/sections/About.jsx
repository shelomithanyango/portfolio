import React from "react";

export default function About() {
    return (
       
        <section id="about" className="py-24 bg-slate-950 shadow-md border-b border-white/5">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-center">
    
    {/* Left Side: Story (Takes up 3 out of 5 columns) */}
    <div className="md:col-span-3 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        My Story
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Creating <span className="text-blue-400">Solutions</span> <br /> 
        with Precision.
      </h2>

      <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
        <p>
          I am a  Software Developer who is driven by a strong motivation to build 
          functional, efficient, and user-centric applications.
        </p>
        <p>
          With a solid background in <span className="text-white font-medium">Python, Java, and Web Technologies</span>, 
          I focus on transforming complex ideas into practical digital solutions.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 pt-4">
        <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">Linux Ubuntu Enthusiast</span>
        <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">Database Architecture</span>
      </div>
    </div>

    {/* Right Side: Stats (Takes up 2 out of 5 columns) */}
    <div className="md:col-span-2 grid grid-cols-1 gap-4">
      <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 hover:border-blue-500/50 transition-colors group">
        <h4 className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">6+ Months</h4>
        <p className="text-sm text-slate-500 uppercase tracking-widest mt-2">Learning & Development</p>
      </div>

      <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 hover:border-purple-500/50 transition-colors group">
        <h4 className="text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">2+ Projects</h4>
        <p className="text-sm text-slate-500 uppercase tracking-widest mt-2">Successfully Completed</p>
      </div>
    </div>

  </div>
</section>

    );
}