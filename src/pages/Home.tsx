import React, { useState, useEffect } from 'react';

const NAV_SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

const STACK = [
  {
    num: '01',
    category: 'Language',
    items: [
      { name: 'TypeScript', dot: '#3178C6' },
      { name: 'JavaScript', dot: '#F7DF1E' },
      { name: 'Python 3', dot: '#3776AB' },
    ],
  },
  {
    num: '02',
    category: 'Frontend',
    items: [
      { name: 'React', dot: '#61DAFB' },
      { name: 'Vite', dot: '#646CFF' },
      { name: 'Tailwind CSS', dot: '#06B6D4' },
      { name: 'HTML5 / CSS3', dot: '#E34F26' },
      { name: 'DOM API', dot: '#52525B' },
    ],
  },
  {
    num: '03',
    category: 'Mobile',
    items: [
      { name: 'React Native', dot: '#61DAFB' },
      { name: 'Expo', dot: '#18181B' },
    ],
  },
  {
    num: '04',
    category: 'Backend',
    items: [
      { name: 'Node.js', dot: '#339933' },
      { name: 'Express.js', dot: '#52525B' },
      { name: 'Socket.io', dot: '#18181B' },
      { name: 'REST APIs', dot: '#6366F1' },
    ],
  },
  {
    num: '05',
    category: 'Database',
    items: [{ name: 'MongoDB', dot: '#47A248' }],
  },
  {
    num: '06',
    category: 'Tools & DevOps',
    items: [
      { name: 'Git & GitHub', dot: '#F05032' },
      { name: 'Vercel', dot: '#18181B' },
      { name: 'GitHub Pages', dot: '#2563EB' },
    ],
  },
];

const PROJECTS = [
  {
    id: 'p1',
    title: 'Talksy',
    tag: 'REAL-TIME ENGINE',
    status: 'ACTIVE',
    description:
      'Bidirectional messaging ecosystem maintaining synchronous client states across distributed WebSocket connections.',
    tech: ['JavaScript', 'Node.js', 'Socket.io', 'MongoDB'],
    link: 'https://github.com/amanvite',
  },
  {
    id: 'p2',
    title: 'Code Extractor',
    tag: 'WEB UTILITY',
    status: 'LIVE',
    description:
      'A stealth extraction engine for dynamic web apps. Bypasses virtual DOM overhead via direct API manipulation.',
    tech: ['TypeScript', 'HTML5', 'DOM API'],
    link: 'https://code-extractor-plus.vercel.app/',
  },
  {
    id: 'p3',
    title: 'Sudoku Game',
    tag: 'BROWSER GAME',
    status: 'LIVE',
    description:
      'A sleek, minimalist Sudoku web application engineered for performance, local stats tracking, and a distraction-free UI.',
    tech: ['TypeScript', 'Web API', 'CSS3'],
    link: 'https://amanvite.github.io/sudoku/',
  },
  {
    id: 'p4',
    title: 'SureScan',
    tag: 'INDUSTRIAL APP',
    status: 'PROTOTYPE',
    description:
      'Cross-platform mobile application engineered to scan and decode dot-peen Data Matrix Codes on laser-etched metal components.',
    tech: ['React Native', 'TypeScript', 'Vision API'],
    link: 'https://github.com/amanvite',
  },
];

function HatchedDivider() {
  return (
    <div
      className="w-full h-6 border-y border-zinc-200"
      style={{
        backgroundImage:
          'repeating-linear-gradient(-45deg, #f4f4f5, #f4f4f5 1px, transparent 1px, transparent 8px)',
      }}
    />
  );
}

