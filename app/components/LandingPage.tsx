"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";
import { useLanguage } from "../context/context";

export default function Landing() {
  const [hover, setHover] = useState(false);
  const { t } = useLanguage();
  return (
    <div
      id="landing"
      className="flex flex-col-reverse md:flex-row items-center gap-8 text-[#0094C6] py-6 px-6 md:py-10 md:px-32 h-full md:h-screen mb-20"
    >
      <div className="w-full flex flex-col justify-center text-center">
        <h1 className="text-3xl md:text-5xl md:mt-20 max-w-xl mx-auto font-bold leading-tight whitespace-nowrap">
          {t("Hola, soy Mariano Romero", "Hi, I'm Mariano Romero")}
        </h1>
        <p className="text-xl md:text-2xl font-semibold mt-4">
          {t(
            "Técnico Universitario en Programación · UTN",
            "Associate Degree in Programming · UTN",
          )}
        </p>
        <section className="text-center max-w-2xl mx-auto my-6">
          <p className="text-[#0094C6] text-lg">
            {t(
              "Desarrollador Full Stack. Construyo e-commerce y sitios para negocios reales, de punta a punta: frontend, backend, base de datos e integraciones como WhatsApp.",
              "Full Stack Developer. I build e-commerce and websites for real businesses, end to end: frontend, backend, database and integrations like WhatsApp.",
            )}
          </p>
        </section>
        <div className="flex justify-center gap-4">
          <Button
            variant="basic"
            className="mt-4 px-4 py-2 border border-transparent hover:border-[#0094C6]"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("Ver proyectos", "View projects")}
          </Button>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Button
              variant="dark"
              className="flex items-center gap-2 mt-4 px-4 py-2 relative overflow-hidden"
              onClick={() =>
                document
                  .getElementById("contacts")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("Contrátame", "Hire me")}
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: hover ? 0 : -10, opacity: hover ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center pt-8">
        <Image
          src="/Foto.jpeg"
          alt="Foto-Mia"
          width={300}
          height={300}
          priority
          className="object-contain rounded-full h-auto w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px]"
        />
      </div>
    </div>
  );
}
