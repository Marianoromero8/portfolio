"use client";
import React, { useEffect, useState } from 'react'
import Button from '../common/Button'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Separator } from '@/components/ui/separator';


export default function NavBar() {

  const [text, setText] = useState("Mariano Romero")

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevState) =>
        prevState === "Mariano Romero" ? "Front End Developer" : "Mariano Romero"
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
    <div className='fixed text-[#0094c6] flex w-full p-2 border-b border-[#0094c6] backdrop-blur-lg z-50'>
      <div className='flex justify-center w-48 p-2 font-semibold text-[#0094c6]'>
        {text}
      </div>
      <div className='flex flex-row ml-3 pl-2 gap-14'>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
        <Button variant='basic' onClick={() => scrollToSection('aboutme')} className='focus:underline'>About Me</Button>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
        <Button variant='basic' onClick={() => scrollToSection('skills')} className='focus:underline'>Skills</Button>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
        <Button variant='basic' onClick={() => scrollToSection('projects')} className='focus:underline'>Projects</Button>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
        <Button variant='basic' className='focus:underline'>Contacts</Button>
        <Separator orientation='vertical' className='bg-[#0094c6]' />
      </div>
      <div className='flex items-center gap-5 pl-20'>
        <a href="https://www.linkedin.com/in/mariano-romero-489104272/" target='_blank' className='text-2xl'><FaLinkedin /></a>
        <a href="https://github.com/Marianoromero8" target='_blank' className='text-2xl' ><FaGithub /></a>
        <select onChange={handleDownload} className="px-3 py-2 rounded text-lg bg-transparent backdrop-blur-lg z-50 outline: transparent">
          <option value="" hidden>
            📥 Resume Download
          </option>
          <option value="/CV-Romero Mariano-Desarrollador Frontend.pdf" className='bg-[#000022] backdrop-blur-lg z-50'>
            📄Cv - Español
          </option>
          <option value="/CV-Romero Mariano-Frontend Developer.pdf" className='bg-[#000022] backdrop-blur-lg z-50'>
            📄Resume - English
          </option>
        </select>
      </div>
    </div>
  )
}