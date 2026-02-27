import React from 'react';

export default function App() {
  return (
    <div className="bg-gradient-to-r bg-slate-950 ">
      {/* --- NAVIGATION --- */}
      <nav className="flex items-center justify-between p-4 shadow-md border-b border-white/5 backdrop-blur-sm">
     <h4 className="text-2xl font-extrabold tracking-tight">
  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    Shelomith Anyango
  </span>
</h4>
        <ul className="hidden md:flex items-center gap-10 text-sm font-larger">
          <li><a href="#home" className='hover:text-[#FFD700] transition-colors'>Home</a></li>
          <li><a href="#about" className='hover:text-[#FFD700] transition-colors'>About Me</a></li>
          <li><a href="#projects" className='hover:text-[#FFD700] transition-colors'>Recent work</a></li>
          <li><a href="#technologies" className='hover:text-[#FFD700] transition-colors'>Technologies</a></li>
           <li><a href="#contact">Get In Touch</a></li>
        </ul>
        {/* Social handles placeholders */}
        <div>
          <button className='px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-200 to-purple-200 text-slate-900 font-bold hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all'><a href="#contact">Lets Connect</a></button>
        </div>
      <div>
          <span>color toggle</span>
       </div>   
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section id="home" className="flex flex-col md:flex-row items-center justify-between px-90 py-20 gap-10 border -b border-white/5 backdrop-blur-sm">
          <div className="md:w-1/2 space-y-6">
            {/* Status Badge */}
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
            
            <h3 className="text-2xl font-medium text-slate-400 font-monstrate">Software Developer </h3>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              I find interest in building efficient software systems, solving real-world problems using technology, and continuously improving my programming skills.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 text-slate-900 font-bold hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all">
                Let’s get started <span className="text-xl">›</span>
              </button>
              
            </div>

            {/* Stats Row */}
            <div className="flex gap-10 pt-10 border-t border-slate-800">
                <div><span className="block text-2xl font-bold text-white">12+</span><span className="text-xs uppercase tracking-widest text-slate-500">Months of Exp.</span></div>
                <div><span className="block text-2xl font-bold text-white">5+</span><span className="text-xs uppercase tracking-widest text-slate-500">Projects</span></div>
                <div><span className="block text-2xl font-bold text-white">24/7</span><span className="text-xs uppercase tracking-widest text-slate-500">Support</span></div>
            </div>
          </div>

          {/* Profile Image with Gradient Border */}
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

<section id="about" className="py-24 border-b border-white/5 px-6 md:px-12 lg:px-20 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
    
    {/* To the left :my Story */}
    <div className="md:w-1/2 space-y-8">
      {/* Label Badge */}
      <div className="space-y-3 text-center">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Get to Know Me
            </div>
        
        <h4 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Creating <span className="text-blue-400">Solutions</span> <br /> 
          with Precision.
        </h4>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-5 text-lg text-slate-400 leading-relaxed font-monstrate">
        <p>
          I am a Software Developer with a passion for building functional and 
          user-centric applications. My journey in technology is driven by a 
          curiosity for how things work and a desire to create tools that make 
          life easier for others.
        </p>
        <p>
          With a background in <span className="text-blue-400 font-medium border-b border-indigo-500/50">Python, Java, and Web Technologies</span>, 
          I specialize in bridging the gap between complex backend logic and 
          intuitive frontend designs.
        </p>
      </div>

      {/* Quick Interests Chips */}
      <div className="flex flex-wrap gap-3 pt-4">
        <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">Linux Ubuntu Enthusiast</span>
        <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">Database Architecture</span>
        
      </div>
    </div>

    {/* for the right side */}
    <div className="md:w-1/2 w-full relative">
      {/* Background Decorative Blur */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>

      {/* Stats Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Stat 1: Experience */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md hover:border-blue-400/50 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <h4 className="text-2xl font-bold text-white">12+ Months</h4>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Learning & Dev</p>
        </div>

        {/* Stat 2: Projects */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md hover:border-[#FFD700]/50 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-[#FFD700] mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
          </div>
          <h4 className="text-2xl font-bold text-white">2+ Projects</h4>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Completed</p>
        </div>

        {/* Large Highlight Box */}
        <div className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-transparent border border-white/5">
          <p className="text-slate-300 italic">
            "I thrive in environments that challenge me to learn new frameworks and solve intricate problems that bridge technology and human needs."
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

        {/* --- RECENT WORK SECTION --- */}
        <section className='py-20'>
          <div>Recent Work</div>
          <h2>Recent work</h2>
          <div>
            <article>
              <h3>First Aid Chatbot</h3>
              <p>
                A web-based first aid assistant designed to provide basic emergency guidance.
                The frontend is built using HTML, CSS, and JavaScript, while the backend is powered by Django.
                The chatbot integrates the Gemini API to enable intelligent conversational responses.
              </p>
              <span>View Project</span>
            </article>
            <article>
              <h3>Project Title 2</h3>
              <p>coming soon</p>
              <span>View Project</span>
            </article>
          </div>
        </section>

        {/* --- TECHNOLOGIES SECTION --- */}
        <section>
          <div>Technologies</div>
          <h2>Technologies I Use</h2>
          <p>Here are the technologies I use in my projects:</p>
          
          <h3>Programming Languages & Frameworks</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Django</li>
            <li>React</li>
            <li>Tailwind CSS</li>
          </ul>

          <h3>Version Control & Development Tools</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Bitbucket</li>
            <li>npm</li>
          </ul>

          <h3>Web Development Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>REST API Basics</li>
          </ul>

          <h3>Operating Systems & Environment</h3>
          <ul>
            <li>Ubuntu (Linux)</li>
            <li>Windows 10</li>
            <li>Command Line Basics</li>
          </ul>

          <h3>Database Concepts</h3>
          <ul>
            <li>SQL Fundamentals</li>
            <li>Database Design Basics</li>
            <li>Query Understanding</li>
          </ul>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section>
          <div>
            <h2>Shelomith Anyango</h2>
            <p>
              I am passionate about software development, database systems, and building
              reliable digital solutions. Let’s connect and build something meaningful together.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Recent work</a></li>
            <li><a href="#technologies">Technologies</a></li>
             <li><a href="#contact">Get In Touch</a></li>
            </ul>
          </div>

          <div>
            <h3>Social Media</h3>
            <p>
              <a href="https://github.com/shelomithanyango">GitHub</a><br />
              <a href="https://linkedin.com/in/shelomith-anyango">LinkedIn</a><br />
              <a href="tel:+254741080548">WhatsApp</a>
            </p>
          </div>

          <div>
            <h3>Get in Touch</h3>
            <p>Email:</p>
            <a href="mailto:shelomithanyango@gmail.com">
              shelomithanyango@gmail.com
            </a>
            <p>
              Feel free to reach out for collaboration, questions, or professional networking.
            </p>
          </div>
          <div>
            <h3>Send Me a Message</h3>
            <p>Use the contact form or email me directly.</p>
            <form >
              <div>
                <label>Name:</label>
                <input type="text" placeholder='Your Name' />
              </div>
              <div>
                <label >Email:</label>
                <input type="email" placeholder='Your Email' />
              </div>
              <div>
                <label>Message:</label>
               <textarea placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer>
        <p>© 2026 Shelomith. All rights reserved.</p>
      </footer>
    </div>
  );
}