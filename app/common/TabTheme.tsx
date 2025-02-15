// import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { useEffect, useState } from 'react';

// export default function TabTheme() {
//     const [theme, setTheme] = useState(() => {
//         if (typeof window !== "undefined") {
//             return localStorage.getItem("theme") || "light";
//         }
//         return "light";
//     });

//     useEffect(() => {
//         if (theme === "dark") {
//             document.documentElement.classList.add("dark");
//         } else {
//             document.documentElement.classList.remove("dark");
//         }
//         localStorage.setItem("theme", theme);
//     }, [theme]);

//     if (theme === null) return null;

//     return (
//         <div className='flex w-20 h-10 items-center pl-3 '>
//             <Tabs
//                 value={theme}
//                 onValueChange={(value) => setTheme(value)}
//                 className="w-[200px]"
//             >
//                 <TabsList className="grid w-14 grid-cols-2 bg-[#0094C6] dark:bg-gray-800">
//                     <TabsTrigger value="light" className="">☀️</TabsTrigger>
//                     <TabsTrigger value="dark" className="">🌙</TabsTrigger>
//                 </TabsList>
//             </Tabs>
//         </div>
//     )
// }
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

export default function TabTheme() {
    const [theme, setTheme] = useState(""); // Se inicializa en light para evitar desajustes
    const [mounted, setMounted] = useState(false); // Estado para evitar render SSR incorrecto

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme); // Sincronizar el estado con localStorage
        setMounted(true); // Marcar que el componente ya se montó correctamente
    }, []);

    useEffect(() => {
        if (mounted) {
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            localStorage.setItem("theme", theme);
        }
    }, [theme, mounted]);

    return (
        <div className="flex w-20 h-10 items-center pl-3">
            <Tabs value={theme} onValueChange={(value) => setTheme(value)} className="w-[200px]">
                <TabsList className="grid w-14 grid-cols-2 bg-[#0094C6] dark:bg-gray-800">
                    <TabsTrigger value="light">☀️</TabsTrigger>
                    <TabsTrigger value="dark">🌙</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
}
