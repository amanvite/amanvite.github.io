import { useState, useEffect } from 'react';
import { Calculator, Code2, Database, Server, ArrowDownToLine, Globe, Monitor, Cpu, HardDrive } from 'lucide-react';
import { jsPDF } from 'jspdf';

export default function Estimator() {
  const [activeType, setActiveType] = useState<'frontend' | 'fullstack' | null>(null);
  const [pages, setPages] = useState(1);
  const [needsAuth, setNeedsAuth] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({ USD: 1 });

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(res => res.json())
      .then(data => setExchangeRates(data.rates))
      .catch(() => console.log('Rates fetch failed'));
      
    fetch('https://ipapi.co/currency/')
      .then(res => res.text())
      .then(userCurrency => {
        if (userCurrency && userCurrency.length === 3) setCurrency(userCurrency);
      })
      .catch(() => console.log('IP fetch blocked'));
  }, []);

  const basePriceUSD = activeType === 'fullstack' ? 800 : activeType === 'frontend' ? 300 : 0;
  const pagePriceUSD = pages > 1 ? (pages - 1) * 75 : 0;
  const authPriceUSD = needsAuth ? 250 : 0;
  const totalUSD = basePriceUSD > 0 ? basePriceUSD + pagePriceUSD + authPriceUSD : 0;
  
  const convertedTotal = totalUSD * (exchangeRates[currency] || 1);
  const formattedTotal = new Intl.NumberFormat(undefined, { style: 'currency', currency: currency, maximumFractionDigits: 0 }).format(convertedTotal);

  // --- NEW: PDF Generation Engine ---
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Project Blueprint & Estimate", 20, 30);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100);
    doc.text("Prepared by: Aman Kumar Verma", 20, 40);
    doc.text("Role: Full-Stack Software Engineer", 20, 46);
    doc.text("Contact: https://amanvite.github.io", 20, 52);
    
    // Line Break
    doc.setDrawColor(200);
    doc.line(20, 60, 190, 60);

    // Scope Details
    doc.setTextColor(0);
    doc.setFont("helvetica", "bold");
    doc.text("Technical Scope", 20, 75);
    
    doc.setFont("helvetica", "normal");
    doc.text(`Architecture: ${activeType === 'fullstack' ? 'Full-Stack Application (MERN)' : 'Frontend User Interface'}`, 20, 85);
    doc.text(`Application Scale: ${pages} Core Views`, 20, 93);
    doc.text(`Authentication System: ${needsAuth ? 'Included (JWT/OAuth)' : 'Not Required'}`, 20, 101);

    // Pricing
    doc.setDrawColor(200);
    doc.line(20, 115, 190, 115);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(`Estimated Investment: ${formattedTotal}`, 20, 130);

    // Footer
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(150);
    doc.text("Note: This is an automated estimate. Final scope requires a discovery call.", 20, 270);

    doc.save("Aman_Verma_Project_Estimate.pdf");
  };

  return (
    <div className="relative p-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-950 shadow-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative bg-zinc-950 rounded-[23px] p-8 h-full flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-zinc-900 border border-white/5 rounded-lg">
              <Calculator className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-100 tracking-tight">Project Estimator</h3>
            </div>
          </div>
          <div className="flex items-center bg-zinc-900 border border-white/5 rounded-lg px-3 py-1.5">
            <Globe className="w-4 h-4 text-zinc-400 mr-2" />
            <span className="text-sm font-semibold text-zinc-300">{currency}</span>
          </div>
        </div>

        {/* --- NEW: Dynamic Architecture Visualizer --- */}
        <div className="mb-8 p-6 bg-zinc-900/50 border border-white/5 rounded-xl h-32 flex items-center justify-center relative overflow-hidden">
          {!activeType ? (
            <span className="text-zinc-500 text-sm font-mono tracking-widest uppercase">Select Architecture</span>
          ) : (
            <div className="flex items-center space-x-4 md:space-x-8 w-full justify-center">
              {/* Client Node */}
              <div className="flex flex-col items-center z-10">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Monitor className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-xs text-zinc-400 font-mono">React UI</span>
              </div>

              {activeType === 'fullstack' && (
                <>
                  <div className="h-[2px] w-8 md:w-16 bg-gradient-to-r from-cyan-500/50 to-indigo-500/50"></div>
                  {/* Server Node */}
                  <div className="flex flex-col items-center z-10">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                      <Cpu className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-xs text-zinc-400 font-mono">Express API</span>
                  </div>

                  <div className="h-[2px] w-8 md:w-16 bg-gradient-to-r from-indigo-500/50 to-emerald-500/50"></div>
                  {/* Database Node */}
                  <div className="flex flex-col items-center z-10">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      <HardDrive className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-xs text-zinc-400 font-mono">MongoDB</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Form Controls */}
        <div className="space-y-6 flex-grow">
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setActiveType('frontend')} className={`p-4 rounded-xl border transition-all text-left ${activeType === 'frontend' ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-300' : 'bg-zinc-900 border-white/5 text-zinc-400'}`}>
              Frontend UI
            </button>
            <button onClick={() => setActiveType('fullstack')} className={`p-4 rounded-xl border transition-all text-left ${activeType === 'fullstack' ? 'bg-indigo-500/10 border-indigo-500/50 text-indigo-300' : 'bg-zinc-900 border-white/5 text-zinc-400'}`}>
              Full-Stack App
            </button>
          </div>

          <div className={`space-y-4 transition-all duration-500 ${activeType ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
            <div className="flex justify-between text-sm text-zinc-400 uppercase tracking-wider font-semibold">
              <span><Database className="w-4 h-4 inline mr-2" /> Views</span>
              <span className="text-zinc-300">{pages}</span>
            </div>
            <input type="range" min="1" max="15" value={pages} onChange={(e) => setPages(parseInt(e.target.value))} className="w-full accent-cyan-500 bg-zinc-800 h-2 rounded-lg cursor-pointer" />
          </div>

          <div className={`transition-all duration-500 ${activeType === 'fullstack' ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
            <button onClick={() => setNeedsAuth(!needsAuth)} className={`w-full p-4 rounded-xl border flex justify-between items-center ${needsAuth ? 'bg-zinc-800 border-zinc-600 text-zinc-200' : 'bg-zinc-900 border-white/5 text-zinc-500'}`}>
              <span>User Authentication</span>
              <div className={`w-4 h-4 rounded-full border ${needsAuth ? 'bg-cyan-400' : 'border-zinc-600'}`}></div>
            </button>
          </div>
        </div>

        {/* Live Output & Action */}
        <div className="pt-6 mt-6 border-t border-white/5">
          <div className="flex items-end justify-between mb-6">
            <span className="text-zinc-500 text-sm">Estimated Budget</span>
            <span className="text-4xl font-black text-white tracking-tighter">{totalUSD === 0 ? '$0' : formattedTotal}</span>
          </div>
          
          <button 
            disabled={totalUSD === 0}
            onClick={generatePDF}
            className={`w-full h-14 rounded-xl flex items-center justify-center font-bold tracking-wide transition-all ${totalUSD > 0 ? 'bg-cyan-500 text-zinc-950 hover:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'}`}
          >
            <span>Download Blueprint PDF</span>
            <ArrowDownToLine className="w-5 h-5 ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
}