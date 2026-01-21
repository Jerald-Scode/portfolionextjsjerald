"use client";

import { motion } from "framer-motion";
import { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Target,
  Users,
  Rocket,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Section, Card, Badge, Button, AnimatedSection } from "@/components/ui";
import {
  personalInfo,
  experiences,
  education,
  skillCategories,
} from "@/lib/data";
import { formatDateRange } from "@/lib/utils";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "I believe in writing clean, maintainable, and well-tested code that stands the test of time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great products are built by great teams. I value communication and working together towards shared goals.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "Technology evolves constantly. I'm committed to staying updated with the latest tools and best practices.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge variant="primary" className="mb-6">
              About Me
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Passionate about creating{" "}
              <span className="gradient-text">digital experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex items-center gap-6 mt-8 text-[#71717a]">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>{personalInfo.availability}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Work Experience"
        subtitle="My professional journey and the companies I've worked with"
      >
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.id} delay={index * 0.1}>
              <Card className="relative overflow-visible" gradient>
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-[#27272a] to-transparent" />
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 w-fit">
                    <Briefcase className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-indigo-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[#71717a] text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDateRange(exp.startDate, exp.endDate)}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#a1a1aa] mb-4">{exp.description}</p>

                    {/* Achievements */}
                    {exp.achievements && (
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-[#71717a]"
                          >
                            <span className="text-indigo-400 mt-1">-</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack */}
                    {exp.tech && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge key={tech} variant="default" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section
        id="education"
        title="Education"
        subtitle="My academic background and achievements"
        className="bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"
      >
        <div className="space-y-6">
          {education.map((edu, index) => (
            <AnimatedSection key={edu.id} delay={index * 0.1}>
              <Card gradient>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 w-fit">
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {edu.degree} in {edu.field}
                        </h3>
                        <p className="text-cyan-400 font-medium">{edu.school}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#71717a] text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDateRange(edu.startDate, edu.endDate)}
                        </span>
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-[#a1a1aa] mb-4">{edu.description}</p>
                    )}

                    {/* Achievements */}
                    {edu.achievements && (
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-[#71717a]"
                          >
                            <span className="text-cyan-400 mt-1">-</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Technical Skills"
        subtitle="Technologies and tools I work with"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.name} delay={categoryIndex * 0.1}>
              <Card className="h-full" gradient>
                <h3 className="text-xl font-bold text-white mb-6">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#a1a1aa]">
                          {skill.name}
                        </span>
                        <span className="text-xs text-[#71717a]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Values Section */}
      <Section
        id="values"
        title="My Values"
        subtitle="The principles that guide my work"
        centered
        className="bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1}>
              <Card className="h-full text-center" gradient>
                <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit mx-auto mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-[#a1a1aa]">{value.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg text-[#a1a1aa] mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Link href="/contact">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
