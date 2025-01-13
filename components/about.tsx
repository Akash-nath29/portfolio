"use client"

import { motion } from "framer-motion"

export function About() {
  const skills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Next.js",
    "React",
    "Numpy",
    "Pandas",
  ]

  return (
    <section id="about" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-400 mb-8">
            I&apos;m a second-year Computer Science and Engineering (AIML) student at <a href="https://jiscollege.ac.in">JIS College of Engineering in Kalyani, West Bengal</a>. 
            My passion lies in developing machine learning models and exploring the frontiers of artificial intelligence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 rounded-lg p-4 text-center"
              >
                <span className="text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

