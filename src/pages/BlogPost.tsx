import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';

export default function BlogPosts() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`transition-all duration-700 ease-out max-w-3xl mx-auto ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors group tracking-wide">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <header className="mb-16 border-b border-zinc-200/80 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-2">
          Engineering Logs
        </h1>
        <p className="text-lg text-zinc-500">
          Thoughts on web architecture, TypeScript, and the MERN ecosystem.
        </p>
      </header>

      <div className="flex flex-col">
        {BLOG_POSTS.map((post) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.id}`}
            className="group py-8 border-b border-zinc-200/80 last:border-b-0 flex flex-col md:flex-row gap-2 md:gap-12 items-baseline"
          >
            <div className="text-sm font-medium text-zinc-500 shrink-0 md:w-32">
              {post.date}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg md:text-xl text-zinc-900 group-hover:text-emerald-600 transition-colors mb-2 tracking-tight">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}