'use client';
import { Separator } from "@/components/ui/separator";
import IntroCard from "./_components/IntroCard/page";
import Navabar from "./_components/Navbar/page";
import SkillsCard from "./_components/skillCard/page";
import { Projects } from "./_components/Projects/page";
import About from "./_components/aboutCard/aboutCard";
import WorkExp from "./_components/workExp/page";

export default function Home() {
  return (
    <div>
      <Navabar />
      <Separator />
      <IntroCard />
      <Separator />
      <SkillsCard />
      <WorkExp />
      <Separator />
      <Projects />
      <Separator />
      <About />
    </div>
  );
}
