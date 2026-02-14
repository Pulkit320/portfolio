
"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center bg-black/40 backdrop-blur-md border border-white/10 p-12 rounded-2xl max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 font-display uppercase tracking-wider">Contact Information</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                        <a href="mailto:bathwalpulkit73@gmail.com" className="flex items-center text-gray-200 hover:text-blue-400 transition-all bg-white/5 border border-white/10 hover:border-blue-500/50 px-8 py-4 rounded-full backdrop-blur-sm group">
                            <Mail className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                            <span className="font-mono text-sm">bathwalpulkit73@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/pulkit-bathwal-72875a280/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-200 hover:text-blue-400 transition-all bg-white/5 border border-white/10 hover:border-blue-500/50 px-8 py-4 rounded-full backdrop-blur-sm group">
                            <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                            <span className="font-mono text-sm">LinkedIn Profile</span>
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Pulkit_Resume.pdf"
                            className="flex items-center text-gray-200 hover:text-blue-400 transition-all bg-white/5 border border-white/10 hover:border-blue-500/50 px-8 py-4 rounded-full backdrop-blur-sm group"
                        >
                            <span className="font-mono text-sm font-bold mr-2">CV</span>
                            <span className="font-mono text-sm">Download Resume</span>
                        </a>
                    </div>

                    <div className="flex items-center justify-center text-gray-500 font-mono text-sm uppercase tracking-widest">
                        <MapPin className="mr-2" size={16} />
                        <span>Chennai, Tamil Nadu, India</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
