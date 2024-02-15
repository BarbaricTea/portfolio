import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center z-11 relative">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
