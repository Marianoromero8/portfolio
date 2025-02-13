'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../common/Button'
import { motion } from "framer-motion";


export default function Landing() {
  const [hover, setHover] = useState(false)
  return (
    <div className='flex flex-col md:flex-row text-[#0094C6] p-10 h-screen'>
      <div className='md:w-1/2 md:pr-10 content-center'>
        <h1 className='text-6xl'>Romero Mariano</h1>
        <br />
        <h2 className='text-3xl'>Front End Developer</h2>
        <br />
        <p>Welcome to my digital portfolio where you can find
          creativity on code.
          As a web developer, my work is
          to turn ideas into captivating digital experiences.
          You can explore my portfolio to see how i work. </p>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="inline-block"
        >

          <Button
            variant='dark'
            className='flex items-center gap-2 mt-4 px-4 py-2 relative overflow-hidden'
            onClick={() => window.location.href = "mailto:marianoromero97.mr@gmail.com"}>
            Hire me
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: hover ? 0 : -10, opacity: hover ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </Button>
        </div>
      </div>
      <div className='mt-10 md:mt-0 md:w-1/2 flex justify-center' >
        <Image src='/Foto.jpeg' alt='Foto-Mia' width={300} height={300} className={"object-cover w-auto h-auto rounded-full"} />
      </div>
    </div>

  )
}