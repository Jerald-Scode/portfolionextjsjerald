"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Section, Card, Badge, Button, AnimatedSection } from "@/components/ui";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my recent work. Each project showcases different skills and technologies."
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 0.1}>
            <Card className="h-full flex flex-col" gradient>
              {/* Project Image/Icon Placeholder */}
              <div className="h-48 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center mb-6 overflow-hidden group">
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {project.id === "proj-1" && "🛍️"}
                  {project.id === "proj-2" && "✓"}
                  {project.id === "proj-3" && "📊"}
                </div>
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
                    className="flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-white transition-colors"
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
                    className="flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                )}
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/projects">
          <Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
            View All Projects
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
