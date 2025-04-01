import Landing from "./components/LandingPage";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer"
import Works from "./components/Works";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <Landing />
      <AboutMe />
      <Skills />
      <Works />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
