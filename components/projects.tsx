"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: "ITA ChatBot",
    description: "A Python-based chatbot providing interactive academic assistance to students.",
    challenges: "Integrating quantized models to operate efficiently on standard consumer hardware.",
    solution: "Optimized model architecture and implemented efficient inference techniques.",
    technologies: ["Python", "Machine Learning", "NLP"],
    github: "https://github.com/ankit21311/ITA-ChatBot",
    live: "https://github.com/ankit21311/ITA-ChatBot",
    gif: "/image.png?height=200&width=300",
  },
  {
    title: "Cynthia Ugwu Website Clone",
    description: "A fully responsive clone of Cynthia Ugwu's website, closely replicating design and functionality.",
    challenges: "Achieving pixel-perfect design and smooth animations across all devices.",
    solution: "Utilized Tailwind CSS for responsive design and GSAP for animations.",
    technologies: ["React.js", "Tailwind CSS", "GSAP"],
    github: "https://github.com/mansi20444/cynthia-ugwu-clone",
    live: "https://cynthia-ugwu-clone.vercel.app",
    gif: "/image2.png?height=200&width=300",
  },
  {
    title: "Apple iPhone 15 Pro Website Clone",
    description: "A clone of Apple's iPhone 15 Pro website, focusing on smooth animations and dynamic 3D model rendering.",
    challenges: "Implementing complex animations and 3D model interactions.",
    solution: "Used Three.js for 3D rendering and GSAP for advanced animations.",
    technologies: ["React.js", "Three.js", "GSAP", "Tailwind CSS"],
    github: "https://github.com/mansi20444/apple-website-clone",
    live: "https://iphone-15-pro-clone.vercel.app",
    gif: "/image1.png?height=200&width=300",
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="projects" className="container py-12 sm:py-16 place-items-center">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 place-items-centre"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.02 }}
            className="relative  w-full"
          >
            <Card className="overflow-hidden glassmorphism">
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <motion.h4 
                      className="font-semibold mb-2 text-amber-600 dark:text-amber-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Challenges:
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.challenges}
                    </motion.p>
                    <motion.h4 
                      className="font-semibold mt-4 mb-2 text-amber-600 dark:text-amber-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Solution:
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.solution}
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap gap-2 mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </motion.div>
                  </div>
                  <motion.div 
                    className="flex-1 relative overflow-hidden rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Image
                      src={project.gif}
                      alt={`${project.title} preview`}
                      width={400}
                      height={300}
                      className="rounded-lg ml:8 transition-transform duration-300 transform hover:scale-110 "
                    />
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </CardContent>
              <CardFooter className="justify-between relative z-10">
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild 
                  className="hover:bg-amber-100 dark:hover:bg-amber-900 transition-all duration-300"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </motion.a>
                </Button>
                <Button 
                  size="sm" 
                  asChild 
                  className="bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300"
                >
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </motion.a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

