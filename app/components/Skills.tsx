import { DiPostgresql, DiPython } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiJavascript, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Progress } from "@/components/ui/progress"
import { CgCPlusPlus } from "react-icons/cg";
import { Separator } from "@/components/ui/separator";


const skills = [
    { id: 1, icon: <SiTypescript className="text-[#3178C6]" />, name: "Typescript", level: 60 },
    { id: 2, icon: <SiJavascript className="text-[#f7df1e]" />, name: "Javascript", level: 70 },
    { id: 3, icon: <SiReact />, name: "React.js", level: 70 },
    { id: 4, icon: <RiNextjsLine className="text-[#ffff]" />, name: "Next.js", level: 60 },
    { id: 5, icon: <SiTailwindcss className="text-[#06b6d4]" />, name: "Tailwind", level: 60 },
    { id: 6, icon: <DiPython />, name: "Python", level: 35 },
    { id: 7, icon: <DiPostgresql />, name: "PostgreSQL", level: 50 },
    { id: 8, icon: <FaNodeJs className="text-[#3C873A]" />, name: "Node.js", level: 50 },
    { id: 9, icon: <CgCPlusPlus />, name: "C++", level: 30 },
];

export default function Skills() {
    return (
        <div className="flex flex-row-reverse gap-14 mb-40 ml-3">
            <div id="skills" className="text-[#0094C6] flex flex-row lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16">
                {'Skills'.split('').map((letter, index) => (
                    <h2 key={index} className="text-3xl md:text-4xl lg:text-5xl text-center">
                        {letter}
                    </h2>
                ))}
            </div>
            <div className='hidden lg:block'>
                <Separator orientation="vertical" className="bg-[#0094C6]" />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-3 justify-center text-3xl text-[#0094C6] gap-28 p-5">
                {skills.map((sk) => (
                    <div
                        key={sk.id}
                        className="flex flex-col p-2 justify-center border border-[#0094C6] rounded gap-2 hover:scale-125 transition duration-500"
                    >
                        <h4 className="flex flex-col items-center gap-2">
                            {sk.icon} {sk.name}
                        </h4>
                        <div className="flex flex-row items-center gap-2 text-sm">
                            <Progress value={sk.level} className="text-[#0094C6] border border-[#0094C6]" />
                            <p>{sk.level}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
