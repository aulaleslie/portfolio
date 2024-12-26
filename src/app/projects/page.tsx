"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsPage() {
    const projects = [
        {
            title: "Dan Liris Management System",
            description: "Developed a robust ERP system for PT Dan Liris, migrating from MEAN stack to React, .NET Core, and SQL Server. Handled CI/CD and database migration from MongoDB to SQL Server.",
            techStack: ["Aurelia.js", "React.js", ".NET Core", "SQL Server", "Azure"],
            image: "https://karir.batangkab.go.id/storage/company_logo/dd99a4af-1081-4caa-9d20-67d793a22626.jpg", // Image URL goes here
            demoLink: null,
            codeLink: "https://github.com/leslieaula/dl-ui",
        },
        {
            title: "Bateeq Management System",
            description: "Maintained and enhanced the system with similar improvements as the Dan Liris Management System.",
            techStack: ["Aurelia.js", "React.js", ".NET Core", "SQL Server", "Azure"],
            image: "https://pakuwonmall.com/uploads/tenant/bateeq.jpg", // Image URL goes here
            demoLink: null,
            codeLink: "https://github.com/leslieaula/bateeq-ui",
        },
        {
            title: "Dan Liris Inventory System",
            description: "Developed mobile and desktop apps for inventory management, integrated with the Dan Liris Management System.",
            techStack: ["Android (Java)", "WPF", ".NET Core", "SQL Server", "Azure"],
            image: "https://karir.batangkab.go.id/storage/company_logo/dd99a4af-1081-4caa-9d20-67d793a22626.jpg", // Image URL goes here
            demoLink: null,
            codeLink: null,
        },
        {
            title: "Dan Liris HR System",
            description: "Led the development of a no-touch attendance system during COVID-19 using AWS Rekognition and GCP Maps.",
            techStack: ["React Native", ".NET Core", "SQL Server", "AWS", "GCP", "Azure"],
            image: "https://karir.batangkab.go.id/storage/company_logo/dd99a4af-1081-4caa-9d20-67d793a22626.jpg", // Image URL goes here
            demoLink: null,
            codeLink: null,
        },
        {
            title: "Cycle Promotion Plan",
            description: "Accelerated development to meet deadlines as part of a 'firefighting' team.",
            techStack: ["Angular", ".NET Framework", "SQL Server", "Azure"],
            image: "https://upload.wikimedia.org/wikipedia/id/c/c2/HM_Sampoerna_logo1.png", // Image URL goes here
            demoLink: null,
            codeLink: null,
        },
        {
            title: "Centralized Trading Platform",
            description: "Led Kubernetes cluster setup and PostgreSQL HA configuration. Participated in backend development and established CI/CD pipelines.",
            techStack: ["Kubernetes", "Golang", "PostgreSQL", "Redis", "AMQ"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZgIU_PtRlEF5Pi3OyXd5JNL4TDGCNcluOg&s", // Image URL goes here
            demoLink: null,
            codeLink: null,
        },
        {
            title: "2K Identity SSO & OAuth Service",
            description: "Improved search performance by 3x and developed a banning mechanism for 2K Games' high-concurrency authentication system.",
            techStack: ["Java Spring Boot", "Golang", "MongoDB", "Redis", "Kafka", "AWS"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0GBzIqAp-EhCYoBoNdMw45GjO5HJ4OmqoA&s", // Image URL goes here
            demoLink: "https://portal.2k.com/",
            codeLink: null,
        },
        {
            title: "Muunship Grid Trading Bot",
            description: "Extended an existing Grid Trading Bot backend service with integrations for Bybit, Binance, and Phemex.",
            techStack: ["Golang", "Redis", "Oracle DB"],
            image: "https://lh3.googleusercontent.com/1-5kr0tmcBuJDC2xtfFdd7uVU_feU6F5zIXe_etv9tX20B6GTfJuuPgEYylUbVh3mDYLiEKOnykiL5iCtNCyhH5LmO8=s1280-w1280-h800", // Image URL goes here
            demoLink: null,
            codeLink: null,
        },
        {
            title: "NeuroAEye",
            description: "Refactored the codebase and wrote unit tests. Integrated Stripe as a payment gateway.",
            techStack: ["Golang", "Redis", "PostgreSQL"],
            image: "https://neuroaeye.com/wp-content/uploads/2024/09/head-logo.png", // Image URL goes here
            demoLink: null,
            codeLink: null,
        },
    ];

    const defaultImage =
        "https://via.placeholder.com/300x200.png";

    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    const techColors: { [key: string]: string } = {
        "React.js": "bg-blue-500 text-white",
        "React Native": "bg-cyan-500 text-white",
        "Aurelia.js": "bg-purple-500 text-white",
        "SQL Server": "bg-red-500 text-white",
        "Azure": "bg-blue-700 text-white",
        "WPF": "bg-green-500 text-white",
        ".NET Core": "bg-gray-700 text-white",
        ".NET Framework": "bg-gray-500 text-white",
        "Android (Java)": "bg-yellow-500 text-black",
        "AWS": "bg-orange-500 text-white",
        "GCP": "bg-green-600 text-white",
        "Angular": "bg-red-400 text-white",
        "Kubernetes": "bg-blue-600 text-white",
        "Golang": "bg-teal-500 text-white",
        "PostgreSQL": "bg-indigo-600 text-white",
        "Redis": "bg-orange-400 text-black",
        "MongoDB": "bg-green-400 text-black",
        "Kafka": "bg-gray-400 text-black",
        "Oracle DB": "bg-purple-600 text-white",
        "Java Spring Boot": "bg-green-700 text-white",
        "AMQ": "bg-pink-500 text-white",
    };


    const filteredProjects =
        selectedTech !== null
            ? projects.filter((project) =>
                project.techStack.includes(selectedTech)
            )
            : projects;

    return (
        <>
            <Head>
                <title>Projects | Leslie Aula</title>
                <meta
                    name="description"
                    content="Explore projects showcasing Leslie Aula's expertise in software development, covering various technologies like React.js, .NET Core, SQL Server, and more."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

                    {/* Filter by Tech Stack */}
                    <div className="flex flex-wrap justify-center mb-8">
                        {Object.keys(techColors).map((tech) => (
                            <button
                                key={tech}
                                onClick={() =>
                                    setSelectedTech(selectedTech === tech ? null : tech)
                                }
                                className={`m-2 px-4 py-2 rounded ${selectedTech === tech ? "ring-4 ring-blue-300" : ""
                                    } ${techColors[tech]}`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow"
                            >
                                {/* Project Image */}
                                <div className="mb-4">
                                    <Image
                                        src={project.image || defaultImage}
                                        alt={project.title}
                                        width={300} // Provide width
                                        height={200} // Provide height
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>

                                {/* Project Title */}
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                                {/* Project Description */}
                                <p className="mb-4">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-2 py-1 rounded text-sm ${techColors[tech]}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex space-x-4 mt-4">
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    {project.codeLink && (
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
