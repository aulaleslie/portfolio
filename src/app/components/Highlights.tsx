export default function Highlights() {
    return (
        <section className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose Me?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Highlight 1: Well-Rounded Development Skills */}
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-2">Well-Rounded Developer</h3>
                        <p>
                            Expertise in both frontend and backend development, with hands-on experience in building full-stack applications using modern frameworks like React, Angular, and Node.js.
                        </p>
                    </div>

                    {/* Highlight 2: Backend Development */}
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                        <p>
                            Strong focus on building scalable, high-performance backend systems with Node.js, Java Spring Boot, .NET Core, and databases like MongoDB and PostgreSQL.
                        </p>
                    </div>

                    {/* Highlight 3: Cloud & DevOps */}
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-2">Cloud & DevOps Expertise</h3>
                        <p>
                            Skilled in setting up cloud infrastructure with Azure, AWS, and IBM Cloud, and implementing CI/CD pipelines with Docker, Kubernetes, and Jenkins.
                        </p>
                    </div>

                    {/* Highlight 4: Frontend Development */}
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                        <p>
                            Proficient in creating modern, responsive UIs with React, Angular, and Aurelia, ensuring a seamless user experience across devices.
                        </p>
                    </div>

                    {/* Highlight 5: Problem Solving */}
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
                        <p>
                            Adept at tackling complex technical challenges, with a proven track record of optimizing system performance and improving code quality.
                        </p>
                    </div>

                    {/* Highlight 6: Testing & Quality Assurance */}
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-2">Testing & Quality Assurance</h3>
                        <p>
                            Experienced in ensuring code quality with tools like SonarQube, Code Climate, and performance testing frameworks like K6.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
