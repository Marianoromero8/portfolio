// "use client";

// import {
//   SiTypescript,
//   SiJavascript,
//   SiReact,
//   SiTailwindcss,
//   SiCss3,
// } from "react-icons/si";
// import { DiDocker, DiPostgresql, DiPython } from "react-icons/di";
// import { FaDocker, FaNodeJs } from "react-icons/fa";
// import { RiNextjsLine } from "react-icons/ri";
// import { CgCPlusPlus } from "react-icons/cg";
// import { Separator } from "@/components/ui/separator";

// const skills = [
//   { id: 1, icon: <SiTypescript className="text-[#3178C6]" />, name: "TS" },
//   { id: 2, icon: <SiJavascript className="text-[#f7df1e]" />, name: "JS" },
//   { id: 3, icon: <SiReact />, name: "React" },
//   { id: 4, icon: <RiNextjsLine className="text-white" />, name: "Next" },
//   { id: 5, icon: <SiCss3 className="text-[#dd7d29]" />, name: "CSS" },
//   { id: 6, icon: <SiTailwindcss className="text-[#06b6d4]" />, name: "TW" },
//   { id: 7, icon: <DiPostgresql />, name: "Postgres" },
//   { id: 8, icon: <FaNodeJs className="text-[#3C873A]" />, name: "Node" },
//   { id: 9, icon: <DiPython />, name: "Python" },
//   { id: 10, icon: <CgCPlusPlus />, name: "C++" },
//   { id: 11, icon: <FaDocker />, name: "Docker" },
// ];

// export default function Skills() {
//   return (
//     <div className="flex flex-col items-center justify-center pt-20 mb-40">
//       <div
//         id="skills"
//         className="text-[#0094C6] flex flex-col lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16 text-center lg:text-left mb-20"
//       >
//         <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">Skills</h2>
//       </div>
//       <div className="lg:block">
//         <Separator orientation="horizontal" className="bg-[#0094C6]" />
//       </div>
//       <div className="relative w-full">
//         <div className="flex gap-40 animate-slide whitespace-nowrap px-4">
//           {/* Duplicamos los íconos para que el loop sea continuo */}
//           {[...skills].map((skill, index) => (
//             <div
//               key={index}
//               className="text-[80px] text-[#0094C6] flex-shrink-0 hover:scale-110 transition-transform duration-300"
//               title={skill.name}
//             >
//               {skill.icon}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiCss3,
} from "react-icons/si";
import { DiPostgresql, DiPython } from "react-icons/di";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { CgCPlusPlus } from "react-icons/cg";
import { Separator } from "@/components/ui/separator";

const skills = [
  { id: 1, icon: <SiTypescript className="text-[#3178C6]" />, name: "TS" },
  { id: 2, icon: <SiJavascript className="text-[#f7df1e]" />, name: "JS" },
  { id: 3, icon: <SiReact className="text-[#61DBFB]" />, name: "React" },
  { id: 4, icon: <RiNextjsLine className="text-white" />, name: "Next" },
  { id: 5, icon: <SiCss3 className="text-[#dd7d29]" />, name: "CSS" },
  { id: 6, icon: <SiTailwindcss className="text-[#06b6d4]" />, name: "TW" },
  {
    id: 7,
    icon: <DiPostgresql className="text-[#336791]" />,
    name: "Postgres",
  },
  { id: 8, icon: <FaNodeJs className="text-[#3C873A]" />, name: "Node" },
  { id: 9, icon: <DiPython className="text-[#3776AB]" />, name: "Python" },
  { id: 10, icon: <CgCPlusPlus className="text-[#73b5e7]" />, name: "C++" },
  { id: 11, icon: <FaDocker className="text-[#0db7ed]" />, name: "Docker" },
];

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 mb-40 overflow-hidden">
      <div
        id="skills"
        className="text-[#0094C6] flex flex-col lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16 text-center lg:text-left mb-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">Skills</h2>
      </div>
      <Separator
        orientation="horizontal"
        className="bg-[#0094C6] w-3/4 mb-10"
      />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-10 place-items-center">
        {/* Duplicamos el contenido para crear el loop */}
        {[...skills].map((skill, index) => (
          <div
            key={index}
            className="text-[50px] text-[#0094C6] p-5 flex-shrink-0 hover:scale-125 transition-transform duration-300"
            title={skill.name}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
