import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';

export default function BlogList() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Link to="/" className="flex items-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-12 font-semibold text-sm group w-fit">
        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
      </Link>
      
      <header className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2 transition-colors">
          Engineering Logs
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium transition-colors">
          Thoughts on architecture, systems, and the MERN stack.
        </p>
      </header>

      <div className="space-y-12">
        {BLOG_POSTS.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`} className="block group">
            <article>
              <div className="text-sm font-semibold text-zinc-400 dark:text-zinc-500 mb-2">{post.date}</div>
              <h2 className={`text-2xl font-bold text-zinc-900 dark:text-white mb-3 underline ${post.linkColor} decoration-2 underline-offset-4 group-hover:opacity-80 transition-opacity`}>
                {post.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                {post.excerpt}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}