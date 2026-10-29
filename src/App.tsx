import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-emerald-500/30 selection:text-zinc-900 pb-12 transition-colors duration-300">
        <main className="max-w-4xl mx-auto px-6 pt-20 md:pt-24">
          
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          {/* Persistent Footer */}
          <footer className="pt-12 text-sm font-medium text-zinc-400 transition-colors mt-20 border-t border-zinc-100">
            Open to a good conversation. <a href="mailto:info.amanvite@gmail.com" className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 transition-colors">Say hi.</a>
          </footer>

        </main>
      </div>
    </Router>
  );
}