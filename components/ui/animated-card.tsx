"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type React from "react"
import { useState } from "react"

interface AnimatedCardProps {
  className?: string
  children: React.ReactNode
}

export function AnimatedCard({ className, children }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-lg", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  )
}
