import { useState } from 'react';
import { PROJECTS, UTILITY_PACKAGES, PROFILE } from '../data';
import {
  RepoIcon,
  GitBranchIcon,
  GitCommitIcon,
  ArrowUpRightIcon,
  TerminalIcon,
} from '../components/Icons';

export default function Projects({
  onBackHome,
}: {
  onBackHome: () => void;
}) {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const filters = ['ALL', 'TypeScript', 'Node.js', 'Socket.io', 'React Native', 'DOM API'];

  const filteredProjects =
    selectedFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tech.includes(selectedFilter));

  return (
    <div className="max-w-[820px] mx-auto">
      <main className="w-full border-x pf-border pf-card min-h-screen">
        <div className="px-6 sm:px-8 py-6 border-b pf-border flex items-center justify-between pf-subtle">
          <div>
            <div
              className="text-[11px] pf-muted uppercase tracking-widest mb-1"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              {PROFILE.handle} // projects
            </div>
            <h1 className="text-xl sm:text-2xl font-bold pf-title tracking-tight">
              Projects &amp; System Notes
            </h1>
          </div>

          <button
            onClick={onBackHome}
            className="px-3 py-1.5 text-xs font-medium pf-title pf-card border pf-border rounded-md pf-hover transition-colors cursor-pointer"
          >
            &larr; Overview
          </button>
        </div>

        <div className="px-6 sm:px-8 py-3.5 border-b pf-border flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                selectedFilter === f
                  ? 'pf-btn-primary font-semibold'
                  : 'pf-pill pf-text pf-hover'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="divide-y pf-divide">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 pf-hover transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <RepoIcon className="w-4 h-4 pf-muted" />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold pf-title hover:underline"
                  >
                    {project.title}
                  </a>
                  <span className="px-2 py-0.5 text-[10px] font-mono border pf-border rounded-full pf-muted">
                    {project.repoName}
                  </span>
                </div>

                <div
                  className="flex items-center gap-2 text-[11px] pf-muted"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 pf-pill rounded">
                    <GitBranchIcon className="w-3 h-3" /> {project.branch}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 pf-pill rounded">
                    <GitCommitIcon className="w-3 h-3" /> {project.commitSha}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm pf-text leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="p-3 rounded-lg pf-subtle border pf-border mb-4">
                <div
                  className="text-[10px] font-bold uppercase tracking-wider pf-muted mb-1"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  Notes
                </div>
                <p className="text-xs pf-text">{project.notes}</p>
              </div>

              <div className="w-full h-1.5 rounded-full overflow-hidden flex pf-pill mb-3">
                {project.langBar.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.pct}%`, backgroundColor: lang.color }}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 pf-pill pf-text rounded text-[11px] font-medium border pf-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold pf-title hover:underline"
                >
                  Open Project <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 sm:px-8 py-5 border-y pf-border pf-subtle">
          <h2 className="text-base font-bold pf-title">
            Standalone Utilities
          </h2>
        </div>

        <div className="divide-y pf-divide">
          {UTILITY_PACKAGES.map((pkg) => (
            <a
              key={pkg.name}
              href={pkg.link}
              target="_blank"
              rel="noreferrer"
              className="block p-6 sm:p-8 pf-hover transition-colors group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 pf-muted" />
                  <span
                    className="text-sm font-bold pf-title"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    {pkg.name}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded pf-pill pf-text border pf-border">
                    {pkg.version}
                  </span>
                </div>
                <ArrowUpRightIcon className="w-4 h-4 pf-muted" />
              </div>
              <p className="text-xs pf-text mb-3">{pkg.description}</p>
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
      </main>
    </div>
  );
}