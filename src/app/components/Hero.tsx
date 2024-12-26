export default function Hero() {
    return (
        <section className="w-full bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    Hi, I&apos;m Leslie Aula 👋
                </h1>

                {/* Tagline */}
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
                    Software Engineer
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex space-x-4">
                    <a
                        href="/demos"
                        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Explore Demos
                    </a>
                    <a
                        href="/projects"
                        className="px-6 py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
