import { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, BlogIcon, MailIcon } from '../components/Icons';
import { PROJECTS, BLOG_POSTS } from '../data';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      
      {/* Horizontal Header Layout */}
      <header className="mb-16 flex items-center gap-5 md:gap-6">
        <img 
          src="https://github.com/amanvite.png" 
          alt="Aman Verma"
          className="w-28 h-28 rounded-full object-cover shadow-md hover:scale-105 transition-transform cursor-default shrink-0 bg-zinc-100 border border-zinc-200/50"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-1 transition-colors">
            Aman Verma
          </h1>
          <p className="text-lg text-zinc-500 font-medium flex items-center gap-2 transition-colors">
            Systems Engineer
          </p>
        </div>
      </header>

      <section className="mb-16 text-zinc-700 leading-relaxed transition-colors">
        <p className="text-base md:text-lg">
          I architect and engineer scalable web ecosystems, focusing strictly on the MERN stack and robust TypeScript environments. I build products end-to-end: from database persistence and server-side logic to client-side DOM execution.
        </p>
        
        <div className="flex flex-wrap items-center gap-6 mt-8 text-sm md:text-base font-semibold">
          <a href="https://github.com/amanvite" target="_blank" rel="noreferrer" className="flex items-center text-zinc-900 underline decoration-emerald-500 decoration-2 underline-offset-4 hover:text-zinc-600 transition-colors">
            <GithubIcon className="w-4 h-4 mr-2 text-zinc-900" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/amanvite/" target="_blank" rel="noreferrer" className="flex items-center text-zinc-900 underline decoration-blue-500 decoration-2 underline-offset-4 hover:text-zinc-600 transition-colors">
            <LinkedinIcon className="w-4 h-4 mr-2 text-zinc-900" /> LinkedIn
          </a>
          <Link to="/blog" className="flex items-center text-zinc-900 underline decoration-purple-500 decoration-2 underline-offset-4 hover:text-zinc-600 transition-colors">
            <BlogIcon className="w-4 h-4 mr-2 text-zinc-900" /> Blog
          </Link>
          <a href="mailto:info.amanvite@gmail.com" className="flex items-center text-zinc-900 underline decoration-yellow-500 decoration-2 underline-offset-4 hover:text-zinc-600 transition-colors">
            <MailIcon className="w-4 h-4 mr-2 text-zinc-900" /> Email
          </a>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 transition-colors">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block p-6 bg-white border border-zinc-200/80 rounded-2xl hover:border-zinc-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-50 rounded-lg text-zinc-600 group-hover:bg-zinc-100 transition-colors">
                    {project.icon}
                  </div>
                  <h3 className={`font-bold text-lg text-zinc-900 transition-colors underline ${project.linkColor} decoration-2 underline-offset-4 group-hover:opacity-80`}>
                    {project.title}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 h-16 line-clamp-3 transition-colors">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-500 text-[10px] font-bold tracking-wider rounded-md transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors">Engineering Logs</h2>
          <Link to="/blog" className="text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors flex items-center group">
            View all <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="flex flex-col">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="group py-6 border-t border-zinc-100 first:border-t-0 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 transition-all"
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