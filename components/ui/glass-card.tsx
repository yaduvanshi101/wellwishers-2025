"use client";

import type React from "react";

import {cn} from "@/lib/utils";
import {motion} from "framer-motion";
import {useRef, useState} from "react";

interface GlassCardProps {
    className?: string;
    children: React.ReactNode;
    hoverEffect?: boolean;
    glowEffect?: boolean;
    borderEffect?: boolean;
}

export function GlassCard({
    className,
    children,
    hoverEffect = true,
    glowEffect = true,
    borderEffect = true,
}: GlassCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !glowEffect) return;

        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            className={cn(
                "relative overflow-hidden rounded-xl backdrop-blur-md bg-background/30 dark:bg-background/20 border border-border/50",
                hoverEffect && "transition-all duration-300 hover:shadow-lg",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            whileHover={
                hoverEffect ? {scale: 1.02, transition: {duration: 0.2}} : {}
            }
        >
            {glowEffect && isHovered && (
                <div className="absolute inset-0 opacity-70 transition duration-300 pointer-events-none" />
            )}
            {borderEffect && (
                <div className="absolute inset-0 border border-primary/10 rounded-xl pointer-events-none" />
            )}
            <div className="z-10 relative">{children}</div>
        </motion.div>
    );
}
