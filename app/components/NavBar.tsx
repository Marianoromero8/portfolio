"use client";
import React, { useEffect, useState } from 'react'
import Button from '../common/Button'
import TabTheme from '../common/TabTheme'
import { FaLinkedin, FaGithub, FaTimes, FaBars } from "react-icons/fa";
import { Separator } from '@/components/ui/separator';

export default function NavBar() {
  const [text, setText] = useState("Mariano Romero")
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
      setText((prevState) =>
        prevState === "Mariano Romero" ? "Frontend Developer" : "Mariano Romero"
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${sectionId}" not found.`);
    }
  }

  const handleDownload = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      window.open(selectedValue, "_blank");
    }
  };

  return (
    <div className='fixed text-[#0094c6] flex w-full p-2 border-b border-[#0094c6] backdrop-blur-lg z-50 justify-between'>
      <div className='flex justify-center items-center w-44 p-2 font-semibold text-[#0094c6] whitespace-nowrap'>
        {text}
      </div>

      {/* Botón de menú hamburguesa (visible solo en móviles) */}
      <button
        className="md:hidden text-[#0094c6] text-3xl p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className='hidden md:flex flex-row ml-3 pl-2 lg:gap-10 whitespace-nowrap'>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
        <Button variant='basic' onClick={() => scrollToSection('aboutme')} className='focus:underline'>About Me</Button>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
        <Button variant='basic' onClick={() => scrollToSection('skills')} className='focus:underline'>Skills</Button>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
        <Button variant='basic' onClick={() => scrollToSection('works')} className='focus:underline'>Works</Button>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
        <Button variant='basic' onClick={() => scrollToSection('projects')} className='focus:underline'>Projects</Button>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
        <Button variant='basic' onClick={() => scrollToSection('contacts')} className='focus:underline'>Contact Me</Button>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
      </div>
      <div className='hidden md:flex items-center gap-5 pl-5'>
        <a href="https://github.com/Marianoromero8" target='_blank' className='text-2xl' ><FaGithub /></a>
        <a href="https://www.linkedin.com/in/mariano-romero-489104272/" target='_blank' className='text-2xl'><FaLinkedin /></a>
        <select onChange={handleDownload} className="px-3 py-2 rounded text-lg bg-transparent backdrop-blur-lg z-50 outline: transparent">
          <option value="" hidden>
            📥 Download Resume
          </option>
          <option value="/CV-Romero Mariano-Desarrollador Frontend.pdf" className="bg-transparent backdrop-blur-lg z-50">
            📄Cv - Español
          </option>
          <option value="/CV-Romero Mariano-Frontend Developer.pdf" className="bg-transparent backdrop-blur-lg z-50">
            📄Resume - English
          </option>
        </select>
      </div>
      <TabTheme />

      {isOpen && (
        <div className="md:hidden absolute top-12 left-0 w-full flex flex-col items-center p-5 bg-[#E0CFB9] dark:bg-[#000022] backdrop-blur-lg z-50">
          <Button variant="basic" onClick={() => scrollToSection("aboutme")} className="w-full py-2">
            About Me
          </Button>
          <Button variant="basic" onClick={() => scrollToSection("skills")} className="w-full py-2">
            Skills
          </Button>
          <Button variant="basic" onClick={() => scrollToSection("works")} className="w-full py-2">
            Works
          </Button>
          <Button variant="basic" onClick={() => scrollToSection("projects")} className="w-full py-2">
            Projects
          </Button>
          <Button variant="basic" onClick={() => scrollToSection("contacts")} className="w-full py-2">
            Contacts
          </Button>
          <div className="flex gap-5 mt-2 p-4 justify-center border-b border-[#0094c6]">
            <div className='flex flex-row items-center gap-4'>
              <a href="https://github.com/Marianoromero8" target="_blank" className="text-2xl">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mariano-romero-489104272/" target="_blank" className="text-2xl">
                <FaLinkedin />
              </a>
            </div>
            <select onChange={handleDownload} className="px-3 py-2 rounded text-lg bg-transparent">
              <option value="" hidden>
                📥 Download Resume
              </option>
              <option value="/CV-Romero Mariano-Desarrollador Frontend.pdf" className="px-3 py-2 rounded text-lg">
                📄Cv - Español
              </option>
              <option value="/CV-Romero Mariano-Frontend Developer.pdf" className="px-3 py-2 rounded text-lg">
                📄Resume - English
              </option>
            </select>
          </div>
        </div>
      )}
    </div>

  )
}