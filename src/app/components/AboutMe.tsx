export default function AboutMe() {
  return (
    <section id="about-me" className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="sm:w-1/2">
            <p className="text-lg mb-4">
              I am a seasoned Software Development Engineer with over 8 years of experience building scalable, high-performance systems across diverse technologies.
            </p>
            <p className="text-lg">
              My work spans building Identity and OAuth services, designing scalable systems with MongoDB and Redis, and optimizing backend services for performance.
            </p>
          </div>

          <div className="sm:w-1/2">
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Programming: Go, Java (Spring Boot), C# (.NET Core), JavaScript, TypeScript</li>
              <li>Frontend: ReactJS, AngularJS, AureliaJS</li>
              <li>Backend: Node.js (Express.js), .NET Core, Java Spring Boot</li>
              <li>Cloud: Azure, AWS, IBM Cloud</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
