"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Section, Card, Badge, Button, AnimatedSection } from "@/components/ui";
import { projects, projectCategories, socialLinks } from "@/lib/data";

const projectIcons: Record<string, string> = {
  "proj-1": "🛍️",
  "proj-2": "✓",
  "proj-3": "📊",
  "proj-4": "💬",
  "proj-5": "💪",
  "proj-6": "🤖",
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge variant="primary" className="mb-6">
              My Work
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Projects & <span className="gradient-text">Creations</span>
            </h1>
            <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed">
              A collection of projects I&apos;ve built, from full-stack applications
              to specialized tools. Each project showcases different skills and
              technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-[#27272a]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 overflow-x-auto pb-2"
          >
            <div className="flex items-center gap-2 text-[#71717a]">
              <Filter className="h-4 w-4" />
              <span className="text-sm">Filter:</span>
            </div>
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-indigo-500 text-white"
                    : "bg-[#111118] text-[#a1a1aa] hover:text-white border border-[#27272a] hover:border-[#3f3f46]"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <Section>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col group" gradient>
                  {/* Project Image/Icon */}
                  <div className="h-48 rounded-lg bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 flex items-center justify-center mb-6 overflow-hidden relative">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                      {projectIcons[project.id] || "📁"}
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" size="sm">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Category Badge */}
                  <Badge variant="primary" size="sm" className="mb-3 w-fit">
                    {project.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#a1a1aa] text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Long Description */}
                  {project.longDescription && (
                    <p className="text-[#71717a] text-sm mb-4 border-t border-[#27272a] pt-4">
                      {project.longDescription}
                    </p>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="default" size="sm">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#27272a]">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-indigo-400 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-indigo-400 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[#71717a] text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </Section>

      {/* GitHub CTA */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <Card className="p-8 md:p-12" gradient>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 pointer-events-none" />
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="p-4 rounded-xl bg-[#27272a] w-fit mx-auto mb-6">
                  <Github className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Explore More Projects
                </h2>
                <p className="text-[#a1a1aa] mb-8">
                  Check out my GitHub profile for more projects, open-source
                  contributions, and code snippets.
                </p>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    leftIcon={<Github className="h-5 w-5" />}
                  >
                    Visit GitHub Profile
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
