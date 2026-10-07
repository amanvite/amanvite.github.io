import { useState } from 'react';
import { Send, Mail, MapPin, ArrowRight, Code2, Database, Terminal, Layout, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500); // Simulates form submission
  };

  const projects = [
    {
      title: "Talksy Engine",
      role: "Real-Time Infrastructure",
      desc: "Bidirectional messaging ecosystem. Maintained synchronous client states across distributed connections with sub-100ms latency.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      icon: <Database className="w-6 h-6 text-zinc-900" />
    },
    {
      title: "Code Extractor Pro",
      role: "Frontend Performance",
      desc: "Zero-dependency web utility for structural asset extraction. Bypassed virtual DOM overhead via direct HTML5 DOM API manipulation.",
      tech: ["Vanilla JS", "DOM API", "Prism.js"],
      icon: <Layout className="w-6 h-6 text-zinc-900" />
    },
    {
      title: "Cryptographic CLI",
      role: "Security & Systems",
      desc: "Terminal-based utility for generating deterministic, high-entropy passwords. Engineered for completely offline, air-gapped environments.",
      tech: ["Python 3", "OS-PRNG", "CLI"],
      icon: <Terminal className="w-6 h-6 text-zinc-900" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-zinc-600 font-sans selection:bg-zinc-900 selection:text-white scroll-smooth">
      
      {/* Ambient Background Blur */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-200/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Global Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <span className="text-zinc-900 font-bold tracking-tighter text-xl">AV.</span>
          <div className="flex items-center space-x-8 text-sm font-medium">
            <a href="#work" className="text-zinc-500 hover:text-zinc-900 transition-colors">Work</a>
            <a href="#infrastructure" className="text-zinc-500 hover:text-zinc-900 transition-colors">Infrastructure</a>
            <a href="#contact" className="px-5 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors shadow-sm">
              Reach Out
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-24 relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-full w-max mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Available for Opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-zinc-900 leading-[1.05] mb-8">
            Engineering <br className="hidden md:block"/>
            <span className="text-zinc-400">at the intersection of</span> <br />
            Scale & Performance.
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl leading-relaxed font-light mb-12">
            I am Aman Kumar Verma, a full-stack systems engineer focused on the MERN stack. I build high-throughput web applications, secure micro-utilities, and real-time data pipelines.
          </p>

          <a href="#work" className="group flex items-center space-x-4 text-zinc-900 font-medium text-lg w-max">
            <span>Explore Systems</span>
            <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all shadow-sm">
              <ArrowRight className="w-5 h-5" />
            </div>
          </a>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="py-32 border-t border-zinc-200">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-16">01 // Selected Architectures</h2>
          
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative block p-8 md:p-12 bg-white border border-zinc-200 rounded-3xl hover:border-zinc-300 hover:shadow-md transition-all duration-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-medium text-zinc-900 mb-2">{project.title}</h3>
                      <p className="text-zinc-500 font-mono text-sm">{project.role}</p>
                    </div>
                  </div>

                  <p className="text-zinc-600 leading-relaxed max-w-lg md:text-right">
                    {project.desc}
                  </p>

                </div>
                
                <div className="mt-10 pt-8 border-t border-zinc-100 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-xs font-mono text-zinc-600">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="text-zinc-900 flex items-center text-sm font-medium hover:text-zinc-500 transition-colors">
                    Review Code <ArrowUpRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INFRASTRUCTURE & APPROACH */}
        <section id="infrastructure" className="py-32 border-t border-zinc-200">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-16">02 // Environment & Strategy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm">
               <h3 className="text-2xl font-medium text-zinc-900 mb-4">Strategic Execution</h3>
               <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                 Pursuing my Bachelor of Computer Applications entirely online is a calculated architectural decision. It decouples my schedule from rigid lectures, allocating maximum daily bandwidth for full-time project development and remote software engineering.
               </p>
               <p className="text-zinc-600 leading-relaxed text-lg">
                 Beyond the IDE, I process complex software engineering paradigms into technical content, sharing development insights directly with the global community.
               </p>
            </div>

            <div className="p-10 bg-zinc-50 border border-zinc-200 rounded-3xl font-mono text-sm shadow-inner">
               <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6 text-zinc-500">
                 <span>workspace_config.json</span>
                 <Code2 className="w-4 h-4" />
               </div>
               <div className="space-y-6 text-zinc-700">
                 <div>
                   <span className="text-zinc-400 block mb-1">"os_environment":</span>
                   <span className="text-emerald-600 font-medium">"Ubuntu Linux (Dev Kernel)"</span>
                 </div>
                 <div>
                   <span className="text-zinc-400 block mb-1">"primary_workstation":</span>
                   <span>"Dedicated Mini PC // 24-inch Display // APC UPS"</span>
                 </div>
                 <div>
                   <span className="text-zinc-400 block mb-1">"mobile_compute":</span>
                   <span>"MSI Modern 14 (Core i5)"</span>
                 </div>
                 <div>
                   <span className="text-zinc-400 block mb-1">"core_stack":</span>
                   <span>["TypeScript", "React", "Node.js", "MongoDB", "Express"]</span>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 border-t border-zinc-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-5xl font-medium text-zinc-900 tracking-tighter mb-6">Let's build something exceptional.</h2>
              <p className="text-xl text-zinc-500 font-light mb-12 max-w-md leading-relaxed">
                Whether you need a scalable MERN architecture, a high-performance utility, or a dedicated systems engineer.
              </p>
              
              <div className="space-y-6 font-mono text-sm">
                <div className="flex items-center text-zinc-700">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mr-4">
                    <MapPin className="w-4 h-4" />
                  </div>
                  Operating from Pune, Maharashtra, India.
                </div>
                <div className="flex items-center text-zinc-700">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mr-4">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:contact@example.com" className="hover:text-zinc-900 transition-colors">Initiate Direct Email</a>
                </div>
              </div>
            </div>

            {/* Functional Form */}
            <form onSubmit={handleContact} className="p-10 bg-white border border-zinc-200 rounded-3xl flex flex-col space-y-8 shadow-sm">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300 resize-none"
                  placeholder="Tell me about the architecture you need..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="h-14 bg-zinc-900 text-white font-medium rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-colors disabled:opacity-50 shadow-sm"
              >
                {isSubmitting ? 'Transmitting Protocol...' : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>

          </div>
        </section>

      </main>
    </div>
  );
}