import { useState, useEffect } from 'react';
import { Search, Link, Video, Mail, Calculator } from 'lucide-react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32 bg-black/60 backdrop-blur-md p-4">
      <div className="w-full max-w-xl bg-[#111] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 py-4 border-b border-zinc-800">
          <Search className="w-5 h-5 text-zinc-500 mr-3" />
          <input 
            type="text" 
            autoFocus
            placeholder="Type a command or search..." 
            className="w-full bg-transparent border-none text-zinc-100 focus:outline-none placeholder:text-zinc-600 text-sm"
          />
          <div className="flex items-center space-x-1 text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
            <span className="px-1.5 py-0.5 bg-zinc-800 rounded">ESC</span>
          </div>
        </div>
        
        <div className="p-2 space-y-1 text-sm text-zinc-400">
          <a href="https://github.com/amanvite" target="_blank" rel="noreferrer" className="flex items-center px-4 py-3 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors">
            <Link className="w-4 h-4 mr-3 text-zinc-500" /> Open GitHub Profile
          </a>
          <a href="#" className="flex items-center px-4 py-3 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors">
            <Video className="w-4 h-4 mr-3 text-zinc-500" /> View Developer Content
          </a>
          <a href="mailto:your-email@example.com" className="flex items-center px-4 py-3 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors">
            <Mail className="w-4 h-4 mr-3 text-zinc-500" /> Send an Email
          </a>
          <button className="w-full flex items-center px-4 py-3 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors text-left">
            <Calculator className="w-4 h-4 mr-3 text-zinc-500" /> Open Project Estimator
          </button>
        </div>
      </div>
    </div>
  );
}