import { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, Layout, Server, Database, Video, Copy, CheckCircle2, Smartphone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons';
import { PROJECTS, BLOG_POSTS } from '../data';

const CAPABILITIES = [
  {
    id: 'cap1',
    title: 'Frontend Engineering',
    description: 'Crafting responsive, accessible, and type-safe client interfaces utilizing React and TypeScript.',
    icon: <Layout className="w-5 h-5" />
  },
  {
    id: 'cap2',
    title: 'Backend & APIs',
    description: 'Designing robust RESTful APIs and real-time bidirectional socket connections with Node.js.',
    icon: <Server className="w-5 h-5" />
  },
  {
    id: 'cap3',
    title: 'Database Architecture',
    description: 'Structuring scalable NoSQL data models and efficient querying logic using MongoDB.',
    icon: <Database className="w-5 h-5" />
  },
  {
    id: 'cap4',
    title: 'Technical Content',
    description: 'Breaking down complex engineering paradigms into short-form content for the developer community.',
    icon: <Video className="w-5 h-5" />
  }
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [greeting, setGreeting] = useState("Hello");
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setIsMounted(true);
    
    // Dynamic Time-based Greeting
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    // Live Pune Time Clock
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("info.amanvite@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      
      {/* Background Architectural Mesh (Only in header area) */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Horizontal Header Layout with Radar Avatar */}
      <header className="mb-14 flex items-center gap-6 md:gap-8 pt-4">
        
        {/* Animated Profile Picture Feature */}
        <div className="relative group shrink-0">
          {/* Rotating dashed SVG ring */}
          <div className="absolute -inset-3 animate-[spin_10s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-300">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
            </svg>
          </div>
          {/* Gradient Glow on Hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-700"></div>
          
          <img 
            src="https://github.com/amanvite.png" 
            alt="Aman Verma"
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md bg-zinc-100 border-4 border-white z-10"
          />
          {/* Online Status Dot overlay */}
          <div className="absolute bottom-1 right-3 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full z-20 shadow-sm"></div>
        </div>

        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-2 transition-colors">
            Aman Verma
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 font-medium flex items-center gap-2 transition-colors mb-4">
            Developer
          </p>
          
          {/* Live Status Badge */}
          <div className="flex items-center gap-2 w-fit px-3 py-1.5 bg-emerald-50 border border-emerald-100/80 rounded-full shadow-sm">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[10px] md:text-xs font-bold text-emerald-700 tracking-wider uppercase">
              Available for projects
            </span>
          </div>
        </div>
      </header>

      {/* Bio & Social Actions Section */}
      <section className="mb-14 text-zinc-700 leading-relaxed transition-colors">
        <p className="text-base md:text-lg mb-6">
          <span className="font-semibold text-zinc-900">{greeting}.</span> I architect and engineer scalable web ecosystems, focusing strictly on the MERN stack and robust TypeScript environments. I build products end-to-end: from database persistence and server-side logic to client-side DOM execution.
        </p>
        
        {/* Restored Original Social Links Structure */}
        <div className="flex flex-wrap items-center gap-6 mt-8 text-sm md:text-base font-semibold">
          <a href="https://github.com/amanvite" target="_blank" rel="noreferrer" className="flex items-center text-zinc-900 underline decoration-emerald-500 decoration-2 underline-offset-4 hover:text-zinc-600 transition-colors">
            <GithubIcon className="w-4 h-4 mr-2 text-zinc-900" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/amanvite/" target="_blank" rel="noreferrer" className="flex items-center text-zinc-900 underline decoration-blue-500 decoration-2 underline-offset-4 hover:text-zinc-600 transition-colors">
            <LinkedinIcon className="w-4 h-4 mr-2 text-zinc-900" /> LinkedIn
          </a>
          <button 
            onClick={handleCopyEmail}
            className="flex items-center text-zinc-900 underline decoration-yellow-500 decoration-2 underline-offset-4 hover:text-zinc-600 transition-colors cursor-pointer group"
          >
            <MailIcon className="w-4 h-4 mr-2 text-zinc-900" /> 
            Email
            <span className="ml-2 inline-flex items-center text-zinc-400 group-hover:text-zinc-600">
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </span>
          </button>
        </div>
      </section>

      {/* DASHBOARD: Currently Building & Environment Grid */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-5 gap-4">
        
        {/* Currently Building (Spans 3 cols) */}
        <div className="md:col-span-3 p-5 border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50/50 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow group">
          <div className="p-3 bg-white border border-zinc-200 rounded-xl text-zinc-400 shrink-0 shadow-sm group-hover:text-blue-500 transition-colors">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="font-bold text-sm text-zinc-900 uppercase tracking-wide">Currently Building</h3>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-md border border-blue-100">React Native</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Architecting <strong className="text-zinc-900 font-semibold">SureScan</strong>—a cross-platform mobile scanner application optimized for parsing industrial dot-peen Data Matrix codes.
            </p>
          </div>
        </div>

        {/* Environment / Location (Spans 2 cols) */}
        <div className="md:col-span-2 p-5 border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50/50 rounded-2xl flex flex-col justify-center gap-3 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 text-zinc-600">
            <MapPin className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-semibold text-zinc-900">Pune, Maharashtra</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-600">
            <Clock className="w-4 h-4 text-zinc-400" />
            <span className="text-sm font-medium">{time} <span className="text-zinc-400 text-xs ml-1">(IST)</span></span>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="mb-20">
        <h2 
          className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8 transition-colors"
          style={{ fontFamily: '"Maddison", sans-serif' }}
        >
          Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CAPABILITIES.map((cap) => (
            <div key={cap.id} className="group p-5 rounded-2xl border border-transparent hover:border-zinc-200/80 hover:bg-zinc-50/50 transition-all flex gap-4">
              <div className="mt-1 p-2 bg-zinc-100/80 rounded-lg text-zinc-400 group-hover:text-zinc-900 group-hover:bg-white group-hover:shadow-sm transition-all shrink-0 h-fit border border-transparent group-hover:border-zinc-200/50">
                {cap.icon}
              </div>
              <div>
                <h3 className="font-bold text-base text-zinc-900 mb-1">{cap.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pinned Projects */}
      <section className="mb-20">
        <h2 
          className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 transition-colors"
          style={{ fontFamily: '"Maddison", sans-serif' }}
        >
          Pinned Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block p-6 bg-white border border-zinc-200/80 rounded-2xl hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1 transition-all duration-300 ease-out relative overflow-hidden"
            >
              {/* Subtle tech grid background on hover */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-50 rounded-lg text-zinc-600 group-hover:bg-zinc-100 transition-colors border border-zinc-100 group-hover:border-zinc-200">
                    {project.icon}
                  </div>
                  <h3 className={`font-bold text-lg text-zinc-900 transition-colors underline ${project.linkColor} decoration-2 underline-offset-4 group-hover:opacity-80`}>
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="relative z-10 text-sm text-zinc-600 leading-relaxed mb-6 h-16 line-clamp-3 transition-colors">
                {project.description}
              </p>
              <div className="relative z-10 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-500 text-[10px] font-bold tracking-wider rounded-md transition-colors group-hover:bg-white group-hover:border-zinc-200/80">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* BlogPost */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 
            className="text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors"
            style={{ fontFamily: '"Maddison", sans-serif' }}
          >
            BlogPost
          </h2>
          <Link to="/blog" className="text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors flex items-center group">
            View all <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="flex flex-col">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="group py-6 border-t border-zinc-100 first:border-t-0 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 transition-all hover:bg-zinc-50/50 -mx-4 px-4 rounded-xl"
            >
              <span className="text-sm font-semibold text-zinc-400 shrink-0 md:w-32">{post.date}</span>
              <div>
                <h3 className={`font-bold text-lg text-zinc-900 transition-colors group-hover:underline ${post.linkColor} decoration-2 underline-offset-4 mb-2`}>
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}