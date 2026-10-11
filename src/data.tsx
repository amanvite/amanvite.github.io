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

export const BLOG_POSTS = [
  {
    id: 'post-1',
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
    id: 'post-2',
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