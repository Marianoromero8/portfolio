"use client";
import React from "react";
import ProjectCard from "../common/ProjectCard";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/app/context/context";

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-col mb-40 gap-10 md:gap-14 mx-5 md:mx-16 lg:mx-32">
      <div
        id="projects"
        className="text-[#0094C6] flex flex-col lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center xl:text-4xl">
          {t("Proyectos", "Projects")}
        </h2>
      </div>
      <div className="lg:block">
        <Separator orientation="horizontal" className="bg-[#0094C6]" />
      </div>
      <div className="text-[#0094C6] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 md:p-5 xl:pt-8">
        <ProjectCard
          title="SSG Distribuidora"
          description={t(
            "Una aplicación web desarrollada con Next.js, TypeScript y Tailwind CSS, diseñada para una distribuidora local. El objetivo es mostrar los productos de manera eficiente, con una interfaz moderna y fácil de navegar, brindando una experiencia de usuario optimizada y responsive.",
            "A web application developed with Next.js, TypeScript, and Tailwind CSS, designed for a local distributor. The goal is to display the products they sell efficiently, with a modern, easy-to-navigate interface, providing an optimized and responsive user experience.",
          )}
          imageUrl="/ssgdistribuidoraPhoto.png"
          projectLink="https://www.ssgdistribuidora.com.ar/"
          codeLink="https://github.com/Marianoromero8/ssg-distribuidora.git"
        />

        <ProjectCard
          title="ChampionGear"
          description={t(
            "Un e-commerce de ropa deportiva con autenticación de terceros mediante Firebase, Stripe integrado para procesamiento de pagos y Redux Toolkit para la gestión del estado global.",
            "An e-commerce for sports clothing with third-party authentication using Firebase, integrated Stripe for payment processing and Redux Toolkit for state management.",
          )}
          imageUrl="/ChampionGear.jpeg"
          codeLink="https://github.com/Marianoromero8/ProyectoFinal.git"
        />

        <ProjectCard
          title="VideoGames API"
          description={t(
            "Una aplicación web que consume datos de una API externa de videojuegos. Construida utilizando Node.js, PostgreSQL, JavaScript, React y Redux.",
            "A web app that fetches data from an external video game API and displays it. Built using Node.js, PostgreSQL, JavaScript, React, and Redux.",
          )}
          imageUrl="/PI-Videogames.jpeg"
          codeLink="https://github.com/Marianoromero8/frontend-proyecto-individual"
        />

        <ProjectCard
          title={t("Proyecto Final - UTN", "Final Project - UTN")}
          description={t(
            "Arquitectura Full-Stack que cuenta con gestión de estado global, carrito de compras dinámico y un panel de administración para la gestión de productos y pedidos. Proyecto final de la Tecnicatura Universitaria en Programación en la UTN.",
            "Full-Stack architecture featuring global state management, a dynamic shopping cart, and an admin dashboard for product and order management. Capstone project for the Computer Programming degree at UTN.",
          )}
          imageUrl="/PI-UTN.png"
          projectLink="https://frontend-suplementos-one.vercel.app/"
          codeLink="https://github.com/Marianoromero8/frontend-suplementos.git"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
