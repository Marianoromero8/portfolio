"use client";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "../context/context";

export default function AboutMe() {
  const { t, language } = useLanguage();
  return (
    <div className="flex flex-col lg:flex-col mb-20 lg:mb-24 gap-8 lg:gap-14 mx-auto w-[90%] lg:w-[80%]">
      <div
        id="aboutme"
        className="text-[#0094C6] flex flex-col lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16 text-center lg:text-left"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">
          {t("Sobre mí", "About me")}
        </h2>
      </div>
      <div className="lg:block">
        <Separator orientation="horizontal" className="bg-[#0094C6]" />
      </div>
      <div className="text-[#0094C6] flex flex-col gap-6 lg:gap-8 text-left lg:text-left pt-8">
        <p className="text-lg leading-relaxed">
          {language === "es" ? (
            <>
              Soy Mariano Romero,{" "}
              <strong className="font-bold">
                Técnico Universitario en Programación
              </strong>{" "}
              graduado de la UTN (Bahía Blanca, Argentina) y Desarrollador Full
              Stack. Me apasiona crear aplicaciones web utilizando JavaScript,
              TypeScript, React, Next.js y Node.js.
            </>
          ) : (
            <>
              I’m Mariano Romero, a graduate of UTN (Bahía Blanca, Argentina)
              with an{" "}
              <strong className="font-bold">
                Associate Degree in Programming
              </strong>{" "}
              and a Full Stack Developer. I’m passionate about building web
              applications using JavaScript, TypeScript, React, Next.js and
              Node.js.
            </>
          )}
        </p>

        <p className="text-lg leading-relaxed">
          {t(
            "Me enfoco en escribir código limpio que sea fácil de mantener y que se vea genial en cualquier dispositivo. He trabajado en proyectos reales como catálogos de alto rendimiento y plataformas de e-commerce, asegurándome siempre de que el frontend y el backend funcionen perfectamente juntos.",
            "I focus on writing clean code that is easy to maintain and looks great on any device. I’ve worked on real projects like high-performance catalogs and e-commerce platforms, always making sure the frontend and backend work perfectly together.",
          )}
        </p>

        <p className="text-lg leading-relaxed">
          {t(
            "Fuera de la programación, ser Scout Leader durante muchos años me ayudó a ser un mejor compañero de equipo y un comunicador claro. Siempre estoy aprendiendo cosas nuevas y buscando desafíos donde pueda seguir creciendo y ayudando a construir software de calidad.",
            "Outside of coding, being a Scout Leader for many years helped me become a better team player and a clear communicator. I’m always learning new things and looking for new challenges where I can keep growing and helping build great software.",
          )}
        </p>
        <h2 className="flex justify-center text-2xl sm:text-3xl hover:scale-110 transition duration-500">
          <a href="#contacts">
            {t("¡Trabajemos Juntos! 💻", "Let's work together! 💻")}
          </a>
        </h2>
      </div>
    </div>
  );
}
