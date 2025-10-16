"use client";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="bg-[#0094c6] text-[#000022] py-6 text-center w-full"
    >
      <div className="container mx-auto flex flex-col items-center gap-4">
        <p className="text-lg font-semibold">© 2025 Mariano Romero</p>

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
            href="/Resume - Romero Mariano.pdf"
            download="Resume - Romero Mariano"
          >
            <FaFilePdf className="text-2xl hover:text-gray-600 transition-colors" />
          </a>
        </div>
        <div className="flex flex-col font-semibold">
          <div className="flex flex-row gap-2 justify-center">
            <label htmlFor="">Email:</label>
            <p>marianoromero97.mr@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
