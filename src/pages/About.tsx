import { useState, useEffect } from 'react';
import { PROFILE, STACK, EDUCATION } from '../data';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  MailIcon,
  CollapseIcon,
  TechBadgeIcon,
} from '../components/Icons';

function HatchedBand() {
  return <div className="w-full h-7 border-b pf-border pf-hatch" />;
}

export default function About({
  onOpenProjects,
  onOpenContact,
  onOpenHome,
}: {
  onOpenProjects: () => void;
  onOpenContact: () => void;
  onOpenHome: () => void;
}) {
  const [greeting, setGreeting] = useState('Good afternoon');
  const [eduExpanded, setEduExpanded] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  return (
    <div className="w-full">
      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold pf-title tracking-tight mb-2">
            About {PROFILE.name}
          </h1>
          <p className="text-xs sm:text-[13.5px] pf-text leading-relaxed max-w-2xl">
            Get a quick overview of {PROFILE.name} (@{PROFILE.handle})&apos;s background, tech stack, education, and the web and mobile applications shipped.
          </p>
        </div>
      </div>

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-3.5 flex items-center pf-subtle relative">
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

          <div className="flex items-center gap-2.5">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md border pf-border pf-card flex items-center justify-center pf-text pf-hover transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md border pf-border pf-card flex items-center justify-center pf-text pf-hover transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md border pf-border pf-card flex items-center justify-center pf-text pf-hover transition-colors"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md border pf-border pf-card flex items-center justify-center pf-text pf-hover transition-colors"
              title="YouTube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="w-8 h-8 rounded-md border pf-border pf-card flex items-center justify-center pf-text pf-hover transition-colors"
              title="Email"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-8">
          <h2
            className="text-4xl pf-title mb-5 tracking-normal select-none"
            style={{
              fontFamily: '"Caveat", "Segoe Print", "Bradley Hand", cursive',
              fontWeight: 700,
            }}
          >
            {greeting}
          </h2>

          <div className="space-y-4 text-xs sm:text-[14px] pf-text leading-relaxed">
            <p>
              I&apos;m {PROFILE.name}, also known online as{' '}
              <strong className="pf-title font-medium">@{PROFILE.handle}</strong> on GitHub, LinkedIn, and Instagram — a full-stack MERN and TypeScript developer focused on building fast, reliable web and mobile applications.
            </p>
            <p>{PROFILE.bio}</p>
            <p>
              My recent work includes{' '}
              <strong className="pf-title font-medium">Talksy</strong> (a bidirectional real-time messaging app built on Node.js and Socket.io),{' '}
              <strong className="pf-title font-medium">Code Extractor</strong> (a client-side DOM asset extraction engine),{' '}
              <strong className="pf-title font-medium">SureScan</strong> (an industrial Data Matrix scanner in React Native), and a minimalist{' '}
              <strong className="pf-title font-medium">Sudoku</strong> web platform.
            </p>
            <p>
              Open to full-time remote roles and freelance projects:{' '}
              <button
                onClick={onOpenProjects}
                className="pf-title font-medium underline underline-offset-4 cursor-pointer"
              >
                Explore projects
              </button>{' '}
              •{' '}
              <button
                onClick={onOpenContact}
                className="pf-title font-medium underline underline-offset-4 cursor-pointer"
              >
                Get in touch
              </button>
              .
            </p>
          </div>
        </div>
      </div>

      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border">
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
        </div>
      </div>

      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border">
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
        </div>
      </div>

      <HatchedBand />

      <div className="w-full">
        <footer className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-9 flex flex-col items-center gap-4 text-xs pf-muted">
          <nav className="flex flex-wrap items-center justify-center gap-6 pf-text font-medium">
            <button onClick={onOpenHome} className="hover:underline cursor-pointer">
              Home
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:underline cursor-pointer"
            >
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
      </div>
    </div>
  );
}