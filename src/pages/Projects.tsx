import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const architectures = [
    {
      id: "talksy",
      name: "Talksy Real-Time Engine",
      classification: "Full-Stack Distributed Application",
      description: "Engineered a low-latency communication platform requiring continuous bidirectional data transfer. The primary engineering challenge was ensuring immediate state synchronization across disparate clients while securely persisting message payloads without degrading transport speed.",
      stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "Vite"],
      metrics: [
        { label: "Architecture", value: "Event-Driven" },
        { label: "State Sync", value: "Sub-100ms" }
      ]
    },
    {
      id: "extractor",
      name: "Code Extractor Pro",
      classification: "Frontend Performance Utility",
      description: "Architected a zero-dependency web utility for structural asset extraction. By explicitly bypassing heavy frontend frameworks in favor of direct HTML5 DOM API manipulation and CSS3 variables, the tool eliminates virtual DOM overhead. Integrated Prism.js handles precise syntax highlighting.",
      stack: ["Vanilla JavaScript", "HTML5", "CSS3", "DOM API", "Prism.js"],
      metrics: [
        { label: "Framework Overhead", value: "0kb" },
        { label: "Execution", value: "Native Browser Level" }
      ]
    },
    {
      id: "security",
      name: "Cryptographic Entropy CLI",
      classification: "Command-Line Security Tool",
      description: "Developed a terminal-based utility focused on deterministic, high-entropy password generation. Engineered specifically for local execution to ensure cryptographic output remains entirely isolated from external network vulnerabilities.",
      stack: ["Python 3", "OS-Level PRNG", "CLI Arguments"],
      metrics: [
        { label: "Environment", value: "Offline / Air-gapped" },
        { label: "Output", value: "High-Entropy Randomized" }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 animate-in fade-in duration-700">
      <div className="mb-16 border-b border-zinc-800 pb-8">
        <h2 className="text-4xl font-normal tracking-tighter text-white mb-4">Engineering Case Studies</h2>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Select system architectures & deployments</p>
      </div>

      <div className="space-y-12">
        {architectures.map((arch) => (
          <div key={arch.id} className="group flex flex-col md:flex-row gap-8 items-start border border-zinc-800 bg-black/40 p-8 hover:bg-zinc-900/40 transition-colors">
            
            {/* Left: Metadata */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="text-xs font-mono text-zinc-500 mb-2">{arch.classification}</div>
              <h3 className="text-2xl font-semibold text-white mb-6">{arch.name}</h3>
              <div className="space-y-4">
                {arch.metrics.map((m, i) => (
                  <div key={i} className="border-l-2 border-zinc-800 pl-3">
                    <div className="text-[10px] uppercase text-zinc-600 mb-1">{m.label}</div>
                    <div className="text-sm font-mono text-zinc-300">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technicals */}
            <div className="flex-1">
              <p className="text-zinc-400 leading-relaxed mb-8">
                {arch.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {arch.stack.map(tech => (
                  <span key={tech} className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-white hover:text-zinc-400 transition-colors">
                Review Source Code <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}