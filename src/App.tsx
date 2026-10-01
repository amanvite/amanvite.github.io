import Estimator from './components/Estimator.tsx';

function App() {
  const projects = [
    {
      title: "Talksy",
      description: "A real-time messaging web application built with React, Node.js, and Socket.io.",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      link: "#"
    },
    {
      title: "Code Extractor Pro",
      description: "A web utility for extracting and formatting code snippets with Prism syntax highlighting.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#"
    },
    {
      title: "CLI Password Generator",
      description: "A command-line tool built for generating secure, randomized passwords.",
      tech: ["Python"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="border-b border-slate-800 p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-tight text-blue-400">Aman Verma.</h1>
        <a href="https://github.com/amanvite" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
      </nav>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
        {/* Left Column: Hero & Projects */}
        <div className="space-y-12">
          <section>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Full-Stack Developer. <br/>
              <span className="text-slate-400">I build tools that solve problems.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Specializing in the MERN stack and TypeScript. Whether it's a real-time web application or a dedicated micro-utility, I engineer clean, scalable solutions.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-6 border-b border-slate-800 pb-2">Recent Work</h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
                  <h4 className="text-xl font-medium text-blue-300">{project.title}</h4>
                  <p className="text-slate-400 mt-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: The Client Estimator */}
        <div className="lg:pl-8">
          <Estimator />
        </div>
      </main>
    </div>
  )
}

export default App