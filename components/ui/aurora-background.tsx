"use client";

import {cn} from "@/lib/utils";
import {useEffect, useState, useMemo} from "react";
import type React from "react";

interface AuroraBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    colorMode?: "purple" | "blue" | "green" | "mixed";
    size?: "small" | "medium" | "large";
    blur?: "none" | "sm" | "md" | "lg";
    intensity?: "low" | "medium" | "high";
    animated?: boolean;
}

export function AuroraBackground({
    className,
    children,
    colorMode = "purple",
    size = "medium",
    blur = "md",
    intensity = "medium",
    animated = true,
}: AuroraBackgroundProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial state
        checkMobile();

        // Add resize listener
        window.addEventListener("resize", checkMobile);
        setIsMounted(true);

        // Cleanup
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Define color palettes based on colorMode - memoized to prevent recreation
    const colorPalettes = useMemo(
        () => ({
            purple: [
                "rgba(167, 139, 250, 1)",
                "rgba(205, 132, 241, 1)",
                "rgba(138, 85, 255, 1)",
            ],
            blue: [
                "rgba(56, 189, 248, 1)",
                "rgba(59, 130, 246, 1)",
                "rgba(99, 102, 241, 1)",
            ],
            green: [
                "rgba(52, 211, 153, 1)",
                "rgba(16, 185, 129, 1)",
                "rgba(5, 150, 105, 1)",
            ],
            mixed: [
                "rgba(167, 139, 250, 1)",
                "rgba(56, 189, 248, 1)",
                "rgba(52, 211, 153, 1)",
            ],
        }),
        []
    );

    // Memoize configuration to prevent recalculation
    const config = useMemo(() => {
        // Get colors from palette
        const colors = colorPalettes[colorMode];

        // Define size values - reduce for mobile
        const sizeValues = {
            small: {
                blobSize: isMobile ? "25%" : "30%",
                positionRange: isMobile ? 10 : 20,
            },
            medium: {
                blobSize: isMobile ? "35%" : "40%",
                positionRange: isMobile ? 20 : 30,
            },
            large: {
                blobSize: isMobile ? "45%" : "50%",
                positionRange: isMobile ? 25 : 40,
            },
        };

        const {blobSize, positionRange} = sizeValues[size];

        // Define blur values - reduce blur level for mobile
        const blurValues = {
            none: "blur-none",
            sm: isMobile ? "blur-none" : "blur-sm",
            md: isMobile ? "blur-sm" : "blur-md",
            lg: isMobile ? "blur-md" : "blur-xl",
        };

        const blurClass = blurValues[blur];

        // Define intensity values - reduce opacity for mobile
        const intensityValues = {
            low: isMobile ? 0.1 : 0.15,
            medium: isMobile ? 0.2 : 0.25,
            high: isMobile ? 0.3 : 0.4,
        };

        const opacityValue = intensityValues[intensity];

        // Generate random positions - memoized so they only calculate once
        const positions = [
            {
                top: `${Math.random() * positionRange}%`,
                left: `${Math.random() * positionRange}%`,
            },
            {
                top: `${Math.random() * positionRange}%`,
                right: `${Math.random() * positionRange}%`,
            },
            {
                bottom: `${Math.random() * positionRange}%`,
                left: `${Math.random() * positionRange}%`,
            },
        ];

        // Animation configuration
        // Slower animations for mobile = less rendering work
        const animationConfig = {
            first: isMobile ? "20s" : "15s",
            second: isMobile ? "30s" : "25s",
            third: isMobile ? "25s" : "20s",
            // Fewer blobs on mobile
            showThirdBlob: !isMobile || size === "large",
        };

        return {
            colors,
            blobSize,
            blurClass,
            opacityValue,
            positions,
            animationConfig,
        };
    }, [colorMode, size, blur, intensity, colorPalettes, isMobile]);

    // Only render when needed
    if (!isMounted) {
        return (
            <div className={cn("relative overflow-hidden", className)}>
                <div className="z-10 relative">{children}</div>
            </div>
        );
    }

    const {colors, blurClass, opacityValue, positions, animationConfig} =
        config;

    // For mobile: render a simplified static gradient if not animated
    if (isMobile && !animated) {
        return (
            <div className={cn("relative overflow-hidden", className)}>
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${colors[0]}40 0%, ${colors[1]}30 50%, ${colors[2]}20 100%)`,
                    }}
                />
                <div className="z-10 relative">{children}</div>
            </div>
        );
    }

    return (
        <div className={cn("relative overflow-hidden", className)}>
            <>
                {/* First blob - always rendered */}
                <div
                    className={cn("absolute inset-0", blurClass)}
                    style={{
                        background: `radial-gradient(circle at ${positions[0].top} ${positions[0].left}, ${colors[0]}, transparent 40%)`,
                        opacity: opacityValue,
                        animation: animated
                            ? `aurora-shift ${animationConfig.first} ease infinite alternate`
                            : "none",
                        willChange: animated ? "opacity" : "auto",
                        transform: "translate3d(0,0,0)",
                    }}
                />

                {/* Second blob - always rendered */}
                <div
                    className={cn("absolute inset-0", blurClass)}
                    style={{
                        background: `radial-gradient(circle at ${positions[1].top} ${positions[1].right}, ${colors[1]}, transparent 40%)`,
                        opacity: opacityValue,
                        animation: animated
                            ? `aurora-shift ${animationConfig.second} ease infinite alternate`
                            : "none",
                        animationDelay: "2s",
                        willChange: animated ? "opacity" : "auto",
                        transform: "translate3d(0,0,0)",
                    }}
                />

                {/* Third blob - conditionally rendered based on device */}
                {animationConfig.showThirdBlob && (
                    <div
                        className={cn("absolute inset-0", blurClass)}
                        style={{
                            background: `radial-gradient(circle at ${positions[2].bottom} ${positions[2].left}, ${colors[2]}, transparent 40%)`,
                            opacity: opacityValue,
                            animation: animated
                                ? `aurora-shift ${animationConfig.third} ease infinite alternate`
                                : "none",
                            animationDelay: "4s",
                            willChange: animated ? "opacity" : "auto",
                            transform: "translate3d(0,0,0)",
                        }}
                    />
                )}
            </>
            <div className="z-10 relative">{children}</div>
        </div>
    );
}
