"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface OverlayProps {
    containerRef: React.RefObject<HTMLElement | null>;
}

export function Overlay({ containerRef }: OverlayProps) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Section 1: 0% - 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    // Section 2: 20% - 50%
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

    // Section 3: 50% - 80%
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
            <div className="sticky top-0 w-full h-screen overflow-hidden">

                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1, scale: scale1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
                >
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl font-display">
                        PULKIT<br />BATHWAL
                    </h1>
                    <div className="h-1 w-24 bg-blue-500 mx-auto mt-6 mb-6"></div>
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-[0.2em] uppercase font-mono">
                        Creative Developer
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute top-1/2 left-0 pl-10 md:pl-32 -translate-y-1/2 w-full max-w-4xl"
                >
                    <h2 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tight">
                        I BUILD <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            DIGITAL<br />EXPERIENCES.
                        </span>
                    </h2>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute top-1/2 right-0 pr-10 md:pr-32 -translate-y-1/2 w-full max-w-4xl text-right"
                >
                    <h2 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tight">
                        BRIDGING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-cyan-500">
                            DESIGN &<br />ENGINEERING.
                        </span>
                    </h2>
                </motion.div>

            </div>
        </div>
    );
}
