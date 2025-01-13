"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Brain, Terminal } from 'lucide-react'
import { NeuralNetworkBackground } from './neural-network-background'

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -200])
  const aboutRef = useRef<HTMLDivElement>(null)

  // const nameVariants = {
  //   normal: {
  //     fontStyle: "normal",
  //     textDecoration: "none",
  //   },
  //   hovered: {
  //     fontStyle: "italic",
  //     textDecoration: "underline",
  //     transition: {
  //       duration: 0.3,
  //       ease: "easeInOut",
  //     },
  //   },
  // }

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black md:px-20">
        <NeuralNetworkBackground />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y }}
          className="container mx-auto px-6 py-24 relative z-10"
        >
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-bold mb-6"
            >
              Hi, I&apos;m{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-500 inline-block cursor-pointer"
                // variants={nameVariants}
                initial="normal"
                whileHover={{textDecoration: "underline"}}
                // style={{ textDecorationColor: '#9333ea' }}  // This ensures the underline is visible
              >
                Akash
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-8"
            >
              Machine Learning Developer & CS Student
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 text-gray-400"
            >
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Brain className="w-8 h-8" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Code className="w-8 h-8" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Terminal className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToAbout}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </section>
      <div ref={aboutRef} />
    </>
  )
}

