import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
                {/* Left Section: Copyright */}
                <div className="text-sm text-center sm:text-left mb-4 sm:mb-0">
                    © {new Date().getFullYear()} <span className="font-bold">Leslie Aula</span>. All rights reserved.
                </div>

                {/* Right Section: Social Links */}
                <div className="flex items-center space-x-6">
                    <a
                        href="https://github.com/leslieaula"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <GithubIcon className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/leslie-aula-990867270/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <a
                        href="mailto:aulaleslie@gmail.com"
                        className="hover:text-blue-500"
                    >
                        <MailIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
