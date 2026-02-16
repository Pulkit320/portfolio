
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-black/20 backdrop-blur-md border border-white/10 p-8 sm:p-12 rounded-2xl shadow-2xl"
                >
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 font-display uppercase">
                        Pulkit <span className="text-blue-400">Bathwal</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                        B.Tech in ECM <span className="mx-2 text-blue-400">•</span> Machine Learning & CP Enthusiast
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-blue-600/80 hover:bg-blue-600 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-blue-500/50"
                        >
                            Contact Me
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <a
                            href="/resume.pdf?v=2"
                            download="Pulkit_Resume.pdf"
                            className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-white/30"
                        >
                            Download Resume
                            <Download className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
