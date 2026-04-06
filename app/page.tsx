import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ChatInterface } from "@/components/ChatInterface";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
      <ChatInterface />
    </main>
  );
}
