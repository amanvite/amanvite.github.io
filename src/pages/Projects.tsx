import { useState } from 'react';
import { PROJECTS, UTILITY_PACKAGES, PROFILE } from '../data';
import {
  ArrowUpRightIcon,
  TerminalIcon,
  GithubIcon,
  RepoIcon,
} from '../components/Icons';

function HatchedBand() {
  return <div className="w-full h-7 border-b pf-border pf-hatch" />;
}

const FILTERS = ['All', 'TypeScript', 'JavaScript', 'Node.js', 'Kotlin'];

export default function Projects({
  onOpenHome,
  onOpenAbout,
}: {
  onOpenHome: () => void;
  onOpenAbout: () => void;
}) {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tech.includes(activeFilter));

  return (
    <div className="w-full">
      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2.5">
            <div className="flex items-baseline gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-bold pf-title tracking-tight">
                Projects
              </h1>
              <span
                className="text-xs pf-muted"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                ({PROJECTS.length})
              </span>
            </div>

            <a
              href={`${PROFILE.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border pf-border pf-subtle pf-hover text-xs font-mono pf-title transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/{PROFILE.handle}</span>
              <ArrowUpRightIcon className="w-3 h-3 pf-muted" />
            </a>
          </div>

          <p className="text-xs sm:text-[13.5px] pf-text leading-relaxed max-w-2xl">
            Selected full-stack web applications, media tools, mobile scanners, and browser utilities built by {PROFILE.name}.
          </p>
        </div>
      </div>

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-3 pf-subtle flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {FILTERS.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-2.5 py-1 rounded-md text-xs transition-all cursor-pointer ${
                    active
                      ? 'pf-btn-primary font-semibold shadow-2xs'
                      : 'pf-card pf-text border pf-border pf-hover'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <span
            className="text-[11px] pf-muted hidden sm:inline"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            {visibleProjects.length} {visibleProjects.length === 1 ? 'repository' : 'repositories'}
          </span>
        </div>
      </div>

      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {visibleProjects.map((project, idx) => {
              const isLastRowDesktop =
                idx >=
                visibleProjects.length - (visibleProjects.length % 2 === 0 ? 2 : 1);
              const isLastItem = idx === visibleProjects.length - 1;

              return (
                <div
                  key={project.id}
                  className={`group pf-card p-6 sm:p-7 flex flex-col justify-between pf-hover transition-colors border-b pf-border ${
                    idx % 2 === 0 ? 'sm:border-r' : ''
                  } ${isLastRowDesktop ? 'sm:border-b-0' : ''} ${
                    isLastItem ? 'border-b-0' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className="inline-flex items-center gap-1.5 text-[11px] pf-muted"
                        style={{ fontFamily: '"JetBrains Mono", monospace' }}
                      >
                        <RepoIcon className="w-3.5 h-3.5" />
                        <span>{project.repoName}</span>
                      </span>

                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full border pf-border pf-subtle pf-muted uppercase tracking-wider"
                        style={{ fontFamily: '"JetBrains Mono", monospace' }}
                      >
                        0{idx + 1} • {project.tag}
                      </span>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 mb-2 group/title"
                    >
                      <h2 className="text-base sm:text-lg font-bold pf-title group-hover/title:underline">
                        {project.title}
                      </h2>
                      <ArrowUpRightIcon className="w-4 h-4 pf-muted group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform" />
                    </a>

                    <p className="text-xs sm:text-[13px] pf-text leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t pf-border flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 pf-pill pf-text rounded text-[10.5px] font-mono border pf-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-md border pf-border pf-card pf-text pf-hover transition-colors"
                        title="View Source on GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md pf-btn-primary text-[11px] font-medium transition-opacity"
                      >
                        <span>Open</span>
                        <ArrowUpRightIcon className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border">
          <div className="px-5 sm:px-8 py-5 border-b pf-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold pf-title tracking-tight">
                Packages &amp; Utilities
              </h2>
              <span
                className="text-xs pf-muted"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                ({UTILITY_PACKAGES.length})
              </span>
            </div>
            <span
              className="text-[11px] pf-muted hidden sm:inline"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              Open-Source Tools
            </span>
          </div>

          <div>
            {UTILITY_PACKAGES.map((pkg) => (
              <a
                key={pkg.name}
                href={pkg.link}
                target="_blank"
                rel="noreferrer"
                className="block px-5 sm:px-8 py-5 border-b pf-border last:border-b-0 pf-hover transition-colors group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <TerminalIcon className="w-4 h-4 pf-muted" />
                    <span
                      className="text-sm font-bold pf-title group-hover:underline"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {pkg.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded pf-pill pf-text border pf-border">
                      {pkg.version}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] pf-muted uppercase hidden sm:inline"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {pkg.type}
                    </span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 pf-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <p className="text-xs pf-text leading-relaxed mb-3">
                  {pkg.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {pkg.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 pf-pill pf-text rounded text-[10px] font-mono border pf-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <HatchedBand />

      <div className="w-full">
        <footer className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-9 flex flex-col items-center gap-4 text-xs pf-muted">
          <nav className="flex flex-wrap items-center justify-center gap-6 pf-text font-medium">
            <button onClick={onOpenHome} className="hover:underline cursor-pointer">
              Home
            </button>
            <button onClick={onOpenAbout} className="hover:underline cursor-pointer">
              About
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:underline cursor-pointer"
            >
              Projects
            </button>
            <a
              href={PROFILE.resumeUrl}
              download="Aman_Verma_Resume.pdf"
              className="hover:underline"
            >
              Resume
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </nav>

          <div
            className="text-[11px]"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}