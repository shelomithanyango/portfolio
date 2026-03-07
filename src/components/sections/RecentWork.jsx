import React, { useState } from "react";

export default function Hero() {
  // 1. State to control modal visibility
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-b border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">My Recent Work</h2>
        <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <article className="group relative p-1 rounded-3xl transition-all duration-300 hover:scale-[1.02] bg-slate-800/50">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative h-full p-8 rounded-[22px] flex flex-col items-center text-center bg-slate-900">
            <span className="mb-4 px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">Featured Project</span>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">faidChatbot</h3>
            <p className="text-sm text-slate-400 mb-6">
              The first aid chatbot provides quick basic health guidance by responding to user symptoms and suggesting safe first aid steps...
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['Django', 'Gemini AI', 'HTML/JS/CSS'].map((tech) => (
                <span key={tech} className="px-2 py-1 text-[10px] rounded-md border border-slate-700 text-slate-400">{tech}</span>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-auto w-full flex items-center justify-between pt-4 border-t border-white/5">
              <a 
                href="https://github.com/shelomithanyango/faidChatbot.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                title="View Code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>

              <a href="https://faidchatbot.onrender.com" target="_blank" className="text-[#FFD700] text-sm font-bold hover:gap-3 transition-all inline-flex items-center gap-2">
                View Project <span>→</span>
              </a>

              <button 
                onClick={() => setShowDetails(true)} 
                className="text-xs text-blue-500 font-bold hover:text-indigo-300 underline underline-offset-4"
              >
                Details
              </button>
            </div>
          </div>
        </article>

        {/* Placeholder Card */}
        <article className="p-8 rounded-3xl border-2 border-dashed border-slate-800 bg-slate-900/30 opacity-40 flex flex-col items-center justify-center text-center">
          <span className="text-xl mb-2 text-slate-500">+</span>
          <h3 className="text-xl font-bold mb-2 text-slate-500">Project Two</h3>
          <p className="text-sm font-medium text-indigo-500/50">Building in progress...</p>
        </article>
      </div>

      {/* 2. THE MODAL OVERLAY */}
      {showDetails && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
            
            <button 
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-blue-400 mb-6">faidChatbot Info</h3>
            
            <div className="space-y-6 text-left">
              <section>
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Technical Overview</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Developed to provide real-time first aid guidance. Integrated the <strong>Gemini API</strong> to process symptoms and return safe, actionable steps using a <strong>Django</strong> backend.
                </p>
              </section>

              <section>
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Key Highlights</h4>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li className="flex gap-2"><span>•</span> Anti-hallucination prompt engineering for medical safety.</li>
                  <li className="flex gap-2"><span>•</span> Built-in stress de-escalation for users in panic mode.</li>
                  <li className="flex gap-2"><span>•</span> Responsive design for emergency mobile access.</li>
                </ul>
              </section>
            </div>

            <button 
              onClick={() => setShowDetails(false)}
              className="mt-8 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}