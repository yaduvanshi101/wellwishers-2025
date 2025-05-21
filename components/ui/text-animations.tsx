"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion, useAnimation, type Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

// Animated Heading Component
interface AnimatedHeadingProps {
  title: string
  className?: string
  variant?: "gradient" | "highlight" | "underline" | "fade" | "slide"
  delay?: number
  once?: boolean
}

export function AnimatedHeading({ title, className, variant = "fade", delay = 0, once = true }: AnimatedHeadingProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const getVariants = (): Variants => {
    switch (variant) {
      case "gradient":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay,
            },
          },
        }
      case "highlight":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay,
            },
          },
        }
      case "underline":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay,
            },
          },
        }
      case "slide":
        return {
          hidden: { x: -50, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay,
            },
          },
        }
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.5,
              delay,
            },
          },
        }
    }
  }

  const renderTitle = () => {
    if (variant === "gradient") {
      return (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
          {title}
        </span>
      )
    }

    if (variant === "highlight") {
      return (
        <span className="relative">
          {title}
          <motion.span
            className="absolute -z-10 bottom-0 left-0 right-0 h-[0.2em] bg-primary/30 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          />
        </span>
      )
    }

    if (variant === "underline") {
      return (
        <span className="relative">
          {title}
          <motion.span
            className="absolute bottom-0 left-0 right-0 h-[0.1em] bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          />
        </span>
      )
    }

    return title
  }

  return (
    <motion.h2 ref={ref} className={cn("", className)} initial="hidden" animate={controls} variants={getVariants()}>
      {renderTitle()}
    </motion.h2>
  )
}

// Typing Text Animation
interface TypingTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TypingText({ text, className, speed = 0.05, delay = 0 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }
    }, speed * 1000)

    return () => clearTimeout(timeout)
  }, [currentIndex, inView, speed, text])

  return (
    <motion.div
      ref={ref}
      className={cn("", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {displayText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        className="inline-block w-[0.1em] h-[1em] bg-primary ml-[0.1em] align-middle"
      />
    </motion.div>
  )
}

// Split Text Animation
interface SplitTextProps {
  text: string
  className?: string
  highlightClassName?: string
  highlight?: string[]
  staggerChildren?: number
  delay?: number
  once?: boolean
}

export function SplitText({
  text,
  className,
  highlightClassName,
  highlight = [],
  staggerChildren = 0.03,
  delay = 0,
  once = true,
}: SplitTextProps) {
  const words = text.split(" ")
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className={cn("mr-[0.25em] mb-[0.25em]", highlight.includes(word) ? highlightClassName : "")}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Reveal Text Animation
interface RevealTextProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  once?: boolean
}

export function RevealText({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
}: RevealTextProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const getVariants = (): Variants => {
    switch (direction) {
      case "down":
        return {
          hidden: { y: -50, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration,
              delay,
            },
          },
        }
      case "left":
        return {
          hidden: { x: 50, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration,
              delay,
            },
          },
        }
      case "right":
        return {
          hidden: { x: -50, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration,
              delay,
            },
          },
        }
      case "up":
      default:
        return {
          hidden: { y: 50, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration,
              delay,
            },
          },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  )
}

// Animated Chars
interface AnimatedCharsProps {
  text: string
  className?: string
  delay?: number
  staggerChildren?: number
  once?: boolean
}

export function AnimatedChars({ text, className, delay = 0, staggerChildren = 0.02, once = true }: AnimatedCharsProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}
