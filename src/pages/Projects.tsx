import { useState } from 'react';
import { PROJECTS, UTILITY_PACKAGES, PROFILE } from '../data';
import {
  RepoIcon,
  GitBranchIcon,
  GitCommitIcon,
  ArrowUpRightIcon,
  TerminalIcon,
  GithubIcon,
} from '../components/Icons';

function HatchedBand() {
  return <div className="w-full h-7 border-b pf-border pf-hatch" />;
}

export default function Projects({
  onOpenHome,
  onOpenAbout,
  onOpenContact,
}: {
  onOpenHome: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}) {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const filters = ['ALL', 'TypeScript', 'JavaScript', 'Node.js', 'Socket.io', 'React Native', 'DOM API'];

  const filteredProjects =
    selectedFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tech.includes(selectedFilter));

  return (
    <div className="w-full">
      <HatchedBand />

      {/* Page Header */}
      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold pf-title tracking-tight">
              Projects
            </h1>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border pf-border pf-subtle pf-hover text-xs font-mono pf-title transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>@{PROFILE.handle}</span>
              <ArrowUpRightIcon className="w-3 h-3 pf-muted" />
            </a>
          </div>
          <p className="text-xs sm:text-[13.5px] pf-text leading-relaxed max-w-2xl">
            Production applications, real-time WebSocket systems, browser engines, and developer utilities architected and maintained by {PROFILE.name}.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 pf-subtle">
          <div className="flex flex-wrap items-center gap-1.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                  selectedFilter === f
                    ? 'pf-btn-primary font-semibold'
                    : 'pf-card pf-text border pf-border pf-hover'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <span
            className="text-[11px] pf-muted"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            Showing {filteredProjects.length} of {PROJECTS.length}
          </span>
        </div>
      </div>

      <HatchedBand />

      {/* Main Projects Grid */}
      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border divide-y pf-divide">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="p-5 sm:p-8 pf-hover transition-colors"
            >
              {/* Top Meta Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="text-xs pf-muted font-semibold"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    0{index + 1}
                  </span>
                  <span className="h-3 w-px pf-grid-bg" />
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-mono pf-muted"
                  >
                    <RepoIcon className="w-3.5 h-3.5" />
                    {project.repoName}
                  </span>
                  <span
                    className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded-full border pf-border pf-subtle pf-muted uppercase"
                  >
                    {project.tag}
                  </span>
                </div>

                <div
                  className="flex items-center gap-2 text-[11px] pf-muted"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 pf-pill rounded border pf-border">
                    <GitBranchIcon className="w-3 h-3" /> {project.branch}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 pf-pill rounded border pf-border">
                    <GitCommitIcon className="w-3 h-3" /> {project.commitSha}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-4">
                <h2 className="text-lg sm:text-xl font-bold pf-title tracking-tight mb-1.5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                </h2>
                <p className="text-xs sm:text-[14px] pf-text leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Engineering Note Box */}
              <div className="p-3.5 rounded-lg pf-subtle border pf-border mb-4">
                <div
                  className="text-[10px] font-bold uppercase tracking-wider pf-muted mb-1"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  System Architecture
                </div>
                <p className="text-xs pf-title leading-relaxed">{project.notes}</p>
              </div>

              {/* Language Bar & Legend */}
              <div className="mb-4">
                <div className="w-full h-1.5 rounded-full overflow-hidden flex pf-pill mb-2">
                  {project.langBar.map((lang) => (
                    <div
                      key={lang.name}
                      style={{ width: `${lang.pct}%`, backgroundColor: lang.color }}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-[11px] pf-muted">
                  {project.langBar.map((lang) => (
                    <span
                      key={lang.name}
                      className="inline-flex items-center gap-1.5"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="pf-title font-medium">{lang.name}</span>
                      <span>{lang.pct}%</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Stack Pills + Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t pf-border">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 pf-pill pf-text rounded-full text-[11px] font-mono border pf-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium pf-text hover:underline"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-md pf-btn-primary text-xs font-medium transition-opacity"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <HatchedBand />

      {/* Standalone Utilities Section */}
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
          </div>

          <div className="divide-y pf-divide">
            {UTILITY_PACKAGES.map((pkg) => (
              <a
                key={pkg.name}
                href={pkg.link}
                target="_blank"
                rel="noreferrer"
                className="block px-5 sm:px-8 py-5 pf-hover transition-colors group"
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
                  <span
                    className="text-[10px] pf-muted uppercase"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    {pkg.type}
                  </span>
                </div>
                <p className="text-xs pf-text leading-relaxed mb-3">
                  {pkg.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {pkg.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 pf-pill pf-text rounded-full text-[10px] font-mono border pf-border"
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

      {/* Consistent Site Footer */}
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
            <button onClick={onOpenContact} className="hover:underline cursor-pointer">
              Contact
            </button>
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
            © {new Date().getFullYear()}. Built with hands.
          </div>
        </footer>
      </div>
    </div>
  );
}