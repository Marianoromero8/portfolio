import { Separator } from '@/components/ui/separator';
import ProjectCard from "../common/ProjectCard";

export default function Works() {
    return (
        <div className='flex flex-col lg:flex-row mb-40 gap-10 md:gap-14 mx-5 md:mx-16 lg:mx-32'>
            <div id="works" className="text-[#0094C6] flex flex-row lg:flex-col justify-center gap-1 lg:gap-4 scroll-mt-16">
                {'Works'.split('').map((letter, index) => (
                    <h2 key={index} className="text-3xl md:text-4xl lg:text-5xl text-center">
                        {letter}
                    </h2>
                ))}
            </div>
            <div className='hidden lg:block'>
                <Separator orientation="vertical" className="bg-[#0094C6]" />
            </div>
            <div className="text-[#0094C6] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 md:p-5 xl:pt-8">
                <ProjectCard
                    title="SSG Distribuidora"
                    description="A web application developed with Next.js, TypeScript, and Tailwind CSS, designed for a local distributor. The goal is to display the products they sell efficiently, with a modern, easy-to-navigate interface, providing an optimized and responsive user experience."
                    imageUrl="/ssgdistribuidoraPhoto.png"  // Ajusta la ruta a tu carpeta de imágenes
                    projectLink="https://www.ssgdistribuidora.com.ar/"
                    codeLink="https://github.com/Marianoromero8/ssg-distribuidora.git"  // Cambia este enlace por el repositorio del código
                />
            </div>
        </div>
    )
}
