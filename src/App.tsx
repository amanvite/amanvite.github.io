import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] font-sans selection:bg-emerald-500/30 dark:selection:bg-emerald-500/30 selection:text-zinc-900 dark:selection:text-white pb-12 transition-colors duration-300">
        
        {/* Persistent Theme Toggle */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:scale-105 transition-all shadow-sm"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <main className="max-w-3xl mx-auto px-6 pt-20 md:pt-32">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>

          {/* Persistent Footer */}
          <footer className="pt-12 text-sm font-medium text-zinc-400 dark:text-zinc-500 transition-colors mt-20">
            Open to a good conversation. <a href="mailto:info.amanvite@gmail.com" className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:text-zinc-900 dark:hover:text-white transition-colors">Say hi.</a>
          </footer>

        </main>
      </div>
    </Router>
  );
}