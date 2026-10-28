import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../data';

export default function BlogPost() {
  const { id } = useParams();
  const [isMounted, setIsMounted] = useState(false);
  
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) return <div className="text-zinc-900 pt-20">Post not found.</div>;

  // Calculate estimated reading time
  const wordCount = post.content.join(' ').split(' ').length;
  const readTime = Math.ceil(wordCount / 200) || 1;

  return (
    <div className={`transition-all duration-700 ease-out max-w-3xl mx-auto ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      
      {/* Refined Navigation */}
      <div className="mb-12">
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors group tracking-wide">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to logs
        </Link>
      </div>
      
      <article>
        {/* Executive Post Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.15] mb-8">
            {post.title}
          </h1>
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 border-y border-zinc-200/80 py-4 font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed text-base md:text-lg space-y-8">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </article>
      
      {/* Return to Top / Logs */}
      <div className="mt-20 pt-8 border-t border-zinc-200/80">
         <Link to="/blog" className="inline-flex items-center text-sm font-bold text-zinc-900 hover:text-emerald-600 transition-colors group uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Return to all posts
        </Link>
      </div>

    </div>
  );
}