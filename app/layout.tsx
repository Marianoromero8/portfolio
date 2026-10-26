import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/context";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://romero-mariano.vercel.app"),
  title: "Mariano Romero · Técnico en Programación y Desarrollador Full Stack",
  description:
    "Técnico Universitario en Programación (UTN) y Desarrollador Full Stack en Bahía Blanca. Creo e-commerce y sitios web para negocios reales con React, Next.js, Node.js y PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    (function() {
                        const theme = localStorage.getItem('theme') || 'light';
                        if (theme === 'dark') {
                            document.documentElement.classList.add('dark');
                        } else {
                            document.documentElement.classList.remove('dark');
                        }
                    })();
                    `,
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <NavBar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
