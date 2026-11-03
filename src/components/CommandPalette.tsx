import { useState, useEffect } from 'react';
import { PROJECTS, PROFILE } from '../data';
import {
  SearchIcon,
  RepoIcon,
  ArrowUpRightIcon,
  TerminalIcon,
  ThemeToggleIcon,
  YoutubeIcon,
} from './Icons';

export type PageView = 'overview' | 'about' | 'projects' | 'contact';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigatePage: (page: PageView, sectionId?: string) => void;
  onToggleTheme: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onNavigatePage,
  onToggleTheme,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.repoName.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q))
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg pf-card border pf-border rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b pf-border">
          <SearchIcon className="w-4 h-4 pf-muted" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, projects, or actions..."
            className="w-full text-sm bg-transparent pf-title placeholder:text-zinc-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-[10px] font-mono px-1.5 py-0.5 rounded border pf-border pf-muted cursor-pointer"
          >
            ESC
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 divide-y pf-divide">
          <div className="pb-2">
            <div className="px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider pf-muted">
              Navigation
            </div>
            {[
              { label: 'Overview', page: 'overview' as const, sec: 'home' },
              { label: 'About Aman Verma', page: 'about' as const },
              { label: 'Projects', page: 'projects' as const },
              { label: 'Contact', page: 'contact' as const },
              { label: 'Stack', page: 'overview' as const, sec: 'stack' },
              { label: 'Education', page: 'overview' as const, sec: 'education' },
            ]
              .filter((item) => item.label.toLowerCase().includes(q))
              .map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigatePage(item.page, item.sec);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs pf-text pf-hover transition-colors cursor-pointer text-left"
                >
                  <span className="flex items-center gap-2">
                    <TerminalIcon className="w-3.5 h-3.5 pf-muted" />
                    {item.label}
                  </span>
                  <span className="text-[10px] font-mono pf-muted">Go</span>
                </button>
              ))}

            <a
              href={PROFILE.youtube}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs pf-text pf-hover transition-colors"
            >
              <span className="flex items-center gap-2">
                <YoutubeIcon className="w-3.5 h-3.5 pf-muted" />
                YouTube (@amanvitee)
              </span>
              <ArrowUpRightIcon className="w-3.5 h-3.5 pf-muted" />
            </a>

            <button
              onClick={() => {
                onToggleTheme();
                onClose();
              }}
              className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs pf-text pf-hover transition-colors cursor-pointer text-left"
            >
              <span className="flex items-center gap-2">
                <ThemeToggleIcon className="w-3.5 h-3.5 pf-muted" />
                Switch Theme
              </span>
              <span className="text-[10px] font-mono pf-muted">Toggle</span>
            </button>
          </div>

          <div className="pt-2">
            <div className="px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider pf-muted">
              Projects ({matchingProjects.length})
            </div>
            {matchingProjects.map((proj) => (
              <a
                key={proj.id}
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs pf-text pf-hover transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <RepoIcon className="w-3.5 h-3.5 pf-muted" />
                  <div>
                    <div className="font-semibold pf-title">{proj.title}</div>
                    <div className="text-[11px] pf-muted">{proj.tech.join(' • ')}</div>
                  </div>
                </div>
                <ArrowUpRightIcon className="w-3.5 h-3.5 pf-muted" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}