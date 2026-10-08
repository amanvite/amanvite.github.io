import React from 'react';
import { ExternalLink, Terminal, Code2, MessageSquare, Monitor, Cpu, Server, MapPin } from 'lucide-react';

// --- CUSTOM SVG ICONS (Bypassing dependency errors) ---
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

// --- DATA CONFIGURATION ---
const PROJECTS = [
  {
    id: 'talksy',
    title: "Talksy Real-Time Engine",
    description: "Bidirectional messaging ecosystem. Maintained synchronous client states across distributed connections.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    icon: <MessageSquare className="w-5 h-5" />,
    link: "#"
  },
  {
    id: 'extractor',
    title: "Code Extractor Pro",
    description: "Zero-dependency web utility for structural asset extraction. Bypassed virtual DOM overhead via direct API manipulation.",
    tech: ["Vanilla JS", "HTML5", "DOM API"],
    icon: <Code2 className="w-5 h-5" />,
    link: "#"
  },
  {
    id: 'crypto-cli',
    title: "Cryptographic CLI",
    description: "Terminal utility for generating deterministic, high-entropy passwords in air-gapped environments.",
    tech: ["Python 3", "CLI", "OS-PRNG"],
    icon: <Terminal className="w-5 h-5" />,
    link: "#"
  }
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-zinc-900 selection:text-white pb-24">
      
      {/* NARROW READING COLUMN (Max-width 3xl mimics the reference designs) */}
      <main className="max-w-3xl mx-auto px-6 pt-20 md:pt-32">
        
        {/* --- PROFILE HEADER --- */}
        <header className="mb-16">
          <div className="w-20 h-20 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
            AK
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-2">
            Aman Kumar Verma
          </h1>
          <p className="text-lg text-zinc-500 font-medium flex items-center gap-2">
            Full-Stack Systems Engineer
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-500 text-xs font-semibold ml-2">
              <MapPin className="w-3 h-3" /> Pune, IN
            </span>
          </p>
        </header>

        {/* --- THE 'NOW' SECTION --- */}
        <section className="mb-16 prose prose-zinc max-w-none text-zinc-700 leading-relaxed">
          <p className="text-base md:text-lg mb-6">
            I architect and engineer scalable web ecosystems, focusing strictly on the MERN stack and robust TypeScript environments. I build products end-to-end: from database persistence and server-side logic to client-side DOM execution.
          </p>
          
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 mt-10">Now</h2>
          <p className="text-base md:text-lg">
            I am pursuing my Bachelor of Computer Applications entirely online. This is a deliberate architectural decision—it decouples my schedule from rigid university lectures, allocating my primary daily bandwidth to full-time remote software engineering and project development.
          </p>
          
          {/* Social / Contact Links */}
          <div className="flex flex-wrap items-center gap-6 mt-8 text-sm font-medium">
            <a href="https://github.com/amanvite" target="_blank" rel="noreferrer" className="flex items-center text-zinc-500 hover:text-zinc-900 transition-colors group">
              <GithubIcon className="w-4 h-4 mr-2 text-zinc-400 group-hover:text-zinc-900 transition-colors" /> GitHub
            </a>
            <a href="#" className="flex items-center text-zinc-500 hover:text-zinc-900 transition-colors group">
              <InstagramIcon className="w-4 h-4 mr-2 text-zinc-400 group-hover:text-zinc-900 transition-colors" /> Instagram
            </a>
            <a href="mailto:contact@example.com" className="flex items-center text-zinc-500 hover:text-zinc-900 transition-colors group">
              <MailIcon className="w-4 h-4 mr-2 text-zinc-400 group-hover:text-zinc-900 transition-colors" /> Email
            </a>
          </div>
        </section>

        {/* --- RECENT PROJECTS (Kamran-style Grid) --- */}
        <section className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Selected Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project) => (
              <a 
                key={project.id} 
                href={project.link}
                className="group block p-6 bg-white border border-zinc-200/80 rounded-2xl hover:border-zinc-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-50 rounded-lg text-zinc-600 group-hover:bg-zinc-100 transition-colors">
                      {project.icon}
                    </div>
                    <h3 className="font-bold text-zinc-900">{project.title}</h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-zinc-600 transition-colors" />
                </div>
                
                <p className="text-sm text-zinc-500 leading-relaxed mb-6 h-16 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* --- HARDWARE & ENVIRONMENT (Barun-style Info Blocks) --- */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Infrastructure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white border border-zinc-200/80 rounded-2xl">
              <Server className="w-5 h-5 text-zinc-400 mb-3" />
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-1">Environment</div>
              <div className="text-sm font-semibold text-zinc-900">Ubuntu Linux</div>
              <div className="text-xs text-zinc-500 mt-1">Primary dev kernel</div>
            </div>
            
            <div className="p-5 bg-white border border-zinc-200/80 rounded-2xl">
              <Monitor className="w-5 h-5 text-zinc-400 mb-3" />
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-1">Workstation</div>
              <div className="text-sm font-semibold text-zinc-900">Dedicated Mini PC</div>
              <div className="text-xs text-zinc-500 mt-1">24" Samsung & APC UPS</div>
            </div>
            
            <div className="p-5 bg-white border border-zinc-200/80 rounded-2xl">
              <Cpu className="w-5 h-5 text-zinc-400 mb-3" />
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-1">Mobile Compute</div>
              <div className="text-sm font-semibold text-zinc-900">MSI Modern 14</div>
              <div className="text-xs text-zinc-500 mt-1">Intel Core i5 framework</div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}