import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* --- NAVIGATION --- */}
      <nav>
        <h1>Shelomith Anyango</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Recent work</li>
          <li>Technologies</li>
          <li>Get In Touch</li>
        </ul>
        {/* Social handles placeholders */}
        <div>
          <span>LinkedIn</span>
          <span>Github</span>
          <span>Twitter</span>
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

        {/* --- RECENT WORK SECTION --- */}
        <section>
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
              <li><a href="#about">About Me</a></li>
              <li><a href="#recent-work">Recent Work</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#contact">Get in Touch</a></li>
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
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer>
        <p>© 2026 Shelomith. All rights reserved.</p>
      </footer>
    </div>
  );
}