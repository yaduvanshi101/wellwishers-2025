"use client";

import type React from "react";
import {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";

interface AnimatedBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    variant?: "grid" | "dots" | "waves";
    color?: string;
    intensity?: "light" | "medium" | "strong";
}

export function AnimatedBackground({
    className,
    children,
    variant = "grid",
    color = "rgba(var(--grid-color), 0.4)",
    intensity = "medium",
}: AnimatedBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});
    const animationRef = useRef<number>(0);

    // Set intensity values
    const intensityValues = {
        light: 0.3,
        medium: 0.6,
        strong: 1,
    };

    const intensityFactor = intensityValues[intensity];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateDimensions = () => {
            if (container) {
                setDimensions({
                    width: container.offsetWidth,
                    height: container.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        let particles: any[] = [];
        let animationFrameId: number;

        const createParticles = () => {
            particles = [];

            if (variant === "grid") {
                const gridSize = 30;
                const numX = Math.ceil(dimensions.width / gridSize);
                const numY = Math.ceil(dimensions.height / gridSize);

                for (let x = 0; x < numX; x++) {
                    for (let y = 0; y < numY; y++) {
                        particles.push({
                            x: x * gridSize,
                            y: y * gridSize,
                            size: 1,
                            originalX: x * gridSize,
                            originalY: y * gridSize,
                            vx: 0,
                            vy: 0,
                        });
                    }
                }
            } else if (variant === "dots") {
                const numParticles =
                    Math.floor((dimensions.width * dimensions.height) / 10000) *
                    intensityFactor;
                for (let i = 0; i < numParticles; i++) {
                    particles.push({
                        x: Math.random() * dimensions.width,
                        y: Math.random() * dimensions.height,
                        size: Math.random() * 2 + 1,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                    });
                }
            } else if (variant === "waves") {
                const numWaves = 3;
                const waveHeight = dimensions.height / 10;
                const waveLength = dimensions.width / 2;

                for (let i = 0; i < numWaves; i++) {
                    particles.push({
                        amplitude: waveHeight * (1 - i * 0.2),
                        wavelength: waveLength * (1 + i * 0.3),
                        speed: 0.02 * (1 + i * 0.1),
                        phase: (i * Math.PI) / 2,
                    });
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (variant === "grid") {
                // Draw grid
                ctx.strokeStyle = color;
                ctx.lineWidth = 0.5;

                for (const p of particles) {
                    // Calculate distance from center for movement
                    const dx = p.x - dimensions.width / 2;
                    const dy = p.y - dimensions.height / 2;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance =
                        Math.sqrt(
                            dimensions.width * dimensions.width +
                                dimensions.height * dimensions.height
                        ) / 2;

                    // Move points slightly based on mouse position and time
                    const time = Date.now() * 0.001;
                    const moveFactor = 5 * intensityFactor;
                    p.x =
                        p.originalX +
                        Math.sin(time * 0.5 + p.originalY * 0.01) *
                            moveFactor *
                            (1 - distance / maxDistance);
                    p.y =
                        p.originalY +
                        Math.cos(time * 0.5 + p.originalX * 0.01) *
                            moveFactor *
                            (1 - distance / maxDistance);

                    // Draw points
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = color;
                    ctx.fill();

                    // Connect nearby points
                    for (const p2 of particles) {
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 40) {
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    }
                }
            } else if (variant === "dots") {
                // Update and draw particles
                for (const p of particles) {
                    p.x += p.vx;
                    p.y += p.vy;

                    // Bounce off edges
                    if (p.x < 0 || p.x > dimensions.width) p.vx *= -1;
                    if (p.y < 0 || p.y > dimensions.height) p.vy *= -1;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = color;
                    ctx.fill();

                    // Connect nearby particles
                    for (const p2 of particles) {
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 100) {
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = color.replace(
                                ")",
                                `, ${1 - dist / 100})`
                            );
                            ctx.stroke();
                        }
                    }
                }
            } else if (variant === "waves") {
                ctx.beginPath();

                const time = Date.now() * 0.001;

                // Draw each wave
                for (let i = 0; i < particles.length; i++) {
                    const wave = particles[i];
                    const yOffset = dimensions.height * 0.5 + i * 30;

                    ctx.beginPath();
                    ctx.moveTo(0, yOffset);

                    for (let x = 0; x < dimensions.width; x += 5) {
                        const y =
                            yOffset +
                            Math.sin(
                                x / wave.wavelength +
                                    time * wave.speed +
                                    wave.phase
                            ) *
                                wave.amplitude;
                        ctx.lineTo(x, y);
                    }

                    ctx.strokeStyle = color.replace(")", `, ${0.3 - i * 0.1})`);
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        createParticles();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [dimensions, variant, color, intensity, intensityFactor]);

    return (
        <div
            ref={containerRef}
            className={cn("relative overflow-hidden", className)}
        >
            <canvas
                ref={canvasRef}
                className="z-0 absolute inset-0"
                style={{width: "100%", height: "100%"}}
            />
            <div className="z-10 relative">{children}</div>
        </div>
    );
}
