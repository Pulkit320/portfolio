
"use client";

import { motion } from "framer-motion";

const skills = {
    languages: ["C/C++", "Python", "Java", "SQL", "JavaScript", "HTML/CSS"],
    machineLearning: ["Deep Learning", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
    tools: ["Git/GitHub", "Kaggle", "Streamlit", "VS Code", "Jupyter Notebook"],
    coursework: ["Data Structures & Algorithms", "OS", "DBMS", "OOP", "Computer Networks"]
};

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-16 font-display uppercase tracking-wider">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:border-blue-500/30 transition-all hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-bold text-blue-400 mb-4 capitalize font-display tracking-wide">
                                {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/5 font-mono hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
