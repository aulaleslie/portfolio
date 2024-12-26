"use client";

import Link from "next/link";

export default function DemosPage() {
    const demos = [
        {
            title: "Asynchronous Programming Demo",
            description:
                "Experience the power of asynchronous programming by comparing blocking and non-blocking operations in real-world scenarios.",
            link: "/demos/async",
        },
        {
            title: "Task Queuing System",
            description:
                "Visualize how tasks are queued and processed in real-time.",
            link: "/demos/queue",
        },
        {
            title: "Sorting Algorithm Comparison",
            description:
                "Analyze the performance of different sorting algorithms and understand their efficiency with visual demos.",
            link: "/demos/sorting",
        },
    ];

    return (
        <section className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Title */}
                <h1 className="text-4xl font-bold mb-8 text-center">Demos</h1>

                {/* Intro Text */}
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
                    Explore interactive demos showcasing my expertise in backend development, including asynchronous programming, queuing systems, and sorting algorithms.
                </p>

                {/* Demos Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {demos.map((demo, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow transition-transform transform hover:scale-105"
                        >
                            {/* Demo Title */}
                            <h3 className="text-xl font-bold mb-2">{demo.title}</h3>

                            {/* Demo Description */}
                            <p className="mb-4">{demo.description}</p>

                            {/* Demo Link */}
                            <div className="mt-4">
                                <Link
                                    href={demo.link}
                                    className="text-blue-500 hover:underline font-bold"
                                >
                                    Explore Demo →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
