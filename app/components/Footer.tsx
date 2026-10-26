"use client";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/context";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0094c6] text-[#000022] py-6 text-center w-full">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a
            href="https://github.com/Marianoromero8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-600 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/mariano-romero-489104272/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-gray-600 transition-colors" />
          </a>
          <a href="mailto:marianoromero97.mr@gmail.com">
            <FaEnvelope className="text-2xl hover:text-gray-600 transition-colors" />
          </a>
          <a
            href={t(
              "/CV_Mariano_Romero_Programador.pdf",
              "/Resume_Romero_Mariano_Software_Dev.pdf",
            )}
            target="_blank"
          >
            <FaFilePdf className="text-2xl hover:text-gray-600 transition-colors" />
          </a>
        </div>
        <p className="text-sm font-semibold">
          © {new Date().getFullYear()} Mariano Romero
        </p>
      </div>
    </footer>
  );
}
