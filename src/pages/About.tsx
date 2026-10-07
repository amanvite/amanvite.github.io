import { Monitor, BookOpen, Video, Server } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 animate-in fade-in duration-700">
      <h2 className="text-4xl font-black text-zinc-100 mb-8 tracking-tight">System Configuration.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bio & Education */}
        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-6">
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
            <BookOpen className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold text-zinc-100">Engineering & Education</h3>
          <p className="text-zinc-400 leading-relaxed">
            I am currently pursuing my Bachelor of Computer Applications (BCA) entirely online. This strategic choice provides the ultimate schedule flexibility, allowing me to treat full-stack project development and architecture as my primary, full-time focus rather than a side hobby.
          </p>
        </div>

        {/* Content Creation */}
        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-6">
          <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
            <Video className="w-6 h-6 text-indigo-400" />
          </div>
          <h3 className="text-xl font-bold text-zinc-100">Developer Content</h3>
          <p className="text-zinc-400 leading-relaxed">
            Beyond the IDE, I create short-form video content on Instagram. I focus on distilling software engineering concepts, sharing technical insights, and creating developer-centric humor to engage with the broader tech community.
          </p>
        </div>

        {/* Hardware & OS Setup */}
        <div className="md:col-span-2 p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
           <div className="flex items-center space-x-3 mb-6">
            <Server className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold text-zinc-100">Hardware & Environment</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider">Primary OS</span>
              <p className="text-zinc-300 font-medium">Ubuntu Linux</p>
              <p className="text-xs text-zinc-500">Configured for dedicated programming and server environments.</p>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Mobile Workstation</span>
              <p className="text-zinc-300 font-medium">MSI Modern 14 (Core i5)</p>
              <p className="text-xs text-zinc-500">For university coursework and on-the-go deployments.</p>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-mono text-indigo-400 uppercase tracking-wider">Home Setup</span>
              <p className="text-zinc-300 font-medium">Dedicated Mini PC</p>
              <p className="text-xs text-zinc-500">Linked to a 24" display with wireless peripherals and UPS backup.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}