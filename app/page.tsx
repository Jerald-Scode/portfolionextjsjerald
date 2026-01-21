import { Hero } from "@/components/layout";
import { FeaturedProjects, SkillsOverview, CTASection } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsOverview />
      <CTASection />
    </>
  );
}
