import React, { useState } from 'react';
import ProjectCard from '../common/ProjectCard'
import { DiVim } from 'react-icons/di';
import { Separator } from '@/components/ui/separator';

const ProjectsSection: React.FC = () => {
    return (
        <div className='flex flex-col lg:flex-row mb-40 gap-10 md:gap-14 mx-5 md:mx-16 lg:mx-32'>
            <div id="projects" className="text-[#0094C6] flex flex-row lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16">
                {'Projects'.split('').map((letter, index) => (
                    <h2 key={index} className="text-3xl md:text-4xl lg:text-5xl text-center xl:text-4xl">
                        {letter}
                    </h2>
                ))}
            </div>
            <div className='hidden lg:block'>
                <Separator orientation='vertical' className="bg-[#0094C6]" />
            </div>
            <div className="text-[#0094C6] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 md:p-5 xl:pt-8">
                <ProjectCard
                    title="ChampionGear"
                    description="An e-commerce for sports clothing with third-party authentication using Firebase, integrated Stripe for payment processing, and Redux Toolkit for state management."
                    // technologies={['Javascript', 'React', 'Redux Toolkit', 'Firebase', 'Stripe']}
                    // features={[
                    //     'Firebase authentication with third-party providers',
                    //     'Stripe integration for secure payment processing',
                    //     'Product catalog with real-time stock management',
                    //     'Redux for state management and cart functionality',
                    // ]}
                    imageUrl="/ChampionGear.jpeg"  // Ajusta la ruta a tu carpeta de imágenes
                    projectLink="https://proyecto-final-henry-pearl.vercel.app/#"
                    codeLink="https://github.com/Marianoromero8/ProyectoFinal-Henry"
                />

                <ProjectCard
                    title="VideoGames API"
                    description="A web app that fetches data from an external video game API and displays it. Built using technologies learned in the bootcamp, including Node.js, PostgreSQL, JavaScript, React, and Redux."
                    // technologies={['Javascript', 'React', 'Redux', 'Node.js', 'PostgreSQL', 'Express']}
                    // features={[
                    //     'Data fetching from an external video game API',
                    //     'Backend created with Node.js and Express for managing video game data',
                    //     'PostgreSQL database for storing video game information',
                    //     'Search, filter, and sorting functionalities for video games',
                    // ]}
                    imageUrl="/PI-Videogames.jpeg"  // Ajusta la ruta a tu carpeta de imágenes
                    projectLink="https://frontend-proyecto-individual.vercel.app/"
                    codeLink="https://github.com/Marianoromero8/Proyecto-Individual-Videogames"  // Cambia este enlace por el repositorio del código
                />
                <ProjectCard
                    title="SSG Distribuidora"
                    description="A web application developed with Next.js, TypeScript, and Tailwind CSS, designed for a local distributor. The goal is to display the products they sell efficiently, with a modern, easy-to-navigate interface, providing an optimized and responsive user experience."
                    // technologies={['Javascript', 'React', 'Redux', 'Node.js', 'PostgreSQL', 'Express']}
                    // features={[
                    //     'Data fetching from an external video game API',
                    //     'Backend created with Node.js and Express for managing video game data',
                    //     'PostgreSQL database for storing video game information',
                    //     'Search, filter, and sorting functionalities for video games',
                    // ]}
                    imageUrl="/ssgdistribuidora.jpeg"  // Ajusta la ruta a tu carpeta de imágenes
                    projectLink="https://ssg-distribuidora.vercel.app/"
                    codeLink="https://github.com/Marianoromero8/ssg-distribuidora.git"  // Cambia este enlace por el repositorio del código
                />
            </div>
        </div>
    );
};

export default ProjectsSection;
