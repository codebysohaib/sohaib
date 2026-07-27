export interface SkillItem {
  icon: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface ProjectItem {
  url?: string;
  visualClass: string;
  icon: string;
  type: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface TerminalLine {
  type: 'prompt' | 'output' | 'code' | 'comment';
  text?: string;
  html?: string;
}

export const terminalLines: TerminalLine[] = [
  { type: 'prompt', text: '$ node developer.js' },
  { type: 'output', text: '' },
  { type: 'code', html: '<span class="t-key">const</span> <span class="t-val">developer</span> = {' },
  { type: 'code', html: '  <span class="t-key">name</span>: <span class="t-str">"Sohaib"</span>,' },
  { type: 'code', html: '  <span class="t-key">role</span>: <span class="t-str">"Web & Android Dev"</span>,' },
  { type: 'code', html: '  <span class="t-key">skills</span>: [<span class="t-str">"React"</span>, <span class="t-str">"Tailwind"</span>, <span class="t-str">"Kotlin"</span>],' },
  { type: 'code', html: '  <span class="t-key">available</span>: <span class="t-val">true</span>,' },
  { type: 'code', html: '}' },
  { type: 'output', text: '' },
  { type: 'comment', text: '// Ready to build something great?' },
];

export const skillsData: SkillItem[] = [
  {
    icon: 'fab fa-html5',
    name: 'Frontend Engineering',
    desc: 'Pixel-perfect UIs with fluid animations. I bridge design and code to ship interfaces people enjoy using.',
    tags: ['HTML/CSS', 'JavaScript', 'React'],
  },
  {
    icon: 'fab fa-android',
    name: 'Native Android',
    desc: 'Performant mobile applications built with modern Android development architectures.',
    tags: ['Kotlin', 'Jetpack Compose', 'Android SDK'],
  },
  {
    icon: 'fas fa-wind',
    name: 'Design & Styling',
    desc: 'Translating beautiful designs into code with powerful CSS frameworks.',
    tags: ['Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    icon: 'fas fa-fire',
    name: 'Backend & Services',
    desc: 'Integrating cloud services and real-time databases for robust application backends.',
    tags: ['Firebase', 'Firestore', 'Authentication'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    url: 'https://uoncgpacalculator.vercel.app/',
    visualClass: 'pv-1',
    icon: 'fas fa-calculator',
    type: 'Web Application',
    name: 'CGPA Calculator',
    desc: 'A precise web tool for university students to calculate Semester and Cumulative GPA. Engineered for performance and ease of use.',
    tags: ['HTML/CSS', 'Tailwind', 'JavaScript'],
  },
  {
    url: 'https://learnspace-cbs.vercel.app/',
    visualClass: 'pv-2',
    icon: 'fab fa-android',
    type: 'Android Application',
    name: 'LearnSpace',
    desc: 'A comprehensive educational app providing students seamless access to resources. Built utilizing modern Android development.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase'],
  },
  {
    url: 'https://almohidkitchenhub.vercel.app/',
    visualClass: 'pv-3',
    icon: 'fas fa-shopping-cart',
    type: 'E-commerce App',
    name: 'Al Mohid Kitchen Store',
    desc: 'A recently built e-commerce application providing a seamless shopping experience for users.',
    tags: ['Next JS', 'Node.js', 'MongoDB'],
  },
  {
    visualClass: 'pv-4',
    icon: 'fas fa-link',
    type: 'Android Application',
    name: 'Unilink',
    desc: 'An upcoming Android application connecting university students. Currently in active development.',
    tags: ['Coming Soon'],
  },
  {
    url: 'https://cbsdocs.dev/',
    visualClass: 'pv-5',
    icon: 'fas fa-file-alt',
    type: 'Documentation',
    name: 'CBS Docs',
    desc: 'A comprehensive documentation platform for CBS services, built for speed and ease of use.',
    tags: ['HTML/CSS', 'JavaScript'],
  },
  {
    url: 'https://xenvo.codebysohaib.dev/',
    visualClass: 'pv-6',
    icon: 'fas fa-desktop',
    type: 'Desktop App',
    name: 'Xenvo POS',
    desc: 'A robust Point of Sale desktop application designed to streamline retail management operations.',
    tags: ['Desktop', 'UI/UX'],
  },
];
