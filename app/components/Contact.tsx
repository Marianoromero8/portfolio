"use client";
import { useState } from "react";
import { FaCheck, FaCopy, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "../context/context";

const EMAIL = "marianoromero97.mr@gmail.com";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="flex flex-col mb-24 gap-10 md:gap-14 mx-auto w-[90%] lg:w-[80%]">
      <div
        id="contacts"
        className="text-[#0094C6] flex flex-col justify-center gap-1 lg:gap-4 scroll-mt-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">
          {t("Contacto", "Contact")}
        </h2>
      </div>
      <Separator orientation="horizontal" className="bg-[#0094C6]" />

      <div className="text-[#0094C6] flex flex-col items-center gap-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          {t("¿Trabajamos juntos? 💻", "Let's work together! 💻")}
        </h3>
        <p className="text-lg max-w-xl opacity-90">
          {t(
            "Estoy disponible para proyectos freelance y oportunidades full time. Escribime por email o LinkedIn y te respondo a la brevedad.",
            "I'm available for freelance projects and full-time opportunities. Reach out by email or LinkedIn and I'll get back to you shortly.",
          )}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 border border-[#0094C6] rounded-full pl-5 pr-2 py-2">
          <FaEnvelope />
          <a
            href={`mailto:${EMAIL}`}
            className="font-semibold hover:underline break-all"
          >
            {EMAIL}
          </a>
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 bg-[#0094C6] text-[#000022] rounded-full px-3 py-1 text-sm font-semibold hover:opacity-80 transition-opacity"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? t("¡Copiado!", "Copied!") : t("Copiar", "Copy")}
          </button>
        </div>

        <a
          href="https://www.linkedin.com/in/mariano-romero-489104272/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[#0094C6] rounded-full px-5 py-2 font-semibold hover:bg-[#0094C6] hover:text-[#000022] transition-colors"
        >
          <FaLinkedin className="text-xl" />
          {t("Escribime por LinkedIn", "Message me on LinkedIn")}
        </a>
      </div>
    </div>
  );
}
