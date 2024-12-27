"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-amber-100 via-orange-50 to-white dark:from-amber-900 dark:via-orange-800 dark:to-brown-950">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
      
      <div className="container relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-4"
        >
          <motion.div 
            variants={itemVariants}
            className="flex max-w-[980px] flex-col items-start gap-4"
          >
            <motion.h1 
              className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500"
              variants={itemVariants}
            >
              Hi, I'm Mansi Sharma.<br className="hidden sm:inline" />
              Full Stack Developer & AI Enthusiast.
            </motion.h1>
            
            <motion.p 
              className="max-w-[700px] text-lg text-muted-foreground"
              variants={itemVariants}
            >
              I specialize in building exceptional digital experiences with React, Node.js, and cutting-edge AI technologies.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 mt-4"
              variants={itemVariants}
            >
              <Button 
                asChild 
                className="relative overflow-hidden bg-amber-600 hover:bg-amber-700 text-white transition-transform hover:scale-105"
              >
                <motion.a 
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </motion.a>
              </Button>
              
              <Button 
                variant="outline" 
                asChild
                className="relative overflow-hidden transition-transform hover:scale-105"
              >
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={imageVariants}
            className="relative w-[200px] h-[200px]"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src="/profile.jpeg"
                alt="Mansi Sharma"
                width={200}
                height={200}
                className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg relative z-10"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