export default function Home() {
  const [greeting, setGreeting] = useState('Good morning');
  const [timeStr, setTimeStr] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Inject Google Fonts safely into <head>
  useEffect(() => {
    const fontId = 'portfolio-google-fonts';
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=JetBrains+Mono:wght@400;500;600&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Greeting & Live Clock
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    const updateClock = () => {
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
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Bulletproof Scroll-Spy for Right Index Sidebar
  useEffect(() => {
    const onScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= docHeight - 60) {
        setActiveSection(NAV_SECTIONS[NAV_SECTIONS.length - 1].id);
        return;
      }

      const triggerLine = 220;
      let current = NAV_SECTIONS[0].id;

      for (const sec of NAV_SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            current = sec.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('info.amanvite@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const activeIdx = Math.max(
    0,
    NAV_SECTIONS.findIndex((s) => s.id === activeSection)
  );

  return (
    <div className="max-w-[1160px] mx-auto px-4 sm:px-6 flex justify-center gap-10 relative">
      {/* MAIN BLUEPRINT COLUMN */}
      <main className="w-full max-w-[740px] border-x border-zinc-200 bg-white min-h-screen">
        {/* ================= 1. HERO / HOME ================= */}
        <section id="home" className="scroll-mt-20">
          {/* Scenic Banner */}
          <div className="p-3 sm:p-4 pb-0">
            <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden border border-zinc-200 bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
                alt="Cover Banner"
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

          {/* Overlapping Avatar + Name Row */}
          <div className="px-5 sm:px-7 -mt-9 sm:-mt-11 relative z-10 flex items-end gap-4 mb-4">
            <img
              src="https://github.com/amanvite.png"
              alt="Aman Verma"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white shadow-md bg-zinc-100 shrink-0"
            />
            <div className="pb-1">
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                  Aman Verma
                </h1>
                {/* Verified Badge SVG */}
                <svg
                  className="w-5 h-5 text-blue-500 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z" />
                </svg>
              </div>
              <p
                className="text-xs text-zinc-400"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                @amanvite
              </p>
            </div>
          </div>

          {/* Tagline & CTA Buttons */}
          <div className="px-5 sm:px-7 pb-6">
            <p className="text-[13.5px] text-zinc-600 mb-5">
              Systems Engineer • Full-Stack MERN & TypeScript Developer.
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="px-3.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-md transition-colors"
              >
                View projects
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-200 text-xs font-medium rounded-md transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <svg
                      className="w-3.5 h-3.5 text-emerald-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-3.5 h-3.5 text-zinc-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    <span>info.amanvite@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links Bar with Handwritten Callout */}
          <div className="px-5 sm:px-7 py-3.5 border-t border-zinc-200 flex items-center justify-between bg-zinc-50/50 relative">
            <div
              className="hidden xl:flex items-center gap-1 absolute -left-28 top-2.5 text-zinc-400 select-none pointer-events-none"
              style={{ fontFamily: '"Caveat", cursive' }}
            >
              <span className="text-lg -rotate-6">Follow me</span>
              <svg
                className="w-6 h-6 text-zinc-300 translate-y-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M4 12c4 4 10 4 15 0m0 0l-3-3m3 3l-3 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/amanvite"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all"
                title="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/amanvite/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:info.amanvite@gmail.com"
                className="p-2 rounded-md border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all"
                title="Email"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>

            <div
              className="text-[11px] text-zinc-400"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              MERN • TypeScript
            </div>
          </div>
        </section>

        <HatchedDivider />

        {/* ================= 2. ABOUT SECTION ================= */}
        <section id="about" className="px-5 sm:px-7 py-8 scroll-mt-20">
          {/* Handwritten Greeting matching screenshot */}
          <h2
            className="text-4xl text-zinc-900 mb-4 tracking-normal select-none"
            style={{
              fontFamily: '"Caveat", "Segoe Print", "Bradley Hand", cursive',
              fontWeight: 700,
            }}
          >
            {greeting}
          </h2>

          <p className="text-[15px] text-zinc-600 leading-relaxed">
            I architect and engineer scalable web ecosystems, focusing strictly on the MERN stack and robust TypeScript environments. I build products end-to-end: from database persistence and server-side logic to client-side DOM execution.
          </p>
        </section>

        <HatchedDivider />

        {/* ================= 3. STACK SECTION ================= */}
        <section id="stack" className="scroll-mt-20">
          <div className="px-5 sm:px-7 py-5 border-b border-zinc-200">
            <h2 className="text-lg font-bold text-zinc-900 tracking-tight">
              Stack
            </h2>
          </div>

          <div className="divide-y divide-zinc-200">
            {STACK.map((row) => (
              <div
                key={row.num}
                className="grid grid-cols-1 sm:grid-cols-[180px_1fr] hover:bg-zinc-50/60 transition-colors"
              >
                <div className="px-5 sm:px-7 py-3.5 sm:border-r border-zinc-200 flex items-center gap-3">
                  <span
                    className="text-[11px] text-zinc-400"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    {row.num}
                  </span>
                  <span className="text-xs font-semibold text-zinc-700">
                    {row.category}
                  </span>
                </div>

                <div className="px-5 sm:px-6 pb-4 sm:py-3 flex flex-wrap items-center gap-2">
                  {row.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-zinc-200 bg-white text-xs font-medium text-zinc-700"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.dot }}
                      />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <HatchedDivider />

        {/* ================= 4. PROJECTS SECTION (No Stock Photos, Architectural Grid) ================= */}
        <section id="projects" className="scroll-mt-20">
          <div className="px-5 sm:px-7 py-5 border-b border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-zinc-900 tracking-tight">
                Projects
              </h2>
              <span
                className="text-xs text-zinc-400"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                ({PROJECTS.length})
              </span>
            </div>
            <a
              href="https://github.com/amanvite"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-1"
            >
              View GitHub
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:gap-px bg-zinc-200">
            {PROJECTS.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group bg-white p-6 flex flex-col justify-between hover:bg-zinc-50/80 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      0{index + 1} // {project.tag}
                    </span>
                    <svg
                      className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-zinc-700 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded text-[11px] font-medium border border-zinc-200/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <HatchedDivider />

        {/* ================= 5. EDUCATION SECTION ================= */}
        <section id="education" className="scroll-mt-20">
          <div className="px-5 sm:px-7 py-5 border-b border-zinc-200">
            <h2 className="text-lg font-bold text-zinc-900 tracking-tight">
              Education
            </h2>
          </div>

          <div className="px-5 sm:px-7 py-6">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center shrink-0 mt-0.5 text-zinc-600">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-zinc-900">
                    Manipal University Jaipur
                  </h3>
                  <span
                    className="text-xs text-zinc-400"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    Expected 2028
                  </span>
                </div>

                <p className="text-xs text-zinc-500 mb-3">
                  Bachelor of Computer Applications (BCA)
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Data Structures & Algorithms',
                    'Full-Stack Web Development',
                    'Database Management Systems',
                    'Object-Oriented Programming',
                  ].map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-[11px] text-zinc-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <HatchedDivider />

        {/* ================= FOOTER ================= */}
        <footer className="px-5 sm:px-7 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <span>
            Open to a good conversation.{' '}
            <a
              href="mailto:info.amanvite@gmail.com"
              className="text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 transition-colors"
            >
              Say hi.
            </a>
          </span>
          <span
            className="text-[11px]"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            © {new Date().getFullYear()} Aman Verma
          </span>
        </footer>
      </main>

      {/* ================= RIGHT STICKY SCROLL-SPY INDEX ================= */}
      <aside className="hidden lg:block w-40 shrink-0">
        <div className="sticky top-24 pt-2">
          <h4
            className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3 pl-4"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            Index
          </h4>

          <div className="relative border-l border-zinc-200">
            {/* Sliding Active Bar Indicator */}
            <div
              className="absolute -left-[1.5px] top-0 w-[2px] h-8 bg-zinc-900 transition-transform duration-200 ease-out"
              style={{ transform: `translateY(${activeIdx * 32}px)` }}
            />

            <nav className="flex flex-col">
              {NAV_SECTIONS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`h-8 flex items-center pl-4 text-xs transition-all duration-200 ${
                      isActive
                        ? 'text-zinc-900 font-semibold translate-x-1'
                        : 'text-zinc-400 hover:text-zinc-700 font-normal'
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