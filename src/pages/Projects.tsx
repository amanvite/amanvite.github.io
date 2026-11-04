import { PROJECTS, UTILITY_PACKAGES, PROFILE } from '../data';
import {
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
}: {
  onOpenHome: () => void;
  onOpenAbout: () => void;
}) {
  return (
    <div className="w-full">
      <HatchedBand />

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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border pf-border pf-card pf-hover text-xs font-mono pf-title transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/{PROFILE.handle}</span>
              <ArrowUpRightIcon className="w-3 h-3 pf-muted" />
            </a>
          </div>
          <p className="text-xs sm:text-[13.5px] pf-text leading-relaxed max-w-2xl">
            Selected web applications, real-time messaging engines, and developer utilities built by {PROFILE.name}.
          </p>
        </div>
      </div>

      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:gap-px pf-grid-bg">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group pf-card p-6 sm:p-7 flex flex-col justify-between pf-hover transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <h2 className="text-base sm:text-lg font-bold pf-title group-hover:underline">
                      {project.title}
                    </h2>
                    <ArrowUpRightIcon className="w-4 h-4 pf-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>

                  <p className="text-xs sm:text-[13px] pf-text leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t pf-border">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 pf-pill pf-text rounded text-[11px] font-medium border pf-border"
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
                  <ArrowUpRightIcon className="w-3.5 h-3.5 pf-muted" />
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