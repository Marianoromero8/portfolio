import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function AboutMe() {
    return (
        <div className='flex flex-row mb-40 gap-14 mx-56'>
            <div id='aboutme' className='text-[#0094C6] flex flex-col justify-center gap-4 scroll-mt-16'>
                <h2 className='text-5xl text-center'>A</h2>
                <h2 className='text-5xl text-center'>b</h2>
                <h2 className='text-5xl text-center'>o</h2>
                <h2 className='text-5xl text-center'>u</h2>
                <h2 className='text-5xl text-center'>t</h2>
                <br />
                <h2 className='text-5xl text-center'>M</h2>
                <h2 className='text-5xl text-center'>e</h2>
            </div>
            <div>
                <Separator orientation='vertical' className="bg-[#0094C6]" />
            </div>
            <div className='text-[#0094C6] flex flex-col gap-10 justify-center'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Eum nesciunt optio, molestiae doloremque, voluptate explicabo pariatur iure facilis omnis, sunt recusandae. Optio, quia eaque modi eveniet impedit repellendus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Eum nesciunt optio, molestiae doloremque, voluptate explicabo pariatur iure facilis omnis, sunt recusandae. Optio, quia eaque modi eveniet impedit repellendus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Eum nesciunt optio, molestiae doloremque, voluptate explicabo pariatur iure facilis omnis, sunt recusandae. Optio, quia eaque modi eveniet impedit repellendus?</p>
            </div>
        </div>
    )
}
