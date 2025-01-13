"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      quote: "Akash Nath, a 2nd-year student at JIS College of Engineering, stands out as a skilled developer with exceptional communication and teamwork abilities. His passion for learning and ability to balance academics with innovation make him a valuable and promising professional.",
      author: "Dr. Monish Mukul Das",
      title: "Assistant Professor, JIS College of Engineering"
    },
    {
      quote: "Akash is an exceptional developer with a keen eye for detail and a knack for problem-solving. Their ability to turn complex ideas into efficient code is truly impressive. I highly recommend them for any development project.",
      author: "Mr. Abhinaba Biswas",
      title: "CEO, NeuraLabs"
    },
    {
      quote: "Akash Nath is a talented aspiring deep learning developer with strong technical skills and a passion for learning. His creative problem-solving and deep understanding of ML concepts enable him to deliver efficient solutions, positioning him for future success.",
      author: "Mr. Subhodip Koley",
      title: "Assistant Professor, JIS College of Engineering"
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
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="pt-6">
                    <Quote className="w-8 h-8 text-purple-500 mb-4" />
                    <p className="text-gray-400 mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
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

