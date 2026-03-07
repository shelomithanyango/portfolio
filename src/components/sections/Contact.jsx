import React, { useRef, useState } from "react";
import { Github, Linkedin, Instagram, Mail, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); 

  const handleSendMessage = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_qie1zvi', 
      'template_89iifvn', 
      form.current, 
      '1hNTlf-zDSsq5hkJn'
    )
    .then((result) => {
      setIsSending(false);
      setShowSuccess(true); 
      form.current.reset();
      setTimeout(() => setShowSuccess(false), 4000);
    }, (error) => {
      setIsSending(false);
      console.log(error.text);
    });
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-20 bg-slate-900/30 shadow-md border-b border-white/5">
      
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center gap-3 px-6 py-4 bg-slate-900/80 backdrop-blur-xl border border-green-500/30 rounded-2xl shadow-2xl shadow-green-500/10">
            <CheckCircle2 className="text-green-400" size={20} />
            <p className="text-white font-medium">Message sent! I'll get back to you soon.</p>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Contact Info */}
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
                <p className="text-slate-200 text-sm">shelomithanyango@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', url: 'https://linkedin.com/in/shelomith-anyango-34888a334', icon: <Linkedin size={18}/> },
                { name: 'GitHub', url: 'https://github.com/shelomithanyango', icon: <Github size={18}/> },
                { name: 'Instagram', url: 'https://instagram.com/ciel.o5005', icon: <Instagram size={18}/> } 
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

        {/* Right Side: Form */}
        <div className="lg:w-2/3">
          <form ref={form} onSubmit={handleSendMessage} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Name</label>
                <input 
                  name="from_name" 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 bg-slate-900 border border-white/10 rounded-lg outline-none focus:border-blue-500 text-white transition-colors" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email</label>
                <input 
                  name="reply_to" 
                  type="email" 
                  placeholder="email@example.com" 
                  className="w-full p-3 bg-slate-900 border border-white/10 rounded-lg outline-none focus:border-blue-500 text-white transition-colors" 
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea 
                name="message" 
                placeholder="How can I help you?" 
                rows="4" 
                className="w-full p-3 bg-slate-900 border border-white/10 rounded-lg outline-none focus:border-blue-500 text-white transition-colors" 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSending}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold hover:opacity-90 transition-all text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}