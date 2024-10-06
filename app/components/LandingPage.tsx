import Image from 'next/image'
import React from 'react'
import foto from "../img/FORMAL.jpeg"

export default function Landing() {
  return (
    <div className={`flex flex-col md:flex-row text-[#0094C6] p-10 mt-[5%]`}>
      <div className='md:w-1/2 md:pr-10 content-start'>
        <h1 className={`text-6xl `}>Romero Mariano</h1>
        <h2 className={`text-3xl`}>Im Full Stack Developer</h2>
        <p>Welcome to my digital portfolio where you can find
          creativity on code. As a web developer, my work is
          to turn ideas into captivating digital experiences.
          You can explore my portfolio to see how i work. </p>
      </div>
      <div className={'mt-10 md:mt-0 md:w-1/2 flex justify-center'} >
        <Image src={foto} alt='Foto-Mia' width={400} height={300} />
      </div>
    </div>
  )
}