import { MessageSquare, Code2, LayoutGrid } from 'lucide-react';

export const PROJECTS = [
  {
    id: 'p1',
    title: 'Talksy',
    description: 'Bidirectional messaging ecosystem. Maintained synchronous client states across distributed connections.',
    tech: ['JavaScript', 'Node.js', 'Socket.io', 'MongoDB'],
    link: 'https://github.com/amanvite/talksy/', // Update this if Talksy has a live link
    icon: <MessageSquare className="w-5 h-5" />,
    linkColor: 'decoration-emerald-500'
  },
  {
    id: 'p2',
    title: 'Code Extractor',
    description: 'A stealth extraction engine for dynamic web apps. Bypassed virtual DOM overhead via direct API manipulation.',
    tech: ['TypeScript', 'HTML5', 'DOM API'],
    link: 'https://code-extractor-plus.vercel.app/',
    icon: <Code2 className="w-5 h-5" />,
    linkColor: 'decoration-pink-500'
  },
  {
    id: 'p3',
    title: 'Sudoku Game',
    description: 'A sleek, minimalist Sudoku Web-App engineered for performance and a clean, distraction-free user experience.',
    tech: ['TypeScript', 'Web API'],
    link: 'https://amanvite.github.io/sudoku/',
    icon: <LayoutGrid className="w-5 h-5" />,
    linkColor: 'decoration-blue-500'
  }
];

export const BLOG_POSTS = [
  {
    id: 'zero-dependency',
    title: 'Why I build zero-dependency web utilities',
    excerpt: 'Modern web development often defaults to reaching for npm first. Here is why writing pure DOM API code makes you a significantly better React engineer.',
    date: 'Oct 12, 2026',
    linkColor: 'decoration-emerald-500',
    content: [
      'Modern web development often defaults to reaching for npm first. Here is why writing pure DOM API code makes you a significantly better React engineer.',
      'By removing the abstraction layer of a heavy framework, you are forced to understand exactly how the browser renders and paints pixels on the screen.'
    ]
  },
  {
    id: 'socket-io-state',
    title: 'Structuring real-time state with Socket.io',
    excerpt: "Handling bidirectional data isn't just about emitting events; it's about keeping distributed client states synchronized without race conditions.",
    date: 'Sep 28, 2026',
    linkColor: 'decoration-blue-500',
    content: [
      "Handling bidirectional data isn't just about emitting events; it's about keeping distributed client states synchronized without race conditions.",
      "When building Talksy, the biggest hurdle wasn't the connection itself, but ensuring that when user A types, user B sees the state perfectly mirrored without a millisecond of layout shift."
    ]
  }
];