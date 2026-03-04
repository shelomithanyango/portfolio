import React from "react";
import { Terminal, Database, Code2 } from 'lucide-react';

export default function Technologies() {
    return (
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
    );
}