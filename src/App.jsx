import React from 'react';

export default function App() {
  return (
    <div className="bg-gradient-to-r bg-slate-950">
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
          <button className='px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-300  hover:scale-105 transition-transform'><a href="#contact">Lets Connect</a></button>
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
                <div><span className="block text-2xl font-bold text-white">2+</span><span className="text-xs uppercase tracking-widest text-slate-500">Years Exp.</span></div>
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
        
        {/* --- ABOUT SECTION --- */}
  <section id="about">
  <div>
    <div>
      <h2>About Me</h2>
      <div></div>
    </div>

    <div>
      <div>
        <h3>My Journey</h3>
        <p>
          I'm a dedicated software developer based in Bungoma with a passion for creating efficient 
          and scalable solutions. My journey began with a curiosity about how things work, which led 
          me to explore programming and eventually pursue a career in software development.
        </p>
        <p>
          With over two years of experience, I've had the opportunity to work on diverse projects,
          from web applications to database systems. I enjoy tackling complex challenges and finding
          innovative solutions.
        </p>

        <p>
          <strong>Location:</strong> Bungoma
        </p>
      </div>

      <div>
        <h4>Core Skills</h4>
        <ul>
          <li>React</li>
          <li>Django</li>
          <li>REST APIs</li>
          <li>Database Design</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </div>
  </div>
</section>

        {/* --- RECENT WORK SECTION --- */}
        <section>
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