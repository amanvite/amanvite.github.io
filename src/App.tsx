import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CommandPalette from './components/CommandPalette';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-cyan-900 selection:text-cyan-50">
        
        {/* Background Glow */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]" />
        </div>

        <CommandPalette />

        {/* Global Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-100 hover:text-cyan-400 transition-colors">
              Aman Kumar Verma<span className="text-cyan-500">.</span>
            </Link>
            
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">Work</Link>
                <Link to="/about" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">Setup & About</Link>
                <Link to="/projects" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">Case Studies</Link>
              </div>
              <button 
                onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
                className="flex items-center px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-lg text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <span className="mr-2">Search</span>
                <span className="px-1.5 py-0.5 bg-zinc-800 rounded font-mono">Ctrl K</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}