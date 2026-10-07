import { Terminal, Server, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-12 animate-in fade-in duration-700">
      
      <div className="mb-16 border-b border-zinc-800 pb-8">
        <h2 className="text-4xl font-normal tracking-tighter text-white mb-4">Operational Infrastructure</h2>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Environment & Strategic Execution</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Strategy */}
        <div className="space-y-8">
          <div className="border-l-2 border-zinc-500 pl-6">
            <h3 className="text-xl font-semibold text-white mb-3">Strategic Allocation</h3>
            <p className="text-zinc-400 leading-relaxed">
              Pursuing a Bachelor of Computer Applications via an online paradigm is a calculated architectural decision. It decouples my schedule from rigid, synchronous lectures, allocating maximum bandwidth for full-time, heads-down software engineering and project architecture.
            </p>
          </div>

          <div className="border-l-2 border-zinc-800 pl-6">
            <h3 className="text-xl font-semibold text-white mb-3">Community Aggregation</h3>
            <p className="text-zinc-400 leading-relaxed">
              Beyond the IDE, I process complex software engineering concepts into short-form technical content on Instagram. This serves as a distribution channel for technical insights, developer culture, and continuous learning within the community.
            </p>
          </div>
        </div>

        {/* Hardware / Software Environment */}
        <div className="bg-black border border-zinc-800 p-8 font-mono">
          <div className="flex items-center mb-6 border-b border-zinc-800 pb-4">
            <Terminal className="w-5 h-5 text-zinc-500 mr-3" />
            <span className="text-zinc-300">aman@workspace:~</span>
          </div>
          
          <div className="space-y-6 text-sm">
            <div>
              <div className="text-zinc-600 mb-1">OS_ENVIRONMENT</div>
              <div className="text-green-400">Ubuntu Linux [Kernel Optimized for Dev]</div>
            </div>
            
            <div>
              <div className="text-zinc-600 mb-1">LOCAL_SERVERS</div>
              <div className="text-zinc-300 flex items-center"><Server className="w-3 h-3 mr-2"/> Dedicated Mini PC Workstation</div>
              <div className="text-zinc-500 mt-1 pl-5">24-inch Display Pipeline // APC UPS Redundancy</div>
            </div>

            <div>
              <div className="text-zinc-600 mb-1">MOBILE_COMPUTE</div>
              <div className="text-zinc-300">MSI Modern 14 (Intel Core i5)</div>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center text-zinc-500">
              <ShieldCheck className="w-4 h-4 mr-2" />
              All environments configured for zero-friction deployments.
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}