import {
  BriefcaseBusiness,
  Code2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export const profile = {
  name: 'Basid Emam',
  role: 'Frontend Developer',
  location: 'India',
  email: 'hello@basidemam.dev',
  summary:
    'I build fast, responsive, and polished web experiences with clean component systems and practical user flows.',
  availability: 'Available for selected projects',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/',
      icon: Linkedin,
    },
    {
      label: 'Email',
      href: 'mailto:hello@basidemam.dev',
      icon: Mail,
    },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '20+', label: 'Delivered screens' },
  { value: '8+', label: 'Reusable patterns' },
  { value: '3x', label: 'Faster iteration' },
]

export const strengths = [
  {
    title: 'Component architecture',
    description:
      'Reusable sections, simple props, and data-driven rendering keep the UI easy to expand.',
    icon: Layers3,
  },
  {
    title: 'Responsive interfaces',
    description:
      'Layouts are built for mobile, tablet, and desktop without awkward jumps or clipped content.',
    icon: ShieldCheck,
  },
  {
    title: 'Polished delivery',
    description:
      'Spacing, states, copy, and performance are treated as part of the same product experience.',
    icon: Sparkles,
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'UI Craft',
    icon: Palette,
    skills: ['Responsive Design', 'Design Systems', 'Accessibility', 'Microinteractions'],
  },
  {
    title: 'Delivery',
    icon: Rocket,
    skills: ['Git Workflow', 'Performance', 'SEO Basics', 'Deployment'],
  },
]

export const projects = [
  {
    title: 'Portfolio System',
    description:
      'A component-based portfolio template with reusable content sections, theme support, and responsive layout.',
    tags: ['React', 'Tailwind', 'Vite'],
    links: [
      { label: 'Live', href: '#', icon: Globe2 },
      { label: 'Code', href: '#', icon: Github },
    ],
  },
  {
    title: 'Business Landing Page',
    description:
      'A conversion-focused page structure with strong hierarchy, accessible controls, and clean visual rhythm.',
    tags: ['UI Design', 'React', 'CSS'],
    links: [
      { label: 'Live', href: '#', icon: Globe2 },
      { label: 'Code', href: '#', icon: Github },
    ],
  },
  {
    title: 'Dashboard Components',
    description:
      'A compact interface kit for stats, lists, panels, and action states built for repeated daily use.',
    tags: ['Components', 'UX', 'Tailwind'],
    links: [
      { label: 'Live', href: '#', icon: Globe2 },
      { label: 'Code', href: '#', icon: Github },
    ],
  },
]

export const experience = [
  {
    period: '2025 - Present',
    title: 'Frontend Developer',
    company: 'Independent Projects',
    description:
      'Building responsive websites and React interfaces with attention to structure, maintainability, and usability.',
  },
  {
    period: '2024 - 2025',
    title: 'UI Implementation',
    company: 'Client Work',
    description:
      'Converted static page concepts into production-ready layouts using semantic markup and modern CSS.',
  },
  {
    period: '2023 - 2024',
    title: 'Web Foundations',
    company: 'Personal Practice',
    description:
      'Focused on HTML, CSS, JavaScript fundamentals, reusable patterns, and practical deployment workflows.',
  },
]

export const contactHighlights = [
  {
    title: 'Project builds',
    description: 'Landing pages, portfolio sites, and React interfaces.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Frontend cleanup',
    description: 'Component splits, Tailwind refactors, and responsive fixes.',
    icon: Layers3,
  },
]
