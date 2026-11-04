import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { SunIcon, MoonIcon } from './components/Icons';

type PageView = 'overview' | 'about' | 'projects';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('overview');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      return localStorage.getItem('aman_theme') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

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
      // ignore
    }
  }, [theme]);

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
        body {
          overflow-x: clip;
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

      <header className="sticky top-0 z-40 pf-card/90 backdrop-blur-md border-b pf-border h-14">
        <div className="max-w-[820px] mx-auto h-full px-4 sm:px-8 border-x pf-border flex items-center justify-between">
          <nav className="flex items-center gap-1 text-xs">
            <button
              onClick={() => handleNavigate('overview')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                activePage === 'overview'
                  ? 'pf-pill pf-title font-semibold'
                  : 'pf-muted hover:opacity-80'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                activePage === 'about'
                  ? 'pf-pill pf-title font-semibold'
                  : 'pf-muted hover:opacity-80'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigate('projects')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                activePage === 'projects'
                  ? 'pf-pill pf-title font-semibold'
                  : 'pf-muted hover:opacity-80'
              }`}
            >
              Projects
            </button>
          </nav>

          {/* Segmented Pill Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center p-0.5 rounded-full border pf-border pf-pill cursor-pointer transition-all"
            title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            aria-label="Toggle theme"
          >
            <span
              className={`flex items-center justify-center w-6 h-6 rounded-full transition-all ${
                theme === 'light'
                  ? 'pf-card pf-title shadow-2xs'
                  : 'pf-muted'
              }`}
            >
              <SunIcon className="w-3.5 h-3.5" />
            </span>
            <span
              className={`flex items-center justify-center w-6 h-6 rounded-full transition-all ${
                theme === 'dark'
                  ? 'pf-card pf-title shadow-2xs'
                  : 'pf-muted'
              }`}
            >
              <MoonIcon className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </header>

      {activePage === 'overview' && (
        <Home
          onOpenProjects={() => handleNavigate('projects')}
          onOpenAbout={() => handleNavigate('about')}
        />
      )}
      {activePage === 'about' && (
        <About
          onOpenProjects={() => handleNavigate('projects')}
          onOpenHome={() => handleNavigate('overview')}
        />
      )}
      {activePage === 'projects' && (
        <Projects
          onOpenHome={() => handleNavigate('overview')}
          onOpenAbout={() => handleNavigate('about')}
        />
      )}
    </div>
  );
}