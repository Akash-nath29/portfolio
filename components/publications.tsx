"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollText, ExternalLink } from 'lucide-react'
import Link from "next/link"

export function Publications() {
  const publications = [
    {
      title: "Sustainable Paperless Examination Device",
      journal: "Intellectual Property India",
      year: "2024",
      link: "https://search.ipindia.gov.in/IPOJournal/Journal",
      description: "Research on improving neural network training efficiency using adaptive learning rates."
    }
    // },
    // {
    //   title: "Deep Learning in Medical Imaging",
    //   journal: "AI in Healthcare Quarterly",
    //   year: "2023",
    //   link: "#",
    //   description: "Implementation of CNN architectures for medical image classification."
    // },
    // {
    //   title: "Efficient Natural Language Processing",
    //   journal: "Computational Linguistics Review",
    //   year: "2022",
    //   link: "#",
    //   description: "Study on optimizing transformer models for resource-constrained environments."
    // }
  ]

  return (
    <section className="py-24 md:px-52">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Publications</h2>
          <div className="grid gap-8">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <ScrollText className="w-5 h-5 text-purple-500" />
                        {publication.title}
                      </div>
                      <Link href={publication.link} className="text-purple-500 hover:text-purple-400">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-2">{publication.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{publication.journal}</span>
                      <span>•</span>
                      <span>{publication.year}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

