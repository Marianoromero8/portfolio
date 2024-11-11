import React, { useState } from 'react';
import ProjectCard from '../common/ProjectCard'

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className={'flex flex-col items-center text-[#0094C6] pb-16'}>
            <h2 className={'text-5xl text-center mb-8'}>My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">

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
                    imageUrl="/ApiVideogames.jpeg"  // Ajusta la ruta a tu carpeta de imágenes
                    projectLink=""
                    codeLink="https://github.com/Marianoromero8/Proyecto-Individual-Videogames"  // Cambia este enlace por el repositorio del código
                />

                <ProjectCard
                    title='Gastro-Builder'
                    description='The function of our company is to organize
                    and regularize both employees and raw
                    material.

                    Our program controls the employees entry
                    and exit from work, based on the hours
                completed, they are paid their
                corresponding salary if a fixed salary
                contract was not previously made.

                Also the program helps to have a control of
                the raw material that enters, the percentage
                of profit that you want to get and the cost of
                the same.

                Depending on the membership you can
                directly modify prices for inflation within the
                program.'
                    imageUrl='/Gastro-Builder.jpeg'
                    projectLink=''
                    codeLink=''
                />


            </div>
        </section>
    );
};

export default ProjectsSection;
