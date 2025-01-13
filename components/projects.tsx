"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, GitBranch, LinkIcon } from 'lucide-react'
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Lirify",
      description: "Deep learning model for generating song lyrics",
      icon: Brain,
      link: "https://lirify.vercel.app",
    },
    {
      title: "Multilayer Perceptron from Scratch",
      description: "Implementation of an MLP using NumPy that classifies handwritten digits with 95% accuracy",
      icon: LinkIcon,
      link: "https://github.com/Akash-nath29/MLP_Network_from_scratch",
    },
    {
      title: "Sequence to Sequence Model based chatbot",
      description: "A chatbot that uses an encoder-decoder architecture to generate responses",
      icon: GitBranch,
      link: "https://www.kaggle.com/code/akashnath29/seq2seq-nn-chatbot",
    }
  ]

  return (
    <section id="projects" className="py-24 md:px-52">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors">
                  <CardHeader>
                    <project.icon className="w-6 h-6 mb-4 text-purple-500" />
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Link
                      href={project.link}
                      className="text-purple-500 hover:text-purple-400 text-sm inline-flex items-center"
                    >
                      View Project
                      <LinkIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* <a href="https://github.com/Akash-nath29" className="justify-center items-center">See More</a> */}
    </section>
  )
}

