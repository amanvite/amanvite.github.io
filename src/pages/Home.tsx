import Estimator from '../components/Estimator';

export default function Home() {
  const projects = [
    {
      title: "Talksy",
      description: "Architected a real-time messaging ecosystem featuring bidirectional WebSocket communication and persistent data storage.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      title: "Code Extractor Pro",
      description: "Engineered a high-performance web utility for structural asset extraction with integrated Prism syntax highlighting.",
      tech: ["JavaScript", "HTML5", "CSS3", "DOM API"],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 animate-in fade-in duration-700">
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
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light">
            Specializing in the MERN stack and TypeScript. Building scalable web applications, real-time data pipelines, and high-performance micro-utilities.
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-8 flex items-center">
            <span className="w-8 h-px bg-zinc-700 mr-4"></span>
            Selected Engineering Work
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-zinc-900 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-zinc-950 border border-white/10 rounded-md text-xs text-zinc-400 font-mono tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column: Estimator */}
      <div className="lg:col-span-5 relative">
        <div className="sticky top-32">
          <Estimator />
        </div>
      </div>
    </div>
  );
}