"use client";
import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import TabTheme from "../common/TabTheme";
import {
  FaLinkedin,
  FaGithub,
  FaTimes,
  FaBars,
  FaFilePdf,
} from "react-icons/fa";
import { useLanguage } from "@/app/context/context";
export default function NavBar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      console.error(`Element with id "${sectionId}" not found.`);
    }
  };

  return (
    <div className="fixed text-[#0094c6] flex w-full p-2 backdrop-blur-lg z-50 justify-between">
      <div className="flex justify-center items-center w-[220px] md:w-[250px] p-2 font-semibold text-[#0094c6] whitespace-nowrap">
        <p>
          {
            [
              "Mariano Romero",
              t("Técnico en Programación", "Programming Graduate · UTN"),
              t("Desarrollador Full Stack", "Full Stack Developer"),
            ][roleIndex]
          }
        </p>
      </div>

      <div className="hidden lg:flex flex-row lg:gap-4 xl:gap-10 whitespace-nowrap">
        <Button
          variant="basic"
          onClick={() => scrollToSection("projects")}
          className="focus:underline"
        >
          {t("Proyectos", "Projects")}
        </Button>
        <Button
          variant="basic"
          onClick={() => scrollToSection("experience")}
          className="focus:underline"
        >
          {t("Experiencia", "Experience")}
        </Button>
        <Button
          variant="basic"
          onClick={() => scrollToSection("aboutme")}
          className="focus:underline"
        >
          {t("Sobre Mí", "About Me")}
        </Button>
        <Button
          variant="basic"
          onClick={() => scrollToSection("skills")}
          className="focus:underline"
        >
          {t("Habilidades", "Skills")}
        </Button>
        <Button
          variant="basic"
          onClick={() => scrollToSection("contacts")}
          className="focus:underline"
        >
          {t("Contacto", "Contact Me")}
        </Button>
      </div>

      <div className="hidden lg:flex items-center gap-5 pl-5">
        <a
          href="https://github.com/Marianoromero8"
          target="_blank"
          className="text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mariano-romero-489104272/"
          target="_blank"
          className="text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href={t(
            "/CV_Mariano_Romero_Programador.pdf",
            "/Resume_Romero_Mariano_Software_Dev.pdf",
          )}
          target="_blank"
          // download="Resume - Romero Mariano.pdf"
          className="text-2xl"
        >
          <FaFilePdf />
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="font-bold text-sm border-2 border-[#0094c6] rounded-md px-2 py-1 hover:bg-[#0094c6] hover:text-white transition-all duration-300 min-w-[38px]"
        >
          {language === "en" ? "ES" : "EN"}
        </button>

        <TabTheme />
      </div>

      {/* Botón de menú hamburguesa (visible solo en móviles) */}
      <button
        className="lg:hidden text-[#0094c6] text-3xl p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div className="lg:hidden absolute top-12 left-0 w-full flex flex-col items-center p-5 bg-[#E0CFB9] dark:bg-[#000022] backdrop-blur-lg z-50">
          <Button
            variant="basic"
            onClick={() => scrollToSection("projects")}
            className="w-full py-2"
          >
            {t("Proyectos", "Projects")}
          </Button>
          <Button
            variant="basic"
            onClick={() => scrollToSection("experience")}
            className="w-full py-2"
          >
            {t("Experiencia", "Experience")}
          </Button>
          <Button
            variant="basic"
            onClick={() => scrollToSection("aboutme")}
            className="w-full py-2"
          >
            {t("Sobre Mí", "About Me")}
          </Button>
          <Button
            variant="basic"
            onClick={() => scrollToSection("skills")}
            className="w-full py-2"
          >
            {t("Habilidades", "Skills")}
          </Button>
          <Button
            variant="basic"
            onClick={() => scrollToSection("contacts")}
            className="w-full py-2"
          >
            {t("Contacto", "Contact me")}
          </Button>
          <div className="flex gap-5 mt-2 p-4 justify-center border-b border-[#0094c6]">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://github.com/Marianoromero8"
                target="_blank"
                className="text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mariano-romero-489104272/"
                target="_blank"
                className="text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href={t(
                  "/CV_Mariano_Romero_Programador.pdf",
                  "/Resume_Romero_Mariano_Software_Dev.pdf",
                )}
                target="_blank"
                className="text-2xl"
              >
                <FaFilePdf />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
