import { MessageSquare, Code2, Terminal } from 'lucide-react';

export const CORE_STACK = ["TypeScript", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Ubuntu Linux"];

export const PROJECTS = [
  {
    id: 'talksy',
    title: "Talksy Real-Time Engine",
    description: "Bidirectional messaging ecosystem. Maintained synchronous client states across distributed connections.",
    tech: ["JavaScript", "Node.js", "Socket.io", "MongoDB"],
    icon: <MessageSquare className="w-5 h-5" />,
    linkColor: "decoration-emerald-500",
    link: "https://github.com/amanvite/talksy"
  },
  {
    id: 'extractor',
    title: "Code Extractor",
    description: "A stealth extraction engine for dynamic web apps. Bypassed virtual DOM overhead via direct API manipulation.",
    tech: ["TypeScript", "HTML5", "DOM API"],
    icon: <Code2 className="w-5 h-5" />,
    linkColor: "decoration-pink-500",
    link: "https://github.com/amanvite/code-extractor"
  },
  {
    id: 'sudoku',
    title: "Minimalist Sudoku",
    description: "A sleek, minimalist Sudoku Web-App engineered for performance and a clean, distraction-free user experience.",
    tech: ["TypeScript", "Web API"],
    icon: <Terminal className="w-5 h-5" />,
    linkColor: "decoration-indigo-500",
    link: "https://github.com/amanvite/sudoku"
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    quote: "I collaborated with Aman on a full-stack project, and his approach to setting up the backend made my life on the frontend so much easier. He's meticulous with his TypeScript interfaces and genuinely fun to pair program with.",
    author: "Rohan Mehta",
    role: "Frontend Developer",
    initials: "RM"
  },
  {
    id: 't2',
    quote: "I hired Aman to build a custom extraction tool for my project. He didn't try to overcomplicate the stack or upsell me—he just wrote a lean, fast script that did exactly what I needed from day one.",
    author: "Jake Caldwell",
    role: "Indie Maker",
    initials: "JC"
  },
  {
    id: 't3',
    quote: "As a non-technical founder building an MVP, I was worried about finding the right developer. Aman walked me through every database decision patiently and delivered our React app weeks ahead of our launch target.",
    author: "Aditi Verma",
    role: "Early-stage Founder",
    initials: "AV"
  },
  {
    id: 't4',
    quote: "Aman helped me untangle a massive Socket.io state management issue on a side project. He didn't just fix it; he actually took the time to explain the real-time data flow to me. A really solid, reliable engineer.",
    author: "Haruto Tanaka",
    role: "Web Developer",
    initials: "HT"
  },
  {
    id: 't5',
    quote: "We partnered up on a few freelance gigs where I handled design and Aman handled the code. He translates UI components into clean React code perfectly, and he's incredibly responsive when changes are needed.",
    author: "Karthik Nair",
    role: "Freelance UI Designer",
    initials: "KN"
  }
];

export const BLOG_POSTS = [
  {
    id: 'why-zero-dependency-web-utilities',
    title: "Why I build zero-dependency web utilities",
    date: "Oct 12, 2026",
    excerpt: "Modern web development often defaults to reaching for npm first. Here is why writing pure DOM API code makes you a significantly better React engineer.",
    linkColor: "decoration-emerald-500",
    content: [
      "When I started building Code Extractor, the immediate temptation was to initialize a heavy framework. But I realized that for a tool meant to dynamically analyze other web applications, injecting virtual DOM overhead was architecturally counterproductive.",
      "Instead, I opted for raw DOM API manipulation. The performance gains were immediate. By avoiding state reconciliation loops, the script runs in a fraction of the time, utilizing a significantly smaller memory footprint.",
      "More importantly, stripping away the abstractions of React forces you to confront the browser's native rendering engine. Understanding exactly how the DOM tree repaints makes you a far more efficient React engineer when you do return to the framework."
    ]
  },
  {
    id: 'structuring-real-time-state-with-socket-IO',
    title: "Structuring real-time state with Socket.io",
    date: "Sep 28, 2026",
    excerpt: "Handling bidirectional data isn't just about emitting events; it's about keeping distributed client states synchronized without race conditions.",
    linkColor: "decoration-purple-500",
    content: [
      "Building the Talksy engine presented a classic distributed systems problem on a micro scale. When two clients emit state changes simultaneously, whose truth wins?",
      "The solution wasn't just slapping Socket.io onto an Express server. It required architecting a robust event acknowledgement system and maintaining a strict single source of truth in the Redis cache before committing to MongoDB.",
      "The biggest takeaway? Always design your web sockets to fail gracefully. Assume the connection will drop mid-event, and engineer the reconnection logic to seamlessly diff the client state against the server state."
    ]
  }
];