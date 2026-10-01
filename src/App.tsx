import Estimator from './components/Estimator.tsx';

export default function App() {
  const projects = [
    {
      title: "Talksy",
      description: "Architected a real-time messaging ecosystem featuring bidirectional WebSocket communication and persistent data storage.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
      link: "#"
    },
    {
      title: "Code Extractor Pro",
      description: "Engineered a high-performance web utility for structural asset extraction with integrated Prism syntax highlighting.",
      tech: ["JavaScript", "HTML5", "CSS3", "DOM API"],
      link: "#"
    },
    {
      title: "CLI Security Utility",
      description: "Developed a command-line cryptographic tool for deterministic, high-entropy password generation.",
      tech: ["Python", "Cryptography", "CLI"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      {/* Glassmorphism Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-zinc-100">
            Aman Kumar Verma<span className="text-cyan-500">.</span>
          </span>
          <a 
            href="https://github.com/amanvite" 
            target="_blank" 
            rel="noreferrer"
            className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            GitHub Repository ↗
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Executive Summary & Work */}
        <div className="lg:col-span-7 space-y-24">
          
          {/* Hero Section */}
          <section className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-100 leading-[1.1]">
              Full-Stack <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Software Engineer.
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light">
                Specializing in the MERN stack and TypeScript. By pursuing my BCA online, I maintain a flexible schedule dedicated entirely to architecting scalable web applications and high-performance micro-utilities.
              </p>
              <p className="text-md text-zinc-500 leading-relaxed max-w-2xl">
                When I'm not configuring my Ubuntu workspace or building tools like Talksy, I'm sharing software engineering insights and developer humor through short-form video content.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-8 flex items-center">
              <span className="w-8 h-px bg-zinc-700 mr-4"></span>
              Selected Engineering Work
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-zinc-900 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span 
                        key={t} 
                        className="px-3 py-1 bg-zinc-950 border border-white/10 rounded-md text-xs text-zinc-400 font-mono tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Interactive Component */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32">
            <Estimator />
          </div>
        </div>

      </main>
    </div>
  );
}