import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Publications } from "@/components/publications"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Blogs } from "@/components/blogs"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blogs />
      <Publications />
      <Testimonials />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  )
}

