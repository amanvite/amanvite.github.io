import { useState, useEffect } from 'react';
import { Globe, Server, Workflow, Bot, Database, Layers, Copy, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons';
import { PROJECTS } from '../data';

const CAPABILITIES = [
  {
    id: 'cap1',
    title: 'Web Development',
    description: 'Architecting scalable, responsive web applications using React and modern frameworks.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 'cap2',
    title: 'API Architecture',
    description: 'Designing secure, high-performance RESTful APIs and real-time data pipelines.',
    icon: <Server className="w-6 h-6" />
  },
  {
    id: 'cap3',
    title: 'AI Automation',
    description: 'Streamlining business workflows with intelligent, LLM-powered automation systems.',
    icon: <Workflow className="w-6 h-6" />
  },
  {
    id: 'cap4',
    title: 'AI Agents',
    description: 'Integrating autonomous AI agents for complex data processing and user interaction.',
    icon: <Bot className="w-6 h-6" />
  },
  {
    id: 'cap5',
    title: 'Database Systems',
    description: 'Structuring robust data schemas and optimizing query performance using MongoDB.',
    icon: <Database className="w-6 h-6" />
  },
  {
    id: 'cap6',
    title: 'System Architecture',
    description: 'Planning end-to-end technical infrastructure and scalable cloud deployments.',
    icon: <Layers className="w-6 h-6" />
  }
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [greeting, setGreeting] = useState("Hello");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("info.amanvite@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`transition-all duration-700 ease-out max-w-4xl mx-auto ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      
      {/* PROPER EXECUTIVE HERO SECTION */}
      <section className="mb-24 pt-8 md:pt-12 pb-16 border-b border-zinc-200/80">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-12 md:gap-8">
          
          {/* Left: Typography, Bio & Socials */}
          <div className="flex-1 max-w-2xl">
            <h2 
              className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4"
              style={{ fontFamily: '"Maddison", sans-serif' }}
            >
              Systems Engineer
            </h2>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight mb-6 leading-[1.15]">
              Aman Verma
            </h1>
            
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed mb-10 max-w-xl">
              <span className="font-semibold text-zinc-900">{greeting}.</span> I architect and engineer scalable web ecosystems, focusing strictly on the MERN stack and robust TypeScript environments. I build products end-to-end: from database persistence and server-side logic to client-side DOM execution.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold">
              <a href="https://github.com/amanvite" target="_blank" rel="noreferrer" className="flex items-center text-zinc-500 hover:text-zinc-900 transition-colors">
                <GithubIcon className="w-5 h-5 mr-2" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/amanvite/" target="_blank" rel="noreferrer" className="flex items-center text-zinc-500 hover:text-zinc-900 transition-colors">
                <LinkedinIcon className="w-5 h-5 mr-2" /> LinkedIn
              </a>
              <button 
                onClick={handleCopyEmail}
                className="flex items-center text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer group"
              >
                <MailIcon className="w-5 h-5 mr-2" /> 
                Email
                <span className="ml-2 inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                </span>
              </button>
            </div>
          </div>

          {/* Right: Executive Avatar */}
          <div className="relative shrink-0 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
            {/* Subtle architectural offset ring */}
            <div className="absolute inset-0 rounded-full border border-zinc-200/80 translate-x-4 -translate-y-4 md:translate-x-5 md:-translate-y-5 hidden md:block"></div>
            
            <img 
              src="https://github.com/amanvite.png" 
              alt="Aman Verma"
              className="relative w-full h-full rounded-full object-cover border border-zinc-200/80 shadow-2xl bg-white z-10 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

        </div>
      </section>

      {/* Enthusiastic Capabilities Grid */}
      <section className="mb-24">
        <div className="mb-10 border-b border-zinc-200/80 pb-4">
          <h2 
            className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1"
            style={{ fontFamily: '"Maddison", sans-serif' }}
          >
            Capabilities
          </h2>
          <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
            What I Can Build
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITIES.map((cap) => (
            <div key={cap.id} className="group p-6 rounded-2xl bg-zinc-50/50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-emerald-600 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors mb-5 shadow-sm">
                {cap.icon}
              </div>
              <h4 className="font-bold text-base text-zinc-900 mb-2">{cap.title}</h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Pinned Projects */}
      <section className="mb-16">
        <div className="mb-8 border-b border-zinc-200/80 pb-4">
          <h2 
            className="text-xs font-bold uppercase tracking-widest text-zinc-400"
            style={{ fontFamily: '"Maddison", sans-serif' }}
          >
            Pinned Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block p-6 border border-zinc-200 rounded-xl hover:border-zinc-400 hover:bg-zinc-50/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-lg text-zinc-900 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-zinc-900 transition-colors shrink-0 ml-4" />
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 h-12 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-[10px] font-bold tracking-wider rounded-md uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}