export default function AboutMe() {
    return (
      <section className="w-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="flex flex-col sm:flex-row gap-10">
            {/* Summary Section */}
            <div className="sm:w-1/2">
              <p className="text-lg mb-4">
                I am a seasoned Software Development Engineer with over 8 years of experience building scalable, high-performance systems across diverse technologies. Currently, I specialize in backend development and have expertise in asynchronous programming, queuing systems, and performance optimization.
              </p>
              <p className="text-lg">
                My work spans building Identity and OAuth services, designing scalable systems with MongoDB and Redis, and optimizing backend services for performance. I thrive on solving complex challenges and contributing to impactful projects.
              </p>
            </div>
  
            {/* Technical Skills */}
            <div className="sm:w-1/2">
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Programming: Go, Java (Spring Boot), C# (.NET Core), JavaScript, TypeScript, SQL</li>
                <li>Frontend: ReactJS, AngularJS, AureliaJS</li>
                <li>Backend: Node.js (Express.js), .NET Core, Java Spring Boot</li>
                <li>Databases: MongoDB, PostgreSQL, Redis, Azure SQL</li>
                <li>Cloud: Azure, AWS, IBM Cloud, GCP</li>
                <li>DevOps: Jenkins, Kubernetes, Docker, Travis CI</li>
                <li>Testing: K6, SonarQube, Code Climate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  