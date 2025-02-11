"use client";
import React, { useState } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink: string;
    codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectLink, codeLink }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="flex flex-col p-4">
                <div className='flex flex-col'>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-gray-700 flex-grow min-h-[100px]">{description}</p>
                    <div className='flex flex-col gap-4'>
                        <a href={projectLink} className="text-blue-500 hover:underline" target='_blank'>View Project</a>
                        <a href={codeLink} className="text-blue-500 hover:underline" target='_blank'>View Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
