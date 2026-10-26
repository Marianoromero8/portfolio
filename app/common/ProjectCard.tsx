"use client";
import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectLink?: string;
  codeLink: string;
  badge: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectLink,
  codeLink,
  badge,
  tags,
}) => {
  return (
    <div className="bg-transparent border border-[#0094c6] shadow-md rounded-lg overflow-hidden h-full flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full aspect-[2.1/1] object-contain"
      />
      <div className="flex flex-col flex-grow p-4">
        <div className="flex flex-col flex-grow">
          <span className="self-start text-xs font-semibold uppercase tracking-wide bg-[#0094c6] text-[#000022] rounded-full px-3 py-1 mb-2">
            {badge}
          </span>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-[#0094c6] opacity-80 flex-grow">{description}</p>
          <ul className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag) => (
              <li
                key={tag}
                className="text-xs border border-[#0094c6] rounded-full px-2 py-0.5"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex flex-row gap-4 pt-6 mt-auto">
            {projectLink && (
              <a href={projectLink} target="_blank">
                <FaGlobe />
              </a>
            )}
            <a href={codeLink} target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
