import { useState, useEffect } from 'react';
import { PROFILE } from '../data';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  MailIcon,
  CodeBracketIcon,
  ClockIcon,
  CopyIcon,
  CheckIcon,
} from '../components/Icons';

function HatchedBand() {
  return <div className="w-full h-7 border-b pf-border pf-hatch" />;
}

export default function Contact({
  onOpenHome,
  onOpenAbout,
  onOpenProjects,
}: {
  onOpenHome: () => void;
  onOpenAbout: () => void;
  onOpenProjects: () => void;
}) {
  const [timeStr, setTimeStr] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 15000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full">
      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-7">
          <h1 className="text-2xl sm:text-3xl font-bold pf-title tracking-tight mb-2">
            Contact
          </h1>
          <p className="text-xs sm:text-[13.5px] pf-text leading-relaxed max-w-xl">
            Get in touch with {PROFILE.name} (@{PROFILE.handle}) for full-time remote roles and freelance MERN, TypeScript, and full-stack projects.
          </p>
        </div>
      </div>

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-5">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-xs"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            <div className="flex items-center gap-3 sm:col-span-2">
              <span className="w-6 h-6 rounded border pf-border pf-subtle flex items-center justify-center shrink-0 pf-muted">
                <CodeBracketIcon className="w-3.5 h-3.5" />
              </span>
              <span className="pf-title font-medium">
                Systems Engineer &amp; Full-Stack Developer
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded border pf-border pf-subtle flex items-center justify-center shrink-0 pf-muted">
                <MailIcon className="w-3.5 h-3.5" />
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="pf-title hover:underline truncate"
              >
                {PROFILE.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded border pf-border pf-subtle flex items-center justify-center shrink-0 pf-muted">
                <ClockIcon className="w-3.5 h-3.5" />
              </span>
              <span className="pf-title">
                {timeStr || '02:30 PM'}{' '}
                <span className="pf-muted">// IST</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-4 relative">
          <div
            className="hidden lg:flex items-center absolute -left-[104px] top-1.5 z-20 pf-muted select-none pointer-events-none"
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
              title="Send Email"
            >
              <MailIcon className="w-4 h-4" />
            </a>
            <button
              onClick={copyEmail}
              className="h-8 px-2.5 rounded-md border pf-border pf-card inline-flex items-center gap-1.5 text-[11px] font-mono pf-text pf-hover transition-colors cursor-pointer"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5 pf-muted" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-7 space-y-4 text-xs sm:text-[13.5px] pf-text leading-relaxed">
          <p>
            I&apos;m open to full-time remote roles and freelance projects: React and TypeScript web applications, real-time Socket.io architectures, React Native mobile apps, and Node.js APIs. Email is the fastest way to reach me, and I usually reply within a day.
          </p>
          <p>
            You can also connect with me on{' '}
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="pf-title font-medium underline underline-offset-4"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="pf-title font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            ,{' '}
            <a
              href={PROFILE.instagram}
              target="_blank"
              rel="noreferrer"
              className="pf-title font-medium underline underline-offset-4"
            >
              Instagram
            </a>
            , or{' '}
            <a
              href={PROFILE.youtube}
              target="_blank"
              rel="noreferrer"
              className="pf-title font-medium underline underline-offset-4"
            >
              YouTube
            </a>
            .
          </p>
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
            <button onClick={onOpenProjects} className="hover:underline cursor-pointer">
              Projects
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:underline cursor-pointer"
            >
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