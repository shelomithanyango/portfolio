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
        <section>
          <div>
            {/* badge */}
            <span>Crafting Digital Experiences Through Code</span>
            <h1>Hi, I'm Shelomith Anyango</h1>
            <h3>A software developer</h3>

            <p>
              I find interest in building efficient software systems, 
              with a strong focus on writing clean, maintainable code
              solving real-world problems using technology 
              and continuously improving my programming skills.
            </p>
            <div>
              <button>
                Let’s get started <span>›</span>
              </button>
              <button>View CV</button>
            </div>

        
          </div>

          {/* My Image Placeholder */}
          <div>
            <img src="your-image-url.jpg" alt="Profile Portrait" />
          </div>
        </section>

        {/* --- ABOUT ME SECTION --- */}
<section id="about">
  {/* Small label/badge */}
  <div>
    <span>About Me</span>
  </div>

  <h2>Transforming Ideas into Reality Through Code</h2>
  
  <div>
    {/* Left Side: Professional Bio */}
    <div>
      <p>
        I am a Software Developer with a passion for building functional and 
        user-centric applications. My journey in technology is driven by a 
        curiosity for how things work and a desire to create tools that make 
        life easier for others.
      </p>
      <p>
        With a background in Python, Java, and Web Technologies, I specialize in 
        bridging the gap between complex backend logic and intuitive frontend 
        designs. I thrive in environments that challenge me to learn new 
        frameworks and solve intricate problems.
      </p>
    </div>

    {/* Right Side: Stats (Inspired by your screenshot) */}
    <div>
      <div>
        <strong>2+</strong>
        <span>Years of Learning & Building</span>
      </div>
      <div>
        <strong>2+</strong>
        <span>Projects Completed</span>
      </div>
      <div>
        <strong>5+</strong>
        <span>Technologies Mastered</span>
      </div>
    </div>
  </div>

  {/*  Personal interests/philosophy */}
  <div>
    <p>When I'm not coding, you can find me exploring Ubuntu terminal tricks, 
    studying database architecture, or contributing to open-source discussions.</p>
  </div>
  {/* Right Side: The Image (This will sit sideways to the text) */}
    <div>
      <img src="your-image-url.jpg" alt="Shelomith Anyango Portrait" />
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