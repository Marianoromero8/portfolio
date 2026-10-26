"use client";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiClaude,
  SiJira,
} from "react-icons/si";
import { FaChartBar } from "react-icons/fa6";
import { DiPostgresql, DiPython } from "react-icons/di";
import { FaDocker, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { CgCPlusPlus } from "react-icons/cg";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "../context/context";

const skillGroups = [
  {
    title: { es: "Lenguajes", en: "Languages" },
    wide: true,
    skills: [
      { icon: <SiJavascript className="text-[#f7df1e]" />, name: "JavaScript" },
      { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
      { icon: <DiPython className="text-[#3776AB]" />, name: "Python" },
      { icon: <CgCPlusPlus className="text-[#73b5e7]" />, name: "C++" },
    ],
  },
  {
    title: { es: "Frontend", en: "Frontend" },
    skills: [
      { icon: <SiReact className="text-[#61DBFB]" />, name: "React" },
      {
        icon: <RiNextjsLine className="text-black dark:text-white" />,
        name: "Next.js",
      },
      { icon: <SiTailwindcss className="text-[#06b6d4]" />, name: "Tailwind" },
      { icon: <SiHtml5 className="text-[#E34F26]" />, name: "HTML" },
      { icon: <SiCss3 className="text-[#dd7d29]" />, name: "CSS" },
      { icon: <SiRedux className="text-[#764ABC]" />, name: "Redux" },
    ],
  },
  {
    title: { es: "Backend", en: "Backend" },
    skills: [
      { icon: <FaNodeJs className="text-[#3C873A]" />, name: "Node.js" },
      {
        icon: <SiExpress className="text-black dark:text-white" />,
        name: "Express",
      },
    ],
  },
  {
    title: { es: "Bases de datos", en: "Databases" },
    skills: [
      { icon: <DiPostgresql className="text-[#336791]" />, name: "PostgreSQL" },
      { icon: <SiMysql className="text-[#00758F]" />, name: "MySQL" },
      { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
      { icon: <SiFirebase className="text-[#FFCA28]" />, name: "Firebase" },
    ],
  },
  {
    title: { es: "Herramientas", en: "Tools" },
    skills: [
      { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
      {
        icon: <SiGithub className="text-black dark:text-white" />,
        name: "GitHub",
      },
      { icon: <SiJira className="text-[#0052CC]" />, name: "Jira" },
      { icon: <FaChartBar className="text-[#F2C811]" />, name: "Power BI" },
      { icon: <SiClaude className="text-[#D97757]" />, name: "Claude Code" },
      { icon: <FaDocker className="text-[#0db7ed]" />, name: "Docker" },
    ],
  },
];

export default function Skills() {
  const { t, language } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center pt-10 mb-24 w-[90%] lg:w-[80%] mx-auto">
      <div
        id="skills"
        className="text-[#0094C6] flex flex-col lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16 text-center lg:text-left mb-10 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">
          {t("Habilidades", "Skills")}
        </h2>
      </div>
      <Separator orientation="horizontal" className="bg-[#0094C6] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full text-[#0094C6]">
        {skillGroups.map((group) => (
          <div
            key={group.title.en}
            className={`flex flex-col gap-4 ${group.wide ? "md:col-span-2" : ""}`}
          >
            <h3 className="text-xl font-semibold text-center md:text-left">
              {group.title[language]}
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 w-20 hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-[44px]">{skill.icon}</span>
                  <span className="text-sm text-center leading-tight">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
