import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Contact from './pages/Contact';
import CommandPalette from './components/CommandPalette';
import { SearchIcon, ThemeToggleIcon } from './components/Icons';

type PageView = 'overview' | 'repositories' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('overview');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      return localStorage.getItem('aman_theme') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // Load Google fonts once
  useEffect(() => {
    const fontId = 'aman-portfolio-fonts';
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Sync theme with document root & localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('aman_theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavigate = (page: PageView, sectionId?: string) => {
    setActivePage(page);
    if (page === 'overview' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen pf-bg pf-text font-sans transition-colors duration-200 ${theme}`}>
      {/* Theme CSS tokens so Light & Dark mode work across every Tailwind setup */}
      <style>{`
        :root {
          --pf-bg: #ffffff;
          --pf-card: #ffffff;
          --pf-subtle: rgba(244, 244, 245, 0.5);
          --pf-pill: #f4f4f5;
          --pf-border: #e4e4e7;
          --pf-title: #18181b;
          --pf-text: #52525b;
          --pf-muted: #a1a1aa;
          --pf-hover: rgba(244, 244, 245, 0.7);
          --pf-hatch-line: #f4f4f5;
        }
        html.dark, .dark {
          --pf-bg: #09090b;
          --pf-card: #09090b;
          --pf-subtle: rgba(24, 24, 27, 0.65);
          --pf-pill: #18181b;
          --pf-border: #27272a;
          --pf-title: #fafafa;
          --pf-text: #a1a1aa;
          --pf-muted: #71717a;
          --pf-hover: rgba(39, 39, 42, 0.5);
          --pf-hatch-line: #18181b;
        }
        .pf-bg { background-color: var(--pf-bg); }
        .pf-card { background-color: var(--pf-card); }
        .pf-subtle { background-color: var(--pf-subtle); }
        .pf-pill { background-color: var(--pf-pill); }
        .pf-border { border-color: var(--pf-border); }
        .pf-divide > :not([hidden]) ~ :not([hidden]) { border-color: var(--pf-border); }
        .pf-grid-bg { background-color: var(--pf-border); }
        .pf-title { color: var(--pf-title); }
        .pf-text { color: var(--pf-text); }
        .pf-muted { color: var(--pf-muted); }
        .pf-hover:hover { background-color: var(--pf-hover); }
        .pf-indicator { background-color: var(--pf-title); }
        .pf-btn-primary {
          background-color: var(--pf-title);
          color: var(--pf-bg);
        }
        .pf-btn-primary:hover { opacity: 0.9; }
        .pf-hatch {
          background-image: repeating-linear-gradient(
            -45deg,
            var(--pf-hatch-line),
            var(--pf-hatch-line) 1px,
            transparent 1px,
            transparent 8px
          );
        }
      `}</style>

      {/* Top Blueprint Header */}
      <header className="sticky top-0 z-40 pf-card/90 backdrop-blur-md border-b pf-border h-14">
        <div className="max-w-[740px] mx-auto h-full px-5 sm:px-7 border-x pf-border flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button
              onClick={() => handleNavigate('overview', 'home')}
              className="font-black text-xl tracking-tighter pf-title select-none cursor-pointer"
            >
              AV
            </button>

            <nav className="flex items-center gap-1 text-xs">
              <button
                onClick={() => handleNavigate('overview')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  activePage === 'overview'
                    ? 'pf-pill pf-title font-semibold'
                    : 'pf-muted hover:opacity-80'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleNavigate('repositories')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  activePage === 'repositories'
                    ? 'pf-pill pf-title font-semibold'
                    : 'pf-muted hover:opacity-80'
                }`}
              >
                Repositories
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  activePage === 'contact'
                    ? 'pf-pill pf-title font-semibold'
                    : 'pf-muted hover:opacity-80'
                }`}
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPaletteOpen(true)}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1 pf-subtle pf-hover rounded-md border pf-border pf-muted text-xs transition-colors cursor-pointer"
              title="Command Palette (⌘K)"
            >
              <SearchIcon className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono">⌘K</span>
            </button>

            {/* Theme Toggle Button matching reference header */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 pf-title pf-hover transition-all cursor-pointer"
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              aria-label="Toggle theme"
            >
              <ThemeToggleIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Active View */}
      {activePage === 'overview' && (
        <Home
          onOpenRepositories={() => handleNavigate('repositories')}
          onOpenContact={() => handleNavigate('contact')}
        />
      )}
      {activePage === 'repositories' && (
        <Repositories onBackHome={() => handleNavigate('overview')} />
      )}
      {activePage === 'contact' && <Contact />}

      {/* Command Modal */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigatePage={handleNavigate}
        onToggleTheme={toggleTheme}
      />
    </div>
  );
}