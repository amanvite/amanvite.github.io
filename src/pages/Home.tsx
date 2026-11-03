import { useState, useEffect, type MouseEvent } from 'react';
import {
  PROFILE,
  STACK,
  PROJECTS,
  UTILITY_PACKAGES,
  EDUCATION,
} from '../data';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  MailIcon,
  VerifiedIcon,
  TerminalIcon,
  ArrowUpRightIcon,
  CopyIcon,
  CheckIcon,
  CollapseIcon,
  TechBadgeIcon,
} from '../components/Icons';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'utilities', label: 'Packages' },
  { id: 'education', label: 'Education' },
];

function Divider() {
  return <div className="w-full h-6 border-y pf-border pf-hatch" />;
}

export default function Home({
  onOpenProjects,
  onOpenAbout,
  onOpenContact,
}: {
  onOpenProjects: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}) {
  const [greeting, setGreeting] = useState('Good morning');
  const [timeStr, setTimeStr] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [eduExpanded, setEduExpanded] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    const tick = () => {
      try {
        const now = new Date();
        setTimeStr(
          now.toLocaleTimeString('en-GB', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }) + ' IST'
        );
      } catch {
        setTimeStr('');
      }
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (bottomReached) {
        setActiveSection(SECTIONS[SECTIONS.length - 1].id);
        return;
      }

      let current = SECTIONS[0].id;
      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= 220) {
          current = sec.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const jumpTo = (e: MouseEvent, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeIdx = Math.max(
    0,
    SECTIONS.findIndex((s) => s.id === activeSection)
  );

  return (
    <div className="max-w-[820px] mx-auto relative">
      <main className="w-full border-x pf-border pf-card min-h-screen">
        <section id="home" className="scroll-mt-20">
          <div className="p-3 sm:p-4 pb-0">
            <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border pf-border bg-zinc-900">
              <img
                src={PROFILE.banner}
                alt="Banner"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {timeStr && (
                <div
                  className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[11px] text-white tracking-wider"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  {timeStr}
                </div>
              )}
            </div>
          </div>

          {/* Mobile spacing stays at pt-2/pb-0.5; Tablet & Laptop (sm:) lifts name & handle up */}
          <div className="px-5 sm:px-8 pt-2 sm:pt-1 relative z-10 flex items-end justify-between gap-4 mb-5 sm:mb-4">
            <div className="flex items-end gap-3.5 sm:gap-4">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="-mt-8 sm:-mt-14 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white dark:border-zinc-900 shadow-md bg-zinc-100 shrink-0"
              />
              <div className="pb-0.5 sm:pb-3">
                <div className="flex items-center gap-1.5">
                  <h1 className="text-xl sm:text-2xl font-bold pf-title tracking-tight leading-tight">
                    {PROFILE.name}
                  </h1>
                  <VerifiedIcon className="w-[18px] h-[18px] shrink-0" />
                </div>
                <p
                  className="text-xs pf-muted mt-0.5"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  @{PROFILE.handle}
                </p>
              </div>
            </div>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border pf-border pf-subtle pf-hover text-[11px] font-mono pf-text transition-colors mb-3"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/{PROFILE.handle}</span>
            </a>
          </div>

          <div className="px-5 sm:px-8 pb-6">
            <p className="text-[13.5px] pf-text mb-5">{PROFILE.role}</p>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenProjects}
                className="px-3.5 py-1.5 pf-btn-primary text-xs font-medium rounded-md transition-opacity cursor-pointer"
              >
                View projects
              </button>
              <button
                onClick={onOpenAbout}
                className="px-3.5 py-1.5 pf-pill pf-title border pf-border text-xs font-medium rounded-md pf-hover transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={onOpenContact}
                className="px-3.5 py-1.5 pf-pill pf-title border pf-border text-xs font-medium rounded-md pf-hover transition-colors cursor-pointer"
              >
                Contact
              </button>
              <button
                onClick={copyEmail}
                className="px-3.5 py-1.5 pf-card pf-text border pf-border text-xs font-medium rounded-md pf-hover transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-3.5 h-3.5 pf-muted" />
                    <span>{PROFILE.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="px-5 sm:px-8 py-3.5 border-t pf-border flex items-center pf-subtle relative">
            <div
              className="hidden lg:flex items-center absolute -left-[104px] top-1 z-20 pf-muted select-none pointer-events-none"
              style={{ fontFamily: '"Caveat", cursive' }}
            >
              <span className="text-[23px] font-bold -rotate-12 leading-none whitespace-nowrap">
                Follow me
              </span>
              <svg
                className="w-11 h-8 -ml-1 translate-y-2 pf-muted"
                viewBox="0 0 56 36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M2 8 C 16 26, 34 26, 52 17" strokeLinecap="round" />
                <path
                  d="M45 13 L 52 17 L 46 23"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border pf-border pf-card pf-text pf-hover transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border pf-border pf-card pf-text pf-hover transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border pf-border pf-card pf-text pf-hover transition-all"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border pf-border pf-card pf-text pf-hover transition-all"
                title="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-2 rounded-md border pf-border pf-card pf-text pf-hover transition-all"
                title="Email"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <Divider />

        <section id="about" className="px-5 sm:px-8 py-8 scroll-mt-20">
          <h2
            className="text-4xl pf-title mb-4 tracking-normal select-none"
            style={{
              fontFamily: '"Caveat", "Segoe Print", "Bradley Hand", cursive',
              fontWeight: 700,
            }}
          >
            {greeting}
          </h2>

          <p className="text-[15px] pf-text leading-relaxed">{PROFILE.bio}</p>
        </section>

        <Divider />

        <section id="stack" className="scroll-mt-20">
          <div className="px-5 sm:px-8 py-5 border-b pf-border">
            <h2 className="text-xl font-bold pf-title tracking-tight">Stack</h2>
          </div>

          <div className="divide-y pf-divide">
            {STACK.map((row) => (
              <div
                key={row.num}
                className="grid grid-cols-1 sm:grid-cols-[180px_1fr] px-5 sm:px-8 py-3.5 items-start sm:items-center gap-2 sm:gap-4"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="text-xs pf-muted"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    {row.num}
                  </span>
                  <span className="text-[13px] font-medium pf-text">
                    {row.category}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {row.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border pf-border pf-subtle text-xs font-medium pf-title"
                    >
                      <TechBadgeIcon type={item.icon} />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section id="projects" className="scroll-mt-20">
          <div className="px-5 sm:px-8 py-5 border-b pf-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold pf-title tracking-tight">
                Projects
              </h2>
              <span
                className="text-xs pf-muted"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                ({PROJECTS.length})
              </span>
            </div>
            <button
              onClick={onOpenProjects}
              className="text-xs font-medium pf-muted hover:underline transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              View all projects <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:gap-px pf-grid-bg">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group pf-card p-6 flex flex-col justify-between pf-hover transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold pf-title group-hover:underline">
                      {project.title}
                    </h3>
                    <ArrowUpRightIcon className="w-4 h-4 pf-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>

                  <p className="text-xs pf-text leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t pf-border">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 pf-pill pf-text rounded text-[11px] font-medium border pf-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <Divider />

        <section id="utilities" className="scroll-mt-20">
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
        </section>

        <Divider />

        <section id="education" className="scroll-mt-20">
          <div className="px-5 sm:px-8 py-5 border-b pf-border">
            <h2 className="text-xl font-bold pf-title tracking-tight">
              Education
            </h2>
          </div>

          <div className="divide-y pf-divide">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="px-5 sm:px-8 py-6">
                <div className="flex gap-3.5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-lg border pf-border pf-subtle flex items-center justify-center pf-muted">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    {eduExpanded && (
                      <div className="w-3.5 flex-1 border-l border-b pf-border rounded-bl-lg ml-3.5 mt-1 mb-2.5" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      onClick={() => setEduExpanded((prev) => !prev)}
                      className="flex items-start sm:items-center justify-between gap-2 cursor-pointer select-none group"
                    >
                      <h3 className="text-[15px] font-semibold pf-title group-hover:opacity-80 transition-opacity">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center gap-2 text-xs pf-muted shrink-0">
                        <span>{edu.location}</span>
                        <CollapseIcon className="w-3.5 h-3.5 pf-muted" />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 text-xs pf-muted mt-1">
                      <span>{edu.period}</span>
                      <span className="h-3 w-px pf-grid-bg" />
                      <span>{edu.degreeShort}</span>
                      <span className="h-3 w-px pf-grid-bg" />
                      <span>{edu.field}</span>
                    </div>

                    {eduExpanded && (
                      <div className="mt-3.5 space-y-3.5">
                        <div className="flex items-start gap-2.5 text-[13.5px] pf-title">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                          <span>{edu.summary}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-0.5">
                          {edu.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-0.5 rounded-full border pf-border pf-subtle text-[11px] pf-text"
                              style={{ fontFamily: '"JetBrains Mono", monospace' }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <footer className="px-5 sm:px-8 py-9 flex flex-col items-center gap-4 text-xs pf-muted">
          <nav className="flex flex-wrap items-center justify-center gap-6 pf-text font-medium">
            <button onClick={scrollToTop} className="hover:underline cursor-pointer">
              Home
            </button>
            <button onClick={onOpenAbout} className="hover:underline cursor-pointer">
              About
            </button>
            <button onClick={onOpenProjects} className="hover:underline cursor-pointer">
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
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </footer>
      </main>

      <aside className="hidden xl:block fixed top-24 left-[calc(50%+442px)] w-36 z-30">
        <div className="pt-2">
          <h4
            className="text-[11px] font-bold pf-muted uppercase tracking-widest mb-3 pl-4"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            Index
          </h4>

          <div className="relative border-l pf-border">
            <div
              className="absolute -left-[1.5px] top-0 w-[2px] h-8 pf-indicator transition-transform duration-200 ease-out"
              style={{ transform: `translateY(${activeIdx * 32}px)` }}
            />

            <nav className="flex flex-col">
              {SECTIONS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => jumpTo(e, item.id)}
                    className={`h-8 flex items-center pl-4 text-xs transition-all duration-200 ${
                      isActive
                        ? 'pf-title font-semibold translate-x-1'
                        : 'pf-muted hover:opacity-80 font-normal'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </div>
  );
}