"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

interface SectionPatternProps {
  className?: string
  children?: React.ReactNode
  variant?: "dots" | "grid" | "waves" | "noise"
  color?: string
  opacity?: number
  inverted?: boolean
}

export function SectionPattern({
  className,
  children,
  variant = "dots",
  color = "currentColor",
  opacity = 0.05,
  inverted = false,
}: SectionPatternProps) {
  const patternRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!patternRef.current) return

    const generatePattern = () => {
      const patternElement = patternRef.current
      if (!patternElement) return

      if (variant === "dots") {
        patternElement.style.backgroundImage = `radial-gradient(${color} 1px, transparent 1px)`
        patternElement.style.backgroundSize = "20px 20px"
      } else if (variant === "grid") {
        patternElement.style.backgroundImage = `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`
        patternElement.style.backgroundSize = "20px 20px"
      } else if (variant === "waves") {
        // SVG wave pattern
        const waveColor = encodeURIComponent(color)
        const waveSvg = `<svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg"><path fill="${waveColor}" d="M0 10 C 30 0, 70 0, 100 10 C 70 20, 30 20, 0 10 Z" opacity="${opacity}"/></svg>`
        patternElement.style.backgroundImage = `url("data:image/svg+xml,${waveSvg}")`
        patternElement.style.backgroundSize = "100px 20px"
      } else if (variant === "noise") {
        // We'll use a CSS filter for noise
        patternElement.classList.add("noise-pattern")
      }

      patternElement.style.opacity = opacity.toString()
    }

    generatePattern()
  }, [variant, color, opacity])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        ref={patternRef}
        className={cn(
          "absolute inset-0 pointer-events-none",
          inverted ? "rotate-180" : "",
          variant === "noise" && "noise-pattern",
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
