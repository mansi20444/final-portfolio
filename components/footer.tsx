"use client"

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-amber-50 via-orange-50 to-white dark:from-amber-950 dark:via-orange-950 dark:to-gray-900">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <motion.p 
            className="text-center text-sm leading-loose md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Built by Mansi Sharma. The source code is available on GitHub.
          </motion.p>
        </div>
        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="https://github.com/mansi20444" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-amber-400 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/mansi-sharma02" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-amber-400 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:mansi.sharma11222001@gmail.com" aria-label="Email" className="text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-amber-400 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

