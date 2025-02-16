'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../common/Button'
import { motion } from "framer-motion";


export default function Landing() {
  const [hover, setHover] = useState(false)
  return (
    <div id='landing' className='flex flex-col md:flex-row text-[#0094C6] p-10 px-32 h-screen'>
      <div className='md:w-1/2 md:pr-10 content-center'>
        <h1 className="text-5xl whitespace-nowrap">
          Welcome to my digital portfolio
        </h1>
        <br />
        <p>
          Hi, I’m <b>Romero Mariano</b>, a <b>Frontend Developer</b>. My mission is to turn ideas into captivating digital experiences through clean and efficient code.
          <br />
          Explore my portfolio to see how I approach web development, create seamless user interfaces and bring creative solutions to life
        </p>
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
      <div className='mt-10 md:mt-0 md:w-1/2 flex justify-center  pt-8' >
        <Image src='/Foto.jpeg' alt='Foto-Mia' width={300} height={300} priority className="object-contain w-[550px] h-auto rounded-full" />
      </div>
    </div>

  )
}