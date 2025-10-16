import { Separator } from "@/components/ui/separator";

export default function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-col mb-20 lg:mb-40 gap-8 lg:gap-14 mx-auto w-[90%] lg:w-[80%]">
      <div
        id="aboutme"
        className="text-[#0094C6] flex flex-col lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16 text-center lg:text-left"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">
          About me
        </h2>
      </div>
      <div className="lg:block">
        <Separator orientation="horizontal" className="bg-[#0094C6]" />
      </div>
      <div className="text-[#0094C6] flex flex-col gap-6 lg:gap-8 text-left lg:text-left pt-8">
        <p>
          I am Mariano Romero an advanced student of the Tecnicatura
          Universitaria en Programación at UTN, Bahía Blanca, Argentina and a
          passionate software developer. I have experience developing frontend
          applications using modern technologies such as React.js, Next.js,
          TypeScript and Tailwind CSS as well as working with backend tools like
          Node.js and databases like PostgreSQL.
        </p>
        <p>
          Throughout my studies and projects, I have focused on building
          user-friendly, responsive and maintainable software. I am proactive,
          detail-oriented and always eager to learn new technologies to enhance
          my skills as a developer.
        </p>
        <p>
          My goal is to grow professionally as a software developer, taking on
          challenges that allow me to contribute effectively to projects while
          expanding my knowledge in both frontend and backend development.
        </p>
        <h2 className="flex justify-center text-2xl sm:text-3xl hover:scale-110 transition duration-500">
          <a href="mailto:marianoromero97.mr@gmail.com">
            Let's work together! 💻
          </a>
        </h2>
      </div>
    </div>
  );
}
