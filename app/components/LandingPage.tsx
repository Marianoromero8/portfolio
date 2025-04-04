'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../common/Button'
import { motion } from "framer-motion";

export default function Landing() {
  const [hover, setHover] = useState(false)

  return (
    <div id='landing' className='flex flex-col-reverse md:flex-row gap-8 text-[#0094C6] py-6 px-6 md:py-10 md:px-32 h-full md:h-screen mb-20'>
      <div className='md:w-1/2 md:pr-10 flex flex-col justify-center text-center md:text-left'>
        <h1 className="text-3xl md:text-5xl">
          Hi, I'm Romero Mariano
        </h1>
        <br />
        <p>
          Welcome to my digital portfolio! I´m a <b>Front-end Developer</b> passionate about transforming ideas into engaging digital experiences through clean and efficient code.
          <br />
          Explore my portfolio to see how I approach web development, create seamless user interfaces and bring creative solutions to life.
        </p>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex justify-center md:inline-block"
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
      <div className='mt-10 md:mt-0 md:w-1/2 flex justify-center pt-8'>
        <Image
          src='/Foto.jpeg'
          alt='Foto-Mia'
          width={300}
          height={300}
          priority
          className="object-contain max-w-[200px] md:max-w-[300px] lg:max-w-[550px] h-auto rounded-full w-[550px]"
        />
      </div>
    </div>
  )
}