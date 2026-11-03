export interface StackItem {
  name: string;
  icon: string;
}

export interface StackRow {
  num: string;
  category: string;
  items: StackItem[];
}

export interface ProjectItem {
  id: string;
  repoName: string;
  title: string;
  tag: string;
  branch: string;
  commitSha: string;
  description: string;
  notes: string;
  tech: string[];
  langBar: { name: string; pct: number; color: string }[];
  link: string;
  githubUrl: string;
}

export interface UtilityItem {
  name: string;
  version: string;
  type: string;
  description: string;
  tech: string[];
  link: string;
}

export const PROFILE = {
  name: 'Aman Verma',
  handle: 'amanvite',
  role: 'Systems Engineer • Full-Stack MERN & TypeScript Developer',
  email: 'info.amanvite@gmail.com',
  github: 'https://github.com/amanvite',
  linkedin: 'https://www.linkedin.com/in/amanvite/',
  youtube: 'https://www.youtube.com/@amanvitee',
  avatar: 'https://github.com/amanvite.png',
  banner:
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
  bio: 'I architect and engineer scalable web ecosystems, focusing strictly on the MERN stack and robust TypeScript environments. I build products end-to-end: from database persistence and server-side logic to client-side DOM execution.',
};

export const STACK: StackRow[] = [
  {
    num: '01',
    category: 'Language',
    items: [
      { name: 'TypeScript', icon: 'ts' },
      { name: 'JavaScript', icon: 'js' },
    ],
  },
  {
    num: '02',
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'React', icon: 'react' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'DOM API', icon: 'dom' },
      { name: 'Prism.js', icon: 'prism' },
    ],
  },
  {
    num: '03',
    category: 'Mobile',
    items: [
      { name: 'React Native', icon: 'react' },
      { name: 'Expo', icon: 'expo' },
    ],
  },
  {
    num: '04',
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Socket.io', icon: 'socket' },
      { name: 'REST APIs', icon: 'api' },
    ],
  },
  {
    num: '05',
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: 'mongo' },
      { name: 'Mongoose', icon: 'mongoose' },
      { name: 'LocalStorage', icon: 'storage' },
    ],
  },
  {
    num: '06',
    category: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'GitHub Pages', icon: 'ghpages' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'talksy',
    repoName: 'amanvite/talksy',
    title: 'Talksy',
    tag: 'REAL-TIME ENGINE',
    branch: 'main',
    commitSha: '8f4d2a1',
    description:
      'Bidirectional messaging ecosystem. Maintained synchronous client states across distributed connections.',
    notes:
      'Event-driven WebSocket rooms with low-latency state sync and MongoDB persistence.',
    tech: ['JavaScript', 'Node.js', 'Socket.io', 'MongoDB'],
    langBar: [
      { name: 'JavaScript', pct: 78, color: '#F7DF1E' },
      { name: 'CSS', pct: 14, color: '#563D7C' },
      { name: 'HTML', pct: 8, color: '#E34F26' },
    ],
    link: 'https://github.com/amanvite',
    githubUrl: 'https://github.com/amanvite',
  },
  {
    id: 'code-extractor',
    repoName: 'amanvite/code-extractor-plus',
    title: 'Code Extractor',
    tag: 'WEB UTILITY',
    branch: 'main',
    commitSha: '3c9e7b4',
    description:
      'A stealth extraction engine for dynamic web apps. Bypassed virtual DOM overhead via direct API manipulation.',
    notes:
      'Direct DOM traversal pipeline that parses, formats, and packages HTML, CSS, and JS assets.',
    tech: ['TypeScript', 'HTML5', 'DOM API'],
    langBar: [
      { name: 'TypeScript', pct: 84, color: '#3178C6' },
      { name: 'HTML', pct: 10, color: '#E34F26' },
      { name: 'CSS', pct: 6, color: '#563D7C' },
    ],
    link: 'https://code-extractor-plus.vercel.app/',
    githubUrl: 'https://github.com/amanvite',
  },
  {
    id: 'sudoku',
    repoName: 'amanvite/sudoku',
    title: 'Sudoku Game',
    tag: 'BROWSER GAME',
    branch: 'gh-pages',
    commitSha: 'e14a90c',
    description:
      'A sleek, minimalist Sudoku Web-App engineered for performance and a clean, distraction-free user experience.',
    notes:
      'Backtracking board generator with local practice statistics and zero UI library overhead.',
    tech: ['TypeScript', 'Web API', 'CSS3'],
    langBar: [
      { name: 'TypeScript', pct: 72, color: '#3178C6' },
      { name: 'CSS', pct: 20, color: '#563D7C' },
      { name: 'HTML', pct: 8, color: '#E34F26' },
    ],
    link: 'https://amanvite.github.io/sudoku/',
    githubUrl: 'https://github.com/amanvite/sudoku',
  },
  {
    id: 'surescan',
    repoName: 'amanvite/surescan-dmc',
    title: 'SureScan',
    tag: 'INDUSTRIAL MOBILE',
    branch: 'main',
    commitSha: '9b2f41e',
    description:
      'Cross-platform mobile scanner built to decode dot-peen Data Matrix Codes on laser-etched metal parts.',
    notes:
      'High-contrast frame preprocessing built with React Native and TypeScript.',
    tech: ['React Native', 'TypeScript', 'Expo'],
    langBar: [
      { name: 'TypeScript', pct: 94, color: '#3178C6' },
      { name: 'JavaScript', pct: 6, color: '#F7DF1E' },
    ],
    link: 'https://github.com/amanvite',
    githubUrl: 'https://github.com/amanvite',
  },
];

export const UTILITY_PACKAGES: UtilityItem[] = [
  {
    name: 'open-directory-finder',
    version: 'v1.4.0',
    type: 'SEARCH UTILITY',
    description:
      'Directory search query tool aggregating results across Google, DuckDuckGo, Startpage, Searx, and FilePursuit.',
    tech: ['JavaScript', 'Query DSL', 'DOM API'],
    link: 'https://github.com/amanvite',
  },
  {
    name: 'code-extractor-core',
    version: 'v2.0.1',
    type: 'ASSET PARSER',
    description:
      'Client-side source extraction module with Prism.js formatting and asset bundling.',
    tech: ['TypeScript', 'Prism.js', 'Vite'],
    link: 'https://code-extractor-plus.vercel.app/',
  },
];