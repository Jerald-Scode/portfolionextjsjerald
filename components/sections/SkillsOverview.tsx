"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Settings } from "lucide-react";
import { Section, Card, AnimatedSection } from "@/components/ui";
import { skillCategories } from "@/lib/data";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-6 w-6" />,
  Backend: <Server className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  "DevOps & Tools": <Settings className="h-6 w-6" />,
};

export default function SkillsOverview() {
  return (
    <Section
      id="skills"
      className="relative"
      title="Skills & Technologies"
      subtitle="Technologies I work with to bring ideas to life"
      centered
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {skillCategories.map((category, categoryIndex) => (
          <AnimatedSection key={category.name} delay={categoryIndex * 0.1}>
            <Card className="h-full" gradient>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                  {categoryIcons[category.name]}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              {/* Skills */}
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
                      <span className="text-sm text-[#a1a1aa]">{skill.name}</span>
                      <span className="text-xs text-[#71717a]">{skill.level}%</span>
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
  );
}
