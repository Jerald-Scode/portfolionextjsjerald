export const SITE_CONFIG = {
  title: "Jerald's Portfolio",
  description: "Professional portfolio showcasing projects, skills, and expertise in full-stack web development",
  author: "Jerald",
  email: "jerald@example.com",
  year: 2026,
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/jerald", icon: "⚙️" },
  { name: "LinkedIn", url: "https://linkedin.com/in/jerald", icon: "💼" },
  { name: "Twitter", url: "https://twitter.com/jerald", icon: "𝕏" },
  { name: "Email", url: "mailto:jerald@example.com", icon: "✉️" },
];

export const SKILLS = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vue.js",
    "JavaScript ES6+",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "Authentication & Security",
  ],
  database: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "AWS S3"],
  devOps: ["Git", "Docker", "CI/CD", "AWS", "GitHub Actions", "Linux"],
};

export const EXPERIENCE = [
  {
    title: "Senior Developer",
    company: "Tech Solutions Inc.",
    duration: "2022 - Present",
    description:
      "Lead development of customer-facing applications serving 100k+ users. Architect scalable backend systems and mentor junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "StartUp Labs",
    duration: "2020 - 2022",
    description:
      "Built and maintained multiple full-stack applications using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and improved app performance.",
  },
  {
    title: "Junior Developer",
    company: "Web Agency Co.",
    duration: "2019 - 2020",
    description:
      "Developed responsive websites and web applications. Collaborated with designers and implemented RESTful APIs.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, shopping cart, payment integration, and admin dashboard.",
    image: "🛍️",
    tech: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    details:
      "Built a scalable marketplace supporting 1000+ products with real-time inventory management.",
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team collaboration features, and analytics.",
    image: "✓",
    tech: ["React", "Firebase", "WebSocket", "Material-UI", "Redux"],
    link: "#",
    details:
      "Developed a real-time collaboration tool with 50k+ active users and 99.9% uptime.",
    color: "from-cyan-600 to-blue-600",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Data visualization platform with interactive charts, real-time metrics, and advanced reporting capabilities.",
    image: "📊",
    tech: ["React", "D3.js", "Node.js", "MongoDB", "Chart.js"],
    link: "#",
    details:
      "Created analytics platform processing 1M+ data points daily with sub-second response times.",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 4,
    title: "Social Media API",
    description:
      "RESTful API for social networking platform with authentication, post management, and user interactions.",
    image: "💬",
    tech: ["Node.js", "Express", "JWT", "MongoDB", "Redis"],
    link: "#",
    details:
      "Built scalable API handling 100k+ requests/hour with caching and rate limiting.",
    color: "from-pink-600 to-rose-600",
  },
  {
    id: 5,
    title: "Fitness Tracker App",
    description:
      "Mobile-responsive fitness tracking application with workout logging, progress tracking, and community features.",
    image: "💪",
    tech: ["React Native", "Firebase", "Expo", "TypeScript"],
    link: "#",
    details:
      "Cross-platform app downloaded 50k+ times with 4.8 star rating on app stores.",
    color: "from-green-600 to-emerald-600",
  },
  {
    id: 6,
    title: "AI Chat Assistant",
    description:
      "Intelligent chatbot using NLP and machine learning to provide customer support and information.",
    image: "🤖",
    tech: ["Python", "OpenAI API", "Flask", "PostgreSQL", "React"],
    link: "#",
    details:
      "Deployed AI assistant handling 10k+ conversations daily with 95% satisfaction rate.",
    color: "from-orange-600 to-red-600",
  },
];
