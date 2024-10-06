import React from 'react'
import Button from '../common/Button'

export default function NavBar() {
  return (
    <div className={`text-[#0094c6] flex w-full justify-around p-2 bg-[#005E7C]`}>
      <Button variant='dark'>About Me</Button>
      <Button variant='dark'>Skills</Button>
      <Button variant='dark'>Projects</Button>
      <Button variant='dark'>Contacts</Button>
    </div>
  )
}