"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const skills = [
  { name: "React", level: 90, color: "#61DAFB" },
  { name: "Next.js", level: 85, color: "#000000" },
  { name: "TypeScript", level: 80, color: "#3178C6" },
  { name: "Node.js", level: 85, color: "#339933" },
  { name: "Express.js", level: 80, color: "#000000" },
  { name: "MongoDB", level: 75, color: "#47A248" },
  { name: "PostgreSQL", level: 70, color: "#336791" },
  { name: "GraphQL", level: 65, color: "#E10098" },
  { name: "Docker", level: 60, color: "#2496ED" },
  { name: "AWS", level: 55, color: "#FF9900" },
]

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <section id="skills" className="container py-12 sm:py-16">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Full-Stack Skills
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        style={{
          scale: scaleProgress,
          opacity: opacityProgress
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 glassmorphism hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <motion.div 
              className="flex justify-between items-center mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <span className="text-sm font-medium">{skill.level}%</span>
            </motion.div>
            <div className="w-full bg-amber-200 rounded-full h-2.5 dark:bg-amber-700 overflow-hidden">
              <motion.div
                className="h-2.5 rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 50
                }}
              >
                <motion.div
                  className="h-full w-full opacity-50"
                  animate={{
                    background: [
                      `linear-gradient(90deg, ${skill.color}00 0%, ${skill.color} 50%, ${skill.color}00 100%)`,
                    ],
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

