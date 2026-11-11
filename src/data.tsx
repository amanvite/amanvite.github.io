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

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  period: string;
  degreeShort: string;
  field: string;
  summary: string;
  skills: string[];
}

export const PROFILE = {
  name: 'Aman Verma',
  handle: 'amanvite',
  role: 'Full-Stack MERN & TypeScript Developer',
  email: 'info.amanvite@gmail.com',
  resumeUrl: '/resume.pdf',
  github: 'https://github.com/amanvite',
  linkedin: 'https://www.linkedin.com/in/amanvite/',
  instagram: 'https://www.instagram.com/amanvite',
  youtube: 'https://www.youtube.com/@amanvitee',
  avatar: 'https://github.com/amanvite.png',
  banner:
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
  availability:
    "I'm open to full-time remote roles and freelance projects: React and TypeScript web applications, real-time Socket.io architectures, React Native mobile apps, and Node.js APIs. Email is the fastest way to reach me, and I usually reply within a day.",
};

export const EDUCATION: EducationItem[] = [
  {
    id: 'muj-bca',
    institution: 'Manipal University Jaipur',
    location: 'Jaipur, Rajasthan',
    period: '2025–2028',
    degreeShort: 'BCA',
    field: 'Computer Applications & Software Engineering',
    summary:
      'Bachelor of Computer Applications in Computer Science and Software Engineering.',
    skills: ['TypeScript', 'Data Structures & Algorithms', 'Web Development'],
  },
];

export const STACK: StackRow[] = [
  {
    num: '01',
    category: 'Language',
    items: [
      { name: 'TypeScript', icon: 'ts' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'Kotlin', icon: 'kotlin' },
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
      { name: 'Android / Kotlin', icon: 'kotlin' },
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
    id: 'video-hunt',
    repoName: 'amanvite/video-hunt',
    title: 'Video Hunt',
    tag: 'MEDIA TOOL',
    branch: 'main',
    commitSha: 'a4c91e2',
    description:
      'A simple tool for downloading videos and audio with fast stream parsing and format selection.',
    notes:
      'Lightweight media extraction workflow built with JavaScript and asynchronous stream handling.',
    tech: ['JavaScript', 'Node.js', 'REST APIs'],
    langBar: [
      { name: 'JavaScript', pct: 86, color: '#F7DF1E' },
      { name: 'HTML', pct: 8, color: '#E34F26' },
      { name: 'CSS', pct: 6, color: '#563D7C' },
    ],
    link: 'https://github.com/amanvite/video-hunt',
    githubUrl: 'https://github.com/amanvite/video-hunt',
  },
  {
    id: 'code-extractor',
    repoName: 'amanvite/code-extractor',
    title: 'Code Extractor',
    tag: 'WEB EXTRACTION',
    branch: 'main',
    commitSha: '3c9e7b4',
    description:
      'A full-stack web extraction tool for retrieving and formatting dynamic DOM assets.',
    notes:
      'Direct DOM traversal pipeline that parses, formats, and packages HTML, CSS, and JS assets.',
    tech: ['TypeScript', 'HTML5', 'DOM API'],
    langBar: [
      { name: 'TypeScript', pct: 84, color: '#3178C6' },
      { name: 'HTML', pct: 10, color: '#E34F26' },
      { name: 'CSS', pct: 6, color: '#563D7C' },
    ],
    link: 'https://code-extractor-plus.vercel.app/',
    githubUrl: 'https://github.com/amanvite/code-extractor',
  },
  {
    id: 'surescan',
    repoName: 'amanvite/SureScan',
    title: 'SureScan',
    tag: 'MOBILE SCANNER',
    branch: 'main',
    commitSha: '9b2f41e',
    description:
      'Mobile scanner application built to decode dot-peen Data Matrix Codes on laser-etched metal parts.',
    notes:
      'High-contrast frame preprocessing and matrix decoding built natively with Kotlin.',
    tech: ['Kotlin', 'Android', 'Vision API'],
    langBar: [{ name: 'Kotlin', pct: 100, color: '#7F52FF' }],
    link: 'https://github.com/amanvite/SureScan',
    githubUrl: 'https://github.com/amanvite/SureScan',
  },
];

export const UTILITY_PACKAGES: UtilityItem[] = [
  {
    name: 'article-unblocker',
    version: 'v1.0.0',
    type: 'WEB TOOL',
    description:
      'A lightweight web tool for accessing archived articles and bypassing soft paywalls.',
    tech: ['HTML5', 'JavaScript', 'DOM API'],
    link: 'https://github.com/amanvite/article-unblocker',
  },
  {
    name: 'open-directory-finder',
    version: 'v1.4.0',
    type: 'SEARCH UTILITY',
    description:
      'A lightweight tool for discovering publicly indexed file directories across multiple search engines.',
    tech: ['HTML5', 'JavaScript', 'Query DSL'],
    link: 'https://github.com/amanvite/open-directory-finder',
  },
];