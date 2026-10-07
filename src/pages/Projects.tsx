import { Terminal, Database, MessageSquare, LayoutTemplate, Cpu, Shield, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const caseStudies = [
    {
      id: "talksy",
      title: "Talksy Real-Time Engine",
      role: "Full-Stack Architecture",
      icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
      theme: "from-indigo-500/20 to-purple-500/20",
      border: "hover:border-indigo-500/50",
      description: "Architected a low-latency bidirectional messaging ecosystem. The challenge was maintaining synchronous client states across distributed connections while ensuring persistent data integrity.",
      architecture: [
        { label: "Client State", value: "React + Vite" },
        { label: "Transport Layer", value: "Socket.io" },
        { label: "API & Auth", value: "Express.js / Node" },
        { label: "Persistence", value: "MongoDB" }
      ]
    },
    {
      id: "extractor",
      title: "Code Extractor Pro",
      role: "Frontend Performance",
      icon: <LayoutTemplate className="w-6 h-6 text-cyan-400" />,
      theme: "from-cyan-500/20 to-blue-500/20",
      border: "hover:border-cyan-500/50",
      description: "Engineered a high-performance web utility for structural asset extraction. By bypassing heavy frameworks and utilizing direct DOM manipulation with Prism syntax highlighting, the tool achieves near-instantaneous execution times.",
      architecture: [
        { label: "Core Logic", value: "Vanilla JavaScript" },
        { label: "Styling", value: "CSS3 + Variables" },
        { label: "Parsing", value: "HTML5 DOM API" },
        { label: "Highlighting", value: "Prism.js" }
      ]
    },
    {
      id: "security",
      title: "Cryptographic CLI",
      role: "Backend & Systems",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      theme: "from-emerald-500/20 to-teal-500/20",
      border: "hover:border-emerald-500/50",
      description: "Developed a command-line interface tool for generating deterministic, high-entropy cryptographic strings. Designed for secure, offline environments requiring rigorous randomized output without external dependencies.",
      architecture: [
        { label: "Runtime", value: "Python 3" },
        { label: "Execution", value: "CLI Arguments" },
        { label: "Entropy", value: "OS-level PRNG" },
        { label: "Distribution", value: "GitHub Core" }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 animate-in fade-in duration-700">
      
      <header className="mb-16 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-black text-zinc-100 mb-6 tracking-tight">System Architectures.</h2>
        <p className="text-lg text-zinc-400 leading-relaxed font-light">
          A showcase of full-stack ecosystems, micro-utilities, and command-line tools. Each project represents a deliberate choice in technology stack to solve specific latency, security, or scale constraints.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Featured Project Layout */}
        <div className="lg:col-span-12 group relative rounded-3xl bg-zinc-900/40 border border-white/5 p-1 hover:border-zinc-700 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
          
          <div className="relative bg-zinc-950 rounded-[22px] p-8 md:p-12 h-full flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-mono font-semibold tracking-wide uppercase">
                <Database className="w-3 h-3" /> Current Deployment
              </div>
              <h3 className="text-3xl font-bold text-zinc-100">Enterprise Client Portal</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                The architecture you are currently viewing. Built as a single-page application utilizing advanced client-side APIs. It features asynchronous IP-based currency localization, real-time exchange rate mapping, and an integrated engine for rendering dynamic PDF blueprints directly in the browser via ArrayBuffers.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'Tailwind v4', 'jsPDF', 'Vite', 'CI/CD Actions'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-md text-xs text-zinc-300 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Visualizer Block */}
            <div className="w-full md:w-96 aspect-square rounded-2xl bg-zinc-900 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
               <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="p-4 bg-cyan-500/20 border border-cyan-500/50 rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    <Cpu className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                  <div className="p-3 bg-zinc-800 border border-white/10 rounded-lg">
                    <Shield className="w-5 h-5 text-zinc-400" />
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Previous Case Studies Grid */}
        {caseStudies.map((project) => (
          <div key={project.id} className={`lg:col-span-6 group relative rounded-3xl bg-zinc-900/40 border border-white/5 p-8 transition-all duration-500 ${project.border}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl pointer-events-none`} />
            
            <div className="relative z-10 flex justify-between items-start mb-6">
              <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl shadow-lg">
                {project.icon}
              </div>
              <a href="#" className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
            
            <h4 className="text-xl font-bold text-zinc-100 mb-2">{project.title}</h4>
            <div className="text-xs font-mono text-zinc-500 mb-4">{project.role}</div>
            <p className="text-zinc-400 leading-relaxed mb-8 text-sm h-24">
              {project.description}
            </p>
            
            <div className="space-y-3 pt-6 border-t border-white/5">
              {project.architecture.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <span className="text-zinc-500">{item.label}</span>
                  <span className="text-zinc-300 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}