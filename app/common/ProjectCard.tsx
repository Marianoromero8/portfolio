"use client";
import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink: string;
    codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectLink, codeLink }) => {
    return (
        <div className="bg-transparent border border-[#0094c6] shadow-md rounded-lg overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="flex flex-col p-4">
                <div className='flex flex-col flex-grow'>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-[#0094c6] opacity-80 flex-grow h-44">{description}</p>
                    <div className='flex flex-row gap-4 pt-4 mt-auto'>
                        <a href={projectLink} target='_blank'><FaGlobe /></a>
                        <a href={codeLink} target='_blank'><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
