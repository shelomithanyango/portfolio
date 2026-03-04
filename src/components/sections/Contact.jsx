import React, { useRef, useState } from "react";
import { Github, Linkedin, MessageSquare, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact () {
      const form = useRef();
      const [isSending, setIsSending] = useState(false);
    
      const handleSendMessage = (e) => {
        e.preventDefault();
        setIsSending(true);

        console.log(import.meta.env.VITE_SERVICE_ID);
console.log(import.meta.env.VITE_TEMPLATE_ID);
console.log(import.meta.env.VITE_USER_ID);
    
       
        emailjs.sendForm( import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_USER_ID)
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
    );
} 