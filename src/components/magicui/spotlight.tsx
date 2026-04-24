"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Spotlight({
    className,
    color = "rgba(139, 92, 246, 0.15)", // Subtle purple glow
}: {
    className?: string;
    color?: string;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Set initial position on first move to avoid jump from (0,0)
            if (!isVisible) {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
                setIsVisible(true);
            } else {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY, isVisible]);

    const background = useMotionTemplate`radial-gradient(800px circle at ${x}px ${y}px, ${color}, transparent 80%)`;

    return (
        <motion.div
            className={cn(
                "pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-500",
                isVisible ? "opacity-100" : "opacity-0",
                className
            )}
            style={{ background }}
        />
    );
}
