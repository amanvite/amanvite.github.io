import { useState, useEffect } from 'react';
import { ExternalLink, Terminal, Code2, MessageSquare, Moon, Sun } from 'lucide-react';

// --- CUSTOM SVG ICONS ---
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
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
    tech: ["JavaScript", "Node.js", "Socket.io", "MongoDB"],
    icon: <MessageSquare className="w-5 h-5" />,
    linkColor: "decoration-emerald-500",
    link: "https://github.com/amanvite/talksy"
  },
  {
    id: 'extractor',
    title: "Code Extractor",
    description: "A stealth extraction engine for dynamic web apps. Bypassed virtual DOM overhead via direct API manipulation.",
    tech: ["TypeScript", "HTML5", "DOM API"],
    icon: <Code2 className="w-5 h-5" />,
    linkColor: "decoration-pink-500",
    link: "https://github.com/amanvite/code-extractor"
  },
  {
    id: 'sudoku',
    title: "Minimalist Sudoku",
    description: "A sleek, minimalist Sudoku Web-App engineered for performance and a clean, distraction-free user experience.",
    tech: ["TypeScript", "Web API"],
    icon: <Terminal className="w-5 h-5" />,
    linkColor: "decoration-indigo-500",
    link: "https://github.com/amanvite/sudoku"
  }
];

const TESTIMONIALS = [
  {
    id: 't1',
    quote: "I collaborated with Aman on a full-stack project, and his approach to setting up the backend made my life on the frontend so much easier. He's meticulous with his TypeScript interfaces and genuinely fun to pair program with.",
    author: "Rohan Mehta",
    role: "Frontend Developer",
    initials: "RM"
  },
  {
    id: 't2',
    quote: "I hired Aman to build a custom extraction tool for my project. He didn't try to overcomplicate the stack or upsell me—he just wrote a lean, fast script that did exactly what I needed from day one.",
    author: "Jake Caldwell",
    role: "Indie Maker",
    initials: "JC"
  },
  {
    id: 't3',
    quote: "As a non-technical founder building an MVP, I was worried about finding the right developer. Aman walked me through every database decision patiently and delivered our React app weeks ahead of our launch target.",
    author: "Aditi Verma",
    role: "Early-stage Founder",
    initials: "AV"
  },
  {
    id: 't4',
    quote: "Aman helped me untangle a massive Socket.io state management issue on a side project. He didn't just fix it; he actually took the time to explain the real-time data flow to me. A really solid, reliable engineer.",
    author: "Haruto Tanaka",
    role: "Web Developer",
    initials: "HT"
  },
  {
    id: 't5',
    quote: "We partnered up on a few freelance gigs where I handled design and Aman handled the code. He translates UI components into clean React code perfectly, and he's incredibly responsive when changes are needed.",
    author: "Karthik Nair",
    role: "Freelance UI Designer",
    initials: "KN"
  }
];

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(TESTIMONIALS[0].id);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] font-sans selection:bg-emerald-500/30 dark:selection:bg-emerald-500/30 selection:text-zinc-900 dark:selection:text-white pb-12 transition-colors duration-300">
      
      {/* --- THEME TOGGLE --- */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:scale-105 transition-all shadow-sm"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* NARROW READING COLUMN */}
      <main className="max-w-3xl mx-auto px-6 pt-20 md:pt-32">
        
        {/* --- PROFILE HEADER --- */}
        <header className="mb-16">
          <div className="w-20 h-20 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center text-2xl font-bold mb-6 shadow-md transition-colors">
            AK
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2 transition-colors">
            Aman Kumar Verma
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-2 transition-colors">
            Full-Stack Systems Engineer
          </p>
        </header>

        {/* --- INTRO SECTION --- */}
        <section className="mb-16 text-zinc-700 dark:text-zinc-300 leading-relaxed transition-colors">
          <p className="text-base md:text-lg">
            I architect and engineer scalable web ecosystems, focusing strictly on the MERN stack and robust TypeScript environments. I build products end-to-end: from database persistence and server-side logic to client-side DOM execution.
          </p>
          
          {/* Social / Contact Links */}
          <div className="flex flex-wrap items-center gap-6 mt-8 text-sm md:text-base font-semibold">
            <a href="https://github.com/amanvite" target="_blank" rel="noreferrer" className="flex items-center text-zinc-900 dark:text-white underline decoration-emerald-500 decoration-2 underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
              <GithubIcon className="w-4 h-4 mr-2 text-zinc-900 dark:text-white" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/amanvite/" target="_blank" rel="noreferrer" className="flex items-center text-zinc-900 dark:text-white underline decoration-blue-500 decoration-2 underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
              <LinkedinIcon className="w-4 h-4 mr-2 text-zinc-900 dark:text-white" /> LinkedIn
            </a>
            <a href="mailto:info.amanvite@gmail.com" className="flex items-center text-zinc-900 dark:text-white underline decoration-yellow-500 decoration-2 underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
              <MailIcon className="w-4 h-4 mr-2 text-zinc-900 dark:text-white" /> Email
            </a>
          </div>
        </section>

        {/* --- RECENT PROJECTS --- */}
        <section className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6 transition-colors">Selected Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project) => (
              <a 
                key={project.id} 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group block p-6 bg-white dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md dark:hover:shadow-lg dark:hover:bg-zinc-900 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg text-zinc-600 dark:text-zinc-300 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors">
                      {project.icon}
                    </div>
                    <h3 className={`font-bold text-lg text-zinc-900 dark:text-zinc-100 transition-colors underline ${project.linkColor} decoration-2 underline-offset-4 group-hover:opacity-80`}>
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                </div>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 h-16 line-clamp-3 transition-colors">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/50 text-zinc-500 dark:text-zinc-400 text-[10px] font-bold tracking-wider rounded-md transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* --- TESTIMONIALS ACCORDION --- */}
        <section className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6 transition-colors">Testimonials</h2>
          
          <div className="flex gap-2 md:gap-3 h-[280px] w-full">
            {TESTIMONIALS.map((t) => {
              const isActive = activeTestimonial === t.id;
              
              return (
                <div
                  key={t.id}
                  onClick={() => setActiveTestimonial(t.id)}
                  className={`relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col
                    ${isActive
                      ? 'flex-grow bg-white dark:bg-zinc-900/50 shadow-sm opacity-100 cursor-default'
                      : 'w-14 md:w-16 bg-zinc-50/50 dark:bg-zinc-900/20 opacity-50 hover:opacity-80 cursor-pointer shrink-0'
                    }
                  `}
                >
                  <div className="absolute inset-0 p-5 md:p-6 w-[280px] md:w-[400px] flex flex-col justify-between">
                    <p className={`text-zinc-700 dark:text-zinc-300 text-[15px] leading-relaxed transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                      "{t.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-600 dark:text-zinc-400 shrink-0 shadow-sm">
                        {t.initials}
                      </div>
                      <div className={`transition-opacity duration-300 overflow-hidden ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="font-bold text-sm text-zinc-900 dark:text-zinc-100 whitespace-nowrap">{t.author}</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 whitespace-nowrap">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="pt-8 text-sm font-medium text-zinc-400 dark:text-zinc-500 transition-colors">
          Open to a good conversation. <a href="mailto:info.amanvite@gmail.com" className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:text-zinc-900 dark:hover:text-white transition-colors">Say hi.</a>
        </footer>

      </main>
    </div>
  );
}