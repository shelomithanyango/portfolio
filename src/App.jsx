import { AlignCenter } from 'lucide-react';
import React from 'react';

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      {/* --- NAVIGATION --- */}
      <nav className="flex items-center justify-between p-4 shadow-md border-b border-white/5 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <h4 className="text-2xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Shelomith Anyango
          </span>
        </h4>
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          <li><a href="#home" className='hover:text-[#FFD700] transition-colors'>Home</a></li>
          <li><a href="#about" className='hover:text-[#FFD700] transition-colors'>About Me</a></li>
          <li><a href="#projects" className='hover:text-[#FFD700] transition-colors'>Recent work</a></li>
          <li><a href="#technologies" className='hover:text-[#FFD700] transition-colors'>Technologies</a></li>
          <li><a href="#contact" className='hover:text-[#FFD700] transition-colors'>Get In Touch</a></li>
        </ul>
        <div>
          <button className='px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-200 to-purple-200 text-slate-900 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all'>
            <a href="#contact">Lets Connect</a>
          </button>
        </div>
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
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
              I find interest in building efficient software systems, solving real-world problems using technology, and continuously improving my programming skills.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 text-slate-900 font-bold hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all"><a href="#contact">Let’s get started</a>
                 <span className="text-xl">›</span>
              </button>
            </div>

            <div className="flex gap-10 pt-10 border-t border-slate-800">
                <div><span className="block text-2xl font-bold text-white">12+</span><span className="text-xs uppercase tracking-widest text-slate-500">Months of Exp.</span></div>
                <div><span className="block text-2xl font-bold text-white">5+</span><span className="text-xs uppercase tracking-widest text-slate-500">Projects</span></div>
                <div><span className="block text-2xl font-bold text-white">24/7</span><span className="text-xs uppercase tracking-widest text-slate-500">Support</span></div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-b from-yellow-400 via-indigo-500 to-purple-600 shadow-2xl">
                <div className="bg-[#0B0E14] rounded-[22px] overflow-hidden">
                    <img 
                        src="your-image-url.jpg" 
                        alt="Shelomith" 
                        className="w-80 h-96 object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>
          </div>
        </section>
        
        {/* --- ABOUT ME SECTION --- */}
        <section id="about" className="py-24 border-b border-white/5 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 space-y-8">
              <div className="space-y-3">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                      Get to Know Me
                 </div>
                <h4 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Creating <span className="text-blue-400">Solutions</span> <br /> 
                  with Precision.
                </h4>
              </div>

              <div className="space-y-5 text-lg text-slate-400 leading-relaxed">
                <p>I am a Software Developer with a passion for building functional and user-centric applications.</p>
                <p>With a background in <span className="text-blue-400 font-medium border-b border-indigo-500/50">Python, Java, and Web Technologies</span>, I specialize in bridging the gap between complex logic and intuitive design.</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">Linux Ubuntu Enthusiast</span>
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">Database Architecture</span>
              </div>
            </div>

            <div className="md:w-1/2 w-full relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md">
                  <h4 className="text-2xl font-bold text-white">12+ Months</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Learning & Dev</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md">
                  <h4 className="text-2xl font-bold text-white">2+ Projects</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* --- RECENT WORK SECTION --- */}
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">Recent Work</h2>
            <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <article className="group relative p-1 rounded-3xl transition-all duration-300 hover:scale-[1.02] bg-slate-800/50">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative h-full p-8 rounded-[22px] flex flex-col items-center text-center bg-slate-900">
                <span className="mb-4 px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">Featured Project</span>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">First Aid Chatbot</h3>
                <p className="text-sm text-slate-400 mb-6">Built with <strong>Gemini API</strong> and <strong>Django</strong>.</p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {['Django', 'Gemini AI', 'html,js&css'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-[10px] rounded-md border border-slate-700 text-slate-400">{tech}</span>
                  ))}
                </div>
                <a href="#" className="mt-auto text-[#FFD700] font-bold hover:gap-3 transition-all">View Project →</a>
              </div>
            </article>

            <article className="p-8 rounded-3xl border-2 border-dashed border-slate-800 bg-slate-900/30 opacity-40 flex flex-col items-center justify-center text-center">
              <span className="text-xl mb-2">+</span>
              <h3 className="text-xl font-bold mb-2 text-slate-500">Project Two</h3>
              <p className="text-sm font-medium text-indigo-500/50">Building in progress...</p>
            </article>
          </div>
        </section>

        {/* --- TECHNOLOGIES SECTION --- */}
        <section id="technologies" className="py-24 px-6 md:px-20 bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies I Use</h2>
              <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Languages & Frameworks */}
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all group">
                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-blue-400/10 text-blue-400">⚡</span>
                  Development
                </h3>
                <ul className="space-y-3">
                  {['Python', 'Java', 'JavaScript', 'Django', 'React', 'Tailwind CSS'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Environment */}
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-all group">
                <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-purple-400/10 text-purple-400">🛠️</span>
                  Tools & OS
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li>Git & GitHub / Bitbucket</li>
                  <li>Ubuntu (Linux) Specialist</li>
                  <li>Command Line (Bash)</li>
                  <li>npm / Pip</li>
                </ul>
              </div>

              {/* Database & Web */}
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-yellow-500/30 transition-all group">
                <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-yellow-400/10 text-yellow-400">💾</span>
                  Backend & Data
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li>SQL Fundamentals</li>
                  <li>Database Design</li>
                  <li>REST API Architecture</li>
                  <li>System Workflow</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 px-6 md:px-20 bg-slate-900/30">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-slate-400 leading-relaxed">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                <a href="mailto:shelomithanyango@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform">✉️</div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Email Me</p>
                    <p className="text-slate-200">shelomithanyango@gmail.com</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  {['LinkedIn', 'GitHub', 'WhatsApp'].map((platform) => (
                    <a key={platform} href="#" className="flex-1 py-3 text-center rounded-xl bg-slate-800 text-sm font-semibold hover:bg-blue-500 transition-colors">
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea rows="4" placeholder="How can I help you?" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="md:col-span-2 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center border-t border-white/5">
        <p className="text-slate-500">© 2026 Shelomith Anyango. All rights reserved.</p>
      </footer>
    </div>
  );
}