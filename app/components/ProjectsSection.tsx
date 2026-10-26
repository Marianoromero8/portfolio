"use client";
import React from "react";
import ProjectCard from "../common/ProjectCard";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/app/context/context";

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const client = t("Cliente real", "Client project");

  return (
    <div className="flex flex-col lg:flex-col mb-24 gap-10 md:gap-14 mx-5 md:mx-16 lg:mx-32">
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
          title="Punto Fiesta"
          badge={client}
          description={t(
            "E-commerce con panel de administración de pedidos y notificaciones automáticas por WhatsApp al confirmar cada compra.",
            "E-commerce with an order management dashboard and automatic WhatsApp notifications when each purchase is confirmed.",
          )}
          tags={["Next.js", "TypeScript", "Zustand", "Express", "PostgreSQL"]}
          imageUrl="/punto-fiesta.png"
          projectLink="https://www.puntofiestabahia.com/"
          codeLink="https://github.com/Marianoromero8/puntofiesta"
        />

        <ProjectCard
          title="SSG Distribuidora"
          badge={client}
          description={t(
            "Catálogo digital para una distribuidora local, con carga inmediata y sin costos de servidor gracias a datos estáticos.",
            "Digital catalog for a local distributor, loading instantly with no server costs thanks to static data.",
          )}
          tags={["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"]}
          imageUrl="/ssgdistribuidoraPhoto.png"
          projectLink="https://www.ssgdistribuidora.com.ar/"
          codeLink="https://github.com/Marianoromero8/ssg-distribuidora.git"
        />

        <ProjectCard
          title="Blackout Landing Page"
          badge={client}
          description={t(
            "Landing page responsive para un emprendimiento local, pensada para mejorar su presencia digital y atraer clientes.",
            "Responsive landing page for a local business, designed to boost its digital presence and attract customers.",
          )}
          tags={["React", "TypeScript", "Vercel"]}
          imageUrl="/tienda-blackout.png"
          projectLink="https://www.tiendablackout.com.ar/"
          codeLink="https://github.com/Marianoromero8/blackout-landing"
        />

        <ProjectCard
          title={t("Proyecto Final - UTN", "Final Project - UTN")}
          badge={t("Académico", "Academic")}
          description={t(
            "E-commerce de suplementos con carrito dinámico, estado global y panel de administración. Proyecto final de la Tecnicatura en Programación.",
            "Supplements e-commerce with a dynamic cart, global state and admin dashboard. Capstone project for the Programming degree.",
          )}
          tags={["React", "TypeScript", "Tailwind CSS", "React Router", "Zod"]}
          imageUrl="/PI-UTN.png"
          projectLink="https://frontend-suplementos-one.vercel.app/"
          codeLink="https://github.com/Marianoromero8/frontend-suplementos.git"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
