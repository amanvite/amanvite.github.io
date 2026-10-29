import { MessageSquare, Code2, LayoutGrid } from 'lucide-react';

export const PROJECTS = [
  {
    id: 'p1',
    title: 'Talksy',
    description: 'Bidirectional messaging ecosystem. Maintained synchronous client states across distributed connections.',
    tech: ['JavaScript', 'Node.js', 'Socket.io', 'MongoDB'],
    link: 'https://github.com/amanvite',
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