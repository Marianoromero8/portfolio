'use client'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="contactme" className="bg-[#0094c6] text-[#000022] py-6 text-center w-full">
            <div className="container mx-auto flex flex-col items-center gap-4">
                <p className="text-lg font-semibold">© 2025 Mariano Romero</p>

                <div className="flex gap-6">
                    <a href="https://github.com/Marianoromero8" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl hover:text-gray-600 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/mariano-romero-489104272/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl hover:text-gray-600 transition-colors" />
                    </a>
                    <a href="mailto:marianoromero97.mr@gmail.com">
                        <FaEnvelope className="text-2xl hover:text-gray-600 transition-colors" />
                    </a>
                </div>
                <div className="flex flex-col font-semibold">
                    <div className="flex flex-row gap-2 justify-center">
                        <label htmlFor="">Tel:</label><p>+54 2915262746</p>
                    </div>
                    <div className="flex flex-row gap-2 justify-center">
                        <label htmlFor="">Email:</label><p>marianoromero97.mr@gmail.com</p>
                    </div>
                </div>
                <div className="text-sm flex flex-row gap-2 font-semibold">
                    <a href="/CV-Romero Mariano-Desarrollador Frontend.pdf" download="CV - Mariano Romero" className="hover:underline">CV</a>
                    <p>-</p>
                    <a href="/CV-Romero Mariano-Frontend Developer.pdf" download="Resume - Mariano Romero" className="hover:underline">Resume</a>
                </div>
            </div>
        </footer>
    )
}