import Image from "next/image";
import Landing from "./components/LandingPage";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <Landing />
      <AboutMe />
    </main>
  );
}
