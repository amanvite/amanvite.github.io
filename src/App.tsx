import { useState } from 'react';
import { Send, Mail, MapPin, ArrowRight, Code2, Database, Terminal, Layout, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  const projects = [
    {
      title: "Talksy Engine",
      role: "Real-Time Infrastructure",
      desc: "Bidirectional messaging ecosystem. Maintained synchronous client states across distributed connections with sub-100ms latency.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      icon: <Database className="w-8 h-8 text-zinc-900" />
    },
    {
      title: "Code Extractor Pro",
      role: "Frontend Performance",
      desc: "Zero-dependency web utility for structural asset extraction. Bypassed virtual DOM overhead via direct HTML5 DOM API manipulation.",
      tech: ["Vanilla JS", "DOM API", "Prism.js"],
      icon: <Layout className="w-8 h-8 text-zinc-900" />
    },
    {
      title: "Cryptographic CLI",
      role: "Security & Systems",
      desc: "Terminal-based utility for generating deterministic, high-entropy passwords. Engineered for completely offline, air-gapped environments.",
      tech: ["Python 3", "OS-PRNG", "CLI"],
      icon: <Terminal className="w-8 h-8 text-zinc-900" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-zinc-600 font-sans selection:bg-zinc-900 selection:text-white scroll-smooth">
      
      {/* Ambient Background Blur */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-zinc-200/40 blur-[150px] rounded-full pointer-events-none" />

      {/* Global Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
          <span className="text-zinc-900 font-black tracking-tighter text-3xl">AV.</span>
          <div className="flex items-center space-x-10 text-base font-semibold">
            <a href="#work" className="text-zinc-500 hover:text-zinc-900 transition-colors">Work</a>
            <a href="#infrastructure" className="text-zinc-500 hover:text-zinc-900 transition-colors">Infrastructure</a>
            <a href="#contact" className="px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors shadow-sm">
              Reach Out
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-48 pb-32 relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[75vh] flex flex-col justify-center">
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-zinc-100 border border-zinc-200 rounded-full w-max mb-10">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-mono uppercase tracking-widest text-zinc-600 font-medium">Available for Opportunities</span>
          </div>
          
          <h1 className="text-7xl md:text-[6.5rem] font-bold tracking-tighter text-zinc-900 leading-[1.05] mb-10">
            Engineering <br className="hidden md:block"/>
            <span className="text-zinc-400">at the intersection of</span> <br />
            Scale & Performance.
          </h1>
          
          <p className="text-2xl md:text-3xl text-zinc-600 max-w-4xl leading-relaxed font-normal mb-16">
            I am Aman Kumar Verma, a full-stack systems engineer focused on the MERN stack. I build high-throughput web applications, secure micro-utilities, and real-time data pipelines.
          </p>

          <a href="#work" className="group flex items-center space-x-5 text-zinc-900 font-semibold text-xl w-max">
            <span>Explore Systems</span>
            <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all shadow-sm">
              <ArrowRight className="w-6 h-6" />
            </div>
          </a>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="py-32 border-t border-zinc-200">
          <h2 className="text-base font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-16">01 // Selected Architectures</h2>
          
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative block p-10 md:p-14 bg-white border border-zinc-200 rounded-[2rem] hover:border-zinc-300 hover:shadow-lg transition-all duration-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                  
                  <div className="flex items-center space-x-8">
                    <div className="w-20 h-20 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-zinc-900 mb-3">{project.title}</h3>
                      <p className="text-zinc-500 font-mono text-base font-medium">{project.role}</p>
                    </div>
                  </div>

                  <p className="text-xl text-zinc-600 leading-relaxed max-w-xl md:text-right">
                    {project.desc}
                  </p>

                </div>
                
                <div className="mt-12 pt-10 border-t border-zinc-100 flex flex-wrap justify-between items-center gap-6">
                  <div className="flex gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-full text-sm font-mono text-zinc-700 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="text-zinc-900 flex items-center text-base font-semibold hover:text-zinc-500 transition-colors">
                    Review Code <ArrowUpRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INFRASTRUCTURE & APPROACH */}
        <section id="infrastructure" className="py-32 border-t border-zinc-200">
          <h2 className="text-base font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-16">02 // Environment & Strategy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-white border border-zinc-200 rounded-[2rem] shadow-sm">
               <h3 className="text-3xl font-bold text-zinc-900 mb-6">Strategic Execution</h3>
               <p className="text-zinc-600 leading-relaxed text-xl mb-8">
                 Pursuing my Bachelor of Computer Applications entirely online is a calculated architectural decision. It decouples my schedule from rigid lectures, allocating maximum daily bandwidth for full-time project development and remote software engineering.
               </p>
               <p className="text-zinc-600 leading-relaxed text-xl">
                 Beyond the IDE, I process complex software engineering paradigms into technical content, sharing development insights directly with the global community.
               </p>
            </div>

            <div className="p-12 bg-zinc-50 border border-zinc-200 rounded-[2rem] font-mono text-base shadow-inner">
               <div className="flex items-center justify-between border-b border-zinc-200 pb-6 mb-8 text-zinc-500">
                 <span className="font-semibold">workspace_config.json</span>
                 <Code2 className="w-5 h-5" />
               </div>
               <div className="space-y-8 text-zinc-700">
                 <div>
                   <span className="text-zinc-400 block mb-2 text-sm uppercase tracking-wider">"os_environment":</span>
                   <span className="text-emerald-600 font-bold text-lg">"Ubuntu Linux (Dev Kernel)"</span>
                 </div>
                 <div>
                   <span className="text-zinc-400 block mb-2 text-sm uppercase tracking-wider">"primary_workstation":</span>
                   <span className="font-medium">"Dedicated Mini PC // 24-inch Display // APC UPS"</span>
                 </div>
                 <div>
                   <span className="text-zinc-400 block mb-2 text-sm uppercase tracking-wider">"mobile_compute":</span>
                   <span className="font-medium">"MSI Modern 14 (Core i5)"</span>
                 </div>
                 <div>
                   <span className="text-zinc-400 block mb-2 text-sm uppercase tracking-wider">"core_stack":</span>
                   <span className="font-medium">["TypeScript", "React", "Node.js", "MongoDB", "Express"]</span>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 border-t border-zinc-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-6xl font-bold text-zinc-900 tracking-tighter mb-8 leading-tight">Let's build something exceptional.</h2>
              <p className="text-2xl text-zinc-500 font-normal mb-16 max-w-lg leading-relaxed">
                Whether you need a scalable MERN architecture, a high-performance utility, or a dedicated systems engineer.
              </p>
              
              <div className="space-y-8 font-mono text-base font-medium">
                <div className="flex items-center text-zinc-700">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mr-6">
                    <MapPin className="w-5 h-5" />
                  </div>
                  Operating from Pune, Maharashtra, India.
                </div>
                <div className="flex items-center text-zinc-700">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mr-6">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:contact@example.com" className="hover:text-zinc-900 transition-colors">Initiate Direct Email</a>
                </div>
              </div>
            </div>

            {/* Functional Form */}
            <form onSubmit={handleContact} className="p-12 bg-white border border-zinc-200 rounded-[2rem] flex flex-col space-y-10 shadow-lg shadow-zinc-200/50">
              <div className="space-y-3">
                <label className="text-sm font-mono uppercase tracking-widest text-zinc-500 font-semibold">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b-2 border-zinc-200 py-4 text-xl text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300 font-medium"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-mono uppercase tracking-widest text-zinc-500 font-semibold">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-transparent border-b-2 border-zinc-200 py-4 text-xl text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300 font-medium"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-mono uppercase tracking-widest text-zinc-500 font-semibold">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-zinc-200 py-4 text-xl text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300 resize-none font-medium"
                  placeholder="Tell me about the architecture you need..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="h-16 bg-zinc-900 text-white text-lg font-bold rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-colors disabled:opacity-50 shadow-md"
              >
                {isSubmitting ? 'Transmitting Protocol...' : (
                  <>
                    Send Message <Send className="w-5 h-5 ml-3" />
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