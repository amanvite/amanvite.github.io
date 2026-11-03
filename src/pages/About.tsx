import { useState, useEffect } from 'react';
import { PROFILE, STACK } from '../data';
import {
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
  MailIcon,
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

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  return (
    <div className="w-full">
      <HatchedBand />

      {/* Title Block */}
      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-6 sm:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold pf-title tracking-tight mb-2">
            About {PROFILE.name}
          </h1>
          <p className="text-xs sm:text-[13.5px] pf-text leading-relaxed max-w-2xl">
            Get a quick overview of {PROFILE.name} (@{PROFILE.handle})&apos;s background, tech stack, education, and the web and mobile applications shipped.
          </p>
        </div>
      </div>

      {/* Social Bar */}
      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-6 sm:px-8 py-3.5 flex items-center gap-2.5">
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

      <HatchedBand />

      {/* Bio Narrative */}
      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-6 sm:px-8 py-8">
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
              <strong className="pf-title font-medium">@{PROFILE.handle}</strong> on GitHub and LinkedIn — a Systems Engineer and full-stack developer focused on building fast, reliable web and mobile applications.
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

      {/* Stack Section */}
      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border">
          <div className="px-6 sm:px-8 py-5 border-b pf-border">
            <h2 className="text-xl font-bold pf-title tracking-tight">Stack</h2>
          </div>

          <div className="divide-y pf-divide">
            {STACK.map((row) => (
              <div
                key={row.num}
                className="grid grid-cols-1 sm:grid-cols-[180px_1fr] px-6 sm:px-8 py-4 items-start sm:items-center gap-2 sm:gap-4"
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
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border pf-border pf-card text-xs font-medium pf-title shadow-2xs"
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

      {/* Education Section */}
      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border">
          <div className="px-6 sm:px-8 py-5 border-b pf-border">
            <h2 className="text-xl font-bold pf-title tracking-tight">
              Education
            </h2>
          </div>

          <div className="px-6 sm:px-8 py-6">
            <div className="border-l pf-border ml-2 pl-5 relative">
              <span className="w-2 h-2 rounded-full pf-indicator absolute -left-[4.5px] top-1.5" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="text-sm font-bold pf-title">
                  Manipal University Jaipur
                </h3>
                <span
                  className="text-xs pf-muted"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  Expected 2028
                </span>
              </div>
              <p className="text-xs pf-text">
                Bachelor of Computer Applications (BCA)
              </p>
            </div>
          </div>
        </div>
      </div>

      <HatchedBand />

      {/* Quote Block */}
      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-6 sm:px-8 py-14 text-center">
          <div className="text-3xl font-serif pf-muted mb-3 select-none">&rdquo;</div>
          <blockquote className="text-base sm:text-lg italic font-serif pf-title max-w-md mx-auto mb-4">
            &ldquo;It always seems impossible until it&apos;s done.&rdquo;
          </blockquote>
          <div
            className="text-[10px] pf-muted uppercase tracking-[0.2em]"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            &mdash; NELSON MANDELA &mdash;
          </div>
        </div>
      </div>

      {/* Bottom Footer Links */}
      <div className="w-full">
        <footer className="max-w-[820px] mx-auto border-x pf-border px-6 sm:px-8 py-8 flex flex-col items-center gap-4 text-xs pf-muted">
          <div className="flex flex-wrap items-center justify-center gap-6 pf-text font-medium">
            <button onClick={onOpenHome} className="hover:underline cursor-pointer">
              Overview
            </button>
            <button onClick={onOpenProjects} className="hover:underline cursor-pointer">
              Projects
            </button>
            <button onClick={onOpenContact} className="hover:underline cursor-pointer">
              Contact
            </button>
          </div>
          <div
            className="text-[11px]"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            © {new Date().getFullYear()} {PROFILE.name}.
          </div>
        </footer>
      </div>
    </div>
  );
}