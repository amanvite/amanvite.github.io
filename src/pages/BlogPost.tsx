import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../data';

export default function BlogPost() {
  const { id } = useParams();
  const [isMounted, setIsMounted] = useState(false);
  
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0); // Reset scroll position when loading a new post
  }, [id]);

  if (!post) return <div className="text-zinc-900 dark:text-white pt-20">Post not found.</div>;

  return (
    <div className={`transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Link to="/blog" className="flex items-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-12 font-semibold text-sm group w-fit">
        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to logs
      </Link>
      
      <article>
        <header className="mb-12">
          <div className="text-sm font-semibold text-zinc-400 dark:text-zinc-500 mb-4">{post.date}</div>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight transition-colors">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6 md:text-lg">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}