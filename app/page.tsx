import Landing from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Landing />
      <ProjectsSection />
      <Experience />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
