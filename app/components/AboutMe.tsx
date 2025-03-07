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
            <div className='text-[#0094C6] flex flex-col gap-6 lg:gap-8 text-center lg:text-left'>
                <p>
                    I'm a passionate Frontend Developer from Bahía Blanca, Argentina. With 2 years of experience specializing in building dynamic, scalable, and visually appealing web applications.
                </p>
                <p>
                    My expertise includes React.js, Next.js, TypeScript, Redux Toolkit, JavaScript, Firebase, and Stripe, among other technologies. I primarily use Tailwind CSS for styling, ensuring efficient and maintainable UI development.
                </p>
                <p>
                    I worked as a Frontend Developer on an e-commerce project, focusing on creating a seamless user experience, integrating secure payment gateways and developing reusable UI components. Beyond that, I have also built API-driven applications and interactive web experiences, always striving for clean, efficient, and high-performance code.
                </p>
                <p>
                    I’m a proactive, self-taught, and team-oriented developer with a strong ability to adapt and learn quickly. I enjoy collaborating with others, solving problems efficiently, and bringing creative solutions to challenges. I thrive in team environments, where communication and cooperation are key, and I’m always eager to learn from my peers. My goal is to create seamless user experiences while staying up to date with the latest frontend trends and best practices.
                </p>
                <p>
                    I aim to not only contribute my skills but also grow and evolve within the company I join, taking on new challenges and responsibilities that allow me to continuously improve as a developer. My goal is to create seamless, engaging user experiences while staying up to date with the latest frontend trends and best practices.
                </p>
                <h2 className='flex justify-center lg:justify-start text-4xl hover:scale-110 transition duration-500'>
                    <a href="mailto:marianoromero97.mr@gmail.com">
                        Let's work together! 💻
                    </a>
                </h2>
            </div>
        </div>
    )
}
