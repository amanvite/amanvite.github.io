import { Terminal, Database, Cpu, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Estimator from '../components/Estimator';

export default function Home() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 animate-in fade-in duration-700">
      
      {/* Left Column: Systems Overview */}
      <div className="xl:col-span-7 space-y-8">
        
        {/* Terminal Header */}
        <div className="bg-black border border-zinc-800 rounded-none p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800"></div>
          <div className="flex items-center space-x-2 text-zinc-500 font-mono text-xs mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>System Status: Online // Aman_Verma_Workspace</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-normal tracking-tighter text-white mb-6">
            Software <br />
            <span className="font-serif italic text-zinc-400">Architecture & </span><br />
            Execution.
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-xl font-light leading-relaxed mb-8">
            Specializing in distributed systems, real-time data pipelines, and high-performance micro-utilities. Operating primarily within the MERN stack and TypeScript ecosystems to deliver scalable, enterprise-grade applications.
          </p>

          <div className="flex gap-4">
            <Link to="/projects" className="px-6 py-3 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center">
              Review Architecture <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Technical Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/50 border border-zinc-800 p-6">
            <Network className="w-6 h-6 text-zinc-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Transport & Real-Time</h3>
            <p className="text-sm text-zinc-500">Bidirectional WebSocket communication, Socket.io ecosystems, and synchronous client-state management.</p>
          </div>
          <div className="bg-black/50 border border-zinc-800 p-6">
            <Database className="w-6 h-6 text-zinc-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Data Persistence</h3>
            <p className="text-sm text-zinc-500">MongoDB schema design, SQL relational structures, and optimized document retrieval pipelines.</p>
          </div>
          <div className="bg-black/50 border border-zinc-800 p-6">
            <Cpu className="w-6 h-6 text-zinc-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Core Languages</h3>
            <p className="text-sm text-zinc-500">TypeScript for strict type safety, modern JavaScript (ES6+), and Python for scripting and cryptography.</p>
          </div>
          <div className="bg-black/50 border border-zinc-800 p-6">
            <Terminal className="w-6 h-6 text-zinc-400 mb-4" />
            <h3 className="text-white font-semibold mb-2">Infrastructure</h3>
            <p className="text-sm text-zinc-500">Node.js/Express backend orchestration, Vite build optimization, and Linux (Ubuntu) server environments.</p>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Component */}
      <div className="xl:col-span-5 relative">
        <div className="sticky top-24">
          <Estimator />
        </div>
      </div>
    </div>
  );
}