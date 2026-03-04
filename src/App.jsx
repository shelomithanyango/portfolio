import React, { useState, useRef } from 'react';
import { Github, Linkedin, MessageSquare, Mail, Terminal, Database, Code2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import profile from "./assets/profile.jpeg";

export default function App() {
 
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setIsSending(true);

   
    emailjs.sendForm('service_qie1zvi', 'template_89iifvn', form.current, '1hNTlf-zDSsq5hkJn')
      .then(() => {
        alert("Message sent to Shelomith! ");
        setIsSending(false);
        e.target.reset(); 
      }, (error) => {
        console.log(error.text);
        alert("Oops! Something went wrong.");
        setIsSending(false);
      });
  };

 
  return (
    <div className="w-screen overflow-x-hidden bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500/30 ">
      
      {/* --- NAVIGATION --- */}
      <nav className="flex items-center justify-between p-4 shadow-md border-b border-white/5 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80">
        <h4 className="text-2xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Shelomith Anyango
          </span>
        </h4>
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium ">
          <li><a href="#home" className='hover:text-[#FFD700] transition-colors'>Home</a></li>
          <li><a href="#about" className='hover:text-[#FFD700] transition-colors'>About Me</a></li>
          <li><a href="#projects" className='hover:text-[#FFD700] transition-colors'>Recent work</a></li>
          <li><a href="#technologies" className='hover:text-[#FFD700] transition-colors'>Technologies</a></li>
          <li><a href="#contact" className='hover:text-[#FFD700] transition-colors'>Get In Touch</a></li>
        </ul>
        <div>
          <a 
            href="#contact" 
            className="inline-block px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-200 to-purple-200 text-slate-900 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all cursor-pointer"
          >
            Lets Connect
          </a>
        </div>
      </nav>
      {/* --- Center all items --- */}
      <div className='max-w-6xl mx-auto px-6 flex flex-col items-center'>

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
                        src={profile} 
                        alt="Shelomith" 
                        className="w-80 h-96 object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>
          </div>
        </section>
        
        {/* --- ABOUT ME SECTION --- */}
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
        <h4 className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">12+ Months</h4>
        <p className="text-sm text-slate-500 uppercase tracking-widest mt-2">Learning & Development</p>
      </div>

      <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 hover:border-purple-500/50 transition-colors group">
        <h4 className="text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">5+ Projects</h4>
        <p className="text-sm text-slate-500 uppercase tracking-widest mt-2">Successfully Completed</p>
      </div>
    </div>

  </div>
</section>

        {/* --- RECENT WORK SECTION --- */}
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

        {/* --- TECHNOLOGIES SECTION --- */}
        <section id="technologies" className="py-24 px-6 md:px-20 bg-slate-950 shadow-md border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies I Use</h2>
              <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all group">
                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                  <Code2 size={20} /> Development
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

              <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-all group">
                <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                  <Terminal size={20} /> Tools & OS
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li>Git & GitHub / Bitbucket</li>
                  <li>Ubuntu (Linux) Specialist</li>
                  <li>Command Line (Bash)</li>
                  <li>npm / Pip</li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-yellow-500/30 transition-all group">
                <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                  <Database size={20} /> Backend & Data
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
        <section id="contact" className="py-24 px-6 md:px-20 bg-slate-900/30 shadow-md border-b border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-slate-400 leading-relaxed">
                 Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                <a href="mailto:shelomithanyango@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <Mail className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Email Me</p>
                    <p className="text-slate-200">shelomithanyango@gmail.com</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  {[
                    { name: 'LinkedIn', url: 'https://linkedin.com/in/shelomith-anyango', icon: <Linkedin size={18}/> },
                    { name: 'GitHub', url: 'https://github.com/shelomithanyango', icon: <Github size={18}/> },
                    { name: 'WhatsApp', url: 'https://wa.me/254741080548', icon: <MessageSquare size={18}/> } 
                  ].map((platform) => (
                    <a 
                      key={platform.name} 
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 py-3 flex items-center justify-center gap-2 rounded-xl bg-slate-800 text-sm font-semibold hover:bg-blue-500 transition-all text-white"
                    >
                      {platform.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
            <form ref={form} onSubmit={handleSendMessage} className="space-y-4">
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <label className="text-sm font-medium">Name</label>
      <input 
        name="from_name" 
        type="text" 
        placeholder="Your Name" 
        className="w-full p-3 bg-slate-900 border border-white/10 rounded-lg outline-none focus:border-blue-500" 
        required 
      />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium">Email</label>
      <input 
        name="reply_to" 
        type="email" 
        placeholder="email@example.com" 
        className="w-full p-3 bg-slate-900 border border-white/10 rounded-lg outline-none focus:border-blue-500" 
        required 
      />
    </div>
  </div>

  <div className="space-y-2">
    <label className="text-sm font-medium">Message</label>
    <textarea 
      name="message" 
      placeholder="How can I help you?" 
      rows="4" 
      className="w-full p-3 bg-slate-900 border border-white/10 rounded-lg outline-none focus:border-blue-500" 
      required
    ></textarea>
  </div>

  <button 
    type="submit" 
    disabled={isSending}
    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold hover:opacity-90 transition-opacity"
  >
    {isSending ? "Sending..." : "Send Message"}
  </button>
</form>
            </div>
          </div>
        </section>
      </main>
</div>
      <footer className="py-10 text-center border-t border-white/5">
        <p className="text-slate-500">© 2026 Shelomith Anyango. All rights reserved.</p>
      </footer>

    </div>
  );
}