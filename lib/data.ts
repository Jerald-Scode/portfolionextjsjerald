import type {
  PersonalInfo,
  Project,
  Experience,
  Education,
  SkillCategory,
  NavLink,
  ContactInfo
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Jerald",
  title: "Full-Stack Developer",
  tagline: "Building digital experiences that matter",
  bio: "I'm a passionate full-stack developer with 5+ years of experience crafting elegant solutions to complex problems. I specialize in building scalable web applications using modern technologies like React, Next.js, Node.js, and TypeScript. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  email: "jerald@example.com",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 75 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 85 },
      { name: "PHP / Laravel", level: 70 },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Linux", level: 80 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    startDate: "2022-03",
    description: "Lead development of customer-facing applications serving 100k+ users. Architect scalable backend systems and mentor junior developers.",
    achievements: [
      "Led migration of legacy system to modern microservices architecture",
      "Reduced API response time by 60% through optimization",
      "Mentored team of 5 junior developers",
      "Implemented CI/CD pipelines reducing deployment time by 80%",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "exp-2",
    title: "Full Stack Developer",
    company: "StartUp Labs",
    location: "Remote",
    startDate: "2020-06",
    endDate: "2022-02",
    description: "Built and maintained multiple full-stack applications using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and improved app performance.",
    achievements: [
      "Developed 3 production applications from scratch",
      "Achieved 99.9% uptime for all deployed applications",
      "Integrated payment systems processing $2M+ annually",
    ],
    tech: ["React", "TypeScript", "Express", "MongoDB", "Stripe"],
  },
  {
    id: "exp-3",
    title: "Junior Developer",
    company: "Web Agency Co.",
    location: "Los Angeles, CA",
    startDate: "2019-01",
    endDate: "2020-05",
    description: "Developed responsive websites and web applications. Collaborated with designers and implemented RESTful APIs.",
    achievements: [
      "Built 20+ client websites with responsive designs",
      "Learned full-stack development through hands-on projects",
      "Received Employee of the Quarter award",
    ],
    tech: ["JavaScript", "PHP", "MySQL", "WordPress", "jQuery"],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science",
    field: "Computer Science",
    school: "University of California",
    location: "Berkeley, CA",
    startDate: "2015-09",
    endDate: "2019-05",
    description: "Graduated with honors. Focus on software engineering and distributed systems.",
    achievements: [
      "Dean's List - 6 semesters",
      "Led student developer organization",
      "Senior thesis on distributed computing",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, Stripe payment integration, and comprehensive admin dashboard.",
    longDescription: "Built a scalable marketplace supporting 1000+ products with real-time inventory management, order tracking, and analytics.",
    tech: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and productivity analytics dashboard.",
    longDescription: "Developed a real-time collaboration tool with 50k+ active users and 99.9% uptime. Features include drag-and-drop boards, file attachments, and team chat.",
    tech: ["React", "Firebase", "WebSocket", "Material-UI", "Redux"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Analytics Dashboard",
    description: "Data visualization platform with interactive charts, real-time metrics, custom reports, and exportable insights.",
    longDescription: "Created analytics platform processing 1M+ data points daily with sub-second response times. Features custom chart builder and scheduled reporting.",
    tech: ["React", "D3.js", "Node.js", "MongoDB", "Chart.js"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "proj-4",
    title: "Social Media API",
    description: "RESTful API for social networking with OAuth authentication, post management, real-time notifications, and user interactions.",
    longDescription: "Built scalable API handling 100k+ requests/hour with Redis caching, rate limiting, and comprehensive documentation.",
    tech: ["Node.js", "Express", "JWT", "MongoDB", "Redis", "Socket.io"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "proj-5",
    title: "Fitness Tracker",
    description: "Cross-platform fitness app with workout logging, progress tracking, nutrition planning, and social features.",
    longDescription: "Cross-platform app downloaded 50k+ times with 4.8 star rating. Features include custom workout builder, progress photos, and community challenges.",
    tech: ["React Native", "Firebase", "Expo", "TypeScript"],
    category: "Mobile",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "proj-6",
    title: "AI Chat Assistant",
    description: "Intelligent chatbot using OpenAI API to provide customer support, answer questions, and assist with tasks.",
    longDescription: "Deployed AI assistant handling 10k+ conversations daily with 95% satisfaction rate. Features context awareness and seamless handoff to human agents.",
    tech: ["Python", "OpenAI API", "FastAPI", "PostgreSQL", "React"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const contactInfo: ContactInfo[] = [
  {
    type: "email",
    label: "Email",
    value: "jerald@example.com",
    href: "mailto:jerald@example.com",
  },
  {
    type: "location",
    label: "Location",
    value: "San Francisco, CA",
  },
  {
    type: "phone",
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
];

export const socialLinks = {
  github: "https://github.com/jerald",
  linkedin: "https://linkedin.com/in/jerald",
  twitter: "https://twitter.com/jerald",
  email: "mailto:jerald@example.com",
};

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile",
  "AI/ML",
];
