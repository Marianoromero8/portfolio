"use client";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "../context/context";

interface TimelineItem {
  title: string;
  subtitle: { es: string; en: string };
  date: { es: string; en: string };
  description?: { es: string; en: string };
}

const experience: TimelineItem[] = [
  {
    title: "Punto Fiesta",
    subtitle: { es: "Freelance · Full Stack", en: "Freelance · Full Stack" },
    date: { es: "May 2026 – Ago 2026", en: "May 2026 – Aug 2026" },
    description: {
      es: "E-commerce completo: sitio público con carrito y checkout, panel de administración de pedidos y API REST con Express y PostgreSQL. Notificaciones automáticas por WhatsApp al confirmar cada compra.",
      en: "Complete e-commerce: public site with cart and checkout, order management dashboard and REST API with Express and PostgreSQL. Automatic WhatsApp notifications when each order is confirmed.",
    },
  },
  {
    title: "Blackout",
    subtitle: { es: "Freelance · Frontend", en: "Freelance · Frontend" },
    date: { es: "Mar 2026 – Abr 2026", en: "Mar 2026 – Apr 2026" },
    description: {
      es: "Landing page responsive para un emprendimiento local con React y TypeScript, desplegada en Vercel.",
      en: "Responsive landing page for a local business built with React and TypeScript, deployed on Vercel.",
    },
  },
  {
    title: "SSG Distribuidora",
    subtitle: { es: "Freelance · Frontend", en: "Freelance · Frontend" },
    date: { es: "Ene 2025 – Mar 2025", en: "Jan 2025 – Mar 2025" },
    description: {
      es: "Catálogo digital de alto rendimiento con Next.js y datos estáticos en JSON: carga inmediata y sin costos de servidor.",
      en: "High-performance digital catalog with Next.js and static JSON data: instant loading and no server costs.",
    },
  },
];

const education: TimelineItem[] = [
  {
    title: "Anthropic · Claude Code 101",
    subtitle: { es: "Certificación", en: "Certification" },
    date: { es: "Jun 2026", en: "Jun 2026" },
  },
  {
    title: "Anthropic · Claude 101",
    subtitle: { es: "Certificación", en: "Certification" },
    date: { es: "May 2026", en: "May 2026" },
  },
  {
    title: "Universidad Tecnológica Nacional (UTN)",
    subtitle: {
      es: "Técnico Universitario en Programación · Promedio 8.67/10",
      en: "Associate Degree in Programming · GPA 8.67/10",
    },
    date: { es: "Mar 2024 – Feb 2026", en: "Mar 2024 – Feb 2026" },
  },
  {
    title: "Cisco Networking Academy · Python Essentials 1",
    subtitle: { es: "Certificación", en: "Certification" },
    date: { es: "May 2023", en: "May 2023" },
  },
];

function Timeline({
  heading,
  items,
}: {
  heading: string;
  items: TimelineItem[];
}) {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl font-semibold">{heading}</h3>
      <ol className="border-l-2 border-[#0094C6] ml-2 flex flex-col gap-8">
        {items.map((item) => (
          <li key={item.title} className="relative pl-6">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0094C6]" />
            <p className="text-sm opacity-70">{item.date[language]}</p>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="text-sm font-medium opacity-90">
              {item.subtitle[language]}
            </p>
            {item.description && (
              <p className="mt-2 opacity-80">{item.description[language]}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col mb-24 gap-10 md:gap-14 mx-auto w-[90%] lg:w-[80%]">
      <div
        id="experience"
        className="text-[#0094C6] flex flex-col justify-center gap-1 lg:gap-4 scroll-mt-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">
          {t("Experiencia", "Experience")}
        </h2>
      </div>
      <Separator orientation="horizontal" className="bg-[#0094C6]" />
      <div className="text-[#0094C6] grid grid-cols-1 lg:grid-cols-2 gap-14">
        <Timeline heading={t("Trabajo", "Work")} items={experience} />
        <Timeline heading={t("Educación", "Education")} items={education} />
      </div>
    </div>
  );
}
