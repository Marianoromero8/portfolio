import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function AboutMe() {
    return (
        <div className='flex flex-col lg:flex-row mb-20 lg:mb-40 gap-8 lg:gap-14 mx-auto w-[90%] lg:w-[80%]'>
            <div id="aboutme" className="text-[#0094C6] flex flex-row lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16 text-center lg:text-left">
                {'About Me'.split('').map((letter, index) => (
                    <h2 key={index} className="text-3xl md:text-4xl lg:text-5xl text-center">
                        {letter}
                    </h2>
                ))}
            </div>
            <div className='hidden lg:block'>
                <Separator orientation='vertical' className="bg-[#0094C6]" />
            </div>
            <div className='text-[#0094C6] flex flex-col gap-6 lg:gap-8 text-center lg:text-left pt-8'>
                <p className="text-sm sm:text-base">
                    I'm a passionate Frontend Developer from Bahía Blanca, Argentina, currently in my final year of a two-year University Degree in Programming at UTN, with 2 years of experience specializing in building dynamic, scalable and visually appealing web applications.
                </p>
                <p className="text-sm sm:text-base">
                    My expertise includes React.js, Next.js, TypeScript, Javascript, Redux Toolkit, Firebase and Stripe, among other technologies. I primarily use Tailwind CSS for styling, ensuring efficient and maintainable UI development.
                </p>
                <p className="text-sm sm:text-base">
                    I worked as a freelance Frontend Developer for a local distributor, creating a Single Page Application (SPA) to showcase their product catalog, improving their online presence and accessibility. Additionally, I developed an e-commerce project where I focused on enhancing the user experience, integrating secure payment gateways, implementing third-party authentication and building reusable UI components.
                </p>
                <p className="text-sm sm:text-base">
                    I have also built API-driven applications and interactive web experiences, always striving for clean, efficient and high-performance code. I’m a proactive, self-taught and team-oriented developer with a strong ability to adapt and learn quickly. I enjoy collaborating with others, solving problems efficiently and bringing creative solutions to challenges.
                </p>
                <p className="text-sm sm:text-base">
                    My goal is to contribute my skills, grow within a company and take on new challenges that allow me to continuously improve as a developer while delivering seamless and engaging user experiences.
                </p>
                <h2 className='flex justify-center text-2xl sm:text-3xl hover:scale-110 transition duration-500'>
                    <a href="mailto:marianoromero97.mr@gmail.com">
                        Let's work together! 💻
                    </a>
                </h2>
            </div>
        </div>
    )
}