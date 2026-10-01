import { useState, useEffect } from 'react';
import { Calculator, Code2, Database, Server, ArrowRight, Globe } from 'lucide-react';

export default function Estimator() {
  const [activeType, setActiveType] = useState<'frontend' | 'fullstack' | null>(null);
  const [pages, setPages] = useState(1);
  const [needsAuth, setNeedsAuth] = useState(false);
  
  // Currency State
  const [currency, setCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({ USD: 1 });
  const [supportedCurrencies, setSupportedCurrencies] = useState(['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD']);

  // Fetch live exchange rates and detect user location on mount
  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(res => res.json())
      .then(data => {
        setExchangeRates(data.rates);
        // Once rates are loaded, detect user's local currency via IP
        return fetch('https://ipapi.co/currency/');
      })
      .then(res => res.text())
      .then(userCurrency => {
        // Ensure the API returned a valid 3-letter currency code and we have a rate for it
        if (userCurrency && userCurrency.length === 3) {
          setCurrency(userCurrency);
          if (!supportedCurrencies.includes(userCurrency)) {
            setSupportedCurrencies(prev => [...prev, userCurrency]);
          }
        }
      })
      .catch(err => console.log('Ad-blocker prevented IP detection, defaulting to USD.'));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Base pricing logic (always calculated in USD first)
  const basePriceUSD = activeType === 'fullstack' ? 800 : activeType === 'frontend' ? 300 : 0;
  const pagePriceUSD = pages > 1 ? (pages - 1) * 75 : 0;
  const authPriceUSD = needsAuth ? 250 : 0;
  const totalUSD = basePriceUSD > 0 ? basePriceUSD + pagePriceUSD + authPriceUSD : 0;

  // Convert to localized currency
  const conversionRate = exchangeRates[currency] || 1;
  const convertedTotal = totalUSD * conversionRate;

  // Format the number beautifully based on the user's system locale
  const formattedTotal = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(convertedTotal);

  return (
    <div className="relative p-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-950 shadow-2xl overflow-hidden group">
      
      {/* Animated gradient border effect */}
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
              <p className="text-xs text-zinc-500 font-mono mt-1">interactive_quote_generator.tsx</p>
            </div>
          </div>
          
          {/* Elegant Currency Selector Overlay */}
          <div className="relative flex items-center bg-zinc-900 border border-white/5 rounded-lg px-3 py-1.5 hover:bg-zinc-800 transition-colors cursor-pointer">
            <Globe className="w-4 h-4 text-zinc-400 mr-2" />
            <span className="text-sm font-semibold text-zinc-300">{currency}</span>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            >
              {supportedCurrencies.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Form Controls */}
        <div className="space-y-8 flex-grow">
          
          {/* Project Type */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center">
              <Code2 className="w-4 h-4 mr-2" /> Architecture
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setActiveType('frontend')}
                className={`p-4 rounded-xl border transition-all text-left ${activeType === 'frontend' ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-300' : 'bg-zinc-900 border-white/5 text-zinc-400 hover:bg-zinc-800'}`}
              >
                Frontend UI
              </button>
              <button 
                onClick={() => setActiveType('fullstack')}
                className={`p-4 rounded-xl border transition-all text-left ${activeType === 'fullstack' ? 'bg-indigo-500/10 border-indigo-500/50 text-indigo-300' : 'bg-zinc-900 border-white/5 text-zinc-400 hover:bg-zinc-800'}`}
              >
                Full-Stack App
              </button>
            </div>
          </div>

          {/* Scale Slider */}
          <div className={`space-y-4 transition-all duration-500 ${activeType ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center">
                <Database className="w-4 h-4 mr-2" /> Application Scale
              </label>
              <span className="text-zinc-300 font-mono bg-zinc-900 px-2 py-1 rounded text-sm">{pages} Views</span>
            </div>
            <input 
              type="range" min="1" max="15" value={pages}
              onChange={(e) => setPages(parseInt(e.target.value))}
              className="w-full accent-cyan-500 bg-zinc-800 h-2 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Add-ons */}
          <div className={`space-y-3 transition-all duration-500 ${activeType === 'fullstack' ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
            <label className="text-sm font-semibold text-zinc-400 uppercase tracking-wider flex items-center">
              <Server className="w-4 h-4 mr-2" /> Backend Features
            </label>
            <button 
              onClick={() => setNeedsAuth(!needsAuth)}
              className={`w-full p-4 rounded-xl border transition-all flex justify-between items-center ${needsAuth ? 'bg-zinc-800 border-zinc-600 text-zinc-200' : 'bg-zinc-900 border-white/5 text-zinc-500 hover:bg-zinc-800'}`}
            >
              <span>User Authentication (JWT/OAuth)</span>
              <div className={`w-4 h-4 rounded-full border ${needsAuth ? 'bg-cyan-400 border-cyan-400' : 'border-zinc-600'}`}></div>
            </button>
          </div>

        </div>

        {/* Live Output */}
        <div className="pt-6 mt-6 border-t border-white/5">
          <div className="flex items-end justify-between mb-6">
            <span className="text-zinc-500 text-sm">Estimated Budget</span>
            <span className="text-4xl font-black text-white tracking-tighter">
              {totalUSD === 0 ? '$0' : formattedTotal}
            </span>
          </div>
          <button 
            disabled={totalUSD === 0}
            className={`w-full h-14 rounded-xl flex items-center justify-center font-bold tracking-wide transition-all ${totalUSD > 0 ? 'bg-cyan-500 text-zinc-950 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'}`}
          >
            <span>Proceed with Blueprint</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
}