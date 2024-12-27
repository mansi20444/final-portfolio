import Header from '@/components/header'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

