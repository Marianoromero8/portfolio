import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function AboutMe() {
    return (
        <div className='flex flex-row mb-40 gap-14 mx-32'>
            <div id="aboutme" className="text-[#0094C6] flex flex-row lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16">
                {'About Me'.split('').map((letter, index) => (
                    <h2 key={index} className="text-3xl md:text-4xl lg:text-5xl text-center">
                        {letter}
                    </h2>
                ))}
            </div>
            <div className='hidden lg:block'>
                <Separator orientation='vertical' className="bg-[#0094C6]" />
            </div>
            <div className='text-[#0094C6] flex flex-col gap-10 justify-center'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Eum nesciunt optio, molestiae doloremque, voluptate explicabo pariatur iure facilis omnis, sunt recusandae. Optio, quia eaque modi eveniet impedit repellendus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Eum nesciunt optio, molestiae doloremque, voluptate explicabo pariatur iure facilis omnis, sunt recusandae. Optio, quia eaque modi eveniet impedit repellendus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Eum nesciunt optio, molestiae doloremque, voluptate explicabo pariatur iure facilis omnis, sunt recusandae. Optio, quia eaque modi eveniet impedit repellendus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Eum nesciunt optio, molestiae doloremque, voluptate explicabo pariatur iure facilis omnis, sunt recusandae. Optio, quia eaque modi eveniet impedit repellendus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Eum nesciunt optio, molestiae doloremque, voluptate explicabo pariatur iure facilis omnis, sunt recusandae. Optio, quia eaque modi eveniet impedit repellendus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Eum nesciunt optio, molestiae doloremque, voluptate explicabo pariatur iure facilis omnis, sunt recusandae. Optio, quia eaque modi eveniet impedit repellendus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Eum nesciunt optio, molestiae doloremque, voluptate explicabo pariatur iure facilis omnis, sunt recusandae. Optio, quia eaque modi eveniet impedit repellendus?</p>
            </div>
        </div>
    )
}
