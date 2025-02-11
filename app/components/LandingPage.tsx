import Image from 'next/image'
import React from 'react'


export default function Landing() {
  return (
    <div className={`flex flex-col md:flex-row text-[#0094C6] p-10 h-screen transition-all duration-1000 ease-in-out hover:flex-row-reverse hover:scale-104`}>
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
        <Image src='/Foto.jpeg' alt='Foto-Mia' width={300} height={300} className={"object-cover w-full h-auto rounded-full"} />
      </div>
    </div>
  )
}