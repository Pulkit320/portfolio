"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";

const FRAME_COUNT = 144;
const IMAGES_FOLDER = "/sequence";

interface ScrollyCanvasProps {
    containerRef: React.RefObject<HTMLElement | null>;
}

export function ScrollyCanvas({ containerRef }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // We need to track scroll progress of the main window since the component is sticky
    // But strictly speaking, for a "scrollytelling" section, we often want the progress 
    // to be relative to the specific container. 
    // However, the prompt asks for a "500vh" parent container in page.tsx.
    // We can just use window scroll for simplicity if it's the main feature, 
    // or useScroll({ target: containerRef }) if we want it scoped.
    // Given the "sticky" requirement, the canvas itself stays fixed while we scroll.
    // We'll use window scroll for now as it's a full-page experience.

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Create a transform that maps the first part of the page scroll to the frames
    // Assuming the scroll container is 500vh, we want to map 0-1 of that container
    // to 0-FRAME_COUNT.
    // Since we are likely using the whole page for this, scrollYProgress (0-1) is fine.

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    const frameIndex = i.toString().padStart(3, "0");
                    img.src = `${IMAGES_FOLDER}/${frameIndex}.png`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = reject;
                });
                promises.push(promise);
            }

            try {
                await Promise.all(promises);
                setImages(loadedImages);
                setIsLoaded(true);
            } catch (error) {
                console.error("Failed to load images", error);
            }
        };

        loadImages();
    }, []);

    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const img = images[index];

        // We want to draw the image to cover the canvas
        const drawImageProp = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
            const w = canvas.width;
            const h = canvas.height;
            const x = 0;
            const y = 0;

            // default offset is center
            let offsetX = 0.5;
            let offsetY = 0.5;

            // keep bounds [0.0, 1.0]
            if (offsetX < 0) offsetX = 0;
            if (offsetY < 0) offsetY = 0;
            if (offsetX > 1) offsetX = 1;
            if (offsetY > 1) offsetY = 1;

            let iw = img.width,
                ih = img.height,
                r = Math.min(w / iw, h / ih),
                nw = iw * r,   // new prop. width
                nh = ih * r,   // new prop. height
                cx, cy, cw, ch, ar = 1;

            // decide which gap to fill    
            if (nw < w) ar = w / nw;
            if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
            nw *= ar;
            nh *= ar;

            // calc source rectangle
            cw = iw / (nw / w);
            ch = ih / (nh / h);

            cx = (iw - cw) * offsetX;
            cy = (ih - ch) * offsetY;

            // make sure source rectangle is valid
            if (cx < 0) cx = 0;
            if (cy < 0) cy = 0;
            if (cw > iw) cw = iw;
            if (ch > ih) ch = ih;

            ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
        }

        drawImageProp(ctx, img);
    }, [images]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // We map the 0-1 progress to frames.
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Handle resize and initial render
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current && window) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;

                if (images.length > 0 && isLoaded) {
                    const currentProgress = scrollYProgress.get();
                    const frameIndex = Math.min(
                        FRAME_COUNT - 1,
                        Math.floor(currentProgress * FRAME_COUNT)
                    );
                    renderFrame(frameIndex);
                }
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images, scrollYProgress, renderFrame]);

    return (
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212]">
            <canvas
                ref={canvasRef}
                className="block w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none" />
        </div>
    );
}
