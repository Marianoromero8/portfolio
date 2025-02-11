"use client";
import React, { useEffect, useState } from 'react'
import Button from '../common/Button'
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";


export default function NavBar() {

  const [text, setText] = useState("Mariano Romero")

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

  return (
    <div className='text-[#0094c6] flex w-full p-2 border-b border-[#0094c6]'>
      <div className='flex justify-center w-48 p-2 font-semibold text-[#0094c6] border-r border-[#0094c6]'>
        {text}
      </div>
      <div className='flex flex-row ml-3 pl-2 gap-40'>
        <Button variant='dark' onClick={() => scrollToSection('aboutme')}>About Me</Button>
        <Button variant='dark'>Skills</Button>
        <Button variant='dark' onClick={() => scrollToSection('projects')}>Projects</Button>
        <Button variant='dark'>Contacts</Button>
      </div>
      <div className='flex items-center gap-5 pl-36'>
        <a href="https://www.linkedin.com/in/mariano-romero-489104272/" target='_blank' className='text-2xl'><FaLinkedin /></a>
        <a href="https://github.com/Marianoromero8" target='_blank' className='text-2xl' ><FaGithub /></a>
        <a href="/CV-Romero Mariano-Desarrollador Frontend.pdf" download="Romero Mariano-CV" target='_blank' className='text-2xl'><FaDownload /></a>
        <a href="/CV-Romero Mariano-Frontend Developer.pdf" download="Romero Mariano-Resume" target='_blank' className='text-2xl'><FaDownload /></a>
      </div>
    </div>
  )
}