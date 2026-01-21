/**
 * Portfolio Configuration File
 * Customize all aspects of your portfolio from this single file
 */

// Personal Information
export const personalInfo = {
  name: "Jerald",
  title: "Full-Stack Developer",
  description: "Passionate about creating amazing web experiences",
  email: "jerald@example.com",
  phone: "+1 (555) 123-4567",
};

// Site Configuration
export const siteConfig = {
  title: "Jerald's Portfolio",
  description: "Professional portfolio showcasing projects and expertise",
  url: "https://jerald-portfolio.com",
  ogImage: "https://jerald-portfolio.com/og-image.png",
  twitterHandle: "@jerald",
};

// Social Media Links
export const socialLinks = {
  github: "https://github.com/jerald",
  linkedin: "https://linkedin.com/in/jerald",
  twitter: "https://twitter.com/jerald",
  email: "mailto:jerald@example.com",
  discord: "https://discord.com",
};

// Theme Colors
export const themeColors = {
  primary: "#3b82f6", // Blue
  secondary: "#06b6d4", // Cyan
  accent: "#8b5cf6", // Purple
  background: "#0f172a", // Dark Blue
  foreground: "#f1f5f9", // Light Gray
};

// Navigation Menu Items
export const navItems = [
  { label: "Home", href: "/", icon: "🏠" },
  { label: "About", href: "/about", icon: "👤" },
  { label: "Projects", href: "/projects", icon: "💼" },
  { label: "Contact", href: "/contact", icon: "📧" },
];

// Hero Section Configuration
export const heroConfig = {
  badge: "Welcome to my portfolio",
  title: "Full-Stack Developer",
  subtitle: "Crafting beautiful, scalable, and performant web applications with modern technologies",
  ctaButtons: [
    { text: "View My Work", variant: "primary" },
    { text: "Get in Touch", variant: "outline" },
  ],
};

// About Section
export const aboutConfig = {
  bio: "I'm a full-stack developer with over 5 years of experience building web applications that solve real-world problems. My journey in tech started with a curiosity about how websites work, and it has evolved into a passion for creating elegant, performant solutions.",
  values: [
    {
      title: "Quality First",
      description: "I believe in writing clean, maintainable, and well-tested code",
      icon: "🎯",
    },
    {
      title: "Collaboration",
      description: "Great products are built by great teams",
      icon: "🤝",
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves constantly, and I stay updated",
      icon: "🚀",
    },
  ],
};

// Skills Configuration
export const skillsConfig = {
  categories: [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js",
        "JavaScript",
      ],
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "GraphQL",
        "PostgreSQL",
        "MongoDB",
        "Python",
      ],
    },
    {
      name: "DevOps & Tools",
      skills: ["Docker", "CI/CD", "AWS", "Git", "GitHub Actions", "Linux"],
    },
    {
      name: "Other",
      skills: ["REST APIs", "Microservices", "Authentication", "Databases"],
    },
  ],
};

// Projects Configuration
export const projectsConfig = {
  featured: [
    // Add your featured projects here
    // Example:
    // {
    //   title: "Project Name",
    //   description: "Project description",
    //   tech: ["React", "Node.js"],
    //   link: "https://project-link.com",
    //   github: "https://github.com/user/project"
    // }
  ],
};

// Contact Information
export const contactConfig = {
  methods: [
    {
      type: "email",
      label: "Email",
      value: "jerald@example.com",
      link: "mailto:jerald@example.com",
    },
    {
      type: "phone",
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      type: "location",
      label: "Location",
      value: "City, Country",
      link: "#",
    },
  ],
  responseTime: "Typically responds within 24 hours",
};

// Footer Configuration
export const footerConfig = {
  copyright: `© ${new Date().getFullYear()} Jerald. All rights reserved.`,
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};
