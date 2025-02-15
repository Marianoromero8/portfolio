import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Romero Mariano",
  description: "Resume my profesional profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
                    (function() {
                        const theme = localStorage.getItem('theme') || 'light';
                        if (theme === 'dark') {
                            document.documentElement.classList.add('dark');
                        } else {
                            document.documentElement.classList.remove('dark');
                        }
                    })();
                    `
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
