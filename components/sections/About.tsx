
"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl"
                >
                    {/* Text Content */}
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6 font-display uppercase tracking-wider">About Me</h2>
                        <div className="prose prose-lg text-gray-300 font-light leading-relaxed">
                            <p className="mb-4">
                                I am an <span className="text-blue-400 font-medium">Electronics and Computer Engineering</span> student at Vellore Institute of Technology (Expected 2027), with a strong passion for Machine Learning and Competitive Programming. I have solved over <span className="text-white font-medium">250+ problems on LeetCode</span> and hold a Global Rank of <span className="text-white font-medium">2750 in CodeChef Starters 196</span>.
                            </p>
                            <p className="mb-4">
                                With a strong foundation in C++, Java, and Python, I enjoy building intelligent systems and solving complex algorithmic challenges. My academic journey includes deep dives into Object-Oriented Programming, Data Structures & Algorithms, and Machine Learning.
                            </p>
                            <p>
                                Currently maintaining a GPA of <span className="text-green-400 font-bold">8.61/10.0</span> and actively exploring new technologies in AI and software development.
                            </p>
                        </div>
                    </div>

                    {/* Image/Visual Placeholder */}
                    <div className="relative h-64 md:h-96 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-blue-500/30 transition-colors group">
                        <User className="w-24 h-24 text-gray-500 group-hover:text-blue-400 transition-colors" />
                        {/* 
              TODO: Replace with actual image
              <Image src="/path" alt="Pulkit Bathwal" fill className="object-cover rounded-lg" />
            */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
