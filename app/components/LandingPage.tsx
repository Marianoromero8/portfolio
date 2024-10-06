import Image from 'next/image'
import React from 'react'
import foto from "../img/DALL·E 2024-10-05 22.16.01 - A hand-drawn style illustration of a person programming on a laptop. The scene should include a cozy workspace with a desk, books, and plants. The per.webp"

export default function Landing() {
  return (
    <div className={`flex flex-col md:flex-row text-[#0094C6] p-10 h-screen`}>
      <div className='md:w-1/2 md:pr-10 content-start'>
        <h1 className={`text-6xl `}>Romero Mariano</h1>
        <br />
        <h2 className={`text-3xl`}>I'm Full Stack Developer</h2>
        <br />
        <p>Welcome to my digital portfolio where you can find
          creativity on code.
          As a web developer, my work is
          to turn ideas into captivating digital experiences.
          You can explore my portfolio to see how i work. </p>
      </div>
      <div className={'mt-10 md:mt-0 md:w-1/2 flex justify-center'} >
        <Image src={foto} alt='Foto-Mia' width={300} height={300} className={"object-cover w-full h-auto"} />
      </div>
    </div>
  )
}