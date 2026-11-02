import Home from './pages/Home';

export default function App() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Top Navbar matching reference */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 h-14">
        <div className="max-w-[1160px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
          <a
            href="#home"
            className="font-black text-xl tracking-tighter text-zinc-900 select-none"
          >
            AV
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToProjects}
              className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 rounded-md border border-zinc-200 text-zinc-400 text-xs transition-colors w-48 cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-zinc-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span>Search projects...</span>
              <span className="ml-auto text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-zinc-200 text-zinc-500">
                ⌘K
              </span>
            </button>

            <a
              href="mailto:info.amanvite@gmail.com"
              className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md border border-transparent hover:border-zinc-200 transition-all"
              title="Email Aman"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <Home />
    </div>
  );
}