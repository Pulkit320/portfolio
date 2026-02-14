
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="flex space-x-8">
                        <a
                            href="https://www.linkedin.com/in/pulkitbathwal-72875a280"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                        >
                            <Linkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:bathwalpulkit73@gmail.com"
                            className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                        >
                            <Mail size={24} />
                            <span className="sr-only">Email</span>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                        >
                            <Github size={24} />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>
                    <p className="text-center text-xs text-gray-500 font-mono uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Pulkit Bathwal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
