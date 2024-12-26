"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import hook to get the current path

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("");
    const pathname = usePathname(); // Get the current route path (e.g., "/", "/projects")

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100; // Adjust for Navbar height
                if (window.scrollY >= sectionTop) {
                    currentSection = section.getAttribute("id") || "";
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">
                    Leslie Aula
                </a>
                <div className="space-x-4">
                    {/* About Me Link */}
                    <a
                        href="#about-me"
                        className={`hover:text-blue-500 ${pathname === "/" && activeSection === "about-me"
                                ? "text-blue-500 font-bold"
                                : ""
                            }`}
                    >
                        About Me
                    </a>

                    {/* Projects Link */}
                    <a
                        href="/projects"
                        className={`hover:text-blue-500 ${pathname === "/projects" ? "text-blue-500 font-bold" : ""
                            }`}
                    >
                        Projects
                    </a>

                    {/* Demos Link */}
                    <a
                        href="/demos"
                        className={`hover:text-blue-500 ${pathname === "/demos" ? "text-blue-500 font-bold" : ""
                            }`}
                    >
                        Demos
                    </a>
                </div>
            </nav>
        </header>
    );
}
