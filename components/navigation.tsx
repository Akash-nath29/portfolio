"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md px-5 py-3"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold"
          >
            AN
          </motion.div>
          <ul className="flex space-x-8">
            {["About", "Projects", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}

