import React from "react";


export default function Hero() {
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
                <h3 className="text-2xl font-bold text-blue-400 mb-3">First Aid Chatbot</h3>
                <p className="text-sm text-slate-400 mb-6">Built with <strong>Gemini API</strong> and <strong>Django</strong>.It also demonstrates USSD usage from Africas talking</p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {['Django', 'Gemini AI', 'HTML/JS/CSS'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-[10px] rounded-md border border-slate-700 text-slate-400">{tech}</span>
                  ))}
                </div>
                <a href="https://faidchatbot.onrender.com " className="mt-auto text-[#FFD700] font-bold hover:gap-3 transition-all inline-flex items-center gap-2">View Project <span>→</span></a>
              </div>
            </article>

            <article className="p-8 rounded-3xl border-2 border-dashed border-slate-800 bg-slate-900/30 opacity-40 flex flex-col items-center justify-center text-center">
              <span className="text-xl mb-2">+</span>
              <h3 className="text-xl font-bold mb-2 text-slate-500">Project Two</h3>
              <p className="text-sm font-medium text-indigo-500/50">Building in progress...</p>
            </article>
          </div>
        </section>

  );
}