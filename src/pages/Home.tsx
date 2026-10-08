import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, BlogIcon, MailIcon } from '../components/Icons';
import { CORE_STACK, PROJECTS, TESTIMONIALS } from '../data';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(TESTIMONIALS[0].id);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <header className="mb-16">
        <div className="w-20 h-20 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center text-2xl font-bold mb-6 shadow-md transition-colors hover:scale-105 cursor-default">
          AV
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2 transition-colors">
          Aman Verma
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-2 transition-colors">
          Systems Engineer
        </p>
      </header>

      <section className="mb-16 text-zinc-700 dark:text-zinc-300 leading-relaxed transition-colors">
        <p className="text-base md:text-lg">
          I architect and engineer scalable web ecosystems, focusing strictly on the MERN stack and robust TypeScript environments. I build products end-to-end: from database persistence and server-side logic to client-side DOM execution.
        </p>
        
        <div className="flex flex-wrap items-center gap-6 mt-8 text-sm md:text-base font-semibold">
          <a href="https://github.com/amanvite" target="_blank" rel="noreferrer" className="flex items-center text-zinc-900 dark:text-white underline decoration-emerald-500 decoration-2 underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            <GithubIcon className="w-4 h-4 mr-2 text-zinc-900 dark:text-white" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/amanvite/" target="_blank" rel="noreferrer" className="flex items-center text-zinc-900 dark:text-white underline decoration-blue-500 decoration-2 underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            <LinkedinIcon className="w-4 h-4 mr-2 text-zinc-900 dark:text-white" /> LinkedIn
          </a>
          <Link to="/blog" className="flex items-center text-zinc-900 dark:text-white underline decoration-purple-500 decoration-2 underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            <BlogIcon className="w-4 h-4 mr-2 text-zinc-900 dark:text-white" /> Blog
          </Link>
          <a href="mailto:info.amanvite@gmail.com" className="flex items-center text-zinc-900 dark:text-white underline decoration-yellow-500 decoration-2 underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            <MailIcon className="w-4 h-4 mr-2 text-zinc-900 dark:text-white" /> Email
          </a>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6 transition-colors">Core Architecture</h2>
        <div className="flex flex-wrap gap-2">
          {CORE_STACK.map(tech => (
            <span key={tech} className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold rounded-lg transition-colors cursor-default hover:border-zinc-300 dark:hover:border-zinc-700">
              {tech}
            </span>
          ))}
        </div>
      </section>

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
                    : 'w-14 md:w-16 bg-zinc-50/50 dark:bg-zinc-900/20 opacity-50 hover:opacity-80 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 cursor-pointer shrink-0'
                  }
                `}
              >
                <div className="absolute inset-0 p-5 md:p-6 w-[280px] md:w-[400px] flex flex-col justify-between">
                  <p className={`text-zinc-700 dark:text-zinc-300 text-[15px] leading-relaxed transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-600 dark:text-zinc-400 shrink-0 shadow-sm transition-colors">
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
    </div>
  );
}