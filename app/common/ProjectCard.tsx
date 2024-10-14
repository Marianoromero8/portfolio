import React from 'react';

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
            <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-700 mb-4 flex-grow min-h-[100px]">{description}</p>
                <div className="flex justify-between mt-auto">
                    <a href={projectLink} className="text-blue-500 hover:underline">View Project</a>
                    <a href={codeLink} className="text-blue-500 hover:underline">View Code</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
