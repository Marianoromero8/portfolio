"use client";
import React from 'react'
import Button from '../common/Button'

export default function NavBar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${sectionId}" not found.`);
    }
  }

  return (
    <div className={`text-[#0094c6] flex w-full justify-around p-2 border-b border-[#0094c6]`}>
      <Button variant='dark' onClick={() => scrollToSection('aboutme')}>About Me</Button>
      <Button variant='dark'>Skills</Button>
      <Button variant='dark' onClick={() => scrollToSection('projects')}>Projects</Button>
      <Button variant='dark'>Contacts</Button>
    </div>
  )
}