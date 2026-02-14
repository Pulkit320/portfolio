"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Market Tracer",
        category: "FinTech / AI",
        description: "LSTM-based model to predict short-term stock market direction. Features live data ingestion via Yahoo Finance and a Streamlit dashboard for real-time inference.",
        tags: ["Python", "LSTM", "Streamlit"],
        github: "#",
        demo: "#"
    },
    {
        title: "Estate Valuation",
        category: "Data Science",
        description: "Predictive model estimating house prices using Linear Regression. Analyzed historical data to establish correlations and visualized trends.",
        tags: ["Python", "Sklearn", "Pandas"],
        github: "#",
        demo: "#"
    },
    {
        title: "Portfolio 2026",
        category: "Web Development",
        description: "High-performance scrollytelling experience built with Next.js, Framer Motion, and HTML5 Canvas.",
        tags: ["Next.js", "Framer Motion", "Canvas"],
        github: "#",
        demo: "#"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-32 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">Selected Work</h2>
                    <div className="h-1 w-20 bg-blue-500/50 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">{project.category}</span>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                                    {project.title}
                                    <ArrowUpRight size={18} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                </h3>

                                <p className="text-gray-400 mb-8 leading-relaxed text-sm font-light">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
