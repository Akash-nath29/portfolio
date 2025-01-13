"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://github.com/Akash-nath29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://www.linkedin.com/in/akash-nath29/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="mailto:devakash2905@gmail.com"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
          <form className="space-y-6" action={"https://formsubmit.co/devakash2905@gmail.com"} method="POST">
          {/* captcha */}
          <Input type="hidden" name="_captcha" value={false} />

          {/* honeypot */}
          <Input type="text" name="_honey" className="hidden" />

            <Input
              placeholder="Your Name"
              className="bg-white/5 border-white/10"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-white/5 border-white/10"
            />
            <Textarea
              placeholder="Your Message"
              className="bg-white/5 border-white/10 min-h-[150px]"
            />
            <Button className="w-full bg-purple-500 hover:bg-purple-600">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

