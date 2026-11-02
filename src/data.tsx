export interface StackCategory {
  num: string;
  category: string;
  items: { name: string; color: string }[];
}

export const STACK: StackCategory[] = [
  {
    num: '01',
    category: 'Language',
    items: [
      { name: 'TypeScript', color: 'bg-blue-500' },
      { name: 'JavaScript', color: 'bg-yellow-400' },
      { name: 'Python 3', color: 'bg-sky-600' },
    ],
  },
  {
    num: '02',
    category: 'Frontend',
    items: [
      { name: 'React', color: 'bg-cyan-400' },
      { name: 'Vite', color: 'bg-purple-500' },
      { name: 'Tailwind CSS', color: 'bg-teal-400' },
      { name: 'HTML5 / CSS3', color: 'bg-orange-500' },
      { name: 'DOM API', color: 'bg-zinc-700' },
    ],
  },
  {
    num: '03',
    category: 'Mobile',
    items: [
      { name: 'React Native', color: 'bg-blue-400' },
      { name: 'Expo', color: 'bg-zinc-900' },
    ],
  },
  {
    num: '04',
    category: 'Backend',
    items: [
      { name: 'Node.js', color: 'bg-emerald-500' },
      { name: 'Express.js', color: 'bg-zinc-600' },
      { name: 'Socket.io', color: 'bg-zinc-900' },
      { name: 'REST APIs', color: 'bg-indigo-500' },
    ],
  },
  {
    num: '05',
    category: 'Database',
    items: [
      { name: 'MongoDB', color: 'bg-green-600' },
    ],
  },
  {
    num: '06',
    category: 'Tools & DevOps',
    items: [
      { name: 'Git & GitHub', color: 'bg-zinc-800' },
      { name: 'Vercel', color: 'bg-zinc-900' },
      { name: 'GitHub Pages', color: 'bg-blue-600' },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'p1',
    title: 'Talksy',
    tag: 'REAL-TIME ENGINE',
    description: 'Bidirectional messaging ecosystem maintaining synchronous client states across distributed WebSocket connections.',
    tech: ['JavaScript', 'Node.js', 'Socket.io', 'MongoDB'],
    link: 'https://github.com/amanvite',
  },
  {
    id: 'p2',
    title: 'Code Extractor',
    tag: 'WEB UTILITY',
    description: 'A stealth extraction engine for dynamic web apps. Bypasses virtual DOM overhead via direct API manipulation.',
    tech: ['TypeScript', 'HTML5', 'DOM API'],
    link: 'https://code-extractor-plus.vercel.app/',
  },
  {
    id: 'p3',
    title: 'Sudoku Game',
    tag: 'BROWSER GAME',
    description: 'A sleek, minimalist Sudoku web application engineered for performance, local stats tracking, and a distraction-free UI.',
    tech: ['TypeScript', 'Web API', 'CSS3'],
    link: 'https://amanvite.github.io/sudoku/',
  },
  {
    id: 'p4',
    title: 'SureScan',
    tag: 'INDUSTRIAL APP',
    description: 'Cross-platform mobile application engineered to scan and decode dot-peen Data Matrix Codes on laser-etched metal components.',
    tech: ['React Native', 'TypeScript', 'Vision API'],
    link: 'https://github.com/amanvite',
  },
];