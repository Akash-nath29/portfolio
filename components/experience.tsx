"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Calendar } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "JIS College of Engineering",
      period: "November 2024 - Present",
      description: [
        "Developing web applications for the college's online learning platform",
        "Implementing and optimizing neural network models for student projects",
        "Publishing research papers on ML optimization techniques"
      ]
    },
    {
      title: "Python Developer Intern",
      company: "Innobyte Services",
      period: "August 2024 - September 2024",
      description: [
        "Developed Python scripts for automating data processing tasks",
        "Learnt about industry best practices in software development"
      ]
    },
    {
      title: "Campus Ambassador",
      company: "Internshala",
      period: "May 2024 - June 2024",
      description: [
        "Promoted Internshala's online training programs in college",
        "Learnt about digital marketing and social media management",
        "Organized workshops on resume building and interview preparation"
      ]
    },
    {
      title: "Founder and President",
      company: "Codasauras Developers' Community",
      period: "May 2024 - Present",
      description: [
        "Hosted coding competitions and hackathons for college students",
        "Learnt leadership and team management skills",
        "Organized workshops on web development and machine learning"
      ]
    },
    {
      title: "Campus Ambassador",
      company: "Wayspire",
      period: "May 2024 - June 2024",
      description: [
        "Promoted Wayspire's online training programs in college",
        "Learnt about digital marketing and social media management",
        "Organized workshops on resume building and interview preparation"
      ]
    }
  ]

  return (
    <section className="py-24 bg-black/50 md:px-52">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="grid gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-purple-500" />
                      {experience.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <span>{experience.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-400">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
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

