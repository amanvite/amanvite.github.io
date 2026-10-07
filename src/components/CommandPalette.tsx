import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Home, User, Briefcase, Terminal } from 'lucide-react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  const navigateTo = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32 bg-zinc-950/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 py-3 border-b border-white/5">
          <Search className="w-5 h-5 text-zinc-400 mr-3" />
          <input 
            type="text" 
            autoFocus
            placeholder="Type a command or search..." 
            className="w-full bg-transparent border-none text-zinc-100 focus:outline-none placeholder:text-zinc-600"
          />
          <div className="flex items-center space-x-1 text-xs text-zinc-500 font-mono">
            <span className="px-1.5 py-0.5 bg-zinc-800 rounded">ESC</span>
            <span>to close</span>
          </div>
        </div>
        
        <div className="p-2 space-y-1 text-sm text-zinc-300">
          <button onClick={() => navigateTo('/')} className="w-full flex items-center px-4 py-3 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-xl transition-colors">
            <Home className="w-4 h-4 mr-3" /> Go to Home
          </button>
          <button onClick={() => navigateTo('/about')} className="w-full flex items-center px-4 py-3 hover:bg-indigo-500/10 hover:text-indigo-400 rounded-xl transition-colors">
            <User className="w-4 h-4 mr-3" /> View About & Setup
          </button>
          <button onClick={() => navigateTo('/projects')} className="w-full flex items-center px-4 py-3 hover:bg-purple-500/10 hover:text-purple-400 rounded-xl transition-colors">
            <Briefcase className="w-4 h-4 mr-3" /> View Case Studies
          </button>
          <button onClick={() => window.open('https://github.com/amanvite', '_blank')} className="w-full flex items-center px-4 py-3 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-colors">
            <Terminal className="w-4 h-4 mr-3" /> Open GitHub Profile
          </button>
        </div>
      </div>
    </div>
  );
}