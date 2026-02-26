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
      <div className="flex-1 w-full flex flex-col justify-center text-center">
        <h1 className="text-3xl md:text-5xl md:mt-20 max-w-xl mx-auto font-bold leading-tight whitespace-nowrap">
          {t("Hola, Soy Romero Mariano", "Hi, I'm Romero Mariano")}
        </h1>
        <br />
        <section className="text-center max-w-2xl mx-auto my-6">
          <p className="text-[#0094C6] text-lg">
            {t(
              "Un desarrollador de software apasionado, con base en Argentina y experiencia en React, TypeScript, Node.js y PostgreSQL. Me entusiasma crear soluciones web eficientes que combinan un gran rendimiento con un diseño atractivo.",
              "A dedicated software developer from Argentina experienced in React, TypeScript, Node.js and PostgreSQL. I’m passionate about building efficient web solutions that combine great performance with beautiful design.",
            )}
          </p>
        </section>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex justify-center"
        >
          <Button
            variant="dark"
            className="flex items-center gap-2 mt-4 px-4 py-2 relative overflow-hidden"
            onClick={() =>
              (window.location.href = "mailto:marianoromero97.mr@gmail.com")
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
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center pt-8">
        <Image
          src="/Foto.jpeg"
          alt="Foto-Mia"
          width={300}
          height={300}
          priority
          className="object-contain max-w-[200px] md:max-w-[300px] lg:max-w-[550px] h-auto rounded-full w-[550px]"
        />
      </div>
    </div>
  );
}
